import React from 'react';

export default function FinalCTA() {
  return (
    <section
      className="relative snap-start py-12 bg-gradient-to-r from-[#262728] to-primary text-white text-center overflow-hidden"
      id="final-cta"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold font-sora mb-4">
          A Transformação Começa Agora!
        </h2>
        <p className="max-w-xl mx-auto font-extralight sm:text-md mb-8">
          Não adie seus objetivos. Escolha seu plano e comece a conquistar a mudança que você merece.
        </p>

        <a
          href="#plans"
          className="inline-block bg-white text-primary py-3 px-6 rounded-lg shadow-lg font-semibold"
        >
          Escolher Meu Plano
        </a>
      </div>
    </section>
  );
}