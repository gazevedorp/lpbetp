import React from "react";

interface Step {
  title: string;
  description: string;
}

export default function Steps() {
  const steps: Step[] = [
    {
      title: "1. Avaliar",
      description:
        "Avaliação postural e funcional. Aqui eu identificarei qual será a nossa prioridade, quais músculos estão encurtados ou relaxados, e tudo que precisa ser corrigido.",
    },
    {
      title: "2. Prescrever",
      description:
        "Planejar o TREINO PERFEITO pra você a partir de todas as informações coletadas nas avaliações.",
    },
    {
      title: "3. Praticar",
      description:
        "Agora é o momento de mergulhar de cabeça nos treinos e dar tudo de si.",
    },
    {
      title: "4. Corrigir",
      description:
        "Vídeos e feedbacks. Correção feita no WhatsApp exclusivo dos alunos da Consultoria.",
    },
    {
      title: "5. Reavaliar",
      description:
        "Enviar novas fotos. Analisar tudo o que foi feito nos 2 meses de protocolo, colher feedbacks e traçar os novos objetivos para o próximo protocolo.",
    },
  ];

  return (
    <section
      id="steps"
      className="relative snap-start pt-16 pb-4 sm:pb-8 bg-[#1a1b1c] text-secondary overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover opacity-5" />

      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-sora text-center mb-12 font-bold text-white">
          Como são as etapas da minha Consultoria?
        </h2>

        {/* Container grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative min-h-[240px] rounded-xl p-6 sm:p-8 bg-[#262728]/80 backdrop-blur-md shadow-xl flex flex-col"
            >
              {/* Número grande ao fundo */}
              <span className="absolute top-0 right-4 text-[50px] sm:text-[80px] text-primary font-extrabold opacity-20 pointer-events-none">
                {index + 1}
              </span>

              <h3 className="text-xl font-semibold font-sora text-[#f5f5f5] mb-4">
                {step.title}
              </h3>
              <p className="text-md leading-relaxed text-gray-300 font-extralight flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
