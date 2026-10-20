import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(base,'dist',name),'utf8');
let html=read('index.html');
html=html.replace(/<link rel="stylesheet" href="\.\/styles\.css(?:\?[^"]*)?" \/>/,`<style>\n${read('styles.css')}\n</style>`);
for(const script of ['lessons.js','exam-data.js','exam.js','app.js'])html=html.replace(new RegExp(`    <script src="\\./${script.replace('.','\\.')}(?:\\?[^"]*)?" defer></script>\\n`),'');
html=html.replace('</body>',`${['lessons.js','exam-data.js','exam.js','app.js'].map(name=>`<script>\n${read(name)}\n</script>`).join('\n')}\n</body>`);
html=html.replace(/<link rel="stylesheet" href="\.\/energy-theme\.css(?:\?[^\"]*)?" \/>/,`<style>\n${read('energy-theme.css')}\n</style>`);
const output=path.join(base,'german-studio-demo.html');
fs.writeFileSync(output,html);
console.log(`Created ${output}`);
