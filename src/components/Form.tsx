import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Form() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(null)

    // Capturando os dados de cada campo
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      age: formData.get('age') as string,
      goals: formData.get('goals') as string,
      injuries: formData.get('injuries') as string,
      activityLevel: formData.get('activity-level') as string,
      // Pergunta removida: heartRate
      responseToExercise: formData.getAll('response-to-exercise'),
      hasConsent: formData.get('hasConsent') === 'on',
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Erro ao enviar formulário.')
      }

      setSuccess(true)
      e.currentTarget.reset() // limpa o formulário
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro inesperado.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      id="form"
      className="snap-start py-16 px-4 bg-[#1a1b1c] text-white"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Texto principal em 3xl */}
      <h2 className="text-2xl font-bold font-sora text-center max-w-3xl mx-auto leading-tight mb-8">
        Se você ainda não tem certeza de suas necessidades, preencha a anamnese
        e logo entraremos em contato com você.
      </h2>

      {/* Container do formulário */}
      <div className="max-w-4xl mx-auto p-8 rounded-xl backdrop-blur-md shadow-xl bg-[#141414] text-white">
        <h3 className="text-2xl font-bold text-center mb-6 font-sora">
          Preencha a Anamnese
        </h3>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coluna Esquerda */}
          <div className="space-y-6">
            {/* Nome Completo */}
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                className="block w-full p-3 rounded-lg border border-gray-600 
                           bg-black text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* E-mail */}
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                className="block w-full p-3 rounded-lg border border-gray-600 
                           bg-black text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Idade */}
            <div>
              <label htmlFor="age" className="block font-semibold mb-1">
                Idade
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Ex: 30"
                className="block w-full p-3 rounded-lg border border-gray-600 
                           bg-black text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="space-y-6">
            {/* Objetivos */}
            <div>
              <label htmlFor="goals" className="block font-semibold mb-1">
                Quais são seus objetivos?
              </label>
              <textarea
                id="goals"
                name="goals"
                placeholder="Conte brevemente..."
                className="block w-full p-3 rounded-lg border border-gray-600 
                           bg-black text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary
                           min-h-[96px]"
                required
              />
            </div>

            {/* Histórico de Lesões */}
            <div>
              <label htmlFor="injuries" className="block font-semibold mb-1">
                Histórico de Lesões (se houver)
              </label>
              <textarea
                id="injuries"
                name="injuries"
                placeholder="Descreva lesões anteriores..."
                className="block w-full p-3 rounded-lg border border-gray-600 
                           bg-black text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary
                           min-h-[96px]"
              />
            </div>
          </div>

          {/* Linha Inteira: Nível de Atividade + Resposta ao Exercício */}
          <div className="md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Nível de Atividade Física */}
            <div>
              <label
                htmlFor="activity-level"
                className="block font-semibold mb-1"
              >
                Nível de Atividade Física
              </label>
              <select
                id="activity-level"
                name="activity-level"
                className="block w-full p-3 rounded-lg border border-gray-600
                           bg-black text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Selecione um nível</option>
                <option value="sedentary">Sedentário (0x/semana)</option>
                <option value="light">Leve (1-2x/semana)</option>
                <option value="moderate">Moderado (3-4x/semana)</option>
                <option value="active">Ativo (5+ vezes/semana)</option>
                <option value="very-active">Muito Ativo (diário)</option>
              </select>
            </div>

            {/* Resposta ao Exercício (checkbox) */}
            <div>
              <label
                htmlFor="response-to-exercise"
                className="block font-semibold mb-1"
              >
                Como seu corpo responde ao exercício?
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="response-to-exercise"
                    value="Dores musculares intensas"
                    className="mr-2"
                  />
                  Dores musculares intensas
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="response-to-exercise"
                    value="Cansaço excessivo"
                    className="mr-2"
                  />
                  Cansaço excessivo
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="response-to-exercise"
                    value="Bem-estar e aumento de energia"
                    className="mr-2"
                  />
                  Bem-estar e aumento de energia
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="response-to-exercise"
                    value="Desconforto nas articulações"
                    className="mr-2"
                  />
                  Desconforto nas articulações
                </label>
              </div>
            </div>
          </div>

          {/* Botão e Feedback (linha inteira) */}
          <div className="md:col-span-2 text-center mt-4">
            <motion.button
              type="submit"
              className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-semibold 
                         transition duration-300 disabled:opacity-50"
              whileTap={{ scale: 0.97 }}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </motion.button>

            {success && (
              <p className="mt-4 text-green-500 font-semibold">
                Formulário enviado com sucesso!
              </p>
            )}
            {error && (
              <p className="mt-4 text-red-500 font-semibold">
                {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </motion.section>
  )
}