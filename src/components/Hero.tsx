import { motion } from 'framer-motion';
//@ts-expect-error
import Lottie from 'react-lottie';
import * as animationData from '../../public/animation.json' // Placeholder Lottie Animation

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen bg-gradient-to-r from-primary to-secondary text-white">
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-7xl font-sora mb-6">Transforme sua Vida com Treinamento Personalizado</h1>
        <p className="text-xl md:text-2xl mb-8">Ajudamos você a atingir seus objetivos de forma eficiente e saudável.</p>
        <a href="#plans" className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-accent transition duration-300">Veja Nossos Planos</a>
        <Lottie options={{ animationData }} height={300} width={300} />
      </div>
    </section>
  );
}
