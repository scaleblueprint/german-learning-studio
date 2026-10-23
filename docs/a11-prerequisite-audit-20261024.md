# A1.1 teaching-before-testing audit — all six active chapters
**Review date:** 24 October 2026  
**Repo:** `scaleblueprint/german-learning-studio`  
**Active reference:** Original *Netzwerk A1.1 — Kurs- und Arbeitsbuch Teil 1*, previously audited 166-page user-uploaded scan. Its source scope covers **Chapters 1–6 only**. The original PDF page images were not reattached for this session; this is a systematic app-content and previously audited chapter-scope review, **not a fresh exercise-by-exercise comparison with publisher pages**. All added teaching material is original; German teacher sign-off remains required.

## Audit method
For every active chapter, checked its source-mapped objectives, four introduction sentence patterns, the end-of-guide **Try it** task, two longer guided lessons with theory and interactive checks, five supplementary in-depth reading topics for Chapters 2–6, workbook (8 checks per chapter), independently authored audio tasks and three scene-lab tasks per guided lesson. Also reviewed the conceptual dependencies that the task or question requires, not just whether a word appears anywhere.

The **Learn before you practise** blocks are fully expanded on entry and appear before the chapter's **Try it** question. They contain explanations, worked German–English examples, spoken playback using the device's German voice, a common pattern or caution, and a check with model answer. The existing detailed reading topics and teacher sessions are retained. The additions have 15 new teaching blocks and **61 worked examples** across Chapters 2–6.

## Chapter-by-chapter findings and corrections

| Chapter | Previously missing or premature prerequisite | Implemented correction | Related assessments |
|---|---|---|---|
| **1 Guten Tag!** · Kursbuch 7–16 | Asked learner to say 1–20 and spell a name before explicitly teaching either | Existing prior-turn fix retained: all twenty numbers, 26 German letter names, examples and audio, explanation of 16/17, practice, visible jump links | Intro Try it; workbook number listening, spelling/contact exchanges |
| **2 Freunde, Kollegen und ich** · 17–26 | Numbers above 20 and all weekdays/months missing from teaching; `haben/sein` and question form required reinforcement; an audio and workbook example used `müssen/können` before Chapter 5 | Added 21–100 formation, exceptional tens, complete weekday/month vocabulary, `von … bis` for work hours, pronouns/conjugation, sentence order and question intonation. Replaced advanced modal usage in early audio and workbook | Work profiles, hobbies, meeting days, numbers, yes/no questions |
| **3 In der Stadt** · 27–36 | Long/short vowels not explicitly taught; an original scene/auditory exercise tested `einen/keinen` before Chapter 4; workbook required `gegenüber dem`, `vom`, `neben der` before introducing dative location constructions | Added positive/negative **nominative** place articles, route sequence, long vs short city vowels and concise route-notice reading. Rewrote the two scene exercises, audio and workbook directions within Chapter 3 scope | City-map scenes, negative article, transport and route work |
| **4 Guten Appetit!** · 41–50 | Asked for food quantities, Euro prices and object forms without a sufficiently explicit primer; umlaut pronunciation underdeveloped; one price check called a `Brötchen` a sandwich | Added quantities, price examples, accusative `der→den`, `ein→einen`, feminine/neuter contrasts, ä/ö/ü listening and a whole shop conversation. Corrected the bread-roll translation and feedback | Shop-roleplay, ingredient list, object articles, price audio |
| **5 Tag für Tag** · 51–60 | Time notation, `halb` and quarter hours need direct practice; `wollen` not explicitly explained alongside `können/müssen`; workbook delay `Verspätung` and German `r` needed an introduction | Added everyday/formal clock time, day/time/range prepositions, the three modals with sentence bracket, polite rescheduling phone example, delay vocabulary and German `r` pronunciation guidance | Workday, timetable, modal grammar, appointment calls |
| **6 Zeit mit Freunden** · 61–70 | Date ordinals beyond a couple of examples, `für` + accusative, object pronouns, `ei/eu/au` and event-notice details lacked clear foundations | Added date forms (1st/3rd/7th/12th/20th/21st), pronouns `mich/dich/ihn/sie`, gift/invitation examples with `für`, all three sound groups and an event-notice reading example | Birthday date and invitation, event announcements, object-pronoun grammar, restaurant/past review |

## Sequence and scope decisions
- The introduction guide includes a **before-the-challenge** prerequisite section; the introduction's Try it task follows the relevant primer. Existing rich topical lessons, workbook, visuals, audio and teacher-created sessions remain available.
- New sections follow the user's preference for **expanded reading**. Extra learner clicks are reserved for optional example answer reveals; the explanations themselves are already visible.
- Workbook retained **48 question IDs** and the same chapter order so saved progress in existing browsers remains compatible. Changes correct specific off-scope evidence, not answer storage or calculation logic.
- Chapter 4 remains focused on food, shops and **simple ordering**; Chapter 6 deepens full restaurant situations, dates and social interactions.
- There is no unsupported Chapter 7–12 release: those belong to A1.2, outside the user's original A1.1 upload.

## Regression checks
- `tests/chapter-study.mjs`: chapter-level prerequisite appears **before** the Try it task, 12 guided lessons, numbers and alphabet.
- `tests/prerequisite-audit.mjs`: six active chapters, 15 blocks, ≥60 original examples, teaching content length, sample answer availability, 48 workbook questions, scope-safe Chapter 2 audio and Chapter 3 article scenes, stage loading.
- Existing `tests/workbook.mjs`, `tests/phase3.mjs`, `tests/phase4.mjs`, `tests/chapter-readers.mjs`, student/teacher smoke and navigation tests continue in the same CI pipeline.

## Remaining review boundaries
This audit addresses **identified content prerequisite and question-evidence gaps**, not a claim that every minute of the book is digitised. A teacher should still check German idiomaticity, regional pronunciation, grammar sequencing, source-page match at exercise granularity and whether lesson duration suits real beginners. Live device voices are synthetic text-to-speech, not licensed publisher recordings. Photos are independently sourced and require device/browser inspection to confirm they display properly and correspond to the exact example.
