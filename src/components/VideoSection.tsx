import React from 'react'

export default function VideoSection() {
  return (
    <section
      id="video"
      className="snap-start relative py-16 text-white overflow-hidden h-[100vh]"
    >

      <div className="container mx-auto px-4">
        <div className="
          flex
          flex-col-reverse
          md:flex-row
          items-center
          justify-center
          gap-8
        ">
          {/* Vídeo à esquerda (em md) */}
          <div className="flex-1 w-full">
            <div
              className="
                relative
                h-0
                pb-[177.78%]     /* Proporção vertical em telas pequenas */
                md:pb-[56.25%]   /* Proporção 16:9 em telas md ou maiores */
                overflow-hidden
                rounded-lg
                shadow-lg
                mx-auto
                max-w-full
              "
            >
              <iframe
                src="https://player.vimeo.com/video/1042928972?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                title="Vídeo de Apresentação"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Texto à direita (em md) */}
          <div className="flex-1 w-full text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6">
              Veja Como Podemos Ajudar Você
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}