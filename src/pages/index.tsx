import React from "react";
import HeroSection from "@/components/HeroSection";
import Plans from "@/components/Plans";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import Form from "@/components/Form";
import DescriptiveSection from "@/components/DescriptiveSection";
import Head from "next/head";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Analytics } from "@vercel/analytics/react"

// Exemplo de página principal
export default function Home() {
  return (
    <>
      <Head>
        <title>Betânia Vieira Personal</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="logo.svg"></link>
        <meta
          property="og:url"
          content="https://www.betaniavieirapersonal.com.br"
        />
        <meta
          property="og:image"
          content="https://www.betaniavieirapersonal.com.br/logo-fundo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content="Treinos feitos sob medida para você, com acompanhamentos focados em
            resultados, de maneira descomplicada e direta."
        />
        <meta
          property="og:image:alt"
          content="Conquista, superação e liberdade."
        />
        <meta property="og:site_name" content="Betânia Vieira Personal" />
      </Head>
      <main className="overflow-y-scroll overflow-x-hidden h-screen w-screen scroll-smooth">
        <HeroSection />
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
