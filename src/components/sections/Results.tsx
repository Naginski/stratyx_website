import { useCountUp } from "@/hooks/useCountUp";

function Stat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end, 2200);
  return (
    <div className="reveal text-center">
      <div className="text-5xl font-bold gradient-text-dark md:text-6xl">
        <span ref={ref}>{value}</span>
        {suffix}
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

export function Results() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-widest text-cyan">Resultados</span>
          <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-bold gradient-text-dark md:text-5xl">
            Impacto mensurável em cada projeto
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
          <Stat end={75} suffix="%" label="Redução de retrabalho" />
          <Stat end={3} suffix="x" label="Aumento de eficiência" />
          <Stat end={90} suffix="%" label="Decisões mais rápidas" />
          <Stat end={100} suffix="%" label="Visão estratégica clara" />
        </div>
      </div>
    </section>
  );
}
