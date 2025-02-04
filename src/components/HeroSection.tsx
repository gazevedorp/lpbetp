import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Carrega o Typewriter apenas no cliente
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      className="
        snap-start
        w-screen
        h-screen
        flex
        items-center
        justify-center
        py-16
        px-4
        relative
      "
    >
      {/* Imagem de fundo otimizada com sizes */}
      <Image
        src="/fundo-hero.jpg"
        alt="Fundo hero com elementos visuais que inspiram transformação"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover"
      />

      {/* Container absoluto para posicionar a imagem da personal e o conteúdo */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center">
        {/* Imagem da personal no fundo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/personal.png"
            alt="Foto da Personal"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover sm:object-contain"
          />
        </div>

        {/* Conteúdo principal (texto + CTA) */}
        <div
          className="
            z-10
            w-[90%]
            sm:w-[80%]
            mt-16
            rounded-xl
            flex
            flex-col
            items-center
            justify-center
            py-8
            sm:py-4
            text-center
            bg-black/40
          "
        >
          {/* Logo */}
          <Image
            src="/logo-hero.svg"
            alt="Logo da marca"
            width={220}
            height={20}
            priority
            className="mb-2 -mt-32 -mr-12"
            quality={75}
          />

          {/* Container que define a largura fixa em caracteres */}
          <div className="w-full mx-auto min-h-[5em] sm:min-h-0">
            <h1 className="text-2xl sm:text-3xl w-[95%] sm:w-full font-bold mb-2 text-white">
              {/* Renderiza o Typewriter apenas visualmente */}
              <span aria-hidden="true">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        'Conquista, superação e <span class="text-primary">liberdade</span>'
                      )
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                    delay: 50,
                    //@ts-ignore
                    escapeHTML: false,
                  }}
                />
              </span>
              {/* Texto estático para leitores de tela */}
              <span className="sr-only">
                Conquista, superação e liberdade
              </span>
            </h1>
          </div>

          <p className="text-sm w-[95%] sm:w-[60%] lg:text-base text-white mb-4 font-extralight leading-relaxed">
            Treinos feitos sob medida para você, com acompanhamentos focados em
            resultados, de maneira descomplicada e direta.
          </p>

          <a
            href="#plans"
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
      </div>
    </section>
  );
}