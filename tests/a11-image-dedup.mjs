/* Image inventory regression: one photographic role per A1.1 lesson chapter. */
import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const read=p=>fs.readFileSync(p,'utf8');
const win={};
vm.runInNewContext(read('dist/rich-scenes.js'),{window:win});
const chapters=win.GERMAN_RICH_SCENES.data.chapters;
const urls=[];
for(let n=1;n<=6;n++){
  const chapter=chapters[n]||[];
  assert.equal(chapter.length,3,'Each chapter needs three distinct contextual photographs: '+n);
  for(const photo of chapter){
    assert.ok(photo.src&&photo.source&&photo.alt&&photo.credit,'Missing photo source or accessibility data');
    urls.push(photo.src.split('?')[0]);
  }
}
assert.equal(new Set(urls).size,urls.length,'Duplicated contextual photograph URL across A1.1 chapters');
const app=read('dist/app.js');
assert.ok(!app.includes('realPhotos(ch.number,{compact:true,heading:false})'),'Chapter header duplicates photo gallery');
assert.ok(!app.includes('realPhotos(unit.number,{compact:true,heading:false})'),'Workbook header duplicates gallery');
assert.ok(!app.includes('realPhotos(l.chapterNumber)'),'Lesson header duplicates gallery');
const story=read('dist/a11-storyboards.js');
assert.ok(!story.includes('photoMarkup=photo?'),'Storyboards must not repeat photo gallery');
for(let n=1;n<=6;n++)assert.ok(story.includes('  '+n+':'), 'Original chapter-specific illustration missing: '+n);
assert.ok(!read('dist/photo-practice.js').includes('esc(p.src)'), 'Workbook repeats chapter photo asset');
const ext=read('dist/a11-visual-extensions.js');
assert.ok(ext.includes('const photoByExactTerm={};'),'Context photos must not be repeated in vocabulary cards');
console.log('PASS: 18 unique credited chapter photos and distinct chapter storyboard/workbook illustrations.');
