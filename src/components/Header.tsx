import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { CONSULTING_URL } from "@/lib/contact";

const nav = [
  { href: "#equipe", label: "Operação" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#metodo", label: "Método" },
  { href: "#programas", label: "Programas" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between py-4">
        <a href="#top" aria-label="STRATYX — início">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href={CONSULTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !px-5 !py-2.5 text-sm"
          >
            Agendar Consultoria de IA
          </a>
        </nav>
        <button
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors active:bg-white/10 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="wrap flex flex-col pb-6 lg:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 text-base font-medium text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href={CONSULTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-6"
          >
            Agendar Consultoria de IA
          </a>
        </nav>
      )}
    </header>
  );
}
