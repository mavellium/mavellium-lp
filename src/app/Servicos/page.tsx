"use client";

import { Footer } from "@/components/Home/footer";
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
            <header className="sticky top-0 z-50 w-full border-b border-border flex justify-center bg-white px-10">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center">
                            <img
                                src="/logo-mavellium.svg"
                                alt="Mavellium"
                                width={180}
                                height={40}
                                className="object-contain"
                            />
                        </a>

                        <nav className="hidden md:flex gap-6">
                            <a
                                href="/Home"
                                onClick={(e) => handleScroll(e, "#")}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#servicos"
                                onClick={(e) => handleScroll(e, "#servicos")}
                                className="text-sm font-medium text-black hover:text-foreground transition-colors"
                            >
                                Serviços
                            </a>
                            <a
                                href="#cases"
                                onClick={(e) => handleScroll(e, "#cases")}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Cases
                            </a>
                            <a
                                href="#sobre"
                                onClick={(e) => handleScroll(e, "#sobre")}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Sobre
                            </a>
                            <a
                                href="#blog"
                                onClick={(e) => handleScroll(e, "#blog")}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Blog
                            </a>
                            <a
                                href="#contato"
                                onClick={(e) => handleScroll(e, "#contato")}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Contato
                            </a>
                        </nav>
                    </div>

                    <div className="hidden md:flex">
                        <Button className="shadow-lg shadow-primary/20 bg-[#008E52] hover:bg-[#017346]">
                            <a
                                href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 justify-center items-center"
                            >
                                <img src="/ic_baseline-whatsapp.svg" className="w-6" />
                                Fale com a gente
                            </a>
                        </Button>
                    </div>

                    <Button size="icon" variant="ghost" className="md:hidden">
                        <Icon icon="solar:hamburger-menu-bold" className="size-6" />
                    </Button>
                </div>
            </header>

            <section className="relative w-full flex justify-end items-center overflow-hidden bg-[#091725] py-16 px-6 md:px-10">
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
                            <Button
                                size="lg"
                                className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full sm:w-auto"
                            >
                                <a
                                    href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                                    className="flex gap-2 justify-center items-center"
                                >
                                    <Icon
                                        icon="solar:rocket-bold"
                                        className="w-6 h-6"
                                    />
                                    Solicitar orçamento
                                </a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-[#fff]/20 border-white/30 text-white w-full sm:w-auto"
                            >
                                <Icon icon="solar:gallery-bold" className="size-5" />
                                Ver portfólio
                            </Button>
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
                        <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[312px]">
                            <CardHeader>
                                <div className="size-12 rounded-lg bg-gradient-to-br from-[#285AD9] to-[#285AD9]/90 shadow-[0_0_5px_#1E40AF] transition-shadow flex items-center justify-center mb-4">
                                    <Icon icon="solar:rocket-bold" className="size-6 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Landing Pages de Alta Conversão</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Desenvolvidas com foco em performance,
                                    <span className="block">UX e SEO. Otimizadas para campanhas e</span>
                                    vendas.
                                </p>
                                <Button variant="ghost" className="w-full flex justify-start mt-5">
                                    <a href="/Servicos_details" className="flex justify-center items-center gap-2">
                                    Saiba mais
                                    <Icon icon="solar:arrow-right-bold" className="size-4" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* CARD 2 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[312px]">
                            <CardHeader>
                                <div className="size-12 rounded-lg bg-gradient-to-r from-[#1E40AF] to-[#1E40AF]/90 shadow-[0_0_5px_#1E40AF] transition-shadow flex items-center justify-center mb-4">
                                    <Icon icon="solar:cpu-bold" className="size-6 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Sistemas Web Sob Medida</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
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

                        {/* CARD 3 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[312px]">
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

                        {/* CARD 4 */}
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

                        {/* CARD 5 */}
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
                        </Card>
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
                                <Button
                                    size="lg"
                                    className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] cursor-pointer"
                                >
                                    <a href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F" className="flex gap-2 justify-center items-center">
                                        <img src="/ic_baseline-whatsapp.svg" className="w-6" />
                                        Fale com a gente
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
