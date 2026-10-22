import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
const listeners={},store=new Map(),root={innerHTML:'',addEventListener(t,f){listeners['root:'+t]=f;}},toast={textContent:'',classList:{add(){},remove(){}}},loc={hash:''},win={addEventListener(t,f){listeners['window:'+t]=f;},scrollTo(){}};
const context=vm.createContext({window:win,location:loc,document:{getElementById(id){return id==='app'?root:toast;},querySelector(){return null;}},localStorage:{getItem(k){return store.get(k)||null;},setItem(k,v){store.set(k,v);}},navigator:{},fetch:async()=>({ok:false}),setTimeout:()=>1,clearTimeout(){},confirm:()=>true,console});
for(const s of ['curriculum.js','lessons.js','a11-chapters-1-3.js','a11-chapters-4-6.js','workbook.js','rich-scenes.js','photo-practice.js','app.js'])vm.runInContext(fs.readFileSync(new URL('../dist/'+s,import.meta.url),'utf8'),context);
const practice=win.GERMAN_PHOTO_PRACTICE;assert.ok(practice);
for(let n=1;n<=6;n++){assert.equal(practice.stats(n).total,2);assert.equal((practice.render(n).match(/class="card photo-practice-card"/g)||[]).length,2);for(let i=0;i<2;i++){const q=practice.get(n,i);assert.equal(q.options.length,3);assert.equal(q.options[q.correct],q.photo.de);assert.match(q.photo.source,/pexels.com\/photo/);}}
const open=hash=>{loc.hash=hash;listeners['window:hashchange']();return root.innerHTML;};
const click=data=>{const b={dataset:data,disabled:false,hasAttribute(name){return name.startsWith('data-')&&name.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in data;}};listeners['root:click']({target:{closest(){return b;}}});};
let h=open('#workbook/1');assert.match(h,/Look · Choose · Say/);assert.equal((h.match(/class="card photo-practice-card"/g)||[]).length,2);
const q=practice.get(1,0);click({photoChoice:'1:0:'+q.correct});click({photoCheck:'1:0'});
let data=JSON.parse(store.get('ambertheory-german-studio-v1'));assert.equal(data.photoPractice['1:0'].correct,true);
h=open('#teacher/sessions');assert.match(h,/Visual practice: 1\/2 scenes tried/);
h=open('#teacher/learners');assert.match(h,/1\/2 photo tasks/);
h=open('#workbook/1');assert.match(h,/Listen to the model/);click({photoRetry:'1:0'});data=JSON.parse(store.get('ambertheory-german-studio-v1'));assert.equal(practice.stats(1,data.photoPractice).answered,0);
h=open('#workbook/review-3');assert.doesNotMatch(h,/class="card photo-practice-card"/);
h=open('#workbook/1');click({workbookJump:'2'});assert.match(root.innerHTML,/Which language does Samira speak/);assert.match(root.innerHTML,/class="workbook-reading"/);assert.match(root.innerHTML,/Ich bin Samira/);assert.doesNotMatch(root.innerHTML,/Listen first\. The transcript appears/);
console.log('Photo & reading regression passed: 12 image tasks, browser progress, teacher report, retry, visible reading passages.');
