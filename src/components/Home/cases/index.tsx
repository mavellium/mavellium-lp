"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Icon } from '@iconify/react';
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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth !== null && windowWidth < 768;

  useEffect(() => {
    // autoplay apenas no desktop
    if (isMobile || !isPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, isPlaying, cards.length]);

  // controla o autoplay do Swiper no mobile
  useEffect(() => {
    if (!swiperRef.current) return;

    if (isMobile) {
      if (isPlaying) {
        swiperRef.current.autoplay?.start();
      } else {
        swiperRef.current.autoplay?.stop();
      }
    }
  }, [isMobile, isPlaying]);

  if (windowWidth === null) return null;

  // Função para navegar para um slide específico
  const goToSlide = (index: number) => {
    if (isMobile) {
      setActiveIndex(index);
      swiperRef.current?.slideTo(index);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      className="py-20 w-full flex flex-col justify-center items-center bg-[#F4F4F4] px-4"
      id="cases"
    >
      <div className="container flex flex-col justify-center items-center text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10">
          Resultados Reais para Diferentes Setores
        </h2>

        {/* 🟢 MOBILE - Swiper */}
        {isMobile && (
          <div className="w-full overflow-visible">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              slidesPerView={0.9}
              spaceBetween={16}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={card.id} className="overflow-visible">
                  <motion.div
                    onClick={() => setActiveIndex(index)}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    {/* 🔧 Card principal mobile ajustado */}
                    <div className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer w-[92vw] max-w-[600px] mx-auto">
                      <img
                        src={card.image}
                        className="object-cover w-full h-[340px] sm:h-[360px] rounded-2xl"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 rounded-2xl flex flex-col items-start p-4 w-[90%]"
                    >
                      <p className="text-gray-700 text-start mb-2">
                        {card.description}
                      </p>
                      <a
                        href={card.link}
                        className="text-[#04A15E] underline hover:text-[#037a45] transition-colors duration-200 font-medium"
                      >
                        Saiba mais
                      </a>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* 🟣 DESKTOP */}
        {!isMobile && (
          <>
            <div className="flex justify-center flex-wrap gap-6 md:gap-2 relative">
              {cards.map((card, index) => {
                const isActive = index === activeIndex;
                const activeWidth = windowWidth < 1024 ? 260 : 320;
                const inactiveWidth = windowWidth < 1024 ? 140 : 160;

                return (
                  <motion.div
                    key={card.id}
                    layout
                    className="flex flex-col items-center relative"
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{ minWidth: inactiveWidth }}
                  >
                    <motion.div
                      layout
                      onClick={() => setActiveIndex(index)}
                      animate={{
                        opacity: isActive ? 1 : 0.6,
                        width: isActive ? activeWidth : inactiveWidth,
                        scale: isActive ? 1 : 0.97,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className={`relative cursor-pointer overflow-hidden rounded-2xl shadow-md ${
                        isActive ? "ring-2 ring-[#04A15E]" : "ring-0"
                      }`}
                    >
                      <motion.img
                        layout
                        src={card.image}
                        alt={card.description}
                        className="object-cover rounded-2xl w-full h-[360px]"
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      />
                      <motion.div
                        layout
                        className={`absolute inset-0 flex justify-center items-center text-white ${
                          isActive ? "bg-black/20" : "bg-black/50"
                        }`}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      />
                    </motion.div>

                    <AnimatePresence mode="sync">
                      {isActive && (
                        <motion.div
                          key={`desc-${card.id}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="absolute top-full mt-4 rounded-2xl p-5 z-10 flex flex-col items-start text-left"
                          style={{ width: activeWidth, maxWidth: 360 }}
                        >
                          <p className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed">
                            {card.description}
                          </p>
                          <a
                            href={card.link}
                            className="text-[#04A15E] underline hover:text-[#037a45] transition-colors duration-200 font-medium"
                          >
                            Saiba mais
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}

        {/* 🔘 CONTROLES PADRONIZADOS - Dots + Play/Pause */}
        <div className="flex items-center justify-center mt-50 gap-4">
          {/* Dots no estilo Nubank */}
          <div className="flex gap-2 bg-[#DBDBDB] h-10 w-auto p-5 rounded-full justify-center items-center">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-black w-8 h-2"  // Ativo - preto e largura maior
                    : "bg-[#ACACAC] w-2 h-2 hover:bg-black"  // Inativos
                }`}
              ></button>
            ))}
          </div>

          {/* Botão Play/Pause padronizado */}
          <div>
            <Button
              onClick={() => setIsPlaying((prev) => !prev)}
              variant="outline"
              className="flex items-center bg-[#DBDBDB] backdrop-blur-md border-gray-300 text-black hover:bg-gray-100 rounded-full px-4 py-2 shadow-sm"
            >
              {isPlaying ? (
                <Icon icon="solar:pause-bold" className="w-5 h-5 text-black" />
              ) : (
                <Icon icon="solar:play-bold" className="w-5 h-5 text-black" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}