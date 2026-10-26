import { CONSULTING_URL } from "@/lib/contact";

export function CTA() {
  return (
    <section className="section relative overflow-hidden border-t border-border">
      <div className="wrap relative text-center">
        <h2 className="reveal mx-auto max-w-4xl text-4xl md:text-6xl">
          Soluções de IA <span className="accent">para o momento</span> da sua empresa.
        </h2>
        <p className="reveal reveal-delay-1 mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Comece por uma conversa. Em uma consultoria individual, mostramos onde a inteligência
          artificial gera mais retorno na sua operação.
        </p>
        <div className="reveal reveal-delay-2 mt-10">
          <a
            href={CONSULTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group !px-9 !py-5 text-lg"
          >
            Agendar Consultoria de IA
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              className="transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
