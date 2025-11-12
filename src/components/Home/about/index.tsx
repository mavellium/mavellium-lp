"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export function About() {
  const originalSlides = [
    {
      title: "The Suicide Squad",
      img: "https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg",
      desc: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons join Task Force X.",
    },
    {
      title: "Thor: Ragnarok",
      img: "https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg",
      desc: "Imprisoned on Sakaar, Thor must race against time to stop Ragnarök and Hela.",
    },
    {
      title: "Doctor Strange",
      img: "https://carousel-slider.uiinitiative.com/images/dr-strange.jpg",
      desc: "America Chavez and Stephen Strange face multiversal threats in search of the Book of Vishanti.",
    },
  ];

  // Duplicar os slides para garantir que o loop funcione com poucos slides
  const slides = [...originalSlides, ...originalSlides, ...originalSlides];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef<any>(null);

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

  const goToSlide = (index: number) => {
    if (!swiperRef.current) return;
    // Vai para a primeira ocorrência do slide original
    swiperRef.current.slideTo(index);
  };

  return (
    <section className="w-full bg-[#030F1B] py-16 flex justify-center items-center">
      <div className="container flex flex-col items-center">
        <h1 className="text-lg sm:text-4xl font-semibold max-w-4xl px-4 mb-10 text-white text-center">
          Mais do que código, criamos experiências digitais que impulsionam negócios.
        </h1>

        {/* Descrição animada */}
        <div className="relative h-20 sm:h-24 mb-8 flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={getRealIndex(activeIndex)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center text-md sm:text-lg font-light max-w-lg px-4 text-gray-300"
            >
              {originalSlides[getRealIndex(activeIndex)].desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Carrossel */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          speed={600}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active'
          }}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }
            },
            768: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 0,
                stretch: 120,
                depth: 150,
                modifier: 1.5,
                slideShadows: true,
              }
            }
          }}
          className="w-full max-w-6xl"
          initialSlide={originalSlides.length} // Começar no meio para o loop funcionar
        >
          {slides.map((s, i) => (
            <SwiperSlide
              key={i}
              className="w-[280px] md:w-[350px] lg:w-[400px] bg-[#041526] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative h-[400px] flex flex-col">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6 text-white flex-1 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                  <p className="text-sm text-gray-300">{s.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginação customizada baseada nos slides originais */}
        <div className="custom-pagination flex gap-2 sm:gap-3 mt-6">
          {originalSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index + originalSlides.length)}
              className={`custom-bullet w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                getRealIndex(activeIndex) === index
                  ? "custom-bullet-active bg-[#04A15E] scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

        {/* Botão Pausar/Reproduzir */}
        <div className="mt-8">
          <Button
            onClick={togglePlay}
            variant="outline"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border-gray-600 text-white hover:bg-white/20 rounded-full px-4 py-2"
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