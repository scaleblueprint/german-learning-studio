# German Studio navigation

## Principle

Use three clear top-level destinations: **Home** (public landing page), **Student Studio**, and **Teacher Studio**. The landing page introduces the value, offers entry to both studios, and presents the student-and-teacher walkthrough. All detailed activities and learner progress live inside the studios. Use section menus within each studio.

## Home

`#home` (and the empty URL hash) opens the public welcome page. It explains the linked learner and teacher experiences, provides working studio entry buttons, and hosts the complete silent walkthrough video. The AmberTheory logo returns here from any studio. This page has no student progress dashboard or teacher editing forms.

## Student Studio

| Menu | Route | Contents |
| --- | --- | --- |
| My progress | `#student` | Current progress, next lessons, exam entry and shortcuts to learning activities |
| Lessons | `#student/lessons` | Learner-facing Netzwerk A1.1/A1.2 journey: 12 chapter goals clearly marked in preparation, plus five currently playable introduction lessons |
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
