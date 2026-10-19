/**
 * Produce the silent Learning + Teacher Studio walkthrough used by the homepage.
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
  const isTeacher=role==='Teacher';
  const guide=isTeacher
    ? [['Learner overview','teacher'],['Create & preview','session'],['Assign to learner','publish'],['Review & coach','review']]
    : [['Learning dashboard','student'],['Learn & listen','lesson'],['Practise & submit','answer'],['Progress & feedback','progress']];
  return rect(61,143,1158,522,'#fffefa',19)+rect(61,143,1158,49,'#f0f2ec',19)
    +rect(61,175,1158,17,'#f0f2ec',0)
    +rect(84,160,13,13,'#d18d70',7)+rect(107,160,13,13,'#e8be75',7)+rect(130,160,13,13,'#91b6a0',7)
    +rect(166,155,828,28,'#fffefa',8)+txt(185,174,'german-learning-studio.onrender.com',12,'#83918a')
    +rect(80,210,228,437,'#f2f4ee',12)+rect(97,231,35,35,ink,8)+txt(114,254,'At',18,'#e3c092',700,'middle')
    +txt(145,247,'AmberTheory',16,ink,700)+txt(145,263,'GERMAN STUDIO',9,'#748379',700)
    +button(886,205,121,'Learning',!isTeacher)+button(1014,205,158,'Teacher Studio',isTeacher)
    +txt(98,312,'IN THIS WALKTHROUGH',10,'#89978f',700)
    +guide.map(([label,key],i)=>menu(346+i*48,label,page===key)).join('')
    +rect(95,577,195,52,isTeacher?forest:'#e0e9e1',11)
    +txt(192,598,isTeacher?'TEACHER WORKSPACE':'LEARNING WORKSPACE',10,isTeacher?'#fff':'#527162',700,'middle')
    +txt(192,614,isTeacher?'Design · Assign · Review':'Learn · Practise · Progress',11,isTeacher?'#dce9de':'#517164',400,'middle');
}
function menu(y,label,selected){return (selected?rect(91,y-25,207,41,'#dce8df',9):'')+txt(110,y,selected?'●':'○',13,selected?forest:'#9aa9a1')+txt(133,y,label,15,selected?forest:'#62756d',selected?700:400);}
function header(label,headline,description){return txt(338,240,label.toUpperCase(),11,copper,700)+txt(338,285,headline,31,ink,700)+txt(339,312,description,14,'#6c7c73');}
function highlight(x,y,w,h){return rect(x-6,y-6,w+12,h+12,'none',12,copper,4)+`<path d="M ${x+w+16} ${y+7} L ${x+w+47} ${y-26}" stroke="${copper}" stroke-width="4" stroke-linecap="round"/>`+`<circle cx="${x+w+47}" cy="${y-26}" r="7" fill="${copper}"/>`;}
function studentHome(){return shell('student','Student')+header('Learning · First Steps','Guten Tag! Let’s learn German.','Your lessons, assigned practice and progress are all here.')
  +panel(340,341,530,250,'Make the next conversation yours.','Continue learning at your own pace.')
  +badge(363,416,'First Steps',true)
  +txt(364,468,'Up next: Hallo! Nice to meet you',16,ink,700)
  +button(363,506,208,'Continue learning',true)
  +panel(885,341,301,250,'Your teacher’s sessions','Practise what you learn in class.')
  +txt(906,450,'At the café: Your first order',15,forest,700)
  +button(906,501,234,'Start assigned session')+highlight(363,506,208,43);}
function firstLesson(){return shell('lesson','Student')+header('First Steps · Lesson 01','Hallo! Nice to meet you.','Start with a friendly greeting and a simple introduction.')
  +panel(340,336,846,282,'German phrase','Greet someone with confidence.')
  +txt(366,435,'Hallo! Ich heiße Mia.',29,forest,700)
  +txt(366,472,'Hello! My name is Mia.',18,'#6c7c73')
  +button(366,533,216,'♫ Hear German',true)+button(598,533,184,'Next step →')
  +highlight(366,533,216,43);}
function listen(){return shell('lesson','Student')+header('Listen and repeat','Hear it. Say it. Remember it.','Practise pronunciation before moving to the knowledge check.')
  +panel(340,341,846,262,'Listen to a polite greeting','Your browser can speak the sample German phrase.')
  +txt(364,449,'Guten Tag! Wie geht es Ihnen?',23,forest,700)
  +txt(364,480,'Good day! How are you?',16,'#6c7c73')
  +button(364,533,238,'♫ Play pronunciation',true)+highlight(364,533,238,43);}
function basicCheck(){return shell('answer','Student')+header('Learning check','Understand the greeting.','Choose an answer and receive an explanation.')
  +panel(340,338,846,270,'What does “Ich heiße Mia” mean?','Choose the correct English meaning.')
  +rect(364,429,793,42,'#eef3ed',8,forest,2)+txt(383,456,'My name is Mia.',16,forest,700)
  +rect(364,479,793,42,'#fffefa',8,'#dfe5df')+txt(383,506,'I come from Germany.',16,ink)
  +button(365,544,234,'Check my answer',true)+highlight(364,429,793,42);}
function earlyProgress(){return shell('progress','Student')+header('Your learning progress','Every small step counts.','Continue your First Steps lessons whenever you like.')
  +panel(340,338,846,270,'Your First Steps pathway','Greetings → Hometowns → Numbers → Café → City')
  +badge(362,424,'Lesson 01 started',true)
  +rect(362,479,800,13,'#e2ece2',7)+rect(362,479,150,13,copper,7)
  +txt(362,533,'Your progress stays in this browser for the demo.',15,'#738378')
  +highlight(362,479,800,13);}
function teacher(){return shell('teacher')+header('Teacher studio','See each learner clearly.','Plan activities, understand progress, and give personal feedback.')
  +panel(340,340,254,125,'Demo learner','First Steps · Active learner')+badge(361,415,'In progress',true)
  +panel(605,340,255,125,'5 lessons','Practice and checkpoint results')
  +panel(871,340,316,125,'Practice to review','Written responses in your queue')
  +panel(340,480,846,143,'Session Studio','Compose complete lessons: words, listening, checks, role-play.')
  +button(925,563,229,'Create lesson session',true)+highlight(925,563,229,43);}
function session(){return shell('session')+header('Session Studio','Compose a complete lesson.','Turn expertise into a connected learning journey.')
  +panel(340,340,846,105,'One thoughtful journey. Many moments to practise.','Start with five learning blocks and adapt for your class.')
  +button(931,381,224,'+ Create lesson session',true)+highlight(931,381,224,43)
  +panel(340,463,410,151,'At the café: Your first order','First Steps · 20 min · 5 blocks · Assigned')
  +badge(360,557,'Published',true)+button(511,557,106,'Preview')+button(629,557,94,'Edit');}
function compose(){return shell('session')+header('Visual lesson composer','Build a session, step by step.','Set a clear goal and choose who will practise it.')
  +panel(340,333,846,289,'Session details','Describe the learning goal before editing each activity.')
  +field(365,420,355,'Session title','At the café: Your first order')
  +field(747,420,388,'What the learner will achieve','Order politely in an everyday café')
  +field(365,513,200,'Course level','First Steps')+field(590,513,199,'Estimated time','20 minutes')
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
  +panel(339,335,848,282,'At the café: Your first order','Five connected activities · First Steps · 20 minutes')
  +[ ['01','Five words for the café','Vocabulary'], ['02','Hear a polite order','Listening'], ['03','Choose the polite request','Quiz'],['04','You are the customer','Role-play'],['05','Final knowledge check','Assessment'] ].map((s,i)=>rect(360,417+i*36,800,31,i%2?'#f2f6f1':'#f9faf7',5)+txt(375,438+i*36,s[0],12,copper,700)+txt(422,438+i*36,s[1],14,ink,700)+txt(1086,438+i*36,s[2],11,'#74867b')).join('')
  +highlight(339,335,848,282);}
function publish(){return shell('session')+header('Publish and assign','Your lesson is ready.','Learners see the published session in their learning dashboard.')
  +panel(340,339,846,266,'At the café: Your first order','First Steps · 20 minutes · Demo learner')
  +badge(366,410,'5 blocks')+badge(475,410,'Ready to assign',true)
  +button(381,529,190,'Preview as student')+button(593,529,142,'Save draft')
  +button(759,529,235,'Publish & assign',true)+highlight(759,529,235,43);}
function learner(){return shell('student','Student')+header('Your teacher’s learning sessions','Learn it. Hear it. Use it.','Practise one meaningful step at a time.')
  +panel(340,341,846,261,'At the café: Your first order','First Steps · From your teacher · 20 minutes')
  +txt(365,453,'Five useful expressions → polite request → dialogue',18,forest,700)
  +rect(365,485,785,11,'#e2ece2',6)+rect(365,485,120,11,copper,6)
  +txt(365,521,'0 of 5 steps complete',13,'#71847a')+button(365,540,230,'Start session',true)+highlight(365,540,230,43);}
function answer(){return shell('student','Student')+header('Interactive knowledge check','Choose the polite request.','Every check gives immediate feedback and explanation.')
  +panel(340,338,846,270,'Which phrase would you say at a café?','Choose the best answer, then check your understanding.')
  +rect(364,429,793,42,'#eef3ed',8,forest,2)+txt(383,456,'Ich hätte gern einen Tee, bitte.',16,forest,700)
  +rect(364,479,793,42,'#fffefa',8,'#dfe5df')+txt(383,506,'Gute Nacht!',16,ink)
  +button(365,544,234,'Check my answer',true)+highlight(364,429,793,42);}
function studentSubmit(){return shell('answer','Student')+header('Role-play · At the café','Try a real German conversation.','Write a polite order and send it to the teacher.')
  +panel(340,338,846,273,'You are the customer','Include a greeting, your order and a thank-you.')
  +txt(364,428,'Your German response',14,'#61746b',700)
  +rect(364,441,792,73,'#fff',9,'#c3d6ca')
  +txt(382,470,'Guten Tag! Ich hätte gern einen Tee, bitte.',17,forest,700)
  +txt(382,494,'Vielen Dank!',16,forest)
  +button(364,543,235,'Send for feedback',true)+highlight(364,543,235,43);}
function studentPending(){return shell('progress','Student')+header('Submitted for review','You have done your part.','Your teacher now receives the written response in the queue.')
  +panel(340,339,846,270,'At the café: Your first order','Role-play response saved for your teacher.')
  +badge(363,420,'Awaiting feedback',true)
  +rect(363,463,801,93,'#eef3ed',9)
  +txt(383,492,'Your response',14,forest,700)
  +txt(383,528,'Guten Tag! Ich hätte gern einen Tee, bitte.',17,ink)
  +highlight(363,463,801,93);}
function review(){return shell('review')+header('Practice to review','Give feedback while it matters.','A written role-play arrives in the teacher review queue.')
  +panel(340,338,846,270,'New response · You are the customer','First Steps · Written role-play · Awaiting feedback')
  +rect(366,420,788,64,'#f1f5ef',9)+txt(384,450,'Guten Tag! Ich hätte gern einen Tee, bitte.',18,forest,700)
  +field(366,527,523,'Your personal feedback','Great polite request! Try adding a thank-you.')
  +button(919,541,214,'Save feedback',true)+highlight(919,541,214,43);}
function teacherFeedback(){return shell('review')+header('Personal coaching','A short note makes practice meaningful.','A teacher reviews the response and marks it complete.')
  +panel(340,338,846,270,'Learner response · Review complete','At the café: Your first order')
  +rect(365,413,790,66,'#f1f5ef',9)+txt(384,450,'Guten Tag! Ich hätte gern einen Tee, bitte.',18,forest,700)
  +rect(365,493,790,72,'#e6eee5',9)+txt(384,520,'Teacher note · Reviewed',13,forest,700)
  +txt(384,546,'Great polite request! Try adding a thank-you.',16,ink)+highlight(365,493,790,72);}
function progress(){return shell('student','Student')+header('Learning progress','Feedback closes the loop.','Students revisit their answers and see what they have learned.')
  +panel(340,338,846,271,'At the café: Session complete!','Vocabulary · Listening · Quiz · Role-play · Final check')
  +badge(362,419,'5 / 5 complete',true)+badge(493,419,'2 / 2 correct')
  +rect(362,466,800,91,'#e3efe5',11)+txt(385,501,'Teacher note',14,forest,700)
  +txt(385,531,'Great polite request! Try adding a thank-you.',16,ink)+highlight(362,466,800,91);}

const steps=[
  ['STUDENT · Start learning','Open straight into the Learning dashboard.','Lessons, assignments and progress together',studentHome],
  ['STUDENT · Explore a lesson','Build confidence from the first phrase.','First Steps · Helpful translation',firstLesson],
  ['STUDENT · Listen and speak','Hear the German and repeat aloud.','Pronunciation from your browser',listen],
  ['STUDENT · Check knowledge','Get instant explanations as you learn.','Quick checks and corrective feedback',basicCheck],
  ['STUDENT · Track progress','See where to continue next time.','A clear, self-paced learning path',earlyProgress],
  ['TEACHER · Open the studio','Switch to the teacher workspace.','Learners, content and review in one place',teacher],
  ['TEACHER · Plan a session','Design a connected lesson journey.','Five teaching blocks in Session Studio',session],
  ['TEACHER · Set a goal','Choose the outcome, level and audience.','Editable session details',compose],
  ['TEACHER · Make it engaging','Add words, listening and active practice.','Vocabulary · Audio · Checks · Role-play',()=>block('', 'Build the five teaching blocks.', ['Vocabulary, listening and checks','A real café role-play task','Finish with an assessment.'],3)],
  ['TEACHER · Preview the learner view','Inspect the full journey before sharing.','Review every block and example',preview],
  ['TEACHER · Publish and assign','Send the session to the demo learner.','Assignment is local to this browser',publish],
  ['STUDENT · Open assigned practice','Your teacher’s session is ready.','Start, pause and resume the five blocks',learner],
  ['STUDENT · Submit the role-play','Write a short conversation in German.','Send your response for personal feedback',studentSubmit],
  ['TEACHER · Review the response','Read the learner’s German writing.','A real submission appears in the review queue',review],
  ['TEACHER · Coach the learner','Give specific, human feedback.','Review complete · Your note is saved',teacherFeedback],
  ['STUDENT · See your progress','Read the teacher’s note and keep growing.','From lesson to practice to feedback',progress]
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
  ${txt(66,678,kicker,13,'#d9e5d9')}${txt(1208,678,'NO VOICEOVER  ·  01:20',12,'#aebfb1',700,'end')}
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
  const result=spawnSync('ffmpeg',['-y','-hide_banner','-loglevel','error','-safe','0','-f','concat','-i',path.join(tmp,'slides.txt'),'-t','80','-r','12','-c:v','libx264','-preset','slow','-crf','32','-pix_fmt','yuv420p','-movflags','+faststart',out],{encoding:'utf-8'});
  if(result.status!==0)throw Error(result.stderr||'ffmpeg failed');
  console.log(`Created ${steps.length} scenes and ${out}`);
} finally {
  await fs.rm(tmp,{recursive:true,force:true});
}
