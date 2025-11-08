"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function About() {
  const cards = [
    {
      id: 1,
      title: "Site Institucional",
      image: "/headline-bg.png",
      link: "/Servicos/institucionais",
    },
    {
      id: 2,
      title: "Otimização de SEO",
      image: "/headline-bg.png",
      link: "/Servicos/SEO",
    },
    {
      id: 3,
      title: "Landing Page",
      image: "/headline-bg.png",
      link: "/Servicos/LandingPage",
    },
  ];

  const [centerIndex, setCenterIndex] = useState(1);

  const handleClick = (index: number) => {
    setCenterIndex(index);
  };

  const getPositionClass = (index: number) => {
    if (index === centerIndex) return "z-20 scale-110 translate-x-0";
    if (index === (centerIndex + 1) % 3)
      return "translate-x-[90px] sm:translate-x-[150px] md:translate-x-[220px] scale-90 z-10 opacity-60";
    if (index === (centerIndex + 2) % 3)
      return "-translate-x-[90px] sm:-translate-x-[150px] md:-translate-x-[220px] scale-90 z-10 opacity-60";
    return "";
  };

  return (
    <section
      className="py-16 md:py-24 w-full flex flex-col justify-center items-center bg-white"
      id="sobre"
    >
      <div className="container flex flex-col justify-center items-center text-center">
        <h2 className="font-heading max-w-3xl text-xl sm:text-2xl md:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">
          Mais do que código, criamos experiências digitais que impulsionam
          negócios.
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl max-w-[300px] text-black font-semibold mb-4 md:mb-6">
          Melhorar ranqueamento no Google
        </p>

        {/* Carrossel */}
        <div className="relative w-full flex justify-center items-center h-[280px] sm:h-[380px] md:h-[450px] overflow-hidden">
          <div className="relative w-[260px] sm:w-[600px] md:w-[800px] flex justify-center items-center">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute cursor-pointer transition-all duration-500 ease-out rounded-2xl overflow-hidden shadow-lg ${getPositionClass(
                  index
                )}`}
                onClick={() => handleClick(index)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[140px] sm:w-[220px] md:w-[280px] h-[200px] sm:h-[320px] md:h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-end items-center pb-3 sm:pb-5">
                  <h3 className="text-white font-semibold text-sm sm:text-lg mb-2 drop-shadow-md">
                    {card.title}
                  </h3>
                  <a href={card.link}>
                    <Button
                      variant="outline"
                      className="bg-[#000000]/60 border-white text-white hover:bg-white hover:text-black text-xs sm:text-sm"
                    >
                      Saiba mais
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pontinhos de navegação */}
        <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === centerIndex
                  ? "bg-[#04A15E] scale-125"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
