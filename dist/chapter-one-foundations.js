/* Original beginner-friendly Chapter 1 foundations: counting and spelling.
   Mapped to uploaded Netzwerk A1.1 chapter-one topics. No textbook passage or audio copied. */
(()=>{
'use strict';
const numbers=['eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn','zwanzig'];
const alphabet=[['A','ah'],['B','beh'],['C','tseh'],['D','deh'],['E','eh'],['F','eff'],['G','geh'],['H','hah'],['I','ee'],['J','yot'],['K','kah'],['L','ell'],['M','emm'],['N','enn'],['O','oh'],['P','peh'],['Q','koo'],['R','err'],['S','ess'],['T','teh'],['U','oo'],['V','fau'],['W','veh'],['X','iks'],['Y','üpsilon'],['Z','tset']];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function numberItems(from,to){
 return numbers.slice(from-1,to).map((word,i)=>`<li><span class="a11-number-digit">${from+i}</span><strong lang="de">${esc(word)}</strong><button type="button" class="view-link" data-speak="${esc(word)}" aria-label="Hear German number ${from+i}">♫ Listen</button></li>`).join('');
}
function render(){
 return `<section class="a11-foundation" id="chapter-1-numbers" aria-label="Learn numbers 1 to 20 and spell your name">
  <div class="a11-foundation-head"><span class="eyebrow">Chapter 1 · Learn before you practise</span><h5>Numbers 1–20 · Zahlen von 1 bis 20</h5><p>Learn the complete set below before the introduction challenge. Read, listen and say the numbers aloud. Then practise hearing them in sentences.</p></div>
  <div class="a11-number-groups">
    <div><h6>1–10 · Basic numbers</h6><ol class="a11-number-list">${numberItems(1,10)}</ol></div>
    <div><h6>11–20 · Patterns and exceptions</h6><ol class="a11-number-list" start="11">${numberItems(11,20)}</ol></div>
  </div>
  <div class="a11-foundation-rule"><h6>How to recognise and build these numbers</h6><p><strong>11 elf</strong> and <strong>12 zwölf</strong> have their own forms. Numbers <strong>13–19</strong> end in <strong>-zehn</strong>, meaning ten: <em>dreizehn</em>, <em>vierzehn</em>, <em>fünfzehn</em> and so on. Notice the shortened roots in <strong>16 sechzehn</strong> (not sechszehn) and <strong>17 siebzehn</strong> (not siebenzehn). Finally, <strong>20</strong> is <strong>zwanzig</strong>.</p><p><strong>Eins</strong> is used when counting. Before a noun, you often hear <strong>ein</strong> or <strong>eine</strong>, as in <em>ein Buch</em> and <em>eine Frau</em>. A phone number may also contain <strong>null</strong> (zero).</p></div>
  <div class="a11-foundation-examples"><h6>See how numbers work in conversation</h6>
    <div><strong lang="de">Wie alt bist du? Ich bin zwölf Jahre alt.</strong><span>How old are you? I'm twelve years old.</span><button type="button" class="view-link" data-speak="Wie alt bist du? Ich bin zwölf Jahre alt.">♫ Listen</button></div>
    <div><strong lang="de">Wie viele Bücher hast du? Ich habe drei Bücher.</strong><span>How many books do you have? I have three books.</span><button type="button" class="view-link" data-speak="Wie viele Bücher hast du? Ich habe drei Bücher.">♫ Listen</button></div>
    <div><strong lang="de">Welche Zahl hörst du? Siebzehn.</strong><span>Which number do you hear? Seventeen.</span><button type="button" class="view-link" data-speak="Welche Zahl hörst du? Siebzehn.">♫ Listen</button></div>
  </div>
  <div class="a11-foundation-spelling" id="chapter-1-spelling"><h5>Learn the German alphabet and spell your name</h5><p>Letters have German names. Listen to each letter and say it aloud before you try spelling your first name. The sound hints below are approximations; the speech button uses the German voice available on your device.</p>
    <ol class="a11-alphabet-list" aria-label="German alphabet in order">${alphabet.map(([letter,cue])=>`<li><strong>${letter}</strong><small>${esc(cue)}</small><button type="button" class="view-link" data-speak="${letter}" aria-label="Hear German letter ${letter}">♫</button></li>`).join('')}</ol>
    <p><strong>Notice:</strong> J is called <em>Jot</em>, V is <em>Vau</em>, W is <em>We</em> and Z is <em>Zett</em>. German also uses <strong>ä, ö, ü</strong> (umlauts) and <strong>ß</strong> (Eszett).</p>
    <div class="a11-foundation-examples"><h6>A short spelling conversation</h6><div><strong lang="de">Wie schreibt man Ihren Namen? Ich buchstabiere: M – I – N – A.</strong><span>How do you write your name? I'll spell it: M–I–N–A.</span><button type="button" class="view-link" data-speak="Wie schreibt man Ihren Namen? Ich buchstabiere: M, I, N, A.">♫ Listen</button></div></div>
  </div>
  <div class="a11-foundation-check"><h6>Practice before the chapter challenge</h6>
    <p><strong>1.</strong> Read these numbers, say them aloud, and check: <strong>4 · 8 · 12 · 16 · 17 · 20</strong>.</p><details><summary>Check the six answers</summary><p lang="de">vier · acht · zwölf · sechzehn · siebzehn · zwanzig</p></details>
    <p><strong>2.</strong> Say the German word for <strong>19</strong>. Why is seventeen written <em>siebzehn</em> instead of <em>siebenzehn</em>?</p><details><summary>Check the explanation</summary><p><strong>19 = neunzehn.</strong> In seventeen, the word <em>sieben</em> loses the final <em>-en</em> before <em>-zehn</em>: <strong>siebzehn</strong>.</p></details>
    <p><strong>3.</strong> Spell your own first name one letter at a time. Ask a partner: <strong lang="de">Können Sie das bitte buchstabieren?</strong> (Could you please spell that?)</p>
  </div>
  </section>`;
}
window.GERMAN_CHAPTER_ONE={numbers,alphabet,render};
})();
