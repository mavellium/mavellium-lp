export function Headline() {
  return (
    <section
      className="relative w-full flex flex-col h-screen justify-end items-center overflow-hidden rounded-b-[50px] py-20 md:py-32">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="headline-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Efeito de escurecido só embaixo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Conteúdo */}
      <div className="container relative z-10">
        <div className="lg:mx-0 mx-auto lg:max-w-5xl md:max-w-4xl text-white text-center lg:text-start space-y-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight">
            Transformamos presença digital em performance real
          </h1>
        </div>
      </div>
    </section>
  );
}
