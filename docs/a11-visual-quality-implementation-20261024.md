# German Studio A1.1 — Visual-learning quality audit and implementation (24 October 2026)

## Source and boundaries
The curriculum remains the **original Netzwerk A1.1 Kurs- und Arbeitsbuch Teil 1**, chapter sequence 1–6, with two Plattform reviews. The established source-to-PDF page mapping is in `docs/netzwerk-a1-1-uploaded-audit.md`. A fresh 166-page publisher-page-by-page sign-off is **not** represented by this repository work. All app graphics, dialogue scripts and tasks are independent and must be approved by a German teacher. Do not reproduce protected textbook pages, photos, audio or exercises.

## Chapter-by-chapter quality inventory

| Chapter | Original coursebook scope | Added verified visual learning | More to verify |
|---|---|---|---|
| 1: Guten Tag! | Greetings, names, country/language, spelling, numbers 1–20 | Eight object-specific vector drawings; conversation/photo panels; four-step classmate dialogue; existing number/alphabet tutorials; contact card | Formal/informal register; countries that require articles; voice quality; student input |
| 2: Freunde, Kollegen und ich | Hobbies, work, calendar, seasons | Eight illustrated cards; one photo-matched cyclist; 4-picture recognition activity; weekly planner; bike-plan dialogue; three credited real-life photos | Profession register/gender; full months/seasons pictures |
| 3: In der Stadt | Buildings, transport, direction maps, definite/indefinite/negative articles | Eight drawings; 4-picture recognition; route simulation with feedback; directions dialogue and contextual photos | Real navigable city map, distances, article examples, spoken directions |
| 4: Guten Appetit! | Food, meals, shops, shopping and accusative | Eight drawings; five independently licensed Commons photos of individual groceries; 4-picture matching; shopping list/accusative practice; market dialogue | Distinct photographed shop fronts, multiple quantities/prices, full meal sequence |
| 5: Tag für Tag | Daily routine, clock time, family, appointment, modal verbs | Eight drawings; 4-picture matching; analogue clock, appointments; calendar dialogue and three real-life photographs | Realistic 12-hour hour/minute validation, family chart, modal review |
| 6: Zeit mit Freunden | Leisure, invitations, restaurant, dates, past haben/sein | Eight drawings; 4-picture matching; invitation builder, menu/photo context and café dialogue | Complete ordering/payment scenario; multiple date/grammar checks |
| Plattform 1 and 2 | Cumulative practice | Replaced three emoji review visuals in each with original subject-matched SVGs | Full four-skill revision exercises and teacher validation |

## Image provenance
- **18 contextual Pexels photographs** remain in `dist/rich-scenes.js`, each with linked creator credit. These depict scenarios, not necessarily every term in nearby text.
- **Five supplementary Chapter 4 food photographs** are referenced from Wikimedia Commons with author and license visible on each vocabulary card:
  - Bread: `File:Photograph of Bread.jpg` — Loganm23, CC0 1.0.
  - Milk: `File:Milk 2.jpg` — Daria-Yakovleva, CC0 1.0.
  - Cheese: `File:NCI swiss cheese.jpg` — Renee Comet / NCI, U.S. government public domain.
  - Tomatoes: `File:A fresh tomato fruits.jpg` — Salma kyari, CC0 1.0.
  - Cucumber: `File:Cucumber fruit 2025.jpg` — Judethedeus, CC0 1.0.
- Image URLs are external. If the school network blocks images or a file is unavailable, the vocabulary card falls back to its original subject-specific SVG.
- The SVG atlas at `dist/a11-visual-atlas.js` provides dozens of independently authored drawings, with associated semantics, without copying the publisher's images.

## Regression and acceptance
- `node tests/a11-visual-release.mjs`: checks SVG coverage in all six chapters, the five visual recognition exercises, image credits, all six four-turn storyboards, and two three-card Plattform reviews.
- `node tests/a11-visual-quality.mjs`: guards known vocabulary-photo mismatches, route/time interactions and storyboard wiring.
- V8 render/syntax validation completed for all six chapter outputs; full visual browser and audio compatibility QA on desktop/iOS/Android is still pending.
- Render service `german-learning-studio` in workspace **AmberTheory2** is connected to `main` with automatic deployment on each push.

## Required before teacher sign-off
1. Verify that all photos load at the actual deployed Render URL (including low-bandwidth and school-network conditions), and that attribution remains visible.
2. Inspect every chapter on narrow/mobile screens: chapter navigation, 4-card picture practice, scene photo cropping, number/alphabet sections and revision.
3. Ask a qualified teacher to check 24 new German conversational turns, vocabulary articles, all assessment answers, country grammar, lesson ordering and suitability for beginners.
4. Continue authentic object photography where the subject is a real object; do **not** substitute loosely related stock photographs.
5. Validate exact textbook progression by rechecking the original scanned source visually. This work preserves the prior source mapping but is not itself a fresh page-by-page textbook comparison.

**Release state:** richer six-chapter prototype ready for hands-on teacher *review*, not academically certified or live multi-user classroom use.
