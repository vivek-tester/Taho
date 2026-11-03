import { useState } from 'react';
import './pages.css';

const headlines: Record<string, string> = {
  '/security': 'Know what your API is exposing.',
  '/ai': 'What does AI actually do inside Taho?',
  '/mcp': 'Let agents work with real API tooling.',
  '/developers': 'Built for developers.',
  '/pricing': 'Straightforward pricing for Taho.',
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
    <section className="page-section" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading">Pricing information</h2>
      <p>
        Taho is publicly available on Google Play. Current pricing and any in-app purchase options are shown in the
        Play Store listing and inside the app.
      </p>
      <p className="limitation">
        We will publish plan details here when the available plans and limits are finalized. No unpublished pricing
        is presented as an active offer.
      </p>
      <a className="taho-cta taho-cta--gold" href="https://play.google.com/store/apps/details?id=com.eternal.taho" target="_blank" rel="noopener noreferrer">
        View Taho on Google Play ↗
      </a>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="page-section" aria-labelledby="download-status-heading">
      <h2 id="download-status-heading">Available on Google Play</h2>
      <p>
        Taho is publicly released for Android. Open the official Google Play listing to view the app details,
        compatibility information, screenshots, and install options.
      </p>
      <dl className="requirements">
        <div>
          <dt>Platform</dt>
          <dd>Android</dd>
        </div>
        <div>
          <dt>Distribution</dt>
          <dd>Google Play — official listing</dd>
        </div>
      </dl>
      <a className="taho-cta taho-cta--gold" href="https://play.google.com/store/apps/details?id=com.eternal.taho" target="_blank" rel="noopener noreferrer">
        Get Taho on Google Play ↗
      </a>
    </section>
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
