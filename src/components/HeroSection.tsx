import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      className="
        snap-start
        mx-auto
        w-[100vw]
        h-[100vh]
        flex
        flex-col
        items-center
        justify-center
        py-16
        px-4
      "
    >
      {/* Conteúdo (texto + CTA) centralizados em cima */}
      <div className="flex flex-col items-center text-center max-w-sm">
        {/* Logo (caso queira colocar menor ainda, ajuste o width/height) */}
        <Image
          src="/logo-2.svg"
          alt="Logo"
          width={200}
          height={20}
          objectFit="contain"
          className="mb-4"
        />

        <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-white">
          Conquista, superação e liberdade
        </h2>
        <p className="text-sm lg:text-base text-white mb-4 leading-relaxed">
          Treinos feitos sob medida para você, com
          acompanhamentos focados em resultados,
          de maneira descomplicada e direta.
        </p>

        <a
          href="#form"
          className="
            inline-block
            bg-primary
            text-white
            font-semibold
            py-2
            px-4
            rounded-md
            hover:opacity-90
            transition-opacity
          "
        >
          Transforme-se agora
        </a>
      </div>

      {/* Imagem embaixo, também centralizada */}
      <div
        className="
          mt-8
          flex
          justify-center
          items-center
          w-[340px]       /* tamanho menor em telas pequenas */
          md:w-[360px]    /* aumenta um pouco em md */
          md:h-[480px]    
          overflow-hidden
        "
      >
        <Image
          src="/personal-logo.png"
          alt="Foto da Personal"
          width={700}
          height={600}
          objectFit="contain"
          style={{
            // Máscara (opcional) para escurecer laterais
            maskImage: 'radial-gradient(circle at center, black 70%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 80%)',
            filter: 'brightness(0.7)',
          }}
        />
      </div>
    </section>
  )
}