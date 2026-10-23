/* Independent A1.1 chapter orientation. Paraphrased learning aims; no publisher exercises or images. Teacher QA pending. */
(()=>{
'use strict';
const data=[
  {
    "number": 1,
    "title": "Guten Tag!",
    "intro": "Start with short, useful exchanges: greet someone, introduce yourself, ask where a person comes from and check a name or number. The aim is to understand how the words fit together, not just to memorise a greeting.",
    "goal": "I can introduce myself, choose du or Sie, spell a name and recognise numbers 1–20.",
    "patterns": [
      [
        "Hallo! Ich heiße Mina. Wie heißt du?",
        "Hi! I'm Mina. What's your name?",
        "Use du with a classmate; heißt agrees with du."
      ],
      [
        "Guten Tag! Wie heißen Sie?",
        "Good day! What is your name?",
        "Formal Sie takes heißen, even for one person."
      ],
      [
        "Ich komme aus Indien. Ich wohne in Bonn.",
        "I come from India. I live in Bonn.",
        "Woher asks origin; wo asks current location."
      ],
      [
        "Meine Nummer ist zwölf: eins, zwei.",
        "My number is twelve: one, two.",
        "Practice both whole numbers and individual digits when checking contact details."
      ]
    ],
    "pitfall": "Do not answer Wo wohnst du? with a language. It asks for a place. Woher kommst du? asks for origin; Welche Sprachen sprichst du? asks for languages.",
    "tryIt": "After the number and alphabet lessons above, introduce yourself to a classmate, then to a teacher. Say a number between 1 and 20 and spell your first name.",
    "model": "Classmate: Hallo, ich heiße Mina. Wie heißt du? Teacher: Guten Tag, ich heiße Mina. Wie heißen Sie? Number: sechzehn. Spelling: M – I – N – A."
  },
  {
    "number": 2,
    "title": "Freunde, Kollegen und ich",
    "intro": "Talk about everyday interests and work, then use a weekday to make a simple plan. Notice the person–verb connection before trying longer sentences.",
    "goal": "I can describe hobbies and work, read a simple profile and propose a day to meet.",
    "patterns": [
      [
        "Ich höre gern Musik.",
        "I enjoy listening to music.",
        "The conjugated verb comes before gern."
      ],
      [
        "Hast du am Freitag Zeit?",
        "Are you free on Friday?",
        "A yes/no question begins with the conjugated verb; weekdays take am."
      ],
      [
        "Meine Freundin ist Ärztin. Sie arbeitet im Krankenhaus.",
        "My friend is a doctor. She works in a hospital.",
        "Professions after sein often have no indefinite article."
      ],
      [
        "Im Winter lese ich gern. Im Sommer fahre ich Rad.",
        "I like reading in winter. I cycle in summer.",
        "A time expression may begin the sentence; the finite verb remains second."
      ]
    ],
    "pitfall": "Der, die and das are part of the noun, not optional decorations. Remember the article with a new noun, and do not form every plural in the same way.",
    "tryIt": "Describe a friend's job and hobby, then ask whether they are free on a particular day.",
    "model": "Meine Freundin ist Lehrerin. Sie liest gern. Hast du am Samstag Zeit?"
  },
  {
    "number": 3,
    "title": "In der Stadt",
    "intro": "Learn the language of places and movement through a short city visit. First identify a landmark, then ask where it is, and finally give simple, polite directions.",
    "goal": "I can identify buildings, choose articles and direct someone using a simple route.",
    "patterns": [
      [
        "Das ist ein Bahnhof. Der Bahnhof ist groß.",
        "That is a train station. The station is big.",
        "First introduce an object with ein, then refer to it with der."
      ],
      [
        "Hier ist kein Museum.",
        "There is no museum here.",
        "Kein negates a noun phrase with an indefinite sense."
      ],
      [
        "Wo ist die Haltestelle?",
        "Where is the stop?",
        "Wo asks where something is located, rather than where someone comes from."
      ],
      [
        "Gehen Sie geradeaus und biegen Sie dann links ab.",
        "Go straight ahead and then turn left.",
        "Use formal Sie with the polite imperative."
      ]
    ],
    "pitfall": "Rechts and links change the route completely; check the map before speaking. Also distinguish nicht for a general negation from kein for 'no/not a' noun phrases.",
    "tryIt": "Start at the Bahnhof. Tell a visitor how to reach the Museum in two steps.",
    "model": "Entschuldigung, gehen Sie bitte geradeaus. Dann biegen Sie rechts ab."
  },
  {
    "number": 4,
    "title": "Guten Appetit!",
    "intro": "Connect food words to real needs: what is in the kitchen, what to buy and how to ask politely in a shop. The key grammar idea is how a noun changes when it becomes the object of a sentence.",
    "goal": "I can understand a shopping list, ask for food and use basic accusative articles.",
    "patterns": [
      [
        "Wir brauchen Brot und zwei Tomaten.",
        "We need bread and two tomatoes.",
        "Brauchen expresses need; quantities make a list useful."
      ],
      [
        "Der Käse ist frisch. Ich kaufe den Käse.",
        "The cheese is fresh. I buy the cheese.",
        "A masculine subject der becomes object den."
      ],
      [
        "Ich möchte einen Saft und eine Suppe.",
        "I'd like a juice and a soup.",
        "Masculine ein becomes einen; feminine eine stays eine."
      ],
      [
        "Was kostet das zusammen?",
        "How much does that cost altogether?",
        "Add a price question to finish a realistic purchase."
      ]
    ],
    "pitfall": "For a masculine noun, Ich kaufe ein Käse is wrong: say Ich kaufe einen Käse. Learn nominative and accusative with complete pairs, not detached endings.",
    "tryIt": "Write a shopping list with three quantities; then order one masculine and one feminine item politely.",
    "model": "Ich möchte einen Saft und eine Suppe, bitte. Was kostet das?"
  },
  {
    "number": 5,
    "title": "Tag für Tag",
    "intro": "Use clocks, daily actions and calendars to explain when things happen. Build from one time expression to a routine, then to arranging or declining an appointment.",
    "goal": "I can describe my day, talk about my family and make an appointment using modal verbs.",
    "patterns": [
      [
        "Es ist halb acht. Um halb acht stehe ich auf.",
        "It's 7:30. I get up at 7:30.",
        "Halb acht means half an hour before eight; um marks an activity's time."
      ],
      [
        "Mein Bruder arbeitet heute.",
        "My brother is working today.",
        "Mein shows possession before a masculine noun in nominative."
      ],
      [
        "Ich kann am Dienstag nicht kommen.",
        "I cannot come on Tuesday.",
        "With kann, the full verb kommen goes at the end."
      ],
      [
        "Haben Sie am Mittwoch um elf Uhr Zeit?",
        "Do you have time on Wednesday at eleven?",
        "Use am for days and um for a precise time."
      ]
    ],
    "pitfall": "Halb acht is 7:30, not 8:30. In Ich muss heute arbeiten, do not place arbeiten directly after muss: the infinitive normally comes at the end.",
    "tryIt": "Create three lines: when you get up, who is in your family and when you can meet.",
    "model": "Um sieben Uhr stehe ich auf. Mein Bruder arbeitet. Am Mittwoch kann ich kommen."
  },
  {
    "number": 6,
    "title": "Zeit mit Freunden",
    "intro": "Bring earlier language together in a social plan: invite someone, agree on a date, order politely and describe a simple past situation using war and hatte.",
    "goal": "I can write an invitation, react to a plan, order at a restaurant and describe a recent event.",
    "patterns": [
      [
        "Ich lade dich am Samstag ein.",
        "I invite you on Saturday.",
        "Einladen separates in a normal present-tense statement."
      ],
      [
        "Kommst du am vierzehnten Juni?",
        "Are you coming on 14 June?",
        "Dates after am use ordinal forms."
      ],
      [
        "Ich nehme eine Suppe, bitte. Die Rechnung, bitte.",
        "I'll have a soup, please. The bill, please.",
        "Move from ordering to paying in a short restaurant exchange."
      ],
      [
        "Gestern war ich im Café. Ich hatte Zeit.",
        "Yesterday I was at the café. I had time.",
        "War and hatte are frequent simple past forms of sein and haben."
      ]
    ],
    "pitfall": "Do not say Ich einlade dich in a normal statement: say Ich lade dich ein. Also avoid using war or hatte for every past-tense verb; these are two specific past forms.",
    "tryIt": "Send a short invitation with a date and place, then add one sentence about where you were yesterday.",
    "model": "Ich lade dich am Samstag ein. Wir treffen uns um vier Uhr. Gestern war ich zu Hause."
  }
];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(number){const ch=data.find(x=>x.number===Number(number));if(!ch)return '';
return `<section class="chapter-study-guide" aria-label="Chapter ${ch.number} study guide"><div class="chapter-study-head"><span class="eyebrow">Start here · Chapter understanding</span><h5>The big idea</h5><p>${esc(ch.intro)}</p><strong class="chapter-study-goal">${esc(ch.goal)}</strong></div><details class="chapter-study-patterns" open><summary>See four useful sentence patterns <span aria-hidden="true">↓</span></summary><div class="chapter-study-pattern-grid">${ch.patterns.map(([de,en,why])=>`<div class="chapter-study-pattern"><strong lang="de">${esc(de)}</strong><span>${esc(en)}</span><p>${esc(why)}</p><button type="button" class="view-link" data-speak="${esc(de)}" aria-label="Hear German example">♫ Listen</button></div>`).join('')}</div></details>${ch.number===1?window.GERMAN_CHAPTER_ONE?.render()||'':''}<details class="chapter-study-patterns" open><summary>Check your understanding <span aria-hidden="true">↓</span></summary><div class="chapter-study-selfcheck"><p><strong>Common mix-up:</strong> ${esc(ch.pitfall)}</p><p><strong>Try it:</strong> ${esc(ch.tryIt)}</p><details><summary>Reveal an original model answer</summary><p lang="de">${esc(ch.model)}</p></details></div></details></section>`;}
window.GERMAN_CHAPTER_STUDY={data,render};
})();
