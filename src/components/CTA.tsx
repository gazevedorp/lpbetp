import React from "react";

export default function CTA() {
  return (
    <section
      className="relative snap-start py-12 bg-gradient-to-r from-primary to-[#262728] text-white text-center overflow-hidden"
      id="cta"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-sora mb-4">
          Pronto para Começar?
        </h2>
        <p className="max-w-xl mx-auto font-extralight sm:text-md mb-8">
          Escolha o plano ideal para você e dê o primeiro passo na sua
          transformação, agora mesmo!
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
