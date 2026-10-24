/* Original image-led reinforcement, separate from protected textbook exercises. */
(()=>{
 const indices={1:[0,1],2:[0,1],3:[1,2],4:[0,1],5:[0,2],6:[0,1]};
 const data=()=>window.GERMAN_RICH_SCENES?.data?.chapters||{};
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const get=(chapter,index)=>{
   const n=Number(chapter),i=Number(index),photo=data()[n]?.[indices[n]?.[i]];
   if(!photo||!Number.isInteger(i)||i<0||i>1)return null;
   const chapterScenes=data()[n]||[],other=chapterScenes.filter((_,j)=>j!==indices[n][i]);
   const wrong1=other[0]?.de,wrong2=other[1]?.de;
   if(!wrong1||!wrong2)return null;
   const correct=(n+i)%3,options=[wrong1,wrong2];options.splice(correct,0,photo.de);
   return {photo,question:'Look at the picture. Which German sentence fits this everyday situation?',options,correct,why:photo.cue+'. '+photo.de};
 };
 const stats=(chapter,progress={})=>{
   const n=Number(chapter),items=[0,1].filter(i=>get(n,i));
   return {answered:items.filter(i=>progress[n+':'+i]).length,correct:items.filter(i=>progress[n+':'+i]?.correct).length,total:items.length};
 };
 const render=(chapter,progress={},selection={})=>{
   const n=Number(chapter),tasks=[get(n,0),get(n,1)];if(tasks.some(x=>!x))return '';
   const score=stats(n,progress);
   return '<section class="photo-practice" aria-label="Chapter '+n+' picture practice"><div class="visual-section-title">'+
     '<span class="eyebrow">Look · Choose · Say</span><h2>German through real-life pictures</h2>'+
     '<p>Explore each original illustrated situation, choose a German phrase that fits, and listen to the model after checking. Teacher language review is pending.</p>'+
     '<strong>'+score.answered+'/'+score.total+' attempted · '+score.correct+' correct</strong></div><div class="photo-practice-grid">'+
     tasks.map((q,i)=>{
       const key=n+':'+i,answer=progress[key],selected=answer?answer.chosen:selection[key],p=q.photo;
       return '<article class="card photo-practice-card"><figure class="a11-workbook-scene" role="img" aria-label="'+esc(p.alt)+'"><div class="a11-workbook-scene-art" aria-hidden="true">'+({1:['👥','🏫'],2:['🚲','💼'],3:['🚋','🧭'],4:['🥖','🛒'],5:['⏰','📅'],6:['🎂','🍽️']}[n]?.[i]||'📖')+'</div><figcaption>'+esc(p.title)+' · Original visual practice</figcaption></figure>'+
         '<div class="photo-practice-content"><span class="eyebrow">Scene '+(i+1)+'</span><h3>'+esc(q.question)+'</h3>'+
         '<div class="photo-practice-choices">'+q.options.map((phrase,j)=>'<button type="button" lang="de" class="choice '+(selected===j?'selected ':'')+
         (answer&&j===q.correct?'correct ':'')+(answer&&j===answer.chosen&&!answer.correct?'incorrect':'')+
         '" data-photo-choice="'+key+':'+j+'" '+(answer?'disabled':'')+'>'+esc(phrase)+'</button>').join('')+'</div>'+
         (answer?'<div class="feedback '+(answer.correct?'':'error')+'"><b>'+(answer.correct?'Correct!':'Not quite.')+'</b> '+esc(q.why)+
           '<button type="button" class="view-link" data-speak="'+esc(q.options[q.correct])+'">♫ Listen to the model</button></div>'+
           '<button type="button" class="view-link" data-photo-retry="'+key+'">Retry scene</button>':
           '<button type="button" class="btn btn-primary btn-small" data-photo-check="'+key+'" '+(selected===undefined?'disabled':'')+'>Check phrase</button>')+
         '</div></article>';
     }).join('')+'</div><p class="workbook-disclaimer">Original illustrated practice, distinct from the photographic chapter gallery. Scores remain in this browser only.</p></section>';
 };
 window.GERMAN_PHOTO_PRACTICE={get,stats,render};
})();
