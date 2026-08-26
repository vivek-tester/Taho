export const Problem = () => {
  const problems = [
    {
      badge: "DESKTOP LOCK-IN",
      badgeColor: "text-taho-amber bg-taho-amber-bg border-[rgba(243,156,18,0.2)]",
      title: "Production outages happen at 2 AM — not when you are at your laptop",
      description: "When an API fails during an on-call rotation or commute, having to boot a laptop and connect to VPN just to send one test cURL command costs critical MTTR minutes."
    },
    {
      badge: "SECURITY BLINDSPOT",
      badgeColor: "text-taho-red bg-[rgba(231,76,60,0.12)] border-[rgba(231,76,60,0.2)]",
      title: "APIs return 200 OK while actively leaking security flaws",
      description: "A 200 OK status does NOT mean an API is secure. Missing HSTS, absent CSP headers, weak cookie flags, and misconfigured CORS silently expose your backend to data breaches."
    },
    {
      badge: "SUBSCRIPTION FATIGUE",
      badgeColor: "text-taho-gold bg-taho-gold-dim border-taho-gold-border",
      title: "Postman cut free team tiers & forces cloud accounts",
      description: "Traditional API clients now force cloud logins, upload proprietary company schemas to third-party servers, and demand $19/user/month for basic collaboration."
    }
  ];

  return (
    <section className="bg-surface-1 py-[70px] md:py-[110px] border-t border-b border-card-border relative">
      <div className="max-w-[1180px] w-full mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <div className="font-jetbrains font-semibold text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-3">
            THE REALITY OF MOBILE API WORK
          </div>
          <h2 className="font-outfit font-bold text-[30px] md:text-[46px] text-taho-primary tracking-tight leading-[1.15]">
            Why Modern Engineering Teams Need Taho
          </h2>
          <p className="font-outfit text-[16px] md:text-[18px] text-taho-secondary mt-4 leading-relaxed">
            API development moved to the cloud, but developer testing tools remained stuck on desktop architectures built in 2012.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div 
              key={i} 
              className="bg-surface-2 border border-card-border rounded-[18px] p-7 hover:border-card-border-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`inline-block border font-jetbrains text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4 ${p.badgeColor}`}>
                  {p.badge}
                </div>
                <h3 className="font-outfit font-bold text-[18px] md:text-[20px] text-taho-primary leading-snug">
                  {p.title}
                </h3>
                <p className="font-outfit text-[14px] text-taho-secondary leading-[1.65] mt-3">
                  {p.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.05)] font-jetbrains text-[11px] text-taho-muted flex items-center gap-2">
                <span className="text-taho-green font-bold">✓</span>
                <span>Solved natively in Taho</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
