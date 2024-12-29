import React from 'react';
import Header from '@/components/Header';
import Plans from '@/components/Plans';
import Testimonials from '@/components/Testimonials';
import Steps from '@/components/Steps';
import VideoSection from '@/components/VideoSection';
import CTA from '@/components/CTA';
import Form from '@/components/Form';
import DescriptiveSection from '@/components/DescriptiveSection';
import AboutTrainer from '@/components/AboutTrainer'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="font-sora bg-background">
      <Header />
      <AboutTrainer />
      <Plans />
      <Testimonials />
      <Steps />
      <VideoSection />
      <CTA />
      <Form />
      <DescriptiveSection />
      <Footer />
    </div>
  );
}