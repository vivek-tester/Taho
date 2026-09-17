import { Logo } from './Logo';

export const PhoneMockup = () => {
  return (
    <div className="w-[280px] h-[560px] bg-surface-1 rounded-[44px] border-[1.5px] border-[#1C1C1C] shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative animate-float">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-[14px] z-10" />

      {/* Screen Area */}
      <div className="p-[10px] h-full w-full">
        <div className="bg-black rounded-[36px] h-full overflow-hidden flex flex-col relative w-full">
          
          {/* Status Bar */}
          <div className="px-[16px] pt-[28px] pb-[6px] flex justify-between tracking-wide font-outfit font-semibold text-[11px] text-taho-primary">
            <span>9:41</span>
            <div className="w-[20px] h-[10px] border border-taho-primary rounded-[3px] relative flex items-center justify-end p-[1px]">
               <div className="w-full h-full bg-taho-primary rounded-[1px]"/>
               <div className="absolute -right-[3px] w-[2px] h-[4px] bg-taho-primary rounded-r-[1px]"/>
            </div>
          </div>

          {/* App Bar */}
          <div className="px-[14px] py-[6px] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <Logo className="w-[20px] h-[20px]" />
              <span className="font-outfit font-bold text-[15px] text-taho-primary">Taho</span>
            </div>
            <div className="bg-taho-amber-bg text-taho-amber border border-[rgba(243,156,18,0.22)] rounded-[6px] px-[8px] py-[3px] font-jetbrains font-semibold text-[9px] uppercase tracking-wider">
              Staging
            </div>
          </div>

          {/* URL Row */}
          <div className="px-[14px] py-[6px] flex gap-[6px] items-center">
            <div className="bg-taho-green-bg text-taho-green border border-[rgba(46,204,113,0.22)] rounded-[7px] px-[9px] py-[7px] font-jetbrains font-semibold text-[9px]">
              GET
            </div>
            <div className="flex-1 bg-[#111] border border-[rgba(255,255,255,0.11)] rounded-[8px] px-[10px] py-[8px] font-jetbrains text-[9px] text-taho-primary whitespace-nowrap overflow-hidden text-ellipsis">
              api.<span className="text-taho-gold">{`{{baseUrl}}`}</span>/v1/orders
            </div>
            <div className="bg-taho-gold text-black rounded-[7px] px-[11px] py-[7px] font-outfit font-bold text-[10px]">
              Send
            </div>
          </div>

          {/* Tab Bar */}
          <div className="px-[14px] border-b border-[rgba(255,255,255,0.06)] flex">
            {['Params', 'Headers', 'Body', 'Auth'].map((tab, i) => (
              <div key={tab} className={`flex-1 text-center py-[10px] text-[10px] font-outfit ${tab === 'Headers' ? 'text-taho-gold font-medium relative' : 'text-[#444]'}`}>
                {tab}
                {tab === 'Headers' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-taho-gold" />}
              </div>
            ))}
          </div>

          {/* Response Bar */}
          <div className="bg-surface-1 px-[14px] py-[7px] flex items-center gap-[6px]">
            <div className="bg-taho-green-bg text-taho-green rounded-[5px] px-[6px] py-[2px] font-jetbrains font-semibold text-[9px]">
              200
            </div>
            <div className="font-jetbrains text-[9px] text-[#444]">
              234ms
            </div>
            <div className="ml-auto bg-taho-amber-bg rounded-[7px] px-[8px] py-[4px] flex flex-col items-center leading-none">
              <span className="font-jetbrains font-extrabold text-[16px] text-taho-amber leading-[1]">C</span>
              <span className="font-jetbrains font-semibold text-[7px] text-taho-amber tracking-wider mt-[2px]">MODERATE</span>
            </div>
          </div>

          {/* JSON Body */}
          <div className="flex-1 px-[14px] py-[10px] font-jetbrains text-[10px] leading-[1.8] text-[#888]">
            <div className="text-[#888]">{'{'}</div>
            <div className="pl-[14px]">
              <span className="text-[#7EB8F7]">"userId"</span>: <span className="text-taho-gold">1</span>,
            </div>
            <div className="pl-[14px]">
              <span className="text-[#7EB8F7]">"id"</span>: <span className="text-taho-amber">1</span>,
            </div>
            <div className="pl-[14px]">
              <span className="text-[#7EB8F7]">"title"</span>: <span className="text-[#98D982]">"sunt aut..."</span>,
            </div>
            <div className="pl-[14px]">
              <span className="text-[#7EB8F7]">"body"</span>: <span className="text-[#98D982]">"quia et..."</span>
            </div>
            <div className="text-[#888]">{'}'}</div>
          </div>

        </div>
      </div>
    </div>
  );
};
