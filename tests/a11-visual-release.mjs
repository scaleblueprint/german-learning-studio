/* A1.1 visual learning regression: run with node tests/a11-visual-release.mjs */
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=p=>fs.readFileSync(p,'utf8');
const page=source('dist/index.html');
const app=source('dist/app.js');
const files=[
'dist/a11-visual-atlas.js',
'dist/rich-scenes.js',
'dist/a11-visual-extensions.js',
'dist/chapter-one-visual-lab.js',
'dist/a11-photo-studio.js',
'dist/a11-storyboards.js',
'dist/chapter-study.js'
];
const scope={window:{}};
vm.createContext(scope);
for(const file of files)vm.runInContext(source(file),scope,{filename:file});
const w=scope.window;
assert.ok(w.GERMAN_A11_ATLAS.terms.length>=40,'At least forty individually addressed A1.1 illustration terms');
assert.ok(page.indexOf('a11-visual-atlas.js')<page.indexOf('a11-visual-extensions.js'),'Atlas loads before chapter cards');
assert.ok(page.indexOf('a11-storyboards.js')<page.indexOf('chapter-study.js'),'Storyboards available when chapter study renders');
assert.ok(app.includes('GERMAN_A11_STORYBOARDS?.init(root)'),'App activates storyboards after rendering');
assert.ok(app.includes('GERMAN_A11_VISUAL_EXTENSIONS?.init(root)'),'App activates visual learning tasks');
assert.ok(source('dist/a11-visual-extensions.js').includes('const order=[2,0,3,1]'),'Image challenge must not have predictable answer order');
const media=w.GERMAN_RICH_SCENES.data.chapters;
let count=0;
for(let n=1;n<=6;n++){
 const html=n===1?w.GERMAN_CH1_VISUAL_LAB.render():w.GERMAN_A11_VISUAL_EXTENSIONS.render(n);
 const found=(html.match(/class="a11-atlas-svg"/g)||[]).length;
 assert.ok(found>=8,'Chapter '+n+' must have at least eight original subject-matched illustrations');
 if(n>1)assert.equal((html.match(/data-match-choice=/g)||[]).length,4,'Chapter '+n+' must present four picture choices');
 assert.equal(media[n].length,3,'Chapter '+n+' must preserve three credited contextual photographs');
 for(const pic of media[n]){assert.ok(pic.source.startsWith('https://www.pexels.com/'));assert.ok(pic.alt&&pic.credit&&pic.src);}
 const storyboard=w.GERMAN_A11_STORYBOARDS.render(n);
 assert.equal((storyboard.match(/data-sb-turn=/g)||[]).length,4,'Chapter '+n+' must have four sequential conversational turns');
 assert.ok(storyboard.includes('Photo: '),'Chapter '+n+' must credit scenario photo');
 assert.ok(w.GERMAN_CHAPTER_STUDY.render(n).includes('data-storyboard="'+n+'"'),'Chapter '+n+' storyboard must appear in reader');
 count+=found;
}
assert.ok(w.GERMAN_A11_ATLAS.render('der Bahnhof').includes('BAHNHOF'),'Station must be specifically illustrated');
assert.ok(w.GERMAN_A11_ATLAS.render('die Milch').includes('MILCH'),'Milk must be individually illustrated');
assert.ok(!source('dist/a11-visual-extensions.js').includes("'die U-Bahn':1"),'Do not label a tram image as U-Bahn');
console.log('A1.1 visual release checks passed: '+count+' original illustrated uses, 18 contextual photographs, 6 storyboards and 5 picture exercises.');
