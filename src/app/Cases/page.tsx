"use client";

import { Clients } from "@/components/Home/Clients";
import { Footer } from "@/components/Home/Footer";
import { Header } from "@/components/Home/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

            <section className="relative w-full flex flex-col lg:flex-row min-h-screen justify-center items-center overflow-hidden bg-[#091725] py-16 px-6 md:px-10">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-white">

                    {/* Lado esquerdo - Texto */}
                    <div className="flex-1 max-w-3xl text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">
                        <h1 className="font-heading text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                            Nossos Cases de
                            <span className="block text-[#04A15E]">Sucesso</span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-[14px] xl:text-xl mt-4 text-white/90 max-w-xl sm:max-w-2xl">
                            Conheça projetos que ajudaram nossos clientes a alcançar
                            <span className="block">resultados reais no digital.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6 w-full sm:w-auto transition-all hover:scale-110">
                            <a
                                href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto cursor-pointer"
                            >
                                <Button
                                    size="lg"
                                    className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full sm:w-auto flex gap-2 justify-center items-center cursor-pointer"
                                >

                                    <Icon icon="solar:rocket-bold" className="w-5 h-5 sm:w-6 sm:h-6" />
                                    Quero ser como esses Cases

                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Lado direito - Imagens (oculta no mobile) */}
                    <div className="relative hidden lg:flex flex-1 justify-center">
                        {/* Fundo com gradiente e blur */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-[536px] h-[536px] bg-gradient-to-r from-[#6D28D9]/50 to-[#1E40AF]/50 blur-[64px] rounded-md opacity-60"></div>
                        </div>

                        <div className="flex flex-row gap-4 lg:h-auto md:h-[500px]">
                            {/* Coluna 1 */}
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="bg-white/5 rounded-2xl shadow-lg shadow-black/25 overflow-hidden h-[242px]">
                                    <img
                                        src="https://placehold.co/256x256"
                                        alt="Imagem 1"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="bg-white/5 rounded-2xl shadow-lg shadow-black/25 overflow-hidden mb-10 w-[252px] h-[306px]">
                                    <img
                                        src="https://placehold.co/256x256"
                                        alt="Imagem 2"
                                        className="w-full fill-available object-cover"
                                    />
                                </div>
                            </div>

                            {/* Coluna 2 */}
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="bg-white/5 rounded-2xl shadow-lg shadow-black/25 overflow-hidden mt-10 w-[252px] h-[306px]">
                                    <img
                                        src="https://placehold.co/256x256"
                                        alt="Imagem 3"
                                        className="w-full fill-available object-cover"
                                    />
                                </div>

                                <div className="bg-white/5 rounded-2xl shadow-lg shadow-black/25 overflow-hidden h-[242px]">
                                    <img
                                        src="https://placehold.co/256x256"
                                        alt="Imagem 4"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="py-16 w-full flex flex-col justify-center items-center px-12 md:py-24 bg-[#0C2136]" id="cases">
                <div className="container">
                    <div className="text-center flex justify-center items-center flex-wrap gap-4 mb-50">
                        <Button
                            size="lg"
                            className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full sm:w-auto text-sm sm:text-base cursor-pointer"
                        >
                            <Icon icon="solar:monitor-bold" className="size-4" />
                            Todos os projetos
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-[#fff]/20 text-white hover:bg-[#fff] cursor-pointer"
                        >
                            <Icon icon="solar:rocket-bold" className="size-4" />
                            Landing Pages
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-[#fff]/20 text-white hover:bg-[#fff] cursor-pointer"
                        >
                            <Icon icon="solar:planet-bold" className="size-4" />
                            Sites Institucionais
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-[#fff]/20 text-white hover:bg-[#fff] cursor-pointer"
                        >
                            <Icon icon="solar:smartphone-bold" className="size-4" />
                            Aplicativos
                        </Button>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-300 h-auto">
                            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
                                <img
                                    alt="Tegbe"
                                    src="/tegbe.png"
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <CardHeader>
                                    <CardTitle>Tegbe</CardTitle>
                                    <CardDescription>Landing page institucional</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                                        <Icon icon="solar:arrow-up-bold" className="size-4" />
                                        <span>+40% conversões</span>
                                    </div>
                                    <div className="flex items-center mt-5 text-[#6B7280]">
                                        <p>Desenvolvimento de landing page focada em conversão que triplicou a captação de leads qualificados.</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full h-full flex justify-center items-end">
                                        Ver detalhes
                                        <Icon icon="solar:arrow-right-bold" className="size-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
                                <img
                                    alt="TegPro"
                                    src="/tegpro.png"
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <CardHeader>
                                    <CardTitle>TegPro</CardTitle>
                                    <CardDescription>Página de produto</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                                        <Icon icon="solar:check-circle-bold" className="size-4" />
                                        <span>Lançamento</span>
                                    </div>
                                    <div className="flex items-center mt-5 text-[#6B7280]">
                                        <p>Desenvolvimento de landing page focada em conversão que triplicou a captação de leads qualificados.</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full h-full flex justify-center items-end">
                                        Ver detalhes
                                        <Icon icon="solar:arrow-right-bold" className="size-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
                                <img
                                    alt="FAIP"
                                    src="/faef.png"
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <CardHeader>
                                    <CardTitle>FAIP</CardTitle>
                                    <CardDescription>Campanha de captação</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                                        <Icon icon="solar:users-group-rounded-bold" className="size-4" />
                                        <span>+250 leads</span>
                                    </div>
                                    <div className="flex items-center mt-5 text-[#6B7280]">
                                        <p>Desenvolvimento de landing page focada em conversão que triplicou a captação de leads qualificados.</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full h-full flex justify-center items-end">
                                        Ver detalhes
                                        <Icon icon="solar:arrow-right-bold" className="size-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
                                <img
                                    alt="Instituto do Sorriso"
                                    src="/instituto-sorriso.png"
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <CardHeader>
                                    <CardTitle>Instituto do Sorriso</CardTitle>
                                    <CardDescription>Website institucional</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                                        <Icon icon="solar:users-group-rounded-bold" className="size-4" />
                                        <span>+250 leads</span>
                                    </div>
                                    <div className="flex items-center mt-5 text-[#6B7280]">
                                        <p>Desenvolvimento de landing page focada em conversão que triplicou a captação de leads qualificados.</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full h-full flex justify-center items-end">
                                        Ver detalhes
                                        <Icon icon="solar:arrow-right-bold" className="size-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
                                <img
                                    alt="Instituto do Sorriso"
                                    src="/instituto-sorriso.png"
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <CardHeader>
                                    <CardTitle>Instituto do Sorriso</CardTitle>
                                    <CardDescription>Website institucional</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                                        <Icon icon="solar:users-group-rounded-bold" className="size-4" />
                                        <span>+250 leads</span>
                                    </div>
                                    <div className="flex items-center mt-5 text-[#6B7280]">
                                        <p>Desenvolvimento de landing page focada em conversão que triplicou a captação de leads qualificados.</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full h-full flex justify-center items-end">
                                        Ver detalhes
                                        <Icon icon="solar:arrow-right-bold" className="size-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
                                <img
                                    alt="Instituto do Sorriso"
                                    src="/instituto-sorriso.png"
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <CardHeader>
                                    <CardTitle>Instituto do Sorriso</CardTitle>
                                    <CardDescription>Website institucional</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                                        <Icon icon="solar:users-group-rounded-bold" className="size-4" />
                                        <span>+250 leads</span>
                                    </div>
                                    <div className="flex items-center mt-5 text-[#6B7280]">
                                        <p>Desenvolvimento de landing page focada em conversão que triplicou a captação de leads qualificados.</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full h-full flex justify-center items-end">
                                        Ver detalhes
                                        <Icon icon="solar:arrow-right-bold" className="size-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Clients></Clients>

            <section
                id="contato"
                className="w-full flex flex-col justify-center items-center bg-[#041526] py-16 sm:py-20 md:py-24"
            >
                <div className="container px-6 sm:px-10">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-col justify-center items-center text-center text-white space-y-6 mb-12">
                            {/* Título */}
                            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#04A15E] mb-4 leading-tight">
                                Quer que seu projeto seja nosso
                                <span className="block">próximo case de sucesso?</span>
                            </h2>

                            {/* Subtítulo */}
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl font-light mx-auto text-[#ffffff]/80 leading-relaxed">
                                Vamos conversar sobre como podemos transformar sua ideia em resultados reais. Nossa equipe está pronta para criar uma solução sob medida para o seu negócio.
                            </p>

                            {/* Botão WhatsApp */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 w-full sm:w-auto transition-all hover:scale-110">
                                <a
                                    href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto cursor-pointer"
                                >
                                    <Button
                                        size="lg"
                                        className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full sm:w-auto flex gap-2 justify-center items-center cursor-pointer"
                                    >
                                        <img src="/ic_baseline-whatsapp.svg" alt="WhatsApp" className="w-6" />
                                        Fale com a gente
                                    </Button>
                                </a>
                            </div>


                            {/* Informações adicionais */}
                            <div className="flex justify-center items-center flex-wrap gap-5 sm:gap-10 md:gap-16 mt-5">
                                <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                    <h2 className="text-3xl text-[#04A15E] font-bold">6+</h2>
                                    <p>Projetos entregues</p>
                                </div>
                                <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                    <h2 className="text-3xl text-[#04A15E] font-bold">98%</h2>
                                    <p>Satisfação</p>
                                </div>
                                <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                    <div className="flex flex-row items-center justify-center">
                                        <h2 className="text-3xl text-[#04A15E] font-bold">6 meses</h2>
                                    </div>
                                    <p>No mercado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
