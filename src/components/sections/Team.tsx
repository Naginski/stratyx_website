import { CONSULTING_URL } from "@/lib/contact";

const before = [
  { role: "Atendente", task: "responde os mesmos clientes, as mesmas perguntas" },
  { role: "SDR", task: "qualifica leads um por um no WhatsApp" },
  { role: "Assistente financeiro", task: "digita notas e boletos no sistema" },
  { role: "Analista", task: "monta relatórios em planilha toda semana" },
  { role: "Auxiliar administrativo", task: "copia dados de um sistema para outro" },
];

const agents = [
  "Agente de atendimento",
  "SDR com IA",
  "Leitura de documentos",
  "Relatórios automáticos",
  "Integração de sistemas",
];

const gains = [
  {
    title: "Mais fluido",
    desc: "Sem filas de aprovação, sem retrabalho, sem informação perdida entre setores.",
  },
  {
    title: "Mais rápido",
    desc: "O que levava dias passa a levar minutos — e roda 24 horas por dia.",
  },
  { title: "Mais ágil", desc: "A empresa cresce sem precisar contratar na mesma proporção." },
  {
    title: "Menos dependência",
    desc: "O conhecimento fica no sistema, não na cabeça de uma pessoa só.",
  },
];

function PersonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      className={className}
    >
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

export function Team() {
  return (
    <section id="equipe" className="section border-t border-border">
      <div className="wrap">
        <div className="max-w-3xl">
          <span className="eyebrow reveal">Operação enxuta</span>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl md:text-5xl">
            O que antes exigia <span className="accent">vários funcionários</span>, agora uma pessoa
            controla.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Chegamos na sua empresa, mapeamos cada processo e transformamos o que é lento, manual e
            dependente de muita gente em um fluxo fluido, rápido e ágil.{" "}
            <span className="text-foreground">A IA executa. Sua equipe comanda.</span>
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* Antes */}
          <div className="reveal rounded-3xl border border-border p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Antes
            </p>
            <p className="mt-2 text-muted-foreground">
              Cinco pessoas presas em tarefas repetitivas.
            </p>
            <ul className="mt-8 space-y-3">
              {before.map((b) => (
                <li
                  key={b.role}
                  className="flex items-center gap-4 rounded-2xl border border-border px-4 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-muted-foreground">
                    <PersonIcon />
                  </span>
                  <span className="text-[0.95rem] leading-snug">
                    <span className="font-semibold text-foreground">{b.role}</span>{" "}
                    <span className="text-muted-foreground">{b.task}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-1 flex justify-center text-cyan" aria-hidden="true">
            <svg
              width="44"
              height="44"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              className="rotate-90 lg:rotate-0"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>

          {/* Depois */}
          <div className="reveal reveal-delay-2 rounded-3xl border border-cyan/30 bg-gradient-to-b from-cyan/[0.08] to-transparent p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Depois</p>
            <p className="mt-2 text-muted-foreground">Uma pessoa no comando. A IA faz o resto.</p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-cyan/40 bg-cyan/10 px-5 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan text-cyan-foreground">
                <PersonIcon />
              </span>
              <div>
                <p className="font-semibold text-foreground">Gestor da operação</p>
                <p className="text-sm text-muted-foreground">acompanha tudo em um único painel</p>
              </div>
            </div>

            <ul className="relative mt-3 ml-5 space-y-2 border-l border-cyan/30 pl-6 sm:ml-[2.6rem]">
              {agents.map((a) => (
                <li key={a} className="relative flex items-center gap-3 py-1.5 text-[0.95rem]">
                  <span className="absolute -left-6 top-1/2 h-px w-4 bg-cyan/30" />
                  <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-cyan" />
                  <span className="text-foreground">{a}</span>
                  <span className="ml-auto hidden rounded-full border border-border px-2.5 py-0.5 text-xs whitespace-nowrap text-muted-foreground sm:inline">
                    IA · 24h
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {gains.map((g, i) => (
            <div key={g.title} className={`reveal reveal-delay-${i + 1} bg-background p-8`}>
              <h3 className="text-xl">{g.title}</h3>
              <p className="mt-3 text-[0.95rem] text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-lg text-muted-foreground">
            Seus melhores profissionais saem do operacional e passam a cuidar do que realmente faz a
            empresa crescer.
          </p>
          <a
            href={CONSULTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shrink-0"
          >
            Quero uma operação mais enxuta
          </a>
        </div>
      </div>
    </section>
  );
}
