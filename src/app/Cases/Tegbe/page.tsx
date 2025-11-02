"use client";

import { Footer } from "@/components/Home/Footer";
import { Header } from "@/components/Home/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Badge } from "lucide-react";

export default function Servicos() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault()
        const section = document.querySelector(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }
    return (
        <>
            <Header></Header>

            <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#091725] py-16 px-6 md:px-10">
                <div className="container mx-auto lg:flex-row items-center justify-between text-white gap-10 lg:gap-20">

                    {/* Lado esquerdo - Texto */}
                    <div className="flex-1 text-center flex flex-col items-center space-y-6 w-full mb-10 z-10">
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight tracking-tight text-[#04A15E]">
                            Case: Tegbe
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
                            Desenvolvemos a landing page institucional da Tegbe, focada em design moderno, performance e resultados de conversão.
                        </p>
                    </div>

                    {/* Lado direito - Imagem */}
                    <div className="flex-1 relative flex justify-center items-center w-full">
                        <img
                            src="https://placehold.co/1120x747"
                            alt="Ilustração de serviços digitais"
                            className="relative z-10 w-full max-w-[900px] lg:max-w-[1100px] h-auto rounded-2xl shadow-lg shadow-black/30 object-cover"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full sm:w-auto"
                        >
                            <a
                                href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa."
                                className="flex gap-2 justify-center items-center"
                            >
                                <img src="/ic_baseline-whatsapp.svg" className="w-6" />
                                Fale com a gente
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#0C2136] md:py-24">
                <div className="container w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl justify-center items-center lg:items-start">
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] border-[#04A15E] w-full h-auto">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-20">

                                    {/* Coluna Esquerda - Texto */}
                                    <div className="flex-1 flex flex-col text-center lg:text-left">
                                        <CardTitle className="text-2xl sm:text-3xl md:text-[30px] text-[#04A15E] mb-5 font-bold">
                                            Sobre o Cliente
                                        </CardTitle>

                                        <p className="text-white text-sm sm:text-base leading-relaxed">
                                            A Tegbe é uma agência de marketing digital especializada em transformar marcas
                                            através de estratégias criativas e orientadas a dados. Com foco em resultados mensuráveis,
                                            a Tegbe atende empresas de diversos segmentos, entregando soluções completas em marketing digital.
                                        </p>

                                        {/* Ícones Informativos */}
                                        <div className="flex flex-wrap sm:flex-row justify-center items-center sm:justify-between gap-10 mt-8">
                                            {/* Cliente */}
                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="size-12 rounded-lg bg-[#007BFF]/10 flex items-center justify-center">
                                                    <Icon icon="solar:buildings-bold" className="size-6 text-[#007BFF]" />
                                                </div>
                                                <div className="flex flex-col items-start text-white">
                                                    <h2 className="text-[16px] sm:text-[18px] text-[#04A15E] font-semibold">Cliente</h2>
                                                    <p className="text-sm sm:text-base">Tegbe</p>
                                                </div>
                                            </div>

                                            {/* Segmento */}
                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="size-12 rounded-lg bg-[#20C997]/10 flex items-center justify-center">
                                                    <Icon icon="solar:graph-new-up-bold" className="size-6 text-[#20C997]" />
                                                </div>
                                                <div className="flex flex-col items-start text-white">
                                                    <h2 className="text-[16px] sm:text-[18px] text-[#04A15E] font-semibold">Segmento</h2>
                                                    <p className="text-sm sm:text-base">Marketing Digital</p>
                                                </div>
                                            </div>

                                            {/* Tipo de Projeto */}
                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="size-12 rounded-lg bg-[#6C757D]/10 flex items-center justify-center">
                                                    <Icon icon="solar:star-bold" className="size-6 text-white" />
                                                </div>
                                                <div className="flex flex-col items-start text-white">
                                                    <h2 className="text-[16px] sm:text-[18px] text-[#04A15E] font-semibold">Tipo de Projeto</h2>
                                                    <p className="text-sm sm:text-base">Landing Page</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Coluna Direita - Logo */}
                                    <div className="flex justify-center lg:justify-end items-center w-full lg:w-auto">
                                        <div className="p-4 rounded-lg bg-gradient-to-br from-white/10 to-[#285AD9]/40 shadow-[0_0_10px_#1E40AF] flex items-center justify-center">
                                            <img
                                                src="/tegbe.svg"
                                                alt="Logo Tegbe"
                                                className="w-32 sm:w-40 md:w-40 lg:w-30 h-30 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#0C2136] md:py-24">
                <div className="container w-full flex flex-col justify-center items-center">
                    <h2 className="text-4xl text-[#04A15E] flex text-center font-semibold mb-10">O que precisava ser resolvido</h2>
                    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl justify-center items-center lg:items-start">
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] border-[#04A15E] w-full h-auto">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-start items-start gap-10">

                                     {/* Parte 1 */}
                                    <div className="flex-1 flex flex-col text-start">
                                        <div className="flex items-center mb-5 gap-3">
                                            <div className="flex items-center justify-center">
                                                <Icon icon="solar:shield-warning-bold" className="size-6 text-[#DC3545]" />
                                            </div>
                                            <CardTitle className="text-2xl sm:text-3xl md:text-[25px] text-white font-semibold">
                                                Problemas Identificados
                                            </CardTitle>
                                        </div>
                                       
                                        <div className="flex flex-col justify-center items-start gap-5">
                                            
                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="flex items-center justify-center">
                                                    <Icon icon="solar:close-circle-bold" className="size-6 text-[#DC3545]" />
                                                </div>
                                                <div className="flex flex-col items-start text-[#E5E5E5]">
                                                    <p className="text-sm sm:text-base">Site institucional desatualizado com design ultrapassado</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="flex items-center justify-center">
                                                    <Icon icon="solar:close-circle-bold" className="size-6 text-[#DC3545]" />
                                                </div>
                                                <div className="flex flex-col items-start text-[#E5E5E5]">
                                                    <p className="text-sm sm:text-base">Baixa taxa de conversão e engajamento</p>
                                                </div>
                                            </div>

                                           
                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="flex items-center justify-center">
                                                    <Icon icon="solar:close-circle-bold" className="size-6 text-[#DC3545]" />
                                                </div>
                                                <div className="flex flex-col items-start text-[#E5E5E5]">
                                                    <p className="text-sm sm:text-base">Performance lenta prejudicando SEO</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className=" flex items-center justify-center">
                                                    <Icon icon="solar:close-circle-bold" className="size-6 text-[#DC3545]" />
                                                </div>
                                                <div className="flex flex-col items-start text-[#E5E5E5]">
                                                    <p className="text-sm sm:text-base">Falta de identidade visual forte</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* parte 2 */}
                                    <div className="flex-1 flex flex-col text-start">
                                        <div className="flex items-center mb-5 gap-3">
                                            <div className="flex items-center justify-center">
                                                <Icon icon="solar:flag-bold" className="size-6 text-[#20C997]" />
                                            </div>
                                            <CardTitle className="text-2xl sm:text-3xl md:text-[25px] text-white font-semibold">
                                                Objetivos do Projeto
                                            </CardTitle>
                                        </div>


                                        {/* Ícones Informativos */}
                                        <div className="flex flex-col justify-center items-start gap-5">
                                            {/* Cliente */}
                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="flex items-center justify-center">
                                                    <Icon icon="solar:check-circle-bold" className="size-6 text-[#20C997]" />
                                                </div>
                                                <div className="flex flex-col items-start text-[#E5E5E5]">
                                                    <p className="text-sm sm:text-base">Criar landing page moderna e profissional</p>
                                                </div>
                                            </div>

                                            {/* Segmento */}
                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="flex items-center justify-center">
                                                    <Icon icon="solar:check-circle-bold" className="size-6 text-[#20C997]" />
                                                </div>
                                                <div className="flex flex-col items-start text-[#E5E5E5]">
                                                    <p className="text-sm sm:text-base">Aumentar taxa de conversão em 40%</p>
                                                </div>
                                            </div>

                                            {/* Tipo de Projeto */}
                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className="flex items-center justify-center">
                                                    <Icon icon="solar:check-circle-bold" className="size-6 text-[#20C997]" />
                                                </div>
                                                <div className="flex flex-col items-start text-[#E5E5E5]">
                                                    <p className="text-sm sm:text-base">Atingir performance superior (tempo de carregamento menor que 2s)</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-3 items-center justify-center sm:justify-start">
                                                <div className=" flex items-center justify-center">
                                                    <Icon icon="solar:check-circle-bold" className="size-6 text-[#20C997]" />
                                                </div>
                                                <div className="flex flex-col items-start text-[#E5E5E5]">
                                                    <p className="text-sm sm:text-base">Melhorar posicionamento SEO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
