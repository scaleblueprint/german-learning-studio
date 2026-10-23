import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const listeners={};
const store=new Map();
const root={innerHTML:'',addEventListener(type,fn){listeners['root:'+type]=fn;}};
const toast={textContent:'',classList:{add(){},remove(){}}};
const loc={hash:''};
const win={addEventListener(type,fn){listeners['window:'+type]=fn;},scrollTo(){}};
const ctx=vm.createContext({
  window:win,location:loc,document:{getElementById(id){return id==='app'?root:toast;},querySelector(){return null;}},
  localStorage:{getItem(k){return store.get(k)||null;},setItem(k,v){store.set(k,v);}},
  navigator:{},fetch:async()=>({ok:false}),setTimeout:()=>1,clearTimeout(){},confirm:()=>true,console
});
for(const script of ['curriculum.js','lessons.js','a11-chapters-1-3.js','a11-chapters-4-6.js','workbook.js','chapter-visuals.js','phase5-classroom.js','app.js']){
  vm.runInContext(fs.readFileSync(new URL('../dist/'+script,import.meta.url),'utf8'),ctx);
}
const open=hash=>{loc.hash=hash;listeners['window:hashchange']();return root.innerHTML;};
const click=data=>{
  const target={dataset:data,disabled:false,hasAttribute(attr){return attr.startsWith('data-')&&attr.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in data;}};
  listeners['root:click']({target:{closest(){return target;}}});
};
const input=(field,value)=>{
  listeners['root:input']({target:{dataset:{sessionBlockField:field},value,matches(selector){return selector==='[data-session-block-field]';}}});
};

let html=open('#student/lessons');
assert.match(html,/Kursbuch → Arbeitsbuch → Plattform/);
assert.equal((new Set([...html.matchAll(/id="course-chapter-(\d+)"/g)].map(x=>x[1]))).size,6);
assert.doesNotMatch(html,/Create chapter session draft/);
assert.doesNotMatch(html,/Hallo! Nice to meet you/,'Unrelated standalone demos are hidden from the course');
assert.match(html,/Greetings in real situations/,'PDF-grounded lessons visible to learner');
assert.doesNotMatch(html,/A1.2 · source PDF pending/,'Unverified A1.2 is excluded from the active course');

html=open('#teacher/sessions');
assert.match(html,/Plan your next teaching experience/);
assert.match(html,/Communication objectives/);
assert.doesNotMatch(html,/Kursbuch → Arbeitsbuch → Plattform/);
assert.equal((html.match(/data-teacher-chapter="/g)||[]).length,6);
click({teacherChapter:'4'});
assert.match(root.innerHTML,/Guten Appetit!/);
assert.match(root.innerHTML,/Arbeitsbuch PDF pp. 116–127/,'Uploaded workbook page reference visible to teacher');
click({startChapterSession:'4'});
assert.match(root.innerHTML,/Build a session, step by step/);
assert.match(root.innerHTML,/Chapter 4 · Guten Appetit!/);
assert.match(root.innerHTML,/Aligned curriculum chapter/);

// New chapter-linked session must remain a teacher draft until published.
click({saveSession:'draft'});
let sessions=JSON.parse(store.get('ambertheory-german-studio-v1')).sessions;
assert.equal(sessions[0].chapterNumber,4);
assert.equal(sessions[0].status,'draft');
html=open('#student/practice');
assert.ok(!html.includes('Chapter 4 · Guten Appetit!'),'Draft stays teacher-only');

// Teacher can reopen the chapter draft and publish once original content is entered.
open('#teacher/sessions');
click({editSession:sessions[0].id});
input('0:entries','der Apfel | the apple');
input('1:phrase','Ich möchte einen Apfel, bitte.');
input('3:starter','Guten Tag! Ich möchte ...');
click({saveSession:'review'});
let pending=JSON.parse(store.get('ambertheory-german-studio-v1')).sessions[0];
click({p5Approve:pending.id});
click({toggleSession:pending.id});
sessions=JSON.parse(store.get('ambertheory-german-studio-v1')).sessions;
assert.equal(sessions[0].status,'published',JSON.stringify(sessions[0].blocks));
assert.equal(sessions[0].chapterNumber,4);
html=open('#student/practice');
assert.match(html,/Chapter 4 · Guten Appetit!/,'Published chapter-tagged session is now assigned');

html=open('#teacher/learners');
assert.match(html,/Content quality & readiness/);
assert.doesNotMatch(html,/Teacher-approved curriculum/);
console.log('Role separation passed: learner path, teacher chapter planner, draft creation, publication and visibility.');
