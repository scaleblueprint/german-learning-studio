# Phase 4 — Listening and speaking lab (23 October 2026)

The twelve independently authored A1.1 guided lessons now have a fifth learning stage with two **audio-first** comprehension items and one spoken rehearsal task per lesson: 24 new listening checks and 12 prompts. These supplement the workbook and textbook-scoped Phase 3 visual situations without mixing textbook editions. The German audio text remains concealed until an answer is submitted, when teacher-review-pending transcripts and explanations appear.

## Learner interaction

- Device German speech voice; slow (0.70) or normal (0.95) playback and optional selection of installed German voices. The preference applies to existing pronunciation buttons and workbook listening, while each Phase 4 prompt can be replayed slowly independent of the default.
- Optional audio recording with `getUserMedia` and `MediaRecorder`. Recording and replay happen entirely in memory in the browser. **No upload, cloud processing, durable audio persistence or automatic pronunciation scoring** is performed. The app requires a secure HTTPS browser origin and a user granting microphone permission.
- Reflection checklist is saved with the learner's 24 listening scores in the original browser-local demo state. The teacher can see chapter-level listening scores and the number of completed self-reviews, but cannot hear students' recordings on a different device.
- For normal lesson progression, Discover → Understand → Hear & speak → Check → Use it. Teacher lesson preview opens the same lesson.

## Product, safety and pedagogy boundaries

The new speech feature is a more flexible synthetic browser TTS experience, **not natural human-recorded German audio**. Authentic voices and listening media still require independent recordings made or licensed for this purpose and teacher verification. Original activities and text require review for language accuracy and syllabus fit. No reproduced publisher audio, transcripts or book exercises are included. No speech-to-text, surveillance, biometric scoring or off-device data sharing.

## QA

`tests/phase4.mjs` asserts 12×2 content coverage, audio-first transcript gating, answer/retry and browser-local teacher progress without hidden scoring. The existing regression suite protects workbook, Phase 3, teacher and exam workflows. Real microphone, installed German voices, mobile browsers and accessibility still require physical-device testing.
