# Textbook experience alignment — 23 October 2026

## Source and limits

The supplied 166-page scanned **original Netzwerk A1.1 — Kurs- und Arbeitsbuch Teil 1** is the curriculum reference. It is **not Netzwerk neu A1**. The source was previously page-indexed in `docs/netzwerk-a1-1-uploaded-audit.md` and `dist/data/netzwerk-a1-1-uploaded-reference.json`; these remain the authoritative scope maps. The scan itself was not reattached for this release, so no new line-by-line textual reproduction or image comparison is claimed.

- **Kursbuch:** six chapters on PDF pages 7–36 and 41–70.
- **Plattform:** revision checkpoints after Chapters 3 and 6 (Kursbuch pages 37–40 and 71–74).
- **Arbeitsbuch:** practice for six matching chapters on PDF pages 76–111 and 116–151, plus revisions 112–115 and 152–155.
- **End matter:** grammar overview (156–160) and alphabetical vocabulary reference (161–166).
- **Outside verified scope:** original A1.2 Chapters 7–12, newer-edition *Netzwerk neu* topics, official Goethe/telc exams, and independently drafted but unrelated sample lessons.

The original textbook physically separates the Kursbuch and Arbeitsbuch blocks. The application intentionally lets learners work through both resources chapter by chapter to support teacher-led learning. This is an app navigation choice, **not** a claim that the publisher prints each workbook activity immediately after the corresponding Kursbuch page.

## Product changes

1. Student primary navigation is now **My progress → My chapters → Exam preparation**. The previous **Lessons** and **Practice** navigation is integrated into **My chapters**; old hashes `#student/lessons` and `#student/practice` still display chapters without duplicating content.
2. Each chapter opens independently to its verified Kursbuch topics, its aligned independent Arbeitsbuch practice, approved teacher sessions, original teacher-created missions, chapter completion, and local review counts/feedback.
3. **Plattform 1** occurs after Chapter 3 and **Plattform 2** after Chapter 6; neither is presented as a seventh or eighth course chapter.
4. The Student overview uses a six-chapter map; selecting a chapter opens the corresponding chapter, and learner lesson/workbook return links point back to that chapter.
5. Earlier five *standalone prototype* lessons are not reachable as student textbook lessons, even by old lesson routes. Source assets and historical browser state are retained for compatibility; no user progress is erased.
6. Teacher Studio still has a chapter planner, activity authoring, review, and separate exam coaching. New missions require verified Chapter 1–6 linkage; old unscoped missions remain editable in the teacher's browser rather than appearing inside the learner course. Historic seeded examples are mapped to source-relevant chapters as independently created supplements.
7. New teacher sessions and missions no longer advertise A2 as available course content. Direct learner session routes are restricted to published A1.1 chapter assignments.
8. The unrelated five-sentence Tatoeba phrase-library presentation was removed from Materials & Credits. That page now describes textbook boundaries, attribution and the independently authored practice. Its historical source files are retained but are not loaded in the learner journey.
9. Goethe/telc mock preparation remains **separate**, explicitly an independent exam-training companion rather than a section of the textbook.

## What must not be inferred

- The independent lesson explanations, quizzes, photographs, speech-generated audio and classroom sessions are **not publisher exercises**. Source mapping is not the same as publisher certification or teacher content approval.
- The 166-page scan is a navigation/syllabus reference; no licensed publisher photos, audio, long exercise passages or answer keys were shipped.
- A1.2 is not verified; there is no automatic scope expansion to chapter 7–12.
- Teacher mission availability and response grading are local-browser demonstrations. Independent academic review, multi-user backend, actual enrolment and natural voice recordings are still open release gates.
- The pre-existing silent walkthrough MP4 is an illustrative prototype tour that may still show older menu labels. Updating the video to match this release remains a visual-content follow-up; it should not be taken as the current interface.

## Verification

`tests/textbook-alignment.mjs` guards the chapter-first navigation, legacy URL compatibility, six-chapter/two-Plattform structure, disabled legacy standalone lesson access, A1.1-only authoring, textbook-scoped missions, and separate exam preparation. Existing curriculum, workbook, audio, classroom/approval, role and regression tests run in GitHub Actions.

No lesson content, answer key, mathematics, publisher attribution record or user storage schema was rewritten for this navigation/content-boundary release.
