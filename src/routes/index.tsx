import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Solutions } from "@/components/sections/Solutions";
import { AI } from "@/components/sections/AI";
import { Technologies } from "@/components/sections/Technologies";
import { Differential } from "@/components/sections/Differential";
import { Results } from "@/components/sections/Results";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STRATYX — Transformando dados em decisões" },
      {
        name: "description",
        content:
          "Inteligência Artificial aplicada a processos, Business Intelligence e automação. Transformamos dados em estratégia para empresas eficientes.",
      },
      { property: "og:title", content: "STRATYX — Transformando dados em decisões" },
      {
        property: "og:description",
        content:
          "IA aplicada, BI, automação e otimização de processos. Clareza estratégica para decisões mais rápidas e assertivas.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <AI />
        <Technologies />
        <Differential />
        <Results />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
