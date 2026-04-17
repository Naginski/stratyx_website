import { Helmet } from "react-helmet-async";
import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Solutions } from "@/components/sections/Solutions";
import { Agro } from "@/components/sections/Agro";
import { AI } from "@/components/sections/AI";
import { AITools } from "@/components/sections/AITools";
import { Technologies } from "@/components/sections/Technologies";
import { Differential } from "@/components/sections/Differential";
import { Results } from "@/components/sections/Results";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Index() {
  useReveal();
  return (
    <>
      <Helmet>
        <title>STRATYX — Transformando dados em decisões</title>
        <meta
          name="description"
          content="Inteligência Artificial aplicada a processos, Business Intelligence e automação. Transformamos dados em estratégia para empresas eficientes."
        />
        <meta property="og:title" content="STRATYX — Transformando dados em decisões" />
        <meta
          property="og:description"
          content="IA aplicada, BI, automação e otimização de processos. Clareza estratégica para decisões mais rápidas e assertivas."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Agro />
        <AI />
        <AITools />
        <Technologies />
        <Differential />
        <Results />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
