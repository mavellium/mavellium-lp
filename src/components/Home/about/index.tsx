"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export function About() {
  const slides = [
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

  const [activeIndex, setActiveIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const togglePlay = () => {
    if (!swiperInstance) return;
    if (isPlaying) swiperInstance.autoplay.stop();
    else swiperInstance.autoplay.start();
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    if (!swiperInstance) return;
    swiperInstance.slideToLoop(index); // Vai para o slide desejado mesmo com loop
    setActiveIndex(index);
  };

  return (
    <section className="w-full py-16 flex flex-col justify-center items-center">
      <div className="container flex flex-col items-center text-center text-black">
        <h1 className="text-lg sm:text-4xl font-semibold max-w-4xl px-4 mb-10">
          Mais do que código, criamos experiências digitais que impulsionam negócios.
        </h1>

        {/* 🔹 Descrição animada do slide ativo */}
        <div className="relative h-20 sm:h-24 mb-6 flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center text-md sm:text-lg font-light max-w-lg px-4"
            >
              {slides[activeIndex].desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 🌀 Carrossel 3D */}
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 60,
            depth: 120,
            modifier: 2,
            slideShadows: true,
          }}
          navigation={false}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          
          className="w-full max-w-6xl"
        >
          {slides.map((s, i) => (
            <SwiperSlide
              key={i}
              className="w-[320px] md:w-[400px] lg:w-[460px] bg-[#041526] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative h-[400px] flex flex-col">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover"
                />
                <div className=" text-white">
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔘 Paginação customizada */}
        <div className="flex gap-2 sm:gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#04A15E] scale-125"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

        {/* ⚙️ Botão Pausar/Reproduzir */}
        <div className="mt-8">
          <Button
            onClick={togglePlay}
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
      </div>
    </section>
  );
}
