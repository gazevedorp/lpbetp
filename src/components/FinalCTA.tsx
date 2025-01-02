import React from 'react';

export default function FinalCTA() {
  return (
    <section
      className="relative snap-start py-12 bg-gradient-to-r from-[#262728] to-primary text-white text-center overflow-hidden"
      id="final-cta"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold font-sora mb-4">
          Escolha a Melhor Forma de Começar!
        </h2>
        <p className="max-w-xl mx-auto font-extralight sm:text-md mb-8">
          Se deseja atendimento presencial ou prefere dar início ao seu plano online, estamos prontos para te ajudar!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Botão Escolher Plano */}
          <a
            href="#plans"
            className="inline-block bg-white text-primary py-3 px-6 rounded-lg shadow-lg font-semibold transition-all duration-300"
          >
            Escolher Meu Plano
          </a>

          {/* Botão Atendimento Presencial */}
          <a
            href="https://api.whatsapp.com/send?phone=553888321913&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+atendimento+presencial."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white py-3 px-6 rounded-lg shadow-lg font-semibold transition-all duration-300"
          >
            Atendimento Presencial
          </a>
        </div>
      </div>
    </section>
  );
}