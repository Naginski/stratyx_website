import { CONSULTING_URL } from "@/lib/contact";

const questions = [
  <>
    Quantas horas por semana sua equipe gasta <span className="accent">copiando dados</span> de um
    sistema para outro?
  </>,
  <>
    Se o seu melhor vendedor sair amanhã, <span className="accent">o processo dele continua</span>{" "}
    funcionando?
  </>,
  <>
    Suas decisões da última semana foram tomadas com <span className="accent">dados de hoje</span> —
    ou do mês passado?
  </>,
];

export function Diagnostic() {
  return (
    <section className="section">
      <div className="wrap grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <span className="eyebrow reveal">Diagnóstico</span>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl md:text-5xl">
            Responda com honestidade.
          </h2>
          <ol className="mt-12 space-y-0">
            {questions.map((q, i) => (
              <li
                key={i}
                className={`reveal reveal-delay-${i + 1} flex gap-6 border-t border-border py-7 last:border-b`}
              >
                <span className="pt-1 font-mono text-sm text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xl leading-snug text-foreground md:text-2xl">{q}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal reveal-delay-2 rounded-3xl border border-border bg-surface p-8 md:p-10">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="pulse-dot h-2 w-2 rounded-full bg-cyan" />
            Conversa individual
          </span>
          <h3 className="mt-5 text-2xl md:text-3xl">
            Se alguma resposta incomodou, vale uma conversa.
          </h3>
          <p className="mt-4 text-muted-foreground">
            Mapeamos com você onde a inteligência artificial gera retorno real na sua operação — e
            onde ainda não vale a pena.
          </p>
          <a
            href={CONSULTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-8 w-full"
          >
            Agendar Consultoria de IA
          </a>
        </div>
      </div>
    </section>
  );
}
