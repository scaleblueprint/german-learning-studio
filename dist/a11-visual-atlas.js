/* Original, independently drawn A1.1 vocabulary illustrations. Not publisher imagery. */
(()=>{'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const shape=(name,extra='')=>'<svg class="a11-atlas-svg" viewBox="0 0 180 126" role="img" aria-label="'+esc(name)+' illustration" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="126" rx="18" fill="#f7f3eb"/><circle cx="156" cy="21" r="43" fill="#f0e4d5" opacity=".6"/>'+extra+'</svg>';
const rect=(x,y,w,h,c,r=6)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+c+'"/>';
const path=(d,c,stroke='none',sw=3)=>'<path d="'+d+'" fill="'+c+'" stroke="'+stroke+'" stroke-width="'+sw+'" stroke-linecap="round" stroke-linejoin="round"/>';
const circle=(x,y,r,c)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+c+'"/>';
const line=(a,b,c,d,col='#394956',sw=4)=>path('M'+a+' '+b+'L'+c+' '+d,'none',col,sw);
const label=(text,x=90,y=68,size=19)=>'<text x="'+x+'" y="'+y+'" font-family="Arial,sans-serif" font-size="'+size+'" font-weight="bold" text-anchor="middle" fill="#435164">'+esc(text)+'</text>';
const colors={red:'#d46f63',blue:'#83b0bb',dark:'#465b65',gold:'#e7b85c',green:'#81ae93',milk:'#e8eff2'};
const building=(caption,variant)=>path('M23 51L90 21L157 51Z',colors.red)+rect(31,51,118,61,variant||'#ece7dc',2)+rect(80,80,21,32,colors.blue,2)+rect(44,77,20,18,'#fff',2)+rect(116,77,20,18,'#fff',2)+label(caption,90,68,14);
const bicycle=()=>circle(45,89,24,'#fff')+circle(135,89,24,'#fff')+path('M45 89L76 45L100 89H45L76 45H123L135 89','none',colors.dark,5)+line(120,43,139,42)+line(68,44,87,44);
const book=()=>path('M25 32Q62 23 87 40V105Q55 90 25 101Z','#edd5a2',colors.dark,2)+path('M87 40Q116 22 154 32V101Q120 88 87 105Z','#fff0ca',colors.dark,2)+line(87,41,87,104)+line(38,60,72,60,colors.blue,2)+line(102,60,138,60,colors.blue,2);
const camera=()=>rect(25,43,130,64,colors.dark,10)+rect(45,33,40,16,colors.dark,3)+circle(95,76,27,'#e8f0ef')+circle(95,76,18,colors.blue)+circle(95,76,8,'#fff')+circle(136,61,5,colors.gold);
const plate=()=>circle(90,76,40,'#e8e5dc')+circle(90,76,29,'#fff')+path('M66 78Q82 48 105 67Q113 83 86 92Z',colors.gold)+circle(106,91,6,colors.green)+line(35,45,35,108)+line(147,45,147,108);
const cake=()=>rect(47,57,86,47,'#f1bd96',4)+rect(47,56,86,13,'#fff0dd',5)+rect(88,25,5,31,colors.dark,1)+path('M90 22Q77 33 90 37Q105 31 90 22Z',colors.gold)+circle(62,80,7,colors.red)+circle(117,80,7,colors.red);
const letter=()=>rect(26,36,128,70,'#fff0de',7)+path('M27 39L90 82L153 39','none',colors.red,4)+line(27,104,69,76,colors.red,3)+line(153,104,111,76,colors.red,3);
const clock=()=>circle(90,66,50,'#fff')+circle(90,66,44,'#f7ecd9')+label('12',90,36,13)+label('3',122,71,13)+label('6',90,106,13)+label('9',57,71,13)+line(90,66,90,43,colors.dark,5)+line(90,66,110,79,colors.red,4)+circle(90,66,5,colors.dark);
const fruit=type=>{if(type==='tomato')return circle(90,71,38,colors.red)+path('M90 34L103 48L119 46L111 59L126 66L101 67L89 55L75 65L55 59L70 46L83 49Z',colors.green);if(type==='apple')return circle(90,71,36,colors.red)+path('M90 38Q91 21 105 23','none',colors.dark,4)+path('M94 38Q114 20 127 34Q112 42 94 38Z',colors.green);return path('M39 80Q59 54 131 64Q139 73 120 86Q64 105 39 80Z',colors.green)+path('M45 82Q84 70 127 68','none',colors.dark,2)};
const egg=()=>path('M90 34Q119 48 119 82Q119 109 90 109Q61 109 61 82Q61 49 90 34Z','#faf3e6',colors.dark,2);
const pot=()=>rect(45,53,89,50,colors.blue,13)+rect(37,47,105,9,colors.dark,4)+path('M65 41Q53 28 65 18M100 41Q87 28 100 18','none',colors.red,4)+line(40,64,27,64,colors.dark,7)+line(139,64,152,64,colors.dark,7);
const train=()=>rect(42,26,96,82,colors.blue,18)+rect(52,40,76,36,'#eff6f7',5)+label('U',90,65,26)+circle(65,105,10,colors.dark)+circle(115,105,10,colors.dark);
const phone=()=>path('M65 21Q40 58 70 92Q105 126 139 88L114 74L98 88Q76 77 80 59L94 43Z',colors.blue,colors.dark,2);
const house=()=>path('M23 69L90 21L157 69Z',colors.red)+rect(42,69,96,43,'#efe2d1')+rect(81,80,22,32,colors.blue);
const ticket=()=>path('M28 34H152V55Q136 65 152 75V101H28V75Q44 65 28 55Z',colors.gold,colors.dark,3)+label('KINO',74,71,17)+line(117,37,117,98,colors.dark,2);
const person=(role)=>circle(90,30,20,colors.gold)+rect(55,53,70,56,role==='doctor'?'#e9f4ee':colors.blue,13)+(role==='doctor'?rect(85,66,10,32,colors.red,1)+rect(73,78,34,10,colors.red,1):role==='chef'?path('M55 52Q35 31 55 20Q66 10 77 20Q92 3 108 19Q130 19 127 40Z','#fff',colors.dark,2):'');
const sport=kind=>kind==='swim'?circle(98,43,14,colors.gold)+path('M50 81Q84 46 127 70','none',colors.red,10)+path('M15 99Q30 88 45 99T75 99T105 99T135 99T165 99','none',colors.blue,4):kind==='run'?circle(106,24,14,colors.gold)+path('M95 39L76 69L101 78L126 61M77 68L42 101M100 78L128 103','none',colors.dark,9):bicycle();
const objects={
'Begrüßung':()=>circle(55,42,19,colors.gold)+circle(126,42,19,colors.gold)+rect(27,68,59,40,colors.red,16)+rect(97,68,59,40,colors.blue,16)+path('M63 13H117V34H87L74 45V34H63Z','#fff',colors.dark,2)+label('Hi!',90,28,14),
'Wasser':()=>rect(74,25,33,84,'#b9deeb',6)+rect(83,17,15,12,colors.dark,2),
'Rucksack':()=>rect(56,30,69,81,colors.red,18)+rect(64,72,52,26,colors.gold,9)+path('M74 32Q73 10 90 10Q108 10 108 32','none',colors.dark,5),
'Frühstück':plate,'Apfel':()=>fruit('apple'),'Brot':()=>path('M25 86Q22 42 68 39Q102 21 133 44Q160 56 145 96H35Z',colors.gold,colors.dark,3),
'Bahnhof':()=>building('BAHNHOF'),'Auto':()=>rect(26,65,128,30,colors.red,11)+path('M44 65L60 42H117L136 65Z',colors.blue)+circle(51,99,13,colors.dark)+circle(129,99,13,colors.dark),
'Buch':book,
'fotografieren':camera,'schwimmen':()=>sport('swim'),'lesen':book,'singen':()=>rect(76,22,29,55,colors.dark,14)+path('M61 64Q61 96 90 96Q119 96 119 64','none',colors.red,5)+line(90,96,90,110,colors.dark,4),'kochen':pot,
'Rad fahren':()=>sport('cycle'),'die Ärztin':()=>person('doctor'),'der Koch':()=>person('chef'),
'das Rathaus':()=>building('RATHAUS'),'der Bahnhof':()=>building('BAHNHOF'),'das Krankenhaus':()=>building('KLINIK'),'die Kirche':()=>building('KIRCHE'),'das Hotel':()=>building('HOTEL'),
'die U-Bahn':train,'das Stadion':()=>building('STADION'),'der Hafen':()=>building('HAFEN'),
'das Brot':()=>objects.Brot(),'die Milch':()=>path('M57 30H112L124 46V109H48V46Z','#eff7f9',colors.dark,2)+path('M57 30L70 12H98L112 30Z',colors.blue)+label('MILCH',87,76,17),
'der Käse':()=>path('M28 88L131 48L135 103H28Z',colors.gold,colors.dark,2)+circle(83,83,7,'#d59a4e')+circle(110,90,6,'#d59a4e'),
'die Tomate':()=>fruit('tomato'),'der Apfel':()=>fruit('apple'),'die Gurke':()=>fruit('cucumber'),
'die Bäckerei':()=>building('BÄCKEREI'),'der Supermarkt':()=>building('MARKT'),
'die Uhrzeit':clock,'am Morgen':()=>circle(90,64,30,colors.gold)+line(18,100,162,100,colors.dark,3),'arbeiten':()=>rect(34,35,112,71,colors.dark,8)+rect(46,45,88,51,'#e8f3f4',3),
'joggen':()=>sport('run'),'frühstücken':plate,'der Termin':()=>rect(40,25,101,86,'#fff',8)+rect(40,25,101,22,colors.red,5)+circle(91,80,17,colors.green),
'nach Hause gehen':house,'anrufen':phone,
'Fahrrad fahren':()=>sport('cycle'),'ins Kino gehen':()=>building('KINO'),'der Geburtstag':cake,'die Einladung':letter,'das Restaurant':plate,
'lesen':book,'Fußball spielen':()=>circle(90,72,37,'#fff')+path('M90 47L110 62L102 89H77L66 62Z',colors.dark),'die Eintrittskarte':ticket
};
function render(term){let draw=objects[term];if(!draw)return '';return shape(term,draw());}
window.GERMAN_A11_ATLAS={render,terms:Object.keys(objects)};
})();