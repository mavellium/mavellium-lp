import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Clients() {
  return (
    <section className="py-16 w-full flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 md:py-24 bg-[#030F1B]">
      <div className="container">
        {/* Título */}
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#04A15E]">
            O que nossos clientes dizem
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
            Resultados que falam por si. Confira a experiência de quem confiou na Mavellium.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <Card className="bg-[#0C2136] border border-[#04A15E] rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                  <AvatarImage
                    alt="Cliente"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                  />
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-[#04A15E] text-base sm:text-lg">Doni</p>
                  <p className="text-sm text-[#E5E5E5]">Fundador, Tegbe</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#E5E5E5] text-sm sm:text-base leading-relaxed">
                "A Mavellium entregou exatamente o que precisávamos. O resultado superou nossas expectativas."
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-[#0C2136] border border-[#04A15E] rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                  <AvatarImage
                    alt="Cliente"
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                  />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-[#04A15E] text-base sm:text-lg">Marcos</p>
                  <p className="text-sm text-[#E5E5E5]">Diretor, FAIP</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#E5E5E5] text-sm sm:text-base leading-relaxed">
                "Profissionalismo e qualidade em cada detalhe. Recomendo para qualquer projeto digital."
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-[#0C2136] border border-[#04A15E] rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                  <AvatarImage
                    alt="Cliente"
                    src="https://randomuser.me/api/portraits/men/67.jpg"
                  />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-[#04A15E] text-base sm:text-lg">Roberto Silva</p>
                  <p className="text-sm text-[#E5E5E5]">Fundador, TegPro</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#E5E5E5] text-sm sm:text-base leading-relaxed">
                "Parceria de longo prazo. Eles entendem nosso negócio e entregam soluções que funcionam."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

  );
}