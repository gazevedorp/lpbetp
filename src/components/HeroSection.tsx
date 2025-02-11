import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Carrega o Typewriter apenas no cliente
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

/* 
  Props:
  - onImagesLoaded: função opcional chamada quando as imagens (exceto o SVG) forem carregadas.
*/
interface HeroSectionProps {
  onImagesLoaded?: () => void;
}

export default function HeroSection({ onImagesLoaded }: HeroSectionProps) {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  // Apenas as imagens de fundo e da personal serão contabilizadas (2 imagens)
  const totalImages = 2;

  useEffect(() => {
    if (imagesLoaded === totalImages && onImagesLoaded) {
      onImagesLoaded();
    }
  }, [imagesLoaded, totalImages, onImagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center py-16 px-4 relative">
      {/* Imagem de fundo */}
      <Image
        src="/fundo-hero.jpg"
        alt="Fundo hero com elementos visuais que inspiram transformação"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover"
        onLoadingComplete={handleImageLoad}
      />

      {/* Container absoluto para posicionar a imagem da personal e o conteúdo */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center">
        {/* Imagem da personal */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/personal.png"
            alt="Foto da Personal"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover sm:object-contain"
            onLoadingComplete={handleImageLoad}
          />
        </div>

        {/* Conteúdo principal */}
        <div className="z-10 w-[90%] sm:w-[80%] mt-16 rounded-xl flex flex-col items-center justify-center py-8 sm:py-4 text-center bg-black/40">
          {/* Logo SVG – sem condicional de carregamento */}
          <Image
            src="/logo-hero.svg"
            alt="Logo da marca"
            width={220}
            height={20}
            priority
            className="mb-2 -mt-32 -mr-12"
            quality={75}
          />

          {/* Conteúdo com Typewriter */}
          <div className="w-full mx-auto min-h-[5em] sm:min-h-0">
            <h1 className="text-2xl sm:text-3xl w-[95%] sm:w-full font-bold mb-2 text-white">
              <span aria-hidden="true">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        'Conquista, superação e <span class="text-primary">liberdade!</span>'
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
            className="inline-block bg-primary text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Transforme-se agora
          </a>
        </div>
      </div>
    </section>
  );
}
