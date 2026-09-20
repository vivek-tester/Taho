# Centered Phone Flow — Design Spec (2026-09-20)

## 1. Intent (agreed)
- Goal: higher conversion (comprehension → "helpful for me" → download).
- Ethical persuasion only: proof + safety/privacy + balanced trust, no fake stats/testimonials/availability.
- Phone shows full core loop, UI matches exact Taho App UI (no invented styling).

## 2. Source of truth (Taho App)
- `Taho App/lib/screens/home_screen.dart:115`: bottom nav REQUEST / RESP(code) / COLLECT / HISTORY / SETTINGS.
- `request_screen.dart`: app bar (Taho + env pill), Method+URL row, Code/Reset/More/SEND (SEND flex 3 gold), tabs PARAMS/HEADERS/BODY/AUTH/MORE + swipe transforms/tests.
- `response_screen.dart`: top context (back/method/URL/replay/explorer/share), `ResponseStatusHeader` (status/duration/size/grade), tabs DIAGNOSE/BODY/PREVIEW/HEADERS/TIMELINE/SECURITY/JWT/TESTS, bottom EDIT REQUEST/Share/PDF.
- `app_colors.dart` (AMOLED): bg #000, surface2 #111, border2 rgba(255,255,255,0.11), gold #C9922A, green #2ECC71, amber #F39C12, red #E74C3C, text1 #F5F0E8.

## 3. Phone story (6 screens, approved)
1. Compose — env Staging amber, GET chip green 13%, URL api.example.com/users, tabs, SEND gold.
2. Sending — SEND pressed, shimmer, timeline pulse (~234ms).
3. Response — 200 OK · 428ms · JSON, BODY Ada JSON.
4. Security — Grade A- · 2 findings (HIGH missing header, MEDIUM cookie) + note: heuristic, not a pen-test.
5. Tests — 3 passed · 1 warning assertions.
6. Act — EDIT REQUEST / Share / PDF + Save to Collection hint.
- Out of scope in phone: JWT/DIAGNOSE/GraphQL/MQTT/Monitors/AI full UI; one line "+ more in app".

## 4. Layout + interaction
- Desktop ≥901px: 2-col grid; left scrolling copy steps (6 `<section>`), right sticky phone ~380px (`position:sticky; top:90px`).
- Mobile <900px: no sticky; phone renders inline per step, full-width.
- Active step via IntersectionObserver → `activeStep` → 200ms crossfade, no layout shift.
- Progress `1/6…6/6` dots (endowed progress).
- A11y: steps semantic, phone `aria-live="polite"`, `prefers-reduced-motion` static, keyboard reachable CTA, focus-visible gold.
- Keeps existing `motion` opt-in only; no new deps.

## 5. Trust + conversion copy (locked)
- Per-step proof/safety lines; single primary CTA repeated after Security + Final: `Get Taho → /download` + waitlist (Formspree mzdovlzw).
- Must keep: `heuristic`, `not a pen-test/certification`, `preview/planned` where applicable, `external provider performs inference` for AI, no buy/pay buttons, no Play/APK links, no fake availability.
- Secondary links: Pricing, Developers, Privacy.

## 6. Build scope (approved)
- New: `src/marketing/PhoneFlow.tsx` + `phoneflow.css` (app tokens only).
- Rewrite: `src/marketing/Home.tsx` (hero + PhoneFlow + trust + roadmap + final).
- Reuse/remove: `Scene/Panel/ProductVisual` only if used.
- Tests: update `Home.test.tsx` (stage count/order, keep honesty asserts, no button, anchor integrity); touch `pages.test.tsx` only if copy changes.
- Manual: 375/768/1440px, reduced-motion, keyboard, contrast.

## 7. Success criteria
- Visitor can narrate loop in 30s; CTA visible after grade; no honesty test regressions; mobile no jank.
