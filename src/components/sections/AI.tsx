const aiUseCases = [
  {
    title: "Previsão de Demanda",
    desc: "Modelos preditivos antecipam vendas, estoque e sazonalidade com alta precisão.",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 5-5M16 9h4v4" />
      </svg>
    ),
  },
  {
    title: "Análise Preditiva",
    desc: "Identificamos padrões ocultos para prever churn, riscos e oportunidades de receita.",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Chatbots Inteligentes",
    desc: "Atendimento 24/7 com IA conversacional treinada para o seu contexto de negócio.",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Classificação de Documentos",
    desc: "Leitura, extração e categorização automática de notas fiscais, contratos e PDFs.",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path strokeLinecap="round" d="M14 2v6h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Detecção de Anomalias",
    desc: "IA monitora operações em tempo real e alerta sobre fraudes, falhas e desvios.",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      </svg>
    ),
  },
  {
    title: "Recomendação Personalizada",
    desc: "Algoritmos sugerem produtos, ações ou conteúdos ideais para cada cliente.",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const benefits = [
  "Decisões baseadas em previsões, não em achismos",
  "Redução de custos operacionais com automação cognitiva",
  "Liberação do time para tarefas estratégicas",
  "Escalabilidade sem aumentar proporcionalmente a equipe",
];

export function AI() {
  return (
    <section id="ia" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan">
            <span className="h-2 w-2 rounded-full bg-cyan pulse-anim" />
            Inteligência Artificial
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-bold gradient-text-dark md:text-5xl">
            IA que gera valor real para o seu negócio
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Vamos além de modelos prontos. Aplicamos Inteligência Artificial sob medida para resolver problemas
            concretos — automatizando o operacional e ampliando a visão estratégica.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {aiUseCases.map((u, i) => (
            <div
              key={u.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-7 backdrop-blur-sm shadow-card card-hover`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan/0 to-cyan/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white transition-transform group-hover:scale-110 group-hover:-rotate-6">
                {u.icon}
              </div>
              <h3 className="relative text-lg font-bold text-foreground">{u.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits row */}
        <div className="reveal mt-20 rounded-3xl border border-border bg-gradient-to-br from-primary to-primary-deep p-10 text-white shadow-elegant md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                Por que aplicar <span className="gradient-text">IA</span> agora?
              </h3>
              <p className="mt-4 text-white/75">
                Empresas que adotam IA hoje constroem vantagem competitiva difícil de alcançar amanhã.
                Começamos pequeno, com casos de uso de alto impacto, e escalamos conforme o ROI aparece.
              </p>
            </div>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-cyan/40 hover:bg-white/10">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan text-cyan-foreground">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-white/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
