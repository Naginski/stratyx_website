const aiTools = [
  { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Claude_AI_symbol.svg" },
  { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  { name: "Lovable", logo: "https://lovable.dev/icon.svg" },
  { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Perplexity", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg" },
  { name: "Midjourney", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png" },
  { name: "GitHub Copilot", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Cursor", logo: "https://www.cursor.com/apple-touch-icon.png" },
  { name: "n8n", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg" },
];

export function AITools() {
  return (
    <section id="ia-tools" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan">
            <span className="h-2 w-2 rounded-full bg-cyan pulse-anim" />
            Ecossistema de IA
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-bold gradient-text-dark md:text-5xl">
            Trabalhamos com as principais IAs do mercado
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Combinamos modelos de linguagem, plataformas de automação e ferramentas de desenvolvimento
            para entregar soluções de Inteligência Artificial sob medida — do prototipo ao produção.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-20 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {aiTools.map((tool, i) => (
            <div
              key={tool.name}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan/50 hover:shadow-elegant"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/0 to-cyan/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="relative text-center text-sm font-semibold text-foreground">{tool.name}</span>
            </div>
          ))}
        </div>

        <p className="reveal mt-12 text-center text-sm text-muted-foreground">
          + integrações com APIs próprias, RAG, fine-tuning e modelos open source.
        </p>
      </div>
    </section>
  );
}
