const items = [
  { title: "Dashboards dinâmicos", desc: "Visualizações em tempo real, interativas e adaptáveis ao seu negócio." },
  { title: "Análises comparativas", desc: "Benchmarks, tendências e insights cruzados para decisões fundamentadas." },
  { title: "Automação inteligente", desc: "Fluxos que aprendem e se ajustam, eliminando trabalho manual repetitivo." },
  { title: "Controle gerencial", desc: "Visão 360° das operações em uma única central estratégica de comando." },
];

export function Differential() {
  return (
    <section id="diferencial" className="relative overflow-hidden bg-primary py-28 text-white">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-cyan/20 blur-3xl float-anim" />
      <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl float-anim" style={{ animationDelay: "3s" }} />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-widest text-cyan">Diferencial</span>
          <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Não entregamos apenas relatórios —{" "}
            <span className="gradient-text">entregamos clareza estratégica.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group flex items-start gap-4 sm:gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-cyan/40 hover:bg-white/10`}
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-cyan text-cyan-foreground font-bold text-base sm:text-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold break-words">{it.title}</h3>
                <p className="mt-2 text-white/70 break-words">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
