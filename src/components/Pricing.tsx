export const Pricing = () => {
  const freeFeatures = [
    "Unlimited collections & requests",
    "All 15 HTTP methods + Raw Wire Preview",
    "On-device OWASP Security Grading (A–F)",
    "Real-time WebSocket & MQTT consoles",
    "GraphQL Editor, Subscriptions & Schema Docs",
    "OAuth 2.1 PKCE flow & KeyStore vault",
    "QuickJS JavaScript scripting (pm.*)",
    "Local Mock Server (3 active routes)",
    "1 Scheduled Background Monitor",
    "Collection Runner (10 requests/run)",
    "7-day history & Postman/OpenAPI import",
    "100% Offline-first, Zero Telemetry"
  ];
  
  const proFeatures = [
    "Unlimited Collection Runner iterations",
    "CSV Data-Driven Multi-Row testing",
    "Unlimited Scheduled Background Monitors",
    "Executive Branded PDF Security Reports",
    "90-day history retention & search",
    "Custom OWASP security rule engine",
    "Unlimited Mock Server routing rules",
    "Response Diffing (side-by-side & inline)",
    "Full Workspace Backup & Restore (.taho)"
  ];

  return (
    <section id="pricing" className="bg-surface-1 py-[70px] md:py-[120px] border-t border-card-border relative">
      <div className="max-w-[1180px] w-full mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <div className="font-jetbrains font-semibold text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-3">
            TRANSPARENT PRICING
          </div>
          <h2 className="font-outfit font-bold text-[32px] md:text-[48px] text-taho-primary tracking-tight leading-[1.15]">
            Generous Free Tier. Affordable Pro Upgrade.
          </h2>
          <p className="font-outfit text-[16px] md:text-[18px] text-taho-secondary mt-4 leading-relaxed">
            No mandatory cloud accounts. No per-seat pricing extortion. Start free forever.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Free Card */}
          <div className="bg-surface-2 border border-card-border rounded-[24px] p-8 md:p-10 flex flex-col justify-between hover:border-card-border-hover transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-jetbrains font-bold text-[13px] uppercase tracking-wider text-taho-secondary">Community</span>
                <span className="bg-surface-3 text-taho-secondary font-jetbrains text-[10px] font-semibold px-2.5 py-1 rounded-md">FREE FOREVER</span>
              </div>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-outfit font-extrabold text-[52px] text-taho-primary leading-none">₹0</span>
                <span className="font-outfit text-[15px] text-taho-secondary">/ forever</span>
              </div>
              <p className="font-outfit text-[14px] text-taho-secondary mt-3">
                Full-featured mobile API client with automated OWASP security audits.
              </p>
              
              <hr className="border-[rgba(255,255,255,0.06)] my-6" />
              
              <div className="space-y-3">
                {freeFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-taho-green font-bold shrink-0 mt-0.5">✓</span>
                    <span className="font-outfit text-[13.5px] text-taho-secondary leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href="#download" 
              className="mt-8 w-full bg-surface-3 border border-card-border text-taho-primary p-3.5 rounded-xl font-outfit font-bold text-[14px] text-center hover:border-taho-gold transition-colors block"
            >
              Download Free Edition
            </a>
          </div>

          {/* Pro Card */}
          <div className="bg-[rgba(201,146,42,0.04)] border-2 border-taho-gold/40 hover:border-taho-gold rounded-[24px] p-8 md:p-10 flex flex-col justify-between relative shadow-[0_0_40px_rgba(201,146,42,0.12)] transition-all duration-300">
            <div className="absolute -top-3.5 right-8 bg-taho-gold text-black font-jetbrains font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
              ★ BEST VALUE
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-jetbrains font-bold text-[13px] uppercase tracking-wider text-taho-gold">Pro Engineer</span>
                <span className="bg-taho-gold-dim text-taho-gold border border-taho-gold-border font-jetbrains text-[10px] font-bold px-2.5 py-1 rounded-md">7-DAY FREE TRIAL</span>
              </div>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-outfit font-extrabold text-[52px] text-taho-primary leading-none">₹1,499</span>
                <span className="font-outfit text-[15px] text-taho-secondary">/ year</span>
              </div>
              <div className="font-jetbrains text-[13px] text-taho-green mt-2 font-medium">
                ₹125/month · Save ₹649 vs monthly
              </div>
              
              <hr className="border-[rgba(201,146,42,0.15)] my-6" />
              
              <div className="font-jetbrains text-[12px] text-taho-gold uppercase tracking-wider font-semibold mb-3">
                Everything in Free, plus:
              </div>

              <div className="space-y-3">
                {proFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-taho-gold font-bold shrink-0 mt-0.5">✓</span>
                    <span className="font-outfit text-[14px] text-taho-primary font-medium leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href="#download" 
              className="mt-8 w-full bg-taho-gold text-black p-3.5 rounded-xl font-outfit font-bold text-[14px] text-center hover:opacity-90 transition-all shadow-[0_0_20px_rgba(201,146,42,0.3)] block"
            >
              Start 7-Day Free Trial
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
