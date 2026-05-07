export const Features = () => {
  const features = [
    {
      icon: "📱",
      iconBg: "rgba(52,152,219,0.12)",
      iconBorder: "rgba(52,152,219,0.2)",
      title: "Mobile First",
      body: "Built from the ground up for Android. Not a port. Not a PWA. Every interaction designed for a touch screen."
    },
    {
      icon: "🛡",
      iconBg: "rgba(46,204,113,0.12)",
      iconBorder: "rgba(46,204,113,0.2)",
      title: "OWASP Security Grading",
      body: "Every response is automatically graded A–F against the OWASP API Top 10. On-device. Zero latency. Completely free.",
      badge: { text: "Free Forever", style: "bg-taho-green-bg text-taho-green border-[rgba(46,204,113,0.2)]" }
    },
    {
      icon: "📋",
      iconBg: "rgba(201,146,42,0.12)",
      iconBorder: "rgba(201,146,42,0.2)",
      title: "Smart Paste",
      body: "Paste a cURL command, JSON body, or raw HTTP request anywhere. Taho detects the format and populates the entire request in one tap."
    },
    {
      icon: "🔄",
      iconBg: "rgba(155,89,182,0.12)",
      iconBorder: "rgba(155,89,182,0.2)",
      title: "Variable Transforms",
      body: "Auto-increment order IDs. Cycle through 14 channels. No code, no scripts — configure once and run."
    },
    {
      icon: "🔐",
      iconBg: "rgba(231,76,60,0.12)",
      iconBorder: "rgba(231,76,60,0.2)",
      title: "Zero Backend",
      body: "No account. No cloud sync. No server. Your API keys, tokens, and request history never leave your device."
    },
    {
      icon: "📄",
      iconBg: "rgba(243,156,18,0.12)",
      iconBorder: "rgba(243,156,18,0.2)",
      title: "PDF Security Reports",
      body: "Export a professional security audit PDF to share with your client or team. Every check, every grade, every fix.",
      badge: { text: "Pro", style: "bg-taho-gold text-black border-transparent font-bold !font-jetbrains" }
    }
  ];

  return (
    <section id="features" className="bg-surface-1 py-[64px] md:py-[120px]">
      <div className="max-w-[1100px] w-full mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-jetbrains font-medium text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-[14px]">
            THE SOLUTION
          </div>
          <h2 className="font-outfit font-bold text-[28px] md:text-[44px] text-taho-primary tracking-[-0.01em] max-w-[800px] mx-auto">
            Taho runs on your phone. Grades every response. Keeps everything local.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {features.map((feature, i) => (
            <div key={i} className="bg-surface-2 border border-card-border rounded-[14px] p-[28px] hover:border-card-border-hover hover:-translate-y-1 transition-all duration-300 group">
              <div 
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[20px] mb-4 border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: feature.iconBg, borderColor: feature.iconBorder }}
              >
                {feature.icon}
              </div>
              <h3 className="font-outfit font-semibold text-[18px] text-taho-primary">{feature.title}</h3>
              <p className="font-outfit text-[14px] text-taho-secondary leading-[1.6] mt-[10px]">
                {feature.body}
              </p>
              {feature.badge && (
                <div className={`mt-[10px] inline-block border font-jetbrains text-[10px] uppercase font-semibold px-[8px] py-[3px] rounded-full ${feature.badge.style}`}>
                  {feature.badge.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
