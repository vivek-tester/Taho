import './home.css';
import './product.css';
import { Scene } from './Scene';
import { Panel } from './Panel';
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
              <a className="taho-cta taho-cta--ghost" href="#request">
                See how it works ↓
              </a>
            </div>
            <p className="taho-badgenote">CLOSED BETA · not yet available</p>
          </div>
          <div className="taho-hero-visual">
            <ProductVisual />
          </div>
        </section>

        <Scene
          id="request"
          kicker="01 · THE REQUEST"
          headline={<>Start with the <em>request</em>.</>}
          lede="Build exactly what the API expects — method, URL, auth, headers, parameters — in a workbench designed for touch."
          offsets={{ y: 0.1 }}
          visual={
            <Panel title="REQUEST BUILDER" meta="GET · draft">
              <pre className="taho-pre">{`GET https://api.example.com/users

AUTHORIZATION
Bearer ••••••••••••

HEADERS
Accept: application/json

PARAMETERS
page=1
limit=20`}</pre>
              <p className="tn-panel-cta">SEND →</p>
            </Panel>
          }
        />

        <Scene
          id="structure"
          kicker="02 · STRUCTURE"
          headline={<>Every request has <em>structure</em>. Taho keeps it visible.</>}
          lede="Method, URL, authentication, headers, and body stay distinct objects you can inspect and move — then snap back into one request."
          offsets={{ y: 0.08 }}
          visual={
            <div className="taho-diagram" role="img" aria-label="Diagram of a request object with method, auth, headers, URL and body connected to a central request node">
              <div className="taho-diagram-node taho-diagram-node--core">REQUEST</div>
              <div className="taho-diagram-node taho-diagram-node--left">METHOD</div>
              <div className="taho-diagram-node taho-diagram-node--right">BODY</div>
              <div className="taho-diagram-node taho-diagram-node--top">AUTH</div>
              <div className="taho-diagram-node taho-diagram-node--bottom">HEADERS</div>
            </div>
          }
        />

        <Scene
          id="network"
          kicker="03 · SEND"
          giant
          headline={<>REQUEST <em>SENT</em></>}
          lede="The request leaves the workbench and travels the network path to the API server."
          offsets={{ y: 0.05 }}
          visual={
            <div className="taho-path" role="img" aria-label="Request traveling from Taho to the API server">
              <span className="taho-path-node">TAHO</span>
              <span className="taho-path-line">
                <span className="taho-path-label">GET /users</span>
                <span className="taho-path-pulse" aria-hidden="true" />
              </span>
              <span className="taho-path-node taho-path-node--far">API SERVER</span>
            </div>
          }
          note="Label: REQUEST SENT"
        />

        <Scene
          id="response"
          kicker="04 · THE RESPONSE"
          headline={<>A response is more than <em>JSON</em>.</>}
          lede="The payload arrives, then unfolds into the fields you actually care about."
          offsets={{ y: 0.09 }}
          visual={
            <Panel title="RESPONSE" meta="200 OK · application/json" tone="ok">
              <pre className="taho-pre">{`{
  "user": {
    "id": 1842,
    "name": "Ada",
    "roles": ["developer"]
  }
}`}</pre>
              <div className="taho-tree" aria-label="Response structure tree">
                <span>USER</span>
                <span>├── id</span>
                <span>├── name</span>
                <span>├── roles</span>
                <span>└── metadata</span>
              </div>
            </Panel>
          }
        />

        <Scene
          id="intelligence"
          kicker="05 · RESPONSE INTELLIGENCE"
          headline={<>The response, <em>understood</em>.</>}
          lede="The same response is reframed as structured intelligence — field paths, types, and shapes you can act on."
          offsets={{ y: 0.08 }}
          tags={['Response intelligence · preview']}
          visual={
            <Panel title="RESPONSE INTELLIGENCE" meta="Field map · auto" tone="gold">
              <div className="taho-fieldmap">
                <span className="taho-field taho-field--ok">user.id · number</span>
                <span className="taho-field taho-field--ok">user.name · string</span>
                <span className="taho-field taho-field--ok">user.roles · string[]</span>
                <span className="taho-field taho-field--dim">user.metadata · object</span>
              </div>
              <p className="taho-note">Illustrative rendering — intelligence features are part of the closed beta build.</p>
            </Panel>
          }
        />

        <Scene
          id="security"
          kicker="06 · SECURITY"
          headline={<>Don't just test whether it works. Test whether it is <em>safe</em>.</>}
          lede="Response fields and headers are surfaced as potential concerns with severity-oriented findings — an automated heuristic pass on every response."
          offsets={{ y: 0.07 }}
          visual={
            <Panel title="SECURITY ANALYSIS" meta="Grade A- · 2 findings" tone="warn">
              <div className="taho-findinglist">
                <div className="taho-finding taho-finding--high">
                  <span className="taho-finding-sev">HIGH</span>
                  <span>Missing security header</span>
                </div>
                <div className="taho-finding taho-finding--med">
                  <span className="taho-finding-sev">MEDIUM</span>
                  <span>Weak cookie configuration</span>
                </div>
              </div>
              <div className="taho-flags">
                <span className="taho-flag taho-flag--warn">Set-Cookie ⚠</span>
                <span className="taho-flag taho-flag--warn">Authorization ⚠</span>
                <span className="taho-flag taho-flag--ok">X-Content-Type ✓</span>
              </div>
            </Panel>
          }
          note={<>Heuristic evaluation — <strong>not a penetration test or certification</strong>.</>}
        />

        <Scene
          id="tests"
          kicker="07 · TESTS"
          headline={<>Turn API behavior into something you can <em>prove</em>.</>}
          lede="One request becomes many test scenarios. Assertions run as real product states — illustrative results shown below."
          tags={['Assertions · preview']}
          offsets={{ y: 0.06 }}
          visual={
            <Panel title="TEST RUN" meta="3 passed · 1 warning" tone="ok">
              <div className="taho-assertlist">
                <span className="taho-assert taho-assert--pass">✓ status is 2xx</span>
                <span className="taho-assert taho-assert--pass">✓ content-type is JSON</span>
                <span className="taho-assert taho-assert--pass">✓ response &lt; 500ms</span>
                <span className="taho-assert taho-assert--warn">⚠ schema mismatch</span>
              </div>
            </Panel>
          }
        />

        <Scene
          id="workflow"
          kicker="08 · WORKFLOWS"
          headline={<>From one request to a repeatable <em>workflow</em>.</>}
          lede="Collections, variables, and chained requests connect individual calls into a sequence you can save and replay."
          tags={['Chained requests · preview']}
          offsets={{ y: 0.06 }}
          visual={
            <div className="taho-flow" role="img" aria-label="Workflow chain: login, create user, fetch user, update user, assert, result">
              {['LOGIN', 'CREATE USER', 'FETCH USER', 'UPDATE USER', 'ASSERT', 'RESULT'].map((step, i, all) => (
                <span key={step} className="taho-flow-item">
                  <span className="taho-flow-node">{step}</span>
                  {i < all.length - 1 && <span className="taho-flow-arrow" aria-hidden="true">↓</span>}
                </span>
              ))}
            </div>
          }
          note="Collections, variables and chained requests are labeled preview until they ship in the closed beta build."
        />

        <Scene
          id="automation"
          kicker="09 · AUTOMATION"
          headline={<>Run it again. And <em>again</em>.</>}
          lede="Turn checks into repeatable engineering workflows — the pipeline loops on every run."
          tags={['Runners · preview', 'Schedules · planned']}
          offsets={{ y: 0.06 }}
          visual={
            <div className="taho-pipeline" role="img" aria-label="Automation pipeline: request, test, security, assert, run, result, looping">
              {['REQUEST', 'TEST', 'SECURITY', 'ASSERT', 'RUN', 'RESULT'].map((step, i, all) => (
                <span key={step} className="taho-pipeline-step">
                  <span className="taho-pipeline-node">{step}</span>
                  <span className="taho-pipeline-arrow" aria-hidden="true">{i < all.length - 1 ? '↓' : '⟲'}</span>
                </span>
              ))}
            </div>
          }
        />

        <Scene
          id="ai"
          kicker="10 · AI"
          headline={<>Your API <em>copilot</em>.</>}
          lede="Explain responses, generate assertions, and explore edge cases — introduced only after the core workbench, because AI is an additional layer, not the product."
          tags={['Bring your own key · preview']}
          offsets={{ y: 0.07 }}
          visual={
            <Panel title="AI ASSISTANT" meta="BYOK · external inference" tone="gold">
              <div className="taho-fanout" role="img" aria-label="AI layer connecting response, tests and security into Taho">
                <span className="taho-fanout-hub">AI</span>
                <span className="taho-fanout-arms" aria-hidden="true">↙&nbsp;&nbsp;↓&nbsp;&nbsp;↘</span>
                <div className="taho-fanout-nodes">
                  <span>RESPONSE</span>
                  <span>TESTS</span>
                  <span>SECURITY</span>
                </div>
              </div>
              <div className="taho-assertlist">
                <span className="taho-assert taho-assert--pass">Explain response</span>
                <span className="taho-assert taho-assert--pass">Generate assertions</span>
                <span className="taho-assert taho-assert--pass">Explore edge cases</span>
              </div>
            </Panel>
          }
          note={<>You supply the provider credentials; the <strong>external provider performs inference</strong> against the request context you choose to share. Taho provides the workflow and integration layer.</>}
        />

        <Scene
          id="mcp"
          kicker="11 · MCP / AGENTS"
          headline={<>Let agents work with real API <em>tooling</em>.</>}
          lede="An agent connects through the Taho MCP bridge to reach requests, security analysis, and tests as tools."
          tags={['MCP bridge · preview']}
          offsets={{ y: 0.07 }}
          visual={
            <div className="taho-mcp" role="img" aria-label="AI agent connecting through the Taho MCP bridge to request, security and tests">
              <span className="taho-mcp-agent">AI AGENT</span>
              <span className="taho-mcp-link" aria-hidden="true">↓</span>
              <span className="taho-mcp-bridge">TAHO MCP BRIDGE</span>
              <span className="taho-mcp-link" aria-hidden="true">↓</span>
              <div className="taho-fanout-nodes">
                <span>REQUEST</span>
                <span>SECURITY</span>
                <span>TESTS</span>
              </div>
            </div>
          }
          note={<>Status: <strong>advanced / preview</strong> — not yet broadly released.</>}
        />

        <Scene
          id="ecosystem"
          kicker="12 · ECOSYSTEM"
          headline={<>Bring the workflow. Keep the <em>engineering loop</em>.</>}
          lede="Taho sits at the center of the formats and loops you already use — imports and exports, testing, security, and automation."
          tags={['cURL import · preview', 'OpenAPI · planned', 'HAR · planned']}
          offsets={{ y: 0.06 }}
          visual={
            <div className="taho-eco" role="img" aria-label="cURL, Postman, OpenAPI and HAR formats feeding Taho, which feeds testing, security and automation, and CLI, CI and monitoring">
              <div className="taho-eco-row">
                <span>cURL</span>
                <span>Postman</span>
                <span>OpenAPI</span>
                <span>HAR</span>
              </div>
              <span className="taho-eco-link" aria-hidden="true">↘&nbsp;&nbsp;↓&nbsp;&nbsp;↙</span>
              <span className="taho-eco-core">TAHO</span>
              <span className="taho-eco-link" aria-hidden="true">↓</span>
              <div className="taho-eco-row">
                <span>Testing</span>
                <span>Security</span>
                <span>Automation</span>
              </div>
              <span className="taho-eco-link" aria-hidden="true">↓</span>
              <div className="taho-eco-row taho-eco-row--dim">
                <span>CLI</span>
                <span>CI</span>
                <span>Monitoring</span>
              </div>
            </div>
          }
          note="Format and tooling names are illustrative of the intended ecosystem direction; integrations marked planned are not yet available."
        />

        <Scene
          id="trust"
          kicker="13 · TRUST"
          headline={<>Your API traffic stays under your <em>control</em>.</>}
          lede="Taho is built to keep the engineering loop on your terms — focused, inspectable, and free of background noise."
          offsets={{ y: 0.05 }}
          visual={
            <div className="taho-trust">
              <span className="taho-trust-item">LOCAL-FIRST</span>
              <span className="taho-trust-item">DIRECT CONNECTIONS</span>
              <span className="taho-trust-item">BYOK AI</span>
              <span className="taho-trust-item">TRANSPARENT PRODUCT BOUNDARIES</span>
            </div>
          }
          note={<>Local workspace data, <strong>account and subscription</strong> information, and external AI requests have different data flows. BYOK sends shared context to your selected provider. Read the <a href="/privacy.html">Privacy Policy</a> for details.</>}
        />

        <Scene
          id="roadmap"
          kicker="14 · PRODUCT STATUS"
          headline={<>Shipped when it's shipped.</>}
          lede="Only capabilities that exist today are claimed as available. The rest is labeled honestly."
          offsets={{ y: 0.04 }}
          visual={
            <div className="taho-roadmap">
              <div className="taho-roadmap-col">
                <h3>NOW</h3>
                <p className="taho-roadmap-sub">Closed beta</p>
                <ul>
                  <li>API testing</li>
                  <li>Security analysis</li>
                  <li>Collections</li>
                  <li>Environments</li>
                  <li>Response intelligence</li>
                </ul>
              </div>
              <div className="taho-roadmap-col">
                <h3>NEXT</h3>
                <p className="taho-roadmap-sub">Beta / Planned</p>
                <ul>
                  <li>Advanced automation</li>
                  <li>Monitoring</li>
                  <li>CLI / CI capabilities</li>
                  <li>Additional protocol support</li>
                </ul>
              </div>
              <div className="taho-roadmap-col">
                <h3>EXPLORING</h3>
                <p className="taho-roadmap-sub">Research</p>
                <ul>
                  <li>Expanded AI capabilities</li>
                  <li>MCP / agent workflows</li>
                  <li>Team workflows</li>
                  <li>Cloud synchronization</li>
                </ul>
              </div>
            </div>
          }
        />
        <section id="final" className="taho-stage taho-final">
          <div className="taho-final-inner">
            <p className="taho-kicker">TAHO</p>
            <h2 className="taho-headline">
              Your API engineering <em>workbench</em>.
            </h2>
            <p className="taho-lede">Test. Secure. Automate. Understand.</p>
            <div className="taho-cta-row">
              <a className="taho-cta taho-cta--gold" href="/download">
                Get Taho →
              </a>
            </div>
            <p className="taho-badgenote">CLOSED BETA · not yet available</p>
          </div>
          <div className="taho-final-visual" aria-hidden="true">
            <ProductVisual static />
          </div>
        </section>
      </main>
    </div>
  );
}
