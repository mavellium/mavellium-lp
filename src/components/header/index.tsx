import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";


export function Header() {
    return(
        <header className="sticky top-0 z-50 w-full flex flex-col justify-center items-center border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <Icon icon="solar:chat-round-bold" className="size-4" />
              Fale com a gente
            </Button>
          </nav>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon icon="solar:hamburger-menu-bold" className="size-5" />
          </Button>
        </div>
      </header>
    )
}
