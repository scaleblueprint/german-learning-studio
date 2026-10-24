/* Original teacher-review-pending situational mini-storyboards for A1.1 chapters 1–6.
   Each storyboard has a relevant credited contextual photograph and an independently authored dialogue. */
(()=>{'use strict';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const STORIES={
1:{title:'Meeting a new classmate',photo:0,focus:'Informal names and introductions',turns:[['Mila','Hallo! Ich heiße Mila.','Hello! My name is Mila.'],['Lena','Hallo Mila! Ich heiße Lena.','Hi Mila! My name is Lena.'],['Mila','Woher kommst du?','Where are you from?'],['Lena','Ich komme aus Deutschland.','I come from Germany.']]},
2:{title:'A weekend plan',photo:0,focus:'Hobbies and weekdays',turns:[['Lena','Hast du am Samstag Zeit?','Are you free on Saturday?'],['Jonas','Ja! Wir können Rad fahren.','Yes! We can go cycling.'],['Lena','Super! Bis Samstag.','Great! See you Saturday.'],['Jonas','Bis Samstag!','See you Saturday!']]},
3:{title:'Asking for directions',photo:2,focus:'Places and polite directions',turns:[['Gast','Entschuldigung, wo ist der Bahnhof?','Excuse me, where is the railway station?'],['Mara','Gehen Sie geradeaus und dann links.','Go straight ahead and then left.'],['Gast','Vielen Dank!','Thank you very much!'],['Mara','Gern geschehen.','You are welcome.']]},
4:{title:'Buying tomatoes at the market',photo:1,focus:'Food, articles and shopping',turns:[['Kundin','Guten Tag. Haben Sie Tomaten?','Hello. Do you have tomatoes?'],['Verkäufer','Ja, hier sind Tomaten.','Yes, here are tomatoes.'],['Kundin','Ich nehme zwei Tomaten, bitte.','I will take two tomatoes, please.'],['Verkäufer','Gerne!','Of course!']]},
5:{title:'Finding an appointment',photo:2,focus:'Clock times, planning and polite refusal',turns:[['Aylin','Hast du am Montag um acht Uhr Zeit?','Are you free on Monday at eight?'],['Nico','Nein, ich muss arbeiten.','No, I have to work.'],['Aylin','Und am Dienstag um halb neun?','And on Tuesday at half past eight?'],['Nico','Ja, das geht!','Yes, that works!']]},
6:{title:'An invitation to a café',photo:1,focus:'Invitations, dates and meeting places',turns:[['Nina','Ich lade dich am Samstag ins Café ein.','I invite you to the café on Saturday.'],['Ben','Danke! Um wie viel Uhr?','Thank you! At what time?'],['Nina','Um vier Uhr. Kommst du?','At four o’clock. Are you coming?'],['Ben','Ja, gern!','Yes, gladly!']]}
};
const fallback={1:'🎓',2:'🚴',3:'🧭',4:'🥬',5:'📅',6:'☕'};
function render(n){const d=STORIES[n];if(!d)return '';const photo=window.GERMAN_RICH_SCENES?.data?.chapters?.[n]?.[d.photo];
const photoMarkup=photo?'<div class="a11-sb-photo"><img src="'+esc(photo.src)+'" loading="lazy" alt="'+esc(photo.alt)+'" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="a11-sb-photo-fallback" hidden aria-hidden="true">'+fallback[n]+'</div><a href="'+esc(photo.source)+'" target="_blank" rel="noopener noreferrer">Photo: '+esc(photo.credit)+'</a></div>':'<div class="a11-sb-photo-fallback" aria-hidden="true">'+fallback[n]+'</div>';
return '<section class="a11-storyboard" data-storyboard="'+n+'" aria-label="Chapter '+n+' visual dialogue">'+
'<div class="a11-sb-head"><span class="eyebrow">Practice in a real situation · Chapter '+n+'</span><h5>'+esc(d.title)+'</h5><p>'+esc(d.focus)+'. Reveal the conversation one turn at a time, then listen and check each meaning.</p></div>'+
'<div class="a11-sb-layout">'+photoMarkup+'<div class="a11-sb-turns">'+d.turns.map((turn,i)=>
'<article class="a11-sb-turn '+(i%2?'a11-sb-reply':'')+'" data-sb-turn="'+i+'" '+(i?'hidden':'')+'><span class="a11-sb-speaker">'+esc(turn[0])+'</span><strong lang="de">'+esc(turn[1])+'</strong><div class="a11-sb-tools"><button type="button" data-sb-speak="'+i+'">♫ Listen</button><details><summary>English meaning</summary><p>'+esc(turn[2])+'</p></details></div></article>').join('')+
'<p class="a11-sb-progress" aria-live="polite" data-sb-progress>Turn 1 of '+d.turns.length+'</p><div class="a11-sb-actions"><button type="button" data-sb-next>Show next line →</button><button type="button" data-sb-reset>Start over</button></div></div></div></section>';}
function init(root=document){root.querySelectorAll('[data-storyboard]').forEach(section=>{const n=Number(section.dataset.storyboard),d=STORIES[n];if(!d)return;let visible=1;
const turns=[...section.querySelectorAll('[data-sb-turn]')],status=section.querySelector('[data-sb-progress]'),next=section.querySelector('[data-sb-next]');
function update(){turns.forEach((turn,i)=>{turn.hidden=i>=visible;});status.textContent='Turn '+visible+' of '+turns.length;next.disabled=visible===turns.length;next.textContent=visible===turns.length?'Dialogue complete':'Show next line →';}
next.addEventListener('click',()=>{visible=Math.min(turns.length,visible+1);update();});
section.querySelector('[data-sb-reset]').addEventListener('click',()=>{visible=1;update();});
section.querySelectorAll('[data-sb-speak]').forEach(b=>b.addEventListener('click',()=>speak(d.turns[Number(b.dataset.sbSpeak)][1])));
update();});}
function speak(t){if(typeof speechSynthesis==='undefined')return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='de-DE';u.rate=.84;speechSynthesis.speak(u);}catch(_){}}
window.GERMAN_A11_STORYBOARDS={render,init,stories:STORIES};
})();