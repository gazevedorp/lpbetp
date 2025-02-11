import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Plans from "@/components/Plans";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import Form from "@/components/Form";
import DescriptiveSection from "@/components/DescriptiveSection";
import Head from "next/head";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Callback chamado pelo HeroSection quando as imagens (exceto o SVG) forem carregadas
  const handleHeroImagesLoaded = () => {
    setHeroLoaded(true);
  };

  return (
    <>
      <Head>
        <title>Betânia Vieira Personal</title>
        <link rel="shortcut icon" href="logo.svg" />
        <meta property="og:url" content="https://www.betaniavieirapersonal.com.br" />
        <meta
          property="og:image"
          content="https://www.betaniavieirapersonal.com.br/logo-fundo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content="Treinos feitos sob medida para você, com acompanhamentos focados em resultados, de maneira descomplicada e direta."
        />
        <meta
          property="og:image:alt"
          content="Conquista, superação e liberdade."
        />
        <meta property="og:site_name" content="Betânia Vieira Personal" />
        <meta
          name="description"
          content="Treinos feitos sob medida para você, com acompanhamentos focados em resultados, de maneira descomplicada e direta."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      {/* Loader overlay cobrindo a tela toda enquanto a sessão não carrega */}
      {!heroLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#232323] opacity-90">
          <Image
            src="/logo-og.png"
            alt="Logo Loader"
            width={360}  // ajuste conforme necessário
            height={360} // ajuste conforme necessário
          />
        </div>
      )}

      <main className="overflow-y-scroll overflow-x-hidden h-screen w-screen scroll-smooth">
        <HeroSection onImagesLoaded={handleHeroImagesLoaded} />
        <Steps />
        <CTA />
        <DescriptiveSection />
        <Plans />
        <Form />
        <FinalCTA />
        <Footer />
      </main>
      <Analytics />
    </>
  );
}