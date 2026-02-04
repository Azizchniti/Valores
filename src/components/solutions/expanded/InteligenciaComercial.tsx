"use client";

import Image from "next/image";

interface Challenge {
  icon: string;
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  {
    icon: "/image/icons/IC1.png",
    title: "Baixa rentabilidade e preço competitivo",
    description:
      "Implementação de estratégias de pricing dinâmico para maximizar margem. Uso de machine learning para precificação otimizada.",
  },
  {
    icon: "/image/icons/IC2.png",
    title: "Dificuldade em expandir a base de clientes",
    description:
      "Geomarketing para identificar mercados potenciais. Automação de prospecção e segmentação estratégica.",
  },
  {
    icon: "/image/icons/IC3.png",
    title: "Baixo nível de recorrência de compras",
    description:
      "Programas de fidelização e estratégias personalizadas de venda consultiva.",
  },
  {
    icon: "/image/icons/IC4.png",
    title: "Ineficiência do time comercial",
    description:
      "Treinamento contínuo e uso de BI para monitoramento de performance.",
  },
  {
    icon: "/image/icons/IC5.png",
    title: "Falta de previsibilidade nas vendas",
    description:
      "Aplicação de inteligência artificial para predição de demanda.",
  },
  {
    icon: "/image/icons/IC6.png",
    title: "Processos comerciais desalinhados",
    description:
      "Automação e reestruturação de processos comerciais para maior eficiência.",
  },
  {
    icon: "/image/icons/IC7.png",
    title: "Dificuldade em aumentar Sell-Out e Sell-In",
    description:
      "Estratégias avançadas de Trade Marketing e promoções segmentadas.",
  },
  {
    icon: "/image/icons/IC8.png",
    title: "Desafios de crescimento e fluxo de caixa",
    description:
      "Redução do prazo médio de recebimento e aumento do prazo de pagamento para otimizar capital de giro.",
  },
   {
    icon: "/image/icons/IC9.png",
    title: "Design organizacional",
    description:
      "Revisão ou implementação deestruturas, processos, indicadores e pessoal cruciais ao setor comercial, como Setores de Inteligência do Negócio, Pricing, SDR, Televendas, Gestão da Qualidade, dentre outros.",
  },
];
interface Entrega {
  icon: string;
  text: string;
}

const entregas: Entrega[] = [
  { icon: "/image/icons/E1.png", text: "Diagnóstico dos processos comerciais, compras e logística." },
  { icon: "/image/icons/E2.png", text: "Estruturação dos processos e metodologia de precificação estratégica (pricing)." },
  { icon: "/image/icons/E3.png", text: "Estudo de mercado e previsão de demandas por região." },
  { icon: "/image/icons/E4.png", text: "Estruturação organizacional e canais de vendas." },
  { icon: "/image/icons/E5.png", text: "Implantação do setor de inteligência do negócio." },
  { icon: "/image/icons/E6.png", text: "Implantação dos processos de S&OP e S&OE." },
  { icon: "/image/icons/E7.png", text: "Estratégias de marketing e trade marketing." },
  { icon: "/image/icons/E8.png", text: "Automação de indicadores de desempenho comercial (KPIs)." },
  { icon: "/image/icons/E9.png", text: "Estruturação e revisão das políticas comerciais, de pricing, compras, trade marketing e remuneração variável." },
  { icon: "/image/icons/E10.png", text: "Desenvolvimento de programas de lealdade dos clientes." },
  { icon: "/image/icons/E11.png", text: "Treinamento e capacitação da equipe comercial." },
  { icon: "/image/icons/E12.png", text: "Desenvolvimento do Planejamento Estratégico Comercial." },
];


export default function InteligenciaComercial() {
  return (
    <div className="relative z-10 px-12 pb-20 mt-14">
      {/* SECTION TITLE */}
      <h3 className="
            text-white
            text-center
            text-[26px] sm:text-[32px] lg:text-[38px]
            font-bold
            leading-[1.2]
            tracking-tight
            mb-14
          ">
        PRINCIPAIS DESAFIOS DAS EMPRESAS
        <br />
        ATACADISTAS E DISTRIBUIDORAS
      </h3>
      {/* CHALLENGES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-4 px-6 "
          >
            {/* ICON */}
            <div className="w-[90px] h-[90px] relative">
              <Image
                src={challenge.icon}
                alt={challenge.title}
                fill
                className="object-contain"
              />
            </div>

            {/* TITLE */}
           <h4 className="
                text-white
                font-semibold
                text-base
                leading-snug
              ">
              {challenge.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-white/90 text-m leading-relaxed">
              {challenge.description}
            </p>
          </div>
        ))}
     
      </div>
         <h3 className="
            text-white
            text-center
            text-[24px] sm:text-[30px] lg:text-[36px]
            font-bold
            leading-tight
            tracking-tight
            mt-16
            mb-14
          ">
        ALGUMAS DAS ENTREGAS MAIS RELEVANTES
      </h3>
      {/* ENTREGAS GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[820px] mx-auto">
  {entregas.map((entrega, idx) => (
    <div
      key={idx}
     className="
      relative
      bg-[#003C4D]
      rounded-2xl
      px-5
      pt-14
      pb-10
      min-h-[220px]
      text-center
      flex
      flex-col
      items-center
      justify-center
      shadow-lg
    "

    >
      {/* ICON CIRCLE */}
      <div className="absolute -top-8 w-24 h-24 rounded-full bg-[#58C5CC] flex items-center justify-center shadow-md">
        <Image
          src={entrega.icon}
          alt=""
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* TEXT */}
      <p className="text-white text-sm leading-relaxed mt-2">
        {entrega.text}
      </p>
    </div>
  ))}
</div>

    </div>
  );
}
