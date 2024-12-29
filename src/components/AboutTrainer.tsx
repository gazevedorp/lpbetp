import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function AboutTrainer() {
  return (
    <motion.section
      id="acompanhamento"
      // Animação de entrada suave
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-16 mt-16 bg-backgroundPallet text-secondary overflow-hidden"
    >
      {/* Exemplo de background decorativo “tecnológico” (opcional) 
          Você pode trocar a imagem ou usar um pattern do Freepik.
      */}
      <div 
        className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover opacity-10"
        style={{ backgroundImage: 'url("/pattern-tech.jpg")' }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
        
        {/* Imagem da Personal Trainer */}
        <motion.div
          className="w-full lg:w-1/2"
          // Animação para a imagem
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/personal.jpg" // Substitua pela imagem real da personal trainer
              alt="Personal Trainer"
              width={600}
              height={600}
              className="object-cover h-full w-full"
              priority
            />
          </div>
        </motion.div>
        
        {/* Descrição do Acompanhamento */}
        <motion.div
          className="w-full lg:w-1/2 lg:px-8 space-y-6"
          // Animação para o conteúdo textual
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-secondary">
            Como Funciona o Acompanhamento?
          </h2>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <span className="font-semibold">
                Suporte direto no WhatsApp:
              </span>{' '}
              Como você nunca viu. Correção dos exercícios <strong>TODOS OS DIAS</strong>, baseado na biomecânica, direcionado para o seu objetivo.
            </p>
            <p>
              <span className="font-semibold">
                Ajuste dos treinos:
              </span>{' '}
              Dentro do protocolo sempre que necessário. Feedbacks e alinhamentos semanais para garantir que você esteja no caminho certo.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-secondary">
            Avaliação e Pré Consultoria:
          </h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Análise de fotos</strong> para correção postural e definição dos objetivos.
              </li>
              <li>
                <strong>Avaliação funcional</strong> através de fotos para análise de capacidade dos movimentos.
              </li>
              <li>
                <strong>Reavaliação</strong> a cada dois meses através das fotos.
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-secondary">
            Bônus:
          </h3>
          <p className="text-lg mb-6 leading-relaxed">
            <strong>Avaliação de Composição Corporal</strong> a cada dois meses para traçar objetivos.
            <br />
            <em>(Exclusivo para alunos de Ribeirão Preto ou Patos de Minas)</em>
          </p>

          {/* Botão CTA */}
          <motion.a
            href="#form" // Link para o formulário de anamnese ou outra ação
            className="inline-block bg-primary text-white py-3 px-6 rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
            // Animação de “aperto” no hover, se quiser um efeito adicional de framer-motion
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Agende sua Consultoria
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}