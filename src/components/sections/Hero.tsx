import { Marquee } from "@/components/Marquee";
import { CONSULTING_URL } from "@/lib/contact";

const offers = [
  "Sistemas de IA prontos para uso",
  "Equipes enxutas",
  "Processos mais ágeis",
  "Implementação acompanhada",
  "Treinamento de equipes em IA",
  "Agentes autônomos",
  "Automações com n8n",
  "Soluções sob medida",
  "Dashboards inteligentes",
];

const headline = ["Sistemas", "de", "inteligência", "artificial"];
const headlineAccent = ["para", "empresas."];

function Word({ children, index, accent }: { children: string; index: number; accent?: boolean }) {
  return (
    <>
      <span
        className={`word ${accent ? "accent" : ""}`}
        style={{ animationDelay: `${0.15 + index * 0.09}s` }}
      >
        {children}
      </span>{" "}
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 md:pt-44">
      <div className="grid-lines absolute inset-0" />

      <div className="wrap relative">
        <span className="eyebrow reveal">Inteligência artificial aplicada</span>
        <h1 className="mt-6 max-w-4xl text-[2.6rem] sm:text-6xl md:text-7xl">
          {headline.map((w, i) => (
            <Word key={w} index={i}>
              {w}
            </Word>
          ))}
          {headlineAccent.map((w, i) => (
            <Word key={w} index={headline.length + i} accent>
              {w}
            </Word>
          ))}
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Chegamos na sua empresa e transformamos processos lentos e manuais em fluxos fluidos,
          rápidos e ágeis. O que antes exigia vários funcionários, uma pessoa passa a controlar.
        </p>
        <p className="reveal reveal-delay-2 mt-4 text-lg font-semibold text-foreground md:text-xl">
          Multiplique a capacidade da sua empresa. Não o tamanho dela.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={CONSULTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group"
          >
            Agendar Consultoria de IA
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              className="transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#sistemas" className="btn btn-ghost">
            Ver sistemas
          </a>
        </div>
      </div>

      <div className="reveal reveal-delay-4 relative mt-20 border-y border-border py-5">
        <Marquee
          items={offers}
          render={(o) => (
            <span className="flex items-center gap-6 px-6 text-sm font-medium whitespace-nowrap text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {o}
            </span>
          )}
        />
      </div>
    </section>
  );
}
