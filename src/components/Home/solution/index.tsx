import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "lucide-react";

export function Solution() {
  return (
    <section className="py-16 w-full flex flex-col justify-center items-center bg-[#030F1B] md:py-24" id="servicos">
      <div className="container p-16">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
          Transformamos desafios em experiências digitais que geram resultado
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
          Oferecemos serviços completos de desenvolvimento web, unindo design estratégico, tecnologia moderna e foco em performance para potencializar marcas no ambiente digital.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 place-items-center lg:flex lg:justify-center w-full">
          <Card className="group hover:shadow-lg transition-shadow w-[50vw] bg-[#010910] border-2 border-[#2655CC] text-white transition-all hover:scale-105">
            <a href="/Servicos/LandingPage">
              <CardHeader>
                <div className="size-12 rounded-lg bg-gradient-to-br from-[#285AD9] to-[#285AD9]/90 flex items-center justify-center mb-4">
                  <Icon icon="solar:rocket-bold" className="size-6 text-white" />
                </div>
                <CardTitle>Landing Pages de Alta Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mt-5">
                Criamos landing pages personalizadas para campanhas, lançamentos e captação de leads.
                </p>

                <p className="text-muted-foreground mt-5">
                Cada detalhe é pensado para atrair, engajar e converter — com design atraente, carregamento rápido e mensagens que vendem.
                </p>
              </CardContent>
            </a>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow w-[50vw] bg-[#010910] border-2 border-[#2655CC] text-white transition-all hover:scale-105">
            <a href="/Servicos/Institucionais">
              <CardHeader>
                <div className="size-12 rounded-lg bg-gradient-to-r from-[#1E40AF] to-[#1E40AF]/90 flex items-center justify-center mb-4">
                  <Icon icon="solar:code-bold" className="size-6 text-white" />
                </div>
                <CardTitle>Sites Institucionais que fortalecem marcas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mt-5">
                Desenvolvemos sites profissionais e sob medida que transmitem credibilidade e propósito.
                </p>

                <p className="text-muted-foreground mt-5">
                Do layout à estrutura, tudo é otimizado para performance, SEO e experiência do usuário.
                </p>
              </CardContent>
            </a>
          </Card>
          {/* <Card className="group hover:shadow-lg transition-shadow w-[262px] h-[272px]">
            <CardHeader>
              <div className="size-12 rounded-lg bg-[#04A15E]/30 flex items-center justify-center mb-4">
                <Icon icon="solar:code-bold" className="size-6 text-[#04A15E]" />
              </div>
              <CardTitle>Desenvolvimento Web</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sites institucionais e
                <span className="block">sistemas escaláveis com as </span>
                melhores tecnologias.
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow w-[262px] h-[272px]">
            <CardHeader>
              <div className="size-12 rounded-lg bg-[#04A15E]/30 flex items-center justify-center mb-4">
                <Icon icon="solar:widget-bold" className="size-6 text-[#04A15E]" />
              </div>
              <CardTitle>Aplicações Personalizadas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Gerenciadores, portais e
                <span className="block">ferramentas sob medida </span>
                que otimizam processos.
              </p>
            </CardContent>
          </Card> */}
        </div>
        <div className="text-center mt-12">
          <a href="/Servicos" className="flex justify-center items-center gap-2">
            <Button size="lg" variant="outline" className="bg-white/30 text-white cursor-pointer">

              Ver todos os serviços
              <Icon icon="solar:arrow-right-bold" className="size-4" />

            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}