import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const listeners={};
const store=new Map();
const root={innerHTML:'',addEventListener(type,handler){listeners['root:'+type]=handler;}};
const toast={textContent:'',classList:{add(){},remove(){}}};
const location={hash:''};
const win={addEventListener(type,handler){listeners['window:'+type]=handler;},scrollTo(){}};
const context=vm.createContext({
  window:win,location,document:{
    getElementById(id){return id==='app'?root:toast;},
    querySelector(){return {value:'Strong opening. Practise asking one question next.'};}
  },localStorage:{getItem(k){return store.get(k)||null;},setItem(k,v){store.set(k,v);}},
  navigator:{},fetch:async()=>({ok:false}),setTimeout:()=>1,clearTimeout(){},
  confirm:()=>true,CSS:{escape:v=>v},console,
});
for(const name of ['curriculum.js','lessons.js','a11-chapters-1-3.js','a11-chapters-4-6.js','workbook.js','app.js']){
  vm.runInContext(fs.readFileSync(new URL('../dist/'+name,import.meta.url),'utf8'),context);
}
const book=JSON.parse(JSON.stringify(win.GERMAN_WORKBOOK));
assert.equal(book.chapters.length,6);
assert.equal(book.chapters.reduce((n,c)=>n+c.questions.length,0),48);
assert.deepEqual(book.chapters.map(c=>c.questions.length),[8,8,8,8,8,8]);
assert.ok(book.chapters.every(c=>c.writing.length>40&&c.speaking.length>35));
assert.ok(book.chapters.every(c=>new Set(c.questions.map(q=>q.skill)).size===4));
assert.ok(book.chapters.every(c=>c.questions.every(q=>q.options.length===3&&q.correct>=0&&q.correct<3&&q.why.length>20)));
assert.equal(book.teacherValidated,false);

function open(hash){location.hash=hash;listeners['window:hashchange']();return root.innerHTML;}
function click(data){
  const el={dataset:data,disabled:false,hasAttribute(name){return name.startsWith('data-')&&name.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in data;}};
  listeners['root:click']({target:{closest(){return el;}}});
  if(listeners['window:hashchange'])listeners['window:hashchange']();
}
function input(field,value){
  const el={dataset:{workbookDraft:field},value,matches(name){return name==='[data-workbook-draft]';}};
  listeners['root:input']({target:el});
}
let html=open('#student/lessons');
assert.ok(html.includes('data-workbook="1"')&&html.includes('data-workbook="6"'),'All six original A1.1 chapters must have practice');
assert.ok(!html.includes('data-workbook="7"')&&!html.includes('data-workbook="12"'),'A1.2 previews must not launch unverified exercises');
assert.doesNotMatch(html,/A1\.2 · source PDF pending/,'A1.2 previews are removed from the active course');
assert.equal((html.match(/class="textbook-chapter"/g)||[]).length,6,'Six verified book chapters only');
assert.equal((html.match(/class="platform-checkpoint"/g)||[]).length,2,'Textbook reviews after chapters 3 and 6');
html=open('#student/practice');
assert.equal((html.match(/class="workbook-tile"/g)||[]).length,8,'6 chapters + 2 checkpoints');
assert.match(html,/Plattform 1/);
assert.match(html,/Plattform 2/);
click({workbook:'1'});
assert.equal(location.hash,'workbook/1');
assert.match(root.innerHTML,/Listen\. Where does the speaker live\?/);
assert.match(root.innerHTML,/Play German/);
assert.ok(!root.innerHTML.includes('Spoken text:'),'Listening transcript is hidden until answered');
click({workbookChoice:'1'});click({workbookCheck:''});
assert.match(root.innerHTML,/Correct!/);
assert.match(root.innerHTML,/Spoken text:/);
const data=JSON.parse(store.get('ambertheory-german-studio-v1'));
assert.equal(data.workbookProgress['1'].answers['a11-1-q1'].correct,true);
click({workbookNext:''});
assert.match(root.innerHTML,/Select the correct question/);
click({workbookJump:'2'});
assert.match(root.innerHTML,/Which language does Samira speak/);
input('1:writing','Hallo! Ich heiße Mina. Ich wohne in Köln und spreche Deutsch.');
click({workbookSubmit:'1:writing'});
const after=JSON.parse(store.get('ambertheory-german-studio-v1'));
assert.equal(after.workbookSubmissions.length,1);
assert.equal(after.workbookSubmissions[0].kind,'writing');
html=open('#teacher/learners');
assert.match(html,/Chapter practice progress/);
assert.match(html,/Chapter 1 · Writing task/);
const submissionId=after.workbookSubmissions[0].id;
click({review:submissionId});
const marked=JSON.parse(store.get('ambertheory-german-studio-v1'));
assert.equal(marked.reviews[submissionId].note,'Strong opening. Practise asking one question next.');
html=open('#workbook/1');
assert.match(html,/Teacher response:/);
assert.match(html,/Strong opening/);
html=open('#workbook/review-3');
assert.match(html,/Plattform 1 · Revision/);
assert.match(html,/1 of 9/);
html=open('#workbook/review-6');
assert.match(html,/Plattform 2 · Revision/);
assert.match(html,/1 of 9/);
html=open('#student/lessons');
assert.ok(!html.includes('data-workbook="7"'),'A1.2 must remain unimplemented until source supplied');
console.log('Workbook flow passed: 48 original chapter tasks, two checkpoints, navigation, local results, teacher review, A1.2 boundary.');
