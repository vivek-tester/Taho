export const LegalPage = ({ type, onBack }: { type: 'privacy' | 'terms'; onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-black text-taho-primary pt-24 pb-20 px-6">
      <div className="max-w-[850px] mx-auto">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-taho-gold font-jetbrains text-[12px] uppercase tracking-wider mb-8 hover:underline cursor-pointer"
        >
          ← Back to Taho Overview
        </button>

        <div className="bg-surface-1 border border-card-border rounded-[24px] p-8 md:p-12 shadow-2xl space-y-8">
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-6">
            <div className="inline-block bg-taho-gold-dim border border-taho-gold-border text-taho-gold font-jetbrains font-medium text-[11px] uppercase tracking-[0.15em] px-[12px] py-[4px] rounded-full mb-3">
              LEGAL COMPLIANCE · GOVERNED BY LAWS OF INDIA 🇮🇳
            </div>
            <h1 className="font-outfit font-extrabold text-[32px] md:text-[48px] text-taho-primary tracking-tight">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h1>
            <p className="font-jetbrains text-[13px] text-taho-muted mt-2">
              Last Updated: May 2026 · Official Document for Taho API Tester
            </p>
          </div>

          <div className="font-outfit text-[15px] text-taho-secondary leading-relaxed space-y-6">
            {type === 'privacy' ? (
              <>
                <div className="bg-taho-gold-dim border border-taho-gold-border rounded-xl p-4 text-[13px] font-jetbrains text-taho-gold">
                  SUMMARY: Taho is engineered with a strict zero-telemetry, offline-first posture. We never collect, transmit, intercept, or monetize your API requests, authentication headers, or response payloads.
                </div>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">1. Data Collection & Local-First Architecture</h2>
                  <p>
                    Taho operates entirely on-device. We do not maintain any cloud databases that store your saved requests, collections, environment variables, history entries, mock server configurations, or QA test assertions. All application data is stored locally in SQLite and encrypted key-value stores on your device.
                  </p>
                  <p>
                    Credentials marked as "Secret" are secured using Android KeyStore / iOS Keychain hardware-backed cryptographic vaults.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">2. Direct Network Connections</h2>
                  <p>
                    All API calls, WebSocket frames, MQTT messages, and GraphQL queries initiated through Taho travel directly from your device to the target server specified by you. Taho does not proxy, route, or inspect your traffic through intermediary cloud servers.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">3. No Analytics or User Tracking</h2>
                  <p>
                    Taho contains zero third-party analytics libraries, zero advertising SDKs, and zero behavioral telemetry. We do not track your session lengths, endpoints tested, or IP addresses.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">4. AI Assistant Integration (BYOK)</h2>
                  <p>
                    When using optional AI features (Explain Response, Generate Tests), Taho utilizes your own Bring-Your-Own-Key (BYOK) for Google Gemini or OpenAI. Request excerpts are sent directly to the respective AI provider under your API credentials without being logged by Taho.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">5. Data Portability & Deletion</h2>
                  <p>
                    You retain 100% ownership of all data created in Taho. You can export a full offline backup archive (.taho) or wipe all data immediately through Settings → Danger Zone → Clear All Data.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">6. Governing Law & Contact</h2>
                  <p>
                    This Privacy Policy is governed by the laws of India. For privacy or security inquiries, please contact: <a href="mailto:sagarvivek141@gmail.com" className="text-taho-gold underline">sagarvivek141@gmail.com</a>.
                  </p>
                </section>
              </>
            ) : (
              <>
                <div className="bg-taho-gold-dim border border-taho-gold-border rounded-xl p-4 text-[13px] font-jetbrains text-taho-gold">
                  IMPORTANT: Taho is an advanced developer tool designed exclusively for authorized testing, debugging, and security auditing.
                </div>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">1. Terms Acceptance</h2>
                  <p>
                    By installing, running, or accessing Taho, you agree to comply with and be legally bound by these Terms of Service.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">2. Authorized Testing Only</h2>
                  <p>
                    You expressly represent and warrant that you will only execute API requests, security scans, boundary tests, and fuzzing suites against servers and applications that you own or for which you have obtained explicit, verifiable written permission from the system owner.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">3. Prohibited Misuse</h2>
                  <p>You agree not to use Taho for any unlawful or malicious activities, including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-3">
                    <li>Unsolicited penetration testing or vulnerability exploitation.</li>
                    <li>Denial of Service (DoS) or distributed traffic flooding against unauthorized targets.</li>
                    <li>Interfering with or disrupting third-party computing infrastructure.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">4. Security Audit Disclaimers</h2>
                  <p>
                    The OWASP security grading, vulnerability checks, and diagnostic reports produced by Taho are automated heuristic evaluations for development assistance. They do not constitute formal security certifications.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">5. Limitation of Liability</h2>
                  <p>
                    Taho is provided on an "AS IS" and "AS AVAILABLE" basis. The creators shall not be liable for any indirect, punitive, or consequential damages resulting from your use of the application.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-outfit font-bold text-[20px] text-taho-primary">6. Governing Law</h2>
                  <p>
                    These Terms of Service are governed by and construed in accordance with the laws of India.
                  </p>
                </section>
              </>
            )}
          </div>

          <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 flex justify-between items-center">
            <span className="font-jetbrains text-[12px] text-taho-muted">Taho © 2026 · All Rights Reserved</span>
            <button 
              onClick={onBack}
              className="bg-taho-gold text-black font-outfit font-bold text-[13px] px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
