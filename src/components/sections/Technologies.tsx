const techs = [
  { name: "Power BI", color: "from-yellow-400 to-orange-500" },
  { name: "Excel / VBA", color: "from-green-500 to-emerald-600" },
  { name: "SQL", color: "from-blue-500 to-cyan-600" },
  { name: "ERP", color: "from-purple-500 to-indigo-600" },
  { name: "XML Fiscal", color: "from-rose-500 to-pink-600" },
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

          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-5">
            {techs.map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${(i % 4) + 1} group flex flex-col items-center`}
              >
                <div className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${t.color} shadow-elegant transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <span className="text-2xl font-bold text-white">{t.name.charAt(0)}</span>
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
