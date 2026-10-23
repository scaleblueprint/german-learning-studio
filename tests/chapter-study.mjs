import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const ctx=vm.createContext({window:{}});
for(const name of ['a11-chapters-1-3.js','a11-chapters-4-6.js','chapter-one-foundations.js','chapter-prerequisites.js','chapter-study.js']){
 vm.runInContext(fs.readFileSync(new URL('../dist/'+name,import.meta.url),'utf8'),ctx,{filename:name});
}
const lessons=ctx.window.GERMAN_LESSONS;
const chapterStudy=ctx.window.GERMAN_CHAPTER_STUDY;
const chapterOne=ctx.window.GERMAN_CHAPTER_ONE;
assert.ok(chapterOne,'Chapter 1 must have a standalone numbers and alphabet teaching component');
assert.equal(chapterOne.numbers.length,20,'Students should see every number from 1 through 20');
assert.equal(chapterOne.alphabet.length,26,'Teach the complete A–Z German alphabet before requiring spelling');
assert.equal(chapterOne.numbers[0],'eins');
assert.equal(chapterOne.numbers[11],'zwölf');
assert.equal(chapterOne.numbers[15],'sechzehn');
assert.equal(chapterOne.numbers[16],'siebzehn');
assert.equal(chapterOne.numbers[19],'zwanzig');
const chapterOneHtml=chapterStudy.render(1);
assert.match(chapterOneHtml,/Numbers 1–20/,'Chapter 1 must teach counting before asking for it');
assert.match(chapterOneHtml,/German alphabet/,'Chapter 1 must explicitly teach spelling');
assert.match(chapterOneHtml,/data-jump-target="chapter-1-numbers"/,"Chapter overview must offer a direct jump to number lesson");
assert.match(chapterOneHtml,/data-jump-target="chapter-1-spelling"/,"Chapter overview must offer a direct jump to alphabet lesson");
assert.ok(chapterOneHtml.indexOf('Numbers 1–20')<chapterOneHtml.indexOf('Try it:'),'Number teaching must come before the application prompt');
assert.ok(chapterOneHtml.indexOf('German alphabet')<chapterOneHtml.indexOf('Try it:'),'Letter teaching must come before the spelling prompt');
assert.equal((chapterOneHtml.match(/class="a11-number-digit"/g)||[]).length,20);
assert.equal((chapterOneHtml.match(/class="a11-alphabet-list"/g)||[]).length,1);
assert.equal((chapterOneHtml.match(/aria-label="Hear German letter /g)||[]).length,26);
assert.equal((chapterOneHtml.match(/aria-label="Hear German number /g)||[]).length,20);
assert.doesNotMatch(chapterStudy.render(2),/Numbers 1–20/,'Do not leak Chapter 1 teaching into other chapters');

assert.equal(lessons.length,12,'Only twelve source-scoped A1.1 lessons are needed at runtime');
assert.equal(chapterStudy.data.length,6,'Every verified textbook chapter has an understanding guide');
assert.equal(ctx.window.GERMAN_PREREQUISITES.chapters.length,5,'Chapters 2–6 each need prerequisite teaching');
assert.deepEqual([...chapterStudy.data].map(c=>c.number),[1,2,3,4,5,6]);
for(const chapter of chapterStudy.data){
 const html=chapterStudy.render(chapter.number);
 if(chapter.number>=2){
  assert.match(html,/Learn this before the chapter challenge/,'Chapter '+chapter.number+' must have prerequisites before Try it');
  assert.ok(html.indexOf('Learn this before the chapter challenge')<html.indexOf('Try it:'),'Teaching should precede assessment in chapter '+chapter.number);
  const p=ctx.window.GERMAN_PREREQUISITES.get(chapter.number);
  assert.equal(p.blocks.length,3);
  assert.equal((html.match(/class="a11-prerequisite-block"/g)||[]).length,3);
 }

 assert.ok(chapter.intro.split(/\s+/).length>=20);
 assert.equal(chapter.patterns.length,4,'Include four original real-world language patterns');
 assert.ok(chapter.patterns.every(([de,en,why])=>de.length>15&&en.length>10&&why.length>25));
 assert.match(html,/Start here · Chapter understanding/);
 assert.match(html,/Reveal an original model answer/);
 assert.match(html,/data-speak=/);
 assert.equal(lessons.filter(l=>l.chapterNumber===chapter.number).length,2);
}
const index=fs.readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
const app=fs.readFileSync(new URL('../dist/app.js',import.meta.url),'utf8');
assert.match(index,/src="\.\/chapter-one-foundations\.js/);
assert.match(index,/src="\.\/chapter-study\.js/);
assert.doesNotMatch(index,/src="\.\/lessons\.js"/,'Retired unrelated examples must not enter the public app');
assert.match(app,/GERMAN_CHAPTER_STUDY\?\.render\(ch\.number\)/);
assert.match(app,/data-reading-panel="concept"/);
assert.match(app,/data-reading-panel="situations"/);
assert.match(app,/sidebar-other-chapters/);
console.log('Chapter understanding passed: six chapter introductions, 24 grounded patterns, 12 enriched topic readers and no legacy lesson import.');
