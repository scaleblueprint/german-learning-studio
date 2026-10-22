import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
// End-to-end same-browser smoke test of the source-aligned student and teacher journeys.
const listeners={},storage=new Map();
const root={innerHTML:'',addEventListener(type,handler){listeners['root:'+type]=handler;}};
const toast={textContent:'',classList:{add(){},remove(){}}};
const location={hash:''};
const win={addEventListener(type,handler){listeners['window:'+type]=handler;},scrollTo(){},
  speechSynthesis:{getVoices(){return [];},cancel(){},speak(){}}};
const inputs=new Map();
const ctx=vm.createContext({
  window:win,location,document:{
    getElementById(id){return id==='app'?root:toast;},
    querySelector(selector){return {value:inputs.get(selector)||'Good effort. Practise the key word again.',disabled:false,scrollIntoView(){}};}
  },
  localStorage:{getItem(k){return storage.get(k)||null;},setItem(k,v){storage.set(k,v);}},
  navigator:{},CSS:{escape:x=>x},fetch:async()=>({ok:false}),
  confirm:()=>true,setTimeout:()=>1,clearTimeout(){},console,URL,
  SpeechSynthesisUtterance:class{}
});
for(const name of ['curriculum.js','lessons.js','a11-chapters-1-3.js','a11-chapters-4-6.js','workbook.js','chapter-visuals.js','rich-scenes.js','learning-objects.js','app.js']){
  vm.runInContext(fs.readFileSync(new URL('../dist/'+name,import.meta.url),'utf8'),ctx);
}
function open(hash){location.hash=hash;listeners['window:hashchange']();return root.innerHTML;}
function click(data){
  const button={dataset:data,disabled:false,hasAttribute(name){return name.startsWith('data-')&&name.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in data;}};
  listeners['root:click']({target:{closest(){return button;}}});
  listeners['window:hashchange']();
}
const assertHas=fragment=>assert.ok(root.innerHTML.includes(fragment),'Expected '+fragment);
assertHas('Discover German.');
assertHas('teacher-studio-walkthrough.mp4');
let html=open('#student/lessons');
assert.equal((new Set([...html.matchAll(/id="course-chapter-(\d+)"/g)].map(x=>x[1]))).size,6);
assert.ok(html.includes('data-workbook="review-3"')&&html.includes('data-workbook="review-6"'));
assert.doesNotMatch(html,/Hallo! Nice to meet you|Everyday independence/);
assertHas('Guten Appetit!');
assertHas('Arbeitsbuch PDF pp. 116–127');
assert.match(html,/real-photo-gallery/);
assert.match(html,/Photo: <a href=/);
assert.match(html,/images.pexels.com/);
assert.match(html,/city|City|places/i);
click({lesson:win.GERMAN_LESSONS.find(x=>x.chapterNumber===1).id});
assertHas('A1.1 · Chapter 1');
assertHas('lesson-topic-visual');
assertHas('Real places, people and everyday situations');
assertHas('real-context-photo');
click({stage:'understand'});assertHas('Understand it, word by word');
assertHas('Six ways to use this chapter language');
assertHas('example-language-card');
assertHas('lesson-visual-object');
click({stage:'check'});assertHas('QUESTION 1 OF');
const first=win.GERMAN_LESSONS.find(x=>x.chapterNumber===1),answer=first.questions[0].correct;
click({choice:String(answer)});click({checkAnswer:''});assertHas('Correct!');
html=open('#teacher/sessions');
assertHas('Plan your next teaching experience');
assertHas('teacher-chapter-report');
assert.equal((html.match(/data-teacher-chapter="/g)||[]).length,6);
click({teacherChapter:'3'});assertHas('In der Stadt');
click({startChapterAssessment:'3'});
assertHas('Chapter 3 · In der Stadt · Assessment');
assertHas('Final assessment');
click({saveSession:'published'});
let saved=JSON.parse(storage.get('ambertheory-german-studio-v1'));
const session=saved.sessions.find(x=>x.chapterNumber===3&&x.status==='published');
assert.ok(session,'Chapter assessment must be published with chapter ID');
assert.equal(session.blocks.filter(b=>['quiz','assessment'].includes(b.type)).length,2);
assertHas('Chapter 3 · In der Stadt · Assessment');
html=open('#student/practice');
assertHas('Chapter 3 · In der Stadt · Assessment');
click({openSession:session.id});assertHas('Listen and repeat');
click({completeSessionBlock:session.blocks[0].id});
assertHas('Grammar check');
click({sessionChoice:String(session.blocks[1].correct)});
click({checkSessionAnswer:session.blocks[1].id});
assertHas('Correct');
saved=JSON.parse(storage.get('ambertheory-german-studio-v1'));
assert.equal(saved.sessionProgress[session.id].answers[session.blocks[1].id].correct,true);
html=open('#teacher/sessions');click({teacherChapter:'3'});
assertHas('Session answers correct');assertHas('1/1');
assertHas('Edit →');
click({route:'student/lessons'});
click({lesson:win.GERMAN_LESSONS.find(x=>x.chapterNumber===5).id});
click({stage:'understand'});assertHas('Clock showing');assertHas('halb acht');
click({route:'student/lessons'});
html=open('#student/lessons');
assert.match(html,/Kapitel/);
assert.ok(html.indexOf('Guten Tag!')<html.indexOf('Freunde, Kollegen und ich'));
assert.ok(html.indexOf('In der Stadt')<html.indexOf('Plattform 1'));
assert.ok(html.indexOf('Plattform 1')<html.indexOf('Guten Appetit!'));
assert.ok(html.indexOf('Zeit mit Freunden')<html.indexOf('Plattform 2'));
console.log('Textbook smoke passed: six illustrated chapters, Plattform order, teacher assessment creation, learner scoring and chapter tracking.');
