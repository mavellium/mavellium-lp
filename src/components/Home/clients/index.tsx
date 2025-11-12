"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export function Clients() {
  const originalSlides = [
    {
      name: "Donizete Caetano",
      role: "Fundador, Tegbe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      fallback: "DC",
      content: "\"A Mavellium entregou exatamente o que precisávamos. O resultado superou nossas expectativas.\""
    },
    {
      name: "Donizete Caetano",
      role: "Fundador, Tegbe",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      fallback: "DC",
      content: "\"A Mavellium entregou exatamente o que precisávamos. O resultado superou nossas expectativas.\""
    },
    {
      name: "Donize",
      role: "Fundador",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      fallback: "DZ",
      content: "\"A Mavellium entregou exatamente o que precisávamos. O resultado superou nossas expectativas.\""
    },
  ];

  // Duplicar os slides para garantir que o loop funcione
  const slides = [...originalSlides, ...originalSlides, ...originalSlides];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  // Calcular o índice real baseado nos slides originais
  const getRealIndex = (index: number) => {
    return index % originalSlides.length;
  };

  const togglePlay = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  const goToNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };

  const goToPrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  return (
    <section className="w-full bg-[#030F1B] py-16 flex justify-center items-center">
      <div className="container flex flex-col lg:flex-row gap-12 items-center">

        {/* Coluna da Esquerda - Texto */}
        <div className="lg:w-1/2 space-y-8 p-5 flex justify-center items-start">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-2xl font-bold text-white">
              Seja que nem eles
            </h2>
            
            {/* Controles de Navegação */}
            <div className="flex items-center gap-4">
              <button
                ref={navigationPrevRef}
                onClick={goToPrev}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#04A15E] text-white hover:bg-[#038c50] transition-colors duration-300"
              >
                <Icon icon="solar:alt-arrow-left-linear" className="w-6 h-6" />
              </button>
              
              <button
                ref={navigationNextRef}
                onClick={goToNext}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#04A15E] text-white hover:bg-[#038c50] transition-colors duration-300"
              >
                <Icon icon="solar:alt-arrow-right-linear" className="w-6 h-6" />
              </button>

              {/* Botão Play/Pause */}
              <Button
                onClick={togglePlay}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-colors duration-300"
              >
                {isPlaying ? (
                  <Icon icon="solar:pause-bold" className="w-5 h-5" />
                ) : (
                  <Icon icon="solar:play-bold" className="w-5 h-5" />
                )}
              </Button>
            </div>

            <a
              href="/Servicos"
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <Button
                size="lg"
                className="bg-[#006C49] text-white sm:text-lg md:text-xl cursor-pointer rounded-full hover:bg-[#009e6b] transition"
              >
                Conheça nossas soluções
              </Button>
            </a>
          </div>
        </div>

        {/* Coluna da Direita - Carrossel */}
        <div className="lg:w-1/2 w-full max-w-2xl relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.slideTo(originalSlides.length, 0);
              setActiveIndex(0);
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveIndex(realIndex);
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              768: {
                slidesPerView: 1.2,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }
              }
            }}
            className="w-full"
          >
            {slides.map((client, i) => (
              <SwiperSlide
                key={i}
                className="w-full max-w-md"
              >
                <Card className="bg-[#0C2136] border border-[#04A15E] rounded-2xl shadow-lg p-6 h-full">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-[#04A15E]">
                        <AvatarImage
                          alt="Cliente"
                          src={client.avatar}
                        />
                        <AvatarFallback className="bg-[#04A15E] text-white">
                          {client.fallback}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-[#04A15E] text-lg">{client.name}</p>
                        <p className="text-sm text-white/80">{client.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-white/80 text-base leading-relaxed">
                      {client.content}
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}