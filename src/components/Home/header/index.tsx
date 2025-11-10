"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo + Menu Desktop */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center">
            <img
              src="/logo-mavellium.svg"
              alt="Mavellium"
              width={180}
              height={40}
              className="object-contain"
            />
          </a>

          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-sm font-medium text-black hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/Servicos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="/Sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="/Contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>
        </div>

        {/* Botão WhatsApp (Desktop) */}
        <div className="hidden md:flex">
          <a
            href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="shadow-lg shadow-primary/20 bg-[#008E52] hover:bg-[#017346] transition-all hover:scale-105">
              <img src="/ic_baseline-whatsapp.svg" className="w-6" />
              Fale com a gente
            </Button>
          </a>
        </div>

        {/* Botão menu mobile */}
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            icon={isOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"}
            className="size-6"
          />
        </Button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="flex flex-col items-center gap-4 py-4 border-t border-border bg-white md:hidden animate-fade-in">
          <a href="/" className="text-sm font-medium text-black hover:text-foreground transition-colors">
            Home
          </a>
          <a href="/Servicos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Serviços
          </a>
          <a href="/Sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="/Contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5514991779502"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#008E52] hover:bg-[#017346] transition-all hover:scale-105">
              <img src="/ic_baseline-whatsapp.svg" className="w-6" />
              Fale com a gente
            </Button>
          </a>
        </nav>
      )}
    </header>
  )
}
