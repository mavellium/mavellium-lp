import { Button } from "@/components/ui/button";

export function About() {
    return (
        <section className="py-16 w-full flex flex-col justify-center items-center md:py-24 bg-[#041526]" id="sobre">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
            Mais do que código — criamos sites e experiências digitais que impulsionam negócios.
            </h2>
            <p className="text-lg text-white">
            Na Mavellium unimos design, tecnologia e estratégia para desenvolver sites institucionais, landing pages e sistemas sob medida que geram resultado. <br></br><br></br>
            Nosso foco é criar soluções digitais personalizadas que melhoram sua presença online, fortalecem sua marca e aumentam suas conversões.
            </p>
            <a href="/Servicos">
            <Button variant="outline" className="mt-5 bg-[#041526] h-auto text-white cursor-pointer">
            Descubra o que podemos criar para sua empresa
            </Button>
            </a>
          </div>
        </div>
      </section>
    );
}