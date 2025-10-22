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

export function NextStep() {
    return (
        <section className="py-20 w-full flex flex-col justify-center items-center bg-[#041526] md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Card className="border-2">
              <CardHeader className="text-center space-y-4">
                <Badge variant="secondary" className="w-fit mx-auto">
                  Vamos conversar?
                </Badge>
                <CardTitle className="text-3xl md:text-4xl">
                  Pronto para dar o próximo passo?
                </CardTitle>
                <CardDescription className="text-lg">
                  Vamos construir algo incrível juntos. Entre em contato e descubra como podemos
                  ajudar seu negócio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto shadow-lg shadow-primary/20 bg-gradient-to-br from-[#3B82F6] to-[#3B82F6]/90"
                  >
                    <Icon icon="solar:chat-round-bold" className="size-5" />
                    Fale com a Mavellium
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Icon icon="solar:letter-bold" className="size-5" />
                    Enviar mensagem
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
}