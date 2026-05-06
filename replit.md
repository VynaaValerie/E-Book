# Finding Your Voice — Digital Interactive Book

A 3D interactive digital book for Grade 12 English (Module 1, Unit 1): Songs, Identity & Resilience. Built entirely with HTML, CSS, and JavaScript — no frameworks.

## Run & Operate
- **Start**: `python3 -m http.server 5000` (served via workflow "Start application")
- **Access**: Open port 5000 in browser

## Stack
- Pure HTML5, CSS3, JavaScript (ES6+, IIFE pattern)
- Google Fonts: Playfair Display, Inter, Lora
- No build tools, no frameworks, no dependencies

## Where things live
- `index.html` — All 17 pages (cover + 16 content pages) as `.page` divs
- `style.css` — All styling, 3D transforms, animations, color tokens
- `script.js` — Page flip engine, interactivity, word counter, vote system

## Architecture decisions
- 3D page-turn uses Web Animations API with multi-keyframe perspective warping (1600px→650px→1600px) + `translateZ(12px)` lift at midpoint to simulate page curl
- Spine is `width:0` with a `::before` radial-gradient overlay — no hard line, soft crease shadow bleeds naturally across both pages
- `.flip` div is `display:none` at rest; JS sets `block` only during animation — `onfinish` callback (not setTimeout) handles teardown
- `.flip-curl` overlay div inside `.flip-front` animates a moving gradient shadow during the turn to simulate page curvature
- Forward flip: current right page lifts and reveals next left; backward: reversed keyframes
- Init runs synchronously at end of body (not DOMContentLoaded) so content renders before screenshots
- All interactive inputs (fill-in-blanks, textareas, checkboxes) are stateless client-side

## Product
- 9-spread interactive digital book: cover + 8 content spreads (two-page layout)
- 3D book page-turn animation (CSS perspective + JS state machine)
- Ambient mouse tilt effect on book (rotateX/Y on hover)
- Table of Contents drawer, keyboard navigation (arrow keys), swipe support
- Interactive elements: lyric highlighting, vote buttons, word counter, phrase copy
- Content: Roar (Katy Perry) + Fight Song (Rachel Platten) analysis, debate, writing task, reflection

## User preferences
- No emojis in the UI
- Maximum visual quality — not stiff/rigid
- Purple/violet dominant color scheme (#8B5CF6 primary accent)
- No gold spine — thin 6px fold line only
- Book sized wide enough so all content fits without scrolling
- HTML/CSS/JS only (no Canva/Figma required)

## Gotchas
- favicon.ico 404 is harmless (browser default behavior)
- Smart/curly quotes in JS strings must be escaped or replaced with straight quotes
- `.flip` must stay `display:none` at rest or it covers the right page with white
