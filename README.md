# AmberTheory German Studio — teacher-led prototype

A portable, buildless static prototype demonstrating the student-facing **First Steps** course (mapped to CEFR A1), independent **Goethe/telc A1 exam preparation**, a teacher coaching workspace, a teacher-created Experience Studio and a visual **Session Studio** for composing complete lessons. All source required for the demo is in `dist/`; no build tooling or credentials are needed.

For an easily shareable, single-file demonstration, open `german-studio-demo.html` (generated with `node tools/bundle.mjs`). All app logic and styles are embedded in that file; German pronunciation uses built-in browser speech services.

## Original visual learning experience (22 October 2026)

The course sequence uses the **original Netzwerk A1.1 edition**, not *Netzwerk neu*. All six A1.1 chapters are accessible to learners in Kursbuch → Arbeitsbuch → Plattform order. The five older standalone demos and unverified A1.2 previews are excluded from the current course path.

After a visual review of all ten pages of Klett's original-edition **Chapter 5 public sample** (the teacher's scanned source had previously been indexed for all 166 PDF pages), the first minimalist drawings were augmented with:

- **18 credited, free-use Pexels photographs**, three topic-matched photographs per chapter (each credit links to its photographer's photo page; license: https://www.pexels.com/license/). Assets are hotlinked from Pexels and require network access; use caching/localisation if Pexels blocks access in your classroom.
- **72 newly authored, sentence-level German examples** with English glosses, contextual usage labels and browser German text-to-speech; **36 comparison patterns** for forms and grammar, 3 per guided lesson.
- **12 original teaching artifacts**, one per guided lesson: formal/informal speech bubbles, a contact card, weekly schedule, workplace profile, city place board, street route, illustrated grocery list, café menu, analogue clocks, appointment calendar, invitation and restaurant receipt.
- Material appears **inside the guided lessons** in their Discover and Understand stages, as well as in chapter cards, workbook landing and teacher chapter planning. The original 48 workbook checks, two Plattform revisions and teacher chapter session / assessment tracking remain.

**Copyright and QA boundaries:** All sentences, role cards, charts, captions and teaching artifacts are original practice, not copied from the book. The public sample's design was used to understand the *variety of teaching media*, not to copy its art or protected exercises. A qualified German teacher must validate every German sentence, example, worksheet and assessment before student release. Direct CDN availability and authentic browser layout on mobile still warrant an end-user QA pass. This is an on-device demo, not a real multi-learner tracking platform.

## Running

Serve `dist/` using any static file server (for example, `python3 -m http.server 8000 --directory dist`) or upload it to a static host. `index.html` can be opened directly, although local file handling may vary by browser.

## Render deployment

The existing **Static Site** runs at [german-learning-studio.onrender.com](https://german-learning-studio.onrender.com/) and deploys from [scaleblueprint/german-learning-studio](https://github.com/scaleblueprint/german-learning-studio). The publish directory is `dist`. This prototype needs no build process or server and uses hash-based in-page navigation.

The Learning homepage includes an 80-second, silent illustrated walkthrough of the **student and teacher** experience together: lessons, pronunciation, knowledge checks, teacher-created sessions, assignment, learner submission, review, and feedback. Its self-hosted media are `dist/teacher-studio-walkthrough.mp4` and `dist/teacher-studio-poster.svg`; both must remain inside the Render `dist/` publish directory. The MP4 is a product-guided illustrated sequence based on the prototype, not a filmed screen recording. It can be regenerated with `node tools/create-walkthrough.mjs` in a development environment with `sharp` and `ffmpeg`; Render serves the prebuilt assets and needs neither dependency.

## Demo behavior and limitations

- The homepage opens directly into **Learning**. A single, two-option header switch moves between **Learning** and **Teacher Studio** (on mobile the same two options appear at the bottom). A contextual section menu keeps the content manageable: **Home / Lessons / Practice / Exam preparation** for learners, and **Overview / Sessions / Missions / Exam coaching / Learners & reviews** for teachers. Every section has a bookmarkable hash route. There is no extra landing page or duplicate role toggle. The previous `#home` deep link still opens the learner dashboard. Materials & credits remain available from the footer. See [`docs/navigation-requirements.md`](docs/navigation-requirements.md).
- The Learning dashboard links to **Exam Preparation** with Goethe/telc A1 mini-mocks, four skill practices, browser-generated listening, an 18-minute demo timer with pause, original explanations, results, history and study tips. Levels A2–C2 are clearly listed as **planned**, not offered as unreviewed exercises.
- Teacher Studio has a **Question Bank** to draft, review and publish original A1 listening/reading checks and a response-review panel for writing and speaking-rehearsal notes. The learner sees qualitative teacher feedback on the completed attempt. Teacher-approved items appear only in newly started practice attempts.
- Teachers can select a **role-play**, **writing mission**, or **speaking rehearsal** template, customise a learning goal, instructions, German example and success criteria, and save a draft or publish it to the demo learner.
- Teachers can compose full sessions from five editable block types: **vocabulary cards**, **listening and pronunciation**, **interactive knowledge checks**, **written role-play**, and **final assessment**. They can add, reorder, remove and edit steps, preview the sequence, save drafts, and publish to either the demo learner or an illustrative sample A1 group that includes the demo learner. A ready-made café session shows the experience.
- The learner follows one session step at a time, hears German via browser speech, answers questions, submits dialogue for teacher review, and sees saved completion, check results and feedback. Teacher Studio includes the session's written response in the existing review queue.
- The **Student** view displays published missions. The learner can write and submit a response; the Teacher Studio review queue can return feedback. The speaking format uses local rehearsal with a written response, not an audio upload.
- Student lesson completion, quiz scores, created sessions and experiences, text submissions and teacher reviews are saved to `localStorage` in the **same browser**. "Reset demo" clears only that demo state and returns to the starting examples.
- Exam attempts, questions and practice reviews use a separate browser-local key. "Reset demo" clears both keys after confirmation.
- Teacher roster entries and summary statistics (other than the current demo learner) are **fictional seed data**. They are not actual student accounts.
- Pronunciation playback uses the browser's installed German text-to-speech voice. The optional microphone exercise records locally and is not uploaded to the teacher.
- No authentication, cloud database, real enrolments, multi-user synchronization, booking or live video calls are included. These must be implemented before an actual class uses it.
- All lesson explanations, quiz items, dialogues and English glosses are original demonstration material and require subject-matter review before classroom release.
- The new exam questions are **short independent rehearsals**, not official Goethe/telc model exams or exact replicas of timing, weighting or passing thresholds. Listening uses synthetic device speech, writing requires teacher review, and speaking is an aloud rehearsal followed by notes (no uploaded recording or automatic grading). See [`docs/exam-preparation-requirements.md`](docs/exam-preparation-requirements.md) and [`docs/teacher-exam-studio-requirements.md`](docs/teacher-exam-studio-requirements.md).

### Suggested Experience Studio walkthrough

1. Switch to **Teacher Studio → Missions** to open Experience Studio.
2. Select **Role-play**, **Writing mission**, or **Speaking rehearsal** to populate the builder.
3. Personalise the teaching instructions and success criteria, then **Publish to demo learner** (or save as a draft).
4. Switch to **Learning → Practice**, open the mission under **Practice with a purpose**, and submit a German response.
5. Return to **Teacher Studio → Learners & reviews**, add feedback to the new mission entry, and switch back to Learning to read it.

This demonstrates the workflow only. Publication does not notify students or synchronize anything between devices.

### Suggested Session Studio walkthrough

1. Open **Teacher Studio → Sessions** and preview the published **At the café: Your first order** example.
2. Select **Create lesson session**. Edit its title, learning goal and audience; change the text or answer key in each step, add a new block from the library, and use the ↑ / ↓ buttons to reorder it.
3. Select **Preview as student**, then **Publish & assign** (or **Save draft**).
4. Switch to **Learning → Practice** and open the assigned lesson session. Follow the cards, pronunciation, quiz, dialogue submission and final assessment through the summary.
5. Return to **Teacher Studio → Learners & reviews**, respond to the submitted dialogue, then revisit the learner session summary to see that feedback.

The sample A1 group is only a presentation of how group assignment would work later. It does not enroll or notify real learners. No external lesson books, recordings or protected exercises are copied into the composer.

## Open resources and attribution

The prototype contains a small **Open phrase collection** in `dist/data/tatoeba-cc0.json`, manually selected from [Tatoeba's German CC0 export](https://downloads.tatoeba.org/exports/per_language/deu/deu_sentences_CC0.tsv.bz2). Individual sentence IDs link to Tatoeba. The English glosses are original and should be checked by the German teacher. No Tatoeba audio was copied (it can carry different licensing).

CEFR A1 framework reference: [Council of Europe](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale). Official [Goethe A1](https://www.goethe.de/ins/de/en/prf/gzsd1/ueb.html) and [telc A1](https://www.telc.net/en/language-examinations/certificate-exams/german/start-german1-telc-german-a1/) exam-preparation materials are **linked only**, not embedded or reproduced.

Commercial textbooks such as *Netzwerk neu* or Hueber materials are **not included**. Obtaining a book does not grant reproduction rights; check publisher licensing before importing pages, recordings, exercises or photos into the platform.


## Current course reference: uploaded original Netzwerk A1.1 (22 October 2026)

The teacher's uploaded `netzwerk-a1-1pdf_compress.pdf` is **original Netzwerk A1.1, Kurs- und Arbeitsbuch Teil 1**, a scanned **166-page** source containing the original edition's first six course chapters and workbook reinforcement. This is **not** the earlier public-link *Netzwerk neu A1* 176-page book. A1.1 is now the verified live reference for the first half of the course. The different newer edition remains archived, not silently mixed.

- Source-mapped curriculum: [dist/data/netzwerk-a1-1-uploaded-reference.json](dist/data/netzwerk-a1-1-uploaded-reference.json) contains 166 PDF-page section records, communication objectives, grammar, vocabulary themes, workbook formats and separate source ranges.
- Client-side shared course data: [dist/curriculum.js](dist/curriculum.js) drives the learner chapter journey and teacher planner from one edition-consistent source.
- Original, independently authored lessons: [A1.1 Chapters 1–3](dist/a11-chapters-1-3.js) and [A1.1 Chapters 4–6](dist/a11-chapters-4-6.js) supply **12 interactive guided lessons**, including explanations, original dialogues, spoken phrase playback via browser TTS, four questions with feedback, and an application task. The initial five interactive prototype lessons remain.
- Verified source and page map: [docs/netzwerk-a1-1-uploaded-audit.md](docs/netzwerk-a1-1-uploaded-audit.md).
- Chapters **7–12** remain original-edition A1.2 **publisher-outline-only** previews because the A1.2 PDF has not been uploaded. The newer-edition *Netzwerk neu* map remains archived at [dist/data/netzwerk-neu-a1-reference.json](dist/data/netzwerk-neu-a1-reference.json).
- **Teacher validation is still pending**; this is original prototype practice, not copied textbook activities or finished official-course certification. The supplied PDF does not contain playable publisher audio/video.

## A1.1 workbook & revision implementation (22 October 2026)

The six PDF-grounded chapters now include **48 independently authored multiple-choice tasks** split across browser-TTS listening, original reading passages, grammar and vocabulary; there are also guided **writing and speaking-rehearsal prompts** in every chapter. **Plattform 1 (after Chapter 3)** and **Plattform 2 (after Chapter 6)** each provide a nine-question cross-chapter revision assembled from the corresponding original tasks. Exercises have replay, explanation, per-question retries, browser-local persistence and submission to the existing teacher review queue. This is original supplemental practice; neither the scanned exercise pages nor publisher media are copied, and teacher QA remains mandatory.

The new materials are in `dist/workbook.js`, presented under **Student Studio → Lessons → Chapter practice** and **Student Studio → Practice → Workbook & revision**. Teacher Studio → Learners & reviews shows actual demo-browser chapter attempts and writing/speaking submissions. All data stay in local browser storage; there are no real student accounts or cross-device synchronisation. Run `node tests/workbook.mjs` along with the existing regression tests.

## Next steps before a real pilot

1. Teacher validates lesson sequence, content and assessment answer keys.
2. Add secure learner accounts, role-based access and durable database storage.
3. Provide private audio/text submission with explicit consent and teacher feedback.
4. Add cohorts, assignment scheduling and progress analytics with genuine student data.
5. Conduct accessibility, mobile, browser and privacy testing.

## Checks

Run `node tests/workbook.mjs` for workbook/question coverage and learner-teacher workflow. Run `node tests/curriculum-a11.mjs` for the uploaded 166-page PDF map and 12 authored lessons, and `node tests/curriculum-neu.mjs` to safeguard the other edition's archived 176-page reference. Run `node tests/smoke.mjs`, `node tests/exam.mjs`, `node tests/navigation.mjs` and `node tests/role-separation.mjs` for student/teacher regression coverage. The buildless `dist/` directory is published directly; `node tools/bundle.mjs` regenerates the portable single-file demo with the exam modules included.


## Phase 1 continuation — image-led practice and reading repair (23 October 2026)

A1.1 Chapters 1–6 now each have two independently authored photo-to-German-phrase checks (12 total), using the existing credited Pexels photography. Learners can check and retry answers, hear the model sentence through their browser and retain progress locally; Teacher Studio reports each chapter's photo-practice results. Separately, Reading workbook questions now show their original German passage rather than incorrectly being rendered as a hidden listening transcript. Listening tasks retain their audio-first interaction. CI runs a new photo and reading regression. These features are original supplementary practice requiring qualified German-teacher QA; they are not republished textbook exercises. All saved progress is limited to this browser.


## Phase 2 — deeper guided lessons (23 October 2026)
All 12 verified original A1.1 topics have three original step-by-step worked examples, a common-error grammar comparison and an interactive sentence-order lab in Understand. Attempts and mastery are tracked locally in the Teacher Studio chapter panel. A teacher can preview the same learner lesson from the planner. Photo-choice distractors now stay within the current chapter and a shopping package quantity was clarified. See [Phase 2 content audit](docs/phase2-lesson-depth-audit.md). Original practice requires qualified German-teacher QA.

## Phase 3 — complete visual situation practice (23 October 2026)

Every one of the 12 guided original-edition A1.1 lessons now contains three additional independently authored real-life scenes with topical visual boards, longer usage explanations, contextual German/English examples, 36 new answerable checks, specific feedback and retry. Learner answers are saved in this browser and shown in the matching Teacher Studio chapter report. The scenes build on existing photographs, teaching objects, 48 workbook checks and the Plattform revisions, without reproducing copyrighted textbook materials. See [Phase 3 implementation and limitations](docs/phase3-visual-situation-audit.md). Real student accounts, licensed natural audio, teacher content QA, mobile browser review and A1.2 source verification remain outstanding.

## Phase 4 — listening and speaking labs (23 October 2026)

Each of the 12 original A1.1 guided lessons now has a **Hear & speak** stage with two audio-first comprehension checks (24 total), hidden-until-answered transcripts, slow/normal German playback, optional installed-voice selection, a topic-specific speaking model and a self-review checklist. Optional recordings are kept in browser memory for private replay, never uploaded or used for automatic pronunciation grading. Listening attempts and speaking checklists save locally and appear as chapter-level metrics in Teacher Studio. This extends, rather than replaces, Phases 1–3 and workbook listening. Natural speaker recordings and actual multi-device student submissions are **not** included; they require independently licensed audio, secure storage and teacher QA. See [Phase 4 audit](docs/phase4-audio-speaking-audit.md).

## Phase 5 — classroom workflow in Teacher Studio (23 October 2026)

Teacher Studio now supports four editable original chapter templates, supported/standard/extension practice, demo learner or sample-group targeting, optional local-date opening/closing windows, three editable rubric criteria, and an explicit draft → pending review → approved → published gate. Editing resets approval; updating an already published session creates a new draft instead of corrupting existing student work. Teachers can score written session responses against the rubric and return feedback to the local demo learner. Existing published sample content remains. This is **not** live multi-user enrolment, production identity verification or independent second-teacher approval; all data remain browser-local. See [Phase 5 audit](docs/phase5-teacher-classroom-audit.md).
