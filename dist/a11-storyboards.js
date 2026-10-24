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

/* Six original, chapter-specific scalable scenes. Not repeated publisher or stock photography. */
function originalScene(n){
 const scene={
  1:'<circle cx="115" cy="102" r="26" fill="#a9654b"/><circle cx="283" cy="102" r="26" fill="#b07a65"/><path d="M70 218q0-83 45-83t45 83" fill="#4c7897"/><path d="M236 218q0-83 47-83t47 83" fill="#b95f62"/><rect x="155" y="43" width="90" height="43" rx="18" fill="#fff"/><text x="200" y="70" font-size="15" text-anchor="middle" fill="#6d3b50">Hallo!</text>',
  2:'<circle cx="108" cy="184" r="43" fill="none" stroke="#456d72" stroke-width="9"/><circle cx="285" cy="184" r="43" fill="none" stroke="#456d72" stroke-width="9"/><path d="M108 184l59-88 47 88H108l107-70 70 70" stroke="#b14d49" stroke-width="9" fill="none"/><circle cx="318" cy="50" r="26" fill="#f3b65e"/><path d="M188 85l16-32" stroke="#456d72" stroke-width="7"/>',
  3:'<rect x="53" y="50" width="292" height="165" rx="15" fill="#f3f2e6"/><path d="M90 55v165M175 55v165M270 55v165M54 115h290M54 176h290" stroke="#c5d1d0" stroke-width="14"/><path d="M88 176h87V115h96" stroke="#a8514b" stroke-width="7" stroke-dasharray="10 8" fill="none"/><circle cx="88" cy="176" r="12" fill="#2f7e6a"/><circle cx="271" cy="115" r="13" fill="#b95049"/><text x="195" y="240" text-anchor="middle" font-size="15" fill="#593f4b">Wo ist der Bahnhof?</text>',
  4:'<path d="M95 90h205l-20 125H116Z" fill="#c18d62"/><path d="M88 91h220" stroke="#755248" stroke-width="10"/><circle cx="148" cy="91" r="32" fill="#d7544a"/><circle cx="222" cy="89" r="29" fill="#e8bd67"/><circle cx="264" cy="111" r="25" fill="#7eaa6c"/><path d="M148 60l7-15M222 63l9-12" stroke="#497d58" stroke-width="6"/><text x="197" y="246" text-anchor="middle" font-size="15" fill="#593f4b">Auf dem Markt</text>',
  5:'<rect x="79" y="35" width="241" height="188" rx="13" fill="#fff"/><rect x="79" y="35" width="241" height="49" rx="13" fill="#b76f75"/><path d="M117 97v92M164 97v92M211 97v92M258 97v92M91 126h214M91 165h214" stroke="#dcd8d6" stroke-width="5"/><circle cx="246" cy="154" r="33" fill="#fff6da" stroke="#785665" stroke-width="6"/><path d="M246 154v-21m0 21 16 10" stroke="#785665" stroke-width="5" stroke-linecap="round"/>',
  6:'<rect x="65" y="71" width="275" height="158" rx="12" fill="#ecddc9"/><path d="M95 213h215" stroke="#856557" stroke-width="10"/><ellipse cx="139" cy="152" rx="39" ry="16" fill="#fff"/><ellipse cx="250" cy="152" rx="39" ry="16" fill="#fff"/><rect x="112" y="114" width="53" height="40" rx="6" fill="#fff"/><rect x="223" y="114" width="53" height="40" rx="6" fill="#fff"/><path d="M165 129q32-17 0 24M275 129q32-17 0 24" fill="none" stroke="#fff" stroke-width="8"/><path d="M121 102q-12-13 0-24M245 102q-12-13 0-24" stroke="#b8a298" fill="none" stroke-width="4"/><text x="204" y="56" text-anchor="middle" font-size="18" fill="#5f3a4c">Einladung ins Café</text>'
 };
 return '<svg viewBox="0 0 400 270" width="100%" height="270" role="img" aria-label="Original chapter '+n+' teaching illustration" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="270" rx="18" fill="'+({1:'#e6eee9',2:'#e7f1e7',3:'#e9f0e5',4:'#f7e7d6',5:'#e3edf1',6:'#f7e8df'}[n])+'"/>'+scene[n]+'</svg>';
}
function render(n){const d=STORIES[n];if(!d)return '';const photo=window.GERMAN_RICH_SCENES?.data?.chapters?.[n]?.[d.photo];
const photoMarkup='<div class="a11-sb-photo a11-sb-original-scene">'+originalScene(n)+'<strong>'+esc(d.title)+'</strong><small>'+esc(d.focus)+'</small></div>';
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