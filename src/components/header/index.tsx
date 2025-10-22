import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";


export function Header() {
  return (
    <header className="sticky top-0 z-50 px-30 w-full flex flex-col justify-center items-center border-b border-border bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-mavellium.svg" alt="Mavellium" width={203} height={52} />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/sobre"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </a>
          <a
            href="/servicos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Serviços
          </a>
          <a
            href="/cases"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Cases
          </a>
          <a
            href="/contato"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </a>
          <Button className="shadow-lg shadow-primary/20 bg-[#008E52] hover:bg-[#017346]">
            <a href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F" className="flex gap-2 justify-center items-center">
              <Icon icon="solar:chat-round-bold" className="size-4" />
              Fale com a gente
            </a>
          </Button>
        </nav>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Icon icon="solar:hamburger-menu-bold" className="size-5" />
        </Button>
      </div>
    </header>
  )
}
