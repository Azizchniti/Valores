"use client";

import Image from "next/image";
import { FiUser } from "react-icons/fi";

interface Container {
  title: string;
  services: string[];
}

interface Step {
  number: string;
  title: string;
  items: string[];
}

/* ===================== DATA ===================== */

const containerData = [
  {
    title: "Recursos Humanos e Departamento Pessoal",
    services: [
      "Recrutamento e Seleção",
      "Admissão",
      "Onboarding",
      "Avaliação de Desempenho",
      "Treinamento e Desenvolvimento",
      "Gestão do Clima Organizacional",
      "Desligamento",
      "Controle de Absenteísmo e Turnover",
      "Avaliação Período de Experiência",
      "Controle de Afastamentos",
      "Controle Preventivo do Ponto Eletrônico",
      "Gestão de Férias",
      "Solicitações Diversas RH/DP",
    ],
  },
  {
    title: "Compras",
    services: [
      "Gestão de Pedidos e Fornecedores",
      "Previsão de demandas",
      "Análise de cotações",
      "Gestão de estoque",
      "Controle de rupturas",
      "Controle de perdas",
      "Processo de trocas",
      "Devolução de Mercadorias",
      "Gestão de Pricing",
      "Monitoramento Preços Concorrentes",
      "Elasticidade de precificação",
      "Gestão de Compras",
      "Qualificação de Fornecedores",
      "Análises de Estoque",
      "Agendamento de entregas",
      "Prospecção de Fornecedores",
    ],
  },
  {
    title: "Comercial",
    services: [
      "Performance de Vendas por Canal",
      "Análise de Agenda de Vendas",
      "Prospecção 24h de Clientes (SDR)",
      "Gestão de Televendas",
      "JBP",
      "Playbook de Vendas",
      "Predição de Vendas",
      "Ritos de Gestão S&OP/S&OE",
      "Auditoria de Políticas Comerciais",
      "Atendimento ao Cliente (SAC)",
      "Pesquisas CSAT/NPS P&D de Produtos",
      "Gestão de OS",
      "Avaliação de Serviços Prestados",
    ],
  },
  {
    title: "Financeiro",
    services: [
      "Gestão e Previsão de Fluxo de Caixa",
      "Gestão de Necessidade de Capital de Giro (NCG)",
      "Gestão do Capital de Giro",
      "Análises Estatísticas do DRE",
      "Gestão Orçamentária",
      "Controladoria de Custos",
      "Conciliação Bancária",
      "Detecção de Fraudes",
      "Controle de Inadimplência e Cobrança de Clientes",
      "Solicitações Diversas ao Setor",
    ],
  },
  {
    title: "Marketing e Trade Marketing",
    services: [
      "Gestão de Campanhas",
      "Criação de Conteúdos",
      "Criação de Artes Gráficas",
      "Gestão de Solicitações",
      "Avaliação dos Resultados das Campanhas",
      "Análises de Indicadores de Marketing",
      "Gestão de Planogramas",
      "Gestão Promotoria de Vendas",
      "Otimização de Layouts",
      "Monitoramento de Promoções",
      "Auditoria de Loja Perfeita",
      "Gestão de Campanhas de Sell Out",
    ],
  },
  {
    title: "Logística e Transporte",
    services: [
      "Acompanhamento 24h de veículos em rota",
      "Agendamento de Entregas",
      "Solicitações Diversas ao Setor",
      "Roteirização Inteligente",
      "Gestão de Frotas",
      "Análises Técnicas de Performances",
    ],
  },
  {
    title: "Industrial e Gestão da Qualidade",
    services: [
      "Planejamento e Controle da Produção (PCP)",
      "Análise de Necessidade de Materiais (MRP)",
      "Análises Preditivas",
      "Análise de OEE",
      "Gestão de Não-Conformidades",
      "Auditorias ISSO/ONA",
      "Gestão de Planos de Ação (5W2H)",
      "Planos de Mudança",
      "Treinamentos de POP",
      "Manutenção Preventiva/Preditiva",
      "Solicitações ao Setor",
      "Atendimento Automático (SOS)",
      "Alertas de Manutenção",
      "Gestão de Calibração",
      "Gestão de Checklists",
    ],
  },
  {
    title: "Governança",
    services: [
      "Gestão do Planejamento Estratégico",
      "Gestão de Riscos Corporativos",
      "Monitoramento de Compliance",
      "Due Diligence Automatizada",
      "Plano de Sucessão",
      "Ritos de Prestação de Contas",
      "Avaliação de Performance",
      "Canal de Denúncias / Integridade",
      "Gestão do Calendário",
      "Auditoria e Gestão de Metas",
    ],
  },
  {
    title: "Gestão de Processos e Projetos",
    services: [
      "Automação de Indicadores de Desempenho",
      "Auditorias de Processos",
      "Ouvidoria",
      "Mapeamento Automatizado de Processos",
      "Análise Crítica da Performance dos Processos",
      "PDCA Automatizado",
      "Previsão de atrasos",
      "Análise de Recursos",
      "Análise de Performance do Escopo",
      "Comunicação Automatizada entre Stakeholders",
    ],
  },
];
const metodologiaSteps = [
  {
    number: "1",
    title: "Diagnóstico das Oportunidades",
    items: [
      "Matriz de Priorização de automação (Esforço X Impacto);",
      "Modelagem do processo e identificação das oportunidades de automação;",
      "Levantamento dos requisitos de automação e integração com outras soluções (com todos os stakeholders);",
      "Definição do esforço de implantação (HH implantação fluxo automatizado).",
    ],
  },
  {
    number: "2",
    title: "Planejamento das Operações",
    items: [
      "Apresentação do Escopo do Projeto de Automação e integração com outras soluções;",
      "Apresentação do Plano de Ações do Projeto de Automação e integração;",
      "Aprovação do Projeto de Automação de Processos.",
    ],
  },
  {
    number: "3",
    title: "Execução e Implementação",
    items: [
      "Construção dos fluxos automatizados (pipes);",
      "Apresentação e validação com as áreas clientes;",
      "Ajustes e alterações solicitadas pelas áreas;",
      "Realização de pelo menos 02 ciclos de testes;",
      "Homologação com as áreas-clientes e TI.",
    ],
  },
  {
    number: "4",
    title: "Acompanhamento e Operação Assistida",
    items: [
      "Implantação do processo automatizado no ambiente de produção;",
      "Operação assistida (monitoramento dos primeiros dias de operação);",
      "Ajustes finais de estabilização;",
      "Entrega do vídeo-tutorial (instrução de trabalho) da operacionalização do fluxo automatizado.",
    ],
  },
];

/* ===================== COMPONENT ===================== */

export default function AutomacaoProcessos() {
  return (
    <>
      {/* SERVICES GRID */}
      <div className="relative z-10 px-12 pb-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {containerData.map((container, idx) => (
          <div
            key={idx}
            className="bg-[#003C4D] rounded-3xl p-6 flex flex-col items-center gap-4 max-w-[320px] w-full mx-auto"
          >
            <FiUser size={34} className="text-white" />

            <h5 className="text-[#59A8AD] font-semibold text-center">
              {container.title}
            </h5>

            <ul className="w-full flex flex-col gap-2">
              {container.services.map((service, sidx) => (
                <li key={sidx} className="flex items-center gap-3">
                  <div className="w-10 h-5 bg-[#59A8AD] rounded-full relative flex-shrink-0">
                    <div className="w-3 h-3 bg-[#003C4D] rounded-full absolute right-1 top-1" />
                  </div>
                  <span className="text-white text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

     {/* METODOLOGIA */}
<div className="relative z-10 px-6 sm:px-12 pb-16 mt-14">
  <h3 className="text-white text-center text-2xl sm:text-3xl font-bold mb-10 sm:mb-14">
    ABORDAGEM METODOLÓGICA
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
    {metodologiaSteps.map((step) => (
      <div key={step.number} className="flex flex-col gap-6 h-full">
        <div className="flex flex-col sm:flex-row sm:items-start items-center gap-4 sm:gap-6">
          {/* Number Circle */}
          <div
            className="
              w-[64px] sm:w-[96px]
              h-[64px] sm:h-[96px]
              rounded-full
              flex
              items-center
              justify-center
              flex-shrink-0
              text-white
              font-bold
              text-[32px] sm:text-[48px]
              leading-none
              translate-y-[1px]
            "
            style={{ backgroundColor: "#58C5CC" }}
          >
            {step.number}
          </div>

          {/* Step Title */}
          <h4 className="text-white font-bold text-[24px] sm:text-[42px] leading-tight text-center sm:text-left">
            {step.title}
          </h4>
        </div>

        {/* Step Items */}
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-white/90 text-[14px] sm:text-[16px]">
          {step.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
    </>
  );
} 