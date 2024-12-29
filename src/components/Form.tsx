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
      heartRate: formData.get('heart-rate') as string,
      // Armazenar checks de resposta ao exercício
      responseToExercise: formData.getAll('response-to-exercise'),
      hasConsent: formData.get('hasConsent') === 'on'
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
      className="py-16 bg-background text-center"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-sora mb-8">
        Preencha a Anamnese
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-left"
      >
        {/* Nome Completo */}
        <div className="mb-4">
          <label 
            htmlFor="name" 
            className="block font-medium text-secondary mb-2"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome Completo"
            className="block w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* E-mail */}
        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block font-medium text-secondary mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className="block w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Idade */}
        <div className="mb-4">
          <label 
            htmlFor="age" 
            className="block font-medium text-secondary mb-2"
          >
            Idade
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Idade"
            className="block w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Objetivos */}
        <div className="mb-4">
          <label
            htmlFor="goals"
            className="block font-medium text-secondary mb-2"
          >
            Quais são seus objetivos?
          </label>
          <textarea
            id="goals"
            name="goals"
            placeholder="Fale um pouco sobre seus objetivos"
            className="block w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Histórico de Lesões */}
        <div className="mb-4">
          <label
            htmlFor="injuries"
            className="block font-medium text-secondary mb-2"
          >
            Você possui algum histórico de lesões? (Se sim, descreva)
          </label>
          <textarea
            id="injuries"
            name="injuries"
            placeholder="Descreva seu histórico de lesões (se houver)"
            className="block w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Nível de Atividade Física */}
        <div className="mb-4">
          <label
            htmlFor="activity-level"
            className="block font-medium text-secondary mb-2"
          >
            Qual o seu nível de atividade física?
          </label>
          <select
            id="activity-level"
            name="activity-level"
            className="block w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Selecione um nível</option>
            <option value="sedentary">
              Sedentário (não pratica atividades físicas)
            </option>
            <option value="light">
              Leve (atividade física leve 1-2x/semana)
            </option>
            <option value="moderate">
              Moderado (3-4x/semana)
            </option>
            <option value="active">
              Ativo (5+ vezes/semana)
            </option>
            <option value="very-active">
              Muito Ativo (atividade física diária intensa)
            </option>
          </select>
        </div>

        {/* Frequência Cardíaca */}
        <div className="mb-4">
          <label
            htmlFor="heart-rate"
            className="block font-medium text-secondary mb-2"
          >
            Qual a sua frequência cardíaca média em repouso? (bpm)
          </label>
          <input
            type="number"
            id="heart-rate"
            name="heart-rate"
            placeholder="Frequência cardíaca média em repouso"
            className="block w-full p-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-primary"
            min="30"
            max="150"
          />
        </div>

        {/* Resposta Física ao Exercício */}
        <div className="mb-4">
          <label
            htmlFor="response-to-exercise"
            className="block font-medium text-secondary mb-2"
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
              Sensação de desconforto nas articulações
            </label>
          </div>
        </div>

        {/* Consentimento */}
        <div className="mb-6">
          <label className="flex items-center">
            <input 
              type="checkbox" 
              name="hasConsent"
              required 
              className="mr-2" 
            />
            Eu aceito os termos e condições e autorizo o uso dos meus dados para análise de saúde.
          </label>
        </div>

        {/* Botão Enviar */}
        <div className="text-center">
          <motion.button
            type="submit"
            className="bg-primary text-white py-3 px-6 rounded-lg font-semibold 
                       hover:bg-accent transition duration-300 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </motion.button>
        </div>

        {/* Exibir feedback de sucesso ou erro */}
        {success && (
          <p className="mt-4 text-green-600 font-semibold">
            Formulário enviado com sucesso!
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-500 font-semibold">
            {error}
          </p>
        )}
      </form>
    </motion.section>
  )
}