/* Phase 5 teacher authoring: independent, original classroom demo workflows. Browser local, never actual enrolment. */
(()=>{
'use strict';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const templates=[
{id:'conversation',title:'Everyday conversation',description:'Vocabulary, listen, role-play and a quick check'},
{id:'listening',title:'Listening workshop',description:'Hear, select and speak in familiar chapter situations'},
{id:'grammar',title:'Grammar in action',description:'Find a pattern, choose an answer, use it in context'},
{id:'assessment',title:'Chapter assessment',description:'Skill check, language in context and final review'}
];
const defaultRubric=['Meaning and task completion','Relevant A1 vocabulary and grammar','Clarity and appropriate register'];
const validDate=v=>!v||/^\d{4}-\d{2}-\d{2}$/.test(v);
const localToday=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');};
function windowState(s,today=localToday()){
 if(s.status!=='published')return 'draft';
 if(s.releaseFrom&&today<s.releaseFrom)return 'upcoming';
 if(s.releaseUntil&&today>s.releaseUntil)return 'closed';
 return 'available';
}
function rubric(s){return (Array.isArray(s.rubric)&&s.rubric.length===3?s.rubric:defaultRubric).map(x=>String(x||''));}
function validate(s){if(!['supported','core','challenge'].includes(s.difficulty||'core'))return 'Select a supported practice difficulty.';if(!['learner','group'].includes(s.audience))return 'Choose an available demo audience.';if(!validDate(s.releaseFrom)||!validDate(s.releaseUntil))return 'Use valid YYYY-MM-DD assignment dates.';if(s.releaseFrom&&s.releaseUntil&&s.releaseFrom>s.releaseUntil)return 'The assignment closing date must not precede its opening date.';if(rubric(s).some(x=>x.trim().length<10))return 'Write three meaningful rubric criteria before submitting for approval.';return null;}
function templatesHtml(ch){return '<section class="p5-template-panel" aria-label="Reusable chapter activity templates"><div><span class="eyebrow">Quick-start experiences</span><h3>Build from Chapter '+ch.number+'</h3><p>Start with independently written exercises based on this chapter, then edit and review before publication.</p></div><div class="p5-template-grid">'+templates.map(t=>'<button type="button" data-p5-template="'+t.id+'" data-p5-chapter="'+ch.number+'"><strong>'+esc(t.title)+'</strong><span>'+esc(t.description)+'</span><small>Use template →</small></button>').join('')+'</div></section>';}
function makeBlocks(mode,ch,lesson,fromBlock,pick){
 const words=(lesson?.words||[]).slice(0,5).map(([de,en])=>de+' | '+en).join('\n');
 const phrase=lesson?.phrase?.de||'Guten Tag. Wie geht es Ihnen?';
 const qGrammar=pick('Grammar')||pick('Vocabulary')||pick('Listening');
 const qVocab=pick('Vocabulary')||pick('Grammar');
 const mkQ=(type,q)=>({...fromBlock(type),title:type==='assessment'?'Final chapter check':'Check the language',question:q?.prompt||'Which answer is correct?',options:(q?.options||['Ja','Nein','Danke']).join('\n'),correct:String(q?.correct??0),explanation:q?.why||'Review the example and the relevant phrase.'});
 const vocab={...fromBlock('vocabulary'),title:'Notice useful chapter words',entries:words||'Hallo | hello\nDanke | thank you'};
 const listen={...fromBlock('listening'),title:'Listen and repeat the chapter model',phrase,instruction:'Listen twice. Repeat slowly, then explain the meaning in your own words.'};
 const dialog={...fromBlock('roleplay'),title:'Use this chapter in conversation',prompt:ch.originalTeacherStudioActivity||ch.originalLessonGoal,starter:phrase,criteria:'Complete the conversation; use accurate chapter language and suitable politeness.'};
 if(mode==='listening')return [listen,vocab,{...listen,id:fromBlock('listening').id,title:'Repeat with a new purpose',instruction:'Listen again. Identify the important nouns and verbs, then repeat the complete phrase.'},mkQ('assessment',qVocab)];
 if(mode==='grammar')return [vocab,mkQ('quiz',qGrammar),dialog,mkQ('assessment',qVocab)];
 if(mode==='assessment')return [listen,mkQ('quiz',qGrammar),dialog,mkQ('assessment',qVocab)];
 return [vocab,listen,dialog,mkQ('assessment',qVocab)];
}
function composerFields(s){
 const options=[['supported','Guided · more support'],['core','Standard · independent'],['challenge','Extension · extra challenge']];
 const select='<label class="composer-field"><span>Practice difficulty</span><select data-session-field="difficulty">'+options.map(([key,label])=>'<option value="'+key+'" '+((s.difficulty||'core')===key?'selected':'')+'>'+label+'</option>').join('')+'</select><small>Changes hints and expected independence, not the textbook level.</small></label>';
 const date=(key,label)=>'<label class="composer-field"><span>'+label+'</span><input type="date" data-session-field="'+key+'" value="'+esc(s[key]||'')+'" /><small>Optional · dates apply in the learner browser’s local time.</small></label>';
 const r=rubric(s);
 return '<section class="p5-config"><div class="p5-config-title"><h4>Classroom configuration</h4><p>All audiences are illustrative in this demo. Date windows control visibility; no invitations or notifications are sent.</p></div><div class="composer-meta-grid">'+select+date('releaseFrom','Open assignment from')+date('releaseUntil','Close assignment after')+'</div><h4>Three-part assessment rubric</h4><p>Reviewers use these criteria when grading a written role-play. No automatic speech scoring is performed.</p><div class="p5-rubric-editor">'+r.map((v,i)=>'<label class="composer-field"><span>Criterion '+(i+1)+'</span><input data-p5-rubric="'+i+'" maxlength="140" value="'+esc(v)+'" /></label>').join('')+'</div><p class="p5-review-rule"><b>Review workflow:</b> Save draft → Submit for review → Approve content → Publish to demo learner/group. Editing resets approval. Existing published demonstration sessions are retained.</p></section>';
}
function shelfInfo(s){
 const status=s.status==='published'?'Assigned':s.reviewStatus==='approved'?'Approved':s.reviewStatus==='pending'?'Awaiting content review':'Draft';
 const availability=windowState(s);
 return '<div class="p5-shelf-meta"><span>'+esc(status)+'</span> · <span>'+esc((s.difficulty||'core'))+' practice</span>'+ (s.releaseFrom?' · Opens '+esc(s.releaseFrom):'')+(s.releaseUntil?' · Closes '+esc(s.releaseUntil):'')+(availability==='upcoming'?' · Not yet visible to learner':availability==='closed'?' · Closed to learner':'')+'</div>';
}
function shelfActions(s){
 if(s.status==='published')return '';
 return '<div class="p5-approval-actions">'+(s.reviewStatus==='pending'?'<button type="button" class="btn btn-primary btn-small" data-p5-approve="'+esc(s.id)+'">Approve content</button><button type="button" class="btn btn-outline btn-small" data-p5-changes="'+esc(s.id)+'">Request changes</button>':s.reviewStatus==='approved'?'<span class="p5-approved">✓ Content approved for demo publication</span>':'<span class="p5-pending">Save and submit the completed session for review.</span>')+'</div>';
}
function difficultyInfo(s){
 const level=s.difficulty||'core';
 const guidance=level==='supported'?'Supported: follow the model phrase, keep sentences short and use the provided vocabulary.':level==='challenge'?'Extension: add two relevant original sentences and justify your choice of wording.':'Standard: complete the conversation independently using your chapter language.';
 return '<div class="p5-difficulty-note"><b>'+esc(level.charAt(0).toUpperCase()+level.slice(1))+' practice</b><p>'+esc(guidance)+'</p></div>';
}
function reviewInputs(s,id){
 return '<fieldset class="p5-score-form"><legend>Teacher rubric · 1–4 for each criterion</legend>'+rubric(s).map((criterion,i)=>'<label><span>'+esc(criterion)+'</span><select data-p5-grade="'+esc(id)+'|'+i+'"><option value="">Select score</option>'+[[1,'1 · Emerging'],[2,'2 · Developing'],[3,'3 · Meets goal'],[4,'4 · Strong']].map(([n,desc])=>'<option value="'+n+'">'+desc+'</option>').join('')+'</select></label>').join('')+'</fieldset>';
}
function feedbackText(s,review){
 if(!review?.rubricScores)return '';
 const score=review.rubricScores.reduce((a,b)=>a+Number(b),0);
 return '<div class="p5-graded"><strong>Teacher rubric: '+score+'/12 (practice only)</strong>'+rubric(s).map((c,i)=>'<p>'+esc(c)+': '+Number(review.rubricScores[i])+'/4</p>').join('')+'</div>';
}
window.GERMAN_CLASSROOM={templates,defaultRubric,rubric,validate,windowState,templatesHtml,makeBlocks,composerFields,shelfInfo,shelfActions,difficultyInfo,reviewInputs,feedbackText};
})();