export const Features = () => {
  const bentoFeatures = [
    {
      colSpan: "lg:col-span-8",
      icon: "🛡️",
      iconBg: "rgba(46,204,113,0.12)",
      iconBorder: "rgba(46,204,113,0.25)",
      badge: { text: "CORE INNOVATION", style: "bg-taho-green-bg text-taho-green border-[rgba(46,204,113,0.25)]" },
      title: "On-Device OWASP Security Grading (A to F)",
      description: "Every response is evaluated in real-time against the OWASP API Top 10. Taho checks Strict Transport Security (HSTS), Content Security Policy (CSP), Clickjacking defenses (X-Frame-Options), cookie flags (Secure, HttpOnly, SameSite), and server information disclosure. Export executive-ready PDF audit reports in one tap.",
      highlights: ["Instant A–F letter grade with 0–100 posture score", "10+ automated security header verifications", "JWT token decoder with live expiration countdown", "Executive branded PDF audit report export"]
    },
    {
      colSpan: "lg:col-span-4",
      icon: "⚡",
      iconBg: "rgba(201,146,42,0.12)",
      iconBorder: "rgba(201,146,42,0.25)",
      badge: { text: "15 METHODS", style: "bg-taho-gold-dim text-taho-gold border-taho-gold-border" },
      title: "Complete HTTP & Raw Wire Engine",
      description: "Support for all 15 HTTP methods including PROPFIND, PURGE, LOCK, and UNLINK. Inspect byte-for-byte raw wire previews and measure TTFB network waterfall timing.",
      highlights: ["GET, POST, PUT, PATCH, DELETE + 10 more", "Raw wire preview & HTTP status diagnosis", "Latency waterfall (DNS, TCP, TLS, TTFB)"]
    },
    {
      colSpan: "lg:col-span-4",
      icon: "📡",
      iconBg: "rgba(191,90,242,0.12)",
      iconBorder: "rgba(191,90,242,0.25)",
      badge: { text: "REAL-TIME", style: "bg-[rgba(191,90,242,0.12)] text-[#BF5AF2] border-[rgba(191,90,242,0.25)]" },
      title: "WebSocket & MQTT Streaming",
      description: "Connect to live WebSocket streams with hex-dumped frames. Full MQTT console with QoS 0/1/2, TLS encryption, and Last-Will & Testament (LWT) management.",
      highlights: ["Live bi-directional frame logger", "MQTT topic subscription filters", "Last-Will and QoS level configuration"]
    },
    {
      colSpan: "lg:col-span-4",
      icon: "🔮",
      iconBg: "rgba(100,210,255,0.12)",
      iconBorder: "rgba(100,210,255,0.25)",
      badge: { text: "GRAPHQL & SOAP", style: "bg-[rgba(100,210,255,0.12)] text-[#64D2FF] border-[rgba(100,210,255,0.25)]" },
      title: "GraphQL Subscriptions & SOAP",
      description: "GraphQL query editor with introspection documentation explorer and WebSocket subscriptions (graphql-transport-ws). Instant WSDL parser for SOAP 1.1/1.2.",
      highlights: ["Interactive GraphQL schema docs", "Live GraphQL subscription stream", "Auto-generate SOAP XML envelopes from WSDL"]
    },
    {
      colSpan: "lg:col-span-4",
      icon: "🔑",
      iconBg: "rgba(255,214,10,0.12)",
      iconBorder: "rgba(255,214,10,0.25)",
      badge: { text: "ENTERPRISE AUTH", style: "bg-taho-gold-dim text-taho-gold border-taho-gold-border" },
      title: "Full OAuth 2.1 with PKCE-S256",
      description: "Modern OAuth 2.1 PKCE code exchange directly on mobile. Tokens stored in hardware-encrypted OS KeyStore with automated token refresh before expiration.",
      highlights: ["Authorization Code Flow with PKCE", "Client Credentials & Bearer tokens", "Hardware-backed KeyStore encryption"]
    },
    {
      colSpan: "lg:col-span-6",
      icon: "📜",
      iconBg: "rgba(255,69,58,0.12)",
      iconBorder: "rgba(255,69,58,0.25)",
      badge: { text: "AUTOMATION", style: "bg-[rgba(255,69,58,0.12)] text-[#FF453A] border-[rgba(255,69,58,0.25)]" },
      title: "QuickJS Script Sandbox (pm.*) & CSV Runner",
      description: "Write pre and post-request JavaScript in an isolated QuickJS sandbox. Generate nonces, compute SHA-256 hashes, set environment variables, and run multi-iteration CSV data-driven test suites.",
      highlights: ["Full pm.environment & pm.variables facade", "CSV file upload for data-driven iterations", "Stop-on-failure & chained variable passing"]
    },
    {
      colSpan: "lg:col-span-6",
      icon: "🛰️",
      iconBg: "rgba(10,132,255,0.12)",
      iconBorder: "rgba(10,132,255,0.25)",
      badge: { text: "DEVOPS TOOLS", style: "bg-[rgba(10,132,255,0.12)] text-[#0A84FF] border-[rgba(10,132,255,0.25)]" },
      title: "Scheduled Monitors & Local Mock Server",
      description: "Run persistent background API health checks with Android WorkManager that survive app termination and device reboot. Spin up a local HTTP mock server right on your phone.",
      highlights: ["15m to 24h background check intervals", "Transition-only push alerts (zero spam)", "Embedded 127.0.0.1 HTTP mock server with route rules"]
    }
  ];

  return (
    <section id="features" className="bg-black py-[70px] md:py-[120px] relative">
      <div className="max-w-[1180px] w-full mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="font-jetbrains font-semibold text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-3">
            COMPREHENSIVE WORKBENCH
          </div>
          <h2 className="font-outfit font-bold text-[32px] md:text-[48px] text-taho-primary tracking-tight leading-[1.15]">
            Everything Postman Does on Desktop.<br />
            Plus On-Device Security Auditing.
          </h2>
          <p className="font-outfit text-[16px] md:text-[18px] text-taho-secondary mt-4 leading-relaxed">
            Built from scratch for mobile touchscreens. Every feature optimized for 60 FPS performance without cloud lock-in.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoFeatures.map((f, i) => (
            <div 
              key={i} 
              className={`${f.colSpan} bg-surface-1 border border-card-border rounded-[20px] p-7 md:p-8 hover:border-card-border-hover transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] border transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: f.iconBg, borderColor: f.iconBorder }}
                  >
                    {f.icon}
                  </div>
                  <span className={`border font-jetbrains text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${f.badge.style}`}>
                    {f.badge.text}
                  </span>
                </div>

                <h3 className="font-outfit font-bold text-[20px] md:text-[22px] text-taho-primary leading-snug">
                  {f.title}
                </h3>
                <p className="font-outfit text-[14px] md:text-[15px] text-taho-secondary leading-[1.65] mt-3">
                  {f.description}
                </p>
              </div>

              {/* Feature Highlights List */}
              <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.05)] space-y-2">
                {f.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-outfit text-[13px] text-taho-primary">
                    <span className="text-taho-gold font-bold">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
