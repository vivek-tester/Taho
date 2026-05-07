import { PhoneMockup } from './PhoneMockup';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-black pt-[64px] flex items-center">
      <div className="max-w-[1100px] w-full mx-auto px-6 py-12 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        <div>
          <div className="inline-block bg-taho-gold-dim border border-taho-gold-border text-taho-gold font-jetbrains font-medium text-[11px] uppercase tracking-[0.15em] px-[12px] py-[5px] rounded-full mb-6">
            NOW ON INDUS APPSTORE · FREE FOREVER
          </div>
          
          <h1 className="font-outfit font-extrabold text-[36px] md:text-[64px] leading-[1.1] tracking-[-0.02em] text-taho-primary">
            API Testing that fits in your <br className="hidden md:block"/>pocket.
          </h1>
          
          <p className="font-outfit font-normal text-[18px] text-taho-secondary max-w-[480px] leading-[1.6] mt-[20px]">
            Send requests, inspect responses, and get an automatic OWASP security grade — A to F — on every single API call. No desktop. No account. Everything stays on your device.
          </p>
          
          <div className="mt-[32px] flex flex-col sm:flex-row gap-4">
            <a href="#" className="bg-taho-gold text-black font-outfit font-bold text-[14px] px-[24px] rounded-[10px] h-[52px] flex items-center justify-center hover:opacity-90 transition-opacity">
              Download Free on Indus AppStore
            </a>
            <a href="#features" className="bg-transparent border border-[rgba(201,146,42,0.35)] text-taho-gold font-outfit font-semibold text-[14px] px-[20px] rounded-[10px] h-[52px] flex items-center justify-center hover:bg-[rgba(201,146,42,0.08)] transition-colors">
              See How It Works ↓
            </a>
          </div>
          
          <div className="mt-[20px] font-outfit text-[13px] text-taho-muted">
            Free forever · No account required · Everything stays on your device
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};
