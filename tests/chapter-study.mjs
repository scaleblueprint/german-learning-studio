import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const ctx=vm.createContext({window:{}});
for(const name of ['a11-chapters-1-3.js','a11-chapters-4-6.js','chapter-study.js']){
 vm.runInContext(fs.readFileSync(new URL('../dist/'+name,import.meta.url),'utf8'),ctx,{filename:name});
}
const lessons=ctx.window.GERMAN_LESSONS;
const chapterStudy=ctx.window.GERMAN_CHAPTER_STUDY;
assert.equal(lessons.length,12,'Only twelve source-scoped A1.1 lessons are needed at runtime');
assert.equal(chapterStudy.data.length,6,'Every verified textbook chapter has an understanding guide');
assert.deepEqual([...chapterStudy.data].map(c=>c.number),[1,2,3,4,5,6]);
for(const chapter of chapterStudy.data){
 const html=chapterStudy.render(chapter.number);
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
assert.match(index,/src="\.\/chapter-study\.js/);
assert.doesNotMatch(index,/src="\.\/lessons\.js"/,'Retired unrelated examples must not enter the public app');
assert.match(app,/GERMAN_CHAPTER_STUDY\?\.render\(ch\.number\)/);
assert.match(app,/data-reading-panel="concept"/);
assert.match(app,/data-reading-panel="situations"/);
assert.match(app,/sidebar-other-chapters/);
console.log('Chapter understanding passed: six chapter introductions, 24 grounded patterns, 12 enriched topic readers and no legacy lesson import.');
