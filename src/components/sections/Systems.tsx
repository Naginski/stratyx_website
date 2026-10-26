import { useState } from "react";
import { Marquee } from "@/components/Marquee";

type System = { name: string; desc: string };

const areas: { id: string; label: string; systems: System[] }[] = [
  {
    id: "vendas",
    label: "Vendas",
    systems: [
      {
        name: "SDR com IA",
        desc: "Qualifica leads 24h por dia no WhatsApp e entrega ao vendedor só quem está pronto para comprar.",
      },
      {
        name: "Pipeline inteligente",
        desc: "Organiza o funil, prevê fechamentos e sugere o próximo passo de cada negociação.",
      },
      {
        name: "Gerador de propostas",
        desc: "Monta propostas comerciais personalizadas em minutos, a partir da conversa com o cliente.",
      },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento",
    systems: [
      {
        name: "Agente de atendimento",
        desc: "Responde dúvidas, consulta pedidos e resolve chamados com o tom de voz da sua marca.",
      },
      {
        name: "Sucesso do cliente",
        desc: "Acompanha o cliente do onboarding à renovação e alerta antes de um cancelamento.",
      },
      {
        name: "Base de conhecimento viva",
        desc: "Transforma manuais, contratos e PDFs em respostas instantâneas para o time.",
      },
    ],
  },
  {
    id: "financeiro",
    label: "Financeiro",
    systems: [
      {
        name: "Leitura de documentos",
        desc: "Extrai dados de notas fiscais, boletos e contratos e lança direto no sistema.",
      },
      {
        name: "Fluxo de caixa preditivo",
        desc: "Projeta entradas e saídas e mostra com antecedência quando o caixa vai apertar.",
      },
      {
        name: "Conciliação automática",
        desc: "Cruza extratos, ERP e planilhas e aponta só o que precisa de atenção humana.",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    systems: [
      {
        name: "Social media com IA",
        desc: "Planeja, escreve e adapta conteúdo para cada rede mantendo a identidade da marca.",
      },
      {
        name: "Gestor de tráfego",
        desc: "Monitora campanhas, identifica desperdício de verba e sugere otimizações diárias.",
      },
      {
        name: "Cortes de vídeo",
        desc: "Transforma vídeos longos em cortes prontos para Reels, Shorts e TikTok.",
      },
    ],
  },
  {
    id: "rh",
    label: "RH",
    systems: [
      {
        name: "Triagem de currículos",
        desc: "Analisa candidatos com critérios objetivos e entrega uma lista curta e justificada.",
      },
      {
        name: "Onboarding guiado",
        desc: "Conduz o novo colaborador nas primeiras semanas e responde dúvidas sobre a empresa.",
      },
      {
        name: "Assistente de políticas",
        desc: "Responde perguntas sobre férias, benefícios e regras internas a qualquer hora.",
      },
    ],
  },
  {
    id: "operacoes",
    label: "Operações",
    systems: [
      {
        name: "Automação de processos",
        desc: "Elimina tarefas repetitivas conectando sistemas, planilhas e pessoas em fluxos com n8n.",
      },
      {
        name: "Detecção de anomalias",
        desc: "Monitora a operação em tempo real e alerta sobre falhas, fraudes e desvios.",
      },
      {
        name: "Previsão de demanda",
        desc: "Antecipa vendas, estoque e sazonalidade para comprar e produzir na medida certa.",
      },
    ],
  },
  {
    id: "agro",
    label: "Agro",
    systems: [
      {
        name: "Gestão de safra",
        desc: "Produtividade por talhão, custo por saca e comparativo entre safras em um só painel.",
      },
      {
        name: "IA preditiva no campo",
        desc: "Previsão de produtividade e alertas de pragas a partir de clima, satélite e histórico.",
      },
      {
        name: "Comercialização e hedge",
        desc: "Acompanha preços, posição vendida e exposição cambial com simulação de cenários.",
      },
    ],
  },
  {
    id: "gestao",
    label: "Gestão",
    systems: [
      {
        name: "Dashboard executivo",
        desc: "Todos os números da operação em um painel único, atualizado sozinho.",
      },
      {
        name: "Analista de dados com IA",
        desc: "Pergunte em português e receba a resposta com gráfico, direto dos seus dados.",
      },
      {
        name: "Relatórios automáticos",
        desc: "Relatórios gerenciais prontos toda segunda-feira, sem ninguém montar planilha.",
      },
    ],
  },
];

const allSystems = areas.flatMap((a) => a.systems.map((s) => s.name));

export function Systems() {
  const [active, setActive] = useState(areas[0].id);
  const area = areas.find((a) => a.id === active)!;

  return (
    <section id="sistemas" className="section border-t border-border">
      <div className="wrap">
        <div className="max-w-3xl">
          <span className="eyebrow reveal">Sistemas</span>
          <h2 className="reveal reveal-delay-1 mt-5 text-4xl md:text-5xl">
            Uma infraestrutura completa de IA <span className="accent">para cada área</span> da sua
            empresa.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-muted-foreground">
            Sistemas prontos, adaptados ao seu processo. Escolha uma área para ver o que já pode
            estar funcionando na sua operação.
          </p>
        </div>
      </div>

      <div className="reveal mt-14 py-2">
        <Marquee
          items={allSystems}
          render={(s) => (
            <span className="mx-2 inline-block rounded-full border border-border bg-surface px-5 py-2.5 text-sm whitespace-nowrap text-muted-foreground">
              {s}
            </span>
          )}
        />
      </div>

      <div className="wrap mt-14">
        <div
          role="tablist"
          aria-label="Áreas"
          className="reveal no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {areas.map((a) => (
            <button
              key={a.id}
              role="tab"
              aria-selected={a.id === active}
              onClick={(e) => {
                setActive(a.id);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                a.id === active
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          key={area.id}
          className="mt-8 grid gap-4 md:grid-cols-3 animate-in fade-in duration-500"
        >
          {area.systems.map((s) => (
            <article
              key={s.name}
              className="group flex flex-col rounded-3xl border border-border bg-surface p-8 transition-colors hover:border-cyan/40"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan">
                {area.label} · IA
              </span>
              <h3 className="mt-4 text-2xl">{s.name}</h3>
              <p className="mt-3 text-[0.95rem] text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-muted-foreground">
          Não encontrou o que precisa?{" "}
          <a
            href="#programas"
            className="font-semibold text-foreground underline decoration-cyan underline-offset-4"
          >
            Desenvolvemos sob medida.
          </a>
        </p>
      </div>
    </section>
  );
}
