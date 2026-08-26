import { useState, useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Features } from "./components/Features";
import { ResponseInspectorSection } from "./components/ResponseInspectorSection";
import { HowItWorks } from "./components/HowItWorks";
import { Comparison } from "./components/Comparison";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { FadeInSection } from "./components/FadeInSection";
import { LegalModal } from "./components/LegalModals";
import { LegalPage } from "./components/LegalPage";

export default function App() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "contact" | null>(null);
  const [fullLegalView, setFullLegalView] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    // Check initial hash for deep linking (e.g. #privacy or #terms)
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#privacy") {
        setFullLegalView("privacy");
      } else if (hash === "#terms") {
        setFullLegalView("terms");
      } else {
        setFullLegalView(null);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#") && anchor.origin === window.location.origin) {
        if (anchor.hash === "#privacy" || anchor.hash === "#terms") {
          return; // Handled by hashchange
        }
        e.preventDefault();
        lenis.scrollTo(anchor.hash, { offset: -64 });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  if (fullLegalView) {
    return (
      <LegalPage 
        type={fullLegalView} 
        onBack={() => {
          window.location.hash = "";
          setFullLegalView(null);
        }} 
      />
    );
  }

  return (
    <div className="w-full h-full overflow-x-hidden selection:bg-taho-gold selection:text-black">
      <Navbar onOpenLegal={(type) => setActiveModal(type)} />
      
      <FadeInSection>
        <Hero />
      </FadeInSection>
      
      <FadeInSection>
        <Problem />
      </FadeInSection>
      
      <FadeInSection>
        <Features />
      </FadeInSection>

      <FadeInSection>
        <ResponseInspectorSection />
      </FadeInSection>

      <FadeInSection>
        <HowItWorks />
      </FadeInSection>

      <FadeInSection>
        <Comparison />
      </FadeInSection>

      <FadeInSection>
        <Pricing />
      </FadeInSection>

      <Footer onOpenLegal={(type) => setActiveModal(type)} />

      {/* Interactive Modal */}
      <LegalModal 
        type={activeModal} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
}
