import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const storage=new Map();
const createApp=()=>{
 const listeners={};
 const root={innerHTML:'',addEventListener(type,fn){listeners['root:'+type]=fn;}};
 const toast={textContent:'',classList:{add(){},remove(){}}};
 const location={hash:''};
 const window={addEventListener(type,fn){listeners['window:'+type]=fn;},scrollTo(){}};
 const context=vm.createContext({window,location,document:{getElementById(id){return id==='app'?root:id==='toast'?toast:null;},querySelector(){return null;}},localStorage:{getItem(k){return storage.get(k)||null;},setItem(k,v){storage.set(k,v);}},navigator:{},fetch:async()=>({ok:false}),setTimeout:()=>1,clearTimeout(){},confirm:()=>true,console});
 const source=name=>fs.readFileSync(new URL('../dist/'+name,import.meta.url),'utf8');
 for(const name of ['curriculum.js','a11-chapters-1-3.js','a11-chapters-4-6.js','chapter-study.js','chapter-readers.js','workbook.js','chapter-visuals.js','phase5-classroom.js','app.js'])vm.runInContext(source(name),context,{filename:name});
 return {window,root,storage,open(hash){location.hash=hash;listeners['window:hashchange']();return root.innerHTML;},click(fields){const target={dataset:fields,disabled:false,hasAttribute(key){return key.startsWith('data-')&&key.slice(5).replace(/-([a-z])/g,(_,char)=>char.toUpperCase()) in fields;}};listeners['root:click']({target:{closest(){return target;}}});return root.innerHTML;}};
};
const app=createApp();
const reader=app.window.GERMAN_CHAPTER_READERS;
const data=reader.data;
assert.equal(data.edition,'Original Netzwerk A1.1');
assert.deepEqual(Array.from(data.chapters,c=>c.number),[2,3,4,5,6]);
assert.deepEqual(Array.from(data.chapters,c=>c.topics.length),[5,5,5,5,5]);
const curriculum=app.window.GERMAN_CURRICULUM.chapters;
for(const c of data.chapters){
 const source=curriculum[c.number-1].sourcePages;
 assert.equal(c.coursebook[0],source.coursebookPdfStart);
 assert.equal(c.coursebook[1],source.coursebookPdfEnd);
 assert.equal(c.workbook[0],source.workbookPdfStart);
 assert.equal(c.workbook[1],source.workbookPdfEnd);
 for(const t of c.topics){
  assert.match(t.id,/^c[2-6]-[a-z-]+$/);
  assert.ok(t.explain.split(/\s+/).length>=73,'Require substantive original textbook-topic explanation: '+t.id);
  assert.equal(t.examples.length,3);
  assert.ok(t.examples.every(([de,en,why])=>de.length>10&&en.length>8&&why.length>12));
  assert.equal(t.check.options.length,3);
  assert.ok(t.check.correct>=0&&t.check.correct<3);
  assert.ok(t.check.why.length>=25);
  assert.ok(t.mistake.length>=25);
 }
 const html=reader.render(c.number,{});
 assert.match(html,/Read the chapter in depth/);
 assert.match(html,/Worked|examples/);
 assert.equal((html.match(/class="reader-topic" /g)||[]).length,5);
 assert.equal(reader.stats(c.number,{}).answered,0);
}
assert.equal(reader.render(1,{}),'','No source expansion for Chapter 1 here');
assert.equal(reader.chapter(7),undefined,'Do not activate unavailable A1.2 Chapter 7');
let html=app.open('#student/chapters/2');
assert.match(html,/Read the chapter in depth/);
assert.match(html,/data-reader-choice="c2-hobbies\|/);
const item=reader.getTopic('c2-hobbies');
const correct=item.check.correct;
html=app.click({readerChoice:'c2-hobbies|'+correct});
assert.match(html,/Correct/);
const state=JSON.parse(storage.get('ambertheory-german-studio-v1'));
assert.equal(state.chapterReaderProgress['c2-hobbies'].correct,true);
assert.match(html,/1\/5 tried/);
app.click({readerRetry:'c2-hobbies'});
assert.equal(JSON.parse(storage.get('ambertheory-german-studio-v1')).chapterReaderProgress['c2-hobbies'],undefined);
app.click({readerChoice:'c2-hobbies|'+correct});
html=app.open('#teacher/sessions');
html=app.click({teacherChapter:'2'});
assert.match(html,/Read the chapter in depth/,'Teacher should see the same textbook-aligned chapter reader after selecting Chapter 2');
assert.equal(createApp().window.GERMAN_CHAPTER_READERS.stats(2,JSON.parse(storage.get('ambertheory-german-studio-v1')).chapterReaderProgress).answered,1);
console.log('Chapter readers passed: 5 verified chapters, 25 independent topic explanations/checks, saved answers and shared teacher view.');
