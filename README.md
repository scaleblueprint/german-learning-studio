# AmberTheory German Studio — teacher-led prototype

A portable, buildless static prototype demonstrating a student A1 learning flow, a teacher coaching workspace, a teacher-created Experience Studio and a visual **Session Studio** for composing complete lessons. All source required for the demo is in `dist/`; no build tooling or credentials are needed.

For an easily shareable, single-file demonstration, open `german-studio-demo.html` (generated with `node tools/bundle.mjs`). All app logic and styles are embedded in that file; German pronunciation uses built-in browser speech services.

## Running

Serve `dist/` using any static file server (for example, `python3 -m http.server 8000 --directory dist`) or upload it to a static host. `index.html` can be opened directly, although local file handling may vary by browser.

## Render deployment

The existing **Static Site** runs at [german-learning-studio.onrender.com](https://german-learning-studio.onrender.com/) and deploys from [scaleblueprint/german-learning-studio](https://github.com/scaleblueprint/german-learning-studio). The publish directory is `dist`. This prototype needs no build process or server and uses hash-based in-page navigation.

The homepage includes a 75-second, silent illustrated walkthrough of the **Teacher Studio** workflow. Its self-hosted media are `dist/teacher-studio-walkthrough.mp4` and `dist/teacher-studio-poster.svg`; both must remain inside the Render `dist/` publish directory. The MP4 is a product-guided visual sequence based on the prototype, not a filmed screen recording. It can be regenerated with `node tools/create-walkthrough.mjs` in a development environment with `sharp` and `ffmpeg`; Render serves the prebuilt assets and needs neither dependency.

## Demo behavior and limitations

- The header switches between **Student** and **Teacher** experiences.
- Teachers can select a **role-play**, **writing mission**, or **speaking rehearsal** template, customise a learning goal, instructions, German example and success criteria, and save a draft or publish it to the demo learner.
- Teachers can compose full sessions from five editable block types: **vocabulary cards**, **listening and pronunciation**, **interactive knowledge checks**, **written role-play**, and **final assessment**. They can add, reorder, remove and edit steps, preview the sequence, save drafts, and publish to either the demo learner or an illustrative sample A1 group that includes the demo learner. A ready-made café session shows the experience.
- The learner follows one session step at a time, hears German via browser speech, answers questions, submits dialogue for teacher review, and sees saved completion, check results and feedback. Teacher Studio includes the session's written response in the existing review queue.
- The **Student** view displays published missions. The learner can write and submit a response; the Teacher Studio review queue can return feedback. The speaking format uses local rehearsal with a written response, not an audio upload.
- Student lesson completion, quiz scores, created sessions and experiences, text submissions and teacher reviews are saved to `localStorage` in the **same browser**. "Reset demo" clears only that demo state and returns to the starting examples.
- Teacher roster entries and summary statistics (other than the current demo learner) are **fictional seed data**. They are not actual student accounts.
- Pronunciation playback uses the browser's installed German text-to-speech voice. The optional microphone exercise records locally and is not uploaded to the teacher.
- No authentication, cloud database, real enrolments, multi-user synchronization, booking or live video calls are included. These must be implemented before an actual class uses it.
- All lesson explanations, quiz items, dialogues and English glosses are original demonstration material and require subject-matter review before classroom release.

### Suggested Experience Studio walkthrough

1. Switch to **Teacher** and open the **Experience Studio** section.
2. Select **Role-play**, **Writing mission**, or **Speaking rehearsal** to populate the builder.
3. Personalise the teaching instructions and success criteria, then **Publish to demo learner** (or save as a draft).
4. Switch to **Student**, open the mission under **Practice with a purpose**, and submit a German response.
5. Return to **Teacher**, add feedback to the new mission entry, and switch back to Student to read it.

This demonstrates the workflow only. Publication does not notify students or synchronize anything between devices.

### Suggested Session Studio walkthrough

1. Open **Teacher Studio → Session Studio** and preview the published **At the café: Your first order** example.
2. Select **Create lesson session**. Edit its title, learning goal and audience; change the text or answer key in each step, add a new block from the library, and use the ↑ / ↓ buttons to reorder it.
3. Select **Preview as student**, then **Publish & assign** (or **Save draft**).
4. Switch to **Student → Your teacher's learning sessions**. Follow the cards, pronunciation, quiz, dialogue submission and final assessment through the summary.
5. Return to **Teacher Studio → Practice to review**, respond to the submitted dialogue, then revisit the learner session summary to see that feedback.

The sample A1 group is only a presentation of how group assignment would work later. It does not enroll or notify real learners. No external lesson books, recordings or protected exercises are copied into the composer.

## Open resources and attribution

The prototype contains a small **Open phrase collection** in `dist/data/tatoeba-cc0.json`, manually selected from [Tatoeba's German CC0 export](https://downloads.tatoeba.org/exports/per_language/deu/deu_sentences_CC0.tsv.bz2). Individual sentence IDs link to Tatoeba. The English glosses are original and should be checked by the German teacher. No Tatoeba audio was copied (it can carry different licensing).

CEFR A1 framework reference: [Council of Europe](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale). Official Goethe-Institut exam-preparation materials are **linked only**, not embedded or reproduced.

Commercial textbooks such as *Netzwerk neu* or Hueber materials are **not included**. Obtaining a book does not grant reproduction rights; check publisher licensing before importing pages, recordings, exercises or photos into the platform.

## Next steps before a real pilot

1. Teacher validates lesson sequence, content and assessment answer keys.
2. Add secure learner accounts, role-based access and durable database storage.
3. Provide private audio/text submission with explicit consent and teacher feedback.
4. Add cohorts, assignment scheduling and progress analytics with genuine student data.
5. Conduct accessibility, mobile, browser and privacy testing.
