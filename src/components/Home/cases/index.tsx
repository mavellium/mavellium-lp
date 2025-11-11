"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function Cases() {
  const cards = [
    {
      id: 1,
      image: "/Setor-1.png",
      link: "/Servicos/Institucional",
      description:
        "Tenha um site profissional que valoriza sua marca e aumenta sua autoridade digital.",
    },
    {
      id: 2,
      image: "/Setor-2.png",
      link: "/Servicos/LandingPage",
      description:
        "Otimize suas conversões com páginas focadas em resultados e performance.",
    },
    {
      id: 3,
      image: "/Setor-3.png",
      link: "/Servicos/Ecommerce",
      description:
        "Venda mais com uma loja online moderna, rápida e com ótima experiência de compra.",
    },
    {
      id: 4,
      image: "/Setor-4.png",
      link: "/Servicos/Aplicativo",
      description:
        "Desenvolvemos apps web escaláveis e sob medida para o seu negócio.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);

  // Detecta largura da tela
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // inicializa
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoplay (somente desktop)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, cards.length]);

  // controla o autoplay do Swiper no mobile
  useEffect(() => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay?.start();
      } else {
        swiperRef.current.autoplay?.stop();
      }
    }
  }, [isPlaying]);

  // evita renderizar antes do cliente (SSR safe)
  if (windowWidth === null) return null;

  const isMobile = windowWidth < 768;

  return (
    <section
      className="py-20 w-full flex flex-col justify-center items-center bg-white px-4"
      id="cases"
    >
      <div className="container flex flex-col justify-center items-center text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10">
          Resultados Reais para Diferentes Setores
        </h2>

        {/* 🟢 MOBILE - Swiper */}
        {isMobile && (
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              spaceBetween={16}
              slidesPerView={0.9} // ocupa quase toda a tela
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={card.id}>
                  <motion.div
                    onClick={() => setActiveIndex(index)}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer w-full">
                      <img
                        src={card.image}
                        className="object-cover w-full h-[380px] rounded-2xl"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 bg-white shadow-md rounded-2xl p-4 w-[90%]"
                    >
                      <p className="text-gray-700 text-base mb-2">
                        {card.description}
                      </p>
                      <a href={card.link}>
                        <Button className="bg-[#04A15E] hover:bg-[#039456] text-white rounded-full px-4 py-2 text-base shadow-md hover:shadow-lg transition-all">
                          Saiba mais
                        </Button>
                      </a>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Dots (navegação) */}
            <div className="flex justify-center gap-2 mt-6">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperRef.current?.slideTo(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#04A15E] scale-125"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* 🔘 Botão de pausa / continuar (MOBILE) */}
            <div className="flex justify-center mt-6">
              <Button
                onClick={() => setIsPlaying((prev) => !prev)}
                variant="outline"
                className="flex items-center gap-2 bg-white/70 backdrop-blur-md border-gray-300 text-black hover:bg-gray-100 rounded-full px-4 py-2 shadow-sm"
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
        )}

        {/* 🟣 DESKTOP - Cards fixos */}
        {!isMobile && (
          <div className="flex justify-center flex-wrap gap-4 md:gap-5">
            {cards.map((card, index) => {
              const isActive = index === activeIndex;
              const activeWidth = windowWidth < 1024 ? 260 : 320;
              const inactiveWidth = windowWidth < 1024 ? 140 : 160;

              return (
                <div key={card.id} className="flex flex-col items-center">
                  <motion.div
                    onClick={() => setActiveIndex(index)}
                    animate={{
                      opacity: isActive ? 1 : 0.6,
                      width: isActive ? activeWidth : inactiveWidth,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`relative cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-100 ${
                      isActive ? "ring-2 ring-[#04A15E]" : "ring-0"
                    }`}
                  >
                    <img
                      src={card.image}
                      className="object-cover rounded-2xl w-full h-[360px] transition-all duration-100"
                    />
                    <div
                      className={`absolute inset-0 flex flex-col justify-center items-center text-white transition-all duration-100 ${
                        isActive ? "bg-black/20" : "bg-black/50"
                      }`}
                    ></div>
                  </motion.div>

                  {/* descrição do card ativo */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 bg-white shadow-lg rounded-2xl p-4"
                        style={{ width: activeWidth }}
                      >
                        <p className="text-gray-700 text-sm md:text-base mb-2">
                          {card.description}
                        </p>
                        <a href={card.link}>
                          <Button className="bg-[#04A15E] hover:bg-[#039456] text-white rounded-full px-4 py-2 text-sm md:text-base shadow-md hover:shadow-lg transition-all">
                            Saiba mais
                          </Button>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* ⚙️ Controles Desktop */}
        {!isMobile && (
          <div className="flex flex-col items-center gap-3 mt-16">
            <div className="flex gap-2 sm:gap-3">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#04A15E] scale-125"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>

            <Button
              onClick={() => setIsPlaying((prev) => !prev)}
              variant="outline"
              className="flex items-center gap-2 bg-white/60 backdrop-blur-md border-gray-300 text-black hover:bg-gray-100 rounded-full px-4 py-2 shadow-sm"
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
        )}
      </div>
    </section>
  );
}
