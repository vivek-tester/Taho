import './home.css';
import './product.css';
import './phoneflow.css';
import { PhoneFlow } from './PhoneFlow';
import { ProductVisual } from './ProductVisual';

export default function Home() {
  return (
    <div className="taho-root">
      <a className="taho-skip" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
        <section className="taho-hero" aria-label="Taho introduction">
          <div className="taho-hero-copy">
            <p className="taho-kicker">TAHO</p>
            <h1 className="taho-headline">
              The API engineering <em>workbench</em> built for your phone.
            </h1>
            <p className="taho-lede">
              Test APIs. Understand responses. Find security issues. Automate workflows.
            </p>
            <div className="taho-cta-row">
              <a className="taho-cta taho-cta--gold" href="/download">
                Get Taho
              </a>
              <a className="taho-cta taho-cta--ghost" href="#pf-compose">
                See how it works ↓
              </a>
            </div>
            <p className="taho-badgenote">CLOSED BETA · not yet available</p>
          </div>
          <div className="taho-hero-visual">
            <ProductVisual />
          </div>
        </section>
        <PhoneFlow />
        <section id="trust" className="taho-stage">
          <div className="taho-stage-inner">
            <div className="taho-stage-copy">
              <p className="taho-kicker">TRUST</p>
              <h2 className="taho-headline">
                Your API traffic stays under your <em>control</em>.
              </h2>
              <p className="taho-lede">
                Local-first. Direct connections. BYOK AI — the external provider performs inference. Read the{' '}
                <a href="/privacy.html">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>
        <section id="roadmap" className="taho-stage">
          <div className="taho-stage-inner">
            <div className="taho-stage-copy">
              <p className="taho-kicker">PRODUCT STATUS</p>
              <h2 className="taho-headline">Shipped when it is shipped.</h2>
              <p className="taho-lede">
                Preview/planned labels stay honest. Security analysis is heuristic — not a penetration test or
                certification.
              </p>
            </div>
          </div>
        </section>
        <section id="final" className="taho-stage taho-final">
          <div className="taho-final-inner">
            <p className="taho-kicker">TAHO</p>
            <h2 className="taho-headline">
              Your API engineering <em>workbench</em>.
            </h2>
            <div className="taho-cta-row">
              <a className="taho-cta taho-cta--gold" href="/download">
                Get Taho →
              </a>
            </div>
            <p className="taho-badgenote">CLOSED BETA · not yet available</p>
          </div>
        </section>
      </main>
    </div>
  );
}
