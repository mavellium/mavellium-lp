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

            <section className="relative w-full flex h-screen justify-end items-center overflow-hidden bg-[#091725] py-16 px-6 md:px-10">
                <div className="container mx-auto flex items-center justify-between md:gap-20 text-white gap-5">

                    {/* Lado esquerdo - Texto */}
                    <div className="flex-1 max-w-3xl text-center lg:text-left space-y-1 flex flex-col items-center lg:items-start">
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-nowrap">
                            Transformamos{" "}
                            <span className="block">ideias em</span>
                            <span className="block">experiências</span>
                            <span className="block">digitais que geram</span>
                            resultado.
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl mt-6 text-white/90 max-w-2xl">
                            Da landing page ao sistema completo — a Mavellium
                            <span className="block">desenvolve soluções sob medida que unem</span>
                            <span className="block">performance, design e estratégia.</span>

                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-8 w-full sm:w-auto">
                            <a
                                href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                                className="flex gap-2 justify-center items-center"
                            >
                                <Button
                                    size="lg"
                                    className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full sm:w-auto cursor-pointer transition-all hover:scale-110"
                                >

                                    <Icon
                                        icon="solar:rocket-bold"
                                        className="w-6 h-6"
                                    />
                                    Solicitar orçamento

                                </Button>
                            </a>
                            <a href="#servicos">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-[#fff]/20 border-white/30 text-white w-full sm:w-auto cursor-pointer"
                                >
                                    <Icon icon="solar:gallery-bold" className="size-5" />
                                    Ver portfólio
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Lado direito - Imagem (oculta no mobile) */}
                    <div className="relative hidden sm:hidden md:hidden lg:block md:flex flex-1 justify-center">
                        <div className="absolute inset-0 flex justify-start items-center">
                            <div className="w-[536px] h-[536px] bg-gradient-to-r from-[#6D28D9]/50 to-[#1E40AF]/50 blur-[64px] rounded-md opacity-64"></div>
                        </div>

                        <img
                            src="https://placehold.co/536x536"
                            alt="Ilustração de serviços digitais"
                            className="relative z-10 max-w-[350px] md:max-w-[450px] lg:max-w-[536px] w-full h-auto rounded-2xl shadow-lg shadow-black/25"
                        />
                    </div>
                </div>
            </section>
            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#0C2136] md:py-24" id="servicos">
                <div className="container w-full flex flex-col justify-center items-center">
                    {/* Título */}
                    <div className="text-center text-white space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                            Nossos Serviços
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Soluções digitais completas para empresas que querem crescer e se destacar no mercado
                        </p>
                    </div>

                    {/* GRID AJUSTADO */}
                    <div
                        className="grid gap-8 w-full max-w-7xl justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {/* CARD 1 */}
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] border-2 border-[#2554C9] text-white w-full max-w-sm h-[312px]">
                            <CardHeader>
                                <div className="size-12 rounded-lg bg-gradient-to-br from-[#285AD9] to-[#285AD9]/90 shadow-[0_0_5px_#1E40AF] transition-shadow flex items-center justify-center mb-4">
                                    <Icon icon="solar:rocket-bold" className="size-6 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Landing Pages de Alta Conversão</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#E5E5E5]">
                                    Desenvolvidas com foco em performance,
                                    <span className="block">UX e SEO. Otimizadas para campanhas e</span>
                                    vendas.
                                </p>
                                <a href="/Servicos/LandingPage" className="flex justify-center items-center gap-2">
                                    <Button variant="ghost" className="w-full flex justify-start mt-5 cursor-pointer">
                                        Saiba mais
                                        <Icon icon="solar:arrow-right-bold" className="size-4" />
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>

                        {/* CARD 2 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full bg-[#010910] border-2 border-[#2554C9] text-white max-w-sm h-[312px]">
                            <CardHeader>
                                <div className="size-12 rounded-lg bg-gradient-to-r from-[#1E40AF] to-[#1E40AF]/90 shadow-[0_0_5px_#1E40AF] transition-shadow flex items-center justify-center mb-4">
                                    <Icon icon="solar:cpu-bold" className="size-6 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Sistemas Web Sob Medida</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#E5E5E5]">
                                    Automatizamos processos e criamos
                                    <span className="block">soluções personalizadas para sua empresa </span>
                                    crescer.
                                </p>
                                <Button variant="ghost" className="w-full flex justify-start mt-5">
                                    Saiba mais
                                    <Icon icon="solar:arrow-right-bold" className="size-4" />
                                </Button>
                            </CardContent>
                        </Card>


                        {/* <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[312px]">
                            <CardHeader>
                                <div className="size-12 rounded-lg bg-gradient-to-r from-[#6D28D9] to-[#6D28D9]/90 shadow-[0_0_5px_#6D28D9] transition-shadow flex items-center justify-center mb-4">
                                    <Icon icon="solar:smartphone-line-duotone" className="size-6 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Aplicativos e Dashboards</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Aplicativos e painéis modernos com
                                    <span className="block">tecnologias escaláveis e interfaces fluidas.</span>
                                </p>
                                <Button variant="ghost" className="w-full flex justify-start mt-5">
                                    Saiba mais
                                    <Icon icon="solar:arrow-right-bold" className="size-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        
                        <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[312px]">
                            <CardHeader>
                                <div className="size-12 rounded-lg bg-gradient-to-r from-[#1E40AF] to-[#1E40AF]/90 shadow-[0_0_5px_#1E40AF] transition-shadow flex items-center justify-center mb-4">
                                    <Icon icon="solar:code-bold" className="size-6 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Integrações e APIs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Conectamos plataformas e dados para
                                    <span className="block">eliminar gargalos e melhorar produtividade.</span>
                                </p>
                                <Button variant="ghost" className="w-full flex justify-start mt-5">
                                    Saiba mais
                                    <Icon icon="solar:arrow-right-bold" className="size-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        
                        <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[312px]">
                            <CardHeader>
                                <div className="size-12 rounded-lg bg-gradient-to-r from-[#6D28D9] to-[#6D28D9]/90 shadow-[0_0_5px_#6D28D9] transition-shadow flex items-center justify-center mb-4">
                                    <Icon icon="material-symbols:window" className="size-6 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Gerenciamento de Projetos Digitais</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Cuidamos de todo o ciclo — da ideia ao
                                    <span className="block">lançamento — com metodologia ágil e visão</span>
                                    de negócio.
                                </p>
                                <Button variant="ghost" className="w-full flex justify-start mt-5">
                                    Saiba mais
                                    <Icon icon="solar:arrow-right-bold" className="size-4" />
                                </Button>
                            </CardContent>
                        </Card> */}
                    </div>
                </div>
            </section>
            <section className="py-20 w-full flex flex-col justify-center items-center bg-[#041526] md:py-25" id="contato">
                <div className="container">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-col justify-center items-center text-center text-white space-y-4 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white lg:text-nowrap mb-10">
                                Pronto para transformar sua ideia em
                                <span className="block">um produto digital de verdade?</span>
                            </h2>
                            <p className="text-lg max-w-2xl font-light mx-auto text-[#fff]/80">
                                Entre em contato e vamos conversar sobre como podemos ajudar sua
                                <span className="block">empresa a crescer</span>
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                                    className="flex gap-2 justify-center items-center">
                                    <Button
                                        size="lg"
                                        className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] cursor-pointer transition-all hover:scale-110"
                                    >

                                        <img src="/ic_baseline-whatsapp.svg" className="w-6" />
                                        Fale com a gente

                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
