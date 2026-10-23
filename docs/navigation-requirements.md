# German Studio navigation

## Principle

Use three clear top-level destinations: **Home** (public landing page), **Student Studio**, and **Teacher Studio**. The landing page introduces the value, offers entry to both studios, and presents the student-and-teacher walkthrough. All detailed activities and learner progress live inside the studios. Use section menus within each studio.

## Home

`#home` (and the empty URL hash) opens the public welcome page. It explains the linked learner and teacher experiences, provides working studio entry buttons, and hosts the complete silent walkthrough video. The AmberTheory logo returns here from any studio. This page has no student progress dashboard or teacher editing forms.

## Student Studio

| Menu | Route | Contents |
| --- | --- | --- |
| My progress | `#student` | Current progress, next lessons, exam entry and shortcuts to learning activities |
| Lessons | `#student/lessons` | Learner-facing original Netzwerk A1.1 (PDF-reviewed) / A1.2 (publisher outline only) journey: 12 chapter goals clearly marked in preparation, plus five currently playable introduction lessons |
| Practice | `#student/practice` | Assigned sessions, teacher-created missions, short assignment, feedback and indicative skills |
| Exam preparation | `#exam` | Goethe/telc A1 original practice, mocks, results and tips |

Lesson details retain a desktop outline, four stages and previous/next controls. On phones, the outline becomes a labelled, expandable lesson chooser. Returning from a lesson goes to the lesson list; returning from a mission or session goes to Practice. The exam route remains directly bookmarkable.

## Teacher Studio

| Menu | Route | Contents |
| --- | --- | --- |
| Overview | `#teacher` | Cohort summary and prominent links to studio activities |
| Sessions | `#teacher/sessions` | Chapter-based teaching planner (objectives, grammar, pronunciation, original activity suggestions), chapter-linked draft composer, assigned sessions, previews and editing |
| Missions | `#teacher/missions` | Experience templates, authoring, publishing and preview |
| Exam coaching | `#teacher/exams` | Question bank, publishing and exam response reviews |
| Learners & reviews | `#teacher/learners` | Sample cohort, lesson/session/mission feedback, quick assignment and content readiness review (no duplicate learner lesson cards) |

Each destination is a real hash route, survives refresh, and highlights its menu. Keep data and browser-local persistence unchanged. Teacher exam review remains independent of lesson response review.

## Accessibility, responsive layout and regression

- One visible content pane per selected section; hidden panels are not focusable or shown.
- Current location is clear with an active state and `aria-current="page"`.
- Menus fit on narrow screens by wrapping into a two/three-column grid instead of clipping into horizontal overflow.
- Keep mobile navigation for Home, Student Studio and Teacher Studio, with the video displayed on the public home page.
- No loss of lesson content, authoring forms, mock controls or existing reviews.
- Run `node tests/smoke.mjs`, `node tests/exam.mjs`, `node tests/navigation.mjs` and check phone/desktop live pages after deploy.

## Role differentiation and chapter-linked authoring

- Learners see goals, course sequence, playable beginner lessons, practice, feedback and exam preparation. Chapter cards do not falsely behave like finished lessons.
- Teachers see a separate chapter planner with actionable source-aligned objectives and a chapter navigator. Click **Create chapter session draft** to open a new local draft with the chapter tagged; edit original vocabulary, listening and role-play content before publishing.
- Sessions store an optional numeric `chapterNumber`. Existing sessions remain valid without this field; teachers can change alignment in the session composer. Drafts remain teacher-only; published sessions appear in learner Practice on the same browser.
- Full teacher validation, secure accounts and real cohorts are not implemented. A textbook reference is not automatically teacher-approved content.
- Regression: `node tests/role-separation.mjs` alongside existing smoke, navigation and exam tests.

## October 2026 — section discovery and shorter chapter pages

- Both studios use the same persistent, descriptive **workspace navigation** on desktop. It lists every destination, explains its purpose and marks the current section.
- On tablets and phones, all studio destinations remain visible in a compact responsive grid immediately above the content; the existing fixed Home / Student / Teacher switch is retained.
- Long pages offer **On this page** jump links (chapters in learner Lessons, workbook and sessions in Practice, chapter planner/session composer in Teacher Sessions, missions and review panels). Jumping never changes the selected hash route or discards local work.
- The Student overview now uses a six-chapter compact progress map rather than duplicating the entire textbook listing. The full Lessons route holds six **expandable** chapter panels, with the next unfinished chapter initially expanded.
- The Teacher chapter planner collapses detailed objective, grammar and activity cards behind an explicit disclosure while keeping its core chapter tools and learner reports available.
- Preserve direct deep links, lesson navigation, editor/review state, browser-local storage and published-session approval gates. Avoid separate navigation systems for the student and teacher.
- Regression: `tests/navigation.mjs`, `tests/smoke.mjs`, `tests/role-separation.mjs`, `tests/phase5.mjs`, and the existing course/exam suites.

## Revised textbook-first navigation (23 October 2026)

The original **Lessons / Practice** learner split is superseded. The only learner primary destinations are **My progress**, **My chapters**, and **Exam preparation**. Within **My chapters**, each of the six source-verified A1.1 chapters integrates independently written Kursbuch explanations, Arbeitsbuch practice, teacher-published chapter exercises, progress and teacher feedback; Plattform 1 and 2 remain after Chapters 3 and 6. Legacy `#student/lessons` and `#student/practice` bookmarks resolve to this unified view.

Student course routes accept `#student/chapters/N` for N=1–6; lesson/workbook return links preserve chapter context. Standalone legacy lesson IDs are not navigable as textbook lessons. Teacher authoring is chapter-scoped and remains separate from independent Goethe/telc exam coaching. See [textbook alignment audit](textbook-experience-alignment-20261023.md) for content decisions and continuing limitations. This section takes precedence over the old navigation table above.
