import React from "react";
import Image from "next/image";
/* 1) Importe a lib TypewriterEffect */
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <section
      className="
        snap-start
        w-[100vw]
        h-[100vh]
        flex
        items-center
        justify-center
        py-16
        px-4
        bg-no-repeat
        bg-center
        bg-cover
        relative
      "
      style={{ backgroundImage: "url('/fundo-3.jpg')" }}
    >
      {/* Contêiner relativo para posicionar o personal-logo atrás do texto */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center">
        {/* Imagem personal-logo no fundo, ocupando todo o container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/personal-logo-2.png"
            alt="Foto da Personal"
            className="sm:object-contain object-cover"
            fill
          />
        </div>

        {/* Conteúdo (texto + CTA) na frente (z-index maior) */}
        <div className="z-10 w-[90%] rounded-xl flex flex-col items-center justify-center py-8 text-center bg-[rgb(0,0,0)]/50">
          {/* Logo */}
          <Image
            src="/logo-2.svg"
            alt="Logo"
            width={200}
            height={20}
            className="mb-4 -mt-32 -mr-8"
          />

          <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-white">
            {/* 2) Invoque o TypewriterEffect aqui */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Conquista, superação e liberdade")
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 80,   // velocidade da digitação (ms)
                // cursor: "", // se quiser remover o cursor piscando, descomente
              }}
            />
          </h2>

          <p className="text-sm w-[95%] sm:w-[60%] lg:text-base text-white mb-4 leading-relaxed">
            Treinos feitos sob medida para você, com acompanhamentos focados em
            resultados, de maneira descomplicada e direta.
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
      </div>
    </section>
  );
}