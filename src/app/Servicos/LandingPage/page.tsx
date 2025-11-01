"use client";

import { Cases } from "@/components/Home/Cases";
import { Footer } from "@/components/Home/Footer";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Clients } from "@/components/Home/Clients";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Header } from "@/components/Home/Header";

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

            <section className="relative w-full h-screen flex justify-end items-center overflow-hidden bg-[#091725] py-16 px-6 md:px-10">
                <div className="container mx-auto flex items-center justify-between md:gap-20 text-white gap-5">

                    {/* Lado esquerdo - Texto */}
                    <div className="flex-1 xl:max-w-3xl lg:max-w-full text-center xl:text-left space-y-1 flex flex-col items-center xl:items-start">
                        <div className="flex items-center justify-center gap-2 mb-6 bg-[#3B82F6]/10 text-[#04A15E] p-2 px-5 rounded-full">
                            <Icon icon="solar:star-bold" className="w-4 h-4" />
                            Landing Pages de Alta Conversão
                        </div>
                        <h1 className="font-heading text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-nowrap">
                            Landing Pages
                            <span className="block">que <span className="text-[#04A15E]">convertem</span></span>
                        </h1>

                        <p className="text-base text-md sm:text-md md:text-md lg:text-xl mt-6 text-white/90 max-w-2xl">
                            Criamos páginas otimizadas para gerar leads, vendas
                            <span className="block">e resultados reais. Design estratégico que transforma</span>
                            <span className="block">visitantes em clientes.</span>

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
                                    Quero a minha Landing Page
                                </a>
                            </Button>
                        </div>
                        <div className="flex justify-center items-center gap-6 mt-5">
                            <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                <h2 className="text-2xl text-[#04A15E] font-bold">+6</h2>
                                <p>Projetos entregues</p>
                            </div>
                            <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                <h2 className="text-2xl text-[#04A15E] font-bold">100%</h2>
                                <p>Satisfação</p>
                            </div>
                            <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                <h2 className="text-2xl text-[#04A15E] font-bold">+40%</h2>
                                <p>Média conversão</p>
                            </div>
                        </div>
                    </div>

                    {/* Lado direito - Imagem (oculta no mobile) */}
                    <div className="relative hidden lg:hidden xl:block lg:flex flex-1 justify-center items-center">
                        {/* Glow de fundo */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-[536px] h-[536px] bg-gradient-to-r from-[#6D28D9]/50 to-[#1E40AF]/50 blur-[64px] rounded-md opacity-60"></div>
                        </div>

                        {/* Container das imagens sobrepostas */}
                        <div className="relative w-[536px] h-[536px] flex justify-center items-center">
                            {/* Imagem 2 - mais alta */}
                            <img
                                src="https://placehold.co/480x560"
                                alt="Ilustração alta"
                                className="absolute bottom-0 left-50 right-0 mx-auto w-[384px] h-[536px] object-cover rounded-2xl shadow-lg shadow-black/25 transform z-10"
                            />
                            {/* Imagem 1 - mais achatada e larga */}
                            <img
                                src="https://placehold.co/536x400"
                                alt="Ilustração larga"
                                className="absolute top-40 left-0 right-15 mx-auto w-[512px] h-[342px] object-cover rounded-2xl shadow-lg shadow-black/25 transform z-20"
                            />
                        </div>
                    </div>

                </div>
            </section>
            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#0C2136] md:py-24" id="servicos">
                <div className="container w-full flex flex-col justify-center items-center">
                    {/* Título */}
                    <div className="text-center text-white space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                            Por que escolher nossas Landing Pages?
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Desenvolvemos páginas que combinam design atraente com estratégia de conversão comprovada
                        </p>
                    </div>

                    {/* GRID AJUSTADO */}
                    <div
                        className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-7xl mx-auto p-5"
                    >
                        {/* CARD 1 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full sm:max-w-sm h-[338px] flex flex-col space-around items-center text-center">
                            <CardHeader className="flex flex-col justify-center items-center w-full">
                                <div className="size-15 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#3B82F6]/90 shadow-[0_0_5px_#3B82F6] flex items-center justify-center mb-4">
                                    <Icon icon="solar:rocket-bold" className="size-8 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Performance e <span className="block">Velocidade</span></CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <p className="text-muted-foreground text-center">
                                    Carregamento ultrarrápido com pontuação máxima no Google PageSpeed. Cada milissegundo conta para conversão.
                                </p>
                            </CardContent>
                        </Card>

                        {/* CARD 2 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full sm:max-w-sm  h-[338px] flex flex-col space-around items-start text-center">
                            <CardHeader className="flex flex-col justify-center items-center w-full">
                                <div className="size-15  rounded-lg bg-gradient-to-r from-[#10B981] to-[#10B981]/90 shadow-[0_0_5px_#10B981] flex items-center justify-center mb-4">
                                    <Icon icon="solar:widget-4-bold" className="size-8 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">SEO Otimizado</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <p className="text-muted-foreground text-center">
                                    Estrutura semântica, meta tags otimizadas e schema markup para ranquear no topo das buscas.
                                </p>
                            </CardContent>
                        </Card>

                        {/* CARD 3 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full sm:max-w-sm  h-[338px] flex flex-col space-around items-center text-center">
                            <CardHeader className="flex flex-col justify-center items-center w-full">
                                <div className="size-15  rounded-lg bg-gradient-to-r from-[#6366F1] to-[#6366F1]/90 shadow-[0_0_5px_#6366F1] flex items-center justify-center mb-4">
                                    <Icon icon="solar:pie-chart-2-bold" className="size-8 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Design de <span className="block">Conversão</span></CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <p className="text-muted-foreground text-center">
                                    Layout estratégico com CTAs persuasivos, copywriting otimizado e experiência focada em resultados.
                                </p>
                            </CardContent>
                        </Card>

                        {/* CARD 4 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full sm:max-w-sm h-[338px] flex flex-col space-around items-center text-center">
                            <CardHeader className="flex flex-col justify-center items-center w-full">
                                <div className="size-15  rounded-lg bg-gradient-to-r from-[#F97316] to-[#F97316]/90 shadow-[0_0_5px_#F97316] flex items-center justify-center mb-4">
                                    <Icon icon="solar:settings-bold" className="size-8 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Integrações e<span className="block">Automações</span></CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <p className="text-muted-foreground text-center">
                                    Conectamos com CRM, e-mail marketing, analytics e ferramentas de automação para maximizar resultados.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>
            <section
                id="contato"
                className="py-16 md:py-20 w-full flex flex-col justify-center items-center bg-[#041526]"
            >
                <div className="container px-4">
                    <div className="mx-auto max-w-5xl">
                        {/* Título */}
                        <div className="text-center text-white space-y-4 mb-12">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                                Nosso Processo de Criação
                            </h2>
                            <p className="text-base sm:text-lg max-w-3xl mx-auto">
                                Metodologia comprovada em 4 etapas para entregar landing pages de alto desempenho
                            </p>
                        </div>

                        {/* Etapa 1 */}
                        <div className="flex flex-col sm:flex-row sm:items-start items-center gap-6 sm:gap-8 w-full mb-10 pb-10 border-b border-[#04A15E]">
                            <div className="flex-shrink-0 w-[70px] h-[64px] sm:w-[80px] md:w-[100px] rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/90 shadow-[0_0_5px_#3B82F6] flex items-center justify-center">
                                <Icon icon="solar:book-bold" className="size-8 text-white" />
                            </div>
                            <div className="flex flex-col text-center sm:text-left">
                                <div className="mb-2 bg-[#3B82F6]/10 text-[#3B82F6] font-semibold flex justify-center  items-center w-[90px] h-[28px] rounded-full mx-auto sm:mx-0">
                                    Etapa 1
                                </div>
                                <h2 className="text-white font-bold text-xl sm:text-2xl">
                                    Briefing e Estratégia
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                                    Entendemos seu negócio, público-alvo, objetivos e concorrência. Definimos KPIs,
                                    personas e estratégia de conversão personalizada para seu projeto.
                                </p>
                            </div>
                        </div>

                        {/* Etapa 2 */}
                        <div className="flex flex-col sm:flex-row sm:items-start items-center gap-6 sm:gap-8 w-full mb-10 pb-10 border-b border-[#04A15E]">
                            <div className="flex-shrink-0 w-[70px] h-[64px] sm:w-[80px] md:w-[100px] rounded-lg bg-gradient-to-r from-[#10B981] to-[#10B981]/90 shadow-[0_0_5px_#10B981] flex items-center justify-center">
                                <Icon icon="solar:pallete-2-bold" className="size-8 text-white" />
                            </div>
                            <div className="flex flex-col text-center sm:text-left">
                                <div className="mb-2 bg-[#10B981]/10 text-[#10B981] font-semibold flex justify-center items-center w-[90px] h-[28px] rounded-full mx-auto sm:mx-0">
                                    Etapa 2
                                </div>
                                <h2 className="text-white font-bold text-xl sm:text-2xl">
                                    Wireframe e Protótipo
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                                    Criamos wireframes detalhados e protótipos interativos no Figma. Validamos a estrutura,
                                    fluxo de conversão e design antes do desenvolvimento.
                                </p>
                            </div>
                        </div>

                        {/* Etapa 3 */}
                        <div className="flex flex-col sm:flex-row sm:items-start items-center gap-6 sm:gap-8 w-full mb-10 pb-10 border-b border-[#04A15E]">
                            <div className="flex-shrink-0 w-[70px] h-[64px] sm:w-[80px] md:w-[100px] rounded-lg bg-gradient-to-r from-[#6366F1] to-[#6366F1]/90 shadow-[0_0_5px_#6366F1] flex items-center justify-center">
                                <Icon icon="solar:code-bold" className="size-8 text-white" />
                            </div>
                            <div className="flex flex-col text-center sm:text-left">
                                <div className="mb-2 bg-[#6366F1]/10 text-[#6366F1] font-semibold flex justify-center items-center w-[90px] h-[28px] rounded-full mx-auto sm:mx-0">
                                    Etapa 3
                                </div>
                                <h2 className="text-white font-bold text-xl sm:text-2xl">
                                    Desenvolvimento e Testes
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                                    Codificamos com Next.js e Tailwind CSS, garantindo performance excepcional. Realizamos
                                    testes rigorosos de responsividade, velocidade e funcionalidade.
                                </p>
                            </div>
                        </div>

                        {/* Etapa 4 */}
                        <div className="flex flex-col sm:flex-row sm:items-start items-center gap-6 sm:gap-8 w-full">
                            <div className="flex-shrink-0 w-[70px] h-[64px] sm:w-[80px] md:w-[100px] rounded-lg bg-gradient-to-r from-[#F97316] to-[#F97316]/90 shadow-[0_0_5px_#F97316] flex items-center justify-center">
                                <Icon icon="solar:rocket-2-bold" className="size-8 text-white" />
                            </div>
                            <div className="flex flex-col text-center sm:text-left">
                                <div className="mb-2 bg-[#F97316]/10 text-[#F97316] font-semibold flex justify-center items-center w-[90px] h-[28px] rounded-full mx-auto sm:mx-0">
                                    Etapa 4
                                </div>
                                <h2 className="text-white font-bold text-xl sm:text-2xl">
                                    Entrega e Otimização
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                                    Fazemos deploy otimizado e configuramos analytics. Após o lançamento, monitoramos
                                    métricas e aplicamos melhorias contínuas baseadas em dados reais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Cases></Cases>
            <Clients></Clients> */}
            <section
                id="contato"
                className="w-full flex flex-col justify-center items-center bg-[#041526] py-16 sm:py-20 md:py-24"
            >
                <div className="container px-6 sm:px-10">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-col justify-center items-center text-center text-white space-y-6 mb-12">
                            {/* Título */}
                            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#04A15E] mb-4 leading-tight">
                                Pronto para criar sua landing page de
                                <span className="block">alta conversão?</span>
                            </h2>

                            {/* Subtítulo */}
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl font-light mx-auto text-[#ffffff]/80 leading-relaxed">
                                Transforme visitantes em clientes com uma landing page estratégica e profissional.
                                <span className="block">
                                    Agende uma reunião e descubra como podemos impulsionar seus resultados.
                                </span>
                            </p>

                            {/* Botão WhatsApp */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                <Button
                                    size="lg"
                                    className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] hover:scale-105 transition-transform duration-200 cursor-pointer"
                                >
                                    <a
                                        href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                                        className="flex gap-2 justify-center items-center"
                                    >
                                        <img src="/ic_baseline-whatsapp.svg" className="w-6 h-6" alt="WhatsApp" />
                                        Fale com a gente
                                    </a>
                                </Button>
                            </div>

                            {/* Informações adicionais */}
                            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 text-[#ffffff]/60 mt-6">
                                <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
                                    <Icon icon="material-symbols:circle" className="text-[#10B981] w-4 h-4" />
                                    <p>Resposta em 24h</p>
                                </div>
                                <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
                                    <Icon icon="material-symbols:circle" className="text-[#10B981] w-4 h-4" />
                                    <p>Consultoria</p>
                                </div>
                                <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
                                    <Icon icon="material-symbols:circle" className="text-[#10B981] w-4 h-4" />
                                    <p>Sem compromisso</p>
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
