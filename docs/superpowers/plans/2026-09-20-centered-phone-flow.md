# Centered Phone Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 15-stage scattered visuals with a sticky centered phone playing the exact 6-screen Taho app loop on scroll.

**Architecture:** New `PhoneFlow` component owns step data + active-step observer + phone replica; `Home.tsx` becomes hero + PhoneFlow + trust + roadmap + final. CSS uses only AMOLED app tokens. Tests updated to new stage count while keeping honesty assertions.

**Tech Stack:** React 19, Vite 6, TypeScript, motion/react (existing only), IntersectionObserver, Tailwind 4 + hand CSS.

**Spec:** `docs/superpowers/specs/2026-09-20-centered-phone-flow-design.md`

## Global Constraints

- Phone palette AMOLED only: bg #000000, surface2 #111111, border rgba(255,255,255,0.11), gold #C9922A, green #2ECC71, amber #F39C12, red #E74C3C, text #F5F0E8.
- Copy must keep: `heuristic`, `not a penetration test or certification`, `preview/planned` for unfinished, `external provider performs inference` for AI, no buy/pay buttons, no Play/APK links, no fake availability/stats.
- Desktop sticky `top:90px`, phone width ~380px; mobile <900px static stacked, no sticky.
- `prefers-reduced-motion`: static, no crossfade/transform.
- No new npm dependencies.

## Review Focus

- IntersectionObserver missing/disabled → all steps visible, phone shows step 1, page still readable.
- `prefers-reduced-motion: reduce` → no transform/opacity animation, content fully opaque.
- 375px viewport → phone full-width, no horizontal overflow, tabs scroll horizontally.
- Keyboard-only → steps reachable, CTA focus-visible gold, phone `aria-live="polite"` announces step change without spam.
- Anchor `#request` etc from navbar/footer → target id still exists after stage collapse.

---

### Task 1: PhoneFlow static replica + styles

**Files:**
- Create: `src/marketing/PhoneFlow.tsx`
- Create: `src/marketing/phoneflow.css`
- Test: `src/marketing/Home.test.tsx` (updated in Task 4; this task verified via `npm run lint` + visual SSR dump)

**Interfaces:**
- Consumes: nothing new; uses React only.
- Produces: `export function PhoneFlow(): JSX.Element`, `export const PHONE_STEPS: Array<{id:string;kicker:string;headline:ReactNode;lede:string;screen:'compose'|'sending'|'response'|'security'|'tests'|'act'}>` for Task 2.

- [ ] **Step 1: Create phoneflow.css with app tokens**

```css
.pf-wrap { display:grid; grid-template-columns: minmax(0,0.9fr) minmax(0,1.1fr); gap: clamp(28px,4vw,56px); max-width:1200px; margin:0 auto; padding: clamp(96px,14vh,180px) clamp(20px,5vw,56px); }
.pf-steps { display:grid; gap: clamp(48px,8vh,110px); }
.pf-step { max-width:620px; }
.pf-phone-col { position:relative; }
.pf-phone-sticky { position:sticky; top:90px; display:grid; place-items:center; }
.pf-device { width:min(380px,88vw); border-radius:34px; border:1px solid rgba(255,255,255,0.11); background:linear-gradient(180deg,#14110d 0%,#0b0a08 100%); overflow:hidden; }
.pf-screen { display:grid; gap:10px; padding:16px; font-family:"JetBrains Mono",monospace; font-size:12px; color:#F5F0E8; }
.pf-method-get { color:#0b0a08; background:#2ECC71; font-weight:700; padding:3px 8px; border-radius:6px; }
.pf-send { background:#C9922A; color:#171205; border-radius:9px; padding:10px 14px; font-weight:700; text-align:center; }
.pf-grade { color:#e8b54a; border:1px solid #C9922A; border-radius:6px; padding:2px 7px; background:rgba(201,146,42,0.14); }
@media (max-width:900px){ .pf-wrap{grid-template-columns:1fr;} .pf-phone-sticky{position:static;} }
@media (prefers-reduced-motion:reduce){ .pf-fade{transition:none !important; animation:none !important;} }
```

- [ ] **Step 2: Create PhoneFlow.tsx static version (activeStep=0 hardcoded)**

```tsx
import './phoneflow.css';
export type PhoneScreen = 'compose'|'sending'|'response'|'security'|'tests'|'act';
export const PHONE_STEPS: Array<{id:string;kicker:string;headline:string;lede:string;screen:PhoneScreen}> = [
  {id:'compose',kicker:'01 · REQUEST',headline:'Start with the request.',lede:'Method, URL, auth, headers stay separate objects.',screen:'compose'},
  {id:'sending',kicker:'02 · SEND',headline:'One tap to send.',lede:'No account. The request leaves the workbench.',screen:'sending'},
  {id:'response',kicker:'03 · RESPONSE',headline:'A response is more than JSON.',lede:'200 OK · 428 ms · application/json.',screen:'response'},
  {id:'security',kicker:'04 · SECURITY',headline:'Safe, not just working.',lede:'Grade A- · 2 findings. Heuristic — not a penetration test or certification.',screen:'security'},
  {id:'tests',kicker:'05 · TESTS',headline:'Prove API behavior.',lede:'3 passed · 1 warning. Illustrative results.',screen:'tests'},
  {id:'act',kicker:'06 · ACT',headline:'Save and replay.',lede:'EDIT REQUEST / Share / PDF. Collections preview.',screen:'act'},
];
function PhoneScreenView({screen}:{screen:PhoneScreen}){
  if(screen==='compose') return (<div className="pf-screen" role="img" aria-label="Taho request composer with GET api.example.com users, Staging env, SEND button"><div>TAHO · <span>Staging</span></div><div><span className="pf-method-get">GET</span> <span>api.example.com/users</span></div><div className="pf-send">SEND →</div><div>PARAMS HEADERS BODY AUTH</div></div>);
  if(screen==='sending') return (<div className="pf-screen" role="img" aria-label="Request sending"><div>SENDING…</div><div>GET /users → API SERVER</div></div>);
  if(screen==='response') return (<div className="pf-screen" role="img" aria-label="Response 200 OK"><div>200 OK · 428 ms · application/json</div><pre>{`{"user":{"id":1842,"name":"Ada"}}`}</pre></div>);
  if(screen==='security') return (<div className="pf-screen" role="img" aria-label="Security grade A minus"><div><span className="pf-grade">SEC A-</span> 2 findings</div><div>HIGH Missing security header</div><div>MEDIUM Weak cookie</div></div>);
  if(screen==='tests') return (<div className="pf-screen" role="img" aria-label="Tests 3 passed"><div>✓ status is 2xx</div><div>✓ content-type JSON</div><div>✓ &lt; 500ms</div><div>⚠ schema mismatch</div></div>);
  return (<div className="pf-screen" role="img" aria-label="Edit share PDF"><div className="pf-send">EDIT REQUEST</div><div>Share · PDF</div></div>);
}
export function PhoneFlow(){
  const active = PHONE_STEPS[0];
  return (<div className="pf-wrap"><div className="pf-steps">{PHONE_STEPS.map(s=>(<section key={s.id} id={`pf-${s.id}`} className="pf-step"><p>{s.kicker}</p><h2>{s.headline}</h2><p>{s.lede}</p></section>))}</div><div className="pf-phone-col"><div className="pf-phone-sticky"><div className="pf-device"><PhoneScreenView screen={active.screen}/></div></div></div></div>);
}
```

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: PASS (exit 0, no TS errors in new files).

- [ ] **Step 4: Commit**

```bash
git add src/marketing/PhoneFlow.tsx src/marketing/phoneflow.css
git commit -m "feat: add static PhoneFlow replica"
```

### Task 2: Scroll-driven active step + progress + a11y

**Files:**
- Modify: `src/marketing/PhoneFlow.tsx`
- Modify: `src/marketing/phoneflow.css`
- Test: manual + `npm run lint`

**Interfaces:**
- Consumes: `PHONE_STEPS` from Task 1.
- Produces: same exports; active screen now dynamic via `data-active` + `aria-live`.

- [ ] **Step 1: Add observer + progress + reduced-motion guard**

Replace `PhoneFlow` body with:

```tsx
import {useEffect,useRef,useState} from 'react';
export function PhoneFlow(){
  const [activeIdx,setActiveIdx]=useState(0);
  const refs=useRef<Array<HTMLElement|null>>([]);
  useEffect(()=>{
    if(typeof IntersectionObserver==='undefined') return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const obs=new IntersectionObserver((entries)=>{
      for(const e of entries){ if(e.isIntersecting){ const i=refs.current.findIndex(el=>el===e.target); if(i>=0) setActiveIdx(i); } }
    },{rootMargin:'-40% 0px -50% 0px',threshold:0});
    refs.current.forEach(el=>{ if(el) obs.observe(el); });
    return ()=>obs.disconnect();
  },[]);
  const active=PHONE_STEPS[activeIdx];
  return (<div className="pf-wrap"><div className="pf-steps">{PHONE_STEPS.map((s,i)=>(<section key={s.id} id={`pf-${s.id}`} ref={el=>{refs.current[i]=el;}} className="pf-step" data-active={i===activeIdx}><p>{s.kicker} · {i+1}/6</p><h2>{s.headline}</h2><p>{s.lede}</p></section>))}</div><div className="pf-phone-col"><div className="pf-phone-sticky"><div className="pf-device" aria-live="polite"><PhoneScreenView screen={active.screen}/></div><p aria-hidden="true">{activeIdx+1}/6</p></div></div></div>);
}
```

Add to CSS:

```css
.pf-step{opacity:0.55; transition:opacity 200ms ease;}
.pf-step[data-active="true"]{opacity:1;}
.pf-fade{transition:opacity 200ms ease;}
```

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/marketing/PhoneFlow.tsx src/marketing/phoneflow.css
git commit -m "feat: drive phone screen from scroll with progress"
```

### Task 3: Rewrite Home.tsx to use PhoneFlow

**Files:**
- Modify: `src/marketing/Home.tsx:1-396`
- Modify: `src/marketing/home.css` (keep tokens, remove unused stage CSS only if orphaned)
- Test: `src/marketing/Home.test.tsx`

**Interfaces:**
- Consumes: `PhoneFlow` from Task 2, existing `ProductVisual`.
- Produces: Home with hero + PhoneFlow + trust + roadmap + final, two `/download` links preserved.

- [ ] **Step 1: Replace stages with PhoneFlow**

New `Home.tsx` skeleton:

```tsx
import './home.css';
import './product.css';
import './phoneflow.css';
import {PhoneFlow} from './PhoneFlow';
import {ProductVisual} from './ProductVisual';
export default function Home(){
  return (<div className="taho-root"><a className="taho-skip" href="#main-content">Skip to content</a><main id="main-content"><section className="taho-hero" aria-label="Taho introduction"><div className="taho-hero-copy"><p className="taho-kicker">TAHO</p><h1 className="taho-headline">The API engineering <em>workbench</em> built for your phone.</h1><p className="taho-lede">Test APIs. Understand responses. Find security issues. Automate workflows.</p><div className="taho-cta-row"><a className="taho-cta taho-cta--gold" href="/download">Get Taho</a><a className="taho-cta taho-cta--ghost" href="#pf-compose">See how it works ↓</a></div><p className="taho-badgenote">CLOSED BETA · not yet available</p></div><div className="taho-hero-visual"><ProductVisual/></div></section><PhoneFlow/><section id="trust" className="taho-stage"><div className="taho-stage-inner"><div className="taho-stage-copy"><p className="taho-kicker">TRUST</p><h2 className="taho-headline">Your API traffic stays under your <em>control</em>.</h2><p className="taho-lede">Local-first. Direct connections. BYOK AI — the external provider performs inference. Read the <a href="/privacy.html">Privacy Policy</a>.</p></div></div></section><section id="roadmap" className="taho-stage"><div className="taho-stage-inner"><div className="taho-stage-copy"><p className="taho-kicker">PRODUCT STATUS</p><h2 className="taho-headline">Shipped when it is shipped.</h2><p className="taho-lede">Preview/planned labels stay honest. Security analysis is heuristic — not a penetration test or certification.</p></div></div></section><section id="final" className="taho-stage taho-final"><div className="taho-final-inner"><p className="taho-kicker">TAHO</p><h2 className="taho-headline">Your API engineering <em>workbench</em>.</h2><div className="taho-cta-row"><a className="taho-cta taho-cta--gold" href="/download">Get Taho →</a></div><p className="taho-badgenote">CLOSED BETA · not yet available</p></div></section></main></div>);
}
```

Keep exactly two `href="/download"`, one `<main>`, one `<h1>`, ids `pf-compose…pf-act` + `trust,roadmap,final`.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/marketing/Home.tsx
git commit -m "feat: use centered PhoneFlow on homepage"
```

### Task 4: Update tests + full verify

**Files:**
- Modify: `src/marketing/Home.test.tsx:1-79`
- Test: `src/marketing/Home.test.tsx`, `src/pages/pages.test.tsx`

**Interfaces:**
- Consumes: rewritten Home.
- Produces: green suite.

- [ ] **Step 1: Update Home.test expectations**

Replace 15-stage order test with:

```tsx
test('phone flow has six steps in narrative order', () => {
  const ids=['pf-compose','pf-sending','pf-response','pf-security','pf-tests','pf-act'];
  let prev=-1;
  for(const id of ids){ const pos=html.indexOf(`id="${id}"`); assert.ok(pos>prev,`${id} in order`); prev=pos; }
});
```

Keep: one main/one h1/two `/download`, `api.example.com/users`, `200 OK`, `heuristic`, `not a penetration test`, `external provider performs inference`, `illustrative`, `preview|planned`, privacy link, no `<button>`, anchor integrity.

- [ ] **Step 2: Run homepage test**

Run: `npx tsx --test src/marketing/Home.test.tsx`
Expected: PASS, 0 failures.

- [ ] **Step 3: Run secondary tests**

Run: `npx tsx --test src/pages/pages.test.tsx`
Expected: PASS.

- [ ] **Step 4: Run build**

Run: `npm run build`
Expected: exit 0, `dist/` emitted.

- [ ] **Step 5: Commit**

```bash
git add src/marketing/Home.test.tsx
git commit -m "test: update homepage for PhoneFlow"
```
