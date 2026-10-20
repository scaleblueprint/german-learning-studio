import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const storage=new Map();
const listeners={};
const appRoot={innerHTML:'',addEventListener(type,handler){listeners[`app:${type}`]=handler;}};
const examRoot={innerHTML:''};
const teacherRoot={innerHTML:''};
const toast={textContent:'',classList:{add(){},remove(){}}};
const location={hash:''};
const fields={};
let timerTick=()=>{};
let fakeNow=Date.now();
class FakeDate extends Date {
  constructor(...args){super(...(args.length?args:[fakeNow]));}
  static now(){return fakeNow;}
}
const fakeForm={querySelector(selector){const key=selector.match(/name="([^"]+)"/)?.[1];return key?{value:fields[key]||''}:null;}};
const document={
  getElementById(id){return {app:appRoot,'exam-root':examRoot,'exam-teacher-root':teacherRoot,toast}[id]||null;},
  querySelector(selector){
    if(selector==='[data-exam-builder]')return fakeForm;
    if(selector.startsWith('[data-exam-feedback='))return {value:'Clear greeting. Practise a fuller closing next time.'};
    if(selector.startsWith('[data-exam-rating='))return {value:'4'};
    return {value:'Correct feedback for the learner.'};
  },
  addEventListener(type,handler){listeners[`document:${type}`]=handler;}
};
const window={
  addEventListener(type,handler){listeners[`window:${type}`]=handler;},scrollTo(){},
  speechSynthesis:{getVoices(){return[];},cancel(){},speak(){}}
};
const context=vm.createContext({window,document,location,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
  navigator:{},CSS:{escape:x=>x},setTimeout:()=>1,clearTimeout(){},setInterval:handler=>{timerTick=handler;return 1;},confirm:()=>true,Date:FakeDate,
  SpeechSynthesisUtterance:class{},fetch:async()=>({ok:false}),URL,console});
for(const name of ['lessons.js','exam-data.js','exam.js','app.js']){
  vm.runInContext(fs.readFileSync(new URL(`../dist/${name}`,import.meta.url),'utf8'),context);
}
const contents=()=>window.GermanExamStudio.renderLearner();
const teacher=()=>window.GermanExamStudio.renderTeacher();
function click(examAction,extras={}){
  const button={dataset:{examAction,...extras},disabled:false};
  listeners['document:click']({target:{closest(selector){return selector==='button[data-exam-action]'?button:null;}}});
}
function assertHas(html,fragment){assert.ok(html.includes(fragment),`Missing: ${fragment}`);}

location.hash='#exam';listeners['window:hashchange']();
assertHas(appRoot.innerHTML,'Practise for the moment that matters');
assertHas(contents(),'Goethe-Institut');
assertHas(contents(),'telc');
assertHas(contents(),'A2');
assertHas(contents(),'Start mini-mock');
assertHas(contents(),'Official Goethe preparation resources');

click('start',{mode:'mock',skill:'all'});
assertHas(contents(),'Task 1 of 10');
assertHas(contents(),'Time remaining');
click('pause');assertHas(contents(),'Practice paused');
click('unpause');assertHas(contents(),'Task 1 of 10');
const correct=[1,0,2,0,0,1,2,2];
for(let i=0;i<8;i++){
  click('jump',{value:String(i)});
  click('answer',{value:String(correct[i])});
}
click('jump',{value:'8'});
listeners['document:input']({target:{dataset:{examText:'g-w1'},value:'Guten Tag! Ich bin krank und komme am Dienstag nicht. Haben Sie die Hausaufgaben? Vielen Dank! Viele Grüße, Mia.'}});
click('jump',{value:'9'});
listeners['document:input']({target:{dataset:{examText:'g-s1'},value:'Ich heiße Mia. Ich komme aus Indien. Ein Wasser, bitte. Was kostet das?'}});
click('submit');
assertHas(contents(),'8/8');
assertHas(contents(),'Teacher review');
assertHas(teacher(),'2 exam responses awaiting review');
assert.equal(JSON.parse(storage.get('ambertheory-german-exams-v1')).attempts.length,1);
const attempt=JSON.parse(storage.get('ambertheory-german-exams-v1')).attempts[0];
click('save-review',{attempt:attempt.id,item:'g-w1'});
assertHas(teacher(),'1 exam responses awaiting review');
assertHas(contents(),'Clear greeting. Practise a fuller closing next time.');

click('home');click('provider',{value:'telc'});
assertHas(contents(),'telc Deutsch A1');
click('start',{mode:'practice',skill:'reading'});
assertHas(contents(),'Task 1 of 4');
click('answer',{value:'1'});
click('submit');
assertHas(contents(),'1/4');
assert.equal(JSON.parse(storage.get('ambertheory-german-exams-v1')).attempts.length,2);

assertHas(teacher(),'Create question');
click('new-item');assertHas(teacher(),'Review & publish');
Object.assign(fields,{provider:'telc',skill:'reading',context:'Train notice',source:'Der Zug nach Köln kommt um 14 Uhr.',question:'When does the train arrive?',option0:'At 12:00',option1:'At 14:00',option2:'At 16:00',answer:'1',explanation:'„Um 14 Uhr“ means at 14:00.'});
click('save-item',{status:'published'});
assertHas(teacher(),'When does the train arrive?');
assertHas(teacher(),'Published');
click('home');click('start',{mode:'practice',skill:'reading'});
assertHas(contents(),'Task 1 of 5');
click('home');
assertHas(contents(),'Unfinished attempt');
click('resume');assertHas(contents(),'Task 1 of 5');

click('start',{mode:'mock',skill:'all'}); // replaces unfinished reading practice after confirmation
fakeNow+=18*60*1000+1000;
timerTick();
assertHas(contents(),'Time is up');
assert.equal(JSON.parse(storage.get('ambertheory-german-exams-v1')).attempts[0].timedOut,true);
window.GermanExamStudio.reset();
assert.equal(JSON.parse(storage.get('ambertheory-german-exams-v1')).attempts.length,0);

console.log('Exam test passed: both providers, level availability, A1 mock, timer pause/expiry, scoring, local history, teacher review, authoring, resume and reset.');
