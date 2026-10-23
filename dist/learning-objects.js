/* Original teaching artifacts inspired by textbook teaching media types:
   dialogues, calendars, receipts, role cards, city routes, schedules and clocks.
   Not publisher reproductions, not genuine official documents or screenshots. */
(()=>{
  const data={
  "a11-greetings": {
    "title": "Two greetings. Two situations.",
    "kind": "dialogues",
    "intro": "Compare the conversation with a classmate and the conversation with a teacher.",
    "parts": [
      [
        "With a friend",
        "Hallo! Wie heißt du?",
        "Ich heiße Lina. Und du?"
      ],
      [
        "At the school office",
        "Guten Tag. Wie heißen Sie?",
        "Ich heiße Frau Weber."
      ]
    ]
  },
  "a11-origin-spelling": {
    "title": "A learner's contact card",
    "kind": "contact",
    "intro": "Read this original sample profile, then make one using your own information.",
    "parts": [
      [
        "Vorname",
        "Lea"
      ],
      [
        "Nachname",
        "Schmidt"
      ],
      [
        "Land",
        "Deutschland"
      ],
      [
        "Sprache",
        "Deutsch und Englisch"
      ],
      [
        "Telefon",
        "0157 2048 36"
      ]
    ]
  },
  "a11-hobbies": {
    "title": "Make a plan with a classmate",
    "kind": "planner",
    "intro": "Check the day and read an original model exchange.",
    "parts": [
      [
        "Montag",
        "Musik"
      ],
      [
        "Dienstag",
        "Arbeit"
      ],
      [
        "Mittwoch",
        "Fußball"
      ],
      [
        "Donnerstag",
        "frei"
      ],
      [
        "Freitag",
        "Kino"
      ]
    ],
    "foot": "Hast du am Donnerstag Zeit? — Ja, gern!"
  },
  "a11-jobs-seasons": {
    "title": "A workplace introduction",
    "kind": "profile",
    "intro": "Listen to an original sample professional profile and describe the person.",
    "parts": [
      [
        "Name",
        "Jonas"
      ],
      [
        "Beruf",
        "Koch"
      ],
      [
        "Arbeitsort",
        "Restaurant"
      ],
      [
        "Arbeitszeit",
        "10–18 Uhr"
      ],
      [
        "Freizeit",
        "Rad fahren"
      ]
    ],
    "foot": "Jonas ist Koch. Er arbeitet im Restaurant."
  },
  "a11-city-places": {
    "title": "What can you see in town?",
    "kind": "city",
    "intro": "Look at the city board. Notice the articles before the nouns.",
    "parts": [
      [
        "der Bahnhof",
        "Station"
      ],
      [
        "das Rathaus",
        "Town hall"
      ],
      [
        "die Bank",
        "Bank"
      ],
      [
        "das Museum",
        "Museum"
      ]
    ],
    "foot": "Hier gibt es einen Bahnhof und ein Museum."
  },
  "a11-city-directions": {
    "title": "Follow a route across town",
    "kind": "route",
    "intro": "Use the landmarks and directions to describe the route.",
    "parts": [
      [
        "START",
        "Bahnhof"
      ],
      [
        "1",
        "geradeaus"
      ],
      [
        "2",
        "rechts"
      ],
      [
        "ZIEL",
        "Museum"
      ]
    ],
    "foot": "Gehen Sie geradeaus. Dann biegen Sie rechts ab."
  },
  "a11-food-shops": {
    "title": "Our shopping basket",
    "kind": "shopping",
    "intro": "Spot the quantities and articles in an original shopping list.",
    "parts": [
      [
        "🥖",
        "ein Brot"
      ],
      [
        "🥛",
        "eine Packung Milch"
      ],
      [
        "🍅",
        "zwei Tomaten"
      ],
      [
        "🧀",
        "ein Stück Käse"
      ],
      [
        "🍎",
        "ein Kilo Äpfel"
      ]
    ],
    "foot": "Was brauchen wir? Wir brauchen Brot und Käse."
  },
  "a11-accusative-restaurant": {
    "title": "A café order: which article changes?",
    "kind": "menu",
    "intro": "Compare the menu with the words in a customer's order.",
    "parts": [
      [
        "der Tee",
        "einen Tee",
        "2,50 €"
      ],
      [
        "die Suppe",
        "eine Suppe",
        "4,00 €"
      ],
      [
        "das Brot",
        "ein Brot",
        "3,00 €"
      ]
    ],
    "foot": "Ich möchte einen Tee und ein Brot, bitte."
  },
  "a11-daily-time": {
    "title": "Read the clock in German",
    "kind": "clocks",
    "intro": "Match the digital time to everyday German time expressions.",
    "parts": [
      [
        "07:30",
        "Es ist halb acht.",
        "7",
        "30"
      ],
      [
        "08:15",
        "Es ist Viertel nach acht.",
        "8",
        "15"
      ],
      [
        "14:45",
        "Es ist Viertel vor drei.",
        "2",
        "45"
      ]
    ],
    "foot": "Ich gehe um halb acht zur Arbeit."
  },
  "a11-family-appointments": {
    "title": "An appointment message",
    "kind": "calendar",
    "intro": "Read an original small calendar and email, then propose another appointment.",
    "parts": [
      [
        "Mo",
        "9 Uhr · Arbeit"
      ],
      [
        "Di",
        "17 Uhr · Deutsch"
      ],
      [
        "Mi",
        "11 Uhr · frei"
      ],
      [
        "Do",
        "15 Uhr · Arzt"
      ],
      [
        "Fr",
        "18 Uhr · Familie"
      ]
    ],
    "foot": "Guten Tag, Frau König. Haben Sie am Mittwoch um elf Uhr Zeit?"
  },
  "a11-birthdays-invitations": {
    "title": "A birthday invitation",
    "kind": "invitation",
    "intro": "Read the original sample invitation and find the date, time and place.",
    "parts": [
      [
        "Für",
        "Lina"
      ],
      [
        "Anlass",
        "Geburtstag"
      ],
      [
        "Wann",
        "Samstag, 14. Juni"
      ],
      [
        "Uhrzeit",
        "16:00 Uhr"
      ],
      [
        "Wo",
        "bei mir zu Hause"
      ]
    ],
    "foot": "Kommst du? — Ja, gern. Vielen Dank für die Einladung!"
  },
  "a11-restaurant-past": {
    "title": "A table for two and the bill",
    "kind": "receipt",
    "intro": "Connect a menu, the order and the final payment conversation.",
    "parts": [
      [
        "2 × Wasser",
        "5,00 €"
      ],
      [
        "1 × Suppe",
        "4,50 €"
      ],
      [
        "1 × Brot",
        "3,00 €"
      ],
      [
        "Gesamt",
        "12,50 €"
      ]
    ],
    "foot": "Die Rechnung, bitte. — Das macht zwölf Euro fünfzig."
  }
};
  const e=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const listen=s=>`<button type="button" class="artifact-listen" data-speak="${e(s)}" aria-label="Hear ${e(s)}">♫ Hear the sentence</button>`;
  const clock=(hour,min)=>{
    const angleM=min*6,angleH=(hour%12+min/60)*30;
    return `<svg viewBox="0 0 150 150" role="img" aria-label="Clock showing ${hour}:${String(min).padStart(2,'0')}"><circle cx="75" cy="75" r="66" fill="#fff" stroke="#d5c2a6" stroke-width="7"/>${Array.from({length:12},(_,i)=>{const a=(i*30-90)*Math.PI/180;return `<text x="${(75+51*Math.cos(a)).toFixed(1)}" y="${(80+51*Math.sin(a)).toFixed(1)}" text-anchor="middle" font-size="12" font-family="Arial" fill="#37594e">${i||12}</text>`}).join('')}<line x1="75" y1="75" x2="${75+31*Math.sin(angleH*Math.PI/180)}" y2="${75-31*Math.cos(angleH*Math.PI/180)}" stroke="#23483f" stroke-width="5" stroke-linecap="round"/><line x1="75" y1="75" x2="${75+43*Math.sin(angleM*Math.PI/180)}" y2="${75-43*Math.cos(angleM*Math.PI/180)}" stroke="#c55b4b" stroke-width="3.5" stroke-linecap="round"/><circle cx="75" cy="75" r="4" fill="#23483f"/></svg>`;
  };
  const content=o=>{
    const p=o.parts||[];
    if(o.kind==='dialogues')return `<div class="artifact-conversations">${p.map(([label,a,b])=>`<div><span>${e(label)}</span><div class="artifact-speech left">${e(a)}</div><div class="artifact-speech right">${e(b)}</div>${listen(a)}</div>`).join('')}</div>`;
    if(o.kind==='clocks')return `<div class="artifact-clocks">${p.map(([digital,phrase,hour,minute])=>`<div class="artifact-clock">${clock(Number(hour),Number(minute))}<strong>${e(digital)}</strong><span lang="de">${e(phrase)}</span>${listen(phrase)}</div>`).join('')}</div>`;
    if(o.kind==='shopping')return `<div class="artifact-basket">${p.map(([ico,name])=>`<div><span>${e(ico)}</span><strong lang="de">${e(name)}</strong></div>`).join('')}</div>`;
    if(o.kind==='route')return `<div class="artifact-directions"><div class="artifact-roadline"><div>🚉<strong>Bahnhof</strong></div><span>↑ geradeaus</span><span>→ rechts</span><div>🏛️<strong>Museum</strong></div></div><p>Start → Destination: practical route language</p></div>`;
    if(o.kind==='city')return `<div class="artifact-city-board">${p.map(([de,en],i)=>`<div class="artifact-city-stop"><span>${['🚉','🏛️','🏦','🖼️'][i]}</span><b lang="de">${e(de)}</b><small>${e(en)}</small></div>`).join('')}</div>`;
    if(o.kind==='menu')return `<div class="artifact-price-menu"><header>Im Café · Modellkarte</header>${p.map(([name,form,price])=>`<div><strong>${e(name)}</strong><span>→ ${e(form)}</span><b>${e(price)}</b></div>`).join('')}</div>`;
    if(o.kind==='receipt')return `<div class="artifact-price-menu receipt"><header>Restaurant · Musterrechnung</header>${p.map(([label,price])=>`<div><strong>${e(label)}</strong><b>${e(price)}</b></div>`).join('')}</div>`;
    if(o.kind==='invitation')return `<div class="artifact-invitation"><span>✉</span><h4>Du bist eingeladen!</h4>${p.map(([key,val])=>`<div><strong>${e(key)}</strong><span>${e(val)}</span></div>`).join('')}</div>`;
    if(o.kind==='planner'||o.kind==='calendar')return `<div class="artifact-week-calendar">${p.map(([day,activity])=>`<div><strong>${e(day)}</strong><span>${e(activity)}</span></div>`).join('')}</div>`;
    return `<div class="artifact-profile">${p.map(([field,val])=>`<div><strong>${e(field)}</strong><span>${e(val)}</span></div>`).join('')}</div>`;
  };
  window.GERMAN_LEARNING_OBJECTS={
    render(id){
      const o=data[id];if(!o)return '';
      return `<section class="lesson-visual-object" aria-label="Original visual example">
      <header><span class="eyebrow">Look closely · Real-world language object</span><h3>${e(o.title)}</h3><p>${e(o.intro)}</p></header>
      <div class="learning-object-canvas">${content(o)}</div>
      ${o.foot?`<div class="learning-object-sentence"><strong>Try saying:</strong><span lang="de">${e(o.foot)}</span>${listen(o.foot)}</div>`:''}
      <small class="learning-object-caption">Illustrative original activity · Not a reproduction of a publisher page or exercise</small>
      </section>`;
    },
    data
  };
})();
