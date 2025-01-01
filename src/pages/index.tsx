import React from 'react'
import HeroSection from '@/components/HeroSection'
import TrainerDetailsSection from '@/components/TrainerDetailsSection'
import Plans from '@/components/Plans'
import Steps from '@/components/Steps'
import CTA from '@/components/CTA'
import Form from '@/components/Form'
import DescriptiveSection from '@/components/DescriptiveSection'
import Head from 'next/head'
import VideoSection from '@/components/VideoSection'

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
      </Head>
      <main className="snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen w-screen ">
        {/* Seção Hero (nova) */}
        <HeroSection />

        {/* Seção com o conteúdo que antes estava em AboutTrainer */}
        {/* <TrainerDetailsSection /> */}
        <VideoSection />

        {/* Outras seções adaptadas ao novo layout */}
        {/* <Plans />
        <Steps />
        <DescriptiveSection />
        <CTA />
        <Form /> */}
      </main>
    </>
  )
}