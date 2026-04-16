const techs = [
  {
    name: "Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  {
    name: "Excel / VBA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/500px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png",
  },
  {
    name: "SQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    name: "SAP ERP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  },
  {
    name: "Claude",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/960px-Claude_AI_symbol.svg.png",
  },
  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
];

export function Technologies() {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-widest text-cyan">Stack</span>
          <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-bold gradient-text-dark md:text-5xl">
            Tecnologias que utilizamos
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Ferramentas robustas integradas com inteligência para gerar valor real.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connecting lines */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
            <line x1="100" y1="100" x2="900" y2="100" stroke="oklch(0.78 0.13 215 / 0.3)" strokeWidth="1" strokeDasharray="4 6" />
          </svg>

          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {techs.map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${(i % 4) + 1} group flex flex-col items-center`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-card p-4 shadow-card transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-elegant">
                  <img src={t.logo} alt={t.name} className="h-full w-full object-contain" loading="lazy" />
                </div>
                <span className="mt-4 text-center text-sm font-semibold text-foreground">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
