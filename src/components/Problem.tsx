export const Problem = () => {
  return (
    <section className="bg-black py-[64px] md:py-[120px]">
      <div className="max-w-[1100px] w-full mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-jetbrains font-medium text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-[14px]">
            THE PROBLEM
          </div>
          <h2 className="font-outfit font-bold text-[28px] md:text-[44px] text-taho-primary tracking-[-0.01em] mb-6">
            Every API testing tool requires a laptop.
          </h2>
          <p className="font-outfit text-[18px] text-taho-secondary max-w-[560px] mx-auto leading-[1.6]">
            Postman, Insomnia, Hoppscotch — all built for a desk. Taho is the first API testing tool built from the ground up for your phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          <div className="bg-surface-2 border border-card-border rounded-[14px] p-[28px] hover:border-card-border-hover hover:-translate-y-1 transition-all duration-300">
            <div className="text-[36px] mb-4 leading-none transform transition-transform group-hover:scale-110">🖥</div>
            <h3 className="font-outfit font-semibold text-[18px] text-taho-primary">Desktop Only</h3>
            <p className="font-outfit text-[14px] text-taho-secondary leading-[1.6] mt-[10px]">
              Every serious API tool requires a laptop. When you're on-site, in a meeting, or away from your desk, you're stuck.
            </p>
          </div>
          
          <div className="bg-surface-2 border border-card-border rounded-[14px] p-[28px] hover:border-card-border-hover hover:-translate-y-1 transition-all duration-300">
            <div className="text-[36px] mb-4 leading-none transform transition-transform group-hover:scale-110">🔒</div>
            <h3 className="font-outfit font-semibold text-[18px] text-taho-primary">No Security Insight</h3>
            <p className="font-outfit text-[14px] text-taho-secondary leading-[1.6] mt-[10px]">
              You send a request, get a response, and have no idea if it's exposing vulnerabilities. Security is always an afterthought.
            </p>
          </div>
          
          <div className="bg-surface-2 border border-card-border rounded-[14px] p-[28px] hover:border-card-border-hover hover:-translate-y-1 transition-all duration-300">
            <div className="text-[36px] mb-4 leading-none transform transition-transform group-hover:scale-110">☁️</div>
            <h3 className="font-outfit font-semibold text-[18px] text-taho-primary">Everything Needs a Cloud</h3>
            <p className="font-outfit text-[14px] text-taho-secondary leading-[1.6] mt-[10px]">
              Most tools require an account, cloud sync, or a server. Your API keys and tokens are sent somewhere you can't control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
