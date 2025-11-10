"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";

export function About() {
  const cards = [
    {
      id: 1,
      title: "Site Institucional",
      image: "/Institucional.png",
      link: "/Servicos/Institucional",
      description: "Ter mais posicionamento",
    },
    // {
    //   id: 2,
    //   title: "Otimização de SEO",
    //   image: "/headline-bg.png",
    //   link: "/Servicos/SEO",
    //   description: "Melhorar ranqueamento no Google",
    // },
    {
      id: 3,
      title: "Landing Page",
      image: "/LandingPage.png",
      link: "/Servicos/LandingPage",
      description: "Aumentar seu ROI e diminuir seu CAC",
    },
  ];

  const [centerIndex, setCenterIndex] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const getPositionProps = (index: number) => {
  const relativeIndex = (index - centerIndex + cards.length) % cards.length;

  if (relativeIndex === (cards.length - 1)) {
    return { x: -220, scale: 0.85, opacity: 0.6, zIndex: 1 };
  }

  if (relativeIndex === 0) {
    return { x: 0, scale: 1.1, opacity: 1, zIndex: 3 };
  }

  if (relativeIndex === 1) {
    return { x: 220, scale: 0.85, opacity: 0.6, zIndex: 1 };
  }

  return { x: 0, scale: 0.8, opacity: 0, zIndex: 0 };
};


  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 80) {
      setDirection(-1);
      setCenterIndex((prev) => (prev - 1 + cards.length) % cards.length);
    } else if (info.offset.x < -80) {
      setDirection(1);
      setCenterIndex((prev) => (prev + 1) % cards.length);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCenterIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, cards.length]);

  return (
<section
  className="py-12 md:py-20 w-full flex flex-col justify-center items-center bg-white"
  id="sobre"
>
  <div className="container flex flex-col justify-center items-center text-center">
    <h2 className="font-heading max-w-3xl text-xl sm:text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">
      Mais do que código, criamos experiências digitais que impulsionam negócios.
    </h2>

    <div className="relative flex justify-center items-center h-12 sm:h-16 md:h-20 mb-5 sm:mb-6 overflow-hidden">
      <div className="w-[160px] sm:w-[240px] md:w-[300px] text-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.p
            key={centerIndex}
            initial={{ opacity: 0, y: direction > 0 ? 20 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction > 0 ? -20 : 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-center text-base sm:text-xl md:text-2xl text-black font-semibold leading-snug px-2"
          >
            {cards[centerIndex]?.description ?? "Carregando..."}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>

    <div className="relative w-full flex justify-center items-center h-[260px] sm:h-[360px] md:h-[440px] overflow-hidden select-none mb-4 sm:mb-6">
      <div className="relative w-[260px] sm:w-[600px] md:w-[800px] flex justify-center items-center">
        <AnimatePresence initial={false} custom={direction}>
          {cards.map((card, index) => {
            const { x, scale, opacity, zIndex } = getPositionProps(index);
            return (
              <motion.div
                key={card.id}
                animate={{ x, scale, opacity, zIndex }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden shadow-lg"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={handleDragEnd}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[160px] sm:w-[240px] md:w-[300px] h-[200px] sm:h-[320px] md:h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center">
                  <h3 className="text-white font-semibold text-sm sm:text-3xl mb-2 drop-shadow-md text-center">
                    {card.title}
                  </h3>

                  <a href={card.link} className="absolute bottom-3 sm:bottom-8">
                    <Button
                      variant="outline"
                      className="bg-black/10 backdrop-blur-xl border-white/60 text-white hover:bg-white hover:text-black text-xs sm:text-sm md:text-lg md:px-5 md:py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      Saiba mais
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>

    {/* Controles mais próximos */}
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="flex gap-2 sm:gap-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > centerIndex ? 1 : -1);
              setCenterIndex(index);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === centerIndex
                ? "bg-[#04A15E] scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>

      <Button
        onClick={() => setIsPlaying((prev) => !prev)}
        variant="outline"
        className="flex items-center gap-2 bg-white/50 backdrop-blur-lg border-gray-300 text-black hover:bg-gray-100 rounded-full px-4 py-2 shadow-sm"
      >
        {isPlaying ? (
          <>
            <Pause className="w-4 h-4" /> Pausar
          </>
        ) : (
          <>
            <Play className="w-4 h-4" /> Reproduzir
          </>
        )}
      </Button>
    </div>
  </div>
</section>

  );
}
