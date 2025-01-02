import React from "react";
//@ts-expect-error
import Slider from "react-slick"; // Biblioteca para o carrossel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PlansCarousel() {
  const plansData = [
    {
      title: "Plano Platina 💎",
      duration: "1 ano de acompanhamento",
      protocols: "6 Protocolos de treino",
      support: "Suporte completo no WhatsApp exclusivo",
      price: "R$ 1.699,90",
      promoPrice: "R$ 1.359,90",
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
      price: "R$ 889,90",
      promoPrice: "R$ 755,90",
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
      price: "R$ 629,90",
      promoPrice: "R$ 566,90",
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
      price: "R$ 349,90",
      promoPrice: "R$ 314,90",
      discount: "",
      extra: "Simples mas eficiente!",
      bestSeller: false,
      badge: "",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
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

  return (
    <section
      id="plans"
      className="
py-16 snap-start text-center
      px-4
      bg-no-repeat
      bg-center
      bg-cover
      relative
    "
      style={{ backgroundImage: "url('/fundo-8.jpg')" }}
    >
      <div className="container mx-auto px-4" style={{ overflow: "visible" }}>
        <h2 className="text-4xl font-bold font-sora mb-12 text-white">
          Escolha o Seu Plano
        </h2>

        <Slider {...settings}>
          {plansData.map((plan, index) => (
            <div key={index} className="px-4">
              <div
                className={`
                  relative flex flex-col items-center justify-between
                  h-[540px] w-full max-w-[300px] mx-auto
                  rounded-lg shadow-lg bg-black/60 text-white p-6
                `}
              >
                <div className="">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 rw">
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

                {/* Preço e preço promocional */}
                <div className="w-full text-center ">
                  {plan.promoPrice && (
                    <>
                      <div className="text-lg font-bold text-test mb-2 line-through">
                        {`${plan.price}`}
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {`${plan.promoPrice}`}
                      </div>
                    </>
                  )}
                  {plan.discount && (
                    <p className="text-xs text-white">({plan.discount})</p>
                  )}
                </div>

                <a
                  href="#form"
                  className="inline-block w-full bg-transparent border border-primary text-primary py-3 px-6 rounded-lg font-semibold shadow-md 
                            hover:shadow-lg hover:bg-primary-dark transition-all duration-300 mt-4"
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
