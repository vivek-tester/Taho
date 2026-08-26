import { PhoneMockup } from "./PhoneMockup";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-black pt-[100px] pb-[60px] md:pt-[120px] md:pb-[80px] flex items-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[rgba(201,146,42,0.08)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[rgba(10,132,255,0.06)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1180px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Copy & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 bg-taho-gold-dim border border-taho-gold-border text-taho-gold font-jetbrains font-semibold text-[11px] uppercase tracking-[0.18em] px-[14px] py-[6px] rounded-full mb-6 shadow-[0_0_15px_rgba(201,146,42,0.15)]">
            <span className="w-2 h-2 rounded-full bg-taho-gold animate-pulse" />
            INDUS APPSTORE LAUNCH EDITION · 100% OFFLINE-FIRST
          </div>
          
          <h1 className="font-outfit font-extrabold text-[36px] sm:text-[48px] md:text-[60px] leading-[1.08] tracking-[-0.03em] text-taho-primary">
            Desktop-Grade API Testing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-taho-gold via-[#FFE27A] to-taho-gold">OWASP Security Audit.</span><br />
            In Your Pocket.
          </h1>
          
          <p className="font-outfit font-normal text-[17px] md:text-[19px] text-taho-secondary max-w-[560px] leading-[1.6] mt-6">
            Execute 15 HTTP methods, stream WebSockets & MQTT, run GraphQL subscriptions, and get an automatic OWASP security grade (A–F) on every API call. Zero telemetry. No account required.
          </p>

          {/* Protocol & Feature Pill Ribbon */}
          <div className="flex flex-wrap gap-2 mt-6 max-w-[560px]">
            <span className="bg-surface-2 border border-card-border px-2.5 py-1 rounded-md font-jetbrains text-[11px] text-[#2ECC71] font-semibold">15 HTTP Methods</span>
            <span className="bg-surface-2 border border-card-border px-2.5 py-1 rounded-md font-jetbrains text-[11px] text-[#BF5AF2] font-semibold">WebSocket & MQTT</span>
            <span className="bg-surface-2 border border-card-border px-2.5 py-1 rounded-md font-jetbrains text-[11px] text-[#64D2FF] font-semibold">GraphQL Docs & Subs</span>
            <span className="bg-surface-2 border border-card-border px-2.5 py-1 rounded-md font-jetbrains text-[11px] text-[#FFD60A] font-semibold">OAuth 2.1 PKCE</span>
            <span className="bg-surface-2 border border-card-border px-2.5 py-1 rounded-md font-jetbrains text-[11px] text-[#FF453A] font-semibold">QuickJS Sandbox</span>
            <span className="bg-surface-2 border border-card-border px-2.5 py-1 rounded-md font-jetbrains text-[11px] text-[#30D158] font-semibold">Local Mock Server</span>
          </div>
          
          {/* Main Action Buttons */}
          <div id="download" className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.indusappstore.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-taho-gold text-black font-outfit font-bold text-[15px] px-8 h-[54px] rounded-[12px] flex items-center justify-center gap-2.5 hover:opacity-90 transition-all shadow-[0_0_30px_rgba(201,146,42,0.35)] hover:scale-[1.02]"
            >
              <span>🇮🇳</span>
              <span>Get on Indus Appstore</span>
            </a>
            <a 
              href="#features" 
              className="bg-surface-2 border border-card-border text-taho-primary font-outfit font-semibold text-[15px] px-6 h-[54px] rounded-[12px] flex items-center justify-center hover:border-taho-gold transition-all hover:bg-surface-3"
            >
              Explore Features ↓
            </a>
          </div>
          
          {/* Trust Guarantees */}
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 font-jetbrains text-[12px] text-taho-muted">
            <span className="flex items-center gap-1.5 text-taho-secondary">
              <span className="text-taho-green">✓</span> Free Forever Core
            </span>
            <span className="flex items-center gap-1.5 text-taho-secondary">
              <span className="text-taho-green">✓</span> Zero Telemetry / No Tracking
            </span>
            <span className="flex items-center gap-1.5 text-taho-secondary">
              <span className="text-taho-green">✓</span> Hardware-Encrypted Vault
            </span>
          </div>
        </div>
        
        {/* Right Column: Interactive Phone Simulator (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};
