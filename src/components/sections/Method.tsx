const traditional = ["Pessoa", "Planilha", "Aprovação", "Sistema", "Retrabalho", "Cliente"];
const aiNative = ["Dados", "Inteligência", "Decisão", "Execução"];

const steps = [
  {
    title: "Diagnóstico",
    desc: "Entendemos a operação e escolhemos os processos onde a IA gera mais retorno.",
  },
  {
    title: "Redesenho",
    desc: "Corrigimos o processo antes de automatizar. Sem isso, só aceleramos o erro.",
  },
  {
    title: "Implementação",
    desc: "Colocamos os sistemas para rodar com a sua equipe, no dia a dia, junto com você.",
  },
  {
    title: "Evolução",
    desc: "Medimos o resultado, treinamos o time e expandimos para novas áreas.",
  },
];

function Flow({ items, highlight }: { items: string[]; highlight?: boolean }) {
  return (
    // No celular o fluxo corre em linha (com setas); a partir do md, vira uma coluna.
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 md:flex-col md:flex-nowrap md:items-start md:gap-2">
      {items.map((it, i) => (
        <li key={it} className="flex items-center gap-2 md:flex-col md:items-start md:gap-0">
          <span
            className={`rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap ${
              highlight
                ? "border-cyan/40 bg-cyan/10 text-foreground"
                : "border-border text-muted-foreground"
            }`}
          >
            <span
              className={`mr-2 font-mono text-xs ${highlight ? "text-cyan" : "text-muted-foreground/70"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {it}
          </span>
          {i < items.length - 1 && (
            <>
              <span
                className={`text-sm md:hidden ${highlight ? "text-cyan" : "text-muted-foreground/60"}`}
              >
                →
              </span>
              <span
                className={`ml-6 hidden h-4 w-px md:block ${highlight ? "bg-cyan/50" : "bg-border"}`}
              />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

export function Method() {
  return (
    <section id="metodo" className="section border-t border-border">
      <div className="wrap">
        {/* Manifesto */}
        <div className="max-w-3xl">
          <span className="eyebrow reveal">Por que é diferente</span>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl md:text-5xl">
            Por que não vendemos automação <span className="accent">de prateleira?</span>
          </h2>
          <div className="reveal reveal-delay-2 mt-8 space-y-5 text-lg text-muted-foreground">
            <p>
              A maioria das empresas tenta automatizar tudo de uma vez — e descobre, meses depois,
              que só deixou o problema mais rápido.
            </p>
            <p className="border-l-2 border-cyan pl-5 text-2xl leading-snug text-foreground">
              Automatizar um processo ruim só faz o erro acontecer mais rápido.
            </p>
            <p>
              Por isso cada projeto começa por uma conversa individual. Primeiro entendemos como a
              sua empresa funciona. Depois decidimos o que a IA deve fazer.
            </p>
          </div>
        </div>

        {/* Comparação */}
        <div className="mt-20 grid gap-5 md:grid-cols-2">
          <div className="reveal rounded-3xl border border-border p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Empresa tradicional
            </p>
            <p className="mt-2 text-muted-foreground">
              Cada etapa depende de alguém lembrar, copiar e aprovar.
            </p>
            <div className="mt-8">
              <Flow items={traditional} />
            </div>
          </div>
          <div className="reveal reveal-delay-1 rounded-3xl border border-cyan/30 bg-gradient-to-b from-cyan/[0.07] to-transparent p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
              Empresa orientada por IA
            </p>
            <p className="mt-2 text-muted-foreground">
              Os dados viram decisão e a decisão vira ação — sem gargalo.
            </p>
            <div className="mt-8">
              <Flow items={aiNative} highlight />
            </div>
          </div>
        </div>
        <p className="reveal mt-8 text-center text-muted-foreground">
          A IA assume o trabalho repetitivo.{" "}
          <span className="text-foreground">
            Sua equipe, enxuta, passa a comandar a operação inteira.
          </span>
        </p>

        {/* Etapas */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className={`reveal reveal-delay-${i + 1} bg-background p-8`}>
              <span className="font-mono text-sm text-cyan">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
