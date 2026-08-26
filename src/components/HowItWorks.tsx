export const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Smart Import or Craft",
      description: "Paste a cURL command, OpenAPI/Swagger JSON, Postman v2.1 collection, or HAR 1.2 archive. Taho instantly populates methods, headers, parameters, and variable templates."
    },
    {
      num: "02",
      title: "Execute, Stream & Script",
      description: "Send HTTP requests across 15 methods, open live WebSocket channels, publish to MQTT brokers, or run pre-request JavaScript in QuickJS to sign payloads with HMAC nonces."
    },
    {
      num: "03",
      title: "Automate, Audit & Monitor",
      description: "Inspect live OWASP security posture grades (A to F), run automated CSV collections, decode JWT claims, or schedule WorkManager background monitors that alert on failures."
    }
  ];

  return (
    <section id="protocols" className="bg-surface-1 py-[70px] md:py-[110px] border-t border-card-border">
      <div className="max-w-[1180px] w-full mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <div className="font-jetbrains font-semibold text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-3">
            SEAMLESS WORKFLOW
          </div>
          <h2 className="font-outfit font-bold text-[30px] md:text-[46px] text-taho-primary tracking-tight leading-[1.15]">
            How Taho Accelerates Your API Development
          </h2>
          <p className="font-outfit text-[16px] md:text-[18px] text-taho-secondary mt-4 leading-relaxed">
            From quick debugging on your phone to automated background API reliability checks.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className="bg-surface-2 border border-card-border rounded-[20px] p-8 relative flex flex-col justify-between hover:border-card-border-hover transition-all duration-300 group"
            >
              <div>
                <div className="font-jetbrains font-extrabold text-[36px] text-taho-gold/30 group-hover:text-taho-gold transition-colors duration-300 leading-none mb-6">
                  {s.num}
                </div>
                <h3 className="font-outfit font-bold text-[20px] text-taho-primary mb-3">
                  {s.title}
                </h3>
                <p className="font-outfit text-[14px] md:text-[15px] text-taho-secondary leading-[1.65]">
                  {s.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(255,255,255,0.05)] font-jetbrains text-[11px] text-taho-gold flex items-center gap-1.5">
                <span>Zero friction setup</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
