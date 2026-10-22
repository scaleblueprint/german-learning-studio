# Historical record — original Netzwerk A1 curriculum mapping (superseded)

**Update, 22 October 2026:** The user uploaded the **original Netzwerk A1.1** Kurs- und Arbeitsbuch scan, 166 pages. That user-uploaded source now grounds the first six active chapters and twelve original interactive pilot lessons. This earlier original-edition publisher-TOC map is preserved as a historical baseline; see [the uploaded PDF audit](netzwerk-a1-1-uploaded-audit.md). The distinct *Netzwerk neu* link map remains archived separately.

## Earlier decision (22 October 2026)

The teacher-requested **Netzwerk A1** textbook is the primary A1 curriculum reference for AmberTheory German Studio. This is the original **Netzwerk** series, not **Netzwerk neu**. The publisher identifies a 160-page Kursbuch (ISBN 978-3-12-606128-5). The public Scribd URL was supplied by the user, but its full 174-page upload was inaccessible in this environment, so its exact edition cannot yet be independently confirmed.

## Source of truth and access confidence

| Source | What was verified | Access |
| --- | --- | --- |
| [Publisher book information](https://www.klett-sprachen.de/netzwerk-a1/t-1/9783126061285) | Product and level, original A1 (12 chapters) | Public |
| [Original Netzwerk A1.1 TOC](https://www.klett-sprachen.de/downloads/2624/inhaltsverzeichnis-netzwerk-a1-1/pdf) | Chapters 1–6; communication, vocabulary, grammar, pronunciation, regional culture | Public (2 pages) |
| [Original Netzwerk A1.2 TOC](https://www.klett-sprachen.de/downloads/2622/inhaltsverzeichnis-netzwerk-a1-2/pdf) | Chapters 7–12 with the same learning domains | Public (2 pages) |
| [Publisher resources](https://www.klett-sprachen.de/netzwerk/r-388/187) | Existence of official vocabulary lists, transcripts, chapter tests, learning aids, code-protected recordings | Public catalogue; reuse rights NOT assumed |
| [User-supplied Scribd upload](https://www.scribd.com/document/917795854/Netzwerk-A1-Kursbuch) | URL supplied; all pages NOT accessible | Restricted in this environment |

The **historical original-edition** data are preserved in `dist/data/netzwerk-a1-reference.json`. The active `dist/curriculum.js` now comes from the **uploaded original A1.1** source `dist/data/netzwerk-a1-1-uploaded-reference.json`; do not resynchronise it from this earlier, less-complete TOC-only file.

## What is in the curriculum data

- Chapters 1–6: A1.1; chapters 7–12: A1.2.
- Each chapter maps goals for communication, vocabulary, grammar, pronunciation, culture, one original learner lesson outcome and one original teacher-studio scenario.
- Chapter checkpoints after 3, 6, 9 and 12 are **planned** as original four-skill reviews, not replicas of publisher tests.
- Related existing demonstrations are marked only where relevant. **Related demonstration does not mean complete coverage or textbook compliance.**
- All mapped chapters have `releaseStatus=mapped-outline-only` and `teacherValidated=false` until original lessons, audio, assessment and teacher review are complete.

## Required student content workflow

1. Choose a chapter and break the communication objectives into short, sequenced teachable lessons.
2. Author an original explanation for a novice, followed by vocabulary, pronunciation, accessible visuals and German-in-context dialogue.
3. Add original listening, speaking, reading and writing tasks. Explain right and wrong answers and include retry opportunities.
4. Include chapter checkpoints, spaced review and progress metrics based on real learner attempts—not demo percentages.
5. Get the German teacher's validation of German accuracy, sequencing, register, vocabulary, answer keys, pronunciation and cultural appropriateness.
6. Only then promote from mapped-only into a release-ready chapter; do not prematurely mark it completed on the learner dashboard.

## Required teacher experience

Teacher Studio > Sessions now provides a dedicated **chapter planning workbench** (different from the learner course journey). Teachers can select any original Netzwerk A1 chapter, review learning objectives and language preparation, and open a prefilled, unpublished **chapter-linked session draft**. The composer stores optional `chapterNumber` metadata, and published, chapter-tagged sessions show up in learner Practice on the same browser. Newly created vocabulary/audio scaffolds are deliberately incomplete and must be written and validated by the teacher before publishing. Real learner progress by chapter and skill, authenticated cohorts, and formal content approval/versioning are **not yet implemented**.

## Attribution and copyright boundaries

- Use the textbook to decide **what and when to teach** and cite the source in instructional planning.
- Write AmberTheory explanations, practice dialogues, questions, illustrations, audio and teacher plans independently.
- Do not embed copied book pages, exercises, answer keys, publisher photos, recordings, films, extracts or proprietary glossary lists into the app without appropriate permission.
- Public downloads may be linked as publisher-hosted resources where appropriate; the availability of a download alone does not authorise redistribution.
- AmberTheory is an independent teaching prototype, not endorsed by the publisher.

## Implementation record

- `dist/data/netzwerk-a1-reference.json`: structured and source-referenced chapter mapping.
- `dist/curriculum.js`: browser-friendly equivalent.
- `dist/index.html`: loads mapping before `dist/app.js`.
- `dist/app.js`: shows separate learner chapter journey and teacher planning workbench, with chapter-linked session drafts, persistence and publish controls.
- `dist/amber-theme.css`: mobile-friendly chapter details using the German Studio palette.
- `tools/bundle.mjs`: includes curriculum in future single-file demo builds.

**Pilot limits:** Five interactive demo lessons remain; the full 12-chapter lesson bodies and teacher chapter assignment are not yet implemented. The course and chapter reference map is not an imported digital edition of Netzwerk A1.
