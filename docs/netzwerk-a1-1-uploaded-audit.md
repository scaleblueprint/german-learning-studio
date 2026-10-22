# Uploaded original Netzwerk A1.1 — PDF-grounded curriculum and application update

**Reviewed source:** user-provided `netzwerk-a1-1pdf_compress.pdf`, a 166-page scanned original-edition *Netzwerk A1.1 – Kurs- und Arbeitsbuch Teil 1* (Langenscheidt/Klett; copyright statement 2011). It is **not** the later *Netzwerk neu A1* 176-page Kursbuch. All page numbers below refer to **PDF pages**, not printed numbers.

**Review method:** inspect visual page images, chapter contents, coursebook activities and grammar recap pages, workbook and exam-training section layout. The file is scanned with no usable text layer. The mapping summarises subjects and activity types without transcribing protected exercise text.

## Page map: every page accounted for

| PDF pages | Material | Content and observations |
|---|---|---|
| 1–3 | Front matter | Cover, title, authors and publication/licensing information |
| 4 | Learning package | Coursebook, workbook, grammar summary and *Plattform* explanation |
| 5–6 | Contents | Six chapters, their communication acts, vocabulary, grammar, pronunciation and cultural themes; workbook start pages |
| 7–16 | Kursbuch, Chapter 1: Guten Tag! | Greetings, formal/informal introductions, personal origins, numbers 1–20, spelling, languages; short *Kurz und klar* recap |
| 17–26 | Kursbuch, Chapter 2: Freunde, Kollegen und ich | Hobbies, weekdays, meeting plans, jobs and working hours, articles/plurals, seasons; recap |
| 27–36 | Kursbuch, Chapter 3: In der Stadt | Hamburg/urban landmarks, traffic and transportation, map directions, articles and negation, polite imperatives; recap |
| 37–40 | Plattform 1 | Repeated skill and language review after Chapters 1–3, game-like formats |
| 41–50 | Kursbuch, Chapter 4: Guten Appetit! | Food, meals, grocery shops, shopping conversations, nominative vs accusative and object verbs; recap |
| 51–60 | Kursbuch, Chapter 5: Tag für Tag | Clock time, routine, family, possessives, arranging appointments, modal verbs and polite apologies; recap |
| 61–70 | Kursbuch, Chapter 6: Zeit mit Freunden | Leisure, dates and invitations, separable verbs, restaurant conversations, accusative pronouns and simple past of haben/sein; recap |
| 71–74 | Plattform 2 | Repeated review and practical transfer after Chapters 4–6 |
| 75 | Workbook contents | Workbook index with chapter starts, review sections, grammar and glossary |
| 76–87 | Arbeitsbuch, Chapter 1 | Written and listening reinforcement and chapter vocabulary |
| 88–99 | Arbeitsbuch, Chapter 2 | Hobbies, verbs, professional information and corresponding review exercises |
| 100–111 | Arbeitsbuch, Chapter 3 | City and directions, articles/negation and word practice |
| 112–115 | Arbeitsbuch, Plattform 1 | Assessment-oriented consolidation after Chapter 3 |
| 116–127 | Arbeitsbuch, Chapter 4 | Food/shopping, accusative and role-oriented practice |
| 128–139 | Arbeitsbuch, Chapter 5 | Clock times, family, modal verbs and scheduling practice |
| 140–151 | Arbeitsbuch, Chapter 6 | Birthdays, separable verbs and restaurant practice |
| 152–155 | Arbeitsbuch, Plattform 2 | Assessment-oriented consolidation after Chapter 6 |
| 156–160 | Grammar overview | Grammar reference tables for the A1.1 syllabus |
| 161–166 | Alphabetical vocabulary | Reference list; **not imported verbatim** into app |

The canonical machine-readable index includes one entry for every PDF page: `dist/data/netzwerk-a1-1-uploaded-reference.json`.

## Edition boundary: curriculum source of truth

- **Active:** `dist/curriculum.js`, derived from `dist/data/netzwerk-a1-1-uploaded-reference.json`.
- **Chapter 1–6:** grounded in this uploaded original-edition coursebook **and** workbook. Two **new original guided lessons per chapter**, with mapped source page ranges.
- **Chapter 7–12:** older original-edition *Netzwerk A1.2* publisher TOC mapping only. Those chapters **are not PDF-validated**, have no new playable lessons, and must remain clearly marked *source PDF pending*.
- **Historical original-edition outline:** `dist/data/netzwerk-a1-reference.json` preserved.
- **Historical, different edition:** `dist/data/netzwerk-neu-a1-reference.json` preserved separately, **not loaded by the app**. No mixing of newer *Netzwerk neu* title variants with original edition chapters.

## Original guided lessons authored from scope

| Chapter | Coursebook PDF pages | Workbook PDF pages | Original interactive lessons |
|---|---:|---:|---|
| 1 Guten Tag! | 7–16 | 76–87 | Greetings in real situations; Names, countries and spelling |
| 2 Freunde, Kollegen und ich | 17–26 | 88–99 | Hobbies and making plans; Professions, articles and seasons |
| 3 In der Stadt | 27–36 | 100–111 | Places and articles in town; Ask for and give directions |
| 4 Guten Appetit! | 41–50 | 116–127 | Food, meals and a shopping list; Shopping and the accusative |
| 5 Tag für Tag | 51–60 | 128–139 | Time and a daily routine; Family, modal verbs and appointments |
| 6 Zeit mit Freunden | 61–70 | 140–151 | Birthdays and invitations; Restaurant conversations and past events |

Each new interactive lesson includes: a real-life setup, German/English phrase, independently written contextual explanation sections, minimum eight vocabulary expressions with pronunciation buttons, original four-turn dialogue, usage tip, original four-question knowledge check with explanations and learner application task. The existing five introductory demonstrations are preserved. Source page range is shown for each new lesson; source does **not** imply any copied exercise or teacher-validated content.

## Teacher Studio implementation

- Shared chapter objectives, vocabulary and grammar themes, culture and pronunciation.
- Source PDF page pointers for coursebook and workbook, visible separately.
- Suggested original practice formats, lesson blueprint sequence and chapter-linked editable teacher-session drafts.
- Existing publish control still governs teacher-created sessions. **Practice lesson availability does not mean teacher-approved content.**
- No publisher audio/video is available in the upload. The app continues to use device German TTS where supported.

## Implementation extension: independently authored workbook support

- Chapters 1–6: each now has eight original choice questions across listening (device TTS), reading, grammar and vocabulary, plus writing and speaking-rehearsal tasks. These are not copied workbook activities.
- Plattform 1 (after Chapters 1–3) and Plattform 2 (after Chapters 4–6): nine-question original mixed-skill revision assembled from chapter tasks, plus open production prompts.
- Student Studio: direct chapter practice, saved answers, explanatory feedback, retries, draft text and teacher-response visibility on the same device.
- Teacher Studio: original question progress and written rehearsal responses appear in review queue; four fictional sample pupils remain explicitly fictional.
- Validation: `tests/workbook.mjs` verifies counts, navigation, persistence, review, and separation from unavailable A1.2. A certified exam or full publisher workbook recreation is not implied.

## What remains

1. German-teacher QA of wording, articles, register, skill progression, pronunciation, quiz answers and answer explanations.
2. A1.2 coursebook **and** workbook PDF inspection to verify chapters 7–12. Do not infer that this uploaded A1.1 PDF supports them.
3. Additional independently produced listening recordings or licensed media, image-led exercises and original four-skill *Plattform* assessments.
4. User testing on mobiles and across browsers; accessibility and progress/reporting QA.
5. Actual learner account persistence and teacher-linked sessions before live class enrolment; this remains a same-browser prototype.

## Copyright rule

The PDF is a teacher-owned/source-provided copyrighted textbook. The app uses the textbook's **high-level curriculum sequence** but does not redistribute scanned pages, publisher photographs, proprietary exercise texts, vocabulary glossary, answer keys, DVD clips or recordings. All newly playable lesson writing and questions are independent AmberTheory material for teacher review.
