"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
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
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  // Calcular o índice real baseado nos slides originais
  const getRealIndex = (index: number) => {
    return index % originalSlides.length;
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
    <section className="w-full bg-white py-16 flex justify-center items-center">
      <div className="container flex flex-col lg:flex-row gap-12 items-start">

        {/* Coluna da Esquerda - Texto */}
        <div className="lg:w-1/2 space-y-8 p-5 flex">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-2xl font-bold text-black">
              Seja que nem eles
            </h2>
            
            {/* Controles de Navegação */}
            <div className="flex items-center gap-4">
              <button
                ref={navigationPrevRef}
                onClick={goToPrev}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DBDBDB] text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Icon icon="solar:alt-arrow-left-linear" className="w-6 h-6" />
              </button>
              
              <button
                ref={navigationNextRef}
                onClick={goToNext}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DBDBDB] text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                <Icon icon="solar:alt-arrow-right-linear" className="w-6 h-6" />
              </button>
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
        <div className="w-full max-w-6xl">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(0);
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveIndex(realIndex);
            }}
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={30} // Adicionando gap entre os slides
            loop={true}
            speed={600}
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
              depth: 150,
              modifier: 1.5,
              slideShadows: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20, // Gap menor no mobile
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30, // Gap no desktop
                coverflowEffect: {
                  rotate: 0,
                  stretch: 70,
                  depth: 150,
                  modifier: 0,
                  slideShadows: false,
                }
              }
            }}
            className="w-full"
          >
            {slides.map((client, i) => (
              <SwiperSlide
                key={i}
                className="w-[280px] md:w-[350px] lg:w-[100px]"
              >
                <Card className="bg-[#0C2136] border border-[#04A15E] rounded-2xl shadow-lg p-6 h-[400px] flex flex-col justify-center">
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