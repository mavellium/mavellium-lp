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

export function Solution() {
    return (
        <section className="py-16 w-full flex flex-col justify-center items-center bg-[#030F1B] md:py-24" id="servicos">
        <div className="container">
          <div className="text-center text-white space-y-4 mb-12">
            <Badge variant="outline" className="text-white w-[100px]">Serviços</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              Nossas soluções
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Oferecemos serviços completos de desenvolvimento digital
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="size-12 rounded-lg bg-[#04A15E]/30 flex items-center justify-center mb-4">
                  <Icon icon="solar:display-bold" className="size-6 text-[#04A15E]" />
                </div>
                <CardTitle>Landing Pages de Alta Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Páginas que encantam e convertem leads com design e performance otimizada.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="size-12 rounded-lg bg-[#04A15E]/30 flex items-center justify-center mb-4">
                  <Icon icon="solar:code-bold" className="size-6 text-[#04A15E]" />
                </div>
                <CardTitle>Desenvolvimento Web</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sites institucionais e sistemas escaláveis com as melhores tecnologias.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="size-12 rounded-lg bg-[#04A15E]/30 flex items-center justify-center mb-4">
                  <Icon icon="solar:widget-bold" className="size-6 text-[#04A15E]" />
                </div>
                <CardTitle>Aplicações Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gerenciadores, portais e ferramentas sob medida que otimizam processos.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="size-12 rounded-lg bg-[#04A15E]/30 flex items-center justify-center mb-4">
                  <Icon icon="solar:settings-bold" className="size-6 text-[#04A15E]" />
                </div>
                <CardTitle>Integrações e Suporte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integramos e garantimos funcionamento contínuo da sua operação.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="bg-white/30 text-white">
              Ver todos os serviços
              <Icon icon="solar:arrow-right-bold" className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    );
}