import React from 'react'
import { motion } from 'framer-motion'

interface Step {
  title: string
  description: string
}

export default function Steps() {
  const steps: Step[] = [
    {
      title: '1. Avaliar',
      description:
        'Avaliação postural e funcional. Aqui eu identificarei qual será a nossa prioridade, quais músculos estão encurtados ou relaxados, e tudo que precisa ser corrigido.',
    },
    {
      title: '2. Prescrever',
      description:
        'Planejar o TREINO PERFEITO pra você a partir de todas as informações coletadas nas avaliações.',
    },
    {
      title: '3. Colocar em prática',
      description:
        'Agora é a sua hora de treinar e dar o máximo de si.',
    },
    {
      title: '4. Corrigir',
      description:
        'Vídeos e feedbacks. Correção feita no WhatsApp exclusivo dos alunos da Consultoria.',
    },
  ]

  return (
    <section
      id="steps"
      className="relative py-16 bg-background text-secondary overflow-hidden"
    >
      {/* Exemplo de background decorativo tecnológico (opcional) */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover opacity-5"
        style={{ backgroundImage: 'url("/bg-steps-pattern.jpg")' }} 
      />

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-sora text-center mb-12 font-bold">
          Como são as etapas da minha Consultoria?
        </h2>

        {/* Grid responsiva com animações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white text-secondary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Número grande ao fundo (disruptivo) */}
              <span className="absolute top-4 right-4 text-[80px] text-primary font-extrabold opacity-10 pointer-events-none">
                {index + 1}
              </span>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}