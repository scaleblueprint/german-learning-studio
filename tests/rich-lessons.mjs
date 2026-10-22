import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const ctx=vm.createContext({window:{}});
for(const filename of ['rich-scenes.js','learning-objects.js']){
  vm.runInContext(fs.readFileSync(new URL('../dist/'+filename,import.meta.url),'utf8'),ctx,{filename});
}
const rich=ctx.window.GERMAN_RICH_SCENES;
const objects=ctx.window.GERMAN_LEARNING_OBJECTS;
const expectedIds=[
  'a11-greetings','a11-origin-spelling','a11-hobbies','a11-jobs-seasons',
  'a11-city-places','a11-city-directions','a11-food-shops','a11-accusative-restaurant',
  'a11-daily-time','a11-family-appointments','a11-birthdays-invitations','a11-restaurant-past'
];
assert.ok(rich&&objects,'Photo stories and visual object modules must load');
assert.equal(Object.keys(rich.data.chapters).length,6);
assert.equal(Object.values(rich.data.chapters).reduce((s,a)=>s+a.length,0),18,'18 individual real-world photos');
assert.equal(Object.keys(rich.data.examples).length,12);
assert.equal(Object.values(rich.data.examples).reduce((s,a)=>s+a.length,0),72,'72 original worked examples');
assert.equal(Object.values(rich.data.patterns).reduce((s,a)=>s+a.length,0),36,'36 language pattern comparisons');
assert.equal(Object.keys(objects.data).length,12,'Every lesson gets its own teaching artifact');
for(let n=1;n<=6;n++){
  const photos=rich.data.chapters[n];
  assert.equal(photos.length,3,'Every chapter has 3 photos');
  assert.equal(new Set(photos.map(p=>p.id)).size,3);
  for(const p of photos){
    assert.match(p.source,/^https:\/\/www\.pexels\.com\/photo\/\d+\/$/);
    assert.match(p.src,/^https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg/);
    assert.ok(p.alt.length>=10&&p.credit.length>=5&&p.de.length>=10);
  }
  const gallery=rich.photos(n,{compact:true,heading:false});
  assert.equal((gallery.match(/class="real-context-photo is-mini"/g)||[]).length,3);
  assert.match(gallery,/loading="lazy"/);
  assert.match(gallery,/data-speak=/);
  assert.match(gallery,/Pexels/);
}
for(const id of expectedIds){
  const rows=rich.data.examples[id],pattern=rich.data.patterns[id];
  assert.equal(rows.length,6,id+' needs six independently authored contextual examples');
  assert.equal(pattern.length,3,id+' needs grammar / functional comparison patterns');
  assert.ok(rows.every(([de,en,context])=>de.length>8&&en.length>5&&context.length>5));
  const html=rich.examples(id);
  assert.equal((html.match(/class="example-language-card"/g)||[]).length,6);
  assert.match(html,/Listen and repeat/);
  const object=objects.render(id);
  assert.match(object,/class="lesson-visual-object"/);
  assert.match(object,/Original visual example|Real-world language object/);
  assert.ok(object.length>450);
}
assert.match(objects.render('a11-daily-time'),/Clock showing/);
assert.match(objects.render('a11-family-appointments'),/artifact-week-calendar/);
assert.match(objects.render('a11-restaurant-past'),/Restaurant · Musterrechnung/);
assert.match(objects.render('a11-city-directions'),/artifact-directions/);
assert.match(objects.render('a11-origin-spelling'),/artifact-profile/);
console.log('Rich lessons passed: 18 credited photos, 72 context examples, 36 pattern comparisons and 12 original visual objects.');
