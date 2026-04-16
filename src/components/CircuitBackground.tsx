export function CircuitBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.15 210)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 215)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g stroke="url(#lineGrad)" strokeWidth="1.2">
        <path d="M50 100 L200 100 L200 250 L400 250" strokeDasharray="1000" style={{ animation: "draw-line 4s ease-out forwards" }} />
        <path d="M700 80 L550 80 L550 200 L380 200 L380 380" strokeDasharray="1000" style={{ animation: "draw-line 5s ease-out forwards" }} />
        <path d="M100 500 L300 500 L300 380 L500 380 L500 520" strokeDasharray="1000" style={{ animation: "draw-line 6s ease-out forwards" }} />
        <path d="M750 450 L600 450 L600 320" strokeDasharray="1000" style={{ animation: "draw-line 4.5s ease-out forwards" }} />
      </g>
      <g fill="oklch(0.85 0.15 210)">
        <circle cx="200" cy="100" r="4" className="pulse-anim" />
        <circle cx="400" cy="250" r="5" className="pulse-anim" />
        <circle cx="550" cy="200" r="4" className="pulse-anim" />
        <circle cx="380" cy="380" r="5" className="pulse-anim" />
        <circle cx="300" cy="500" r="4" className="pulse-anim" />
        <circle cx="600" cy="320" r="5" className="pulse-anim" />
      </g>
    </svg>
  );
}
