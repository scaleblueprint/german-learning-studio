# Netzwerk neu A1 — verified coursebook reference and content-build status

**Reference edition:** *Netzwerk neu A1*, Kursbuch mit Audios und Videos, Ernst Klett Sprachen, ISBN **978-3-12-607156-7**, 176 flipbook pages.

**Date checked:** 22 October 2026.

## Purpose

Use this book for learning order, communication objectives, vocabulary **themes**, grammar and pronunciation progression in the **same underlying chapter map** presented differently in Student Studio (learning journey) and Teacher Studio (session planner). The content must be independently authored and teacher-reviewed. Do **not** reproduce the book's exercises, text passages, photographs, tables, audio, video, illustrations, answer keys or its complete vocabulary lists in the public app without permission.

## Sources and limits

1. [Klett official product (176 pages; ISBN)](https://www.klett-international.com/en/bh/netzwerk-neu-a1/t-4495/9783126071567).
2. [Teacher-supplied FlipHTML5 viewer](https://fliphtml5.com/hpxsx/efce/netzwerk-neu-a1-kursbuch_%282%29/) — publicly visible flipbook; its interactive pages were not readable as text through the web client used in this analysis.
3. [Indexed reading version of the same coursebook](https://fliphtml5.com/qdeox/zrth/netzwerk_neu_a1_kursbuch/) — provided readable chapter outline and source page labels through page 176; the continuation after page 176 contains a **different book (Übungsbuch)** and is out of scope.
4. [Publisher materials and licensing boundary](https://www.klett-sprachen.de/netzwerk-neu/r-18/605) — supplementary resources exist, but their public discovery does not grant reuse rights.

**Verification boundary:** Each page 1–176 has a *section index* in the structured dataset. This means section ownership and flipbook numbering are covered; it does **not** mean every activity, grammar box, page illustration or exercise has been manually reviewed or captured. Text-index character encoding (especially umlauts) and lost image context remain quality issues. The chapter-theme mapping is a useful reliable reference, not an accurate transcription.

## 176-page index

| Flipbook pages | Printed pages (approx.) | Section | Studio content application |
| --- | --- | --- | --- |
| 1–4 | — | Cover, publication data, reading legend | Metadata only |
| 5–8 | — | Table of contents and goals | Chapter roadmap |
| 9–18 | 8–17 | 1. Guten Tag! | Introduction, numbers, spelling |
| 19–28 | 18–27 | 2. Freunde, Kollegen und ich | Leisure, work, days, articles |
| 29–38 | 28–37 | 3. In Hamburg | City, transportation, directions |
| 39–44 | 38–43 | Plattform 1 | Original review after chapter 3 |
| 45–54 | 44–53 | 4. Guten Appetit! | Food shopping and simple conversations |
| 55–64 | 54–63 | 5. Alltag und Familie | Routines, time, family, modals |
| 65–74 | 64–73 | 6. Zeit mit Freunden | Leisure, invitations, dates |
| 75–80 | 74–79 | Plattform 2 | Original review after chapter 6 |
| 81–90 | 80–89 | 7. Arbeitsalltag | Work tasks, place and dative |
| 91–100 | 90–99 | 8. Fit und gesund | Body, medical conversations, imperative |
| 101–110 | 100–109 | 9. Meine Wohnung | Furniture, rooms, locations |
| 111–116 | 110–115 | Plattform 3 | Original review after chapter 9 |
| 117–126 | 116–125 | 10. Studium und Beruf | Occupations, jobs, Perfekt |
| 127–136 | 126–135 | 11. Die Jacke gefällt mir! | Clothes, shop interactions, dative |
| 137–146 | 136–145 | 12. Ab in den Urlaub! | Holidays, itineraries, postcards |
| 147–152 | 146–151 | Plattform 4 | Original review after chapter 12 |
| 153–161 | 152–160 | Grammar overview | Teacher reference and student refreshers |
| 162 | 161 | Irregular verbs | Grammar reference only |
| 163–174 | 162–173 | Alphabetical vocabulary list | **Theme references only**, do not reproduce glossary |
| 175 | — | Source and image credits | Attribution notes |
| 176 | — | Back cover | Edition metadata |

## Content architecture

- Canonical **new** data: `dist/data/netzwerk-neu-a1-reference.json`.
- Active shared client-side curriculum: `dist/curriculum.js` (chapters, original lesson blueprints, review checkpoints and metadata from the same new reference; full per-page index kept out of active payload).
- Preserved **older** book data: `dist/data/netzwerk-a1-reference.json` (original *Netzwerk*, a different series).
- All 12 new chapter records have communication goals, vocabulary themes, grammar, pronunciation, cultural context and **five original lesson outlines**, intended to become one shared content source for both studios.
- A learner sees a chapter journey and forthcoming outcomes; a teacher sees planning goals and can create **draft** sessions from the same chapter data. Sessions do not become student lessons simply because a chapter was indexed.
- All 12 chapters remain `releaseStatus=mapped-outline-only` and `teacherValidated=false`. Five existing playable introduction examples are demonstrations, not full chapter coverage.
- Four review milestones are planned after chapters 3, 6, 9 and 12; use **independently authored** listening, speaking, reading and writing evaluations.

## Required completion work

1. Conduct visual page-by-page audits to validate descriptions of image-heavy pages and confirm individual exercise skills **without transcribing** them.
2. Create independently authored novice explanations, word groups, short dialogues, audio or TTS scripts, photographs/diagrams with reuse rights, role-play and corrective-feedback quizzes for each lesson outline.
3. Tag every lesson with chapter, skill, CEFR target, provenance, reviewed version, and teacher approval.
4. Add section-level progress and teacher feedback based on *real* attempts; do not promote example statistics as student progress.
5. Validate the specific chapter content with the teacher, then unlock it in the learner studio. Confirm Goethe and telc exam preparation remain distinct from publisher-branded content.

## Quality rule

New source material should not silently erase completed original activities or change the app's navigation, style or assessment math. Preserve the first textbook mapping as an archive. Changes to the *shared* chapter data must be checked against both Student Studio and Teacher Studio before publish.
