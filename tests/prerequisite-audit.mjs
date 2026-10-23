import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const read=name=>fs.readFileSync(new URL('../dist/'+name,import.meta.url),'utf8');
const ctx=vm.createContext({window:{}});
for(const name of ['curriculum.js','a11-chapters-1-3.js','a11-chapters-4-6.js','chapter-one-foundations.js','chapter-prerequisites.js','chapter-study.js','workbook.js','phase3-scene-labs.js','phase4-audio-labs.js'])
  vm.runInContext(read(name),ctx,{filename:name});

const curriculum=ctx.window.GERMAN_CURRICULUM.chapters;
const lessons=ctx.window.GERMAN_LESSONS;
const guide=ctx.window.GERMAN_CHAPTER_STUDY;
const foundations=ctx.window.GERMAN_PREREQUISITES;
const wb=ctx.window.GERMAN_WORKBOOK.chapters;
const phase3=ctx.window.GERMAN_PHASE3.data;
const audio=ctx.window.GERMAN_AUDIO_LABS.data;

assert.equal(curriculum.filter(c=>c.chapterPdfAvailable).length,6,'Only six uploaded A1.1 chapters can be active');
assert.equal(wb.length,6);
assert.equal(wb.reduce((sum,c)=>sum+c.questions.length,0),48);
assert.equal(lessons.length,12);
assert.equal(foundations.chapters.length,5);
assert.deepEqual(Array.from(foundations.chapters,c=>c.n),[2,3,4,5,6]);
assert.equal(ctx.window.GERMAN_CHAPTER_ONE.numbers.length,20);

const keys={
  2:['numbers','calendar','conjugation'],
  3:['articles','map','vowels'],
  4:['quantities','accusative','shop-vowels'],
  5:['clocks','modals','phone'],
  6:['dates','pronouns','sounds']
};
const teaching={
  2:/einundzwanzig|zweiunddreißig|hundert/,
  3:/long|short|vowels/i,
  4:/ein Kilo|Packung|Käse/,
  5:/Verspätung|wollen|halb/,
  6:/einundzwanzigsten|für dich|Freunde/
};
let worked=0;
for(let n=1;n<=6;n++){
 const c=curriculum[n-1], practice=wb[n-1];
 assert.equal(practice.number,n,'Workbook must follow the source chapter');
 assert.ok(c.chapterPdfAvailable,'A1.1 source required');
 assert.ok(c.sourcePages.coursebookPdfStart>0&&c.sourcePages.workbookPdfEnd<=166);
 const html=guide.render(n);
 assert.match(html,/Try it:/,'Each chapter has an application exercise');
 assert.equal(lessons.filter(l=>l.chapterNumber===n).length,2);
 assert.equal(practice.questions.length,8);
 for(const q of practice.questions){
   assert.equal(q.options.length,3);
   assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<3);
   assert.ok(q.why.length>=25);
 }
 if(n===1){
   assert.ok(html.indexOf('Numbers 1–20')<html.indexOf('Try it:'));
   assert.ok(html.indexOf('German alphabet')<html.indexOf('Try it:'));
   continue;
 }
 const part=foundations.get(n);
 assert.deepEqual(Array.from(part.blocks,b=>b.key),keys[n],`Chapter ${n} must explicitly cover prerequisites`);
 assert.equal(part.blocks.length,3);
 assert.ok(teaching[n].test(part.blocks.map(b=>b.text+' '+b.examples.join(' ')).join(' ')),`Chapter ${n} must teach the scoped missing skill`);
 assert.ok(html.indexOf(part.blocks[0].title)>=0);
 assert.ok(html.indexOf(part.blocks[2].title)<html.indexOf('Try it:'),`Chapter ${n} prerequisites must appear before final prompt`);
 assert.equal((html.match(/class="a11-prerequisite-block"/g)||[]).length,3,`Chapter ${n} fully expanded reading blocks`);
 for(const block of part.blocks){
  assert.ok(block.text.split(/\s+/).length>=80,'No brief prompt-like explanation: '+block.key);
  assert.ok(block.examples.length>=3,'Worked sentence examples required');
  assert.ok(block.examples.every(([de,en])=>de.length>10&&en.length>9));
  assert.ok(block.task.length>20&&block.answer.length>4,'Do not ask without providing a worked check');
  assert.match(html,new RegExp('ch'+n+'-foundation-'+block.key));
  worked+=block.examples.length;
 }
}
assert.ok(worked>=60,'Minimum 60 newly taught original worked examples');

const chapter2=wb[1],chapter3=wb[2],chapter4=wb[3];
assert.doesNotMatch(chapter2.questions[2].audio,/können spazieren/,'Avoid testing Chapter 5 modal in Chapter 2');
assert.match(chapter3.questions[4].audio,/Die Schule ist links/,'The answer must be explicitly in the evidence');
assert.equal(chapter3.questions[4].options[chapter3.questions[4].correct],'On the left');
assert.doesNotMatch(chapter3.questions[6].audio,/Vom Bahnhof|neben der/,'Do not require untaught dative location constructions');
assert.match(chapter4.questions[4].prompt,/bread roll/,'Brötchen must not be mistranslated as sandwich');
assert.match(phase3['a11-city-places'].scenes[1].model,/Das ist ein Bahnhof/,'Do not introduce accusative einen before Chapter 4');
assert.match(phase3['a11-city-places'].scenes[2].model,/Hier ist keine Bank/);
assert.doesNotMatch(audio['a11-hobbies'].questions[0].audio,/muss ich/,'No unexplained modal in Chapter 2 audio');
assert.doesNotMatch(audio['a11-city-places'].questions[1].audio,/keinen Bahnhof/,'No unexplained accusative negative article in Chapter 3 audio');
const index=read('index.html');
assert.match(index,/src="\.\/chapter-prerequisites\.js/);
assert.ok(index.indexOf('chapter-prerequisites.js')<index.indexOf('chapter-study.js'),'Dependencies loaded before the study guide');
console.log('All six A1.1 chapters passed: prerequisites before assessment, 15 substantive teaching blocks, '+worked+' worked examples, 48 workbook checks, scope-safe audio and scenes.');
