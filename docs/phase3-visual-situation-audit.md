# Phase 3 — expanded, visual A1.1 practice (23 October 2026)

Status: implemented in `dist/phase3-scene-labs.js`, integrated in each of the **12 guided lessons** in the original Netzwerk A1.1 source-verified course. The 12 lesson routes and all six textbook chapter boundaries are preserved; no unsupported A1.2 pages are activated.

## Learning experience
- Each guided lesson adds **three new practical situations**, a context-specific visual board, bilingual model language, a grammar/usage explanation, a three-option interactive comprehension check, answer-specific feedback and retry. Total: **36 new original checks** and 12 visual situation boards in addition to earlier lesson quizzes, photo checks and workbook.
- Scenes cover greetings / Sie versus du, origin / spelling / languages, hobbies / days / planning, occupation / hours / seasons, town places / articles / negation, directions / travel, food / shops / meals, shopping / accusative / prices, clocks / routines / modals, family / appointments / refusals, dates / invitations / separable verbs, and restaurant / war / hatte.
- Practice is presented inside **Understand**, in collapsible scenes to control scrolling. Audio is optional browser-generated German speech, not textbook recordings. Buttons support keyboard input and mobile layouts.
- Answers and retries are saved only in `localStorage` under `phase3Progress`, a new field of the existing versioned demo state. Teacher Studio's chapter report displays answered/correct scene checks and previews the same content.

## Boundaries and QA
These original independent scenes follow the mapped learning objectives, but are **not a digitisation or recreation of the copyrighted book**. No scanned book artwork, exercises, answer key or publisher audio was reproduced. Existing licensed photos and original visual artifacts remain. Qualified German-teacher language review is mandatory. The demo still lacks independent student accounts and real multi-device tracking.

## Regression
`node tests/phase3.mjs` checks 12×3 scene data, rendering, in-browser student answer/retry and teacher progress. The GitHub content regression workflow runs this alongside existing tests. Mobile/real-device image QA and teacher language review remain manual release gates.
