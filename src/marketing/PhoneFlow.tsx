import {useEffect,useRef,useState} from 'react';
import './phoneflow.css';

export type PhoneScreen = 'compose' | 'sending' | 'response' | 'security' | 'tests' | 'act';

export const PHONE_STEPS: Array<{ id: string; kicker: string; headline: string; lede: string; screen: PhoneScreen }> = [
  { id: 'compose', kicker: '01 · REQUEST', headline: 'Start with the request.', lede: 'Method, URL, auth, headers stay separate objects.', screen: 'compose' },
  { id: 'sending', kicker: '02 · SEND', headline: 'One tap to send.', lede: 'No account. The request leaves the workbench.', screen: 'sending' },
  { id: 'response', kicker: '03 · RESPONSE', headline: 'A response is more than JSON.', lede: '200 OK · 428 ms · application/json.', screen: 'response' },
  { id: 'security', kicker: '04 · SECURITY', headline: 'Safe, not just working.', lede: 'Grade A- · 2 findings. Heuristic — not a penetration test or certification.', screen: 'security' },
  { id: 'tests', kicker: '05 · TESTS', headline: 'Prove API behavior.', lede: '3 passed · 1 warning. Illustrative results.', screen: 'tests' },
  { id: 'act', kicker: '06 · ACT', headline: 'Save and replay.', lede: 'EDIT REQUEST / Share / PDF. Collections preview.', screen: 'act' },
];

function PhoneScreenView({ screen }: { screen: PhoneScreen }) {
  if (screen === 'compose') return (<div className="pf-screen" role="img" aria-label="Taho request composer with GET api.example.com users, Staging env, SEND button"><div>TAHO · <span>Staging</span></div><div><span className="pf-method-get">GET</span> <span>api.example.com/users</span></div><div className="pf-send">SEND →</div><div>PARAMS HEADERS BODY AUTH</div></div>);
  if (screen === 'sending') return (<div className="pf-screen" role="img" aria-label="Request sending"><div>SENDING…</div><div>GET /users → API SERVER</div></div>);
  if (screen === 'response') return (<div className="pf-screen" role="img" aria-label="Response 200 OK"><div>200 OK · 428 ms · application/json</div><pre>{`{"user":{"id":1842,"name":"Ada"}}`}</pre></div>);
  if (screen === 'security') return (<div className="pf-screen" role="img" aria-label="Security grade A minus"><div><span className="pf-grade">SEC A-</span> 2 findings</div><div>HIGH Missing security header</div><div>MEDIUM Weak cookie</div></div>);
  if (screen === 'tests') return (<div className="pf-screen" role="img" aria-label="Tests 3 passed"><div>✓ status is 2xx</div><div>✓ content-type JSON</div><div>✓ &lt; 500ms</div><div>⚠ schema mismatch</div></div>);
  return (<div className="pf-screen" role="img" aria-label="Edit share PDF"><div className="pf-send">EDIT REQUEST</div><div>Share · PDF</div></div>);
}

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
