import { useEffect, useState } from "react";
import logo from "@/assets/stratyx-logo.jpg";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#ia", label: "IA" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#diferencial", label: "Diferencial" },
  { href: "#contato", label: "Contato" },
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
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="STRATYX" className="h-10 w-auto rounded" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors hover:text-cyan ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="https://wa.me/5565993334646?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20STRATYX."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan px-5 py-2 text-sm font-semibold text-cyan-foreground transition-all hover:scale-105 hover:shadow-glow"
          >
            Fale conosco
          </a>
        </nav>
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
