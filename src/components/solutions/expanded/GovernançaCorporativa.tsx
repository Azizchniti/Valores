"use client";

import Image from "next/image";

const entregasGovernanca = [
  "Implantação da Estrutura de Governança",
  "Ética Empresarial",
  "Transparência Financeira",
  "Relação com Fornecedores, Clientes e Funcionários",
  "Gestão de Riscos Corporativos",
  "Gestão por Processos e Projetos",
  "Planejamento Estratégico",
  "Melhoria e Automação de Processos",
  "Automação de Indicadores",
  "Implantação de Ritos de Governança (Estratégico, Tático e Operacional)",
  "Definição de Papéis e Responsabilidades (acionistas e stakeholders)",
  "Compensações de Acionistas e Funcionários (Meritocracia)",
  "Revisão e Melhoria das Políticas Empresariais",
  "Modelagem e Melhoria de Processos",
  "Curadoria de Dados (Gestão Eletrônica de Dados)",
  "Inovação do Modelo de Negócios",
  "Treinamento e Desenvolvimento de Competências Estratégicas",
  "Culturas Organizacionais Positivas (Data Driven, Kaizen, Accountability, DevOps, Confiança)",
  "Direitos dos Sócios, Auditoria e Conformidades",
];

export default function GovernancaCorporativa() {
  return (
    <section className="relative z-10 px-6 lg:px-16 py-24">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6">
          GOVERNANÇA CORPORATIVA
        </h2>

        <p className="text-[#9EDFE1] text-lg font-semibold tracking-wide uppercase mb-6">
          Planejamento • Processos • Projetos • Pessoas
        </p>

        <p className="text-white/90 text-lg leading-relaxed">
          A governança corporativa é um conjunto de práticas, políticas e processos
          que garantem que a empresa seja administrada de forma ética, transparente
          e eficiente, promovendo a tomada de decisões responsáveis e alinhadas aos
          objetivos estratégicos do negócio.
        </p>
      </div>

      {/* VALUE TEXT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-28">
        
        {/* TEXT */}
        <div className="text-white/90 text-lg leading-relaxed space-y-6">
          <p>
            Implantar um programa de governança corporativa é uma iniciativa
            essencial para assegurar ritos eficazes de gestão, clareza nos papéis
            organizacionais, eficiência operacional e alinhamento entre
            responsabilidades, recompensas e os propósitos estratégicos da empresa.
          </p>

          <p>
            Nossa abordagem integra estratégia, processos, tecnologia e pessoas,
            criando estruturas sólidas que sustentam o crescimento, reduzem riscos
            e fortalecem a confiança entre acionistas e demais stakeholders.
          </p>
        </div>

        {/* VISUAL CARD */}
        <div className="relative bg-[#003C4D] rounded-3xl p-10 shadow-xl border border-white/10">
          <h3 className="text-white text-2xl font-bold mb-4">
            Proposta de Valor
          </h3>

          <p className="text-white/80 leading-relaxed">
            Estruturamos e fortalecemos a governança corporativa para transformar
            estratégia em execução, dados em decisões e processos em vantagem
            competitiva sustentável.
          </p>

          <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-[#58C5CC] flex items-center justify-center shadow-lg">
            <Image
              src="/image/icons/E12.png"
              alt="Governança"
              width={42}
              height={42}
            />
          </div>
        </div>
      </div>

      {/* DELIVERIES */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-white text-center text-3xl lg:text-4xl font-bold mb-16">
          Algumas das Entregas Mais Relevantes
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {entregasGovernanca.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-[#002E3C]
                border
                border-white/10
                rounded-2xl
                p-6
                text-white/90
                text-sm
                leading-relaxed
                hover:border-[#58C5CC]
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#58C5CC]" />
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
