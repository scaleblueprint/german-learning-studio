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
vm.runInContext(fs.readFileSync(new URL('../dist/curriculum.js',import.meta.url),'utf8'),context);
for(const script of ['lessons.js','a11-chapters-1-3.js','a11-chapters-4-6.js'])vm.runInContext(fs.readFileSync(new URL('../dist/'+script,import.meta.url),'utf8'),context);
vm.runInContext(fs.readFileSync(new URL('../dist/phase5-classroom.js',import.meta.url),'utf8'),context);
vm.runInContext(fs.readFileSync(new URL('../dist/app.js',import.meta.url),'utf8'),context);

function open(hash){location.hash=hash;handlers['window:hashchange']();return root.innerHTML;}
function activeSection(){return root.innerHTML.match(/<button[^>]*class="section-nav-item active"[^>]*>([^<]+)<\/button>/)?.[1];}
function visiblePanes(){return [...root.innerHTML.matchAll(/<section class="view-pane"([^>]*)>/g)].filter(m=>!m[1].includes('hidden')).length;}
function clickRoute(route){handlers['root:click']({target:{closest(){return {disabled:false,dataset:{route},hasAttribute(name){return name==='data-route';}};}}});}

assert.match(root.innerHTML,/id="public-title"/,'Default route opens a distinct public landing page');
assert.match(root.innerHTML,/data-route="student"/,'Public page opens Student Studio');
assert.match(root.innerHTML,/data-route="teacher"/,'Public page opens Teacher Studio');
assert.match(root.innerHTML,/teacher-studio-walkthrough\.mp4/,'Landing page includes the two-role demonstration');
assert.match(root.innerHTML,/class="brand" href="#home"/,'Brand takes the user back to the landing page');
assert.equal(visiblePanes(),0,'Landing page must not display a studio dashboard');
open('#student');
assert.equal(activeSection(),'My progress');
assert.equal(visiblePanes(),1,'Only the selected learning section should be displayed');
assert.match(root.innerHTML,/class="brand-logo" src="\.\/ambertheory-lockup\.jpg"/,'Header uses the canonical AmberTheory lockup');
assert.doesNotMatch(root.innerHTML,/class="brand-mark"/,'AT monogram must not replace the canonical logo');
assert.match(root.innerHTML,/Watch studio walkthrough/,'Student view retains a route to the demo');
assert.match(root.innerHTML,/Kursbuch · Chapters 1–6/,'Student dashboard follows the book');
assert.equal((new Set([...root.innerHTML.matchAll(/data-chapter-overview="(\d+)"/g)].map(x=>x[1]))).size,6,'Student overview previews six textbook chapters without duplicating full content');
assert.match(root.innerHTML,/class="student-chapter-map"/);
assert.match(root.innerHTML,/class="studio-workspace"/);
assert.match(root.innerHTML,/class="section-anchor-list"/);
assert.match(root.innerHTML,/data-route="student\/chapters"/);
assert.doesNotMatch(root.innerHTML,/class="section-nav-item [^\"]*" data-route="student\/practice"/);

open('#home');
assert.match(root.innerHTML,/Discover German/);
assert.match(root.innerHTML,/teacher-studio-walkthrough\.mp4/);
open('#student/chapters');
assert.equal(activeSection(),'My chapters');
assert.equal(visiblePanes(),1);
assert.match(root.innerHTML,/Kursbuch, Arbeitsbuch and Plattform/);
assert.equal((new Set([...root.innerHTML.matchAll(/id="course-chapter-(\d+)"/g)].map(x=>x[1]))).size,6);
assert.equal((root.innerHTML.match(/class="chapter-fold"/g)||[]).length,6,'Each chapter can expand independently');
assert.match(root.innerHTML,/data-jump-target="course-chapter-3"/);
assert.doesNotMatch(root.innerHTML,/Hallo! Nice to meet you/);

open('#student/practice');
assert.equal(activeSection(),'My chapters');
assert.equal(visiblePanes(),1);
assert.match(root.innerHTML,/class="textbook-chapter"/);

open('#exam');
assert.equal(activeSection(),'Exam preparation');
open('#lesson/hello');
assert.match(root.innerHTML,/id="public-title"/,'Outdated sample lesson links are not part of the textbook course');
open('#lesson/'+window.GERMAN_LESSONS.find(l=>l.chapterNumber===1).id);
assert.equal(activeSection(),'My chapters');
assert.match(root.innerHTML,/class="lesson-picker"/);
clickRoute('student');
assert.equal(location.hash,'student/chapters/1','Leaving a lesson should return to its chapter');

for(const [hash,label] of [
  ['#teacher','Overview'],['#teacher/sessions','Chapter planner'],
  ['#teacher/missions','Chapter activities'],['#teacher/exams','Exam coaching'],
  ['#teacher/learners','Learners & reviews'],
]){
  open(hash);
  assert.equal(activeSection(),label,`${hash} should highlight its section`);
  assert.equal(visiblePanes(),1,`${hash} should show only one teacher section`);
}
assert.match(root.innerHTML,/Practice to review/);
assert.match(root.innerHTML,/data-jump-target="teacher-review-queue"/);
assert.match(root.innerHTML,/Content quality & readiness/);
open('#teacher/sessions');
assert.match(root.innerHTML,/Plan your next teaching experience/);
assert.match(root.innerHTML,/data-teacher-chapter="4"/);
assert.doesNotMatch(root.innerHTML,/Kursbuch → Arbeitsbuch → Plattform/);
assert.match(root.innerHTML,/Session Studio/);
assert.match(root.innerHTML,/data-jump-target="teacher-chapter-planner"/);
assert.match(root.innerHTML,/data-jump-target="session-studio"/);
assert.match(root.innerHTML,/class="teacher-curriculum-expand"/);
open('#teacher/missions');
assert.match(root.innerHTML,/Experience Studio/);
open('#teacher');
assert.match(root.innerHTML,/Build a lesson session/);
assert.match(root.innerHTML,/Review learner progress/);
open('#home');
assert.match(root.innerHTML,/id="public-title"/,'Learners and teachers can return to Home');
console.log('Navigation test passed: public home, student and teacher routes, demo visibility, preserved studio workflows.');
