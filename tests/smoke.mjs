import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const listeners = {};
const root = {
  innerHTML:'',
  addEventListener(type, handler){listeners[`root:${type}`]=handler;}
};
const toast={textContent:'',classList:{add(){},remove(){}}};
const storage=new Map();
const builderFields={};
const fakeLocation={hash:''};
const winListeners={};
const fakeWindow={
  addEventListener(type,handler){winListeners[type]=handler;},
  scrollTo(){},
  speechSynthesis:{getVoices(){return[];},cancel(){},speak(){}},
};
const context=vm.createContext({
  window:fakeWindow,
  location:fakeLocation,
  document:{getElementById(id){return id==='app'?root:toast;},querySelector(selector){const match=selector.match(/^\[data-builder-field="([^"]+)"\]$/);return {value:match?(builderFields[match[1]]||''):'Well done — clear and correct.'};}},
  localStorage:{getItem(k){return storage.get(k)||null;},setItem(k,v){storage.set(k,v);}},
  navigator:{},CSS:{escape:v=>v},
  fetch:async()=>({ok:false}),
  setTimeout:()=>1,clearTimeout(){},
  confirm:()=>true,
  SpeechSynthesisUtterance:class{},
  URL,
  console,
});
vm.runInContext(fs.readFileSync(new URL('../dist/lessons.js',import.meta.url),'utf8'),context);
vm.runInContext(fs.readFileSync(new URL('../dist/app.js',import.meta.url),'utf8'),context);

function click(attributes){
  const button={dataset:attributes,disabled:false,hasAttribute(name){return name.slice(5).replace(/-([a-z])/g,(_,l)=>l.toUpperCase()) in attributes;}};
  listeners['root:click']({target:{closest(){return button;}}});
  if(winListeners.hashchange)winListeners.hashchange();
}
function assertHas(fragment){assert.ok(root.innerHTML.includes(fragment),`Expected screen content: ${fragment}`);}

assertHas('Learn German.');
assertHas('Teacher studio');
click({route:'student'});
assertHas('Your learning space');
click({lesson:'hello'});
assertHas('Hallo! Nice to meet you');
click({stage:'understand'});
assertHas('Understand it, word by word');
click({stage:'check'});

for(const choice of [1,2,0]){
  click({choice:String(choice)});
  click({checkAnswer:''});
  assertHas('Correct!');
  click({nextQuestion:''});
}
assertHas('3/3');
click({stage:'apply'});
listeners['root:input']({target:{dataset:{draft:'hello'},value:'Hallo! Ich heiße Praveen.',matches(){return true;}}});
click({submitResponse:'hello'});
assertHas('appears in the Teacher Studio review queue');
click({finishLesson:'hello'});
assertHas('1 of 5 lessons finished');
assertHas('Awaiting review');
click({route:'teacher'});
assertHas('Demo learner');
assertHas('student-mobile-list');
assertHas('student-mobile-row');
assertHas('Experience Studio');
assertHas('Order at a bakery');
assertHas('Hallo! Ich heiße Praveen.');
const submittedIds=JSON.parse(storage.get('ambertheory-german-studio-v1')).submissions;
assert.equal(submittedIds.length,1);
click({review:submittedIds[0].id});
click({route:'student'});
assertHas('Well done — clear and correct.');
assertHas('Practice with a purpose');
click({openExperience:'sample-roleplay'});
assertHas('Try it in your own words');
listeners['root:input']({target:{dataset:{experienceDraft:'sample-roleplay'},value:'Guten Tag! Ich möchte zwei Brötchen, bitte.',matches(selector){return selector==='[data-experience-draft]';}}});
click({submitExperience:'sample-roleplay'});
assertHas('Awaiting feedback');
const missionId=JSON.parse(storage.get('ambertheory-german-studio-v1')).experienceSubmissions[0].id;
click({route:'teacher'});
assertHas('Teacher-created mission');
assertHas('Include a greeting, a polite request and a thank-you.');
click({review:missionId});
click({route:'student'});
click({openExperience:'sample-roleplay'});
assertHas('Teacher note:');
assertHas('Well done — clear and correct.');

click({route:'teacher'});
click({openBuilder:'writing'});
assertHas('Make this experience yours');
Object.assign(builderFields,{title:'A trip to the market',level:'A1',duration:'10',goal:'Practise shopping for fruit in German.',prompt:'Ask the shopkeeper for apples, ask the price, and thank them politely.',example:'Ich hätte gern drei Äpfel, bitte.',criteria:'Use a polite request and a price question.'});
click({saveExperience:'draft'});
const created=JSON.parse(storage.get('ambertheory-german-studio-v1')).experiences[0];
assert.equal(created.status,'draft');
assertHas('A trip to the market');
click({publishExperience:created.id});
assert.equal(JSON.parse(storage.get('ambertheory-german-studio-v1')).experiences[0].status,'published');
click({route:'student'});
assertHas('A trip to the market');
click({openExperience:created.id});
assertHas('Ask the shopkeeper for apples');
click({route:'teacher'});
click({publishExperience:created.id});
assert.equal(JSON.parse(storage.get('ambertheory-german-studio-v1')).experiences[0].status,'draft');
click({route:'sources'});
assertHas('Tatoeba German CC0 sentences');
click({reset:''});
assertHas('Learn German.');
assert.equal(JSON.parse(storage.get('ambertheory-german-studio-v1')).completed.length,0);
console.log('Smoke test passed: lessons, experience builder, draft/publish, learner missions, teacher feedback and reset.');
