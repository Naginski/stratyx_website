import { whatsappUrl } from "@/lib/contact";

const plans = [
  {
    name: "Essencial",
    audience: "Para dar o primeiro passo com IA",
    users: "Até 3 acessos",
    features: [
      "Sistemas de IA prontos para 1 área",
      "Setup e configuração inicial",
      "Treinamento de uso para a equipe",
      "Suporte por WhatsApp",
    ],
  },
  {
    name: "Tração",
    audience: "Para escalar a operação com IA",
    users: "Até 12 acessos",
    highlight: true,
    features: [
      "Sistemas de IA para até 3 áreas",
      "Implementação acompanhada semanal",
      "Integrações com ERP, CRM e planilhas",
      "Dashboard executivo",
      "Treinamento em IA para equipes",
    ],
  },
  {
    name: "Enterprise",
    audience: "Para transformar a empresa inteira",
    users: "Acessos ilimitados",
    features: [
      "Sistemas de IA para todas as áreas",
      "Sistemas e agentes sob medida",
      "Treinamento in company",
      "Especialista dedicado",
      "Prioridade em novas funcionalidades",
    ],
  },
];

export function Plans() {
  return (
    <section id="planos" className="section border-t border-border">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">Planos</span>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl md:text-5xl">
            Escolha o ritmo <span className="accent">da sua transformação.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Todo plano começa com uma Consultoria de IA gratuita. O investimento é definido de
            acordo com o escopo.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-3xl border p-8 md:p-10 ${
                p.highlight
                  ? "border-cyan/50 bg-gradient-to-b from-cyan/[0.09] to-surface"
                  : "border-border bg-surface"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-cyan px-3 py-1 text-xs font-bold text-cyan-foreground">
                  Recomendado
                </span>
              )}
              <h3 className="text-2xl">{p.name}</h3>
              <p className="mt-2 text-muted-foreground">{p.audience}</p>
              <p className="mt-8 text-3xl font-medium tracking-tight">Sob consulta</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.users}</p>
              <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[0.95rem]">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      className="mt-1 shrink-0 text-cyan"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(`Olá, tenho interesse no plano ${p.name} da STRATYX.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn mt-10 w-full ${p.highlight ? "btn-primary" : "btn-ghost"}`}
              >
                Falar com um consultor
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
