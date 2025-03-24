import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Importar os estilos do react-slick. Recomenda-se que esses estilos fiquem em um arquivo global.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importação dinâmica para evitar problemas com SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function PlansCarousel() {
  const plansData = [
    {
      title: "Plano Platina 💎",
      duration: "1 ano de acompanhamento",
      protocols: "6 Protocolos de treino",
      support: "Suporte completo no WhatsApp exclusivo",
      price: "R$ 1.749,90",
      promoPrice: "R$ 1.599,90",
      discount: "20% de desconto no Pix ou até 12x",
      extra: "A melhor de todas!",
      bestSeller: false,
      badge: "",
    },
    {
      title: "Plano Ouro 🏅",
      duration: "6 meses de acompanhamento",
      protocols: "3 Protocolos de treino",
      support: "Suporte completo no WhatsApp exclusivo",
      price: "R$ 949,90",
      promoPrice: "R$ 849,90",
      discount: "15% de desconto no Pix ou até 12x",
      extra: "Você ganha 1 mês de graça!",
      bestSeller: false,
      badge: "",
    },
    {
      title: "Plano Prata 🥈",
      duration: "4 meses de acompanhamento",
      protocols: "2 Protocolos de treino",
      support: "Suporte completo no WhatsApp exclusivo",
      price: "R$ 659,90",
      promoPrice: "R$ 599,90",
      discount: "10% de desconto no Pix ou até 12x",
      extra: "(Mais Vendido)",
      bestSeller: true,
      badge: "Mais Vendido",
    },
    {
      title: "Plano Bronze 🥉",
      duration: "8 semanas de acompanhamento",
      protocols: "1 Protocolo de treino",
      support: "Suporte completo no WhatsApp exclusivo",
      price: "R$ 369,90",
      promoPrice: "R$ 309,90",
      discount: "",
      extra: "Simples mas eficiente!",
      bestSeller: false,
      badge: "",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Inverter o array de forma imutável
  const reversedPlansData = [...plansData].reverse();

  return (
    <section
      id="plans"
      role="region"
      aria-labelledby="plans-heading"
      className="
        py-16 snap-start text-center
        px-4
        bg-no-repeat
        bg-center
        bg-cover
        relative
      "
    >
      {/* Imagem de fundo otimizada com Next Image */}
      <Image
        src="/fundo-plans.jpg"
        alt="Fundo com visual inspirador para os planos"
        fill
        priority
        className="object-cover z-[-1]"
      />

      <div className="container mx-auto px-4" style={{ overflow: "visible" }}>
        <h2
          id="plans-heading"
          className="text-2xl sm:text-3xl font-bold font-sora mb-12 text-white"
        >
          Escolha o Seu Plano
        </h2>

        <Slider {...settings}>
          {reversedPlansData.map((plan, index) => (
            <div key={index} className="px-2">
              <div
                className={`
                  relative flex flex-col items-center justify-between
                  h-[540px] w-full max-w-[340px] mx-auto
                  rounded-lg shadow-lg bg-black/70 text-white p-6
                `}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    {plan.title}{" "}
                    {plan.extra && (
                      <span className="block text-sm text-primary mt-1">
                        {plan.extra}
                      </span>
                    )}
                  </h3>
                </div>

                <div className="mb-4 space-y-2 text-white text-sm w-full">
                  <p>- {plan.duration}</p>
                  <p>- {plan.protocols}</p>
                  <p>- {plan.support}</p>
                </div>

                <div className="w-full text-center">
                  {plan.promoPrice && (
                    <>
                      <div className="text-lg font-bold text-test mb-2 line-through">
                        {plan.price}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {plan.promoPrice}
                      </div>
                    </>
                  )}
                  {plan.discount && (
                    <p className="text-xs text-white">({plan.discount})</p>
                  )}
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=553888321913&text=Ol%C3%A1%2C+gostaria+de+participar+da+consultoria+com+o+${encodeURIComponent(
                    plan.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-transparent border border-primary text-primary py-3 px-6 rounded-lg font-semibold shadow-md 
                            hover:shadow-lg hover:bg-primary-dark transition-all duration-300 mt-4"
                  aria-label={`Assine agora o ${plan.title} via WhatsApp`}
                >
                  Assine Agora
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
