# German Studio navigation

## Principle

Keep **Learning** and **Teacher Studio** as the only top-level workspaces. Do not add a redundant landing page, duplicate role switch, or a second overview route. Use the section menu within each workspace to organise dense content without deleting it.

## Learning

| Menu | Route | Contents |
| --- | --- | --- |
| Home | `#student` | Current progress, next lessons, exam entry, student-and-teacher walkthrough video and shortcuts |
| Lessons | `#student/lessons` | All five beginner lessons with direct entry and progress |
| Practice | `#student/practice` | Assigned sessions, teacher-created missions, short assignment, feedback and indicative skills |
| Exam preparation | `#exam` | Goethe/telc A1 original practice, mocks, results and tips |

Lesson details retain a desktop outline, four stages and previous/next controls. On phones, the outline becomes a labelled, expandable lesson chooser. Returning from a lesson goes to the lesson list; returning from a mission or session goes to Practice. The exam route remains directly bookmarkable.

## Teacher Studio

| Menu | Route | Contents |
| --- | --- | --- |
| Overview | `#teacher` | Cohort summary and prominent links to studio activities |
| Sessions | `#teacher/sessions` | Session composer, assigned sessions, previews and editing |
| Missions | `#teacher/missions` | Experience templates, authoring, publishing and preview |
| Exam coaching | `#teacher/exams` | Question bank, publishing and exam response reviews |
| Learners & reviews | `#teacher/learners` | Sample cohort, lesson/session/mission feedback, quick assignment and curriculum |

Each destination is a real hash route, survives refresh, and highlights its menu. Keep data and browser-local persistence unchanged. Teacher exam review remains independent of lesson response review.

## Accessibility, responsive layout and regression

- One visible content pane per selected section; hidden panels are not focusable or shown.
- Current location is clear with an active state and `aria-current="page"`.
- Menus fit on narrow screens by wrapping into a two/three-column grid instead of clipping into horizontal overflow.
- Keep the mobile bottom workspace switch and home-page video.
- No loss of lesson content, authoring forms, mock controls or existing reviews.
- Run `node tests/smoke.mjs`, `node tests/exam.mjs`, `node tests/navigation.mjs` and check phone/desktop live pages after deploy.
