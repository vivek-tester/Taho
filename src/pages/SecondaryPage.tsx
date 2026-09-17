import { useState } from 'react';
import { Waitlist } from '../components/Waitlist';
import './pages.css';

const headlines: Record<string, string> = {
  '/security': 'Know what your API is exposing.',
  '/ai': 'What does AI actually do inside Taho?',
  '/mcp': 'Let agents work with real API tooling.',
  '/developers': 'Built for developers.',
  '/pricing': 'Pricing. Start with the beta.',
  '/download': 'Where can I get Taho?',
};

const securityFindings = [
  { severity: 'HIGH', label: 'Missing security header', detail: 'Strict-Transport-Security was not present in the response.' },
  { severity: 'MEDIUM', label: 'Weak cookie configuration', detail: 'Set-Cookie without HttpOnly or Secure attributes.' },
  { severity: 'LOW', label: 'Verbose server banner', detail: 'Server header reveals implementation details.' },
  { severity: 'INFO', label: 'Response characteristics', detail: 'Content-Type is application/json.' },
];

function SecuritySection() {
  return (
    <section className="page-section" aria-labelledby="security-analysis-heading">
      <div className="diagram" aria-hidden="true">
        <pre>REQUEST → RESPONSE → SECURITY ANALYSIS</pre>
      </div>
      <h2 id="security-analysis-heading">Heuristic security findings</h2>
      <ul className="finding-list">
        {securityFindings.map((finding) => (
          <li key={finding.severity + finding.label} className={`finding finding-${finding.severity.toLowerCase()}`}>
            <span className="finding-severity">{finding.severity}</span>
            <span>{finding.label}</span>
            <span className="finding-detail">{finding.detail}</span>
          </li>
        ))}
      </ul>
      <p className="limitation">
        Automated security analysis is heuristic and does not constitute a formal penetration test or certification.
      </p>
      <h3>What the analysis covers</h3>
      <ul>
        <li>Security headers</li>
        <li>Cookies</li>
        <li>JWT-related diagnostics</li>
        <li>Response characteristics</li>
        <li>Potential sensitive-data exposure</li>
        <li>Severity-oriented findings</li>
      </ul>
    </section>
  );
}

function AiSection() {
  const [tab, setTab] = useState('response');
  const tabs: Array<{ id: string; label: string; body: string }> = [
    { id: 'response', label: 'Explain response', body: 'The 200 OK response returned a user object with id, name, and roles.' },
    { id: 'assertion', label: 'Generate assertions', body: 'status is 2xx; content-type is application/json; response under 500 ms.' },
    { id: 'edge', label: 'Edge cases', body: 'What happens if id is negative, name is empty, or roles is missing?' },
  ];
  return (
    <section className="page-section" aria-labelledby="ai-demo-heading">
      <h2 id="ai-demo-heading">Interactive demo (canned, local, no inference)</h2>
      <div role="tablist" aria-label="AI demo examples">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        <p>{tabs.find((t) => t.id === tab)?.body}</p>
        <p className="demo-note">
          This is a canned demo: no inference, no network, no external calls. The explanation shown here is
          illustrative.
        </p>
      </div>
      <h3>BYOK: bring your own key</h3>
      <ul>
        <li>You supply supported provider credentials.</li>
        <li>Taho handles the workflow and integration layer.</li>
        <li>The selected external provider performs inference.</li>
        <li>What is transmitted: the response excerpt and your prompt, sent to the provider you chose.</li>
      </ul>
    </section>
  );
}

function McpSection() {
  return (
    <section className="page-section" aria-labelledby="mcp-architecture-heading">
      <p className="status-badge">PREVIEW</p>
      <p>This page is a marketing architecture preview. MCP integration is not broadly released yet.</p>
      <h2 id="mcp-architecture-heading">Architecture</h2>
      <pre className="diagram" aria-label="MCP architecture diagram">{`┌──────────────┐
│ AI / AGENT   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ TAHO MCP     │
└──────┬───────┘
       │
 ┌─────┼─────┐
 ▼     ▼     ▼
API  TESTS SECURITY`}</pre>
    </section>
  );
}

export const EXAMPLE_REQUEST = 'GET https://api.example.com/users HTTP/1.1';

export async function copyExample(clipboard?: {
  writeText: (value: string) => Promise<void>;
}): Promise<boolean> {
  const target = clipboard ?? (typeof navigator !== 'undefined' ? navigator.clipboard : undefined);
  if (!target?.writeText) return false;
  try {
    await target.writeText(EXAMPLE_REQUEST);
    return true;
  } catch {
    return false;
  }
}

function DevelopersSection() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="page-section" aria-labelledby="developers-example-heading">
      <h2 id="developers-example-heading">Example request</h2>
      <pre className="diagram" aria-label="Example GET request">{EXAMPLE_REQUEST}</pre>
      <button
        type="button"
        className="copy-button"
        onClick={() => {
          void copyExample().then((ok) => {
            if (ok) setCopied(true);
          });
        }}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <h2>Roadmap</h2>
      <dl className="roadmap">
        <div>
          <dt>NOW</dt>
          <dd>API testing, security analysis, collections, environments, response intelligence.</dd>
        </div>
        <div>
          <dt>NEXT</dt>
          <dd>Advanced automation, monitoring, CLI/CI capabilities, additional protocol support.</dd>
        </div>
        <div>
          <dt>EXPLORING</dt>
          <dd>Expanded AI capabilities, MCP/agent workflows, team workflows, cloud synchronization.</dd>
        </div>
      </dl>
      <p className="limitation">Documentation and GitHub links will be published as these surfaces ship.</p>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="page-section" aria-labelledby="pricing-beta-heading">
      <h2 id="pricing-beta-heading">Closed beta — free</h2>
      <p>
        Taho is in closed beta. The full app is free during the closed beta. Published plans below are not finalized
        and may change before general availability.
      </p>
      <p className="status-badge">CLOSED BETA</p>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Free</h3>
          <p className="price">₹0</p>
          <p>free during the closed beta</p>
          <ul>
            <li>Unlimited collections and requests</li>
            <li>Security analysis</li>
            <li>Response intelligence</li>
          </ul>
        </div>
        <div className="pricing-card pricing-card-pro">
          <h3>Pro</h3>
          <p className="price">₹1,499/year</p>
          <p>or ₹179/month</p>
          <p>Planned for post-beta. Not finalized.</p>
          <ul>
            <li>Unlimited environments</li>
            <li>Extended history and search</li>
            <li>PDF security reports</li>
          </ul>
        </div>
      </div>
      <p className="limitation">
        Nothing is for sale during the closed beta. No payment is collected and no purchase flow exists yet.
      </p>
    </section>
  );
}

function DownloadSection() {
  return (
    <>
      <section className="page-section" aria-labelledby="download-status-heading">
        <h2 id="download-status-heading">Closed beta</h2>
        <p>
          Taho is currently in closed beta. There are no production install links yet — no store listing and no APK
          distribution is available at this time.
        </p>
        <dl className="requirements">
          <div>
            <dt>Platform</dt>
            <dd>Android</dd>
          </div>
          <div>
            <dt>Requirement</dt>
            <dd>Compatibility details will accompany beta invitations.</dd>
          </div>
        </dl>
        <p className="limitation">
          There is no guarantee of acceptance. Joining the waitlist only registers interest; beta access is granted in
          waves as capacity allows.
        </p>
      </section>
      <Waitlist />
    </>
  );
}

const pageLinks: Array<{ path: string; label: string }> = [
  { path: '/security', label: 'Security' },
  { path: '/ai', label: 'AI' },
  { path: '/mcp', label: 'MCP' },
  { path: '/developers', label: 'Developers' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/download', label: 'Download' },
];

export default function SecondaryPage({ path }: { path: string }) {
  const headline = headlines[path] ?? 'Page not found.';
  return (
    <main id="main-content" className="secondary-page">
      <nav className="page-nav" aria-label="Secondary pages">
        {pageLinks
          .filter((link) => link.path !== path)
          .map((link) => (
            <a key={link.path} href={link.path}>
              {link.label}
            </a>
          ))}
      </nav>
      <h1>{headline}</h1>
      {path === '/security' && <SecuritySection />}
      {path === '/ai' && <AiSection />}
      {path === '/mcp' && <McpSection />}
      {path === '/developers' && <DevelopersSection />}
      {path === '/pricing' && <PricingSection />}
      {path === '/download' && <DownloadSection />}
      {!headlines[path] && (
        <section className="page-section">
          <p>
            The page you are looking for does not exist. Try the <a href="/">homepage</a>, or use the navigation
            above.
          </p>
        </section>
      )}
    </main>
  );
}
