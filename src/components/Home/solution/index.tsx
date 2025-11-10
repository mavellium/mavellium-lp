import { Button } from "@/components/ui/button";

export function Solution() {
  return (
    <>
      {/* --- SEÇÃO 1 --- */}
      <section
        className="py-12 sm:py-16 md:py-14 w-full flex justify-center items-center bg-white"
        id="servicos"
      >
        <div className="container flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-30 px-6">
          {/* Texto */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-md space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 sm:mb-6">
              Entendemos seu negócio, público e objetivos.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-black font-medium mb-6 sm:mb-10 leading-relaxed">
              Nossa análise aprofundada garante que cada landing page ou site seja um ímã de conversões para seu público-alvo.
            </p>

            <a
              href="/Servicos"
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <Button
                size="lg"
                className="bg-[#006C49] text-white sm:text-lg md:text-xl cursor-pointer rounded-full hover:bg-[#009e6b] transition"
              >
                Veja Nossos Estudos de Caso
              </Button>
            </a>
          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center">
            <img
              src="/lupa-solution.png"
              alt="Lupa ilustrativa"
              className="w-60 sm:w-52 md:w-200 lg:w-80 h-auto"
            />
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2 --- */}
      <section className="py-12 sm:py-16 md:py-14 w-full flex justify-center items-center bg-white">
        <div className="container flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10 md:gap-10 px-6">
          {/* Texto */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-md space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 sm:mb-6">
              Criamos interfaces que encantam e conectam pessoas.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-black font-medium mb-6 sm:mb-10 leading-relaxed">
              Nosso design une estética, clareza e{" "}
              <span className="block">
                performance, sempre centrado no usuário.
              </span>
            </p>

            <a
              href="/Servicos"
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <Button
                size="lg"
                className="bg-[#006C49] text-white sm:text-lg md:text-xl cursor-pointer rounded-full hover:bg-[#009e6b] transition"
              >
                Veja nosso portfólio
              </Button>
            </a>
          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center">
            <img
              src="/interface-solution.png"
              alt="Interface ilustrativa"
              className="w-100 sm:w-100 md:w-200 lg:w-[580px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3 --- */}
      <section
        className="py-12 sm:py-16 md:py-14 w-full flex justify-center items-center bg-white"
        id="servicos"
      >
        <div className="container flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-10 px-6">
          {/* Texto */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-md space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 sm:mb-6">
              Transformamos design em código limpo e eficiente.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-black font-medium mb-6 sm:mb-10 leading-relaxed">
             Usamos tecnologias modernas para entregar sites rápidos, seguros e otimizados.
            </p>

            <a
              href="/Servicos"
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <Button
                size="lg"
                className="bg-[#006C49] text-white sm:text-lg md:text-xl cursor-pointer rounded-full hover:bg-[#009e6b] transition"
              >
                Conheça Nossos Casos de Sucesso
              </Button>
            </a>
          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center">
            <img
              src="/design-solution.png"
              alt="Lupa ilustrativa"
              className="w-100 sm:w-100 md:w-200 lg:w-150 h-auto"
            />
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 4 --- */}
      <section className="py-12 sm:py-16 md:py-14 w-full flex justify-center items-center bg-white">
        <div className="container flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10 md:gap-20 px-6">
          {/* Texto */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-md space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 sm:mb-6">
              Refinamos para máxima performance e conversão.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-black font-medium mb-6 sm:mb-10 leading-relaxed">
              Analisamos dados, atraímos clientes prontos para comprar através de SEO e performance para gerar mais conversões.
            </p>

            <a
              href="/Servicos"
              className="flex justify-center md:justify-start items-center gap-2"
            >
              <Button
                size="lg"
                className="bg-[#006C49] text-white sm:text-lg md:text-xl cursor-pointer rounded-full hover:bg-[#009e6b] transition"
              >
                Veja Como Otimizamos Resultados
              </Button>
            </a>
          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center">
            <img
              src="/performace-solution.png"
              alt="Interface ilustrativa"
              className="w-100 sm:w-100 md:w-200 lg:w-[580px] h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
