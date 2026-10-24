# Chapter-first navigation update — 24 October 2026

## Motivation
The full original *Netzwerk A1.1* Chapter 1–6 reader became difficult to navigate after expanding all explanations. The student must always know their current chapter, move backward/forward, jump directly to a section, and still choose whether to expand or collapse a chapter. The solution is navigation, **not content reduction**.

## Implemented student experience
- A **sticky chapter toolbar immediately below the AmberTheory global header** appears in Student Studio's chapter reader and remains available in lesson, workbook, practice session and teacher-assigned mission screens.
- It identifies **Chapter N of 6 and its original source-mapped title**.
- **Previous** and **Next** chapter buttons, disabled appropriately at Chapters 1 and 6.
- **Six numbered, accessible chapter shortcuts**, highlighting the current chapter; all available in a horizontally scrollable strip on mobile.
- A second **In this chapter** strip jumps to Introduction, Foundations, Read in depth (Chapters 2–6), Kursbuch lessons, Arbeitsbuch, Teacher activities, Progress and Plattform review (after Chapters 3 and 6).
- Jump targets have stable IDs. Section navigation from within a lesson or workbook returns to the correct chapter, then scrolls to the selected section. Ancestor disclosures are opened to reveal the destination.
- The chapter index remains ordered 1–6. Chapters are **expandable accordion cards**: the currently selected chapter opens by default, others stay compact; clicking a different chapter moves to its own route. The active chapter can be collapsed manually or expanded again without deleting content.
- Long explanations and previously authored original examples remain intact. Each expanded Chapter 2–6 reader also has its own list of five topic shortcuts; Chapter 1 has direct numbers and alphabet shortcuts.
- The now-redundant global Student Studio sidebar is hidden **only within chapter-related content** to give more horizontal room. Home, progress dashboard and Teacher Studio keep their existing navigation.
- The toolbar is responsive; on smaller devices its chapter and contents links scroll horizontally. Reduced-motion users retain browser-controlled scrolling behavior. Existing browser-local learner progress, workbook results, teacher sessions, data models and chapter mapping were not modified.

## Navigation acceptance criteria / regression
`tests/chapter-navigation.mjs` verifies all six chapter shortcuts, a single selected default expanded chapter, collapsing and reopening, previous/next boundaries, deep topic/section anchors, safe chapter scoping, chapter tracking while inside lessons, return-to-contents behavior and Teacher Studio isolation. The original `tests/navigation.mjs`, `tests/workbook.mjs`, `tests/textbook-alignment.mjs` and remaining content/regression scripts still run in GitHub Actions.

## QA boundaries
Programmatic regression validates markup and client route flows. Final manual device/browser QA is still recommended, particularly mobile viewport stickiness, screen-reader keyboard focus, scroll alignment and audio while scrolling. The chapter reader uses the prior user-uploaded A1.1 scope and does not activate unverified A1.2 chapters or reproduce protected publisher pages.
