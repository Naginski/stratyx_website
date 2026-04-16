import { CircuitBackground } from "../CircuitBackground";

export function CTA() {
  return (
    <section className="relative overflow-hidden gradient-hero py-28 text-white">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <CircuitBackground />
      <div className="container relative mx-auto px-6 text-center">
        <h2 className="reveal mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Empresas eficientes são construídas com{" "}
          <span className="gradient-text">decisões bem fundamentadas.</span>
        </h2>
        <p className="reveal reveal-delay-1 mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Vamos transformar seus dados em vantagem competitiva.
        </p>
        <div className="reveal reveal-delay-2 mt-10">
          <a
            href="https://wa.me/5565993334646?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20STRATYX."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-cyan px-10 py-5 text-lg font-semibold text-cyan-foreground transition-all hover:scale-105 hover:shadow-glow pulse-anim"
          >
            Falar com especialista
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1">
              <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
