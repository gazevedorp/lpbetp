import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade, // Import para um possível efeito de fade
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// Se usar fade ou cube:
// import 'swiper/css/effect-fade'
// import 'swiper/css/effect-cube'

export default function ConsultationPreviews() {
  // Você pode substituir os links pelas imagens reais (prints) da sua consulta/acompanhamento
  const consultationScreens = [
    '/print-1.jpeg',
    '/print-2.jpeg',
    '/print-3.jpeg',
    '/print-4.jpeg',
    '/print-5.jpeg',
    '/print-6.jpeg',
  ]

  return (
    <section
      id="consultation-prints"
      className="py-16 bg-gradient-to-b from-accent to-secondary text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold font-sora mb-4">
          Veja Como É a Consultoria na Prática
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-sm sm:text-base opacity-90">
          Confira abaixo alguns exemplos de conversas e orientações reais que
          você terá acesso no dia a dia do acompanhamento.
        </p>

        <Swiper
          // Adicione o módulo do efeito se quiser, ex: modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          //pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // effect="fade" // Exemplo de uso (requer import e module de EffectFade)
          // Optional: breakpoints para controlar quantos slides exibir em cada tamanho
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {consultationScreens.map((imageUrl, index) => (
            <SwiperSlide
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              {/* Efeito de zoom no hover */}
              <div className="group h-80 relative w-full">
                <Image
                  src={imageUrl}
                  alt={`Print de Consulta ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  priority={index === 0} // deixa o primeiro slide em prioridade, se quiser
                />
                {/* Overlay opcional, se quiser destacar algo ao hover 
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}