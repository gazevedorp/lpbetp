import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Capturando os dados de cada campo
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      age: formData.get("age") as string,
      goals: formData.get("goals") as string,
      injuries: formData.get("injuries") as string,
      activityLevel: formData.get("activity-level") as string,
      trainingExperience: formData.get("training-experience") as string,
      responseToExercise: formData.getAll("response-to-exercise"),
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar formulário.");
      }

      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch {
      console.error("Erro ao enviar o formulário.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="form"
      className="snap-start py-16 px-4 bg-[#1a1b1c] text-white"
    >
      <h2 className="text-xl font-light font-sora text-center max-w-3xl mx-auto leading-tight mb-8">
        Se você ainda não tem certeza de suas necessidades, preencha a anamnese
        e logo entraremos em contato com você.
      </h2>

      <div className="max-w-4xl mx-auto p-8 rounded-xl backdrop-blur-md shadow-xl bg-[#141414] text-white">
        <h3 className="text-xl font-bold text-center mb-6 font-sora">
          Formulário de Anamnese
        </h3>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Coluna Esquerda */}
          <div className="space-y-6">
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
            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Telefone/Whatsapp
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Ex: 169..."
                className="block w-full p-3 rounded-lg border border-gray-600 
                           bg-black text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
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

          {/* Linha Inteira: Nível de Atividade + Resposta ao Exercício + Tempo de Treino */}
          <div className="md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <option value="sedentário">Sedentário (0x/semana)</option>
                <option value="leve">Leve (1-2x/semana)</option>
                <option value="moderado">Moderado (3-4x/semana)</option>
                <option value="ativo">Ativo (5+ vezes/semana)</option>
                <option value="muito-ativo">Muito Ativo (diário)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="training-experience"
                className="block font-semibold mb-1"
              >
                Quanto tempo você treina?
              </label>
              <select
                id="training-experience"
                name="training-experience"
                className="block w-full p-3 rounded-lg border border-gray-600
                           bg-black text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Selecione o tempo</option>
                <option value="iniciante">Iniciante: 0-12 meses</option>
                <option value="intermediário">Intermediário: 1-2 anos</option>
                <option value="avançado">Avançado: 3 anos ou +</option>
              </select>
            </div>

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
              className="w-[210px] inline-block bg-primary text-white py-3 px-6 rounded-lg font-semibold 
                         transition duration-300 disabled:opacity-50"
              whileTap={{ scale: 0.97 }}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </motion.button>

            {success && (
              <p className="mt-4 text-green-500 font-semibold">
                Formulário enviado com sucesso, obrigado!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}