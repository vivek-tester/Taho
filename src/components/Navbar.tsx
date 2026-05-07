import { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
      <div className="h-[64px] max-w-[1100px] mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Logo className="w-[28px] h-[28px]" />
          <span className="font-outfit font-bold text-[20px] tracking-[-0.01em] text-taho-primary">Taho</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-[14px] font-medium font-outfit text-taho-secondary hover:text-taho-primary transition-colors duration-150">Features</a>
            <a href="#pricing" className="text-[14px] font-medium font-outfit text-taho-secondary hover:text-taho-primary transition-colors duration-150">Pricing</a>
          </div>
          <a href="#waitlist" className="bg-taho-gold text-black font-outfit font-semibold text-[13px] px-[20px] py-[10px] rounded-[8px] hover:opacity-90 transition-opacity">
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
};
