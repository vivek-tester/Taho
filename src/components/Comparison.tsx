export const Comparison = () => {
  const comparisonRows = [
    { feature: "HTTP Methods Supported", taho: "15 Methods + Raw Wire", postman: "Limited REST", teste: "8 Methods", httpbot: "Basic 5" },
    { feature: "OWASP Security Audit (A–F)", taho: "Automatic on every call", postman: "❌ None", teste: "❌ None", httpbot: "❌ None" },
    { feature: "Executive PDF Audit Reports", taho: "✓ One-Tap Export", postman: "❌ None", teste: "❌ None", httpbot: "❌ None" },
    { feature: "Real-time Protocols", taho: "WebSocket & MQTT & GraphQL Subs", postman: "Limited WS", teste: "❌ None", httpbot: "Basic WS" },
    { feature: "OAuth 2.1 PKCE Flow", taho: "✓ S256 with KeyStore Vault", postman: "Basic", teste: "❌ None", httpbot: "Manual Token" },
    { feature: "QuickJS Script Sandbox (pm.*)", taho: "✓ Pre & Post Scripts", postman: "Read-only sync", teste: "❌ None", httpbot: "❌ None" },
    { feature: "CSV Data-Driven Runner", taho: "✓ Multi-iteration CSV", postman: "❌ Desktop only", teste: "❌ None", httpbot: "❌ None" },
    { feature: "Background Monitors", taho: "✓ Android WorkManager", postman: "❌ Cloud paid ($19+)", teste: "❌ None", httpbot: "❌ None" },
    { feature: "Local Mock Server", taho: "✓ On-Device 127.0.0.1", postman: "Cloud Mock only", teste: "❌ None", httpbot: "❌ None" },
    { feature: "Privacy & Cloud Lock-in", taho: "100% Local (Zero Telemetry)", postman: "Forced Cloud Login", teste: "Third-party sync", httpbot: "Cloud sync" },
  ];

  return (
    <section id="comparison" className="bg-black py-[70px] md:py-[120px] relative">
      <div className="max-w-[1180px] w-full mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[780px] mx-auto mb-16">
          <div className="font-jetbrains font-semibold text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-3">
            THE COMPETITIVE ADVANTAGE
          </div>
          <h2 className="font-outfit font-bold text-[32px] md:text-[48px] text-taho-primary tracking-tight leading-[1.15]">
            Why Taho Outperforms Traditional Tools
          </h2>
          <p className="font-outfit text-[16px] md:text-[18px] text-taho-secondary mt-4 leading-relaxed">
            Other mobile tools are cut-down viewers. Taho is a full engineering workbench with automated security auditing.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-surface-1 border border-card-border rounded-[24px] p-4 sm:p-8 shadow-2xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)]">
                <th className="py-4 px-4 font-jetbrains font-bold text-[12px] uppercase text-taho-muted tracking-wider">Capability</th>
                <th className="py-4 px-4 font-outfit font-extrabold text-[16px] text-taho-gold bg-taho-gold-dim/40 rounded-t-xl">Taho (Mobile)</th>
                <th className="py-4 px-4 font-outfit font-semibold text-[14px] text-taho-secondary">Postman Mobile</th>
                <th className="py-4 px-4 font-outfit font-semibold text-[14px] text-taho-secondary">Teste</th>
                <th className="py-4 px-4 font-outfit font-semibold text-[14px] text-taho-secondary">HTTPBot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(255,255,255,0.04)] font-outfit text-[14px]">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-2/40 transition-colors">
                  <td className="py-4 px-4 font-medium text-taho-primary">{row.feature}</td>
                  <td className="py-4 px-4 font-bold text-taho-primary bg-taho-gold-dim/20 flex items-center gap-2">
                    <span className="text-taho-gold">★</span>
                    <span>{row.taho}</span>
                  </td>
                  <td className="py-4 px-4 text-taho-secondary">{row.postman}</td>
                  <td className="py-4 px-4 text-taho-secondary">{row.teste}</td>
                  <td className="py-4 px-4 text-taho-secondary">{row.httpbot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
