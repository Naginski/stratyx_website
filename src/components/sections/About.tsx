const pillars = [
  {
    title: "Dados",
    desc: "Coletamos e estruturamos informações estratégicas das mais diversas fontes.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "Estratégia",
    desc: "Transformamos análises em direcionamentos claros para decisões assertivas.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    ),
  },
  {
    title: "Tecnologia",
    desc: "Aplicamos IA, BI e automação para escalar resultados com eficiência.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path strokeLinecap="round" d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
  },
  {
    title: "Resultados",
    desc: "Mensuramos impacto real: eficiência, redução de custos e crescimento.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 5-5" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-widest text-cyan">A STRATYX</span>
          <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-bold md:text-5xl gradient-text-dark">
            Especialistas em transformar dados em estratégia
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Combinamos inteligência analítica, automação e visão de negócio para entregar clareza,
            eficiência e crescimento sustentável às empresas que querem decidir com base em fatos.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card card-hover`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan/10 blur-2xl transition-all group-hover:bg-cyan/30" />
              <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white">
                {p.icon}
              </div>
              <h3 className="relative text-xl font-bold text-foreground">{p.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
