import { useState } from "react";

export const ResponseInspectorSection = () => {
  const [activeTab, setActiveTab] = useState<"diagnose" | "body" | "preview" | "headers" | "timeline" | "security" | "jwt" | "tests">("security");
  const [bodyMode, setBodyMode] = useState<"pretty" | "tree" | "schema" | "raw">("pretty");
  const [treeExpanded, setTreeExpanded] = useState<{ [k: string]: boolean }>({ user: true, permissions: true, roles: false });
  const [copiedHeader, setCopiedHeader] = useState<string | null>(null);

  const copyHeader = (val: string) => {
    setCopiedHeader(val);
    setTimeout(() => setCopiedHeader(null), 1800);
  };

  const toggleNode = (k: string) => {
    setTreeExpanded(prev => ({ ...prev, [k]: !prev[k] }));
  };

  return (
    <section id="security" className="bg-surface-1 py-[70px] md:py-[120px] border-t border-b border-card-border relative">
      <div className="max-w-[1180px] w-full mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-taho-gold-dim border border-taho-gold-border text-taho-gold font-jetbrains font-semibold text-[11px] uppercase tracking-[0.2em] px-[14px] py-[5px] rounded-full mb-3">
            INTERACTIVE WORKBENCH
          </div>
          <h2 className="font-outfit font-bold text-[32px] md:text-[48px] text-taho-primary tracking-tight leading-[1.15]">
            The 8-Tab Response Diagnostics Engine
          </h2>
          <p className="font-outfit text-[16px] md:text-[18px] text-taho-secondary mt-3 leading-relaxed">
            Click across all 8 inspection tabs below to experience how Taho breaks down API health, security flaws, network waterfalls, and JWT claims.
          </p>
        </div>

        {/* Big Interactive Inspector Workbench Card */}
        <div className="bg-black border-2 border-card-border hover:border-[rgba(201,146,42,0.3)] rounded-[24px] shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Workbench Top Status Bar */}
          <div className="bg-[#0A0D14] border-b border-[rgba(255,255,255,0.08)] p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-3">
              <span className="bg-taho-green-bg text-taho-green border border-[rgba(46,204,113,0.3)] font-jetbrains font-extrabold px-3 py-1 rounded-lg text-[13px]">
                200 OK
              </span>
              <span className="text-taho-primary font-jetbrains text-[13px] font-semibold">
                POST https://api.enterprise.in/v2/auth/verify
              </span>
              <span className="bg-surface-2 text-taho-secondary font-jetbrains text-[12px] px-2.5 py-0.5 rounded">
                142 ms
              </span>
              <span className="bg-surface-2 text-taho-secondary font-jetbrains text-[12px] px-2.5 py-0.5 rounded">
                1.84 KB
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-taho-gold-dim border border-taho-gold-border text-taho-gold font-jetbrains font-bold px-3 py-1 rounded-lg text-[12px] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-taho-gold animate-pulse" />
                <span>OWASP GRADE: A (96/100)</span>
              </div>
            </div>
          </div>

          {/* 8 Subtabs Header Navigation Bar */}
          <div className="bg-[#07090E] border-b border-[rgba(255,255,255,0.06)] px-4 sm:px-6 flex gap-2 overflow-x-auto no-scrollbar">
            {[
              { id: "diagnose", label: "DIAGNOSE", icon: "🩺" },
              { id: "body", label: "BODY", icon: "📄" },
              { id: "preview", label: "PREVIEW", icon: "👁️" },
              { id: "headers", label: "HEADERS", icon: "📋" },
              { id: "timeline", label: "TIMELINE", icon: "⏱️" },
              { id: "security", label: "SECURITY (A)", icon: "🛡️" },
              { id: "jwt", label: "JWT", icon: "🔑" },
              { id: "tests", label: "TESTS", icon: "🧪" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3.5 px-4 font-jetbrains font-bold text-[12px] sm:text-[13px] flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-taho-gold text-taho-gold bg-taho-gold-dim/20"
                    : "border-transparent text-taho-secondary hover:text-taho-primary hover:bg-surface-2/40"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Tab Viewport */}
          <div className="p-6 sm:p-8 min-h-[380px] bg-[#0A0D14]">
            
            {/* 1. DIAGNOSE VIEW */}
            {activeTab === "diagnose" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in font-outfit">
                <div className="bg-surface-2 border border-card-border rounded-xl p-5 space-y-2">
                  <div className="font-jetbrains text-[11px] text-taho-gold uppercase tracking-wider font-bold">STABILITY INDEX</div>
                  <div className="text-[32px] font-extrabold text-taho-primary">94 <span className="text-[14px] text-taho-green">/ 100</span></div>
                  <p className="text-[13px] text-taho-secondary">Zero packet drops, consistent TTL, robust keep-alive header connection.</p>
                </div>
                <div className="bg-surface-2 border border-card-border rounded-xl p-5 space-y-2">
                  <div className="font-jetbrains text-[11px] text-taho-green uppercase tracking-wider font-bold">LATENCY CLASSIFICATION</div>
                  <div className="text-[32px] font-extrabold text-taho-green">142 ms</div>
                  <p className="text-[13px] text-taho-secondary">Classified as Fast (&lt;200ms). TTFB of 60ms represents 42% of total transfer.</p>
                </div>
                <div className="bg-surface-2 border border-card-border rounded-xl p-5 space-y-2">
                  <div className="font-jetbrains text-[11px] text-[#64D2FF] uppercase tracking-wider font-bold">PAYLOAD INTEGRITY</div>
                  <div className="text-[32px] font-extrabold text-[#64D2FF]">GZIP 78%</div>
                  <p className="text-[13px] text-taho-secondary">Compression saved 6.2 KB over wire. JSON UTF-8 encoding valid without anomalies.</p>
                </div>
              </div>
            )}

            {/* 2. BODY VIEW */}
            {activeTab === "body" && (
              <div className="space-y-4 animate-fade-in font-jetbrains">
                {/* View Mode Switcher */}
                <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-[rgba(255,255,255,0.06)]">
                  <div className="flex gap-2">
                    {(["pretty", "tree", "schema", "raw"] as const).map(mode => (
                      <button
                        key={mode}
                        onClick={() => setBodyMode(mode)}
                        className={`px-3 py-1 rounded-lg text-[11px] uppercase font-bold transition-all cursor-pointer ${
                          bodyMode === mode ? "bg-taho-gold text-black" : "bg-surface-2 text-taho-secondary hover:text-taho-primary"
                        }`}
                      >
                        {mode} View
                      </button>
                    ))}
                  </div>
                  <span className="text-[12px] text-taho-muted">JSON · 1840 Bytes · 42 Lines</span>
                </div>

                {bodyMode === "pretty" && (
                  <div className="bg-surface-2 border border-card-border rounded-xl p-5 font-mono text-[13px] leading-relaxed text-[#888] overflow-x-auto">
                    {"{"}<br />
                    &nbsp;&nbsp;<span className="text-[#7EB8F7]">"status"</span>: <span className="text-taho-green">"success"</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#7EB8F7]">"timestamp"</span>: <span className="text-taho-gold">"2026-08-26T22:30:00Z"</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#7EB8F7]">"user"</span>: {"{"}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"id"</span>: <span className="text-taho-gold">99214</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"name"</span>: <span className="text-taho-green">"Vivek Sagar"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"email"</span>: <span className="text-taho-green">"dev@taho.in"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"roles"</span>: [<span className="text-taho-amber">"admin"</span>, <span className="text-taho-amber">"security_auditor"</span>],<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"tier"</span>: <span className="text-taho-gold">"Pro"</span><br />
                    &nbsp;&nbsp;{"}"},<br />
                    &nbsp;&nbsp;<span className="text-[#7EB8F7]">"security_audit"</span>: {"{"}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"passed"</span>: <span className="text-taho-gold">true</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"grade"</span>: <span className="text-taho-green">"A"</span><br />
                    &nbsp;&nbsp;{"}"}<br />
                    {"}"}
                  </div>
                )}

                {bodyMode === "tree" && (
                  <div className="bg-surface-2 border border-card-border rounded-xl p-5 font-mono text-[13px] space-y-2">
                    <div className="text-taho-muted">▼ Root (Object) 4 keys</div>
                    <div className="pl-4 text-taho-secondary">status: <span className="text-taho-green">"success"</span></div>
                    <div className="pl-4 text-taho-secondary">timestamp: <span className="text-taho-gold">"2026-08-26T22:30:00Z"</span></div>
                    <div 
                      onClick={() => toggleNode("user")}
                      className="pl-4 text-taho-gold cursor-pointer hover:underline font-bold"
                    >
                      {treeExpanded.user ? "▼" : "▶"} user: (Object) 5 keys [click to toggle]
                    </div>
                    {treeExpanded.user && (
                      <div className="pl-8 space-y-1 border-l border-card-border my-1">
                        <div>id: <span className="text-taho-gold">99214</span></div>
                        <div>name: <span className="text-taho-green">"Vivek Sagar"</span></div>
                        <div>email: <span className="text-taho-green">"dev@taho.in"</span></div>
                        <div>roles: (Array) ["admin", "security_auditor"]</div>
                        <div>tier: <span className="text-taho-gold">"Pro"</span></div>
                      </div>
                    )}
                    <div className="pl-4 text-taho-secondary">security_audit: (Object) 2 keys</div>
                  </div>
                )}

                {bodyMode === "schema" && (
                  <div className="bg-surface-2 border border-card-border rounded-xl p-5 font-mono text-[12px] text-taho-secondary leading-relaxed whitespace-pre-wrap">
{`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "status": { "type": "string" },
    "user": { "type": "object", "required": ["id", "email", "roles"] }
  }
}`}
                  </div>
                )}

                {bodyMode === "raw" && (
                  <div className="bg-surface-2 border border-card-border rounded-xl p-5 font-mono text-[12px] text-taho-secondary break-all">
                    {`{"status":"success","timestamp":"2026-08-26T22:30:00Z","user":{"id":99214,"name":"Vivek Sagar","email":"dev@taho.in","roles":["admin","security_auditor"],"tier":"Pro"},"security_audit":{"passed":true,"grade":"A"}}`}
                  </div>
                )}
              </div>
            )}

            {/* 3. PREVIEW VIEW */}
            {activeTab === "preview" && (
              <div className="bg-surface-2 border border-card-border rounded-2xl p-8 text-center space-y-4 animate-fade-in max-w-[500px] mx-auto">
                <div className="w-16 h-16 rounded-full bg-taho-green-bg border border-taho-green flex items-center justify-center mx-auto text-[28px]">
                  ✓
                </div>
                <h3 className="font-outfit font-bold text-[20px] text-taho-primary">Endpoint Response Preview</h3>
                <p className="font-outfit text-[14px] text-taho-secondary leading-relaxed">
                  Taho features context-aware sandboxed HTML webviews, raster image viewers (PNG, WebP), SVGs, and inline PDF page rendering directly on Android.
                </p>
              </div>
            )}

            {/* 4. HEADERS VIEW */}
            {activeTab === "headers" && (
              <div className="space-y-2 animate-fade-in font-jetbrains text-[12px]">
                {[
                  { k: "content-type", v: "application/json; charset=utf-8", desc: "Standard JSON payload encoding" },
                  { k: "strict-transport-security", v: "max-age=31536000; includeSubDomains; preload", desc: "HSTS Enforced (1 year)" },
                  { k: "content-security-policy", v: "default-src self; script-src self", desc: "Strict Content Security Policy" },
                  { k: "x-frame-options", v: "DENY", desc: "Clickjacking attack defense active" },
                  { k: "x-content-type-options", v: "nosniff", desc: "MIME-sniffing prevention enforced" },
                  { k: "referrer-policy", v: "strict-origin-when-cross-origin", desc: "Referrer leakage protection" },
                  { k: "server", v: "cloudflare", desc: "Server header disclosure safe" },
                ].map(h => (
                  <div 
                    key={h.k}
                    onClick={() => copyHeader(h.v)}
                    className="bg-surface-2 border border-card-border rounded-xl p-3.5 flex items-center justify-between hover:border-taho-gold transition-colors cursor-pointer group"
                  >
                    <div>
                      <div className="font-bold text-taho-gold">{h.k}</div>
                      <div className="text-taho-primary text-[11.5px] mt-0.5">{h.v}</div>
                      <div className="text-taho-muted text-[10px] mt-0.5">{h.desc}</div>
                    </div>
                    <span className="font-jetbrains text-[10px] bg-surface-3 px-2.5 py-1 rounded text-taho-secondary group-hover:text-taho-gold">
                      {copiedHeader === h.v ? "COPIED ✓" : "COPY"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* 5. TIMELINE WATERFALL VIEW */}
            {activeTab === "timeline" && (
              <div className="space-y-6 animate-fade-in font-jetbrains">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-[14px] text-taho-primary">Total Network Roundtrip: 142 ms</div>
                  <div className="text-[12px] text-taho-muted">Measured on live Android HTTP socket</div>
                </div>

                {/* Big Visual Waterfall Bar */}
                <div className="h-6 w-full bg-surface-3 rounded-xl flex overflow-hidden p-1 gap-1">
                  <div style={{ width: "10%" }} className="bg-[#0A84FF] rounded-lg" title="DNS 14ms" />
                  <div style={{ width: "18%" }} className="bg-[#64D2FF] rounded-lg" title="TCP 26ms" />
                  <div style={{ width: "25%" }} className="bg-[#BF5AF2] rounded-lg" title="TLS 36ms" />
                  <div style={{ width: "42%" }} className="bg-[#FFD60A] rounded-lg" title="TTFB 60ms" />
                  <div style={{ width: "5%" }} className="bg-[#30D158] rounded-lg" title="Download 6ms" />
                </div>

                {/* Waterfall Phase Breakdown Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-[12px]">
                  <div className="bg-surface-2 border border-card-border p-3.5 rounded-xl">
                    <div className="flex items-center gap-1.5 text-taho-secondary mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#0A84FF]" /> DNS Lookup
                    </div>
                    <div className="text-[18px] font-bold text-taho-primary">14 ms</div>
                  </div>
                  <div className="bg-surface-2 border border-card-border p-3.5 rounded-xl">
                    <div className="flex items-center gap-1.5 text-taho-secondary mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#64D2FF]" /> TCP Connect
                    </div>
                    <div className="text-[18px] font-bold text-taho-primary">26 ms</div>
                  </div>
                  <div className="bg-surface-2 border border-card-border p-3.5 rounded-xl">
                    <div className="flex items-center gap-1.5 text-taho-secondary mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#BF5AF2]" /> TLS Handshake
                    </div>
                    <div className="text-[18px] font-bold text-taho-primary">36 ms</div>
                  </div>
                  <div className="bg-surface-2 border border-card-border p-3.5 rounded-xl">
                    <div className="flex items-center gap-1.5 text-taho-secondary mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#FFD60A]" /> Server TTFB
                    </div>
                    <div className="text-[18px] font-bold text-taho-primary">60 ms</div>
                  </div>
                  <div className="bg-surface-2 border border-card-border p-3.5 rounded-xl">
                    <div className="flex items-center gap-1.5 text-taho-secondary mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#30D158]" /> Content Download
                    </div>
                    <div className="text-[18px] font-bold text-taho-primary">6 ms</div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. SECURITY OWASP AUDIT VIEW */}
            {activeTab === "security" && (
              <div className="space-y-6 animate-fade-in font-outfit">
                <div className="bg-surface-2 border border-[rgba(46,204,113,0.3)] rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="font-jetbrains font-bold text-[12px] text-taho-green uppercase tracking-wider">
                      OWASP API SECURITY POSTURE
                    </div>
                    <div className="text-[28px] font-extrabold text-taho-primary mt-1">
                      Overall Security Rating: <span className="text-taho-green">Grade A (96/100)</span>
                    </div>
                    <p className="text-[14px] text-taho-secondary mt-1">
                      Evaluated against the OWASP API Security Top 10 guidelines directly on-device.
                    </p>
                  </div>
                  <button className="bg-taho-gold text-black font-outfit font-bold text-[13px] px-5 py-2.5 rounded-xl shadow-lg hover:opacity-90 transition-all">
                    Export Executive PDF Report →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-jetbrains text-[12px]">
                  {[
                    { rule: "HTTP Strict Transport Security (HSTS)", status: "PASSED", detail: "max-age=31536000 enforced with subdomains" },
                    { rule: "Content Security Policy (CSP)", status: "PASSED", detail: "default-src self prevents malicious injections" },
                    { rule: "X-Frame-Options Clickjacking Defense", status: "PASSED", detail: "DENY prevents unauthorized iframe framing" },
                    { rule: "Cookie Flags (Secure, HttpOnly, SameSite)", status: "PASSED", detail: "All session cookies protected against XSS & CSRF" },
                    { rule: "X-Content-Type-Options: nosniff", status: "PASSED", detail: "MIME sniffing exploits blocked" },
                    { rule: "Server Information Disclosure", status: "PASSED", detail: "No sensitive internal runtime versions leaked" },
                  ].map((chk, idx) => (
                    <div key={idx} className="bg-surface-2 border border-card-border p-4 rounded-xl space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-taho-primary">{chk.rule}</span>
                        <span className="bg-taho-green-bg text-taho-green font-bold text-[10px] px-2 py-0.5 rounded">✓ {chk.status}</span>
                      </div>
                      <div className="text-taho-secondary text-[11px]">{chk.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. JWT DECODER VIEW */}
            {activeTab === "jwt" && (
              <div className="space-y-4 animate-fade-in font-jetbrains text-[12.5px]">
                <div className="bg-surface-2 border border-[rgba(100,210,255,0.3)] rounded-2xl p-5 flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <span className="text-[#64D2FF] font-bold text-[14px]">RS256 JWT Token Detected in Authorization Header</span>
                    <div className="text-taho-secondary text-[11.5px] mt-1">Automatic verification & claim extraction</div>
                  </div>
                  <span className="bg-taho-green-bg text-taho-green font-bold px-3 py-1 rounded-lg text-[11px]">
                    VALID (Expires in 48 minutes)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-surface-2 border border-card-border p-5 rounded-xl space-y-2">
                    <div className="text-taho-gold font-bold text-[11px] uppercase tracking-wider">Header (JOSE)</div>
                    <div className="text-[#888] font-mono leading-relaxed text-[12px]">
                      {"{"}<br />
                      &nbsp;&nbsp;<span className="text-[#7EB8F7]">"alg"</span>: <span className="text-taho-gold">"RS256"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#7EB8F7]">"typ"</span>: <span className="text-taho-green">"JWT"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#7EB8F7]">"kid"</span>: <span className="text-taho-amber">"auth-key-2026-v1"</span><br />
                      {"}"}
                    </div>
                  </div>

                  <div className="bg-surface-2 border border-card-border p-5 rounded-xl space-y-2">
                    <div className="text-taho-gold font-bold text-[11px] uppercase tracking-wider">Payload Claims</div>
                    <div className="text-[#888] font-mono leading-relaxed text-[12px]">
                      {"{"}<br />
                      &nbsp;&nbsp;<span className="text-[#7EB8F7]">"sub"</span>: <span className="text-taho-green">"usr_99214"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#7EB8F7]">"email"</span>: <span className="text-taho-green">"dev@taho.in"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#7EB8F7]">"role"</span>: <span className="text-taho-amber">"admin"</span>,<br />
                      &nbsp;&nbsp;<span className="text-[#7EB8F7]">"exp"</span>: <span className="text-taho-gold">1787702400 (48m left)</span><br />
                      {"}"}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. TESTS VIEW */}
            {activeTab === "tests" && (
              <div className="space-y-4 animate-fade-in font-jetbrains text-[13px]">
                <div className="bg-surface-2 border border-card-border rounded-xl p-4 flex justify-between items-center">
                  <div className="font-bold text-taho-gold">Automated QA Assertion Results</div>
                  <div className="text-taho-green font-bold bg-taho-green-bg px-2.5 py-0.5 rounded text-[11px]">3 of 3 Passed (100%)</div>
                </div>

                <div className="space-y-2.5">
                  {[
                    { target: "StatusCode", op: "equals", expected: "200", actual: "200", status: "PASSED", time: "1ms" },
                    { target: "ResponseTime", op: "lessThan", expected: "300 ms", actual: "142 ms", status: "PASSED", time: "1ms" },
                    { target: "BodyJson (user.roles)", op: "contains", expected: "admin", actual: "[admin, security_auditor]", status: "PASSED", time: "2ms" },
                  ].map((t, idx) => (
                    <div key={idx} className="bg-surface-2 border border-card-border rounded-xl p-4 flex items-center justify-between flex-wrap gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-taho-green font-bold">✓</span>
                          <span className="text-taho-primary font-bold">{t.target} {t.op} {t.expected}</span>
                        </div>
                        <div className="text-[11.5px] text-taho-secondary pl-5">Actual: {t.actual}</div>
                      </div>
                      <span className="bg-taho-green-bg text-taho-green font-bold text-[11px] px-2.5 py-1 rounded">
                        {t.status} ({t.time})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
