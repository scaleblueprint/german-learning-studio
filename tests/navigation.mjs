import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const handlers = {};
const root = {innerHTML:'',addEventListener(event,fn){handlers[`root:${event}`]=fn;}};
const toast = {textContent:'',classList:{add(){},remove(){}}};
const location = {hash:''};
const window = {addEventListener(event,fn){handlers[`window:${event}`]=fn;},scrollTo(){}};
const context = vm.createContext({
  window,location,document:{getElementById(id){return id==='app'?root:toast;}},
  localStorage:{getItem(){return null;},setItem(){}},fetch:async()=>({ok:false}),
  setTimeout:()=>1,clearTimeout(){},navigator:{},console,
});
vm.runInContext(fs.readFileSync(new URL('../dist/lessons.js',import.meta.url),'utf8'),context);
vm.runInContext(fs.readFileSync(new URL('../dist/app.js',import.meta.url),'utf8'),context);

function open(hash){location.hash=hash;handlers['window:hashchange']();return root.innerHTML;}
function activeSection(){return root.innerHTML.match(/<button[^>]*class="section-nav-item active"[^>]*>([^<]+)<\/button>/)?.[1];}
function visiblePanes(){return [...root.innerHTML.matchAll(/<section class="view-pane"([^>]*)>/g)].filter(m=>!m[1].includes('hidden')).length;}
function clickRoute(route){handlers['root:click']({target:{closest(){return {disabled:false,dataset:{route},hasAttribute(name){return name==='data-route';}};}}});}

assert.equal(activeSection(),'Home');
assert.equal(visiblePanes(),1,'Only the selected learning section should be displayed');
assert.match(root.innerHTML,/teacher-studio-walkthrough\.mp4/,'Demo stays on the learning home');
assert.match(root.innerHTML,/data-route="student\/lessons"/);
assert.match(root.innerHTML,/data-route="student\/practice"/);

open('#student/lessons');
assert.equal(activeSection(),'Lessons');
assert.equal(visiblePanes(),1);
assert.match(root.innerHTML,/Your First Steps lessons/);
assert.match(root.innerHTML,/Hallo! Nice to meet you/);

open('#student/practice');
assert.equal(activeSection(),'Practice');
assert.equal(visiblePanes(),1);
assert.match(root.innerHTML,/Practice with a purpose/);
assert.match(root.innerHTML,/Your teacher’s learning sessions/);

open('#exam');
assert.equal(activeSection(),'Exam preparation');
open('#lesson/hello');
assert.equal(activeSection(),'Lessons');
assert.match(root.innerHTML,/class="lesson-picker"/);
clickRoute('student');
assert.equal(location.hash,'student/lessons','Leaving a lesson should return to the lesson list');

for(const [hash,label] of [
  ['#teacher','Overview'],['#teacher/sessions','Sessions'],
  ['#teacher/missions','Missions'],['#teacher/exams','Exam coaching'],
  ['#teacher/learners','Learners & reviews'],
]){
  open(hash);
  assert.equal(activeSection(),label,`${hash} should highlight its section`);
  assert.equal(visiblePanes(),1,`${hash} should show only one teacher section`);
}
assert.match(root.innerHTML,/Practice to review/);
assert.match(root.innerHTML,/Teacher-approved curriculum/);
open('#teacher/sessions');
assert.match(root.innerHTML,/Session Studio/);
open('#teacher/missions');
assert.match(root.innerHTML,/Experience Studio/);
open('#teacher');
assert.match(root.innerHTML,/Build a lesson session/);
assert.match(root.innerHTML,/Review learner progress/);
console.log('Navigation test passed: section routes, current menus, hidden panes, lesson return and preserved content.');
