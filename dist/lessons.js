/* Original prototype curriculum. Instructor review is required before classroom use. */
window.GERMAN_LESSONS = [
  {
    id:'hello',unit:'01',title:'Hallo! Nice to meet you',subtitle:'Greetings and your first introduction',duration:'8 min',skill:'Speaking',
    scene:'You are entering a German language class for the first time. A fellow learner smiles and says hello. How would you answer?',
    phrase:{de:'Hallo! Ich heiße Mia.',en:'Hello! My name is Mia.'},
    words:[['Hallo','hello (informal)'],['Guten Tag','good day (polite)'],['Ich heiße','my name is'],['Wie heißt du?','what is your name?'],['Danke','thank you'],['Tschüss','bye (informal)']],
    dialogue:[['Mia','Hallo! Ich heiße Mia.','Hi! My name is Mia.'],['Alex','Hallo Mia! Ich heiße Alex.','Hi Mia! My name is Alex.'],['Mia','Freut mich!','Nice to meet you!']],
    pattern:'Use <b>Ich heiße …</b> to tell someone your name. With a friend, ask <b>Wie heißt du?</b> The word <b>du</b> is informal; in polite situations you can ask <b>Wie heißen Sie?</b>',
    tip:'The German letter ß is called Eszett and usually sounds like “ss”. Listen for the long vowel in heiße.',
    apply:'Introduce yourself in German. Try two sentences: a greeting and your name.',
    sample:'Hallo! Ich heiße Praveen.',
    questions:[
      {q:'You meet a classmate. Which greeting is natural?',options:['Tschüss!','Hallo!','Gute Nacht!'],correct:1,why:'Hallo is a friendly, everyday greeting. Tschüss is for saying goodbye.'},
      {q:'What does “Ich heiße Mia” mean?',options:['I live with Mia.','I am looking for Mia.','My name is Mia.'],correct:2,why:'Ich heiße is the standard way to introduce your name.'},
      {q:'How do you ask a friend for their name?',options:['Wie heißt du?','Wo wohnst du?','Wie alt bist du?'],correct:0,why:'Wie heißt du? asks “What is your name?” (informal).'}
    ]
  },
  {
    id:'origin',unit:'02',title:'Where are you from?',subtitle:'Countries, hometowns and simple statements',duration:'9 min',skill:'Grammar',
    scene:'You meet another learner who asks where you come from and where you currently live. You can give two different answers.',
    phrase:{de:'Ich komme aus Indien. Ich wohne in Bengaluru.',en:'I come from India. I live in Bengaluru.'},
    words:[['ich','I'],['komme aus','come from'],['wohne in','live in'],['Indien','India'],['Deutschland','Germany'],['Woher?','from where?']],
    dialogue:[['Lea','Woher kommst du?','Where are you from?'],['Ravi','Ich komme aus Indien.','I come from India.'],['Lea','Wo wohnst du?','Where do you live?'],['Ravi','Ich wohne in Bengaluru.','I live in Bengaluru.']],
    pattern:'The verb changes with the person: <b>ich komme</b> (I come), <b>du kommst</b> (you come). Use <b>aus</b> for origin and <b>in</b> for location: <b>Ich komme aus Indien</b>, but <b>Ich wohne in Berlin</b>.',
    tip:'Do not mix up “Woher?” (from where?) and “Wo?” (where?). The question itself helps you choose the right answer.',
    apply:'Write where you come from and where you live. Use two short German sentences.',
    sample:'Ich komme aus Indien. Ich wohne in Bengaluru.',
    questions:[
      {q:'Which sentence means “I live in Berlin”?',options:['Ich wohne in Berlin.','Ich komme in Berlin.','Ich heiße Berlin.'],correct:0,why:'wohne in expresses where you live.'},
      {q:'Which question asks about your place of origin?',options:['Wie heißt du?','Woher kommst du?','Was machst du?'],correct:1,why:'Woher means “from where”.'},
      {q:'Complete: Ich ___ aus Indien.',options:['wohnst','kommen','komme'],correct:2,why:'The ich form of kommen is komme.'}
    ]
  },
  {
    id:'numbers',unit:'03',title:'Numbers in everyday life',subtitle:'Count, recognise and ask about prices',duration:'10 min',skill:'Listening',
    scene:'At a little market you see a price tag. Numbers help you understand what something costs, how many items you need and when to meet.',
    phrase:{de:'Das kostet fünf Euro.',en:'That costs five euros.'},
    words:[['eins','one'],['zwei','two'],['drei','three'],['vier','four'],['fünf','five'],['zehn','ten']],
    dialogue:[['Kunde','Wie viel kostet das?','How much is that?'],['Verkäuferin','Das kostet fünf Euro.','That costs five euros.'],['Kunde','Danke schön!','Thank you very much!']],
    pattern:'For a simple price, use <b>Das kostet … Euro.</b> To ask the price, use <b>Wie viel kostet das?</b> German numbers are worth practising aloud: <b>fünf</b> has an ü sound and <b>zwei</b> begins with a “ts” sound.',
    tip:'Repeat numbers in mixed order rather than just counting from one to ten. This makes real-world listening easier.',
    apply:'Imagine a price tag for a book. Write one complete sentence saying it costs five euros.',
    sample:'Das kostet fünf Euro.',
    questions:[
      {q:'Which German number means five?',options:['vier','fünf','zwei'],correct:1,why:'fünf is five; vier is four and zwei is two.'},
      {q:'What is being asked in “Wie viel kostet das?”',options:['What time is it?','Where is that?','How much does that cost?'],correct:2,why:'Wie viel = how much; kostet = costs.'},
      {q:'Which phrase means “That costs ten euros”?',options:['Das kostet zehn Euro.','Das ist zehn Uhr.','Das heißt zehn.'],correct:0,why:'Use Das kostet for the price.'}
    ]
  },
  {
    id:'cafe',unit:'04',title:'A visit to the café',subtitle:'Order politely and recognise food words',duration:'10 min',skill:'Speaking',
    scene:'You are seated in a café in Munich. The server comes to take your order. A small, polite phrase helps the conversation feel natural.',
    phrase:{de:'Ich nehme bitte ein Wiener Schnitzel.',en:'I’ll have a Wiener schnitzel, please.',sourceId:8246323},
    words:[['ich nehme','I’ll have / I take'],['bitte','please'],['ein Kaffee','a coffee (practice noun)'],['das Wasser','water'],['die Speisekarte','menu'],['die Rechnung','bill']],
    dialogue:[['Kellnerin','Guten Tag! Was möchten Sie?','Good day! What would you like?'],['Gast','Ich möchte einen Kaffee, bitte.','I would like a coffee, please.'],['Kellnerin','Gerne!','Of course!']],
    pattern:'Two useful structures are <b>Ich möchte …</b> (I would like …) and <b>Ich nehme …</b> (I’ll have …). Add <b>bitte</b> for politeness. Notice <b>einen Kaffee</b> versus <b>ein Schnitzel</b>; German articles change with the noun and its role in the sentence.',
    tip:'Listen to the whole order and identify the important parts: the request phrase, the item, and bitte. You need not master every article on day one.',
    apply:'Place a café order in German. Ask for a coffee politely in one complete sentence.',
    sample:'Ich möchte einen Kaffee, bitte.',
    questions:[
      {q:'Which phrase is a polite way to order?',options:['Wo ist mein Haus?','Ich nehme bitte ein Schnitzel.','Ich komme aus Kaffee.'],correct:1,why:'Ich nehme … bitte works for a polite order.'},
      {q:'What does “die Rechnung” mean?',options:['the menu','the kitchen','the bill'],correct:2,why:'Ask for die Rechnung when you want the bill.'},
      {q:'Select the natural coffee order.',options:['Ich möchte einen Kaffee, bitte.','Ich wohnen Kaffee.','Ich heißen Kaffee.'],correct:0,why:'Ich möchte … is the correct pattern for “I would like …”.'}
    ]
  },
  {
    id:'city',unit:'05',title:'In the city together',subtitle:'Simple directions, invitations and polite forms',duration:'11 min',skill:'Conversation',
    scene:'A visitor asks you which way to go. Later, a neighbour invites you for a walk. You will practise two useful moments from everyday life.',
    phrase:{de:'Wollen Sie zusammen spazieren gehen?',en:'Would you like to go for a walk together?',sourceId:7047540},
    words:[['Nach vorne!','Forward!'],['links','left'],['rechts','right'],['zusammen','together'],['spazieren gehen','to go for a walk'],['Sie','you (formal)']],
    dialogue:[['Besucher','Entschuldigung, wo ist der Park?','Excuse me, where is the park?'],['Mara','Gehen Sie geradeaus, dann links.','Go straight ahead, then left.'],['Besucher','Vielen Dank!','Thank you very much!'],['Mara','Gerne!','You’re welcome!']],
    pattern:'In polite situations, German commonly uses capitalised <b>Sie</b> for “you”. The invitation <b>Wollen Sie …?</b> is a formal question. For directions you may hear <b>geradeaus</b> (straight ahead), <b>links</b> (left) and <b>rechts</b> (right).',
    tip:'“Wollen Sie …?” is understandable, but the precise tone of an invitation depends on context. Your teacher can help compare it with softer requests such as “Möchten Sie …?”',
    apply:'Write a simple direction in German using geradeaus and links.',
    sample:'Gehen Sie geradeaus, dann links.',
    questions:[
      {q:'What does “links” mean?',options:['straight ahead','left','right'],correct:1,why:'links means left; rechts means right.'},
      {q:'Which pronoun is polite/formal “you”?',options:['ich','du','Sie'],correct:2,why:'Sie with a capital S is the formal address.'},
      {q:'What does “zusammen” mean?',options:['together','tomorrow','slowly'],correct:0,why:'zusammen means together, as in going for a walk together.'}
    ]
  }
];
