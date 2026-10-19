# AmberTheory German Studio — teacher-led prototype

A portable, buildless static prototype demonstrating a student A1 learning flow and a teacher coaching workspace. All source required for the demo is in `dist/`; no build tooling or credentials are needed.

For an easily shareable, single-file demonstration, open `german-studio-demo.html` (generated with `node tools/bundle.mjs`). All app logic and styles are embedded in that file; German pronunciation uses built-in browser speech services.

## Running

Serve `dist/` using any static file server (for example, `python3 -m http.server 8000 --directory dist`) or upload it to a static host. `index.html` can be opened directly, although local file handling may vary by browser.

## Render deployment

Create a **Static Site** in the user's new Render workspace, connect a repository containing this project, set its root directory to `german-studio-prototype` if this folder is inside a larger repository, and set the publish directory to `dist`. This prototype needs no build process or server. Configure SPA fallback only if future routing is added; this version uses in-page navigation.

## Demo behavior and limitations

- The header switches between **Student** and **Teacher** experiences.
- Student lesson completion, quiz scores, text submissions and teacher reviews are saved to `localStorage` in the **same browser**. "Reset demo" clears only that demo state.
- Teacher roster entries and summary statistics (other than the current demo learner) are **fictional seed data**. They are not actual student accounts.
- Pronunciation playback uses the browser's installed German text-to-speech voice. The optional microphone exercise records locally and is not uploaded to the teacher.
- No authentication, cloud database, real enrolments, multi-user synchronization, booking or live video calls are included. These must be implemented before an actual class uses it.
- All lesson explanations, quiz items, dialogues and English glosses are original demonstration material and require subject-matter review before classroom release.

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
