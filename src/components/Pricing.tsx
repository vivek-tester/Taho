export const Pricing = () => {
  const freeFeatures = [
    "Unlimited collections & requests",
    "All HTTP methods + GraphQL + WebSocket",
    "Full OWASP security scan — A to F grade",
    "JWT decoder & SSL/TLS inspector",
    "Import cURL, Postman, OpenAPI",
    "Code generation — 11 languages",
    "3 environments",
    "7-day request history",
    "Collection runner — 10 requests",
    "Manual backup & restore"
  ];
  
  const proFeatures = [
    "Unlimited environments",
    "90-day history with full search",
    "PDF security reports",
    "Unlimited collection runner",
    "Response diffing",
    "Auto-scheduled Google Drive backup",
    "Custom security rules",
    "AI request assistant — 50/month"
  ];

  return (
    <section id="pricing" className="bg-black py-[64px] md:py-[120px]">
      <div className="max-w-[1100px] w-full mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-jetbrains font-medium text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-[14px]">
            PRICING
          </div>
          <h2 className="font-outfit font-bold text-[28px] md:text-[44px] text-taho-primary tracking-[-0.01em]">
            Simple. No surprises.
          </h2>
          <p className="font-outfit text-[18px] text-taho-secondary mt-[8px]">
            Start free forever. Upgrade when you need more.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {/* Free Card */}
          <div className="bg-surface-2 border border-card-border rounded-[16px] p-[32px] hover:border-card-border-hover transition-colors duration-300">
            <div className="font-jetbrains font-semibold text-[14px] uppercase tracking-[0.1em] text-taho-secondary">
              Free
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-outfit font-extrabold text-[48px] text-taho-primary leading-none">₹0</span>
            </div>
            <div className="font-outfit text-[14px] text-taho-secondary mt-[4px]">
              forever
            </div>
            
            <hr className="border-[rgba(255,255,255,0.07)] my-[20px]" />
            
            <div className="flex flex-col gap-2">
              {freeFeatures.map((feat, i) => (
                <div key={i} className="flex gap-[10px] py-[4px] items-start w-full">
                  <span className="text-taho-green font-bold shrink-0 mt-0.5">✓</span>
                  <span className="font-outfit text-[14px] text-taho-secondary leading-tight">{feat}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-[24px] bg-surface-3 border border-card-border text-taho-muted p-[14px] rounded-[10px] font-outfit font-semibold text-[14px] cursor-default">
              Always Free
            </button>
          </div>

          {/* Pro Card */}
          <div className="bg-[rgba(201,146,42,0.06)] border border-[rgba(201,146,42,0.3)] hover:border-[rgba(201,146,42,0.5)] transition-all duration-300 hover:-translate-y-1 rounded-[16px] p-[32px] relative mt-[24px] md:mt-0 shadow-[0_0_40px_rgba(201,146,42,0.0)] hover:shadow-[0_10px_40px_rgba(201,146,42,0.1)]">
            <div className="absolute top-[-12px] right-[24px] bg-taho-gold text-black font-jetbrains font-bold text-[11px] uppercase px-[12px] py-[4px] rounded-full">
              Best Value
            </div>
            
            <div className="font-jetbrains font-semibold text-[14px] uppercase tracking-[0.1em] text-taho-secondary">
              Pro
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-outfit font-extrabold text-[48px] text-taho-primary leading-none">₹1,499</span>
            </div>
            <div className="font-outfit text-[14px] text-taho-secondary">
              /year
            </div>
            <div className="font-jetbrains text-[13px] text-taho-green mt-[4px]">
              ₹125/month · Save ₹649
            </div>
            
            <hr className="border-[rgba(201,146,42,0.15)] my-[20px]" />
            
            <div className="font-jetbrains text-[12px] text-taho-secondary mb-[12px]">
              Everything in Free, plus:
            </div>
            
            <div className="flex flex-col gap-2">
              {proFeatures.map((feat, i) => (
                <div key={i} className="flex gap-[10px] py-[4px] items-start w-full">
                  <span className="text-taho-gold font-bold shrink-0 mt-0.5">✓</span>
                  <span className="font-outfit text-[14px] text-taho-primary leading-tight">{feat}</span>
                </div>
              ))}
            </div>
            
            <div className="font-jetbrains text-[13px] text-taho-secondary mt-[8px]">
              or ₹179/month
            </div>
            
            <a href="#waitlist" className="block text-center w-full mt-[24px] bg-taho-gold text-black p-[14px] rounded-[10px] font-outfit font-bold text-[14px] hover:opacity-90 transition-opacity">
              Join Waitlist for Pro
            </a>
            
            <div className="font-outfit text-[12px] text-taho-secondary text-center mt-[8px]">
              7-day free trial · Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
