const agroSolutions = [
  {
    title: "Gestão de Safra e Produtividade",
    desc: "Acompanhamento de talhões, produtividade por hectare, custo por saca e análise comparativa entre safras.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M5 8c0 3 3 5 7 5s7-2 7-5M5 14c0 3 3 5 7 5s7-2 7-5" />
      </svg>
    ),
  },
  {
    title: "Controle de Insumos e Estoque",
    desc: "Rastreabilidade de fertilizantes, defensivos e sementes com alertas automáticos de reposição e validade.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10" />
      </svg>
    ),
  },
  {
    title: "Maquinário e Frota",
    desc: "Monitoramento de horas-máquina, consumo de diesel, manutenção preventiva e custo operacional por implemento.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="7" cy="17" r="3" />
        <circle cx="17" cy="17" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 17H2V7h11l3 4h6v6h-2M10 17h4" />
      </svg>
    ),
  },
  {
    title: "Custo de Produção (CPV Rural)",
    desc: "Apuração detalhada de custo por talhão, cultura e safra, integrando ERP, planilhas e dados de campo.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
      </svg>
    ),
  },
  {
    title: "Comercialização e Hedge",
    desc: "Painéis de preços, posição vendida vs. produzida, exposição cambial e simulação de cenários de venda.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M14 7h7v7" />
      </svg>
    ),
  },
  {
    title: "IA Preditiva no Campo",
    desc: "Modelos de previsão de produtividade, recomendação de plantio e detecção precoce de pragas via dados climáticos e satélite.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a4 4 0 014 4c2 0 4 2 4 4a4 4 0 01-4 4h-1M12 3a4 4 0 00-4 4c-2 0-4 2-4 4a4 4 0 004 4h1M12 3v18M9 15l3 3 3-3" />
      </svg>
    ),
  },
];

const stats = [
  { value: "+30%", label: "redução em custos de insumos" },
  { value: "100%", label: "rastreabilidade da operação" },
  { value: "24/7", label: "monitoramento em tempo real" },
];

export function Agro() {
  return (
    <section id="agro" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z" />
            </svg>
            Especialidade
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-bold gradient-text-dark md:text-5xl">
            Inteligência aplicada ao Agronegócio
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Atuamos no coração do agro brasileiro: da fazenda ao escritório. Estruturamos dados de campo,
            ERPs rurais e operações comerciais para entregar visibilidade total da safra, do custo e da margem.
          </p>
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-2 mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur"
            >
              <div className="text-4xl font-bold text-cyan">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Solutions grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agroSolutions.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-card card-hover`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/10 blur-2xl transition-all group-hover:bg-cyan/30" />
              <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white">
                {s.icon}
              </div>
              <h3 className="relative text-lg font-bold text-foreground">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Integration row */}
        <div className="reveal mt-16 rounded-3xl border border-border bg-gradient-to-br from-primary to-primary-deep p-6 sm:p-10 text-white shadow-glow md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">
                Conectamos toda a cadeia produtiva do agro
              </h3>
              <p className="mt-4 text-white/80">
                Integramos sistemas como SAP Agro, Siagri, TOTVS Agro, Aegro, planilhas operacionais
                e dados de balança, telemetria e satélite em um único painel gerencial.
              </p>
              <a
                href="https://wa.me/5565993334646?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20solu%C3%A7%C3%B5es%20para%20o%20Agro."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-cyan-foreground transition-all hover:scale-105 hover:shadow-glow"
              >
                Falar com especialista do Agro
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {["SAP Agro", "TOTVS Agro", "Aegro", "Siagri", "Telemetria", "Imagens de Satélite", "Climatologia", "Balança/Romaneio"].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center font-medium backdrop-blur"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
