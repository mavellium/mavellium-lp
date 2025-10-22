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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
      <footer className="border-t w-full flex flex-col justify-center items-center border-border py-12 md:py-16 bg-[#030F1B]">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo-mavellium-footer.svg" alt="Mavellium" width={203} height={52} />
              </div>
              <p className="text-sm text-muted-foreground">
                Desenvolvimento de software e landing pages de alta conversão.
              </p>
              <div className="flex items-center gap-3">
                <Button size="icon" variant="ghost">
                  <Icon icon="solar:instagram-bold" className="size-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon icon="solar:linkedin-bold" className="size-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon icon="solar:facebook-bold" className="size-5" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Empresa</h3>
              <nav className="flex flex-col space-y-2">
                <a
                  href="/sobre"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="/servicos"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Serviços
                </a>
                <a
                  href="/cases"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Cases
                </a>
                <a
                  href="/contato"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Contato
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Serviços</h3>
              <nav className="flex flex-col space-y-2">
                <a
                  href="/servicos#landing-pages"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Landing Pages
                </a>
                <a
                  href="/servicos#desenvolvimento-web"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Desenvolvimento Web
                </a>
                <a
                  href="/servicos#apps-personalizados"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Apps Personalizados
                </a>
                <a
                  href="/servicos#integracoes"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Integrações
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Contato</h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground hover:text-white">contato@mavellium.com</p>
                <p className="text-sm text-muted-foreground hover:text-white">+55 11 99999-9999</p>
                <Button size="sm" variant="outline" className="mt-4">
                  <Icon icon="solar:whatsapp-bold" className="size-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Mavellium — Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="/privacidade" className="hover:text-foreground transition-colors">
                Privacidade
              </a>
              <a href="/termos" className="hover:text-foreground transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
