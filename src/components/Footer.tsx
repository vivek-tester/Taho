import { LogoMark } from "./Logo";

export const Footer = ({ onOpenLegal }: { onOpenLegal: (type: "privacy" | "terms" | "contact") => void }) => {
  return (
    <footer className="bg-black border-t border-[rgba(255,255,255,0.08)] py-12">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* Brand & Creator */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2.5">
            <LogoMark className="w-6 h-6" />
            <span className="font-outfit font-extrabold text-[18px] tracking-tight text-taho-primary">Taho</span>
          </div>
          <p className="font-outfit text-[14px] text-taho-secondary max-w-[360px] leading-relaxed">
            The developer-first, offline-capable API testing and OWASP security audit workbench for Android.
          </p>
          <div className="flex items-center gap-3 pt-2 font-jetbrains text-[12px] text-taho-muted">
            <span>By Vivek Sagar</span>
            <span>•</span>
            <span>Built in India 🇮🇳</span>
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="space-y-3">
          <div className="font-jetbrains font-semibold text-[11px] uppercase tracking-wider text-taho-gold">
            Legal & Privacy
          </div>
          <ul className="space-y-2 font-outfit text-[14px]">
            <li>
              <button 
                onClick={() => onOpenLegal("privacy")}
                className="text-taho-secondary hover:text-taho-primary transition-colors cursor-pointer text-left"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button 
                onClick={() => onOpenLegal("terms")}
                className="text-taho-secondary hover:text-taho-primary transition-colors cursor-pointer text-left"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button 
                onClick={() => onOpenLegal("contact")}
                className="text-taho-secondary hover:text-taho-primary transition-colors cursor-pointer text-left"
              >
                Security & Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Distribution & Version */}
        <div className="space-y-3">
          <div className="font-jetbrains font-semibold text-[11px] uppercase tracking-wider text-taho-gold">
            Distribution
          </div>
          <ul className="space-y-2 font-outfit text-[14px]">
            <li>
              <a 
                href="https://www.indusappstore.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-taho-secondary hover:text-taho-primary transition-colors"
              >
                Indus Appstore 🇮🇳
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/vivek-tester/Project-Taho" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-taho-secondary hover:text-taho-primary transition-colors"
              >
                GitHub Repository
              </a>
            </li>
            <li className="font-jetbrains text-[12px] text-taho-muted pt-1">
              Version 1.2.0 (Build 3)
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1180px] mx-auto px-6 pt-8 mt-8 border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4 font-jetbrains text-[11px] text-taho-muted">
        <div>© 2026 Taho. All rights reserved. Governed by the laws of India.</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-taho-green" />
          <span>Indus Appstore Verified Release</span>
        </div>
      </div>
    </footer>
  );
};
