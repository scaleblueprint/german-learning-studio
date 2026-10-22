/* Original, scalable SVG scenes inspired by course themes; not publisher artwork.
   Each scene is a visual aid for the matching uploaded original Netzwerk A1.1 chapter. */
(() => {
  const base=(name,body)=>`<figure class="chapter-visual" role="img" aria-label="${name}">
    <svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect width="640" height="320" rx="26" fill="#fff9ed"/>
      <circle cx="566" cy="49" r="80" fill="#ffda81" opacity=".38"/>
      <circle cx="34" cy="286" r="93" fill="#f7aaa0" opacity=".25"/>
      ${body}
    </svg><figcaption>${name} · Original AmberTheory illustration</figcaption></figure>`;
  const label=(x,y,t,fill="#233f39",size=17)=>`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-family="Arial, sans-serif" font-weight="700">${t}</text>`;
  const pill=(x,y,w,t,bg="#fff",ink="#233f39")=>`<rect x="${x}" y="${y}" width="${w}" height="40" rx="20" fill="${bg}" stroke="#dacfc1"/>${label(x+14,y+27,t,ink,16)}`;
  const scenes={
  1:base('Greetings, names and languages',
    `<rect x="46" y="64" width="548" height="214" rx="26" fill="#f4e7d4"/>
       <circle cx="169" cy="144" r="41" fill="#e8ab7c"/><path d="M112 256 Q112 187 168 188 Q223 185 231 256Z" fill="#db7057"/>
       <path d="M141 126 Q149 111 162 109 Q182 108 196 126" stroke="#5f3d35" stroke-width="19" fill="none" stroke-linecap="round"/>
       <circle cx="438" cy="144" r="41" fill="#b98664"/><path d="M381 256 Q382 187 438 188 Q491 185 497 256Z" fill="#3b8d79"/>
       <path d="M411 124 Q413 101 438 103 Q467 105 468 127" stroke="#382b33" stroke-width="18" fill="none" stroke-linecap="round"/>
       <rect x="59" y="45" width="188" height="52" rx="18" fill="#fff" stroke="#e7d5bd"/>${label(79,78,'Guten Tag!')}
       <rect x="364" y="42" width="208" height="54" rx="18" fill="#fff" stroke="#e7d5bd"/>${label(385,76,'Ich heiße Mia.')}
       ${pill(249,198,140,'Wie heißt du?','#ffe5a5')}`),
  2:base('Hobbies, work and arranging meetings',
    `<rect x="52" y="48" width="350" height="226" rx="20" fill="#fff" stroke="#d8d2c5" stroke-width="2"/>
     <rect x="52" y="48" width="350" height="54" rx="20" fill="#e98d66"/><rect x="52" y="81" width="350" height="21" fill="#e98d66"/>
     ${label(76,83,'Unsere Woche','#233f39',22)}
     ${['Mo','Di','Mi','Do','Fr'].map((day,i)=>`<rect x="${70+i*64}" y="126" width="55" height="49" rx="11" fill="${i===2?'#ffe49a':'#f3eee5'}" stroke="#e0d7c9"/>${label(80+i*64,155,day)}`).join('')}
     <rect x="92" y="196" width="263" height="51" rx="13" fill="#dbede1"/>${label(111,227,'Mittwoch · 17 Uhr')}
     <circle cx="506" cy="146" r="73" fill="#f5cd76"/><circle cx="505" cy="147" r="47" fill="none" stroke="#316f68" stroke-width="8"/>
     <path d="M490 136 l20 22 27 -41" stroke="#316f68" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
     ${pill(432,235,146,'Rad fahren','#ffffff')}`),
  3:base('City places, transport and directions',
    `<rect x="54" y="42" width="528" height="239" rx="18" fill="#e9f2e9"/>
    <path d="M54 123H582 M54 203H582 M179 42V281 M420 42V281" stroke="#fff" stroke-width="34"/>
    <path d="M103 76H175V195H324V238" fill="none" stroke="#e88961" stroke-width="9" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="11 13"/>
    <rect x="66" y="50" width="109" height="47" rx="10" fill="#fff"/>${label(82,79,'Bahnhof')}
    <rect x="241" y="50" width="153" height="47" rx="10" fill="#ffd98d"/>${label(257,79,'Rathaus')}
    <rect x="439" y="50" width="130" height="47" rx="10" fill="#fff"/>${label(457,79,'Museum')}
    <rect x="242" y="214" width="160" height="47" rx="10" fill="#d1e7d8"/>${label(272,243,'Park')}
    <circle cx="102" cy="76" r="12" fill="#e16a52" stroke="#fff" stroke-width="4"/>
    <path d="M316 230 l18 8 -18 10" fill="none" stroke="#e16a52" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    ${pill(441,212,130,'geradeaus','#fff')}`),
  4:base('Food, shopping and polite orders',
    `<rect x="60" y="58" width="518" height="225" rx="24" fill="#f7eddd"/>
     <rect x="83" y="89" width="307" height="151" rx="14" fill="#fff" stroke="#dfcfb4" stroke-width="3"/>
     <path d="M83 131H390" stroke="#dfcfb4" stroke-width="3"/>
     <rect x="91" y="59" width="294" height="41" rx="12" fill="#ea9469"/>${label(110,86,'Im Lebensmittelgeschäft','#fff',19)}
     <circle cx="143" cy="182" r="27" fill="#d95747"/><path d="M144 151 Q151 141 159 146" fill="none" stroke="#42734c" stroke-width="6"/>
     <rect x="214" y="164" width="73" height="35" rx="10" fill="#d9ad68"/><path d="M217 166 Q251 135 285 166" fill="#f5ce88"/>
     <path d="M330 149l24 13v50h-48v-50z" fill="#c4e0e2" stroke="#39757b" stroke-width="2"/><path d="M330 149l0 63" stroke="#39757b" stroke-width="2"/>
     ${label(109,226,'Apfel', '#5d564d',15)}${label(230,226,'Brot','#5d564d',15)}${label(314,226,'Milch','#5d564d',15)}
     ${pill(418,107,136,'Wie viel?','#fff')}
     ${pill(416,167,153,'Ein Brot, bitte.','#ffdc92')}`),
  5:base('Time, daily routine and appointments',
    `<circle cx="190" cy="158" r="100" fill="#fff" stroke="#dcdbcf" stroke-width="9"/>
     <circle cx="190" cy="158" r="81" fill="#f7faf4"/>
     <path d="M190 90v11 M258 158h-11 M190 226v-11 M122 158h11" stroke="#245e57" stroke-width="5" stroke-linecap="round"/>
     <path d="M190 158V109 M190 158l-48 29" stroke="#d76953" stroke-width="8" stroke-linecap="round"/>
     <circle cx="190" cy="158" r="9" fill="#245e57"/>
     ${pill(108,258,164,'Um acht Uhr','#fff')}
     <path d="M352 90V254" stroke="#5c9781" stroke-width="6" stroke-linecap="round"/>
     ${[[95,'07:00','Frühstück'],[154,'09:00','Arbeit'],[213,'18:00','Deutsch lernen']].map(([y,t,l])=>`<circle cx="352" cy="${y}" r="10" fill="#e88766" stroke="#fff" stroke-width="4"/>${label(377,y+5,t,'#996240',17)}${label(449,y+5,l,'#244e46',18)}`).join('')}`),
  6:base('Invitations, birthdays and restaurant conversations',
    `<rect x="63" y="49" width="296" height="235" rx="22" fill="#fff" stroke="#ebd7ae" stroke-width="3"/>
     <rect x="63" y="49" width="296" height="63" rx="22" fill="#e68e70"/><rect x="63" y="92" width="296" height="20" fill="#e68e70"/>
     ${label(87,88,'Einladung','#fff',26)}
     ${label(92,150,'Geburtstag!', '#27544f',24)}
     ${label(92,187,'Samstag · 16 Uhr','#595d4d',18)}
     ${label(92,220,'Kommst du?', '#595d4d',21)}
     <path d="M299 150 l7 -17 7 17 18 0 -14 11 5 17 -16 -10 -16 10 5 -17 -14 -11Z" fill="#f4c867"/>
     <rect x="401" y="67" width="169" height="183" rx="16" fill="#f9ede2" stroke="#d6b49a" stroke-width="3"/>
     ${label(422,110,'Restaurant', '#28564b',21)}
     <path d="M425 128H548" stroke="#ddbeab" stroke-width="2"/>
     ${label(426,162,'Wasser   3 €','#554e43',17)}
     ${label(426,193,'Suppe    5 €','#554e43',17)}
     <path d="M425 210H548" stroke="#ddbeab" stroke-width="2"/>
     ${label(424,237,'Rechnung', '#a55a4a',18)}`)
  };
  window.GERMAN_VISUALS={render:(number)=>scenes[Number(number)]||''};
})();
