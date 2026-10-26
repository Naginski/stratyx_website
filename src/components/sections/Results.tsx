import { useCountUp } from "@/hooks/useCountUp";

function Stat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end, 2200);
  return (
    <div className="reveal border-t border-border pt-8">
      <div className="text-6xl font-medium tracking-tight text-foreground md:text-7xl">
        <span ref={ref}>{value}</span>
        <span className="text-cyan">{suffix}</span>
      </div>
      <p className="mt-4 max-w-[16rem] text-muted-foreground">{label}</p>
    </div>
  );
}

export function Results() {
  return (
    <section className="section border-t border-border">
      <div className="wrap">
        <span className="eyebrow reveal">Resultados</span>
        <h2 className="reveal reveal-delay-1 mt-5 max-w-3xl text-4xl md:text-5xl">
          Impacto mensurável <span className="accent">em cada projeto.</span>
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <Stat end={75} suffix="%" label="de redução de retrabalho nos processos automatizados" />
          <Stat end={3} suffix="x" label="mais eficiência operacional com a mesma equipe" />
          <Stat end={90} suffix="%" label="mais velocidade na tomada de decisão" />
        </div>
      </div>
    </section>
  );
}
