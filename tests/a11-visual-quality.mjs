/* Static visual-content guard: avoid showing unrelated photographs as vocabulary objects. */
import fs from 'node:fs';import assert from 'node:assert/strict';
const ext=fs.readFileSync('dist/a11-visual-extensions.js','utf8');
const studio=fs.readFileSync('dist/a11-photo-studio.js','utf8');
const page=fs.readFileSync('dist/index.html','utf8');
assert.match(ext,/photoByExactTerm/);
assert.match(ext,/creditForTerm/);
assert.match(ext,/onerror="this.hidden=true;this.nextElementSibling.hidden=false"/);
for(const mapping of ["'Rad fahren':0","'das Brot':0","'die Uhrzeit':0","'der Geburtstag':0","'das Restaurant':1"])assert.ok(ext.includes(mapping),'Missing photograph mapping: '+mapping);
assert.ok(!ext.includes("'die U-Bahn':1"),'Never display a tram as U-Bahn');
assert.ok(page.includes('a11-visual-extensions.js'));
assert.ok(page.includes('a11-photo-studio.js'));
assert.ok(studio.includes('data-route-feedback'));
assert.ok(studio.includes('data-clock-words'));
console.log('Visual content mapping and component wiring checks passed.');
