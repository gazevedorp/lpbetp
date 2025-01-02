import React from 'react';
import { motion } from 'framer-motion';

export default function DescriptiveSection() {
  return (
    <section
      id="descriptive"
      className="relative bg-[#1a1b1c] text-white overflow-hidden"
    >
      {/* Wave superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(120%+1.3px)] h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.33c56.2,29.56,112.4,59.13,168.67,57.56,56.07-1.57,112.13-34.3,168.2-35.55,56.27-1.22,112.53,31.68,168.8,28.73,56.2-2.81,112.4-42.29,168.67-45.31,56.07-3,112.13,30.4,168.2,28.3,56.27-2.24,112.53-42.68,168.8-47.3C1299.18,37,1355.7,39,1411.49,41V120H0V95.99C38.58,76.25,94.74,26.77,151,26.19c56.27-.51,112.53,48.05,168.8,30.14Z"
            fill="#1a1b1c"
          />
        </svg>
      </div>

      {/* Conteúdo principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 space-y-24">
        {/* Seção 1: Introdução */}
        <div className="space-y-12">
          <h2 className="text-center text-3xl font-bold font-sora leading-tight">
            A minha Consultoria <br className="hidden sm:block" />
            <span className="text-primary">serve para iniciantes?</span>
          </h2>

          <div className="text-center max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
            <p>
              Com certeza! Você será muito bem-vindo(a) aqui. Comigo, vai
              aprender a treinar de verdade e da forma correta desde o começo,
              minimizando erros e aproveitando ao máximo o seu potencial.
            </p>
            <p>
              Meu método de treinamento foi desenvolvido para atender qualquer
              pessoa, independentemente do nível de experiência ou capacidade
              física. Cuidarei de todos os detalhes para que você não se sinta
              perdido(a) na academia e saiba exatamente o que fazer.
            </p>
          </div>
        </div>
        {/* Seção 2: Relatos Comuns (com layout criativo) */}
        <div className="relative bg-[#262728] p-8 rounded-xl shadow-lg space-y-8">
          <h3 className="text-3xl font-bold text-center font-sora mb-8">
            Relatos Comuns
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Coluna de Mulheres */}
            <div>
              <h4 className="text-2xl font-semibold mb-6 border-b border-gray-500 pb-2 inline-block">
                Mulheres
              </h4>
              <div className="space-y-6 text-base leading-relaxed">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Meu glúteo não cresce e não define, só consigo desenvolver
                  as pernas.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Sinto dores na lombar em exercícios como stiff e
                  agachamento.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Minhas coxas estão flácidas e sem definição.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Não consigo aumentar a carga nos exercícios.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Não tenho muito tempo para treinar.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Tenho dificuldade em acertar as execuções e tenho vergonha de
                  pedir ajuda aos instrutores.”
                </blockquote>
              </div>
            </div>

            {/* Coluna de Homens */}
            <div>
              <h4 className="text-2xl font-semibold mb-6 border-b border-gray-500 pb-2 inline-block">
                Homens
              </h4>
              <div className="space-y-6 text-base leading-relaxed">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Sinto dores no ombro em exercícios como supino e
                  desenvolvimento.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Meu joelho dói em exercícios de pernas.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Não consigo desenvolver e progredir cargas no treino.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Tenho dificuldade em fazer os exercícios com controle e
                  amplitude.”
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Não consigo crescer meu peitoral e braços.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Você precisa de uma treinadora... */}
        <div className="relative space-y-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center font-sora mb-8">
            Você precisa de uma treinadora que domine
          </h3>
          <p className="text-lg leading-relaxed">
            Se você se identificou com algum dos relatos acima, posso te ajudar.
            Meu treinamento é fundamentado na ciência do movimento, proporcionando
            um desenvolvimento sólido, seguro e contínuo.
          </p>

          <ul className="space-y-4 text-base leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="mt-[6px] block w-2 h-2 rounded-full bg-primary"></span>
              <p>Biomecânica e a ciência do movimento.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[6px] block w-2 h-2 rounded-full bg-primary"></span>
              <p>
                Avaliações físicas e funcionais para criar treinos
                completamente personalizados.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[6px] block w-2 h-2 rounded-full bg-primary"></span>
              <p>
                Periodização adequada de treino para resultados progressivos
                e sustentáveis.
              </p>
            </li>
          </ul>

          <p className="text-lg leading-relaxed">
            Talvez você tenha começado a treinar sem uma avaliação apropriada,
            confiando em achismos e improvisos. Com minha orientação, isso não
            será mais um problema. Seus treinos serão 100% planejados com base
            em dados concretos, garantindo que cada exercício seja adequado às
            suas necessidades e objetivos.
          </p>
        </div>
      </div>
    </section>
  );
}