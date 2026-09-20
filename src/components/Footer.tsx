import { LogoMark } from './Logo';

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <div><a href="/" className="site-brand"><LogoMark className="w-7 h-7" /> TAHO</a><p>API engineering workbench.<br />Built for your phone.</p><span className="footer-beta">ANDROID · CLOSED BETA</span></div>
      <div><h2>Product</h2><a href="/#request">Testing</a><a href="/security">Security</a><a href="/#intelligence">Response intelligence</a><a href="/#automation">Automation</a><a href="/ai">AI</a><a href="/mcp">MCP</a><a href="/pricing">Pricing</a><a href="/download">Get Taho</a></div>
      <div><h2>Developers</h2><a href="/developers">Developer hub</a><a href="/#roadmap">Product status</a><a href="mailto:sagarvivek141@gmail.com">Contact</a></div>
      <div><h2>Trust</h2><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a><a href="/security">Security methodology</a><a href="/delete-account.html">Account & data deletion</a></div>
    </div>
    <div className="footer-bottom"><span>Built in India</span><span>© {new Date().getFullYear()} Taho · by Vivek Sagar</span><a href="/#main-content">Back to top ↑</a></div>
  </footer>
);
