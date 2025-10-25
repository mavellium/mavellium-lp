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
    <footer className="border-t w-full flex flex-col justify-center items-center border-border py-12 px-12 md:py-16 bg-[#030F1B]">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center text-center lg:text-start">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-mavellium-footer.svg" alt="Mavellium" width={233} height={52} />
            </div>
            <p className="text-md text-[#A7B4CE]">
              Desenvolvimento de software e
              <span className="block">landing pages de alta conversão.</span>
            </p>
            <Button
                size="icon"
                variant="ghost"
                className="size-9 p-1 rounded-full hover:bg-[#0A3159]"
              >
                <a
                  href="https://www.instagram.com/mavellium/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./mdi_instagram.svg" alt="Instagram" />
                </a>
              </Button>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Empresa</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="/sobre"
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
              >
                Sobre
              </a>
              <a
                href="/servicos"
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
              >
                Serviços
              </a>
              <a
                href="/cases"
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
              >
                Cases
              </a>
              <a
                href="/contato"
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
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
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
              >
                Landing Pages
              </a>
              <a
                href="/servicos#desenvolvimento-web"
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
              >
                Desenvolvimento Web
              </a>
              <a
                href="/servicos#apps-personalizados"
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
              >
                Apps Personalizados
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contato</h3>
            <div className="space-y-2">
              <p className="text-sm text-[#6B7280] hover:text-white">contato@mavellium.com</p>
              <p className="text-sm text-[#6B7280] hover:text-white">(14) 99177-9502</p>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A7B4CE]">
          <p>© 2024 Mavellium — Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="/privacidade" className="text-[#A7B4CE]">
              Privacidade
            </a>
            <a href="/termos" className="text-[#A7B4CE]">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
