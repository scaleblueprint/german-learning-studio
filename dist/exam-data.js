// Original demonstration questions. These are not Goethe/telc examination items.
// A qualified German teacher must review language, answers and suitability.
window.GERMAN_EXAM_DATA = Object.freeze({
  levels: [
    {id:'A1',name:'Beginner',available:true},
    {id:'A2',name:'Elementary',available:false},
    {id:'B1',name:'Intermediate',available:false},
    {id:'B2',name:'Upper intermediate',available:false},
    {id:'C1',name:'Advanced',available:false},
    {id:'C2',name:'Proficient',available:false}
  ],
  skills: [
    {id:'listening',name:'Listening',icon:'♫',description:'Hear short everyday messages and choose what they mean.'},
    {id:'reading',name:'Reading',icon:'▤',description:'Understand signs, notices and simple personal messages.'},
    {id:'writing',name:'Writing',icon:'✎',description:'Write a short practical message using the prompt.'},
    {id:'speaking',name:'Speaking',icon:'◉',description:'Rehearse aloud, then note what you said for teacher feedback.'}
  ],
  tracks: {
    goethe: {
      title:'Goethe-Zertifikat A1',subtitle:'Start Deutsch 1 · Adult exam',
      official:'https://www.goethe.de/ins/de/en/prf/gzsd1/ueb.html',
      note:'Official Goethe practice materials are linked separately. This is an independent mini-mock, not the official test.',
      tips:[
        'Listen for names, times, places and numbers before deciding. One small detail can change the answer.',
        'Read the question first, then scan signs and messages for the exact information requested.',
        'In writing, cover every point in the prompt using short, clear sentences and an appropriate greeting.',
        'For speaking, practise introducing yourself, asking simple questions and making polite requests aloud.'
      ],
      questions: [
        {id:'g-l1',skill:'listening',context:'Short station announcement',audio:'Achtung, bitte. Der Zug nach Bonn fährt heute um neun Uhr dreißig.',question:'When does the train to Bonn leave?',options:['At 9:00','At 9:30','At 10:30'],answer:1,explanation:'„Neun Uhr dreißig“ means 9:30.'},
        {id:'g-l2',skill:'listening',context:'A voice message from a friend',audio:'Hallo Anna, ich komme heute nicht. Ich bin krank. Bis morgen!',question:'Why is the friend not coming?',options:['They are ill','They are working','They missed the bus'],answer:0,explanation:'„Ich bin krank“ means “I am ill.”'},
        {id:'g-l3',skill:'listening',context:'Ordering at a café',audio:'Ein Tee kostet zwei Euro fünfzig. Ein Kaffee kostet drei Euro.',question:'How much does the tea cost?',options:['€2.00','€3.00','€2.50'],answer:2,explanation:'„Zwei Euro fünfzig“ means €2.50.'},
        {id:'g-l4',skill:'listening',context:'Course information',audio:'Der Deutschkurs beginnt am Montag um acht Uhr. Nicht am Dienstag.',question:'On which day does the course begin?',options:['Monday','Tuesday','Friday'],answer:0,explanation:'The speaker says „am Montag“ and explicitly says not Tuesday.'},
        {id:'g-r1',skill:'reading',context:'Shop window notice',passage:'Öffnungszeiten: Montag–Freitag 09:00–18:00 Uhr. Samstag geschlossen.',question:'Can you shop here on Saturday?',options:['No, it is closed','Yes, until 18:00','Yes, after 9:00'],answer:0,explanation:'„Samstag geschlossen“ means closed on Saturday.'},
        {id:'g-r2',skill:'reading',context:'Text message',passage:'Liebe Sara, ich bin um 16 Uhr am Bahnhof. Bis gleich! Leon',question:'Where will Leon be at 16:00?',options:['At school','At the station','At the café'],answer:1,explanation:'„Am Bahnhof“ means at the railway station.'},
        {id:'g-r3',skill:'reading',context:'Small advertisement',passage:'Fahrrad zu verkaufen. 60 Euro. Bitte ab 18 Uhr anrufen.',question:'When should you call about the bicycle?',options:['Before 8:00','At 16:00','From 18:00'],answer:2,explanation:'„Ab 18 Uhr“ means from 18:00 onward.'},
        {id:'g-r4',skill:'reading',context:'Language school notice',passage:'Deutschkurs: Dienstag und Donnerstag, 17 Uhr, Raum 204.',question:'Which room is the course in?',options:['Room 17','Room 240','Room 204'],answer:2,explanation:'„Raum 204“ gives the classroom number.'}
      ],
      writing:{id:'g-w1',title:'A message to your course teacher',prompt:'You cannot attend German class on Tuesday. Write a short message to your teacher: say you cannot come, give a simple reason, ask for the homework, and thank them.',guidance:'Aim for 25–40 German words. Include a greeting and a closing.',criteria:['Clear greeting and purpose','Simple reason','Question about homework','Polite closing']},
      speaking:{id:'g-s1',title:'Introduce yourself and make a request',prompt:'First introduce yourself: name, home city and one language you speak. Then imagine you are in a café: ask politely for water and ask the price.',guidance:'Speak aloud for about a minute. Afterwards, write brief notes of what you said; the browser does not record or grade your voice.',criteria:['Simple self-introduction','Understandable polite request','Question about price','Clear everyday German']}
    },
    telc: {
      title:'telc Deutsch A1',subtitle:'Start Deutsch 1 · Adult exam',
      official:'https://www.telc.net/en/language-examinations/certificate-exams/german/start-german1-telc-german-a1/',
      note:'This mini-mock uses original prompts inspired by common A1 language tasks. It does not reproduce telc materials or official scoring.',
      tips:[
        'For listening, look for the practical outcome: when, where, how much, or what someone must do.',
        'Read notices carefully for opening times, appointments, addresses and small restrictions.',
        'For writing, answer all parts of the situation using familiar vocabulary and short sentences.',
        'For speaking, practise everyday introductions, questions and requests with a partner or teacher.'
      ],
      questions: [
        {id:'t-l1',skill:'listening',context:'Telephone message',audio:'Hallo Paul! Unser Termin ist am Freitag um zehn Uhr, nicht am Donnerstag.',question:'When is the appointment?',options:['Thursday at 10:00','Friday at 10:00','Friday at 12:00'],answer:1,explanation:'The speaker says „am Freitag um zehn Uhr“.'},
        {id:'t-l2',skill:'listening',context:'At the supermarket',audio:'Die Bananen kosten heute ein Euro achtzig pro Kilo.',question:'What is the price per kilogram?',options:['€1.80','€1.18','€2.80'],answer:0,explanation:'„Ein Euro achtzig“ is €1.80.'},
        {id:'t-l3',skill:'listening',context:'Directions',audio:'Gehen Sie geradeaus und dann links. Die Apotheke ist neben der Bank.',question:'Where is the pharmacy?',options:['Behind the station','In the bank','Next to the bank'],answer:2,explanation:'„Neben der Bank“ means next to the bank.'},
        {id:'t-l4',skill:'listening',context:'A family invitation',audio:'Wir essen am Sonntag um zwölf Uhr zusammen. Komm bitte pünktlich!',question:'When is the family meal?',options:['Sunday at 12:00','Saturday at 12:00','Sunday at 20:00'],answer:0,explanation:'„Am Sonntag um zwölf Uhr“ means Sunday at noon.'},
        {id:'t-r1',skill:'reading',context:'Public notice',passage:'Bibliothek: Montag bis Freitag 10–18 Uhr. Am Mittwoch nur bis 14 Uhr.',question:'When does the library close on Wednesday?',options:['18:00','14:00','10:00'],answer:1,explanation:'„Am Mittwoch nur bis 14 Uhr“ means Wednesday until 14:00.'},
        {id:'t-r2',skill:'reading',context:'Message from a friend',passage:'Hi Tim, treffen wir uns heute um 19 Uhr vor dem Kino? Ich habe zwei Karten. – Lea',question:'Where does Lea want to meet?',options:['At the park','At the restaurant','In front of the cinema'],answer:2,explanation:'„Vor dem Kino“ means in front of the cinema.'},
        {id:'t-r3',skill:'reading',context:'Flat advertisement',passage:'Kleines Zimmer frei. 350 Euro im Monat. Küche und Bad gemeinsam.',question:'What is the monthly rent?',options:['€350','€530','€300'],answer:0,explanation:'„350 Euro im Monat“ is the monthly rent.'},
        {id:'t-r4',skill:'reading',context:'Doctor office sign',passage:'Praxis Dr. Müller: Bitte bringen Sie Ihre Versicherungskarte mit.',question:'What should patients bring?',options:['A photo','An insurance card','A book'],answer:1,explanation:'„Versicherungskarte“ means insurance card.'}
      ],
      writing:{id:'t-w1',title:'Invite a friend',prompt:'Write a short message inviting a German-speaking friend for coffee this weekend. Say where, suggest a day and time, and ask whether they can come.',guidance:'Aim for 25–40 German words. Use a greeting, an invitation, a question and a closing.',criteria:['Clear invitation','Place and time','Question to the friend','Friendly closing']},
      speaking:{id:'t-s1',title:'Everyday conversation',prompt:'Introduce yourself and say where you live. Imagine you need to get to the railway station: politely ask someone where it is, then thank them.',guidance:'Practise aloud, ideally with another person. Note the sentences you used for teacher feedback; this is not an audio assessment.',criteria:['Self-introduction','Polite question','Everyday location vocabulary','Appropriate thanks']}
    }
  }
});
