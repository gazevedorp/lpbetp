import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <motion.section
      className="relative py-16 bg-gradient-to-r from-primary to-accent text-white text-center overflow-hidden"
      id="cta"
      // Animação de entrada
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Exemplo de background decorativo (opcional) */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover opacity-10"
        style={{ backgroundImage: 'url("/cta-bg-pattern.jpg")' }} 
      />

      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold font-sora mb-4">
          Pronto para Começar?
        </h2>
        <p className="max-w-xl mx-auto text-base sm:text-xl mb-8 leading-relaxed opacity-90">
          Escolha o plano ideal para você e dê o primeiro passo na sua transformação, agora mesmo!
        </p>

        <motion.a
          href="#plans"
          className="inline-block bg-white text-primary py-3 px-6 rounded-lg shadow-lg text-lg font-semibold hover:bg-accent hover:text-white transition duration-300"
          // Efeitos de hover e tap com Framer Motion
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Ver Planos
        </motion.a>
      </div>
    </motion.section>
  )
}