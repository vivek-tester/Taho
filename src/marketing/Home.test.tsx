import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer, type ViteDevServer } from 'vite';

let server: ViteDevServer;
let html: string;

before(async () => {
  server = await createServer({ server: { middlewareMode: true, hmr: false }, optimizeDeps: { noDiscovery: true, entries: [] }, appType: 'custom' });
  const { default: Home } = await server.ssrLoadModule('/src/marketing/Home.tsx');
  html = renderToStaticMarkup(createElement(Home));
});

after(async () => {
  await server?.close();
});

test('the homepage has one main landmark, one hero heading, and two download destinations', () => {
  assert.equal((html.match(/<main\b/g) ?? []).length, 1);
  assert.match(html, /id="main-content"/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /built for your phone/i);
  assert.equal((html.match(/href="\/download"/g) ?? []).length, 2);
});

test('phone flow has six steps in narrative order', () => {
  const ids=['pf-compose','pf-sending','pf-response','pf-security','pf-tests','pf-act'];
  let prev=-1;
  for(const id of ids){ const pos=html.indexOf(`id="${id}"`); assert.ok(pos>prev,`${id} in order`); prev=pos; }
});

test('illustrations contain readable request and response HTML rather than canvas', () => {
  assert.match(html, /api\.example\.com\/users/);
  assert.match(html, /application\/json/);
  assert.match(html, /200 OK/);
  assert.match(html, /Ada/);
  assert.match(html, /<pre\b/);
  assert.doesNotMatch(html, /<canvas|<iframe|<form/);
});

test('capabilities and example results disclose their boundaries', () => {
  assert.match(html, /preview|planned/i);
  assert.match(html, /illustrative/i);
  assert.match(html, /heuristic/i);
  assert.match(html, /not a penetration test or certification/i);
  assert.match(html, /external provider performs inference/i);
  const trust = html.match(/<section[^>]*id="trust"[\s\S]*?<\/section>/)?.[0];
  assert.ok(trust, 'trust section exists');
  assert.match(trust, /<a href="\/privacy\.html">Privacy Policy<\/a>/);
  assert.doesNotMatch(trust, /pending publication/i);
});

test('local exploration links resolve to rendered content and illustrations are not fake controls', () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.has(match[1]), `Missing anchor ${match[1]}`);
  }
  assert.doesNotMatch(html, /<button\b/);
  assert.equal(ids.size, [...html.matchAll(/\bid="([^"]+)"/g)].length);
});
