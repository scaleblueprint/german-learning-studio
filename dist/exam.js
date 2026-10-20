(() => {
  'use strict';
  const data = window.GERMAN_EXAM_DATA;
  if (!data) return;
  const key = 'ambertheory-german-exams-v1';
  const limitMs = 18 * 60 * 1000; // Short independent mock; NOT the official examination time.
  const blank = () => ({provider:'goethe',level:'A1',active:null,attempts:[],reviews:{},customQuestions:[]});
  const stored = (() => {try {return JSON.parse(localStorage.getItem(key));} catch {return null;}})();
  let state = {...blank(),...(stored && typeof stored === 'object' ? stored : {})};
  if (!data.tracks[state.provider]) state.provider = 'goethe';
  if (!Array.isArray(state.attempts)) state.attempts = [];
  if (!Array.isArray(state.customQuestions)) state.customQuestions = [];
  if (!state.reviews || typeof state.reviews !== 'object') state.reviews = {};
  let page = 'home';
  let viewedResult = null;
  let editItem = null;
  let builderOpen = false;
  const esc = value => String(value ?? '').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  const save = () => {try {localStorage.setItem(key,JSON.stringify(state));} catch {message('Storage unavailable: this attempt may not be saved.');}};
  const track = () => data.tracks[state.provider];
  const formatTime = milliseconds => {const n=Math.max(0,Math.ceil(milliseconds/1000));return `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;};
  const elapsed = attempt => attempt.elapsedMs + (attempt.paused ? 0 : Math.max(0,Date.now()-attempt.resumedAt));
  const remaining = attempt => Math.max(0,limitMs-elapsed(attempt));
  const questionItems = (provider,skill) => {
    const base=data.tracks[provider];
    const approved=state.customQuestions.filter(q=>q.provider===provider&&q.level==='A1'&&q.status==='published');
    const choices=[...base.questions,...approved].filter(q=>skill==='all'||q.skill===skill).map(q=>({...q,type:'choice'}));
    const written=['writing','speaking'].filter(s=>skill==='all'||skill===s).map(s=>({...base[s],skill:s,type:'written'}));
    return [...choices,...written];
  };
  const totalCorrect = attempt => attempt.items.filter(q=>q.type==='choice'&&attempt.answers[q.id]===q.answer).length;
  const totalAuto = attempt => attempt.items.filter(q=>q.type==='choice').length;
  const countAnswered = attempt => attempt.items.filter(q=>q.type==='choice'?Number.isInteger(attempt.answers[q.id]):Boolean((attempt.texts[q.id]||'').trim())).length;
  const skillLabel = id => data.skills.find(s=>s.id===id)?.name||id;
  function message(text){const el=document.getElementById('toast');if(el){el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3800);}}
  function refresh(){const learner=document.getElementById('exam-root'),teacher=document.getElementById('exam-teacher-root');if(learner)learner.innerHTML=renderLearner();if(teacher)teacher.innerHTML=renderTeacher();}
  function start(mode,skill){
    if(state.active && !confirm('Replace your unfinished practice? Your completed attempts will be kept.'))return;
    const items=questionItems(state.provider,skill);
    if(!items.length){message('No reviewed questions available for this skill yet.');return;}
    state.active={id:`exam-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,provider:state.provider,level:'A1',mode,skill,items,answers:{},texts:{},index:0,startedAt:Date.now(),resumedAt:Date.now(),elapsedMs:0,paused:false};
    page='attempt';save();refresh();window.scrollTo({top:0,behavior:'instant'});
  }
  function submit(expired=false){
    const attempt=state.active;if(!attempt)return;
    if(!expired && countAnswered(attempt)<attempt.items.length && !confirm('Some tasks are unanswered. Finish and review your attempt anyway?'))return;
    attempt.elapsedMs=attempt.mode==='mock'?Math.min(limitMs,elapsed(attempt)):0;
    attempt.paused=true;attempt.completedAt=Date.now();attempt.timedOut=expired;
    state.attempts.unshift(attempt);state.attempts=state.attempts.slice(0,30);state.active=null;
    viewedResult=attempt.id;page='result';save();refresh();window.scrollTo({top:0,behavior:'instant'});
  }
  function resume(){if(!state.active)return;state.active.resumedAt=Date.now();state.active.paused=false;save();}
  function pause(){if(!state.active)return;state.active.elapsedMs=elapsed(state.active);state.active.paused=true;save();}
  function readResult(){return state.attempts.find(a=>a.id===viewedResult)||state.attempts[0];}
  function renderLearner(){
    if(page==='attempt' && state.active)return renderAttempt();
    if(page==='result' && readResult())return renderResult(readResult());
    const recent=state.attempts.slice(0,5),active=state.active;
    return `<div class="exam-page">
      <button class="view-link" data-route="student">← Back to Learning</button>
      <section class="exam-hero"><div><span class="eyebrow">Exam preparation · First Steps</span><h1>Practise for the moment that matters.</h1><p>Build confidence in listening, reading, writing and speaking. Choose an exam, practise one skill or try an original A1 mini-mock.</p></div><span class="exam-hero-symbol" aria-hidden="true">✦</span></section>
      <section class="exam-track-panel card"><div class="exam-panel-heading"><div><span class="eyebrow">Choose your exam</span><h2>One goal. Your preparation path.</h2></div><span class="tag tag-warm">Original demo practice · Teacher review needed</span></div>
        <div class="exam-provider-tabs" role="group" aria-label="Exam provider">${Object.entries(data.tracks).map(([id,x])=>`<button class="exam-provider ${state.provider===id?'active':''}" data-exam-action="provider" data-value="${id}" aria-pressed="${state.provider===id}"><strong>${id==='goethe'?'Goethe-Institut':'telc'}</strong><small>${esc(x.subtitle)}</small></button>`).join('')}</div>
        <div class="exam-levels" role="group" aria-label="Language level">${data.levels.map(l=>`<button class="exam-level ${l.available?'active':'planned'}" data-exam-action="level" data-value="${l.id}" ${l.available?'aria-pressed="true"':'disabled aria-disabled="true"'} title="${l.available?'A1 practice available':'Practice content not yet validated'}"><strong>${l.id}</strong><small>${esc(l.available?'Beginner practice':l.name+' · Planned')}</small></button>`).join('')}</div>
        <p class="exam-track-caption"><b>${esc(track().title)}.</b> A1 is the official beginner level. Other levels appear for orientation but are not available until content has been created and reviewed.</p>
      </section>
      ${active?`<div class="exam-resume card"><div><span class="eyebrow">Unfinished attempt</span><h3>${active.mode==='mock'?'A1 mini-mock':skillLabel(active.skill)+' practice'} · ${active.provider==='goethe'?'Goethe':'telc'}</h3><p>${countAnswered(active)} of ${active.items.length} tasks answered${active.mode==='mock'?` · ${formatTime(remaining(active))} remaining`:''}</p></div><button class="btn btn-primary" data-exam-action="resume">Resume →</button></div>`:''}
      <section class="exam-main-cta"><div><span class="eyebrow">Full practice journey</span><h2>Try the A1 mini-mock</h2><p>A shortened practice across all four skills. Multiple-choice questions are automatically checked; writing and speaking notes can be reviewed by your teacher. The 18-minute timer is for this demo only.</p><div class="exam-cta-meta"><span>◷ 18 min</span><span>▤ ${questionItems(state.provider,'all').length} tasks</span><span>✓ Retake and review</span></div></div><button class="btn btn-white" data-exam-action="start" data-mode="mock" data-skill="all">Start mini-mock →</button></section>
      <section class="exam-section"><div class="section-intro"><div><span class="eyebrow">Practise by skill</span><h2>Take one step at a time.</h2><p>Target the part you want to strengthen, without a timer.</p></div></div><div class="exam-skills">${data.skills.map(s=>`<article class="card exam-skill"><span class="exam-skill-icon">${s.icon}</span><h3>${esc(s.name)}</h3><p>${esc(s.description)}</p><button class="view-link" data-exam-action="start" data-mode="practice" data-skill="${s.id}">Practise ${esc(s.name.toLowerCase())} →</button></article>`).join('')}</div></section>
      <div class="exam-two-col"><section class="card exam-advice"><span class="eyebrow">Preparation tips · ${state.provider==='goethe'?'Goethe':'telc'}</span><h2>Small habits, calmer exams.</h2><ol>${track().tips.map(t=>`<li>${esc(t)}</li>`).join('')}</ol><a href="${track().official}" target="_blank" rel="noopener noreferrer">Official ${state.provider==='goethe'?'Goethe':'telc'} preparation resources ↗</a></section>
      <section class="card exam-history"><span class="eyebrow">Your attempt history</span><h2>See your progress.</h2>${recent.length?recent.map(a=>`<div class="exam-history-item"><div><strong>${a.provider==='goethe'?'Goethe':'telc'} · ${a.mode==='mock'?'Mini-mock':skillLabel(a.skill)}</strong><small>${new Date(a.completedAt).toLocaleDateString()} · ${totalCorrect(a)}/${totalAuto(a)} automatically checked</small></div><button class="view-link" data-exam-action="result" data-value="${esc(a.id)}">Review →</button></div>`).join(''):'<p>No attempts yet. Complete a skill practice or mini-mock to see your results here.</p>'}<p class="exam-footnote">Results stay in this browser. They are practice indicators, not official exam grades.</p></section></div></div>`;
  }
  function renderAttempt(){
    const a=state.active,i=Math.min(a.index,a.items.length-1),q=a.items[i];
    return `<div class="exam-page"><div class="exam-attempt-top"><button class="view-link" data-exam-action="home">← Exam Preparation</button><span class="tag tag-warm">${a.provider==='goethe'?'Goethe':'telc'} · A1 ${a.mode==='mock'?'mini-mock':'practice'}</span></div>
    <section class="exam-attempt-head"><div><span class="eyebrow">${a.mode==='mock'?'Timed mini-mock':'Untimed skill practice'} · ${skillLabel(q.skill)}</span><h1>Task ${i+1} of ${a.items.length}</h1><p>${countAnswered(a)} answered · Your answers are saved in this browser.</p></div>${a.mode==='mock'?`<div class="exam-timer"><span>Time remaining</span><strong data-exam-timer>${formatTime(remaining(a))}</strong><button data-exam-action="${a.paused?'unpause':'pause'}" class="btn btn-outline btn-small">${a.paused?'Resume timer':'Pause timer'}</button></div>`:''}</section>
    <div class="exam-step-track">${a.items.map((item,j)=>`<button class="exam-step ${j===i?'active':''} ${item.type==='choice'?Number.isInteger(a.answers[item.id])?'answered':'':(a.texts[item.id]||'').trim()?'answered':''}" data-exam-action="jump" data-value="${j}" aria-label="Go to task ${j+1}: ${skillLabel(item.skill)}" ${a.paused?'disabled':''}>${j+1}</button>`).join('')}</div>
    ${a.paused?`<section class="card exam-paused"><h2>Practice paused</h2><p>Your work is safe in this browser. Resume when you are ready.</p><button class="btn btn-primary" data-exam-action="unpause">Resume attempt →</button></section>`:
    `<article class="card exam-question"><span class="eyebrow">${skillLabel(q.skill)} · ${q.type==='choice'?'Choose one answer':'Teacher-reviewed task'}</span><h2>${q.type==='written'?esc(q.title):esc(q.context)}</h2>
      ${q.type==='choice'?`${q.skill==='listening'?`<div class="exam-audio"><span class="exam-skill-icon">♫</span><div><strong>Listen to the short German message</strong><small>Browser-generated German speech · Repeat as needed</small></div><button class="btn btn-primary btn-small" data-exam-action="speak" data-value="${esc(q.id)}">▶ Play German</button></div>`:`<div class="exam-passage" lang="de">${esc(q.passage)}</div>`}<p class="exam-prompt">${esc(q.question)}</p><div class="exam-choices" role="group" aria-label="Choose one answer">${q.options.map((option,n)=>`<button class="exam-choice ${a.answers[q.id]===n?'selected':''}" data-exam-action="answer" data-value="${n}" aria-pressed="${a.answers[q.id]===n}"><span>${String.fromCharCode(65+n)}</span>${esc(option)}</button>`).join('')}</div>`:
      `<p class="exam-prompt">${esc(q.prompt)}</p><div class="study-note">${esc(q.guidance)}</div><label class="form-field" for="exam-written-response">${q.skill==='speaking'?'Notes from your spoken rehearsal':'Your German response'}</label><textarea id="exam-written-response" class="text-entry exam-written" data-exam-text="${esc(q.id)}" maxlength="1500" placeholder="Schreiben Sie auf Deutsch …">${esc(a.texts[q.id]||'')}</textarea><p class="exam-footnote">${q.skill==='speaking'?'Speak aloud first. Audio is not recorded, uploaded or automatically assessed.':'Your answer will be visible to the demo teacher in this browser for qualitative review.'}</p>`}
      <div class="exam-question-actions"><button class="btn btn-outline" data-exam-action="jump" data-value="${Math.max(0,i-1)}" ${i===0?'disabled':''}>← Previous</button>${i<a.items.length-1?`<button class="btn btn-primary" data-exam-action="jump" data-value="${i+1}">Next task →</button>`:`<button class="btn btn-primary" data-exam-action="submit">Finish & see results →</button>`}</div></article>`}
    <div class="exam-attempt-footer"><span>Original practice content · Not an official examination</span><button class="view-link" data-exam-action="submit">Submit attempt</button></div></div>`;
  }
  function renderResult(a){
    const auto=totalAuto(a),correct=totalCorrect(a),written=a.items.filter(q=>q.type==='written'&&(a.texts[q.id]||'').trim());
    const reviews=state.reviews[a.id]||{};
    const breakdown=['listening','reading'].map(skill=>{const tasks=a.items.filter(q=>q.type==='choice'&&q.skill===skill);const got=tasks.filter(q=>a.answers[q.id]===q.answer).length;return tasks.length?`<div><strong>${got}/${tasks.length}</strong><span>${skillLabel(skill)} · automatically checked</span></div>`:''}).join('');
    return `<div class="exam-page"><button class="view-link" data-exam-action="home">← Exam Preparation</button><section class="exam-result-hero"><span class="eyebrow">Practice complete · ${a.provider==='goethe'?'Goethe':'telc'} A1</span><h1>${a.timedOut?'Time is up — review what you tried.':'Good effort. Now learn from it.'}</h1><p>This shortened mock is independently authored. Only multiple-choice items receive automatic checking; no pass/fail or official score is calculated.</p><div class="exam-result-number"><strong>${auto?`${correct}/${auto}`:'✓'}</strong><span>${auto?'Objective questions correct':'Practice response saved'}</span></div></section>
      <div class="exam-result-grid">${breakdown||'<div><strong>Teacher review</strong><span>This practice has no auto-scored tasks.</span></div>'}<div><strong>${written.length}</strong><span>Responses submitted for teacher review</span></div></div>
      <section class="card exam-review-list"><span class="eyebrow">Review and explanations</span><h2>Understand each answer.</h2>${a.items.map((q,i)=>`<article class="exam-review-item"><div class="exam-review-title"><strong>${i+1}. ${q.type==='choice'?esc(q.question):esc(q.title)}</strong><span class="tag ${q.type==='written'?'tag-warm':a.answers[q.id]===q.answer?'tag-dark':'tag-muted'}">${q.type==='written'?'Teacher review':a.answers[q.id]===q.answer?'Correct':'Review'}</span></div>${q.type==='choice'?`<p>Your answer: ${Number.isInteger(a.answers[q.id])?esc(q.options[a.answers[q.id]]):'Not answered'}</p><p><b>Correct:</b> ${esc(q.options[q.answer])}. ${esc(q.explanation)}</p>`:`<blockquote>${esc(a.texts[q.id]||'No response submitted')}</blockquote><p><b>Practice checklist:</b> ${q.criteria.map(esc).join(' · ')}</p>${reviews[q.id]?`<div class="feedback"><b>Teacher feedback (${reviews[q.id].rating}/5 practice rubric):</b> ${esc(reviews[q.id].note)}</div>`:'<p class="exam-footnote">Awaiting teacher feedback in this browser. This is not an official speaking/writing grade.</p>'}`}</article>`).join('')}</section><div class="exam-result-actions"><button class="btn btn-primary" data-exam-action="start" data-mode="${a.mode}" data-skill="${a.skill}">Retake practice →</button><button class="btn btn-outline" data-exam-action="home">Back to preparation</button></div></div>`;
  }
  function renderTeacher(){
    const writing=state.attempts.flatMap(a=>a.items.filter(q=>q.type==='written'&&(a.texts[q.id]||'').trim()).map(q=>({a,q}))).slice(0,16);
    const pending=writing.filter(({a,q})=>!state.reviews[a.id]?.[q.id]);
    return `<section class="exam-teacher-section"><div class="section-intro"><div><span class="eyebrow">Exam coaching studio</span><h2>Prepare. Review. Improve.</h2><p>Adapt a practice question, publish it to this browser's demo learner, and give targeted feedback on written or spoken-rehearsal notes.</p></div><span class="tag tag-warm">${pending.length} exam responses awaiting review</span></div>
      <div class="exam-teacher-stats"><div class="card"><span>Practice attempts</span><strong>${state.attempts.length}</strong><small>Current browser</small></div><div class="card"><span>Published teacher questions</span><strong>${state.customQuestions.filter(x=>x.status==='published').length}</strong><small>Additional skill practice</small></div><div class="card"><span>Responses to review</span><strong>${pending.length}</strong><small>Writing and speaking notes</small></div></div>
      <div class="exam-teacher-grid"><div class="card exam-teacher-panel"><div class="exam-panel-heading"><div><span class="eyebrow">Question authoring</span><h3>Your practice question bank</h3></div><button class="btn btn-primary btn-small" data-exam-action="new-item">+ Create question</button></div><p>Create original listening or reading multiple-choice questions with explanations. Publish only after checking the German and the correct answer.</p>${builderOpen?renderBuilder():''}${state.customQuestions.length?`<div class="exam-question-bank">${state.customQuestions.map(q=>`<div><div><strong>${esc(q.question)}</strong><small>${q.provider==='goethe'?'Goethe':'telc'} · ${skillLabel(q.skill)} · ${q.status==='published'?'Published':'Draft'}</small></div><button class="view-link" data-exam-action="edit-item" data-value="${esc(q.id)}">Edit</button><button class="view-link" data-exam-action="toggle-item" data-value="${esc(q.id)}">${q.status==='published'?'Unpublish':'Publish'}</button></div>`).join('')}</div>`:'<div class="empty">No teacher-authored questions yet. The demo comes with original sample items for both exams.</div>'}</div>
      <div class="card exam-teacher-panel"><span class="eyebrow">Teacher feedback</span><h3>Writing and speaking review</h3><p>Rate each response with a simple practice rubric and share one strength plus one next step. Speaking is represented by the learner's notes, not an audio file.</p>${pending.length?pending.map(({a,q})=>`<article class="exam-feedback-card"><strong>${esc(q.title)}</strong><small>${a.provider==='goethe'?'Goethe':'telc'} · ${new Date(a.completedAt).toLocaleDateString()}</small><blockquote>${esc(a.texts[q.id])}</blockquote><p>Look for: ${q.criteria.map(esc).join(' · ')}</p><label for="exam-feedback-${esc(a.id)}-${esc(q.id)}">Feedback to learner</label><textarea class="text-entry" id="exam-feedback-${esc(a.id)}-${esc(q.id)}" data-exam-feedback="${esc(a.id)}:${esc(q.id)}" placeholder="One strength and one next step…"></textarea><label>Practice rubric (not official scoring)<select data-exam-rating="${esc(a.id)}:${esc(q.id)}">${[1,2,3,4,5].map(n=>`<option value="${n}" ${n===3?'selected':''}>${n} / 5</option>`).join('')}</select></label><button class="btn btn-primary btn-small" data-exam-action="save-review" data-attempt="${esc(a.id)}" data-item="${esc(q.id)}">Save teacher feedback</button></article>`).join(''):'<div class="empty">No new exam writing or speaking responses to review. Complete a mock in Learning to see a submission here.</div>'}</div></div></section>`;
  }
  function renderBuilder(){
    const x=state.customQuestions.find(q=>q.id===editItem)||{};
    return `<form class="exam-builder" data-exam-builder><div class="exam-builder-row"><label>Exam<select name="provider"><option value="goethe" ${x.provider!=='telc'?'selected':''}>Goethe</option><option value="telc" ${x.provider==='telc'?'selected':''}>telc</option></select></label><label>Skill<select name="skill"><option value="listening" ${x.skill!=='reading'?'selected':''}>Listening</option><option value="reading" ${x.skill==='reading'?'selected':''}>Reading</option></select></label></div>
      <label>Scenario or label<input name="context" value="${esc(x.context||'Everyday message')}" maxlength="120" required></label>
      <label>German audio script or reading passage<textarea name="source" rows="3" maxlength="500" required>${esc(x.audio||x.passage||'')}</textarea></label>
      <label>Question<input name="question" value="${esc(x.question||'')}" maxlength="220" required></label>
      ${[0,1,2].map(i=>`<label>Answer ${String.fromCharCode(65+i)}<input name="option${i}" value="${esc(x.options?.[i]||'')}" maxlength="200" required></label>`).join('')}
      <label>Correct answer<select name="answer">${[0,1,2].map(i=>`<option value="${i}" ${x.answer===i?'selected':''}>${String.fromCharCode(65+i)}</option>`).join('')}</select></label>
      <label>Explanation<input name="explanation" value="${esc(x.explanation||'')}" maxlength="350" required></label>
      <div class="exam-builder-actions"><button type="button" class="btn btn-outline btn-small" data-exam-action="close-builder">Cancel</button><button type="button" class="btn btn-outline btn-small" data-exam-action="save-item" data-status="draft">Save draft</button><button type="button" class="btn btn-primary btn-small" data-exam-action="save-item" data-status="published">Review & publish</button></div><p class="exam-footnote">Publishing means the teacher has checked the prompt and answer key. It is available only to the demo learner in this browser.</p></form>`;
  }
  function saveItem(status){
    const form=document.querySelector('[data-exam-builder]');if(!form)return;
    const field=name=>form.querySelector(`[name="${name}"]`)?.value.trim()||'';
    const options=[0,1,2].map(i=>field(`option${i}`));const source=field('source');
    if(!field('context')||source.length<8||field('question').length<8||options.some(x=>x.length<2)||field('explanation').length<8){message('Complete the scenario, German source, question, all choices and explanation.');return;}
    const previous=state.customQuestions.find(q=>q.id===editItem);
    const skill=field('skill');const entry={id:previous?.id||`teacher-question-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,level:'A1',provider:field('provider'),skill,context:field('context'),audio:skill==='listening'?source:undefined,passage:skill==='reading'?source:undefined,question:field('question'),options,answer:Number(field('answer')),explanation:field('explanation'),status};
    state.customQuestions=previous?state.customQuestions.map(q=>q.id===previous.id?entry:q):[entry,...state.customQuestions];
    builderOpen=false;editItem=null;save();refresh();message(status==='published'?'Question approved and published to A1 practice.':'Question draft saved.');
  }
  function speakQuestion(id){
    const q=state.active?.items.find(x=>x.id===id);if(!q?.audio)return;
    if(!('speechSynthesis' in window)){message('German speech playback is unavailable in this browser.');return;}
    const utterance=new SpeechSynthesisUtterance(q.audio);utterance.lang='de-DE';utterance.rate=.83;
    const german=window.speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('de'));if(german)utterance.voice=german;
    window.speechSynthesis.cancel();window.speechSynthesis.speak(utterance);
  }
  function act(button){
    const type=button.dataset.examAction,value=button.dataset.value,a=state.active;
    if(type==='provider'){state.provider=value;page='home';save();refresh();return;}
    if(type==='level'){message(value==='A1'?'A1 practice is ready.':'That level is planned; no unverified exercises are shown.');return;}
    if(type==='start'){start(button.dataset.mode,button.dataset.skill);return;}
    if(type==='resume'){page='attempt';refresh();window.scrollTo({top:0,behavior:'instant'});return;}
    if(type==='home'){page='home';refresh();window.scrollTo({top:0,behavior:'instant'});return;}
    if(type==='result'){viewedResult=value;page='result';refresh();window.scrollTo({top:0,behavior:'instant'});return;}
    if(type==='new-item'){builderOpen=true;editItem=null;refresh();return;}
    if(type==='edit-item'){editItem=value;builderOpen=true;refresh();return;}
    if(type==='close-builder'){builderOpen=false;editItem=null;refresh();return;}
    if(type==='save-item'){saveItem(button.dataset.status);return;}
    if(type==='toggle-item'){const q=state.customQuestions.find(x=>x.id===value);if(q){q.status=q.status==='published'?'draft':'published';save();refresh();}return;}
    if(type==='save-review'){
      const id=button.dataset.attempt,item=button.dataset.item,compound=`${id}:${item}`;
      const note=document.querySelector(`[data-exam-feedback="${compound}"]`)?.value.trim();
      const rating=Number(document.querySelector(`[data-exam-rating="${compound}"]`)?.value);
      if(!note||note.length<8){message('Give at least one useful strength or next step.');return;}
      state.reviews[id]??={};state.reviews[id][item]={note,rating,reviewedAt:Date.now()};save();refresh();message('Practice feedback saved in this browser.');return;
    }
    if(!a)return;
    if(type==='speak'){speakQuestion(value);return;}
    if(type==='pause'){pause();refresh();return;}
    if(type==='unpause'){resume();refresh();return;}
    if(type==='submit'){submit();return;}
    if(a.paused)return;
    if(type==='jump'){a.index=Math.min(a.items.length-1,Math.max(0,Number(value)||0));save();refresh();return;}
    if(type==='answer'){const q=a.items[a.index];if(q?.type==='choice'){a.answers[q.id]=Number(value);save();refresh();}return;}
  }
  document.addEventListener('click',e=>{const button=e.target.closest?.('button[data-exam-action]');if(button && !button.disabled)act(button);});
  document.addEventListener('input',e=>{const id=e.target.dataset?.examText;if(id && state.active && !state.active.paused){state.active.texts[id]=e.target.value;save();}});
  setInterval(()=>{const a=state.active;if(!a||a.paused||a.mode!=='mock')return;if(remaining(a)<=0){submit(true);message('Mini-mock time has ended. Your answers were saved.');return;}const timer=document.querySelector('[data-exam-timer]');if(timer)timer.textContent=formatTime(remaining(a));},1000);
  function reset(){state=blank();page='home';viewedResult=null;editItem=null;builderOpen=false;save();}
  window.GermanExamStudio={renderLearner,renderTeacher,reset};
})();
