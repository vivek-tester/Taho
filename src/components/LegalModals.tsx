export interface LegalModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal = ({ type, onClose }: LegalModalProps) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-surface-1 border border-card-border rounded-[20px] p-6 md:p-8 max-w-[700px] w-full max-h-[85vh] flex flex-col relative shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-taho-gold" />
            <h3 className="font-outfit font-bold text-[20px] md:text-[24px] text-taho-primary">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms of Service'}
              {type === 'contact' && 'Contact Developer'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-2 border border-card-border flex items-center justify-center text-[18px] text-taho-secondary hover:text-taho-primary hover:border-taho-gold transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto py-4 font-outfit text-[14px] text-taho-secondary leading-relaxed space-y-4 pr-2">
          {type === 'contact' && (
            <div className="space-y-4">
              <p className="text-taho-secondary">
                Have questions, feature requests, or enterprise security inquiries? Reach out directly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a 
                  href="mailto:sagarvivek141@gmail.com" 
                  className="bg-surface-2 border border-card-border rounded-xl p-4 flex items-center gap-3 hover:border-taho-gold transition-colors group"
                >
                  <span className="text-[24px]">📧</span>
                  <div>
                    <div className="font-jetbrains text-[10px] text-taho-muted uppercase tracking-wider">Email</div>
                    <div className="font-outfit text-[14px] font-medium text-taho-primary group-hover:text-taho-gold transition-colors">sagarvivek141@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com/eternal0p" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-surface-2 border border-card-border rounded-xl p-4 flex items-center gap-3 hover:border-taho-gold transition-colors group"
                >
                  <span className="text-[24px]">📸</span>
                  <div>
                    <div className="font-jetbrains text-[10px] text-taho-muted uppercase tracking-wider">Instagram</div>
                    <div className="font-outfit text-[14px] font-medium text-taho-primary group-hover:text-taho-gold transition-colors">@eternal0p</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/vivek-tester/Project-Taho" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-surface-2 border border-card-border rounded-xl p-4 flex items-center gap-3 hover:border-taho-gold transition-colors group"
                >
                  <span className="text-[24px]">🐙</span>
                  <div>
                    <div className="font-jetbrains text-[10px] text-taho-muted uppercase tracking-wider">GitHub</div>
                    <div className="font-outfit text-[14px] font-medium text-taho-primary group-hover:text-taho-gold transition-colors">vivek-tester / Project-Taho</div>
                  </div>
                </a>

                <div className="bg-surface-2 border border-card-border rounded-xl p-4 flex items-center gap-3">
                  <span className="text-[24px]">📍</span>
                  <div>
                    <div className="font-jetbrains text-[10px] text-taho-muted uppercase tracking-wider">Location</div>
                    <div className="font-outfit text-[14px] font-medium text-taho-primary">India 🇮🇳</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-4">
              <div className="bg-taho-gold-dim border border-taho-gold-border rounded-lg p-3 text-[12px] font-jetbrains text-taho-gold">
                SUMMARY: Taho is 100% local-first and offline-capable. We do not collect, transmit, track, or sell any of your API requests, tokens, or personal data.
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">1. Data Collection & Local Storage</h4>
                <p>
                  Taho does NOT collect, store, or transmit any personal information, credentials, API payloads, or request histories to external servers. All saved API requests, collections, environment variables, history records, and mock rules are stored exclusively on your local device.
                </p>
                <p>
                  Sensitive values marked as "Secret" are stored using hardware-backed OS secure storage (Android KeyStore / iOS Keychain via Flutter Secure Storage).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">2. Network Traffic & Direct Connections</h4>
                <p>
                  When you execute an API call, WebSocket session, or MQTT publish within Taho, the connection is initiated directly from your device to the destination host. Taho does not route, proxy, or intercept your network traffic through any intermediary cloud relays.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">3. Zero Telemetry & Third-Party Trackers</h4>
                <p>
                  Taho contains zero advertising SDKs, zero analytics trackers, and zero third-party telemetry libraries. We cannot see what endpoints you test, how often you test, or what data your APIs return.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">4. AI Assistant Features (BYOK)</h4>
                <p>
                  The AI Assistant feature operates under a Bring-Your-Own-Key (BYOK) model. When you configure a Google Gemini or OpenAI API key, prompts and response excerpts are transmitted directly to the respective AI provider's API endpoints according to your key configuration. Taho does not intermediate or log your AI requests.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">5. Data Erasure & Portability</h4>
                <p>
                  You have full ownership and control over your data. You may export complete backups (.taho JSON files) or completely wipe all local databases and secure vault keys at any time via Settings → Danger Zone → Clear All Data.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">6. Governing Law & Contact</h4>
                <p>
                  This Privacy Policy is governed by and construed in accordance with the laws of India. For privacy inquiries: <a href="mailto:sagarvivek141@gmail.com" className="text-taho-gold underline">sagarvivek141@gmail.com</a>.
                </p>
              </div>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-4">
              <div className="bg-taho-gold-dim border border-taho-gold-border rounded-lg p-3 text-[12px] font-jetbrains text-taho-gold">
                IMPORTANT: Taho is an API diagnostic tool designed strictly for authorized testing and development.
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">1. Acceptance of Terms</h4>
                <p>
                  By downloading, installing, or using Taho, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the application.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">2. Authorized Use & Compliance</h4>
                <p>
                  You agree to use Taho only for lawful purposes and in accordance with all applicable local, national, and international laws. You must only test, probe, or audit APIs, endpoints, and servers that you own or for which you have received explicit, documented authorization from the owner.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">3. Prohibited Activities</h4>
                <p>You strictly agree NOT to use Taho to:</p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-taho-secondary">
                  <li>Conduct unauthorized penetration tests or security scans against third-party systems.</li>
                  <li>Initiate Denial-of-Service (DoS/DDoS) attacks or flood servers with abusive traffic.</li>
                  <li>Exploit vulnerabilities or exfiltrate unauthorized data from systems you do not own.</li>
                  <li>Violate the terms of service of any third-party API or service provider.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">4. Nature of Security Analysis</h4>
                <p>
                  The OWASP security grading and diagnostic findings provided by Taho are automated, heuristic-based assessments intended for development guidance. They do not constitute an exhaustive or certified professional security audit. Taho does not guarantee that passing tests indicate absolute immunity from security vulnerabilities.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">5. Disclaimer of Warranties & Limitation of Liability</h4>
                <p>
                  Taho is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. Under no circumstances shall the creators of Taho be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the application, including legal liabilities arising from unauthorized testing.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-taho-primary text-[15px]">6. Governing Law & Jurisdiction</h4>
                <p>
                  These Terms of Service are governed by the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex justify-end">
          <button 
            onClick={onClose}
            className="bg-taho-gold text-black font-outfit font-bold text-[13px] px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
