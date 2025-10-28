"use client";

import { Cases } from "@/components/Home/cases";
import { Footer } from "@/components/Home/footer";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Clients } from "@/components/Home/clients";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
                    <div className="flex-1 xl:max-w-3xl lg:max-w-full text-center xl:text-left space-y-1 flex flex-col items-center xl:items-start">
                        <div className="flex items-center justify-center gap-2 mb-6 bg-[#3B82F6]/10 text-[#04A15E] p-2 px-5 rounded-full">
                            <Icon icon="solar:buildings-2-bold" className="w-4 h-4" />
                            Sites Institucionais
                        </div>
                        <h1 className="font-heading text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-nowrap">
                            Sites Institucionais
                            <span className="block">que <span className="text-[#04A15E]">fortalecem</span></span>
                            <span className="block text-[#04A15E]">sua marca</span>
                        </h1>

                        <p className="text-base text-md sm:text-md md:text-md lg:text-xl mt-6 text-white/90 max-w-2xl">
                            Criamos sites sob medida, com design moderno,
                            <span className="block">performance otimizada e foco em resultados.</span>
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
                                    Quero o meu Site Institucional
                                </a>
                            </Button>
                        </div>
                        <div className="flex justify-center items-center gap-6 mt-5">
                            <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                <h2 className="text-2xl text-[#04A15E] font-bold">50+</h2>
                                <p>Sites entregues</p>
                            </div>
                            <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                <h2 className="text-2xl text-[#04A15E] font-bold">98%</h2>
                                <p>Clientes satisfeitos</p>
                            </div>
                            <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                <h2 className="text-2xl text-[#04A15E] font-bold">24/7</h2>
                                <p>Suporte disponível</p>
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
                                src="https://placehold.co/480x760"
                                alt="Ilustração alta"
                                className="absolute bottom-15 left-110 right-0 mx-auto w-[130px] h-[200px] object-cover rounded-2xl border-white border-15 shadow-lg shadow-black/25 transform z-20"
                            />
                            {/* Imagem 1 - mais achatada e larga */}
                            <img
                                src="https://placehold.co/536x400"
                                alt="Ilustração larga"
                                className="absolute top-20 left-0 right-15 mx-auto w-[528px] h-[368px] object-cover rounded-2xl border-white border-20 shadow-lg shadow-black/25 transform z-10"
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
                            Por que escolher nossos sites institucionais?
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Desenvolvemos sites que combinam design impecável com tecnologia de ponta para fortalecer sua presença digital.
                        </p>
                    </div>

                    {/* GRID AJUSTADO */}
                    <div
                        className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-7xl mx-auto"
                    >
                        {/* CARD 1 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full sm:max-w-sm h-[338px] flex flex-col space-around items-center text-center">
                            <CardHeader className="flex flex-col justify-center items-center w-full">
                                <div className="size-15 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#3B82F6]/90 shadow-[0_0_5px_#3B82F6] flex items-center justify-center mb-4">
                                    <Icon icon="solar:rocket-bold" className="size-8 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Design <span className="block">Personalizado</span></CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <p className="text-muted-foreground text-center">
                                    Interface única e alinhada com a identidade visual da sua marca.
                                </p>
                            </CardContent>
                        </Card>

                        {/* CARD 2 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[338px] flex flex-col space-around items-start text-center">
                            <CardHeader className="flex flex-col justify-center items-center w-full">
                                <div className="size-15  rounded-lg bg-gradient-to-r from-[#10B981] to-[#10B981]/90 shadow-[0_0_5px_#10B981] flex items-center justify-center mb-4">
                                    <Icon icon="solar:widget-4-bold" className="size-8 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Performance e <span className="block">SEO</span></CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <p className="text-muted-foreground text-center">
                                    Sites rápidos e otimizados para ranquear no Google.
                                </p>
                            </CardContent>
                        </Card>

                        {/* CARD 3 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[338px] flex flex-col space-around items-center text-center">
                            <CardHeader className="flex flex-col justify-center items-center w-full">
                                <div className="size-15  rounded-lg bg-gradient-to-r from-[#6366F1] to-[#6366F1]/90 shadow-[0_0_5px_#6366F1] flex items-center justify-center mb-4">
                                    <Icon icon="solar:pie-chart-2-bold" className="size-8 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Responsividade <span className="block">Total</span></CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <p className="text-muted-foreground text-center">
                                    Perfeito em qualquer dispositivo: desktop, tablet ou mobile.
                                </p>
                            </CardContent>
                        </Card>

                        {/* CARD 4 */}
                        <Card className="group hover:shadow-lg transition-shadow w-full max-w-sm h-[338px] flex flex-col space-around items-center text-center">
                            <CardHeader className="flex flex-col justify-center items-center w-full">
                                <div className="size-15  rounded-lg bg-gradient-to-r from-[#F97316] to-[#F97316]/90 shadow-[0_0_5px_#F97316] flex items-center justify-center mb-4">
                                    <Icon icon="solar:settings-bold" className="size-8 text-white" />
                                </div>
                                <CardTitle className="text-[20px]">Suporte e <span className="block">Manutenção</span></CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <p className="text-muted-foreground text-center">
                                    Acompanhamento contínuo e atualizações quando necessário.
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
                                Nosso Processo de Desenvolvimento
                            </h2>
                            <p className="text-base sm:text-lg max-w-3xl mx-auto">
                                Um processo estruturado e transparente para garantir o sucesso do seu projeto.
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
                                    Entendemos suas necessidades, objetivos e público-alvo para criar a estratégia ideal.
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
                                    Criamos wireframes detalhados e protótipos interativos no Figma. Validamos a estrutura, fluxo de conversão e design antes do desenvolvimento.
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
                                    Codificamos com Next.js e Tailwind CSS, garantindo performance excepcional. Realizamos testes rigorosos de responsividade, velocidade e funcionalidade.
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
                                    Fazemos deploy otimizado e configuramos analytics. Após o lançamento, monitoramos métricas e aplicamos melhorias contínuas baseadas em dados reais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 w-full flex flex-col justify-center items-center px-12 md:py-24 bg-[#0C2136]" id="cases">
                <div className="container">
                    <div className="text-center text-white space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                            Cases em Sucesso
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto">
                            Conheça alguns dos sites institucionais que desenvolvemos e os resultados alcançados.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full">
                                    Ver case completo
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
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full">
                                    Ver case completo
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
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full">
                                    Ver case completo
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
                                <Badge variant="secondary">A publicar nesta semana</Badge>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" disabled className="w-full">
                                    Em breve
                                    <Icon icon="solar:clock-circle-bold" className="size-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            className="shadow-lg shadow-[#3B82F6]/20 bg-[#04A15E] hover:bg-[#06BB6E]"
                        >
                            Ver todos os cases
                            <Icon icon="solar:arrow-right-bold" className="size-4" />
                        </Button>
                    </div>
                </div>
            </section>
            <section className="py-16 w-full p-5 flex flex-col justify-center items-center md:py-24 bg-[#030F1B]">
                <div className="container">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
                            O que nossos clientes dizem
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto text-white">
                            Feedback real de empresas que transformaram sua presença digital conosco.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar>
                                        <AvatarImage
                                            alt="Cliente"
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                        />
                                        <AvatarFallback>DC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">Doni</p>
                                        <p className="text-sm text-muted-foreground">Fundador, Tegbe</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    "A Mavellium entregou exatamente o que precisávamos. O resultado superou nossas
                                    expectativas."
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar>
                                        <AvatarImage
                                            alt="Cliente"
                                            src="https://randomuser.me/api/portraits/men/44.jpg"
                                        />
                                        <AvatarFallback>MC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">Marcos</p>
                                        <p className="text-sm text-muted-foreground">Diretor, FAIP</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    "Profissionalismo e qualidade em cada detalhe. Recomendo para qualquer projeto
                                    digital."
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar>
                                        <AvatarImage
                                            alt="Cliente"
                                            src="https://randomuser.me/api/portraits/men/67.jpg"
                                        />
                                        <AvatarFallback>RS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">Roberto Silva</p>
                                        <p className="text-sm text-muted-foreground">Fundador, TegPro</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    "Parceria de longo prazo. Eles entendem nosso negócio e entregam soluções que
                                    funcionam."
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section
                id="contato"
                className="w-full flex flex-col justify-center items-center bg-[#041526] py-16 sm:py-20 md:py-24"
            >
                <div className="container px-6 sm:px-10">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-col justify-center items-center text-center text-white space-y-6 mb-12">
                            {/* Título */}
                            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#04A15E] mb-4 leading-tight">
                                Pronto para criar seu site institucional e
                                <span className="block">impulsionar sua marca?</span>
                            </h2>

                            {/* Subtítulo */}
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl font-light mx-auto text-[#ffffff]/80 leading-relaxed">
                                Transforme sua presença digital com um site profissional que gera resultados reais para o seu negócio.
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
                            <div className="flex justify-center items-center gap-6 mt-5">
                                <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                    <h2 className="text-2xl text-white font-bold">100%</h2>
                                    <p>Satisfação garantida</p>
                                </div>
                                <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                    <h2 className="text-2xl text-white font-bold">48h</h2>
                                    <p>Resposta inicial</p>
                                </div>
                                <div className="text-[14px] text-[#E5E5E5] flex flex-col items-center">
                                    <div className="flex flex-row items-center justify-center">
                                        <h2 className="text-2xl text-white font-bold">5</h2>
                                        <Icon icon="material-symbols:star" className="w-6 h-6" />
                                    </div>
                                    <p>Avaliação média</p>
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
