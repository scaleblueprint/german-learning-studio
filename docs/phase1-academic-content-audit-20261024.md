# Phase 1 — German A1.1 academic/content release audit (24 October 2026)

## Status and evidence boundaries
This is a repository/content-map audit, not language-teacher approval. Source: the prior visual review of the 166-page **original** Netzwerk A1.1 scanned Kurs- und Arbeitsbuch and the checked-in mapping at `docs/netzwerk-a1-1-uploaded-audit.md`. The scanned PDF itself was not present for a fresh page-by-page image comparison in this pass. **Do not claim full textbook fidelity or classroom readiness.** Do not use the separate 176-page *Netzwerk neu* edition as substitute.

## Evidence-based inventory
| Ch. | Original Kursbuch PDF | Original Arbeitsbuch PDF | Essential topics to verify in actual learner view | Review status |
|---|---|---|---|---|
| 1 Guten Tag! | 7–16 | 76–87 | Greetings and register; introductions; names, countries and languages; spelling/alphabet; full numbers 1–20 before activities; contact details | Structured material present; teacher QA pending |
| 2 Freunde, Kollegen und ich | 17–26 | 88–99 | Hobbies, meeting plans, weekdays/seasons, professions/work hours, numbers over 20, verb forms/articles/plurals | Structured material present; teacher QA pending |
| 3 In der Stadt | 27–36 | 100–111 | Buildings/places, transport, routes, definite/indefinite/negative articles, polite imperatives, map-based activities | Structured material present; teacher QA pending |
| Plattform 1 | 37–40 | 112–115 | Cumulative Chapter 1–3 skill review | Independent assessment present; teacher QA pending |
| 4 Guten Appetit! | 41–50 | 116–127 | Meals, foods and shops; quantities/prices; shopping conversations; nominative/accusative | Structured material present; teacher QA pending |
| 5 Tag für Tag | 51–60 | 128–139 | Times, schedules, family/possessives, appointments, modals and apologies | Structured material present; teacher QA pending |
| 6 Zeit mit Freunden | 61–70 | 140–151 | Dates, invitations, leisure, separable verbs, restaurant interactions, accusative pronouns, past haben/sein | Structured material present; teacher QA pending |
| Plattform 2 | 71–74 | 152–155 | Cumulative Chapter 4–6 skill review | Independent assessment present; teacher QA pending |

## Confirmed architecture and scope
- `dist/index.html` loads `dist/a11-chapters-1-3.js`, `dist/a11-chapters-4-6.js`, `dist/chapter-one-foundations.js`, `dist/chapter-prerequisites.js`, course/workbook/visual components and assessments.
- The Ch. 1 foundation explicitly includes **all twenty number forms**, explanations of 11–12, 13–19 and 16/17 exceptions, pronunciation buttons, and a check activity. This addresses the originally reported missing-prerequisite case in source; live rendering still needs to be checked.
- The other-chapter prerequisite file covers follow-on beginner concepts needed before asking learners to apply them.
- Earlier unrelated standalone demo lessons and unverified A1.2 are excluded from active A1.1 learner course according to `docs/textbook-experience-alignment-20261023.md`.
- Classroom photos and supplementary illustrations are **independently licensed/original**, not reproduced book artwork. Photo endpoints and accessible alternatives need real-browser QA.

## Concrete fixes in this pass
- Corrected invalid split German numeral `Drei und zwanzig Bücher.` to `Dreiundzwanzig Bücher.` in a Chapter 5 multiple-choice distractor (`dist/a11-chapters-4-6.js`). Wrong distractors should still be grammatically well formed unless detecting a grammatical mistake is the purpose of the question.

## Academic acceptance checks for **each of the six chapters**
1. Every assessment/task has prerequisite teaching in the same or earlier lesson; no unsupported new vocabulary, numbers, tense or grammar.
2. Complete source-mapped concepts are taught with meaningful examples, not merely named in a heading.
3. Explanation, example, visual, listening and activity refer to the **same** concept.
4. Articles, genders, plural forms, word order, German capitalization, diacritics, formal/informal register and English glosses are correct.
5. Quiz correct-answer indices and explanations agree; incorrect options are natural German if the quiz tests comprehension.
6. Workbook practice reinforces the corresponding coursebook concept without implying copied publisher exercises.
7. Chapter-specific media load; captions, attribution and text equivalents are correct.
8. A teacher must approve source alignment and each learner-facing sentence and assessment before a real class uses it.

## Pending release gates
- Reopen the 166-page original A1.1 scanned source and perform visual **page-by-page** reconciliation, especially relative topic ordering, coverage, and missing picture-led scenarios; the checked-in index is not a substitute for rereading the pages.
- Native German teacher/qualified reviewer sign-off on every sentence, learning object, comprehension task, answer key and example.
- Verify all content and photos in the deployed Render page in a browser and on narrow/mobile screens.
- Confirm that post-fix Render deployment picked up the latest main branch.
- Real student tracking/authentication is outside the prototype's Phase 1.

**Conclusion:** Source-grounded structure and number prerequisites are present; teacher approval and full pagewise visual reconciliation are not complete. Do not label Phase 1 academically signed off yet.
