import React from 'react'
import { motion } from 'framer-motion'

export default function DescriptiveSection() {
  return (
    <motion.section
      id="descriptive"
      className="relative py-16 bg-accent text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Padrão ou gradiente de fundo (opcional) */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover opacity-10"
        style={{ backgroundImage: 'url("/descriptive-bg-pattern.jpg")' }}
      ></div>

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-sora mb-8 text-center font-bold">
          Sobre Minha Consultoria
        </h2>

        <div className="space-y-12">
          {/* Introdução Geral */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              A minha Consultoria serve para iniciantes?
            </h3>
            <p>
              Com certeza! Fique tranquilo(a), você será muito bem-vindo(a) aqui.
              Comigo, você aprenderá a treinar de verdade e da forma correta
              desde o começo. Vamos minimizar os erros e aumentar os seus
              resultados desde o início.
            </p>
            <p>
              Meu método de treinamento foi desenvolvido para atender qualquer
              pessoa, independente do seu nível de treinamento ou capacidade
              física. Eu organizo todos os detalhes para que você não se sinta
              perdido(a) na academia, sem saber o que fazer ou como fazer.
            </p>
          </div>

          {/* Relatos Comuns de Mulheres */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Relatos Comuns de Mulheres
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                “Meu glúteo não cresce e não define, só consigo desenvolver as
                pernas.”
              </li>
              <li>
                “Sinto dores na lombar em exercícios como stiff e agachamento.”
              </li>
              <li>“Minhas coxas estão flácidas e sem definição.”</li>
              <li>“Não consigo aumentar a carga nos exercícios.”</li>
              <li>“Não tenho muito tempo para treinar.”</li>
              <li>
                “Tenho dificuldade em acertar nas execuções dos exercícios e
                tenho vergonha de pedir ajuda aos instrutores.”
              </li>
            </ul>
          </div>

          {/* Relatos Comuns de Homens */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Relatos Comuns de Homens
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                “Sinto dores no ombro em exercícios como supino e
                desenvolvimento.”
              </li>
              <li>“Meu joelho dói em exercícios de pernas.”</li>
              <li>“Não consigo desenvolver e progredir cargas no treino.”</li>
              <li>
                “Tenho dificuldade em fazer os exercícios com controle e
                amplitude.”
              </li>
              <li>“Não consigo crescer meu peitoral e braços.”</li>
            </ul>
          </div>

          {/* O que Você Precisa de uma Treinadora que Domine */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Você precisa de uma treinadora que domine:
            </h3>
            <p>
              Se você se identificou com algum dos relatos acima, posso te
              ajudar. Meu treinamento é fundamentado na ciência do movimento,
              oferecendo resultados reais e duradouros.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Biomecânica e a ciência do movimento.</li>
              <li>
                Avaliações físicas e funcionais para criar treinos
                personalizados.
              </li>
              <li>
                Periodização adequada de treino para resultados progressivos e
                sustentáveis.
              </li>
            </ul>
            <p>
              Muito provavelmente, você começou a treinar sem passar por uma
              avaliação adequada, e por isso, seu treino pode estar sendo feito
              de maneira aleatória, baseado em achismos e sensações. Com minha
              ajuda, você nunca mais treinará na sorte. O seu treino será 100%
              planejado com base em dados reais, por meio de avaliações físicas
              e funcionais, garantindo que você obtenha os melhores resultados
              possíveis.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}