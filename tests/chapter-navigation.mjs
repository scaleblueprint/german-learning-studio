import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const handlers={};
const seen=[];
const root={innerHTML:'',addEventListener(kind,fn){handlers['root:'+kind]=fn;}};
const toast={textContent:'',classList:{add(){},remove(){}}};
const location={hash:''};
const win={addEventListener(kind,fn){handlers['window:'+kind]=fn;},scrollTo(){}};
const fakeElement=id=>({
 id,tagName:'SECTION',parentElement:null,
 scrollIntoView(){seen.push(id);},
 closest(){return null;}
});
const document={
 getElementById(id){if(id==='app')return root;if(id==='toast')return toast;return fakeElement(id);},
 querySelector(){return null;}
};
const sandbox=vm.createContext({window:win,location,document,localStorage:{getItem(){return null;},setItem(){}},navigator:{},fetch:async()=>({ok:false}),setTimeout:()=>1,clearTimeout(){},confirm:()=>true,console});
const load=name=>vm.runInContext(fs.readFileSync(new URL('../dist/'+name,import.meta.url),'utf8'),sandbox,{filename:name});
for(const name of ['curriculum.js','a11-chapters-1-3.js','a11-chapters-4-6.js','chapter-one-foundations.js','chapter-prerequisites.js','chapter-study.js','chapter-readers.js','workbook.js','phase5-classroom.js','app.js'])load(name);
const open=hash=>{location.hash=hash;handlers['window:hashchange']();return root.innerHTML;};
const click=(data,selector='button')=>{
 const target={dataset:data,disabled:false,hasAttribute(prop){if(!prop.startsWith('data-'))return false;return prop.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in data;}};
 handlers['root:click']({target:{closest(q){return q===selector?target:null;}}});
 return root.innerHTML;
};
let html=open('#student/chapters/4');
assert.match(html,/class="chapter-toolbar"/,'Chapter selector belongs next to the global header');
assert.match(html,/Chapter 4 of 6/);
assert.match(html,/aria-label="Previous chapter" data-chapter-nav="3"/);
assert.match(html,/aria-label="Next chapter" data-chapter-nav="5"/);
assert.equal((html.match(/data-chapter-nav="[1-6]" class=/g)||[]).length,6,'All six chapters remain one-click accessible');
assert.equal((html.match(/class="chapter-fold" open data-chapter-fold=/g)||[]).length,1,'Only the selected chapter is expanded');
assert.match(html,/data-selected-chapter="true" id="course-chapter-4"/);
assert.match(html,/data-chapter-section="chapter-4-foundations"/);
assert.match(html,/data-chapter-section="chapter-reader-4"/);
for(const suffix of ['start','lessons','workbook','teacher','progress'])assert.match(html,new RegExp('id="chapter-4-'+suffix+'"'));
assert.match(html,/id="chapter-reader-4"/);
assert.doesNotMatch(html,/data-chapter-section="chapter-4-platform"/,'Plattform review only after chapters 3 and 6');

click({chapterNav:'5'});
assert.equal(location.hash,'student/chapters/5','Next chapter switches route');
html=open('#student/chapters/5');
assert.match(html,/Chapter 5 of 6/);
assert.match(html,/data-selected-chapter="true" id="course-chapter-5"/);
assert.match(html,/class="chapter-fold" open data-chapter-fold="5"/);

const clickSection=id=>click({chapterSection:id});
clickSection('chapter-5-foundations');
assert.ok(seen.includes('chapter-5-foundations'),'Header contents jump scrolls to the actual section');
clickSection('chapter-5-workbook');
assert.ok(seen.includes('chapter-5-workbook'));
clickSection('chapter-4-foundations');
assert.equal(seen.at(-1),'chapter-5-workbook','Do not jump into the wrong chapter');
handlers['root:toggle']({target:{dataset:{chapterFold:'5'},open:false,matches(q){return q==='[data-chapter-fold]';}}});
html=open('#student/chapters/5');
assert.doesNotMatch(html,/class="chapter-fold" open data-chapter-fold="5"/,'Selected chapter can collapse');
click({chapterNav:'5'});
assert.match(root.innerHTML,/class="chapter-fold" open data-chapter-fold="5"/,'Selected chapter can expand again');

html=open('#student/chapters/1');
assert.match(html,/data-chapter-section="chapter-1-numbers"/);
assert.doesNotMatch(html,/data-chapter-section="chapter-reader-1"/,'Do not link to non-existent reading section');
assert.match(html,/aria-label="Previous chapter" data-chapter-nav="" disabled/);
html=open('#student/chapters/6');
assert.match(html,/data-chapter-section="chapter-6-platform"/);
assert.match(html,/aria-label="Next chapter" data-chapter-nav="" disabled/);
html=open('#lesson/a11-hobbies');
assert.match(html,/Chapter 2 of 6/,'Header tracks the chapter while inside a lesson');
click({chapterSection:'chapter-2-lessons'});
assert.equal(location.hash,'student/chapters/2','Clicking a contents link from a lesson returns to chapter');
open('#student/chapters/2');
assert.ok(seen.includes('chapter-2-lessons'),'Pending contents link scrolls to its section after changing route');
html=open('#workbook/review-3');
assert.match(html,/Chapter 3 of 6/,'Plattform review belongs to Chapter 3');
html=open('#teacher/sessions');
assert.doesNotMatch(html,/class="chapter-toolbar"/,'The student chapter bar does not intrude into Teacher Studio');
console.log('Header chapter navigation passed: 6 chapters, expand/collapse, next/previous, section jumps, lessons, workbook and Teacher Studio isolation.');
