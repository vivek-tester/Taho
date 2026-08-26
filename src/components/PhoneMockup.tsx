import { useState } from "react";
import { Logo } from "./Logo";

export const PhoneMockup = () => {
  const [rootTab, setRootTab] = useState<"request" | "response" | "collect" | "history" | "settings">("response");
  const [respSubtab, setRespSubtab] = useState<"diagnose" | "body" | "preview" | "headers" | "timeline" | "security" | "jwt" | "tests">("security");
  const [bodyMode, setBodyMode] = useState<"pretty" | "tree" | "schema" | "raw">("pretty");
  const [treeExpanded, setTreeExpanded] = useState<{ [key: string]: boolean }>({ user: true, permissions: true });
  const [method, setMethod] = useState("GET");
  const [isSending, setIsSending] = useState(false);
  const [copiedHeader, setCopiedHeader] = useState<string | null>(null);

  const triggerSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setRootTab("response");
      setRespSubtab("security");
    }, 500);
  };

  const copyHeader = (val: string) => {
    setCopiedHeader(val);
    setTimeout(() => setCopiedHeader(null), 1500);
  };

  const toggleTreeNode = (node: string) => {
    setTreeExpanded(prev => ({ ...prev, [node]: !prev[node] }));
  };

  return (
    <div className="w-[310px] sm:w-[340px] h-[660px] bg-[#0E131F] rounded-[48px] border-[2.5px] border-[#222E42] shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(201,146,42,0.18)] relative animate-float flex flex-col p-[10px] select-none">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-b-[16px] z-30 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#111] mr-3" />
        <div className="w-2 h-2 rounded-full bg-[#1c2438]" />
      </div>

      {/* Screen Area */}
      <div className="bg-black rounded-[40px] h-full overflow-hidden flex flex-col relative w-full border border-[rgba(255,255,255,0.06)]">
        
        {/* Status Bar */}
        <div className="px-5 pt-7 pb-1.5 flex justify-between tracking-wide font-outfit font-semibold text-[11px] text-taho-primary bg-[#0A0D14]">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-taho-gold font-jetbrains">5G</span>
            <div className="w-[18px] h-[9px] border border-taho-primary rounded-[3px] p-[1px]">
              <div className="w-full h-full bg-taho-primary rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Top App Header */}
        <div className="px-3.5 py-1.5 flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] bg-[#0A0D14]">
          <div className="flex items-center gap-2">
            <Logo className="w-4 h-4" />
            <span className="font-outfit font-bold text-[14px] text-taho-primary">Taho</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#30D158]" />
            <span className="bg-taho-gold-dim border border-taho-gold-border rounded-full px-2 py-0.5 font-jetbrains font-semibold text-[8.5px] text-taho-gold uppercase tracking-wider">
              Production
            </span>
          </div>
        </div>

        {/* Main View Area */}
        <div className="flex-1 overflow-y-auto flex flex-col bg-[#080B11]">
          
          {/* ================= TAB 0: REQUEST ================= */}
          {rootTab === "request" && (
            <div className="p-3 space-y-3 animate-fade-in font-jetbrains text-[10.5px]">
              {/* Method Selector & URL Bar */}
              <div className="flex gap-1.5">
                <select 
                  value={method}
                  onChange={e => setMethod(e.target.value)}
                  className="bg-[#182030] text-[#2ECC71] border border-[rgba(46,204,113,0.3)] rounded-lg px-2 py-1 font-bold text-[10px] outline-none"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                  <option value="WS">WS</option>
                </select>
                <div className="flex-1 bg-[#111622] border border-[rgba(255,255,255,0.08)] rounded-lg px-2 py-1 text-taho-primary truncate text-[10px] flex items-center">
                  api.<span className="text-taho-gold">{"{{base_url}}"}</span>/v1/auth/user
                </div>
              </div>

              {/* Action Buttons: Code, Reset, SEND */}
              <div className="flex gap-1.5">
                <button className="bg-surface-2 border border-card-border px-2.5 py-1 rounded-lg text-taho-secondary text-[9px] hover:text-taho-primary">
                  &lt;/&gt; Code
                </button>
                <button className="bg-surface-2 border border-card-border px-2.5 py-1 rounded-lg text-taho-secondary text-[9px] hover:text-taho-primary">
                  ↺ Reset
                </button>
                <button
                  onClick={triggerSend}
                  disabled={isSending}
                  className="flex-1 bg-taho-gold text-black font-outfit font-bold text-[12px] py-1.5 rounded-lg flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  {isSending ? "Sending..." : "SEND REQUEST"}
                </button>
              </div>

              {/* Composer Subtabs: Params, Headers, Body, Auth */}
              <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-2">
                <div className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-1.5 text-[9px] text-taho-muted">
                  <span className="text-taho-gold font-bold">HEADERS (3)</span>
                  <span>PARAMS</span>
                  <span>BODY (JSON)</span>
                  <span>AUTH (PKCE)</span>
                </div>
                <div className="space-y-1 text-[9.5px]">
                  <div className="text-taho-secondary truncate">Authorization: Bearer <span className="text-taho-gold">{"{{vault.jwt}}"}</span></div>
                  <div className="text-taho-secondary truncate">Content-Type: application/json</div>
                  <div className="text-taho-secondary truncate">X-Device-Platform: Android-14</div>
                </div>
              </div>

              {/* JSON Payload preview */}
              <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-1 text-[9.5px]">
                <div className="text-taho-muted text-[8.5px] uppercase tracking-wider font-semibold">Body (JSON)</div>
                <div className="text-[#888] font-mono leading-relaxed text-[9.5px]">
                  {"{"}<br />
                  &nbsp;&nbsp;<span className="text-[#7EB8F7]">"audit_mode"</span>: <span className="text-taho-gold">true</span>,<br />
                  &nbsp;&nbsp;<span className="text-[#7EB8F7]">"client"</span>: <span className="text-taho-green">"Taho-Android"</span><br />
                  {"}"}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 1: RESPONSE (8 SUBTABS) ================= */}
          {rootTab === "response" && (
            <div className="flex-1 flex flex-col">
              
              {/* Response Status Banner */}
              <div className="p-2.5 bg-[#0D1424] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-taho-green-bg text-taho-green font-jetbrains font-bold px-1.5 py-0.5 rounded text-[10px]">200 OK</span>
                  <span className="text-taho-secondary font-jetbrains text-[10px]">142ms</span>
                  <span className="text-taho-muted font-jetbrains text-[10px]">1.8 KB</span>
                </div>
                <div className="bg-taho-gold text-black rounded-lg px-2 py-0.5 text-center leading-none flex items-center gap-1">
                  <span className="font-extrabold text-[12px]">GRADE A</span>
                  <span className="text-[8px] font-bold">96/100</span>
                </div>
              </div>

              {/* 8 Response Subtabs Carousel / Horizontal Scroll */}
              <div className="bg-[#090C12] border-b border-[rgba(255,255,255,0.06)] px-2 py-1 flex gap-1 overflow-x-auto no-scrollbar">
                {[
                  { id: "diagnose", label: "DIAGNOSE" },
                  { id: "body", label: "BODY" },
                  { id: "preview", label: "PREVIEW" },
                  { id: "headers", label: "HEADERS" },
                  { id: "timeline", label: "TIMELINE" },
                  { id: "security", label: "SECURITY" },
                  { id: "jwt", label: "JWT" },
                  { id: "tests", label: "TESTS" },
                ].map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => setRespSubtab(sub.id as any)}
                    className={`px-2 py-1 text-[8.5px] font-jetbrains font-bold rounded-md shrink-0 transition-all cursor-pointer ${
                      respSubtab === sub.id
                        ? "bg-taho-gold text-black shadow-sm"
                        : "text-taho-secondary hover:text-taho-primary bg-[#121824]"
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>

              {/* Response Subtab Content */}
              <div className="flex-1 p-2.5 overflow-y-auto font-jetbrains text-[10px] space-y-2">
                
                {/* 1. DIAGNOSE SUBTAB */}
                {respSubtab === "diagnose" && (
                  <div className="space-y-2 animate-fade-in">
                    <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-1.5">
                      <div className="text-taho-gold font-bold text-[10px] flex justify-between">
                        <span>HEALTH SCORE</span>
                        <span className="text-taho-green">94 / 100 (EXCELLENT)</span>
                      </div>
                      <div className="text-taho-secondary text-[9px]">
                        Latency: <span className="text-taho-green">142ms (Fast &lt;200ms)</span>
                      </div>
                      <div className="text-taho-secondary text-[9px]">
                        Compression: <span className="text-taho-green">GZIP (78% savings)</span>
                      </div>
                      <div className="text-taho-secondary text-[9px]">
                        Cache: <span className="text-taho-amber">max-age=300 (Private)</span>
                      </div>
                    </div>
                    <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-1 text-[9px]">
                      <div className="text-[#64D2FF] font-bold">DIAGNOSTIC ANOMALIES</div>
                      <div className="text-taho-secondary">✓ Zero payload truncation detected</div>
                      <div className="text-taho-secondary">✓ Content-Type matches wire structure</div>
                    </div>
                  </div>
                )}

                {/* 2. BODY SUBTAB */}
                {respSubtab === "body" && (
                  <div className="space-y-2 animate-fade-in">
                    {/* View mode cycler: Pretty, Tree, Schema, Raw */}
                    <div className="flex gap-1 bg-[#121824] p-1 rounded-lg">
                      {(["pretty", "tree", "schema", "raw"] as const).map(mode => (
                        <button
                          key={mode}
                          onClick={() => setBodyMode(mode)}
                          className={`flex-1 py-0.5 text-[8.5px] uppercase font-bold rounded ${
                            bodyMode === mode ? "bg-taho-gold text-black" : "text-taho-secondary"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>

                    {bodyMode === "pretty" && (
                      <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 font-mono text-[9px] leading-relaxed text-[#888]">
                        {"{"}<br />
                        &nbsp;&nbsp;<span className="text-[#7EB8F7]">"status"</span>: <span className="text-taho-green">"success"</span>,<br />
                        &nbsp;&nbsp;<span className="text-[#7EB8F7]">"user"</span>: {"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"id"</span>: <span className="text-taho-gold">99214</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"email"</span>: <span className="text-taho-green">"dev@taho.in"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EB8F7]">"role"</span>: <span className="text-taho-amber">"admin"</span><br />
                        &nbsp;&nbsp;{"}"},<br />
                        &nbsp;&nbsp;<span className="text-[#7EB8F7]">"verified"</span>: <span className="text-taho-gold">true</span><br />
                        {"}"}
                      </div>
                    )}

                    {bodyMode === "tree" && (
                      <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2 font-mono text-[9px] space-y-1">
                        <div className="text-taho-muted">▼ (Object) 3 keys</div>
                        <div className="pl-2 text-taho-secondary">status: <span className="text-taho-green">"success"</span></div>
                        <div 
                          onClick={() => toggleTreeNode("user")}
                          className="pl-2 text-taho-gold cursor-pointer hover:underline"
                        >
                          {treeExpanded.user ? "▼" : "▶"} user: (Object) 3 keys
                        </div>
                        {treeExpanded.user && (
                          <div className="pl-4 space-y-0.5 border-l border-card-border">
                            <div>id: <span className="text-taho-gold">99214</span></div>
                            <div>email: <span className="text-taho-green">"dev@taho.in"</span></div>
                            <div>role: <span className="text-taho-amber">"admin"</span></div>
                          </div>
                        )}
                        <div className="pl-2 text-taho-secondary">verified: <span className="text-taho-gold">true</span></div>
                      </div>
                    )}

                    {bodyMode === "schema" && (
                      <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2 font-mono text-[8.5px] text-[#888]">
                        Draft-07 JSON Schema:<br />
                        <span className="text-taho-gold">type: "object"</span><br />
                        properties: status(string), user(object), verified(boolean)
                      </div>
                    )}

                    {bodyMode === "raw" && (
                      <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2 font-mono text-[8.5px] text-taho-secondary break-all">
                        {`{"status":"success","user":{"id":99214,"email":"dev@taho.in","role":"admin"},"verified":true}`}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. PREVIEW SUBTAB */}
                {respSubtab === "preview" && (
                  <div className="bg-[#0A0D14] border border-card-border rounded-xl p-3 text-center space-y-2 animate-fade-in">
                    <div className="w-10 h-10 rounded-full bg-taho-green-bg border border-taho-green flex items-center justify-center mx-auto text-[18px]">
                      ✓
                    </div>
                    <div className="text-taho-primary font-bold text-[11px]">User Authentication Verified</div>
                    <div className="text-taho-secondary text-[9px]">Rendered in sandboxed mobile webview</div>
                  </div>
                )}

                {/* 4. HEADERS SUBTAB */}
                {respSubtab === "headers" && (
                  <div className="space-y-1.5 animate-fade-in">
                    {[
                      { k: "content-type", v: "application/json; charset=utf-8" },
                      { k: "strict-transport-security", v: "max-age=31536000" },
                      { k: "content-security-policy", v: "default-src self" },
                      { k: "x-frame-options", v: "DENY" },
                      { k: "x-content-type-options", v: "nosniff" },
                      { k: "server", v: "cloudflare" },
                    ].map(h => (
                      <div 
                        key={h.k} 
                        onClick={() => copyHeader(h.v)}
                        className="bg-[#0A0D14] border border-card-border rounded-lg p-1.5 flex justify-between items-center cursor-pointer hover:border-taho-gold transition-colors"
                      >
                        <div className="truncate mr-1">
                          <div className="text-taho-gold font-bold text-[8.5px]">{h.k}</div>
                          <div className="text-taho-secondary text-[8px] truncate">{h.v}</div>
                        </div>
                        <span className="text-[7.5px] text-taho-muted bg-surface-2 px-1 py-0.5 rounded">
                          {copiedHeader === h.v ? "COPIED" : "COPY"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. TIMELINE SUBTAB */}
                {respSubtab === "timeline" && (
                  <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-2 animate-fade-in">
                    <div className="text-taho-gold font-bold text-[9.5px]">NETWORK WATERFALL (142ms)</div>
                    
                    {/* Visual bar */}
                    <div className="h-2 w-full bg-surface-3 rounded-full flex overflow-hidden">
                      <div style={{ width: "10%" }} className="bg-[#0A84FF]" title="DNS" />
                      <div style={{ width: "18%" }} className="bg-[#64D2FF]" title="TCP" />
                      <div style={{ width: "25%" }} className="bg-[#BF5AF2]" title="TLS" />
                      <div style={{ width: "42%" }} className="bg-[#FFD60A]" title="TTFB" />
                      <div style={{ width: "5%" }} className="bg-[#30D158]" title="Download" />
                    </div>

                    <div className="space-y-1 text-[8.5px]">
                      <div className="flex justify-between text-taho-secondary">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]"/> DNS Lookup</span>
                        <span className="text-taho-primary font-bold">14 ms</span>
                      </div>
                      <div className="flex justify-between text-taho-secondary">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#64D2FF]"/> TCP Handshake</span>
                        <span className="text-taho-primary font-bold">26 ms</span>
                      </div>
                      <div className="flex justify-between text-taho-secondary">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#BF5AF2]"/> TLS / SSL Handshake</span>
                        <span className="text-taho-primary font-bold">36 ms</span>
                      </div>
                      <div className="flex justify-between text-taho-secondary">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A]"/> Server TTFB</span>
                        <span className="text-taho-primary font-bold">60 ms</span>
                      </div>
                      <div className="flex justify-between text-taho-secondary">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#30D158]"/> Content Download</span>
                        <span className="text-taho-primary font-bold">6 ms</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. SECURITY SUBTAB */}
                {respSubtab === "security" && (
                  <div className="space-y-1.5 animate-fade-in text-[9px]">
                    <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2 space-y-1">
                      <div className="text-taho-gold font-bold flex justify-between">
                        <span>OWASP AUDIT GRADE</span>
                        <span className="text-taho-green">GRADE A (96/100)</span>
                      </div>
                      <div className="flex items-center gap-1 text-taho-primary">
                        <span className="text-taho-green font-bold">✓</span> HSTS: max-age=31536000 (Safe)
                      </div>
                      <div className="flex items-center gap-1 text-taho-primary">
                        <span className="text-taho-green font-bold">✓</span> CSP: default-src self (Safe)
                      </div>
                      <div className="flex items-center gap-1 text-taho-primary">
                        <span className="text-taho-green font-bold">✓</span> X-Frame-Options: DENY (Clickjacking Safe)
                      </div>
                      <div className="flex items-center gap-1 text-taho-primary">
                        <span className="text-taho-green font-bold">✓</span> Cookie: Secure; HttpOnly; SameSite
                      </div>
                    </div>

                    <button className="w-full bg-taho-gold-dim border border-taho-gold-border text-taho-gold py-1.5 rounded-lg font-outfit font-bold text-[9.5px] hover:bg-taho-gold hover:text-black transition-all">
                      Export Branded PDF Report →
                    </button>
                  </div>
                )}

                {/* 7. JWT SUBTAB */}
                {respSubtab === "jwt" && (
                  <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2 space-y-1.5 animate-fade-in text-[9px]">
                    <div className="text-[#64D2FF] font-bold flex justify-between items-center">
                      <span>JWT TOKEN DECODER</span>
                      <span className="bg-taho-green-bg text-taho-green text-[7.5px] px-1 rounded font-bold">VALID</span>
                    </div>
                    <div className="text-taho-muted text-[8px] uppercase">Header</div>
                    <div className="text-taho-secondary">alg: <span className="text-taho-gold">RS256</span> | typ: JWT</div>
                    <div className="text-taho-muted text-[8px] uppercase pt-1">Claims</div>
                    <div className="text-taho-secondary">sub: <span className="text-taho-primary">usr_99214</span></div>
                    <div className="text-taho-secondary">email: <span className="text-taho-primary">dev@taho.in</span></div>
                    <div className="text-taho-gold">exp: Expires in 48 minutes</div>
                  </div>
                )}

                {/* 8. TESTS SUBTAB */}
                {respSubtab === "tests" && (
                  <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2 space-y-1.5 animate-fade-in text-[9px]">
                    <div className="text-taho-gold font-bold flex justify-between">
                      <span>QA TEST ASSERTIONS</span>
                      <span className="text-taho-green">3/3 PASSED</span>
                    </div>
                    <div className="flex items-center justify-between p-1 bg-surface-2 rounded">
                      <span className="text-taho-primary">StatusCode == 200</span>
                      <span className="text-taho-green font-bold">PASSED ✓</span>
                    </div>
                    <div className="flex items-center justify-between p-1 bg-surface-2 rounded">
                      <span className="text-taho-primary">ResponseTime &lt; 300ms</span>
                      <span className="text-taho-green font-bold">PASSED ✓</span>
                    </div>
                    <div className="flex items-center justify-between p-1 bg-surface-2 rounded">
                      <span className="text-taho-primary">json.user.role == "admin"</span>
                      <span className="text-taho-green font-bold">PASSED ✓</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* ================= TAB 2: COLLECT ================= */}
          {rootTab === "collect" && (
            <div className="p-3 space-y-2.5 animate-fade-in text-[10px]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-taho-primary">Collections (4)</span>
                <span className="text-taho-gold text-[9px]">+ New</span>
              </div>
              {[
                { name: "Auth & User Suite", reqs: "6 reqs", grade: "Grade A" },
                { name: "Payments Microservice", reqs: "12 reqs", grade: "Grade B" },
                { name: "GraphQL Storefront", reqs: "8 reqs", grade: "Grade A" },
                { name: "IoT MQTT Sensors", reqs: "4 topics", grade: "Grade A" },
              ].map(c => (
                <div key={c.name} className="bg-[#0A0D14] border border-card-border p-2.5 rounded-xl flex justify-between items-center">
                  <div>
                    <div className="text-taho-primary font-bold text-[9.5px]">{c.name}</div>
                    <div className="text-taho-muted text-[8.5px]">{c.reqs}</div>
                  </div>
                  <span className="text-taho-green text-[8.5px] bg-taho-green-bg px-1.5 py-0.5 rounded font-bold">{c.grade}</span>
                </div>
              ))}
            </div>
          )}

          {/* ================= TAB 3: HISTORY ================= */}
          {rootTab === "history" && (
            <div className="p-3 space-y-2 animate-fade-in text-[9.5px]">
              <div className="text-taho-muted text-[8.5px] font-bold uppercase">Today</div>
              {[
                { m: "GET", path: "/v1/auth/user", status: "200", ms: "142ms" },
                { m: "POST", path: "/v1/orders/checkout", status: "201", ms: "98ms" },
                { m: "WS", path: "/ws/stream/orders", status: "LIVE", ms: "12ms" },
              ].map((h, i) => (
                <div key={i} className="bg-[#0A0D14] border border-card-border p-2 rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#2ECC71] font-bold text-[8.5px]">{h.m}</span>
                    <span className="text-taho-secondary text-[8.5px] truncate max-w-[130px]">{h.path}</span>
                  </div>
                  <span className="text-taho-green font-bold text-[8px]">{h.status} ({h.ms})</span>
                </div>
              ))}
            </div>
          )}

          {/* ================= TAB 4: SETTINGS ================= */}
          {rootTab === "settings" && (
            <div className="p-3 space-y-2 animate-fade-in text-[9.5px]">
              <div className="bg-[#0A0D14] border border-card-border p-2.5 rounded-xl space-y-1">
                <div className="text-taho-gold font-bold">Theme & Engine</div>
                <div className="text-taho-secondary">Active Theme: <span className="text-taho-primary">AMOLED Pure Black</span></div>
                <div className="text-taho-secondary">SSL Validation: <span className="text-taho-green">Strict (Enforced)</span></div>
                <div className="text-taho-secondary">Request Timeout: <span className="text-taho-primary">30s</span></div>
              </div>
            </div>
          )}

        </div>

        {/* Root 5-Tab Bottom Navigation Bar */}
        <div className="px-1 py-2 border-t border-[rgba(255,255,255,0.06)] bg-[#07090E] flex justify-around text-taho-muted text-[8px] font-jetbrains">
          {[
            { id: "request", label: "REQUEST" },
            { id: "response", label: "RESP (200)" },
            { id: "collect", label: "COLLECT" },
            { id: "history", label: "HISTORY" },
            { id: "settings", label: "SETTINGS" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setRootTab(tab.id as any)}
              className={`px-1 py-0.5 rounded font-bold transition-all cursor-pointer ${
                rootTab === tab.id
                  ? "text-taho-gold scale-105"
                  : "text-taho-muted hover:text-taho-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
