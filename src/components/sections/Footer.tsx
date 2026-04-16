import logo from "@/assets/stratyx-logo.jpg";

export function Footer() {
  return (
    <footer id="contato" className="relative bg-primary-deep text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src={logo} alt="STRATYX" className="h-14 w-auto rounded-md bg-white p-1.5" />
            <p className="mt-5 max-w-xs text-sm text-white/70">
              Inteligência aplicada para empresas que decidem com clareza.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan">Contato</h4>
            <div className="mt-5 space-y-3 text-sm">
              <p className="font-semibold text-white">Eduardo C. Naginski</p>
              <a href="tel:+5565993334646" className="flex items-center gap-3 text-white/80 transition-colors hover:text-cyan">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                (65) 99333-4646
              </a>
              <a href="mailto:stratyxinteligence@gmail.com" className="flex items-center gap-3 text-white/80 transition-colors hover:text-cyan">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" /></svg>
                stratyxinteligence@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cyan">Redes</h4>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/in/thestratyx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all hover:border-cyan hover:bg-cyan hover:text-cyan-foreground"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/stra.tyx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all hover:border-cyan hover:bg-cyan hover:text-cyan-foreground"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" strokeLinecap="round" /></svg>
              </a>
            </div>
            <p className="mt-4 text-xs text-white/50">@stra.tyx · TheStratyx</p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} STRATYX · Transformando dados em decisões.
        </div>
      </div>
    </footer>
  );
}
