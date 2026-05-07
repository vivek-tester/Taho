export const Comparison = () => {
  const rows = [
    { feature: "Mobile-first Android app", taho: "✓", p: "✗", i: "✗", t: "✓", h: "✗" },
    { feature: "Automatic OWASP grading", taho: "✓", p: "✗", i: "✗", t: "✗", h: "✗" },
    { feature: "No account required", taho: "✓", p: "✗", i: "✓", t: "✗", h: "✗" },
    { feature: "All data on-device", taho: "✓", p: "✗", i: "✗", t: "✓", h: "✗" },
    { feature: "JWT decoder built-in", taho: "✓", p: "✗", i: "✗", t: "✗", h: "✗" },
    { feature: "SSL/TLS inspector", taho: "✓", p: "✗", i: "✗", t: "✗", h: "✗" },
    { feature: "Variable transforms", taho: "✓", p: "✓", i: "✓", t: "✗", h: "✗" },
    { feature: "PDF security report", taho: "✓ Pro", p: "✗", i: "✗", t: "✗", h: "✗", isPro: true },
    { feature: "Free forever core", taho: "✓", p: "Partial", i: "✓", t: "✓", h: "✓", partial: true }
  ];

  const renderValue = (val: string, isPro?: boolean, partial?: boolean) => {
    if (val === "✓") return <span className="text-taho-green font-bold">✓</span>;
    if (val === "✗") return <span className="text-[#444]">✗</span>;
    if (isPro && val === "✓ Pro") return <span className="text-taho-gold font-bold">{val}</span>;
    if (partial && val === "Partial") return <span className="text-taho-secondary">{val}</span>;
    return val;
  };

  return (
    <section className="bg-surface-1 py-[64px] md:py-[120px]">
      <div className="max-w-[1100px] w-full mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-jetbrains font-medium text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-[14px]">
            VS THE COMPETITION
          </div>
          <h2 className="font-outfit font-bold text-[28px] md:text-[44px] text-taho-primary tracking-[-0.01em]">
            The only mobile API tool with built-in security.
          </h2>
        </div>

        <div className="overflow-x-auto pb-6">
          <div className="min-w-[700px]">
            <table className="w-full border-collapse font-outfit text-left">
              <thead>
                <tr>
                  <th className="py-4 px-6 border-b border-card-border text-taho-secondary font-medium text-[14px]">Feature</th>
                  <th className="py-4 px-6 border-b-[2px] border-taho-gold bg-[rgba(201,146,42,0.06)] text-taho-gold font-bold text-[16px] whitespace-nowrap">Taho ✦</th>
                  <th className="py-4 px-6 border-b border-card-border text-taho-secondary font-medium text-[14px]">Postman</th>
                  <th className="py-4 px-6 border-b border-card-border text-taho-secondary font-medium text-[14px]">Insomnia</th>
                  <th className="py-4 px-6 border-b border-card-border text-taho-secondary font-medium text-[14px]">Teste</th>
                  <th className="py-4 px-6 border-b border-card-border text-taho-secondary font-medium text-[14px]">Hoppscotch</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-card-border/50 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-[14px] text-taho-primary font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-[14px] bg-[rgba(201,146,42,0.03)]">{renderValue(row.taho, row.isPro)}</td>
                    <td className="py-4 px-6 text-[14px]">{renderValue(row.p, false, row.partial)}</td>
                    <td className="py-4 px-6 text-[14px]">{renderValue(row.i)}</td>
                    <td className="py-4 px-6 text-[14px]">{renderValue(row.t)}</td>
                    <td className="py-4 px-6 text-[14px]">{renderValue(row.h)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
