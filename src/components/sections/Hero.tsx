import { CircuitBackground } from "../CircuitBackground";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden gradient-hero">
      <div className="absolute inset-0 tech-grid opacity-40" />
      <CircuitBackground />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan/20 blur-3xl float-anim" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-glow/30 blur-3xl float-anim" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan backdrop-blur-sm reveal">
          <span className="h-2 w-2 rounded-full bg-cyan pulse-anim" />
          Inteligência Aplicada
        </span>
        <h1 className="reveal reveal-delay-1 max-w-5xl text-5xl font-bold leading-[1.05] text-white md:text-7xl">
          Transformando <span className="gradient-text">dados</span> em <span className="gradient-text">decisões</span>
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Inteligência Artificial aplicada a processos, automação e estratégia para empresas que decidem com clareza.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/5565993334646?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20STRATYX."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-4 font-semibold text-cyan-foreground transition-all hover:scale-105 hover:shadow-glow"
          >
            Fale conosco
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            Ver soluções
          </a>
        </div>

        <div className="reveal reveal-delay-4 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-10 w-[2px] bg-gradient-to-b from-cyan to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
