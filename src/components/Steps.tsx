import React from "react";
import { motion } from "framer-motion";

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
      description: "Agora é o momento de mergulhar de cabeça nos treinos e dar tudo de si.",
    },
    {
      title: "4. Corrigir",
      description:
        "Vídeos e feedbacks. Correção feita no WhatsApp exclusivo dos alunos da Consultoria.",
    },
  ];

  return (
    <section
      id="steps"
      className="relative snap-start py-16 bg-[#1a1b1c] text-secondary overflow-hidden"
    >
      {/* Exemplo de background decorativo tecnológico (opcional) */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover opacity-5"
        style={{ backgroundImage: 'url("/bg-steps-pattern.jpg")' }}
      />

      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-sora text-center mb-12 font-bold text-white">
          Como são as etapas da minha Consultoria?
        </h2>

        {/* Grid responsiva com animações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-xl p-8 bg-[#262728]/80 backdrop-blur-md shadow-xl"
            >
              {/* Número grande ao fundo (disruptivo) */}
              <span className="absolute top-0 right-4 text-[80px] text-primary font-extrabold opacity-20 pointer-events-none">
                {index + 1}
              </span>

              <h3 className="text-xl font-semibold font-sora text-[#f5f5f5] mb-4">
                {step.title}
              </h3>
              <p className="text-md leading-relaxed text-gray-300 font-extralight">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}