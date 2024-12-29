import React from 'react'
import { motion } from 'framer-motion'

export default function Plans() {
  // Se quiser, pode mover esse array para um arquivo de constantes
  const plansData = [
    {
      title: 'Plano Platina 💎',
      duration: '1 ano de acompanhamento',
      protocols: '6 Protocolos de treino',
      support: 'Suporte completo no WhatsApp exclusivo',
      price: 'R$ 1.699,90',
      discount: '20% de desconto no Pix ou até 12x',
      extra: '',
      bestSeller: false,
      badge: '',
    },
    {
      title: 'Plano Ouro 🏅',
      duration: '6 meses de acompanhamento',
      protocols: '3 Protocolos de treino',
      support: 'Suporte completo no WhatsApp exclusivo',
      price: 'R$ 889,90',
      discount: '15% de desconto no Pix ou até 12x',
      extra: 'Você ganha 1 mês de graça!',
      bestSeller: false,
      badge: '',
    },
    {
      title: 'Plano Prata 🥈',
      duration: '4 meses de acompanhamento',
      protocols: '2 Protocolos de treino',
      support: 'Suporte completo no WhatsApp exclusivo',
      price: 'R$ 629,90',
      discount: '10% de desconto no Pix ou até 12x',
      extra: '(Mais Vendido)',
      bestSeller: true, // vamos destacar esse plano
      badge: 'Mais Vendido',
    },
    {
      title: 'Plano Bronze 🥉',
      duration: '8 semanas de acompanhamento',
      protocols: '1 Protocolo de treino',
      support: 'Suporte completo no WhatsApp exclusivo',
      price: 'R$ 349,90',
      discount: '',
      extra: '',
      bestSeller: false,
      badge: '',
    },
  ]

  return (
    <section
      id="plans"
      className="py-16 mt-16 text-center bg-gradient-to-b from-accent to-secondary text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-sora mb-12">
          Escolha o Seu Plano
        </h2>

        {/* Grid responsiva para os planos */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plansData.map((plan, index) => (
            <motion.div
              key={index}
              className={`
                relative flex flex-col items-center justify-between
                rounded-lg shadow-lg bg-white text-secondary p-6
                transition-transform duration-300 
                hover:shadow-2xl hover:scale-105
              `}
              // Animação de aparição suave
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Se for o bestSeller, renderiza um “badge” no topo */}
              {plan.bestSeller && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                {plan.title}{' '}
                {plan.extra && (
                  <span className="block text-sm text-primary mt-1">
                    {plan.extra}
                  </span>
                )}
              </h3>

              <div className="mb-4 space-y-2 text-sm sm:text-base leading-relaxed">
                <p>- {plan.duration}</p>
                <p>- {plan.protocols}</p>
                <p>- {plan.support}</p>
              </div>

              {/* Preço e desconto */}
              <div className="text-xl sm:text-2xl font-bold text-primary mb-4">
                {`Investimento: ${plan.price}`}
              </div>
              {plan.discount && (
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  ({plan.discount})
                </p>
              )}

              <motion.a
                href="#form"
                className="inline-block w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md 
                           hover:shadow-lg hover:bg-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Assine Agora
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}