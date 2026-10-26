import { Logo } from "@/components/Logo";
import { CONSULTING_URL, EMAIL } from "@/lib/contact";

const links = {
  Plataforma: [
    { href: "#sistemas", label: "Sistemas" },
    { href: "#programas", label: "Programas" },
    { href: "#planos", label: "Planos" },
    { href: "#faq", label: "Perguntas frequentes" },
  ],
  Redes: [
    { href: "https://br.linkedin.com/company/thestratyx", label: "LinkedIn" },
    { href: "https://www.instagram.com/stra.tyx", label: "Instagram" },
  ],
};

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border pb-28 md:pb-10">
      <div className="wrap pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-muted-foreground">
              Sistemas de inteligência artificial para empresas.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold tracking-normal text-foreground">{title}</h4>
              <ul className="mt-5 space-y-3">
                {items.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold tracking-normal text-foreground">Contato</h4>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li className="text-foreground">Eduardo C. Naginski</li>
              <li>
                <a
                  href={CONSULTING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  (65) 99333-4646
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all transition-colors hover:text-foreground"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} STRATYX · Transformando dados em decisões.</p>
        </div>
      </div>
    </footer>
  );
}
