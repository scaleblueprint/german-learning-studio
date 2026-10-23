# German Studio A1.1 — chapter-by-chapter content review
**Date:** 23 October 2026  
**Active source:** uploaded original **Netzwerk A1.1 — Kurs- und Arbeitsbuch Teil 1**, 166 PDF pages. This is not *Netzwerk neu* A1.  
**Source mapping used:** `docs/netzwerk-a1-1-uploaded-audit.md`, `dist/data/netzwerk-a1-1-uploaded-reference.json`, and `dist/curriculum.js`.

## Review method and limitations
The six verified A1.1 chapter scope maps from the previously reviewed scan were checked against the live lesson, workbook, chapter navigation and teacher session data in the repository. The original scanned PDF was **not reattached in this session**, so this update does not claim a new page-by-page verification of every exercise or publisher illustration. The work is a careful **source-scope-to-app-content audit** of original teaching material, not a reproduction of the book. No publisher pages, photographs, recordings, answer keys, long exercise text, or verbatim chapter text have been imported.

## Chapter decisions

| Chapter | PDF coursebook / workbook | Source-aligned teaching focus | Changes implemented | Remaining QA |
| --- | --- | --- | --- | --- |
| 1 **Guten Tag!** | 7–16 / 76–87 | Greetings, *du/Sie*, names, origin, languages, alphabet, numbers 1–20 and contact details | Added explanation of 1–20, spelling and contact checks; four starter language patterns; replaced unrelated occupation-comprehension item with email detail; replaced distracting slang | German alphabet/number voice and phoneme QA |
| 2 **Freunde, Kollegen und ich** | 17–26 / 88–99 | Hobbies, weekdays, work, working hours, noun articles and plurals, seasons | Added worked hobby-to-invitation and job-profile explanation; reviewed article/plural foundation; chapter orientation and models | Teacher review of occupations, articles and sentence register |
| 3 **In der Stadt** | 27–36 / 100–111 | Places, transport, maps, articles, *kein*, polite directions | Added contrast of *ein/der/kein*, map-and-landmark direction steps, polite imperative and transport context | Real map usability and language accuracy with native speakers |
| 4 **Guten Appetit!** | 41–50 / 116–127 | Food, mealtimes, grocery lists, shopping and accusative | Added quantity-and-shop explanation, detailed nominative/accusative walkthrough; replaced restaurant menu and restaurant-bill workbook checks with bakery/shopping questions; constrained topic scene to shop | Check noun forms and realistic food quantities |
| 5 **Tag für Tag** | 51–60 / 128–139 | Telling time, daily routine, family, possessives, modal verbs, appointments | Added clock-to-routine explanations, form-aware examples and modal-verb sentence bracket practice | Time expressions and regional conventions |
| 6 **Zeit mit Freunden** | 61–70 / 140–151 | Dates, invitations, separable verbs, restaurant exchange, accusative pronouns, *war/hatte* | Added invitation anatomy, date forms, complete restaurant progression and past-vs-present contrast; relocated default café teacher session here instead of chapter 4 | Conversation role-play and teacher feedback consistency |

**Plattform 1** remains after Chapter 3 (coursebook PDF 37–40 / workbook 112–115), and **Plattform 2** after Chapter 6 (coursebook 71–74 / workbook 152–155). A1.2 Chapters 7–12 and newer-edition *Netzwerk neu* content remain outside the active learner course.

## Pedagogical and navigation improvements
1. All 12 guided topics have **three substantive, original theory sections** plus pre-existing worked sentence labs, scene checks, dialogue, vocabulary and listening. New explanations target gaps instead of adding arbitrary, off-syllabus subjects.
2. All six chapters have a **Start here** orientation with a learning goal, **four original German/English sentence patterns**, common mix-ups and a self-check with an expandable model answer. The coursebook-style sequence remains inside each chapter.
3. Lesson navigation shows **only the two topics of the selected chapter**, with a link back to its overview/workbook and a separate collapsible list of other chapters. Learner-facing topic labels are chapter-relative instead of inherited prototype numbering.
4. The previously long **Understand** screen is now divided into **four expandable groups**: concept/explanation, examples/teaching object, practical situations, and vocabulary/dialogue. Open sections are remembered during local exercise checks in the current page session.
5. **Kursbuch explanation, Arbeitsbuch-style practice and assigned teacher work** remain within each source-scoped chapter. Goethe/telc preparation stays separate and is not represented as part of the publisher book.
6. The older five standalone demonstration lessons are **no longer loaded by the published app** (their historical file is retained for compatibility/regression). The unattested A1.2 content and unrelated phrase-library screen remain hidden from the learner path.
7. The original `localStorage` data schema and scored user work are retained. The seeded café session alone is moved to Chapter 6 in both new and existing demo states, without clearing previous attempts.

## Quality and release gates
- **Subject-matter approval remains mandatory.** A German teacher should review every original German expression, translations, register, articles, inflection, prompt and answer explanation. Code tests cannot certify teaching quality.
- **Visual QA remains mandatory.** Browser/network availability and meaning of third-party real-world photographs have not been retested on physical devices in this update; publisher artwork is neither licensed nor republished.
- **Listening QA remains mandatory.** Current synthetic German speech varies by device and is not textbook audio or natural recorded dialogue. Local microphone rehearsals are not teacher-shareable recordings.
- **Account and assessment QA remains mandatory.** Teacher approval, submissions and progress remain same-browser prototype interactions, not secure multi-user enrolment.
- **Copyright boundary:** The app independently explains the verified chapter themes, with new examples and feedback. It does not claim to digitize or replace licensed coursebook/workbook pages.

## Regression coverage
`tests/curriculum-a11.mjs` now requires three rich explanation sections per source-verified topic. `tests/chapter-study.mjs` validates six chapter guides, 24 example patterns, runtime exclusion of retired demo lessons, and progressive reader wiring. Existing workbook, photo, Phase 3/4/5, navigation, textbook boundary, teacher role and smoke tests remain in GitHub Actions.

## Future lesson-depth work, in order
- Obtain German-teacher approval of chapter 1–6 sentences and lesson pacing.
- Extend comprehension beyond closed choice: more short authentic-style notices, independently created role-play variations, dictation/number listening and map or calendar interactions where they improve comprehension.
- Verify all image links, examples, pronunciation playback and mobile expandable layouts with students and teacher.
- Add authentic/licensed speaking-listening content only with explicit recording rights. Never copy publisher illustrations or audio from the scanned coursebook.


## Follow-up: Chapters 2–6 full reading expansion

Completed in the source-controlled app after the six-chapter alignment release. The previously audited 166-page uploaded original A1.1 scan underpins the **chapter boundaries and verified high-level objectives**. The scan's page images were not reattached for this follow-up; therefore this expansion is not a fresh page-by-page review or a claim to reproduce the full publisher book.

**New learner section:** *Read the chapter in depth*, placed under each verified chapter's Start here guide, before the Kursbuch's two longer guided lessons and the corresponding Arbeitsbuch practice. Each of Chapters 2–6 has **five independently written reading topics**, a topic-specific explanation of at least 85 words, three original bilingual sentence examples with usage explanations and pronunciation playback, a common error comparison, and a three-choice understanding check with feedback/retry. There are **25 added topics, 75 worked examples and 25 new checks**. All results are saved in a new additive browser-local `chapterReaderProgress` field without touching previous lesson/workbook scores.

| Chapter | Coursebook PDF | Five newly developed reading topics |
| --- | --- | --- |
| 2 · Freunde, Kollegen und ich | 17–26 | Hobbies & `gern`; weekdays and meetings; occupations and hours; nouns, articles and plurals; seasons and profiles |
| 3 · In der Stadt | 27–36 | City landmarks; definite/indefinite articles; negation with `kein`; public transport; polite map directions |
| 4 · Guten Appetit! | 41–50 | Mealtimes/food groups; food shops; quantities/prices; masculine accusative; polite shop dialogue |
| 5 · Tag für Tag | 51–60 | Clock reading; daily routines; family/possessives; modal verbs; appointments |
| 6 · Zeit mit Freunden | 61–70 | Dates/invitations; separable verbs/leisure plans; restaurant exchanges; accusative personal pronouns; `war` and `hatte` |

**Learner experience:** closed-by-default sections prevent lengthy scrolling; each detailed topic can be opened individually. A simple completion count, independently authored practice and answer explanations help learners move from meaning to examples to recall. The same content is available to teachers through the chapter planner. The previously implemented photographs, original visual language objects, audio, workbook practice, Plattform revisions and teacher sessions remain intact.

**Safety and correctness boundaries:** chapters 7–12 are in the A1.2 volume, not the user's uploaded 166-page A1.1 scan, and remain inactive. These new exercises are independently authored and require German-teacher language, register and pedagogical sign-off. Real mobile device tests, voice clarity, image endpoint access and student usability remain manual checks. This is still a same-browser prototype.

**Automated validation:** `tests/chapter-readers.mjs` checks all five chapters, page boundaries, 25 substantive topics and their examples/checks, learner answer/retry persistence and teacher preview; the regression suite includes the test.

## Reading UX update — 24 October 2026

Following feedback, the course now prioritises **expanded full-chapter reading** instead of requiring learners to open every heading. Inside the selected chapter, the five detailed Chapters 2–6 topics display their full explanations, examples, common mistakes and comprehension checks by default. A direct chapter-topic jump menu helps learners move among the complete sections without losing content. The original chapter introduction's sentence patterns and self-check are also open by default; the model answer is still reveal-on-demand.

The guided lesson's four **Understand** sections now all open on first visit (rather than only the first). Students can collapse a section voluntarily; the lesson's in-memory view preserves their choice when checking local activities. In-depth topic content is shared with Teacher Studio. The top-level navigation continues to expand the *selected* chapter so students do not have to scroll through all six chapters simultaneously. Previously answered self-checks and all workbook, audio, assessment and teacher progress are preserved.

Automated tests were extended to verify that all 25 reader topics are expanded by default, navigable via topic jump buttons and expanded for the teacher's selected chapter.
