# Phase 5 — Teacher Studio classroom workflows

Implemented as a same-browser demonstration for the **original Netzwerk A1.1 Chapters 1–6**. Teacher Studio still uses the source-grounded chapter sequence shared with students.

## Authoring and reuse

- Four editable chapter-scoped quick-start templates: Everyday conversation, Listening workshop, Grammar in action, and Chapter assessment. Sessions reuse original teacher/learner chapter information, not copied publisher material.
- Practice difficulty: Supported, Standard, and Extension; user-visible guidance is displayed in the learner session.
- Assignments target the demo learner or a clearly fictional sample cohort. Optional opening/closing dates govern browser-local visibility; no server-side scheduling or notifications.

## Content approval

- New sessions remain teacher-only drafts until they are submitted for review.
- A reviewer action explicitly approves the completed content, after which the teacher can publish. Every saved edit resets approval. Published sessions opened for editing are copied to an unpublished draft, so existing learner attempts and assignments are not altered.
- Previously published demo sessions retain their current availability for backwards compatibility. The same-browser approval is a demonstration, **not** an independent multiple-educator audit. No actual identity or role authentication exists.

## Assessment and progress

- Every session has three editable rubric criteria. Session written submissions require 1–4 teacher scores for all three criteria alongside actionable written feedback; feedback and practice-only /12 score appear on learner submissions.
- The existing learner assignment and teacher review queues remain in the same localStorage database. There are no real student accounts, cross-device synchronisation, secure grading APIs, live classroom enrolment or actual audio submission.

## QA

`node tests/phase5.mjs` verifies the new template and approval workflow, lesson assignment and review without publishing unapproved content. Existing smoke and role-separation tests now perform the explicit approval step. Other unit and regression tests protect the textbook boundaries, audio, exam preparation and workbook.

**Release gates:** independent German-teacher language and rubric validation; accessibility and real mobile-browser checks; back-end auth, persistence and consent before real classroom use.
