import { CONSULTING_URL } from "@/lib/contact";

const programs = [
  {
    tag: "Implementação",
    title: "Implementação acompanhada",
    desc: "Nosso time coloca os sistemas de IA para rodar dentro da sua operação, lado a lado com a sua equipe, até virarem rotina.",
    items: [
      "Mapeamento dos processos",
      "Configuração dos sistemas",
      "Integração com ERP, CRM e planilhas",
      "Acompanhamento semanal",
    ],
  },
  {
    tag: "Capacitação",
    title: "Treinamento em IA para equipes",
    desc: "Sua equipe aprende a usar inteligência artificial no trabalho de verdade — com os casos e as ferramentas do seu negócio.",
    items: [
      "Aulas práticas ao vivo",
      "Trilhas por área (vendas, financeiro, RH…)",
      "Engenharia de prompts",
      "Materiais e gravações",
    ],
  },
  {
    tag: "Sob medida",
    title: "Sistemas sob medida",
    desc: "Quando o pronto não serve, construímos. Agentes, automações e painéis desenhados para o seu processo específico.",
    items: [
      "Agentes de IA personalizados",
      "Automações com n8n e APIs",
      "RAG com os documentos da empresa",
      "Dashboards em Power BI",
    ],
  },
];

const tools = [
  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    invert: true,
  },
  {
    name: "Claude",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/960px-Claude_AI_symbol.svg.png",
  },
  {
    name: "Gemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/960px-Google_Gemini_icon_2025.svg.png",
  },
  {
    name: "n8n",
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/n8n-icon.png",
  },
  { name: "Lovable", logo: "https://lovable.dev/icon.svg" },
  { name: "Cursor", logo: "https://www.cursor.com/apple-touch-icon.png" },
  {
    name: "Perplexity",
    logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/perplexity-color.png",
  },
  {
    name: "Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
];

export function Programs() {
  return (
    <section id="programas" className="section border-t border-border">
      <div className="wrap">
        <div className="max-w-3xl">
          <span className="eyebrow reveal">Programas</span>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl md:text-5xl">
            Não entregamos ferramentas. <span className="accent">Entregamos capacidade.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Três frentes que se combinam conforme o momento da sua empresa.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${i + 1} flex flex-col rounded-3xl border border-border bg-surface p-8 md:p-10`}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan">
                {p.tag}
              </span>
              <h3 className="mt-4 text-2xl md:text-[1.7rem]">{p.title}</h3>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[0.95rem]">
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
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="reveal mt-20 flex flex-col gap-8 rounded-3xl border border-border p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-sm">
            <h3 className="text-xl">Trabalhamos com as principais IAs do mercado</h3>
            <p className="mt-2 text-[0.95rem] text-muted-foreground">
              + APIs próprias, RAG, fine-tuning e modelos open source.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <li
                key={t.name}
                title={t.name}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2 p-3"
              >
                <img
                  src={t.logo}
                  alt={t.name}
                  loading="lazy"
                  className={`max-h-full max-w-full object-contain ${t.invert ? "invert" : ""}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={CONSULTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Montar o programa ideal para mim
          </a>
        </div>
      </div>
    </section>
  );
}
