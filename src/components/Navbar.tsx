import { useState, useEffect } from "react";
import { LogoMark } from "./Logo";

export const Navbar = ({ onOpenLegal }: { onOpenLegal?: (type: "privacy" | "terms") => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "nav-scrolled py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-[1180px] w-full mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <LogoMark className="w-[28px] h-[28px] transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-outfit font-extrabold text-[18px] tracking-[-0.02em] text-taho-primary leading-tight">
              Taho
            </span>
            <span className="font-jetbrains text-[9px] text-taho-gold uppercase tracking-wider font-semibold">
              API & Security
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#features" className="font-outfit text-[14px] text-taho-secondary hover:text-taho-primary transition-colors">Features</a>
          <a href="#security" className="font-outfit text-[14px] text-taho-secondary hover:text-taho-primary transition-colors flex items-center gap-1.5">
            <span>OWASP Audit</span>
            <span className="bg-taho-gold-dim text-taho-gold font-jetbrains text-[9px] px-1.5 py-0.5 rounded font-semibold">A-F</span>
          </a>
          <a href="#protocols" className="font-outfit text-[14px] text-taho-secondary hover:text-taho-primary transition-colors">Protocols</a>
          <a href="#comparison" className="font-outfit text-[14px] text-taho-secondary hover:text-taho-primary transition-colors">Comparison</a>
          <a href="#pricing" className="font-outfit text-[14px] text-taho-secondary hover:text-taho-primary transition-colors">Pricing</a>
          <button 
            onClick={() => onOpenLegal?.("privacy")}
            className="font-outfit text-[14px] text-taho-secondary hover:text-taho-primary transition-colors cursor-pointer"
          >
            Privacy
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="#download" 
            className="bg-taho-gold text-black font-outfit font-bold text-[13px] px-5 h-[42px] rounded-[10px] flex items-center justify-center hover:opacity-90 transition-all shadow-[0_0_20px_rgba(201,146,42,0.25)] hover:shadow-[0_0_25px_rgba(201,146,42,0.4)]"
          >
            Get on Indus Appstore
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-taho-primary p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-1 border-b border-card-border px-6 py-6 space-y-4 animate-fade-in">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block font-outfit text-[16px] text-taho-secondary hover:text-taho-primary">Features</a>
          <a href="#security" onClick={() => setMobileMenuOpen(false)} className="block font-outfit text-[16px] text-taho-secondary hover:text-taho-primary">OWASP Security Audit</a>
          <a href="#protocols" onClick={() => setMobileMenuOpen(false)} className="block font-outfit text-[16px] text-taho-secondary hover:text-taho-primary">Protocols & Streaming</a>
          <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="block font-outfit text-[16px] text-taho-secondary hover:text-taho-primary">Comparison</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block font-outfit text-[16px] text-taho-secondary hover:text-taho-primary">Pricing</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenLegal?.("privacy"); }} 
            className="block text-left w-full font-outfit text-[16px] text-taho-secondary hover:text-taho-primary"
          >
            Privacy Policy
          </button>
          <a 
            href="#download" 
            onClick={() => setMobileMenuOpen(false)} 
            className="w-full bg-taho-gold text-black font-outfit font-bold text-[14px] p-3 rounded-lg flex items-center justify-center"
          >
            Download Free on Indus Appstore
          </a>
        </div>
      )}
    </header>
  );
};
