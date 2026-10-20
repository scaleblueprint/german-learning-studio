# Exam Preparation — page requirements and acceptance checks

## Scope

The Learning dashboard links to a dedicated Exam Preparation view without adding a third top-level workspace. Both Goethe-Zertifikat A1: Start Deutsch 1 and Start Deutsch 1 / telc Deutsch A1 are selectable. A1 is the only playable level in this pilot; A2, B1, B2, C1 and C2 are visibly marked as planned, never as completed content.

The experience is **independent, original, shortened practice**. It must not claim certification, official scoring, copyrighted official test content, or human assessment of audio that was never uploaded.

## Learner acceptance criteria

1. Choose Goethe or telc and see the matching title, official practice link and track-specific tips.
2. Start an 18-minute A1 mini-mock or untimed practice for Listening, Reading, Writing or Speaking.
3. Hear original listening prompts through browser-generated German text-to-speech. If unsupported, show a helpful message.
4. Navigate between questions; preserve choices and writing across steps and a reload using browser-local storage.
5. Pause/resume the mock timer; do not silently reset it on page reload. Time expiry auto-submits saved answers.
6. On manual submission, warn when tasks are unanswered. Make retake possible without overwriting prior completed attempts.
7. Show explanatory review for each multiple-choice answer and skill-specific objective tallies, not an invented official pass/fail score.
8. Show writing and speaking notes as pending teacher review until feedback is provided in the same browser. Speaking is a rehearsal, not recorded or machine graded.
9. List recent attempts for review. Keep only the most recent 30 completed attempts locally.
10. Keep course-first friendly naming outside the exam context and use official level codes within the exam context.

## Content and provenance

- The original A1 questions and prompt criteria reside in `dist/exam-data.js`; `dist/exam.js` owns rendering and interactions.
- Use the official [Goethe A1 practice page](https://www.goethe.de/ins/de/en/prf/gzsd1/ueb.html) and [telc Deutsch A1 page](https://www.telc.net/en/language-examinations/certificate-exams/german/start-german1-telc-german-a1/) for outward references, not copied tests.
- The A1 mini-mock has eight seeded objective questions (four listening, four reading) and two writing/speaking rehearsal tasks for each provider. Teacher-published objective items may extend it.
- A German teacher must validate the German, meaning, answer keys, prompts, relevance and accessibility before student release. The shortened mock is not timed or weighted like the actual examination.

## Explicit pilot limitations

No accounts, cohorts, cross-device synchronization, backend, secure data transfer, speech grading or automatic written-response grading. Local teacher feedback requires switching workspace on the same browser. Do not display fictional learner data as real performance.

## Regression checks

- `node tests/smoke.mjs`: legacy lessons, sessions, reviews, missions, routing and reset.
- `node tests/exam.mjs`: provider selection, exam routing, mock, pause, retake, results, teacher review, authoring and attempt resume.
- Run browser QA on desktop and common mobile widths for overflow, focus, readable choices and bottom navigation; verify the existing 80-second video remains playable.

