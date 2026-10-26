import type { ReactNode } from "react";

/** Faixa rolando infinitamente; os itens são duplicados para o loop não ter emenda. */
export function Marquee({
  items,
  render,
}: {
  items: string[];
  render: (item: string) => ReactNode;
}) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} aria-hidden={i >= items.length}>
            {render(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
