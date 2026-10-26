import { Helmet } from "react-helmet-async";
import { useReveal } from "@/hooks/useReveal";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { OrbBackground } from "@/components/OrbBackground";
import { Hero } from "@/components/sections/Hero";
import { Diagnostic } from "@/components/sections/Diagnostic";
import { Team } from "@/components/sections/Team";
import { Method } from "@/components/sections/Method";
import { Systems } from "@/components/sections/Systems";
import { Programs } from "@/components/sections/Programs";
import { Results } from "@/components/sections/Results";
import { Plans } from "@/components/sections/Plans";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Index() {
  useReveal();
  return (
    <>
      <Helmet>
        <title>STRATYX — Sistemas de inteligência artificial para empresas</title>
        <meta
          name="description"
          content="Sistemas de IA que tornam seus processos mais fluidos, rápidos e ágeis. O que antes exigia vários funcionários, uma pessoa passa a controlar."
        />
        <meta
          property="og:title"
          content="STRATYX — Sistemas de inteligência artificial para empresas"
        />
        <meta
          property="og:description"
          content="Sistemas de IA para vendas, atendimento, financeiro, marketing, RH, operações e agro. Agende uma Consultoria de IA."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <OrbBackground />
      <Header />
      <main>
        <Hero />
        <Diagnostic />
        <Team />
        <Method />
        <Systems />
        <Programs />
        <Results />
        <Plans />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
