import { motion } from 'framer-motion'
import React from 'react'

export default function VideoSection() {
  return (
    <motion.section
      id="video"
      className="relative py-16 bg-accent text-white overflow-hidden"
      // Animação de entrada suave
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Background decorativo (opcional) */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover opacity-10"
        style={{ backgroundImage: 'url("/video-bg-pattern.jpg")' }}
      ></div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6">
          Veja Como Podemos Ajudar Você
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-90 mb-10 leading-relaxed">
          Conheça mais sobre nossa proposta de consultoria 
          e todos os benefícios que você terá ao se juntar a nós.
        </p>

        {/* Container responsivo para o vídeo (Aspect Ratio 16:9) */}
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg mx-auto">
          <iframe
            src="https://www.youtube.com/embed/placeholder-video-id"
            title="Vídeo de Apresentação"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </motion.section>
  )
}