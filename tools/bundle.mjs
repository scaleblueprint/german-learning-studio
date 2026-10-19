import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(base,'dist',name),'utf8');
let html=read('index.html');
html=html.replace('<link rel="stylesheet" href="./styles.css" />',`<style>\n${read('styles.css')}\n</style>`);
html=html.replace('    <script src="./lessons.js" defer></script>\n','');
html=html.replace('    <script src="./app.js" defer></script>\n','');
html=html.replace('</body>',`<script>\n${read('lessons.js')}\n</script>\n<script>\n${read('app.js')}\n</script>\n</body>`);
const output=path.join(base,'german-studio-demo.html');
fs.writeFileSync(output,html);
console.log(`Created ${output}`);
