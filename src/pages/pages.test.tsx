import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer, type ViteDevServer } from 'vite';
import { readFile } from 'node:fs/promises';

let server: ViteDevServer;
let render: (path: string) => string;
let copyExample: (clipboard?: { writeText: (value: string) => Promise<void> }) => Promise<string>;
let renderDemo: (tab: string) => string;

before(async () => {
  server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true, entries: [] },
  });
  const mod = await server.ssrLoadModule('/src/pages/SecondaryPage.tsx');
  render = (path: string) => renderToStaticMarkup(createElement(mod.default, { path }));
  copyExample = mod.copyExample;
});

after(async () => {
  await server?.close();
});

test('renders a single main landmark, one h1, and the page headline for every supported route', () => {
  const expectations: Array<[string, RegExp]> = [
    ['/security', /Know what your API is exposing/i],
    ['/ai', /What does AI actually do inside Taho/i],
    ['/mcp', /Let agents work with real API tooling/i],
    ['/developers', /Practical technical hub|Built for developers/i],
    ['/pricing', /Pricing/i],
    ['/download', /Where can I get Taho/i],
  ];
  for (const [path, headline] of expectations) {
    const html = render(path);
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, `${path} must have exactly one main`);
    assert.match(html, /id="main-content"/, `${path} main must be the skip target`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path} must have exactly one h1`);
    assert.match(html, headline, `${path} headline missing`);
  }
});

test('unknown routes render a not-found page', () => {
  const html = render('/nope');
  assert.match(html, /not found|Page not found/i);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
});

test('security page presents heuristic findings with severities and the limitation statement, no pen-test claims', () => {
  const html = render('/security');
  assert.match(html, /security headers/i);
  assert.match(html, /cookie/i);
  assert.match(html, /JWT/i);
  for (const severity of ['HIGH', 'MEDIUM', 'LOW', 'INFO']) {
    assert.ok(html.includes(severity), `severity ${severity} missing`);
  }
  assert.match(html, /Missing security header/);
  assert.match(html, /Weak cookie configuration/);
  assert.match(html, /heuristic/i);
  assert.match(html, /not a penetration test or certification|does not constitute a formal penetration test/i);
  assert.doesNotMatch(html, /exploit|payload injection|attack script/i);
});

test('ai page shows canned demo tabs with byok boundaries and no network claims', () => {
  const html = render('/ai');
  assert.match(html, /Explain response/i);
  assert.match(html, /Generate assertions/i);
  assert.match(html, /Edge cases/i);
  assert.match(html, /BYOK/i);
  assert.match(html, /external provider performs inference|the selected external model performs inference/i);
  assert.match(html, /no inference|no network/i);
  assert.match(html, /demo|canned/i);
});

test('mcp page is marketing architecture preview, not availability claim', () => {
  const html = render('/mcp');
  assert.match(html, /PREVIEW/i);
  assert.match(html, /TAHO MCP/);
  assert.match(html, /AI \/ AGENT|AI AGENT/i);
  assert.match(html, /REQUEST|TESTS|SECURITY/);
  assert.doesNotMatch(html, /available now|try it now|sign up/i);
});

test('developers page exposes a copyable safe GET example with real copy feedback', async () => {
  const html = render('/developers');
  assert.match(html, /api\.example\.com\/users/);
  assert.match(html, /<button[^>]*type="button"/);
  assert.match(html, /Copy/);
  assert.doesNotMatch(html, /href="\/docs"/);
  assert.doesNotMatch(html, /href="https:\/\/github\.com\/[^"]+"/);
  const written: string[] = [];
  const fakeClipboard = { writeText: async (value: string) => { written.push(value); } };
  const copied = await copyExample(fakeClipboard);
  assert.equal(copied, true);
  assert.deepEqual(written, ['GET https://api.example.com/users HTTP/1.1']);
});

test('developers roadmap uses status labels without dead doc or GitHub links', () => {
  const html = render('/developers');
  assert.match(html, /NOW/i);
  assert.match(html, /NEXT|PLANNED/i);
  assert.match(html, /EXPLORING/i);
  assert.doesNotMatch(html, /href="[^"]*docs[^"]*"/);
  assert.doesNotMatch(html, /href="[^"]*github\.com[^"]*"/);
});

test('pricing page shows closed beta free, plans not finalized, and does not sell', () => {
  const html = render('/pricing');
  assert.match(html, /closed beta/i);
  assert.match(html, /free during the (closed )?beta/i);
  assert.match(html, /not finalized/i);
  assert.match(html, /₹1,499/);
  assert.match(html, /₹179/);
  assert.doesNotMatch(html, /<button[^>]*>[^<]*(buy|purchase|subscribe|checkout|pay)[^<]*<\/button>/i);
  assert.doesNotMatch(html, /<a [^>]*>[^<]*(buy|purchase|subscribe|checkout|pay now)/i);
  assert.doesNotMatch(html, /7-day free trial|cancel anytime/i);
});

test('download page shows closed beta with waitlist, no production install links, honest requirements', () => {
  const html = render('/download');
  assert.match(html, /closed beta/i);
  assert.match(html, /id="waitlist"/);
  assert.doesNotMatch(html, /href="https:\/\/play\.google\.com[^"]*"/);
  assert.doesNotMatch(html, /href="[^"]*\.apk[^"]*"/);
  assert.doesNotMatch(html, /install now|download now|get it on google play/i);
  assert.match(html, /Android/);
  assert.doesNotMatch(html, /Android \d/);
  assert.match(html, /no guarantee/i);
});

test('ai demo starts on the response tab and only the active tab is marked selected', () => {
  const html = render('/ai');
  const selected = [...html.matchAll(/aria-selected="(true|false)"/g)].map((m) => m[1]);
  assert.ok(selected.includes('true'), 'one tab must be selected');
  assert.ok(selected.includes('false'), 'other tabs must be unselected');
  assert.equal(selected.filter((s) => s === 'true').length, 1);
  assert.match(html, /The 200 OK response returned a user object/);
});

test('static legal pages exist and are reachable without JS', async () => {
  const root = process.cwd();
  for (const file of ['privacy.html', 'terms.html', 'delete-account.html']) {
    const content = await readFile(`${root}/public/${file}`, 'utf8');
    assert.match(content, /<!doctype html>/i, `${file} must be a full HTML document`);
    assert.match(content, /<style/i, `${file} must be self-contained styled HTML`);
    assert.doesNotMatch(content, /<script/i, `${file} must not require JS`);
    assert.match(content, /<h1/);
    assert.match(content, /sagarvivek141@gmail\.com/);
  }
});

test('published privacy policy keeps its heading, effective date, and contact links', async () => {
  const root = process.cwd();
  const privacy = await readFile(`${root}/public/privacy.html`, 'utf8');
  assert.match(privacy, /<title>Privacy Policy — Taho<\/title>/);
  assert.match(privacy, /<h1>Privacy Policy<\/h1>/);
  assert.match(privacy, /Effective date: August 25, 2026/);
  assert.match(privacy, /<h2>11\. Contact<\/h2>/);
  assert.match(privacy, /href="mailto:sagarvivek141@gmail\.com"/g);
  assert.match(privacy, /on <strong>your device<\/strong>/);
  assert.match(privacy, /Supabase/);
  assert.match(privacy, /Dodo Payments/);
  assert.match(privacy, /href="\/terms\.html"/);
});

test('published terms of service keeps its heading, authorized-testing callout, and contact links', async () => {
  const root = process.cwd();
  const terms = await readFile(`${root}/public/terms.html`, 'utf8');
  assert.match(terms, /<title>Terms of Service — Taho<\/title>/);
  assert.match(terms, /<h1>Terms of Service<\/h1>/);
  assert.match(terms, /Effective date: August 25, 2026/);
  assert.match(terms, /Authorized testing only\./);
  assert.match(terms, /<h2>13\. Contact<\/h2>/);
  assert.match(terms, /href="mailto:sagarvivek141@gmail\.com"/g);
  assert.match(terms, /href="\/privacy\.html"/);
});

test('published account deletion page keeps Google Play compliance instructions and request form', async () => {
  const root = process.cwd();
  const deletion = await readFile(`${root}/public/delete-account.html`, 'utf8');
  assert.match(deletion, /<title>Taho — Account & Data Deletion<\/title>/);
  assert.match(deletion, /<h1>Taho — Account & Data Deletion<\/h1>/);
  assert.match(deletion, /Google Play User Data & Account Deletion Policy/);
  assert.match(deletion, /Method 1: In-App Deletion/);
  assert.match(deletion, /Method 2: Request Web Deletion/);
  assert.match(deletion, /action="mailto:sagarvivek141@gmail\.com\?subject=Taho%20Account%20Deletion%20Request"/);
  assert.match(deletion, /href="privacy\.html"/);
});

test('every supported route links the other routes and legal pages stay linked', () => {
  for (const path of ['/security', '/ai', '/mcp', '/developers', '/pricing', '/download']) {
    const html = render(path);
    for (const other of ['/security', '/ai', '/mcp', '/developers', '/pricing', '/download']) {
      if (other === path) continue;
      assert.match(html, new RegExp(`href="${other}"`), `${path} must link ${other}`);
    }
  }
  const notFound = render('/nope');
  assert.match(notFound, /href="\/"/);
});
