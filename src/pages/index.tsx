import React from "react";
import HeroSection from "@/components/HeroSection";
import TrainerDetailsSection from "@/components/TrainerDetailsSection";
import Plans from "@/components/Plans";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import Form from "@/components/Form";
import DescriptiveSection from "@/components/DescriptiveSection";
import Head from "next/head";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

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
          property="og:image"
          content="https://betaniapersonal.vercel.app/logo.png"
        />
        <meta
          property="og:description"
          content="Treinos feitos sob medida para você, com acompanhamentos focados em
            resultados, de maneira descomplicada e direta."
        />
      </Head>
      <main className="overflow-y-scroll overflow-x-hidden h-screen w-screen scroll-smooth">
        <HeroSection />

        {/* <TrainerDetailsSection />
        <VideoSection /> */}

        <Steps />
        <CTA />
        <DescriptiveSection />
        <Plans />
        <Form />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
