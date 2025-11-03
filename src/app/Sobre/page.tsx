"use client";

import { Footer } from "@/components/Home/Footer";
import { Header } from "@/components/Home/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";

export default function Servicos() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <section className="relative w-full flex flex-col md:flex-row h-auto md:h-screen justify-center md:justify-end items-center overflow-hidden bg-[#091725] py-16 px-6 md:px-10 text-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
                    {/* Texto */}
                    <div className="flex-1 max-w-3xl text-center md:text-left space-y-6 flex flex-col flex-nowrap items-center md:items-center lg:items-start">
                        <h1 className="font-heading text-5xl sm:text-6xl md:text-6xl lg:text-6xl text-[#04A15E] font-semibold leading-tight tracking-tight">
                            Quem somos
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl md:text-center lg:text-start flex-nowrap text-white/90 max-w-2xl">
                            Transformamos ideias em experiências digitais de alto impacto,
                            <span className="block">unindo design, tecnologia e estratégia.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
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

                            {/* <Button
                                size="lg"
                                variant="outline"
                                className="bg-[#fff]/20 border-white/30 text-white w-full sm:w-auto"
                            >
                                <Icon icon="solar:gallery-bold" className="size-5" />
                                Ver Cases
                            </Button> */}
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="relative hidden lg:flex flex-1 justify-center">
                        <div className="absolute inset-0 flex justify-start items-center">
                            <div className="w-[736px] h-[536px] bg-gradient-to-r from-[#04A15E]/50 to-[#04A15E]/50 blur-[64px] rounded-md opacity-64"></div>
                        </div>

                        <img
                            src="/sobre-img.png"
                            alt="Ilustração de serviços digitais"
                            className="relative z-10 max-w-[350px] md:max-w-[450px] lg:max-w-[636px] w-full h-auto rounded-2xl shadow-lg shadow-black/25"
                        />
                    </div>
                </div>
            </section>

            {/* HISTÓRIA */}
            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#0C2136] px-4 md:px-10">
                <div className="container flex flex-col justify-center items-center">
                    <div className="text-center text-white space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                            Nossa História
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto text-white/80">
                            Uma jornada de inovação e excelência digital
                        </p>
                    </div>

                    <div className="max-w-[900px] w-full flex flex-col items-center">
                        {/* Texto */}
                        <div className="bg-[#051321] text-white rounded-lg shadow-lg p-6 sm:p-10 text-sm sm:text-base leading-relaxed">
                            <p className="mb-7">
                                A Mavellium nasceu da visão de três desenvolvedores apaixonados por tecnologia, design e resultados.
                                <span className="block">
                                    Criada há apenas cinco meses, nossa empresa já vem se destacando por entregar soluções digitais que combinam estética moderna, performance e conversão real.
                                </span>
                            </p>
                            <p className="mb-7">
                                Desde o início, nossa missão é clara: ajudar marcas a crescerem através de experiências digitais inteligentes, unindo tecnologia e estratégia.
                            </p>
                            <p className="mb-7">
                                Mesmo jovem, a Mavellium já tem um portfólio com grandes empresas do mercado nacional, que confiam em nosso trabalho para criar landing pages de alta conversão, sites institucionais profissionais e sistemas sob medida.
                            </p>
                             <p className="mb-7">
                                Nosso diferencial está na forma como pensamos cada projeto — com inovação, transparência e excelência técnica em cada etapa do processo.
                            </p>
                            <p className="mb-7">
                                Na Mavellium, acreditamos que tecnologia só tem valor quando gera resultado.
                                <span className="block">
                                    E é exatamente isso que entregamos: soluções digitais que transformam negócios.
                                </span>
                            </p>
                        </div>

                        {/* Estatísticas */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 w-full max-w-4xl">
                            {[
                                { numero: "6+", texto: "Projetos entregues" },
                                { numero: "3+", texto: "Clientes Satisfeitos" },
                                { numero: "5+", texto: "Meses de Experiência" },
                                { numero: "100%", texto: "Taxa de Satisfação" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col justify-center items-center text-sm text-[#E5E5E5] bg-[#051321] rounded-lg min-h-[140px] p-6 transition-transform duration-300 hover:scale-105"
                                >
                                    <h2 className="text-3xl text-[#04A15E] font-bold mb-2">{item.numero}</h2>
                                    <p className="text-center">{item.texto}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSÃO, VISÃO E VALORES */}
            <section className="py-20 w-full flex flex-col justify-center items-center bg-[#041526] px-4 md:px-10">
                <div className="container max-w-6xl text-center text-white">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E] mb-5">
                        Missão, Visão e Valores
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-[#fff]/80">
                        Os princípios que guiam cada decisão e projeto na Mavellium
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3 gap-6 mt-10">
                        {[
                            {
                                icon: "solar:box-bold",
                                titulo: "Missão",
                                texto: [
                                    "Entregar soluções digitais de alta performance que unem tecnologia, design e estratégia para gerar resultados reais e sustentáveis.",
                                    "Criamos landing pages, sites institucionais e sistemas personalizados que impulsionam marcas e ampliam o impacto digital de nossos clientes."
                                ],
                            },
                            {
                                icon: "solar:telescope-bold",
                                titulo: "Visão",
                                texto: [
                                    "Ser referência nacional em desenvolvimento de soluções digitais, criando landing pages, sites institucionais e sistemas personalizados que unam tecnologia, design e performance para gerar resultados reais e sustentáveis aos nossos clientes.",
                                ],
                            },
                            {
                                icon: "solar:star-bold",
                                titulo: "Valores",
                                valores: [
                                    "Inovação",
                                    "Transparência",
                                    "Excelência",
                                    "Foco em resultado",
                                    "Ética",
                                ],
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center sm:items-start justify-start bg-[#010A12] rounded-xl gap-4 px-6 py-10 w-full h-[380px] transition-transform duration-300 hover:scale-105"
                            >
                                <div className="w-14 h-14 rounded-lg bg-[#04A15E]/10 flex items-center justify-center">
                                    <Icon icon={card.icon} className="w-8 h-8 text-[#04A15E]" />
                                </div>
                                <h2 className="text-2xl font-semibold text-start text-[#04A15E]">
                                    {card.titulo}
                                </h2>

                                {/* Texto comum (primeiros dois cards) */}
                                {card.texto && (
                                    <p className="text-base text-white leading-relaxed text-center sm:text-left">
                                        {card.texto.map((linha, j) => (
                                            <span key={j} className="block">
                                                {linha}
                                            </span>
                                        ))}
                                    </p>
                                )}

                                {/* Lista de valores (último card) */}
                                {card.valores && (
                                    <ul className="flex flex-col gap-2 text-base text-white text-center sm:text-left w-full mt-2">
                                        {card.valores.map((valor, j) => (
                                            <li
                                                key={j}
                                                className="flex items-center gap-2 justify-center sm:justify-start"
                                            >
                                                <Icon
                                                    icon="solar:check-circle-bold"
                                                    className="w-5 h-5 text-[#04A15E] flex-shrink-0"
                                                />
                                                <span>{valor}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-20 w-full flex flex-col justify-center items-center bg-[#0C2136] px-4 md:px-10">
                <div className="container max-w-6xl text-center text-white">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E] mb-5">
                        Nossos Diferenciais
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-[#fff]/80">
                        O que nos torna únicos no mercado de desenvolvimento digital
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {[
                            {
                                icon: "solar:rocket-2-bold",
                                titulo: "Performance & SEO",
                                texto: ["Sites otimizados para", "velocidade máxima e ranking", "nos mecanismos de busca."],
                            },
                            {
                                icon: "solar:pallete-2-bold",
                                titulo: "Design Orientado à Conversão",
                                texto: ["Interfaces pensadas para", "gerar resultados reais e", "maximizar conversões."],
                            },
                            {
                                icon: "solar:chart-2-bold",
                                titulo: "Metodologia Ágil",
                                texto: [
                                    "Entregas rápidas, iterativas",
                                    "com feedback constante",
                                    "do cliente.",
                                ],
                            },
                            {
                                icon: "solar:chat-round-line-bold",
                                titulo: "Suporte Contínuo",
                                texto: [
                                    "Acompanhamento dedicado",
                                    "antes, durante e após o",
                                    "lançamento do projeto.",
                                ],
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center sm:items-start justify-start bg-[#010A12] rounded-xl gap-4 px-6 py-10 w-full transition-transform duration-300 hover:scale-105"
                            >
                                <div className="w-14 h-14 rounded-lg bg-[#04A15E]/10 flex items-center justify-center">
                                    <Icon icon={card.icon} className="w-8 h-8 text-[#04A15E]" />
                                </div>
                                <h2 className="text-xl font-semibold text-start text-[#04A15E]">{card.titulo}</h2>
                                <p className="text-base text-white leading-relaxed text-center sm:text-left">
                                    {card.texto.map((linha, j) => (
                                        <span key={j} className="block">
                                            {linha}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <section className="py-16 w-full flex flex-col justify-center items-center md:py-24 bg-[#041526]">
                <div className="container">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                            Nosso Time
                        </h2>
                        <p className="text-white text-xl">
                            Conheça os profissionais que transformam ideias em realidade digital
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6 p-10 mt-10">
                        {[
                            {
                                icon: "https://randomuser.me/api/portraits/men/32.jpg",
                                titulo: "Márcio Piva Junior",
                                sub: "Fundador",
                                texto: ["Especialista em estratégia digital e desenvolvimento de negócios, com 10+ anos de experiência."],
                            },
                            {
                                icon: "https://randomuser.me/api/portraits/men/33.jpg",
                                titulo: "Vinícius Tavares Mota",
                                sub: "Fundador",
                                texto: ["Desenvolvedor Full Stack com 4 anos de experiência em .NET e Angular. Fundador e sócio comercial da Mavellium, atua na prospecção de clientes e gestão estratégica, conectando tecnologia e resultados reais."]
                            },
                            {
                                icon: "Luan.png",
                                titulo: "Luan dos Santos",
                                sub: "Fundador",
                                texto: ["Especialista em estratégia digital e desenvolvimento de negócios, com 10+ anos de experiência."],
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-start bg-[#010A12] rounded-xl gap-4 px-6 py-10 w-full sm:w-[300px] transition-transform duration-300 hover:scale-105"
                            >
                                {/* Foto redonda */}
                                {/* <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#04A15E]/40 shadow-md flex items-center justify-center bg-[#041526]">
                                    <img src={card.icon} alt={card.titulo} className="w-full h-full object-cover" />
                                </div>

                                <h2 className="text-2xl font-semibold text-center text-[#04A15E] mt-4">
                                    {card.titulo}
                                </h2>
                                <h3 className="text-lg text-center text-white/90">{card.sub}</h3>

                                {card.texto && (
                                    <p className="text-base text-white/80 leading-relaxed text-center mt-2">
                                        {card.texto.map((linha, j) => (
                                            <span key={j} className="block">
                                                {linha}
                                            </span>
                                        ))}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            <section className="py-16 w-full flex flex-col justify-center items-center md:py-24 bg-[#030F1B]">
                <div className="container">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                            Empresas que confiam na Mavellium
                        </h2>
                        <p className="text-white text-xl">
                            Parcerias estratégicas que impulsionam resultados digitais
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10">
                        {[["/tegbe.svg", "TegBe"], ["/faip.svg", "Faip"], ["/sorriso.svg", "Instituto do Sorriso"]].map(
                            ([src, alt], i) => (
                                <div
                                    key={i}
                                    className="bg-[#010910] p-6 sm:p-10 rounded-lg flex items-center justify-center flex-1 min-w-[350px] max-w-[350px] h-32 sm:h-60"
                                >
                                    <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            <section className="py-20 w-full flex flex-col justify-center items-center bg-[#041526] md:py-25" id="contato">
                <div className="container">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-col justify-center items-center text-center text-white space-y-4 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#04A15E] lg:text-nowrap mb-10">
                                Pronto para transformar sua ideia em
                                <span className="block">um produto digital de alta performace?</span>
                            </h2>
                            <p className="text-lg max-w-2xl font-light mx-auto text-[#fff]/80">
                                Entre em contato conosco e descubra como podemos ajudar seu negócio a
                                <span className="block">alcançar resultados extraordinários no ambiente digital.</span>
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
