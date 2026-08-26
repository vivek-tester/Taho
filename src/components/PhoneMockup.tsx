import { useState } from "react";
import { Logo } from "./Logo";

export const PhoneMockup = () => {
  const [screenTab, setScreenTab] = useState<"composer" | "security" | "runner" | "mock">("security");
  const [method, setMethod] = useState("GET");
  const [isSending, setIsSending] = useState(false);
  const [sentCount, setSentCount] = useState(1);

  const triggerSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentCount(prev => prev + 1);
      setScreenTab("security");
    }, 600);
  };

  return (
    <div className="w-[300px] sm:w-[320px] h-[640px] bg-[#0E131F] rounded-[48px] border-[2.5px] border-[#222E42] shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(201,146,42,0.15)] relative animate-float flex flex-col p-[10px] select-none">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-b-[16px] z-20 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-[#111] mr-3" />
        <div className="w-2 h-2 rounded-full bg-[#1c2438]" />
      </div>

      {/* Screen Area */}
      <div className="bg-black rounded-[40px] h-full overflow-hidden flex flex-col relative w-full border border-[rgba(255,255,255,0.06)]">
        
        {/* Status Bar */}
        <div className="px-5 pt-7 pb-2 flex justify-between tracking-wide font-outfit font-semibold text-[11px] text-taho-primary">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px]">5G</span>
            <div className="w-[18px] h-[9px] border border-taho-primary rounded-[3px] p-[1px]">
              <div className="w-full h-full bg-taho-primary rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* App Bar */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] bg-[#0A0D14]">
          <div className="flex items-center gap-2">
            <Logo className="w-5 h-5" />
            <span className="font-outfit font-bold text-[15px] text-taho-primary">Taho</span>
          </div>
          <div className="bg-taho-gold-dim border border-taho-gold-border rounded-full px-2.5 py-0.5 font-jetbrains font-semibold text-[9px] text-taho-gold uppercase tracking-wider">
            Production Env
          </div>
        </div>

        {/* Interactive Phone Tab Switcher */}
        <div className="px-2 py-1.5 bg-[#0D111A] border-b border-[rgba(255,255,255,0.06)] flex gap-1 justify-between">
          {[
            { id: "composer", label: "Request" },
            { id: "security", label: "OWASP (A)" },
            { id: "runner", label: "Runner" },
            { id: "mock", label: "Mock" },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setScreenTab(t.id as any)}
              className={`flex-1 py-1 text-[10px] font-jetbrains font-semibold rounded-md transition-all cursor-pointer ${
                screenTab === t.id
                  ? "bg-taho-gold text-black shadow-sm"
                  : "text-taho-secondary hover:text-taho-primary bg-surface-2"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Screen Content Views */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-3 font-jetbrains text-[11px]">
          
          {/* VIEW 1: COMPOSER */}
          {screenTab === "composer" && (
            <div className="space-y-2.5 animate-fade-in">
              {/* Method + URL */}
              <div className="flex gap-1.5">
                <select 
                  value={method}
                  onChange={e => setMethod(e.target.value)}
                  className="bg-[#182030] text-[#2ECC71] border border-[rgba(46,204,113,0.3)] rounded-lg px-2 py-1.5 font-bold text-[10px] outline-none"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="WS">WS</option>
                  <option value="MQTT">MQTT</option>
                </select>
                <div className="flex-1 bg-[#111622] border border-[rgba(255,255,255,0.08)] rounded-lg px-2.5 py-1.5 text-taho-primary truncate text-[10px] flex items-center">
                  api.<span className="text-taho-gold">{"{{base_url}}"}</span>/v1/auth
                </div>
              </div>

              {/* Action SEND */}
              <button
                onClick={triggerSend}
                disabled={isSending}
                className="w-full bg-taho-gold text-black font-outfit font-bold text-[12px] py-2 rounded-lg flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                {isSending ? "Scanning & Sending..." : `SEND REQUEST (${sentCount})`}
              </button>

              {/* Headers preview */}
              <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-1.5 text-[10px]">
                <div className="text-taho-muted text-[9px] uppercase tracking-wider font-semibold">Headers (3)</div>
                <div className="text-taho-secondary truncate">Authorization: Bearer <span className="text-taho-gold">{"{{jwt_token}}"}</span></div>
                <div className="text-taho-secondary truncate">Content-Type: application/json</div>
                <div className="text-taho-secondary truncate">X-Device-Id: Pixel-8-Pro</div>
              </div>

              {/* Body snippet */}
              <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-1 text-[10px]">
                <div className="text-taho-muted text-[9px] uppercase tracking-wider font-semibold">Body (JSON)</div>
                <div className="text-[#888] font-mono leading-relaxed">
                  {"{"}<br />
                  &nbsp;&nbsp;<span className="text-[#7EB8F7]">"audit_mode"</span>: <span className="text-taho-gold">true</span>,<br />
                  &nbsp;&nbsp;<span className="text-[#7EB8F7]">"client"</span>: <span className="text-taho-green">"Taho-Mobile"</span><br />
                  {"}"}
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: SECURITY (OWASP AUDIT) */}
          {screenTab === "security" && (
            <div className="space-y-2.5 animate-fade-in">
              {/* Response Header Status */}
              <div className="bg-[#0D1424] border border-[rgba(46,204,113,0.3)] rounded-xl p-2.5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="bg-taho-green-bg text-taho-green font-bold px-1.5 py-0.5 rounded text-[10px]">200 OK</span>
                    <span className="text-taho-secondary text-[10px]">142ms</span>
                    <span className="text-taho-muted text-[10px]">1.8 KB</span>
                  </div>
                  <div className="text-[9px] text-taho-muted mt-1">https://api.domain.in/v1/auth</div>
                </div>
                <div className="bg-taho-gold text-black rounded-lg px-2.5 py-1 text-center leading-none">
                  <div className="font-extrabold text-[14px]">A</div>
                  <div className="text-[7px] font-bold tracking-wider mt-0.5">96/100</div>
                </div>
              </div>

              {/* OWASP Checks Card */}
              <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-1.5 text-[9.5px]">
                <div className="text-taho-gold font-bold flex items-center justify-between">
                  <span>OWASP SECURITY AUDIT</span>
                  <span className="text-taho-green">PASSED</span>
                </div>
                <div className="flex items-center gap-1.5 text-taho-primary">
                  <span className="text-taho-green font-bold">✓</span> HSTS: max-age=31536000
                </div>
                <div className="flex items-center gap-1.5 text-taho-primary">
                  <span className="text-taho-green font-bold">✓</span> CSP: default-src self
                </div>
                <div className="flex items-center gap-1.5 text-taho-primary">
                  <span className="text-taho-green font-bold">✓</span> X-Frame-Options: DENY
                </div>
                <div className="flex items-center gap-1.5 text-taho-primary">
                  <span className="text-taho-green font-bold">✓</span> Cookie: Secure; HttpOnly
                </div>
              </div>

              {/* JWT Claims Card */}
              <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-1 text-[9.5px]">
                <div className="text-[#64D2FF] font-bold flex items-center justify-between">
                  <span>JWT TOKEN DECODER</span>
                  <span className="text-taho-green text-[8px] bg-taho-green-bg px-1 rounded">VALID</span>
                </div>
                <div className="text-taho-secondary truncate">alg: RS256 | typ: JWT</div>
                <div className="text-taho-secondary truncate">sub: dev_usr_99812</div>
                <div className="text-taho-gold truncate">exp: in 54 minutes</div>
              </div>
            </div>
          )}

          {/* VIEW 3: RUNNER */}
          {screenTab === "runner" && (
            <div className="space-y-2.5 animate-fade-in text-[10px]">
              <div className="bg-[#0A0D14] border border-card-border rounded-xl p-2.5 space-y-1.5">
                <div className="flex justify-between items-center text-taho-gold font-bold">
                  <span>CSV RUNNER: 3 ITERATIONS</span>
                  <span className="text-taho-green">18/18 ✓</span>
                </div>
                <div className="w-full bg-surface-3 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-taho-green h-full w-full" />
                </div>
              </div>

              <div className="space-y-1.5 text-[9px]">
                <div className="p-2 bg-[#101726] border border-[rgba(255,255,255,0.06)] rounded-lg flex justify-between">
                  <span>1. POST /login (Alice)</span>
                  <span className="text-taho-green font-bold">200 OK (42ms)</span>
                </div>
                <div className="p-2 bg-[#101726] border border-[rgba(255,255,255,0.06)] rounded-lg flex justify-between">
                  <span>2. GET /profile/orders</span>
                  <span className="text-taho-green font-bold">200 OK (38ms)</span>
                </div>
                <div className="p-2 bg-[#101726] border border-[rgba(255,255,255,0.06)] rounded-lg flex justify-between">
                  <span>3. POST /checkout</span>
                  <span className="text-taho-green font-bold">201 OK (91ms)</span>
                </div>
                <div className="p-2 bg-[#101726] border border-[rgba(255,255,255,0.06)] rounded-lg flex justify-between">
                  <span>4. POST /login (Bob)</span>
                  <span className="text-taho-green font-bold">200 OK (45ms)</span>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 4: MOCK SERVER */}
          {screenTab === "mock" && (
            <div className="space-y-2.5 animate-fade-in text-[10px]">
              <div className="bg-[#0A1628] border border-[rgba(10,132,255,0.3)] rounded-xl p-2.5 space-y-1">
                <div className="flex justify-between items-center font-bold">
                  <span className="text-[#64D2FF]">LOCAL MOCK SERVER</span>
                  <span className="text-taho-green bg-taho-green-bg px-1.5 py-0.5 rounded text-[8px]">RUNNING</span>
                </div>
                <div className="text-taho-secondary text-[9px]">http://127.0.0.1:8080</div>
              </div>

              <div className="space-y-1.5 text-[9px]">
                <div className="p-2 bg-[#0A0D14] border border-card-border rounded-lg space-y-0.5">
                  <div className="text-taho-gold font-bold">Rule 1: GET /api/v1/users</div>
                  <div className="text-taho-muted">Returns: 200 OK (Delay: 50ms)</div>
                </div>
                <div className="p-2 bg-[#0A0D14] border border-card-border rounded-lg space-y-0.5">
                  <div className="text-taho-gold font-bold">Rule 2: POST /api/v1/pay</div>
                  <div className="text-taho-muted">Returns: 201 Created (Delay: 120ms)</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Nav Simulation */}
        <div className="px-4 py-2 border-t border-[rgba(255,255,255,0.06)] bg-[#07090E] flex justify-around text-taho-muted text-[8px] font-jetbrains">
          <span className="text-taho-gold font-bold">REQUEST</span>
          <span>RESP</span>
          <span>COLLECT</span>
          <span>HISTORY</span>
          <span>SETTINGS</span>
        </div>

      </div>
    </div>
  );
};
