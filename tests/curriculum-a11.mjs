import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source=JSON.parse(fs.readFileSync(new URL('../dist/data/netzwerk-a1-1-uploaded-reference.json',import.meta.url),'utf8'));
const archivedOriginal=JSON.parse(fs.readFileSync(new URL('../dist/data/netzwerk-a1-reference.json',import.meta.url),'utf8'));
const archivedNeu=JSON.parse(fs.readFileSync(new URL('../dist/data/netzwerk-neu-a1-reference.json',import.meta.url),'utf8'));
const ctx=vm.createContext({window:{}});
for(const path of ['curriculum.js','lessons.js','a11-chapters-1-3.js','a11-chapters-4-6.js']){
  vm.runInContext(fs.readFileSync(new URL('../dist/'+path,import.meta.url),'utf8'),ctx);
}
const active=JSON.parse(JSON.stringify(ctx.window.GERMAN_CURRICULUM));
const lessons=JSON.parse(JSON.stringify(ctx.window.GERMAN_LESSONS));
const originals=lessons.filter(l=>l.chapterNumber>=1&&l.chapterNumber<=6);

assert.equal(source.pdfSourceIndex.pageCount,166);
assert.equal(source.pdfSourceIndex.pages.length,166);
assert.deepEqual(source.pdfSourceIndex.pages.map(p=>p.pdfPage),Array.from({length:166},(_,i)=>i+1));
assert.equal(source.edition.series,'Netzwerk');
assert.equal(active.id,source.id);
assert.deepEqual(active.chapters,source.chapters,'Both studio views must use exactly the uploaded A1.1 chapter source');
assert.equal(active.chapters.length,12);
assert.deepEqual(active.chapters.slice(0,6).map(c=>c.title),['Guten Tag!','Freunde, Kollegen und ich','In der Stadt','Guten Appetit!','Tag für Tag','Zeit mit Freunden']);
assert.equal(active.chapters.slice(0,6).every(c=>c.chapterPdfAvailable&&!c.teacherValidated),true);
assert.equal(active.chapters.slice(6).every(c=>!c.chapterPdfAvailable&&c.releaseStatus==='mapped-outline-only'),true);
assert.equal(lessons.length,17,'Do not remove five existing prototype lessons');
assert.equal(new Set(lessons.map(l=>l.id)).size,17,'Every lesson must have its own stable ID');
assert.equal(originals.length,12,'Two original guided lessons per uploaded A1.1 chapter');
for(let chapter=1;chapter<=6;chapter++){
 const tasks=originals.filter(x=>x.chapterNumber===chapter);
 assert.equal(tasks.length,2);
 const ref=active.chapters[chapter-1].sourcePages;
 assert.ok(ref.coursebookPdfStart<ref.coursebookPdfEnd);
 assert.ok(ref.workbookPdfStart<ref.workbookPdfEnd);
 for(const task of tasks){
  assert.ok(task.scene.length>80,'Lesson should have contextual setup');
  assert.ok(task.theorySections.length===2&&task.theorySections.every(x=>x.body.split(/\s+/).length>=45),'Require substantive original explanations');
  assert.ok(task.words.length>=8);
  assert.ok(task.dialogue.length>=4);
  assert.equal(task.questions.length,4);
  assert.ok(task.questions.every(q=>q.options.length===3&&q.correct>=0&&q.correct<=2&&q.why.length>30));
  assert.ok(task.sourcePdfPages[0]>=ref.coursebookPdfStart&&task.sourcePdfPages[1]<=ref.coursebookPdfEnd);
 }
}
assert.equal(archivedOriginal.edition.series,'Netzwerk');
assert.equal(archivedNeu.edition.series,'Netzwerk neu');
assert.notEqual(active.id,archivedNeu.id,'Never silently mix textbook editions');
assert.equal(source.sourceReview.limitation.includes('A1.1 only'),true);
console.log('A1.1 verified: 166 scanned pages, six chapters, 12 original guided lessons, source links, archived editions and teacher-review boundaries.');
