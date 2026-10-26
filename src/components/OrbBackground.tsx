import { useEffect, useRef } from "react";

/**
 * Orbe de luz fixo atrás do conteúdo. Segue o mouse com atraso suave; sem mouse (celular),
 * flutua sozinho. A cor desliza de ciano para azul/violeta conforme a página rola.
 */
export function OrbBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Gradientes suaves não precisam de resolução cheia: meia resolução é mais leve e já "desfoca".
    const SCALE = 0.5;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * SCALE);
      canvas.height = Math.round(h * SCALE);
      ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    };
    resize();

    const target = { x: w * 0.68, y: h * 0.38 };
    const pos = { ...target };
    let lastPointer = -Infinity;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      lastPointer = performance.now();
    };

    const draw = (now: number) => {
      const t = now / 1000;

      // Depois de 4s sem mouse, volta a flutuar sozinho.
      if (now - lastPointer > 4000) {
        target.x = w * (0.55 + 0.25 * Math.sin(t * 0.23));
        target.y = h * (0.42 + 0.18 * Math.cos(t * 0.31));
      }
      pos.x += (target.x - pos.x) * 0.055;
      pos.y += (target.y - pos.y) * 0.055;

      const maxScroll = document.documentElement.scrollHeight - h;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      const baseHue = 192 + progress * 60; // ciano -> azul -> violeta

      const R = Math.max(Math.min(w, h) * 0.34, 200);

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      // Quatro bolhas orbitando o centro formam um orbe orgânico que "respira".
      for (let i = 0; i < 4; i++) {
        const a = t * (0.35 + i * 0.12) + i * 1.7;
        const bx = pos.x + Math.cos(a) * R * 0.32;
        const by = pos.y + Math.sin(a * 1.3) * R * 0.32;
        const r = R * (0.75 + 0.12 * Math.sin(t * 0.8 + i));
        const hue = baseHue + i * 14;
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, r);
        g.addColorStop(0, `hsla(${hue}, 90%, 58%, 0.42)`);
        g.addColorStop(0.45, `hsla(${hue}, 85%, 45%, 0.16)`);
        g.addColorStop(1, `hsla(${hue}, 80%, 40%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(bx, by, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Núcleo brilhante
      const core = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, R * 0.3);
      core.addColorStop(0, `hsla(${baseHue - 6}, 100%, 82%, 0.38)`);
      core.addColorStop(1, `hsla(${baseHue}, 100%, 70%, 0)`);
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, R * 0.3, 0, Math.PI * 2);
      ctx.fill();
    };

    let raf = 0;
    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    if (reduceMotion) {
      draw(0);
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      style={{ filter: "blur(40px) saturate(1.15)" }}
    />
  );
}
