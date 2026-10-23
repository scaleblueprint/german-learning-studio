import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const win={},ctx=vm.createContext({window:win});
for(const s of ['rich-scenes.js','learning-objects.js','depth-guides.js','photo-practice.js'])vm.runInContext(fs.readFileSync(new URL('../dist/'+s,import.meta.url),'utf8'),ctx);
const guides=win.GERMAN_DEPTH_GUIDES,ids=Object.keys(guides.data);
assert.equal(ids.length,12);
for(const id of ids){
 const d=guides.data[id];
 assert.equal(d.steps.length,3);
 assert.ok(d.steps.every(s=>s.length===4&&s[1].split(/\s+/).length>=20&&s[2].length>=10));
 assert.equal(d.mistake.length,3);
 assert.deepEqual([...d.order].sort((a,b)=>a-b),Array.from(d.bank,(_,i)=>i));
 assert.equal(d.order.map(i=>d.bank[i]).join(' '),d.answer);
 assert.ok(guides.valid(id,d.order));
 assert.match(guides.render(id),/Sentence lab/);
 assert.equal((guides.render(id).match(/class="depth-worked-card"/g)||[]).length,3);
}
assert.match(guides.data['a11-daily-time'].steps[0][1],/halb acht/);
assert.match(win.GERMAN_LEARNING_OBJECTS.render('a11-food-shops'),/eine Packung Milch/);
for(let n=1;n<=6;n++){const q=win.GERMAN_PHOTO_PRACTICE.get(n,0),phrases=win.GERMAN_RICH_SCENES.data.chapters[n].map(p=>p.de);assert.ok(q.options.every(s=>phrases.includes(s)));}
const handles={},storage=new Map(),root={innerHTML:'',addEventListener(t,f){handles['root:'+t]=f;}},toast={textContent:'',classList:{add(){},remove(){}}},loc={hash:''},browser={...win,addEventListener(t,f){handles['window:'+t]=f;},scrollTo(){}};
const app=vm.createContext({window:browser,location:loc,document:{getElementById(id){return id==='app'?root:toast;},querySelector(){return null;}},localStorage:{getItem(k){return storage.get(k)||null;},setItem(k,v){storage.set(k,v);}},navigator:{},fetch:async()=>({ok:false}),setTimeout:()=>1,clearTimeout(){},confirm:()=>true,console});
for(const s of ['curriculum.js','lessons.js','a11-chapters-1-3.js','a11-chapters-4-6.js','workbook.js','chapter-visuals.js','rich-scenes.js','learning-objects.js','depth-guides.js','photo-practice.js','phase5-classroom.js','app.js'])vm.runInContext(fs.readFileSync(new URL('../dist/'+s,import.meta.url),'utf8'),app,{filename:s});
const open=h=>{loc.hash=h;handles['window:hashchange']();return root.innerHTML;};
const click=data=>{const b={dataset:data,disabled:false,hasAttribute(n){return n.startsWith('data-')&&n.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in data;}};handles['root:click']({target:{closest(){return b;}}});handles['window:hashchange']();};
let html=open('#teacher/sessions');assert.match(html,/Same teaching content in both studios/);assert.match(html,/data-preview-guided="a11-greetings"/);
click({previewGuided:'a11-greetings'});assert.equal(loc.hash,'lesson/a11-greetings');assert.match(root.innerHTML,/Return to Teacher Studio/);assert.match(root.innerHTML,/Sentence lab/);
for(const i of browser.GERMAN_DEPTH_GUIDES.data['a11-greetings'].order)click({depthToken:'a11-greetings:'+i});
click({depthCheck:'a11-greetings'});assert.match(root.innerHTML,/Correct sentence!/);
assert.equal(JSON.parse(storage.get('ambertheory-german-studio-v1')).depthProgress['a11-greetings'].bestCorrect,true);
click({depthRetry:'a11-greetings'});assert.match(root.innerHTML,/Clear words/);
html=open('#teacher/sessions');assert.match(html,/Worked sentence labs: 1\/2 tried/);
console.log('Phase 2 passed: 12 original shared guides, 36 worked steps, 12 interactive sentence labs, teacher preview, stored progress and chapter-only photo distractors.');
