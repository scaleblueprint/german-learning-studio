/* Original, teacher-review-pending A1.1 worked examples. No publisher text or images. */
(()=>{
 const DATA={
  "a11-greetings": {
    "focus": "Choose the right voice for the person",
    "steps": [
      [
        "Read the relationship",
        "A classmate normally hears du; a teacher you do not know may hear Sie. Before speaking, decide whom you are addressing. The difference changes more than politeness: it changes the verb ending in the question.",
        "Wie heißt du?",
        "What is your name? (informal)"
      ],
      [
        "Compare the verb",
        "Use ich heiße to state your own name, du heißt with a friend and Sie heißen with formal address. Learn the pronoun and its verb as a pair, not as separate vocabulary items.",
        "Ich heiße Neda. Und wie heißen Sie?",
        "I am Neda. And what is your name? (polite)"
      ],
      [
        "Finish the exchange",
        "A short real conversation includes a greeting, a name, a response and a goodbye. In a formal setting, Guten Tag and Auf Wiedersehen are reliable choices; with friends, Hallo and Tschüss sound natural.",
        "Guten Tag, Herr Braun. Auf Wiedersehen!",
        "Hello, Mr Braun. Goodbye!"
      ]
    ],
    "mistake": [
      "Wie heißt Sie?",
      "Wie heißen Sie?",
      "The formal subject Sie takes the plural-form verb heißen, even when speaking to one person."
    ],
    "bank": [
      "Sie?",
      "heißen",
      "Wie"
    ],
    "order": [
      2,
      1,
      0
    ],
    "answer": "Wie heißen Sie?",
    "explain": "In a W-question, Wie comes first, followed by the conjugated verb heißen and the polite subject Sie."
  },
  "a11-origin-spelling": {
    "focus": "Differentiate origin, residence and language",
    "steps": [
      [
        "Recognise the question word",
        "Woher asks about origin. Wo asks about location. Welche Sprachen asks which languages. Listen to the opening word before choosing what information to give; a city where you live need not be your country of origin.",
        "Woher kommst du?",
        "Where are you from?"
      ],
      [
        "Build a precise answer",
        "After Ich komme use aus with a country in common beginner examples. After Ich wohne use in with the town. For languages, say Ich spreche plus the language name, not an expression about residence.",
        "Ich wohne in Dresden und spreche Englisch.",
        "I live in Dresden and speak English."
      ],
      [
        "Check details gently",
        "When introducing a person, spell unfamiliar names letter by letter and repeat important numbers to confirm them. You can ask a partner to repeat or spell a detail rather than pretending to understand it the first time.",
        "Können Sie das bitte buchstabieren?",
        "Could you spell that, please?"
      ]
    ],
    "mistake": [
      "Ich komme in Bonn.",
      "Ich wohne in Bonn.",
      "To state a current place of residence, use wohnen in. Coming from a place uses kommen aus."
    ],
    "bank": [
      "in",
      "Ich",
      "wohne",
      "Bonn."
    ],
    "order": [
      1,
      2,
      0,
      3
    ],
    "answer": "Ich wohne in Bonn.",
    "explain": "The subject Ich comes before the conjugated verb wohne; in Bonn completes the place expression."
  },
  "a11-hobbies": {
    "focus": "Talk about a hobby, then invite someone",
    "steps": [
      [
        "Use gern with the action",
        "German can express enjoyment with the conjugated action verb followed by gern. Keep the person and verb agreement: ich spiele, du spielst. Choose one genuine activity before adding details of where or when it happens.",
        "Ich höre gern Musik.",
        "I like listening to music."
      ],
      [
        "Add a day",
        "Weekdays commonly use am. If you want to meet a friend, first say what you like, then propose a particular day. Asking with the conjugated verb first creates a yes/no question that invites an answer.",
        "Spielst du am Sonntag Tennis?",
        "Are you playing tennis on Sunday?"
      ],
      [
        "Respond and renegotiate",
        "An invitation is incomplete without an answer. Ja, gern accepts an idea. Nein, leider nicht declines politely; add a new day or activity to keep the conversation moving.",
        "Am Samstag kann ich nicht. Geht Sonntag?",
        "I cannot on Saturday. Would Sunday work?"
      ]
    ],
    "mistake": [
      "Ich gern spiele Tennis.",
      "Ich spiele gern Tennis.",
      "In an ordinary statement, the conjugated main verb stays in second position; gern usually follows it."
    ],
    "bank": [
      "am",
      "Tennis.",
      "Ich",
      "spiele",
      "Sonntag"
    ],
    "order": [
      2,
      3,
      0,
      4,
      1
    ],
    "answer": "Ich spiele am Sonntag Tennis.",
    "explain": "In a statement, Ich is followed by spiele. The weekday phrase am Sonntag adds when, and Tennis completes the activity."
  },
  "a11-jobs-seasons": {
    "focus": "Make a short profile using nouns and verbs",
    "steps": [
      [
        "Learn noun and article together",
        "German nouns have grammatical gender and may change in the plural. Write a new noun with der, die or das, even if the article is not spoken in every sentence. This also helps later with object forms.",
        "der Beruf · die Arbeit · das Büro",
        "profession · work · office"
      ],
      [
        "Describe a profession",
        "After sein, an occupation often appears without an indefinite article: Ich bin Koch. To add a workplace, use arbeiten and a location. Arbeitest and arbeitet show the extra -e- in the spoken verb ending.",
        "Mina ist Lehrerin. Sie arbeitet in einer Schule.",
        "Mina is a teacher. She works in a school."
      ],
      [
        "Combine time and personal information",
        "A profile becomes more useful when it mentions working days and leisure interests. Use am with weekdays and im with seasons, then connect the facts with short complete sentences instead of a vocabulary-only list.",
        "Im Winter arbeitet Jonas am Samstag.",
        "In winter Jonas works on Saturday."
      ]
    ],
    "mistake": [
      "Er arbeit im Büro.",
      "Er arbeitet im Büro.",
      "With er, the verb arbeiten becomes arbeitet; the extra e makes the consonant ending easier to pronounce."
    ],
    "bank": [
      "im",
      "arbeitet",
      "Er",
      "Büro."
    ],
    "order": [
      2,
      1,
      0,
      3
    ],
    "answer": "Er arbeitet im Büro.",
    "explain": "Use Er + arbeitet for third-person singular, followed by the workplace expression im Büro."
  },
  "a11-city-places": {
    "focus": "Point out a place and describe what it is",
    "steps": [
      [
        "Look for the article",
        "A map label can show der Bahnhof, die Kirche or das Museum. Articles belong to the noun and help build a complete description. With a known place you may use der/die/das; when introducing one, ein/eine is often suitable.",
        "Das ist eine Kirche.",
        "That is a church."
      ],
      [
        "Introduce an unfamiliar location",
        "Use Das ist … while pointing to one building, or Hier gibt es … to describe what is available nearby. Words for station, bank, market and museum become useful when they are attached to a real map.",
        "Hier gibt es ein Museum.",
        "There is a museum here."
      ],
      [
        "Correct a mistaken guess",
        "Use kein for many negative noun phrases. The form depends on the gender and grammatical role; at this stage, practise nominative examples with common place names before trying more complex descriptions.",
        "Nein, das ist kein Bahnhof.",
        "No, that is not a railway station."
      ]
    ],
    "mistake": [
      "Das ist eine Museum.",
      "Das ist ein Museum.",
      "Museum is neuter: das Museum, so the indefinite article is ein in this nominative sentence."
    ],
    "bank": [
      "ist",
      "Museum.",
      "Das",
      "ein"
    ],
    "order": [
      2,
      0,
      3,
      1
    ],
    "answer": "Das ist ein Museum.",
    "explain": "Das ist introduces the place. The neuter noun Museum takes ein here."
  },
  "a11-city-directions": {
    "focus": "Give a route that another person can follow",
    "steps": [
      [
        "Open politely",
        "A request for directions begins by attracting attention. Entschuldigung is useful; ask Wo ist …? and add bitte to make a question courteous. A map or landmarks help the listener check where to start.",
        "Entschuldigung, wo ist die Post?",
        "Excuse me, where is the post office?"
      ],
      [
        "Sequence movements",
        "Give one instruction at a time: zuerst for first, geradeaus for straight ahead, dann for then, links and rechts for left and right. The listener can follow each stage on a simple map without memorising a long paragraph.",
        "Gehen Sie zuerst geradeaus.",
        "First go straight ahead. (polite)"
      ],
      [
        "Use the polite imperative",
        "With Sie, the polite command begins with the verb: Gehen Sie …, Biegen Sie … ab. Finish with the destination or a landmark, then allow the listener to repeat the route to confirm it.",
        "Dann biegen Sie links ab.",
        "Then turn left. (polite)"
      ]
    ],
    "mistake": [
      "Sie gehen bitte geradeaus!",
      "Gehen Sie bitte geradeaus.",
      "A polite instruction conventionally uses the imperative verb first, followed by Sie."
    ],
    "bank": [
      "bitte",
      "Sie",
      "Gehen",
      "geradeaus."
    ],
    "order": [
      2,
      1,
      0,
      3
    ],
    "answer": "Gehen Sie bitte geradeaus.",
    "explain": "In a polite instruction, start with Gehen, then Sie; bitte softens the instruction."
  },
  "a11-food-shops": {
    "focus": "Plan meals with quantities and shops",
    "steps": [
      [
        "Connect foods with meals",
        "Learn food words in everyday groups: what you eat for breakfast, what you need at lunch and which shop sells the item. Keep the article with the noun, then practise describing what is missing at home.",
        "Für das Frühstück brauchen wir Brot.",
        "We need bread for breakfast."
      ],
      [
        "Ask what is available",
        "Haben wir …? checks the cupboard. Wir brauchen … names what to add to a shopping list. When you need a countable food, use a quantity such as zwei Tomaten; for milk you can say eine Packung Milch.",
        "Wir haben Brot, aber wir brauchen Milch.",
        "We have bread, but we need milk."
      ],
      [
        "Turn the list into a request",
        "A useful shopping dialogue adds a greeting, the product, a quantity and a polite ending. Practise saying exactly what you want and asking how much it costs; this is more practical than repeating nouns alone.",
        "Ich möchte zwei Tomaten, bitte.",
        "I would like two tomatoes, please."
      ]
    ],
    "mistake": [
      "Ich brauchen zwei Tomaten.",
      "Ich brauche zwei Tomaten.",
      "With the subject ich, brauchen becomes brauche; with wir, it becomes brauchen."
    ],
    "bank": [
      "brauchen",
      "Wir",
      "Tomaten.",
      "zwei"
    ],
    "order": [
      1,
      0,
      3,
      2
    ],
    "answer": "Wir brauchen zwei Tomaten.",
    "explain": "The first-person plural subject Wir takes brauchen. The quantity zwei comes immediately before Tomaten."
  },
  "a11-accusative-restaurant": {
    "focus": "Notice the object article when ordering",
    "steps": [
      [
        "Find the object",
        "With Ich möchte … or Ich nehme …, the food or drink is what you want to receive. That noun phrase is usually the direct object. Listen for the article instead of assuming it always matches the dictionary form.",
        "Ich möchte einen Saft.",
        "I would like a juice."
      ],
      [
        "Compare three genders",
        "Masculine ein changes to einen in the accusative. Feminine eine and neuter ein keep those forms. Practise clear, short comparisons with real food items before writing a complete café exchange.",
        "einen Tee · eine Suppe · ein Brot",
        "a tea · a soup · a loaf of bread"
      ],
      [
        "Keep the request courteous",
        "A shop exchange needs more than grammar. Greet the person, say what you want, use bitte and respond to a price or availability question. End with a brief thank-you.",
        "Guten Tag. Ich nehme einen Tee, bitte.",
        "Hello. I'll have a tea, please."
      ]
    ],
    "mistake": [
      "Ich möchte ein Saft.",
      "Ich möchte einen Saft.",
      "Saft is masculine, so its accusative form after möchte is einen Saft."
    ],
    "bank": [
      "einen",
      "Ich",
      "Saft.",
      "möchte"
    ],
    "order": [
      1,
      3,
      0,
      2
    ],
    "answer": "Ich möchte einen Saft.",
    "explain": "The conjugated verb möchte comes after Ich. A masculine direct object uses einen."
  },
  "a11-daily-time": {
    "focus": "Read the clock and describe the day",
    "steps": [
      [
        "Compare two ways to tell the time",
        "A digital schedule may show 07:30, while a friend says halb acht. This means half an hour before eight, not half past eight. For official-style time, 14:45 can be vierzehn Uhr fünfundvierzig.",
        "Es ist halb acht. (07:30)",
        "It is half past seven."
      ],
      [
        "Choose the right time word",
        "Use um for a specific clock time and am for a day. A duration from one time to another uses von … bis … . Match the expression to the question: Wann? or Wie lange?",
        "Ich beginne um neun Uhr.",
        "I start at nine o'clock."
      ],
      [
        "Keep the verb in second position",
        "An everyday schedule can start with a time phrase, but the conjugated verb remains in the second position. Compare Ich arbeite am Dienstag with Am Dienstag arbeite ich. A separable verb can place its prefix at the end.",
        "Um sechs Uhr stehe ich auf.",
        "I get up at six o'clock."
      ]
    ],
    "mistake": [
      "Um sieben Uhr ich stehe auf.",
      "Um sieben Uhr stehe ich auf.",
      "When the time phrase comes first, the conjugated verb stehe still occupies second position."
    ],
    "bank": [
      "stehe",
      "um",
      "sieben",
      "auf.",
      "Ich",
      "Uhr"
    ],
    "order": [
      4,
      0,
      1,
      2,
      5,
      3
    ],
    "answer": "Ich stehe um sieben Uhr auf.",
    "explain": "The finite verb stehe comes second; the separable prefix auf goes to the end."
  },
  "a11-family-appointments": {
    "focus": "Read a family schedule and make an appointment",
    "steps": [
      [
        "Match the possessive to the noun",
        "Mein and meine mean my, but the ending depends on the noun. For example, mein Bruder and meine Schwester have different forms. These small differences make it clear which family member you are talking about.",
        "Das ist meine Schwester.",
        "That is my sister."
      ],
      [
        "Read the weekly calendar",
        "Use am with weekdays, um with a particular time and von … bis … to show a span. A real appointment question asks for one specific opportunity instead of only saying you are busy.",
        "Haben Sie am Mittwoch um elf Uhr Zeit?",
        "Are you free on Wednesday at eleven?"
      ],
      [
        "Let the modal open and close the frame",
        "Können, müssen and wollen accompany another verb. The modal is conjugated near the start, while the action remains in the infinitive at the end. Use leider to decline, then offer another day.",
        "Ich kann am Donnerstag nicht kommen.",
        "I cannot come on Thursday."
      ]
    ],
    "mistake": [
      "Ich muss arbeiten am Freitag.",
      "Ich muss am Freitag arbeiten.",
      "In a neutral modal-verb sentence, the infinitive arbeiten normally closes the clause."
    ],
    "bank": [
      "am",
      "Ich",
      "Freitag",
      "arbeiten.",
      "muss"
    ],
    "order": [
      1,
      4,
      0,
      2,
      3
    ],
    "answer": "Ich muss am Freitag arbeiten.",
    "explain": "The modal muss is the conjugated verb after Ich. The main action arbeiten is the final infinitive."
  },
  "a11-birthdays-invitations": {
    "focus": "Invite, respond and describe an event",
    "steps": [
      [
        "Name the occasion and date",
        "For an invitation, explain what the occasion is and when it happens. With a date, am often combines with an ordinal form: am fünften Mai. Put the date and time near the invitation so the other person can plan.",
        "Die Feier ist am fünften Mai.",
        "The celebration is on 5 May."
      ],
      [
        "Build an invitation",
        "Einladen is separable. In a main clause its prefix ein moves to the end: Ich lade dich … ein. A short invitation also mentions the place and asks whether the guest can come.",
        "Ich lade dich am Samstag ein.",
        "I'm inviting you on Saturday."
      ],
      [
        "Answer clearly",
        "A useful response accepts or declines and thanks the person. If you cannot attend, say why simply, using kann nicht, and perhaps propose another time to meet.",
        "Vielen Dank, aber ich kann leider nicht kommen.",
        "Thank you, but unfortunately I cannot come."
      ]
    ],
    "mistake": [
      "Ich einlade dich am Samstag.",
      "Ich lade dich am Samstag ein.",
      "In this main clause, einladen separates: lade is the conjugated verb, and ein goes at the end."
    ],
    "bank": [
      "am",
      "Ich",
      "Samstag",
      "dich",
      "ein.",
      "lade"
    ],
    "order": [
      1,
      5,
      3,
      0,
      2,
      4
    ],
    "answer": "Ich lade dich am Samstag ein.",
    "explain": "The verb stem lade follows Ich, and the separable prefix ein ends the sentence."
  },
  "a11-restaurant-past": {
    "focus": "Order a meal, ask to pay and recall it",
    "steps": [
      [
        "Use the service sequence",
        "At a restaurant, begin by asking politely for food or drink. Add bitte to the order and listen for the server's reply. Knowing the phases of a conversation is more useful than memorising one isolated sentence.",
        "Ich hätte gern eine Suppe, bitte.",
        "I would like a soup, please."
      ],
      [
        "Read the bill and finish",
        "When you have eaten, you can ask Die Rechnung, bitte. Notice whether you are paying together or separately. Prices in a receipt or menu connect written numbers to useful spoken German.",
        "Wir möchten bezahlen, bitte.",
        "We would like to pay, please."
      ],
      [
        "Describe a simple past experience",
        "The past tense of sein is war; the past of haben is hatte. Use these common forms to make simple statements after an event, such as how the meal was or what you had, without introducing complex storytelling.",
        "Das Essen war sehr gut.",
        "The food was very good."
      ]
    ],
    "mistake": [
      "Das Essen waren gut.",
      "Das Essen war gut.",
      "Das Essen is singular, so the past of sein is war rather than waren."
    ],
    "bank": [
      "war",
      "Das",
      "schön.",
      "Essen"
    ],
    "order": [
      1,
      3,
      0,
      2
    ],
    "answer": "Das Essen war schön.",
    "explain": "Das Essen is a singular subject. Use war for the past of sein with a singular subject."
  }
};
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const valid=(id,chosen)=>Array.isArray(chosen)&&chosen.length===DATA[id]?.bank?.length&&chosen.every((x,i)=>Number.isInteger(x)&&x===DATA[id].order[i]);
 const render=(id,chosen=[],checked=false)=>{
   const d=DATA[id];if(!d)return '';
   const finished=valid(id,chosen);
   return '<section class="depth-guide" aria-label="Worked examples and sentence practice"><div class="depth-guide-heading"><span class="eyebrow">Guided examples · A1.1</span><h2>'+esc(d.focus)+'</h2><p>Follow these short original examples, compare the forms, then build a sentence in the right order.</p></div>'+
     '<div class="depth-worked-grid">'+d.steps.map((s,i)=>'<article class="depth-worked-card"><span class="depth-step">STEP '+(i+1)+'</span><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p><div class="depth-phrase" lang="de">'+esc(s[2])+'</div><small>'+esc(s[3])+'</small><button type="button" class="view-link" data-speak="'+esc(s[2])+'">♫ Listen</button></article>').join('')+'</div>'+
     '<div class="depth-compare"><div><span class="eyebrow">Notice the correction</span><h3>What changes?</h3></div><div><del lang="de">'+esc(d.mistake[0])+'</del><strong lang="de">'+esc(d.mistake[1])+'</strong><p>'+esc(d.mistake[2])+'</p></div></div>'+
     '<div class="depth-builder"><div><span class="eyebrow">Sentence lab</span><h3>Put the German words in order</h3><p>Tap words in the order you would say them. Reset and try again whenever you need.</p></div>'+
       '<div class="depth-slots" aria-live="polite">'+(chosen.length?chosen.map(i=>'<span lang="de">'+esc(d.bank[i])+'</span>').join(''):'<span class="depth-slot-empty">Your German sentence appears here.</span>')+'</div>'+
       '<div class="depth-wordbank">'+d.bank.map((word,i)=>'<button type="button" lang="de" class="depth-word" data-depth-token="'+esc(id)+':'+i+'" '+(chosen.includes(i)||checked?'disabled':'')+'>'+esc(word)+'</button>').join('')+'</div>'+
       (checked?'<div class="feedback '+(finished?'':'error')+'"><b>'+(finished?'Correct sentence!':'Review the word order.')+'</b> '+esc(d.explain)+
           '<div class="depth-model" lang="de">'+esc(d.answer)+'</div><button type="button" class="view-link" data-speak="'+esc(d.answer)+'">♫ Hear the whole sentence</button></div>'+
           '<button type="button" class="btn btn-outline btn-small" data-depth-retry="'+esc(id)+'">Try again</button>':
           '<div class="depth-controls"><button type="button" class="btn btn-outline btn-small" data-depth-clear="'+esc(id)+'" '+(!chosen.length?'disabled':'')+'>Clear words</button><button type="button" class="btn btn-primary btn-small" data-depth-check="'+esc(id)+'" '+(chosen.length!==d.bank.length?'disabled':'')+'>Check sentence</button></div>')+
     '</div><small class="depth-caption">Original supplementary teaching material, aligned to the chapter themes. Qualified German-teacher review pending.</small></section>';
 };
 window.GERMAN_DEPTH_GUIDES={data:DATA,valid,render};
})();
