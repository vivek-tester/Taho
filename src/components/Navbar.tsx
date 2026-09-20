import { useRef } from 'react';
import { Logo } from './Logo';

export const Navbar = () => {
  const ref = useRef<HTMLElement>(null);
  return (
    <nav ref={ref} className="site-nav" aria-label="Main navigation" onKeyDown={(event) => {
      if (event.key === 'Escape') {
        ref.current?.querySelectorAll('details[open]').forEach((item) => {
          item.removeAttribute('open');
          item.querySelector('summary')?.focus();
        });
      }
    }}>
      <a href="/" className="site-brand" aria-label="Taho home"><Logo className="w-7 h-7" /> TAHO</a>
      <div className="site-nav-links">
        <details><summary>Product</summary><div className="nav-menu">
          <a href="/#pf-compose">The workbench</a><a href="/security">Security</a><a href="/ai">AI / BYOK</a><a href="/mcp">MCP preview</a>
        </div></details>
        <a className="desktop-link" href="/developers">Developers</a>
        <a className="desktop-link" href="/pricing">Pricing</a>
        <a href="/download" className="nav-cta">Get Taho <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  );
};
