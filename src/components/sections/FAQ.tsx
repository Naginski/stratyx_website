import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "A STRATYX é um curso?",
    a: "Não. Somos uma empresa de implementação de inteligência artificial. Colocamos sistemas de IA para funcionar dentro da sua operação. O treinamento de equipes é parte do trabalho, não o produto principal.",
  },
  {
    q: "Vou precisar de menos funcionários?",
    a: "Na maioria dos processos, sim. A IA assume as tarefas repetitivas — atender, digitar, copiar dados, montar relatórios — e uma pessoa passa a controlar o que antes exigia uma equipe inteira. Você decide se reduz custos ou se realoca o time para atividades que fazem a empresa crescer.",
  },
  {
    q: "Preciso saber programar ou ter um time de tecnologia?",
    a: "Não. Nós cuidamos da parte técnica — configuração, integrações e manutenção. Sua equipe só precisa aprender a usar, e é isso que o nosso treinamento resolve.",
  },
  {
    q: "A implementação está inclusa?",
    a: "Sim. Todos os planos incluem o setup inicial. Nos planos Tração e Enterprise, acompanhamos a implementação semanalmente até os sistemas virarem rotina.",
  },
  {
    q: "Em quanto tempo vejo os primeiros resultados?",
    a: "Depende do escopo, mas começamos sempre pelos processos de maior retorno e menor complexidade, para que os primeiros ganhos apareçam rápido. O cronograma é definido na consultoria inicial.",
  },
  {
    q: "Funciona com os sistemas que já uso?",
    a: "Na maioria dos casos, sim. Integramos com ERPs, CRMs, planilhas, WhatsApp e bancos de dados. Se houver alguma limitação, você fica sabendo na consultoria inicial — antes de qualquer contratação.",
  },
  {
    q: "Atendem empresas do agronegócio?",
    a: "Sim, é uma das nossas especialidades. Temos sistemas específicos para gestão de safra, custo de produção, maquinário e comercialização, com integração aos principais ERPs rurais.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Trabalhamos com controle de acesso, ambientes isolados por cliente e boas práticas da LGPD. Os dados da sua empresa não são usados para treinar modelos públicos.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section border-t border-border">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <span className="eyebrow reveal">FAQ</span>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl md:text-5xl">Perguntas frequentes</h2>
          <p className="reveal reveal-delay-2 mt-6 text-muted-foreground">
            Não encontrou sua dúvida? Fale com a gente no WhatsApp.
          </p>
        </div>
        <Accordion type="single" collapsible className="reveal border-t border-border">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="py-6 text-lg font-medium hover:no-underline md:text-xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
