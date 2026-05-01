const solutions = [
  {
    title: "Business Intelligence",
    desc: "Dashboards inteligentes que revelam padrões, tendências e oportunidades em tempo real.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path strokeLinecap="round" d="M7 16V10M12 16V7M17 16v-4" />
      </svg>
    ),
  },
  {
    title: "Automação de Processos",
    desc: "Eliminamos tarefas repetitivas com fluxos inteligentes, ganhando tempo e precisão.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Otimização Operacional",
    desc: "Análise profunda de operações para reduzir custos e maximizar produtividade.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Integração de Sistemas",
    desc: "Conectamos ERPs, planilhas e bases de dados em um único fluxo gerencial coeso.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path strokeLinecap="round" d="M9 6h6M9 18h6M6 9v6M18 9v6" />
      </svg>
    ),
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative bg-secondary/40 py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-widest text-cyan">Soluções</span>
          <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-bold gradient-text-dark md:text-5xl">
            Inteligência aplicada ao seu negócio
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Soluções sob medida que combinam tecnologia, dados e estratégia.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card card-hover`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/0 via-cyan/0 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-white transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground break-words">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground break-words">{s.desc}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan to-primary-glow transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
