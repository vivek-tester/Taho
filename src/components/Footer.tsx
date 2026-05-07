import { useState } from 'react';
import { LogoMark } from './Logo';

export const Footer = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  return (
    <>
      <footer className="bg-black border-t border-[rgba(255,255,255,0.06)] py-[40px]">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <LogoMark className="w-[22px] h-[22px]" />
              <span className="font-outfit font-bold text-[16px] tracking-[-0.01em] text-taho-primary">Taho</span>
            </div>
            <div className="font-outfit text-[12px] text-taho-muted mt-2">
              by Vivek Sagar
            </div>
            <div className="font-outfit text-[12px] text-taho-muted mt-[6px]">
              Built in India 🇮🇳
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-[20px]">
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }} className="font-outfit text-[13px] text-taho-muted hover:text-taho-secondary transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('terms'); }} className="font-outfit text-[13px] text-taho-muted hover:text-taho-secondary transition-colors">Terms of Service</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('contact'); }} className="font-outfit text-[13px] text-taho-muted hover:text-taho-secondary transition-colors">Contact</a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="font-jetbrains text-[11px] text-taho-muted">
              Taho v1.0.0
            </div>
            <div className="font-outfit text-[11px] text-[#333333] mt-1">
              API Tester & Security Scanner
            </div>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-surface-1 border border-card-border rounded-[16px] p-[32px] max-w-[400px] w-full text-center relative shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-[16px] right-[20px] text-[20px] text-taho-muted hover:text-taho-primary transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            
            {activeModal === 'contact' && (
              <>
                <h3 className="font-outfit font-bold text-[24px] text-taho-primary mb-2">Contact</h3>
                <p className="font-outfit text-[14px] text-taho-secondary mb-6">Reach out to the creator directly.</p>
                
                <div className="flex flex-col gap-3 text-left">
                  <a href="mailto:sagarvivek141@gmail.com" className="bg-surface-2 border border-card-border rounded-lg p-4 flex items-center gap-3 hover:border-taho-gold transition-colors group">
                    <span className="text-[20px]">📧</span>
                    <div>
                      <div className="font-jetbrains text-[10px] text-taho-muted uppercase tracking-wider">Email</div>
                      <div className="font-outfit text-[14px] text-taho-primary group-hover:text-taho-gold transition-colors">sagarvivek141@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="https://instagram.com/eternal0p" target="_blank" rel="noopener noreferrer" className="bg-surface-2 border border-card-border rounded-lg p-4 flex items-center gap-3 hover:border-taho-gold transition-colors group">
                    <span className="text-[20px]">📸</span>
                    <div>
                      <div className="font-jetbrains text-[10px] text-taho-muted uppercase tracking-wider">Instagram</div>
                      <div className="font-outfit text-[14px] text-taho-primary group-hover:text-taho-gold transition-colors">@eternal0p</div>
                    </div>
                  </a>
                </div>
              </>
            )}

            {activeModal === 'privacy' && (
              <>
                <h3 className="font-outfit font-bold text-[24px] text-taho-primary mb-4">Privacy Policy</h3>
                <p className="font-outfit text-[14px] text-taho-secondary leading-relaxed text-left">
                  This policy is currently being updated. In the meantime, rest assured that Taho stores all its data locally on your device. We respect your privacy and do not transmit your API keys or request data to any cloud servers.
                </p>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="mt-6 w-full bg-surface-2 border border-card-border text-taho-primary p-3 rounded-lg font-outfit text-[14px] hover:border-taho-gold transition-colors"
                >
                  Got it
                </button>
              </>
            )}

            {activeModal === 'terms' && (
              <>
                <h3 className="font-outfit font-bold text-[24px] text-taho-primary mb-4">Terms of Service</h3>
                <p className="font-outfit text-[14px] text-taho-secondary leading-relaxed text-left">
                  These terms are currently being drafted. By using the free beta, you agree to provide feedback and not use the tool for malicious purposes or targeting systems you do not own or have clear authorization to test.
                </p>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="mt-6 w-full bg-surface-2 border border-card-border text-taho-primary p-3 rounded-lg font-outfit text-[14px] hover:border-taho-gold transition-colors"
                >
                  Agree
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
