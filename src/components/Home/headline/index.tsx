export function Headline() {
  return (
    <section
      className="
        relative w-full flex flex-col justify-end items-center overflow-hidden bg-white 
        rounded-b-[3em] md:rounded-b-[5em]
        h-[70vh] sm:h-[75vh] md:h-[80vh]
        py-16 sm:py-20 md:py-12
      "
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/headline-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Efeito de escurecido (gradiente inferior) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Conteúdo */}
      <div className="container relative z-20 px-6 sm:px-10 md:px-16">
        <div
          className="
            max-w-3xl mx-auto md:mx-0 
            text-white 
            text-center md:text-left 
            space-y-6 sm:space-y-8
          "
        >
          <h1
            className="
              font-heading font-semibold tracking-tight 
              text-3xl sm:text-4xl md:text-5xl 
              leading-tight
            "
          >
            Transformamos presença digital em performance real
          </h1>
        </div>
      </div>
    </section>
  );
}
