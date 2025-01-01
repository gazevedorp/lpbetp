import React from 'react'

export default function TrainerDetailsSection() {
  return (
    <section className="snap-start w-full h-[100vh] py-16 px-4">
      {/* Bloco com fundo branco e borda amarela */}
      <div className="max-w-5xl mx-auto  border-2 border-[#f9ab2d] p-6 rounded-md">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#f9ab2d]">
          Como Funciona o Acompanhamento?
        </h2>

        <p className="text-sm lg:text-base text-[#f9ab2d] mb-4">
          {/* Aqui vai o texto que estava no AboutTrainer antes, adaptado. */}
          Suporte direto no WhatsApp... <br />
          Ajuste dos treinos... e etc.
        </p>

        {/* Repita / substitua pelos blocos e parágrafos anteriores do AboutTrainer */}
        {/* Por exemplo: Avaliação e Pré Consultoria, Bônus, etc. */}

        {/* Botão CTA se quiser, ou não */}
        <a
          href="#form"
          className="inline-block mt-4 bg-[#f9ab2d] text-white py-2 px-4
                     rounded-md hover:opacity-90 transition-opacity"
        >
          Agende sua Consultoria
        </a>
      </div>
    </section>
  )
}