"use client";

import { Footer } from "@/components/Home/Footer";
import { Header } from "@/components/Home/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Badge } from "lucide-react";

export default function Cases() {
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
                        <a
                            href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto cursor-pointer"
                        >
                            <Button
                                size="lg"
                                className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full sm:w-auto flex gap-2 justify-center items-center cursor-pointer transition-all hover:scale-110"
                            >
                                <img src="/ic_baseline-whatsapp.svg" alt="WhatsApp" className="w-6" />
                                Fale com a gente
                            </Button>
                        </a>
                    </div>


                </div>
            </section>

            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#0C2136] px-5 md:py-24">
                <div className="container w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl justify-center items-center lg:items-start">
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] border-[#04A15E] w-full h-auto">
                            <CardContent>
                                <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-20">

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
                                        <div className="flex flex-wrap sm:flex-row justify-center items-center md:justify-center lg:justify-between gap-10 mt-8">
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

            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#0C2136] px-5 md:py-24">
                <div className="container w-full flex flex-col justify-center items-center">
                    <h2 className="text-4xl text-[#04A15E] flex text-center font-bold mb-10">O que precisava ser resolvido</h2>
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

            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#041526] px-5 md:py-24">
                <div className="container w-full flex flex-col justify-center items-center">
                    <h2 className="text-4xl text-[#04A15E] flex text-center font-bold mb-5">Como resolvemos o desafio</h2>
                    <p className="flex-col text-xl text-[#6C757D] flex text-center mb-10">
                        Desenvolvemos uma solução completa e personalizada, utilizando as melhores
                        <span className="block">tecnologias e práticas do mercado</span>
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl justify-center items-start pt-10">
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] border-[#04A15E] w-full h-auto transition-all hover:scale-105">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-20">
                                    {/* Coluna Esquerda - Texto */}
                                    <div className="flex-1 flex flex-col text-center items-center lg:items-start lg:text-left">
                                        <div className="size-12 rounded-lg bg-[#007BFF]/10 flex items-center justify-center mb-5">
                                            <Icon icon="solar:monitor-bold" className="size-6 text-[#007BFF]" />
                                        </div>
                                        <CardTitle className="text-2xl sm:text-3xl md:text-[25px] text-[#04A15E] mb-2 font-bold">
                                            Landing Page Institucional
                                        </CardTitle>
                                        <p className="text-white text-md font-thin sm:text-base leading-relaxed">
                                            Design moderno e responsivo com foco em conversão, adaptado para
                                            todos os dispositivos e otimizado para a experiência do usuário
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Repete os Cards abaixo */}
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] border-[#04A15E] w-full h-auto transition-all hover:scale-105">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-20">
                                    <div className="flex-1 flex flex-col text-center items-center lg:items-start lg:text-left">
                                        <div className="size-12 rounded-lg bg-[#20C997]/10 flex items-center justify-center mb-5">
                                            <Icon icon="solar:widget-bold" className="size-6 text-[#20C997]" />
                                        </div>
                                        <CardTitle className="text-2xl sm:text-3xl md:text-[25px] text-[#04A15E] mb-2 font-bold">
                                            Componentização
                                        </CardTitle>
                                        <p className="text-white text-md font-thin sm:text-base leading-relaxed">
                                            Arquitetura modular com componentes reutilizáveis em React
                                            e TypeScript, garantindo manutenibilidade e escalabilidade do código
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] border-[#04A15E] w-full h-auto transition-all hover:scale-105">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-20">
                                    <div className="flex-1 flex flex-col text-center items-center lg:items-start lg:text-left">
                                        <div className="size-12 rounded-lg bg-[#6C757D]/10 flex items-center justify-center mb-5">
                                            <Icon icon="solar:rocket-bold" className="size-6 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl sm:text-3xl md:text-[25px] text-[#04A15E] mb-2 font-bold">
                                            SEO e Performance
                                        </CardTitle>
                                        <p className="text-white text-md font-thin sm:text-base leading-relaxed">
                                            Otimização técnica completa com meta tags, schema markup,
                                            lazy loading e compressão de assets para máxima velocidade
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] border-[#04A15E] w-full h-auto transition-all hover:scale-105">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-20">
                                    <div className="flex-1 flex flex-col text-center items-center lg:items-start lg:text-left">
                                        <div className="size-12 rounded-lg bg-[#FFC107]/10 flex items-center justify-center mb-5">
                                            <Icon icon="solar:link-circle-bold" className="size-6 text-[#FFC107]" />
                                        </div>
                                        <CardTitle className="text-2xl sm:text-3xl md:text-[25px] text-[#04A15E] mb-2 font-bold">
                                            Integração com Ferramentas
                                        </CardTitle>
                                        <p className="text-white text-md font-thin sm:text-base leading-relaxed">
                                            Conexão com Google Analytics, Meta Pixel,
                                            WhatsApp Business e CRM para tracking completo e
                                            automação de marketing
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section >

            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#030F1B] px-5 md:py-24">
                <div className="container w-full max-w-7xl flex flex-col justify-center items-center">
                    <h2 className="text-4xl text-[#04A15E] flex text-center font-bold mb-5">Números que falam por si</h2>
                    <p className="flex-col text-xl text-[#6C757D] flex text-center mb-10">
                        Métricas reais comprovando o sucesso do projeto
                    </p>
                    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl justify-center items-start pt-10">
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] items-center justify-center flex border-2 border-[#04A15E] w-full h-[250px]">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
                                    {/* Coluna Esquerda - Texto */}
                                    <div className="flex-1 flex flex-col text-center items-center">
                                        <div className="size-15 rounded-full bg-[#20C997]/10 flex items-center justify-center mb-5">
                                            <Icon icon="solar:graph-up-bold" className="size-8 text-[#20C997]" />
                                        </div>
                                        <CardTitle className="text-2xl sm:text-3xl md:text-[50px] text-[#20C997] mb-2 font-bold">
                                            +47%
                                        </CardTitle>
                                        <p className="text-white text-md font-thin leading-relaxed">
                                            Aumento na taxa de conversão em
                                            <span className="block">apenas 2 meses</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] items-center justify-center border-2 border-[#007BFF] w-full h-[250px]">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
                                    {/* Coluna Esquerda - Texto */}
                                    <div className="flex-1 flex flex-col text-center items-center">
                                        <div className="size-15 rounded-full bg-[#007BFF]/10 flex items-center justify-center mb-5">
                                            <Icon icon="solar:bolt-bold" className="size-8 text-[#007BFF]" />
                                        </div>
                                        <CardTitle className="text-2xl sm:text-3xl md:text-[50px] text-[#007BFF] mb-2 font-bold">
                                            1.4s
                                        </CardTitle>
                                        <p className="text-white text-md font-thin leading-relaxed">
                                            Tempo médio de carregamento da
                                            <span className="block">página</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="group hover:shadow-lg transition-shadow bg-[#010910] items-center justify-center border-2 border-[#FFC107] w-full h-[250px]">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
                                    {/* Coluna Esquerda - Texto */}
                                    <div className="flex-1 flex flex-col text-center items-center">
                                        <div className="size-15 rounded-full bg-[#FFC107]/10 flex items-center justify-center mb-5">
                                            <Icon icon="solar:star-bold" className="size-8 text-[#FFC107]" />
                                        </div>
                                        <CardTitle className="text-2xl sm:text-3xl md:text-[50px] text-[#FFC107] mb-2 font-bold">
                                            98
                                        </CardTitle>
                                        <p className="text-white text-md font-thin leading-relaxed">
                                            Score de performance no Google
                                            <span className="block">PageSpeed Insights</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mt-16">
                        {/* Widget 1 */}
                        <div className="bg-[#010910] border border-[#04A15E] rounded-xl p-6 text-white w-full">
                            {/* Título */}
                            <div className="flex items-center gap-2 mb-4">
                                <Icon icon="solar:user-bold" className="text-white w-5 h-5" />
                                <h3 className="text-lg font-semibold">Engajamento</h3>
                            </div>

                            {/* Linha 1 */}
                            <div className="mb-3">
                                <div className="flex justify-between text-sm mb-1 text-[#BFC9CA]">
                                    <span>Taxa de Rejeição</span>
                                    <span className="text-white font-medium">-32%</span>
                                </div>
                                <div className="w-full bg-[#0C2136] rounded-full h-2">
                                    <div
                                        className="bg-[#04A15E] h-2 rounded-full transition-all duration-500"
                                        style={{ width: "68%" }}
                                    />
                                </div>
                            </div>

                            {/* Linha 2 */}
                            <div className="mb-3">
                                <div className="flex justify-between text-sm mb-1 text-[#BFC9CA]">
                                    <span>Tempo de Sessão</span>
                                    <span className="text-white font-medium">+58%</span>
                                </div>
                                <div className="w-full bg-[#0C2136] rounded-full h-2">
                                    <div
                                        className="bg-[#04A15E] h-2 rounded-full transition-all duration-500"
                                        style={{ width: "85%" }}
                                    />
                                </div>
                            </div>

                            {/* Linha 3 */}
                            <div>
                                <div className="flex justify-between text-sm mb-1 text-[#BFC9CA]">
                                    <span>Páginas por Sessão</span>
                                    <span className="text-white font-medium">+41%</span>
                                </div>
                                <div className="w-full bg-[#0C2136] rounded-full h-2">
                                    <div
                                        className="bg-[#04A15E] h-2 rounded-full transition-all duration-500"
                                        style={{ width: "72%" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Widget 2 */}
                        <div className="bg-[#010910] border border-[#04A15E] rounded-xl p-6 text-white w-full">
                            {/* Título */}
                            <div className="flex items-center gap-2 mb-4">
                                <Icon icon="solar:magnifer-bold" className="text-white w-5 h-5" />
                                <h3 className="text-lg font-semibold">SEO e Tráfego</h3>
                            </div>

                            {/* Linha 1 */}
                            <div className="mb-3">
                                <div className="flex justify-between text-sm mb-1 text-[#BFC9CA]">
                                    <span>Tráfego Orgânico</span>
                                    <span className="ttext-white font-medium">+63%</span>
                                </div>
                                <div className="w-full bg-[#0C2136] rounded-full h-2">
                                    <div
                                        className="bg-[#04A15E] h-2 rounded-full transition-all duration-500"
                                        style={{ width: "90%" }}
                                    />
                                </div>
                            </div>

                            {/* Linha 2 */}
                            <div className="mb-3">
                                <div className="flex justify-between text-sm mb-1 text-[#BFC9CA]">
                                    <span>Keywords Rankeadas</span>
                                    <span className="ttext-white font-medium">+125%</span>
                                </div>
                                <div className="w-full bg-[#0C2136] rounded-full h-2">
                                    <div
                                        className="bg-[#04A15E] h-2 rounded-full transition-all duration-500"
                                        style={{ width: "95%" }}
                                    />
                                </div>
                            </div>

                            {/* Linha 3 */}
                            <div>
                                <div className="flex justify-between text-sm mb-1 text-[#BFC9CA]">
                                    <span>Posição Média Google</span>
                                    <span className="text-white font-medium">+8 posições</span>
                                </div>
                                <div className="w-full bg-[#0C2136] rounded-full h-2">
                                    <div
                                        className="bg-[#04A15E] h-2 rounded-full transition-all duration-500"
                                        style={{ width: "82%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="py-16 w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 bg-[#010B15] md:py-24">
                <div className="container w-full">
                    {/* Título */}
                    <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto px-2">
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#04A15E]">
                            O que o cliente disse
                        </h2>
                    </div>

                    {/* Card de depoimento */}
                    <div className="flex justify-center items-center w-full">
                        <Card className="bg-[#0C2136] border border-[#04A15E] rounded-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] shadow-md hover:shadow-lg transition-shadow p-6 sm:p-8 lg:p-10 text-center flex flex-col justify-between">

                            <CardContent className="p-0">
                                <p className="text-[#E5E5E5] text-lg sm:text-xl md:text-lg lg:text-2xl font-medium leading-relaxed">
                                    "A Mavellium entregou exatamente o que precisávamos: design limpo,
                                    performance excepcional e resultados mensuráveis. O projeto superou
                                    nossas expectativas em todos os aspectos. Nossa conversão aumentou
                                    significativamente e recebemos elogios constantes sobre o site."
                                </p>
                            </CardContent>

                            <CardHeader className="p-0 mt-8 flex justify-center items-center">
                                <div className="flex flex-row items-center gap-4">
                                    <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
                                        <AvatarImage
                                            alt="Cliente"
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                        />
                                        <AvatarFallback>DC</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <p className="font-semibold text-[#04A15E] text-base sm:text-lg">
                                            Doni
                                        </p>
                                        <p className="text-sm text-[#E5E5E5]">Fundador, Tegbe</p>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center bg-[#041526] px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
                <div className="container w-full">
                    <div className="mx-auto max-w-5xl">
                        {/* Bloco principal */}
                        <div className="flex flex-col justify-center items-center text-center text-white space-y-6 sm:space-y-8 mb-12">

                            {/* Título */}
                            <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#04A15E] leading-tight px-2">
                                Quer que seu projeto seja nosso
                                <span className="block">próximo case de sucesso?</span>
                            </h2>

                            {/* Subtítulo */}
                            <p className="text-md sm:text-base md:text-lg lg:text-xl max-w-3xl font-light mx-auto text-[#ffffff]/80 leading-relaxed px-4">
                                Vamos conversar sobre como podemos transformar seu negócio com design
                                <span className="block">
                                    moderno, performance excepcional e resultados reais.
                                </span>
                            </p>

                            {/* Botão WhatsApp */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                <a
                                    href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] hover:scale-105 transition-transform duration-200 cursor-pointer flex gap-2 justify-center items-center"
                                    >
                                        <img src="/ic_baseline-whatsapp.svg" className="w-6 h-6" alt="WhatsApp" />
                                        Fale com a gente
                                    </Button>
                                </a>
                            </div>

                            {/* Informações adicionais */}
                            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 text-[#ffffff]/60 mt-6">
                                <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
                                    <Icon icon="material-symbols:circle" className="text-[#10B981] w-4 h-4" />
                                    <p>Resposta em 24h</p>
                                </div>
                                <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
                                    <Icon icon="material-symbols:circle" className="text-[#10B981] w-4 h-4" />
                                    <p>Consultoria gratuita</p>
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
