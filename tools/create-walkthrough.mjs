/**
 * Produce the silent Teacher Studio walkthrough used by the homepage.
 * Run with an installation of sharp and ffmpeg available; the generated MP4
 * and SVG poster are committed, so neither dependency is needed on Render.
 */
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const sharp = (() => {
  try { return require('sharp'); }
  catch {
    const runtimeModules = process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES;
    if (!runtimeModules) throw Error('Install sharp, or set CODEX_PRIMARY_RUNTIME_NODE_MODULES.');
    return require(path.join(runtimeModules, 'sharp'));
  }
})();
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const background = '#1f302d', cream = '#faf7f0', ink = '#293b38';
const forest = '#335e52', copper = '#af704c', pale = '#e8efe8';

function esc(s) { return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'); }
const rect = (x,y,w,h,fill='#fff',rx=12,stroke='none',sw=1) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const txt = (x,y,s,size=19,color=ink,weight=400,anchor='start') => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" font-family="DejaVu Sans,Arial,sans-serif">${esc(s)}</text>`;
function button(x,y,w,label,active=false){return rect(x,y,w,43,active?forest:'#f9f7f0',10,active?forest:'#d5ded7')+txt(x+w/2,y+27,label,14,active?'#fff':ink,700,'middle');}
function panel(x,y,w,h,heading,sub=''){return rect(x,y,w,h,'#fffefa',14,'#e1e6df')+txt(x+20,y+35,heading,21,ink,700)+(sub?txt(x+20,y+59,sub,13,'#64736c'): '');}
function badge(x,y,label,active=false){const w=Math.max(94,label.length*8.5+24);return rect(x,y,w,28,active?forest:'#e8eee6',14)+txt(x+w/2,y+19,label,12,active?'white':forest,700,'middle');}
function field(x,y,w,label,value){return txt(x,y,label,13,'#61746b',700)+rect(x,y+10,w,43,'#fff',8,'#cad8cf')+txt(x+13,y+37,value,15,ink);}
function line(x,y,w,color='#e5ebe5'){return rect(x,y,w,2,color,1);}

function shell(page,role='Teacher'){
  return rect(61,143,1158,522,'#fffefa',19)+rect(61,143,1158,49,'#f0f2ec',19)
    +rect(61,175,1158,17,'#f0f2ec',0)
    +rect(84,160,13,13,'#d18d70',7)+rect(107,160,13,13,'#e8be75',7)+rect(130,160,13,13,'#91b6a0',7)
    +rect(166,155,828,28,'#fffefa',8)+txt(185,174,'german-learning-studio.onrender.com',12,'#83918a')
    +rect(80,210,228,437,'#f2f4ee',12)+rect(97,231,35,35,ink,8)+txt(114,254,'At',18,'#e3c092',700,'middle')
    +txt(145,247,'AmberTheory',16,ink,700)+txt(145,263,'GERMAN STUDIO',9,'#748379',700)
    +txt(98,312,'STUDIO NAVIGATION',10,'#89978f',700)
    +menu(334,'Overview',page==='overview')+menu(383,'My learning',page==='student')+menu(432,'Teacher studio',page==='teacher')
    +menu(481,'Session Studio',page==='session')+menu(530,'Practice to review',page==='review')
    +rect(95,589,195,39,role==='Teacher'?forest:'#e0e9e1',11)
    +txt(192,614,role==='Teacher'?'Teacher view':'Student view',13,role==='Teacher'?'white':forest,700,'middle');
}
function menu(y,label,selected){return (selected?rect(91,y-25,207,41,'#dce8df',9):'')+txt(110,y,selected?'●':'○',13,selected?forest:'#9aa9a1')+txt(133,y,label,15,selected?forest:'#62756d',selected?700:400);}
function header(label,headline,description){return txt(338,240,label.toUpperCase(),11,copper,700)+txt(338,285,headline,31,ink,700)+txt(339,312,description,14,'#6c7c73');}
function highlight(x,y,w,h){return rect(x-6,y-6,w+12,h+12,'none',12,copper,4)+`<path d="M ${x+w+16} ${y+7} L ${x+w+47} ${y-26}" stroke="${copper}" stroke-width="4" stroke-linecap="round"/>`+`<circle cx="${x+w+47}" cy="${y-26}" r="7" fill="${copper}"/>`;}
function overview(){return shell('overview')+header('Welcome','Learn German. Find your voice.','A place to learn together, with guidance from a real teacher.')
  +panel(340,342,532,218,'Learn with purpose','Short lessons, real conversations, useful practice.')
  +badge(363,420,'A1 beginner',true)+badge(475,420,'5 sample lessons')
  +button(363,491,198,'Try the first lesson',true)+button(579,491,245,'Explore teacher view')
  +panel(894,342,293,218,'Teacher-led learning','One experience for learners and tutors.')
  +txt(921,435,'Student  ↔  Teacher',22,forest,700)+highlight(579,491,245,43);}
function teacher(){return shell('teacher')+header('Teacher studio','See each learner clearly.','Plan activities, understand progress, and give personal feedback.')
  +panel(340,340,254,125,'Demo learner','A1 · Active learner')+badge(361,415,'In progress',true)
  +panel(605,340,255,125,'5 lessons','Practice and checkpoint results')
  +panel(871,340,316,125,'Practice to review','Written responses in your queue')
  +panel(340,480,846,143,'Session Studio','Compose complete lessons: words, listening, checks, role-play.')
  +button(925,563,229,'Create lesson session',true)+highlight(925,563,229,43);}
function session(){return shell('session')+header('Session Studio','Compose a complete lesson.','Turn expertise into a connected learning journey.')
  +panel(340,340,846,105,'One thoughtful journey. Many moments to practise.','Start with five learning blocks and adapt for your class.')
  +button(931,381,224,'+ Create lesson session',true)+highlight(931,381,224,43)
  +panel(340,463,410,151,'At the café: Your first order','A1 · 20 min · 5 blocks · Assigned')
  +badge(360,557,'Published',true)+button(511,557,106,'Preview')+button(629,557,94,'Edit');}
function compose(){return shell('session')+header('Visual lesson composer','Build a session, step by step.','Set a clear goal and choose who will practise it.')
  +panel(340,333,846,289,'Session details','Describe the learning goal before editing each activity.')
  +field(365,420,355,'Session title','At the café: Your first order')
  +field(747,420,388,'What the learner will achieve','Order politely in an everyday café')
  +field(365,513,200,'CEFR level','A1 · Beginner')+field(590,513,199,'Estimated time','20 minutes')
  +field(814,513,320,'Assign to','Demo learner')+highlight(365,430,355,43);}
function block(type,title,detail,focusIndex=0){
  const steps=['Vocabulary cards','Listen & repeat','Knowledge check','Role-play task','Final assessment'];
  let out=shell('session')+header('Learning journey',title,'Compose, reorder and refine each learning step.')
     +panel(339,330,491,291,'Five teaching blocks','Select a block to edit it.')
     +panel(846,330,340,291,steps[focusIndex],'Teacher-defined, editable content');
  steps.forEach((s,i)=>{out+=rect(355,399+i*39,455,34,i===focusIndex?'#e0ece3':'#f7f8f3',7,i===focusIndex?forest:'#e4eae5',i===focusIndex?2:1)
  +txt(367,421+i*39,`${i+1}.  ${s}`,14,i===focusIndex?forest:'#64766d',i===focusIndex?700:400);});
  out+=txt(864,425,detail[0],17,ink,700)+txt(864,462,detail[1],15,forest)+txt(864,493,detail[2],14,'#6a7a71');
  return out+highlight(355,399+focusIndex*39,455,34);
}
function preview(){return shell('session')+header('Student-facing preview','Check the learning journey.','See how each activity appears before assigning it.')
  +panel(339,335,848,282,'At the café: Your first order','Five connected activities · A1 · 20 minutes')
  +[ ['01','Five words for the café','Vocabulary'], ['02','Hear a polite order','Listening'], ['03','Choose the polite request','Quiz'],['04','You are the customer','Role-play'],['05','Final knowledge check','Assessment'] ].map((s,i)=>rect(360,417+i*36,800,31,i%2?'#f2f6f1':'#f9faf7',5)+txt(375,438+i*36,s[0],12,copper,700)+txt(422,438+i*36,s[1],14,ink,700)+txt(1086,438+i*36,s[2],11,'#74867b')).join('')
  +highlight(339,335,848,282);}
function publish(){return shell('session')+header('Publish and assign','Your lesson is ready.','Learners see the published session in their learning dashboard.')
  +panel(340,339,846,266,'At the café: Your first order','A1 · 20 minutes · Demo learner')
  +badge(366,410,'5 blocks')+badge(475,410,'Ready to assign',true)
  +button(381,529,190,'Preview as student')+button(593,529,142,'Save draft')
  +button(759,529,235,'Publish & assign',true)+highlight(759,529,235,43);}
function learner(){return shell('student','Student')+header('Your teacher’s learning sessions','Learn it. Hear it. Use it.','Practise one meaningful step at a time.')
  +panel(340,341,846,261,'At the café: Your first order','A1 · From your teacher · 20 minutes')
  +txt(365,453,'Five useful expressions → polite request → dialogue',18,forest,700)
  +rect(365,485,785,11,'#e2ece2',6)+rect(365,485,120,11,copper,6)
  +txt(365,521,'0 of 5 steps complete',13,'#71847a')+button(365,540,230,'Start session',true)+highlight(365,540,230,43);}
function answer(){return shell('student','Student')+header('Interactive knowledge check','Choose the polite request.','Every check gives immediate feedback and explanation.')
  +panel(340,338,846,270,'Which phrase would you say at a café?','Choose the best answer, then check your understanding.')
  +rect(364,429,793,42,'#eef3ed',8,forest,2)+txt(383,456,'Ich hätte gern einen Tee, bitte.',16,forest,700)
  +rect(364,479,793,42,'#fffefa',8,'#dfe5df')+txt(383,506,'Gute Nacht!',16,ink)
  +button(365,544,234,'Check my answer',true)+highlight(364,429,793,42);}
function review(){return shell('review')+header('Practice to review','Give feedback while it matters.','A written role-play arrives in the teacher review queue.')
  +panel(340,338,846,270,'New response · You are the customer','A1 · Written role-play · Awaiting feedback')
  +rect(366,420,788,64,'#f1f5ef',9)+txt(384,450,'Guten Tag! Ich hätte gern einen Tee, bitte.',18,forest,700)
  +field(366,527,523,'Your personal feedback','Great polite request! Try adding a thank-you.')
  +button(919,541,214,'Send feedback',true)+highlight(919,541,214,43);}
function progress(){return shell('student','Student')+header('Learning progress','Feedback closes the loop.','Students revisit their answers and see what they have learned.')
  +panel(340,338,846,271,'At the café: Session complete!','Vocabulary · Listening · Quiz · Role-play · Final check')
  +badge(362,419,'5 / 5 complete',true)+badge(493,419,'2 / 2 correct')
  +rect(362,466,800,91,'#e3efe5',11)+txt(385,501,'Teacher note',14,forest,700)
  +txt(385,531,'Great polite request! Try adding a thank-you.',16,ink)+highlight(362,466,800,91);}

const steps=[
  ['The learning experience','Start on the German Studio homepage.','A1 lessons and teacher guidance',overview],
  ['Switch to Teacher Studio','Explore the teacher’s workspace.','View learners, sessions and feedback',teacher],
  ['Open Session Studio','Create a complete teaching sequence.','Use the ready-made café sample',session],
  ['Describe the learning goal','Give the session a title and audience.','Set A1 level, estimated time, assignment',compose],
  ['Step 1 · Vocabulary','Start with useful words in context.','German terms with their English meanings',()=>block('', 'Build vocabulary cards.', ['der Kaffee | coffee','der Tee | tea','bitte | please'],0)],
  ['Step 2 · Listening','Add a German phrase and instructions.','Students can hear and repeat it',()=>block('', 'Create listening practice.', ['Guten Tag!','Ich hätte gern einen Tee, bitte.','Listen twice and repeat aloud.'],1)],
  ['Step 3 · Knowledge check','Add your own question and answers.','Students receive an explanation after answering',()=>block('', 'Check understanding.', ['Which phrase is a polite request?','Ein Wasser, bitte.','Choose the correct option.'],2)],
  ['Step 4 · Role-play','Turn knowledge into conversation.','Learners write a response in German',()=>block('', 'Build real-world practice.', ['You are the customer.','Order your favourite drink.','Include a greeting and thanks.'],3)],
  ['Step 5 · Assessment','Finish with a short knowledge check.','Keep the answer key in your control',()=>block('', 'Check what has been learned.', ['Which German phrase is polite?','Ein Wasser, bitte.','Give helpful corrective feedback.'],4)],
  ['Preview as student','Review the complete sequence.','Read every step before publishing',preview],
  ['Publish and assign','Make the lesson available to learners.','Demo publication stays in this browser',publish],
  ['Student opens the lesson','The session appears on the learner dashboard.','Begin and continue at your own pace',learner],
  ['Practice and check','Answer interactive questions with feedback.','Listening, writing and checks work together',answer],
  ['Review learner responses','Read the submitted German conversation.','Write actionable teacher feedback',review],
  ['Close the learning loop','Students see progress and your note.','The human teacher remains at the centre',progress]
];

function svgFor(index){
  const [title,subtitle,kicker,draw]=steps[index];
  const barWidth=Math.round(1100*(index+1)/steps.length);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  ${rect(0,0,1280,720,background,0)}${rect(60,35,5,76,'#c1865f',2)}
  ${txt(81,58,`${String(index+1).padStart(2,'0')}  /  ${String(steps.length).padStart(2,'0')}    AMBERTHEORY GERMAN STUDIO`,12,'#d8c19a',700)}
  ${txt(81,96,title,29,'#fffdf6',700)}${txt(83,123,subtitle,16,'#c4d7ca')}
  ${draw()}
  ${rect(67,687,1146,5,'#475a50',2)}${rect(67,687,barWidth,5,'#d6a270',2)}
  ${txt(66,678,kicker,13,'#d9e5d9')}${txt(1208,678,'NO VOICEOVER  ·  01:15',12,'#aebfb1',700,'end')}
  </svg>`;
}

const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'german-walkthrough-'));
try {
  for(let i=0;i<steps.length;i++){
    const svg=svgFor(i);
    if(i===0) await fs.writeFile(path.join(dist,'teacher-studio-poster.svg'),svg);
    await sharp(Buffer.from(svg)).png().toFile(path.join(tmp,`slide-${String(i).padStart(2,'0')}.png`));
  }
  const list=steps.map((_,i)=>`file 'slide-${String(i).padStart(2,'0')}.png'\nduration 5\n`).join('') + `file 'slide-${String(steps.length-1).padStart(2,'0')}.png'\n`;
  await fs.writeFile(path.join(tmp,'slides.txt'),list);
  const out=path.join(dist,'teacher-studio-walkthrough.mp4');
  const result=spawnSync('ffmpeg',['-y','-hide_banner','-loglevel','error','-safe','0','-f','concat','-i',path.join(tmp,'slides.txt'),'-t','75','-r','12','-c:v','libx264','-preset','slow','-crf','32','-pix_fmt','yuv420p','-movflags','+faststart',out],{encoding:'utf-8'});
  if(result.status!==0)throw Error(result.stderr||'ffmpeg failed');
  console.log(`Created ${steps.length} scenes and ${out}`);
} finally {
  await fs.rm(tmp,{recursive:true,force:true});
}
