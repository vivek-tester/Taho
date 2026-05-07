export const HowItWorks = () => {
  return (
    <section className="bg-black py-[64px] md:py-[120px]">
      <div className="max-w-[1100px] w-full mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-jetbrains font-medium text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-[14px]">
            HOW IT WORKS
          </div>
          <h2 className="font-outfit font-bold text-[28px] md:text-[44px] text-taho-primary tracking-[-0.01em]">
            From paste to security grade in under 2 seconds.
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] border-t border-dashed border-[rgba(201,146,42,0.2)] z-0" />
          
          <div className="flex-1 relative z-10 bg-black group hover:-translate-y-2 transition-transform duration-300">
            <div className="font-jetbrains font-extrabold text-[48px] text-taho-gold/60 leading-none inline-block bg-black pr-4 group-hover:text-taho-gold transition-colors duration-300">
              01
            </div>
            <h3 className="font-outfit font-semibold text-[18px] text-taho-primary mt-[8px]">Paste or Build</h3>
            <p className="font-outfit text-[14px] text-taho-secondary leading-[1.6] mt-[8px]">
              Paste a cURL command, JSON body, or OpenAPI spec. Taho detects the format and builds the request automatically. Or start from scratch with the full request builder.
            </p>
          </div>
          
          <div className="flex-1 relative z-10 bg-black group hover:-translate-y-2 transition-transform duration-300 delay-100">
            <div className="font-jetbrains font-extrabold text-[48px] text-taho-gold/60 leading-none inline-block bg-black pr-4 group-hover:text-taho-gold transition-colors duration-300">
              02
            </div>
            <h3 className="font-outfit font-semibold text-[18px] text-taho-primary mt-[8px]">Send</h3>
            <p className="font-outfit text-[14px] text-taho-secondary leading-[1.6] mt-[8px]">
              Tap Send. Taho fires the request and captures the full response including headers, body, cookies, and a waterfall timeline.
            </p>
          </div>
          
          <div className="flex-1 relative z-10 bg-black group hover:-translate-y-2 transition-transform duration-300 delay-200">
            <div className="font-jetbrains font-extrabold text-[48px] text-taho-gold/60 leading-none inline-block bg-black pr-4 group-hover:text-taho-gold transition-colors duration-300">
              03
            </div>
            <h3 className="font-outfit font-semibold text-[18px] text-taho-primary mt-[8px]">Instant Security Grade</h3>
            <p className="font-outfit text-[14px] text-taho-secondary leading-[1.6] mt-[8px]">
              Before you finish reading the response, Taho has already run 12 OWASP security checks on-device and assigned a grade A through F with remediation for every finding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
