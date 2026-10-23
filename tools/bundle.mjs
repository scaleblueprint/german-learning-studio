import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(base,'dist',name),'utf8');
let html=read('index.html');
html=html.replace(/<link rel="stylesheet" href="\.\/styles\.css(?:\?[^"]*)?" \/>/,`<style>\n${read('styles.css')}\n</style>`);
for(const script of ['curriculum.js','a11-chapters-1-3.js','a11-chapters-4-6.js','chapter-one-foundations.js','chapter-study.js','chapter-readers.js','workbook.js','chapter-visuals.js','rich-scenes.js','learning-objects.js','photo-practice.js','depth-guides.js','phase3-scene-labs.js','phase4-audio-labs.js','phase5-classroom.js','exam-data.js','exam.js','app.js'])html=html.replace(new RegExp(`    <script src="\\./${script.replace('.','\\.')}(?:\\?[^"]*)?" defer></script>\\n`),'');
html=html.replace('</body>',`${['curriculum.js','a11-chapters-1-3.js','a11-chapters-4-6.js','chapter-one-foundations.js','chapter-study.js','chapter-readers.js','workbook.js','chapter-visuals.js','rich-scenes.js','learning-objects.js','photo-practice.js','depth-guides.js','phase3-scene-labs.js','phase4-audio-labs.js','phase5-classroom.js','exam-data.js','exam.js','app.js'].map(name=>`<script>\n${read(name)}\n</script>`).join('\n')}\n</body>`);
html=html.replace(/<link rel="stylesheet" href="\.\/amber-theme\.css(?:\?[^\"]*)?" \/>/,`<style>\n${read('amber-theme.css')}\n</style>`);
// The bundled demo lives at the repository root; the deployed app lives in dist/.
html=html.replace('src="./ambertheory-lockup.jpg"','src="./dist/ambertheory-lockup.jpg"');
const output=path.join(base,'german-studio-demo.html');
fs.writeFileSync(output,html);
console.log(`Created ${output}`);
