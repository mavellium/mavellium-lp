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
                        <div className="flex items-center justify-center gap-2 mb-6 bg-[#20C997]/10 text-[#20C997] p-2 px-5 rounded-full">
                            <Icon icon="solar:phone-calling-bold" className="w-4 h-4" />
                            Estamos prontos para ajudar
                        </div>
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-nowrap">
                            Entre em
                            <span className="block">contato conosco</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl mt-6 text-white/90 max-w-2xl">
                            Fale com a Mavellium e descubra como transformar
                            <span className="block">sua ideia em um projeto digital de alto impacto.</span>
                        </p>

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
                    </div>

                    {/* Lado direito - Imagem (oculta no mobile) */}
                    <div className="relative hidden sm:hidden md:hidden lg:block md:flex flex-1 justify-center">
                        <div className="absolute inset-0 flex justify-start items-center">
                            <div className="w-[536px] h-[536px] bg-gradient-to-r from-[#36BE49]/20 to-[#1E772A]/20 blur-[64px] rounded-md opacity-64"></div>
                        </div>

                        <img
                            src="/contato-whats.png"
                            alt="Ilustração de serviços digitais"
                            className="relative z-10 max-w-[350px] md:max-w-[450px] lg:max-w-[536px] w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>
            </section>
            <section className="py-16 w-full flex flex-col justify-center items-center bg-[#0C2136] md:py-24" id="servicos">
                <div className="container w-full flex flex-col justify-center items-center">
                    {/* Título */}
                    <div className="text-center text-white space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                            Envie sua mensagem
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                        </p>
                    </div>
                    <div className="w-full max-w-xl mx-auto mt-5">
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();

                                const form = e.currentTarget;
                                const nome = (form.querySelector('input[name="nome"]') as HTMLInputElement).value;
                                const whatsapp = (form.querySelector('input[name="whatsapp"]') as HTMLInputElement).value;
                                const interesse = (form.querySelector('select[name="interesse"]') as HTMLSelectElement).value;

                                const res = await fetch("/api/sorteio", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ nome, whatsapp, interesse }),
                                });

                                if (res.ok) {
                                    alert("🎉 Cadastro realizado com sucesso! Boa sorte!");
                                    form.reset();
                                } else {
                                    alert("❌ Erro ao enviar os dados. Tente novamente.");
                                }
                            }}
                            className="flex flex-col gap-4 bg-[#010A12]/60 p-5 rounded-xl justify-center items-center" id="form"
                        >
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="nome"
                                    required
                                    placeholder="Qual seu nome completo?"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#04A15E] transition-all"
                                />
                                <span className="absolute left-52 top-3 text-[#FF4D4D]">*</span>
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Digite seu E-mail"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#04A15E] transition-all"
                                />
                                <span className="absolute left-36 top-3 text-[#FF4D4D]">*</span>
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="whatsapp"
                                    required
                                    placeholder="Digite seu número de WhatsApp"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#04A15E] transition-all"
                                />
                                <span className="absolute left-63 top-3 text-[#FF4D4D]">*</span>
                            </div>

                            <input
                                type="text"
                                name="empresa"
                                required
                                placeholder="Nome da sua Empresa"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#04A15E] transition-all"
                            />

                            <textarea
                                name="mensagem"
                                placeholder="Conte-nos sobre seu projeto..."
                                maxLength={500}
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#04A15E] transition-all resize-none"
                            />


                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <button
                                    type="submit"
                                    className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full px-6 py-4 text-base sm:text-lg rounded-lg text-white font-semibold hover:opacity-90 transition-all"
                                >
                                    ENTRAR EM CONTATO
                                </button>
                            </div>
                            <div className="text-white/50 text-[12px]">
                                <p>Ao enviar este formulário, você concorda com os termos do sorteio e autoriza a Mavellium a entrar em contato por WhatsApp.</p>
                            </div>
                        </form>


                        {/* CSS embutido para estilizar as opções */}
                        <style jsx>{`
                                select.custom-select option {
                                background-color: #0e2238; /* fundo escuro */
                                color: white; /* texto branco */
                                }
                                select.custom-select option:checked {
                                background-color: #04a15e; /* cor de destaque */
                                color: white;
                                }
                            `}</style>
                    </div>


                </div>
            </section>
            <section
                className="py-20 w-full flex flex-col justify-center items-center bg-[#030F1B] md:py-25"
                id="contato"
            >
                <div className="container px-6">
                    <div className="mx-auto max-w-5xl">
                        <div className="flex flex-col justify-center items-center text-center text-white space-y-4 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#04A15E] lg:text-nowrap mb-5">
                                Outras formas de contato
                            </h2>

                            <p className="text-lg max-w-2xl font-light mx-auto text-[#fff]/80">
                                Escolha a melhor forma de se conectar conosco.
                            </p>

                            {/* Cards de contato */}
                            <div className="flex flex-col lg:flex-row gap-6 mt-10 w-full justify-center items-center">
                                {/* Card - E-mail */}
                                {/* <div className="flex flex-col items-center justify-center w-full sm:w-[300px] md:w-[340px] lg:w-[352px] h-auto sm:h-[280px] bg-[#010A12] rounded-md border-2 border-[#04A15E] gap-4 p-6 text-center">
                                    <div className="w-14 h-14 rounded-lg bg-[#04A15E]/10 flex items-center justify-center">
                                        <Icon icon="solar:letter-bold" className="w-8 h-8 text-[#04A15E]" />
                                    </div>
                                    <h2 className="text-xl font-semibold">E-mail</h2>
                                    <p className="text-[#E5E5E5] font-thin">Envie uma mensagem para</p>
                                    <a
                                        href="mailto:contato@mavellium.com"
                                        target="_blank"
                                        className="text-sm text-[#04A15E] hover:text-white break-all"
                                    >
                                        contato@mavellium.com
                                    </a>
                                </div> */}

                                {/* Card - WhatsApp */}
                                <div className="flex flex-col items-center justify-center w-full sm:w-[300px] md:w-[340px] lg:w-[352px] h-auto sm:h-[280px] bg-[#010A12] rounded-md border-2 border-[#04A15E] gap-4 p-6 text-center">
                                    <div className="w-14 h-14 rounded-lg bg-[#04A15E]/10 flex items-center justify-center">
                                        <Icon icon="solar:phone-bold" className="w-8 h-8 text-[#04A15E]" />
                                    </div>
                                    <h2 className="text-xl font-semibold">WhatsApp</h2>
                                    <p className="text-[#E5E5E5] font-thin">Fale conosco agora</p>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                                        target="_blank"
                                        className="text-sm text-[#04A15E] hover:text-white"
                                    >
                                        Iniciar conversa
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="py-16 md:py-20 w-full flex flex-col justify-center items-center bg-[#041526]"
                id="contato"
            >
                <div className="container px-6">
                    <div className="mx-auto max-w-4xl text-center text-white">
                        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#04A15E] mb-6 sm:mb-8 leading-tight">
                            Pronto para iniciar seu projeto digital?
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl font-light mx-auto text-white/80 max-w-2xl mb-10">
                            Entre em contato agora e vamos transformar sua visão em realidade.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 w-full sm:w-auto">
                            <a
                                href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa."
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
                </div>
            </section>


            <Footer />
        </>
    );
}
