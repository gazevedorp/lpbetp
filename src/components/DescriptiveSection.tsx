import React from "react";

export default function DescriptiveSection() {
  const videoSrc = `https://player.vimeo.com/video/1042928972?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&nocache=${Date.now()}`;

  return (
    <section
      id="descriptive"
      className="relative bg-[#1a1b1c] text-white overflow-hidden"
    >

      {/* Conteúdo principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Seção 1: Introdução */}
        <div className="space-y-12">
          {/* Título centralizado */}
          <h2 className="text-center text-2xl sm:text-3xl font-bold font-sora leading-tight">
            A minha Consultoria <br className="hidden sm:block" />
            <span className="text-primary">serve para iniciantes?</span>
          </h2>

          {/* Seção em duas colunas (texto à esquerda, vídeo vertical à direita) */}
          <div className="flex flex-col sm:flex-row justify-center items-start">
            {/* Texto à esquerda, alinhado à esquerda */}
            <div className="border-l-4 border-primary pl-2 space-y-6 text-left text-lg leading-relaxed w-full sm:w-[520px] mb-16 sm:mb-0">
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

            {/* Contêiner para vídeo vertical à direita */}
            <div className="w-full sm:w-[200px] sm:ml-16">
              <div
                className="
          relative
          w-[100%]            /* Em telas pequenas, 90% de largura */
          md:w-[200px]       /* Em telas médias/maiores, largura fixa de 400px */
          aspect-[9/16]      /* Proporção vertical (9:16) */
          bg-gradient-to-br 
          from-[#2a2b2c] to-[#3b3c3d]
          p-3 sm:p-4
          rounded-xl 
          shadow-2xl
        "
              >
                <iframe
                  src={videoSrc}
                  title="Vídeo de Apresentação"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 2: Relatos Comuns (com layout criativo) */}
        <div className="relative bg-[#262728] p-8 rounded-xl shadow-lg space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center font-sora mb-8">
            Relatos Comuns
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Coluna de Mulheres */}
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-6 border-b border-gray-500 pb-2 inline-block">
                Mulheres
              </h4>
              <div className="space-y-6 text-base leading-relaxed">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  “Meu glúteo não cresce e não define, só consigo desenvolver as
                  pernas.”
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
              <h4 className="text-xl sm:text-2xl font-semibold mb-6 border-b border-gray-500 pb-2 inline-block">
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
          <h3 className="text-2xl sm:text-3xl font-bold text-center font-sora mb-8">
            Você precisa de uma treinadora que domine
          </h3>
          <p className="text-lg leading-relaxed">
            Se você se identificou com algum dos relatos acima, posso te ajudar.
            Meu treinamento é fundamentado na ciência do movimento,
            proporcionando um desenvolvimento sólido, seguro e contínuo.
          </p>

          <ul className="space-y-4 text-base leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="mt-[6px] block w-2 h-2 rounded-full bg-primary"></span>
              <p>Biomecânica e a ciência do movimento.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[6px] block w-2 h-2 rounded-full bg-primary"></span>
              <p>
                Avaliações físicas e funcionais para criar treinos completamente
                personalizados.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[6px] block w-2 h-2 rounded-full bg-primary"></span>
              <p>
                Periodização adequada de treino para resultados progressivos e
                sustentáveis.
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
