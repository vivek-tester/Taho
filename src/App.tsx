/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import { FadeInSection } from './components/FadeInSection';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      // allow touch scroll to be native
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        lenis.scrollTo(anchor.hash, { offset: -64 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden selection:bg-taho-gold selection:text-black">
      <Navbar />
      
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
        <HowItWorks />
      </FadeInSection>

      <FadeInSection>
        <Comparison />
      </FadeInSection>

      <FadeInSection>
        <Pricing />
      </FadeInSection>

      <FadeInSection>
        <Waitlist />
      </FadeInSection>

      <Footer />
    </div>
  );
}
