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

export function MavelliumInstitutionalWebsite() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center">
      <header className="sticky top-0 z-50 w-full flex flex-col justify-center items-center border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl">Mavellium</span>
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
      <section className="relative w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#041526] via-[#1F3E5D] to-[#041526] py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-white text-center space-y-8">
            <Badge variant="secondary" className="mb-4 bg-black text-white">
              Desenvolvimento de software
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight">
              Transformamos ideias em experiências digitais de alto impacto.
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Desenvolvemos sites, landing pages e aplicações sob medida com foco em performance,
              design e conversão.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346]"
              >
                <Icon icon="solar:chat-round-bold" className="size-5" />
                Fale com a gente
              </Button>
              <Button size="lg" variant="outline" className="bg-[#fff]/20">
                <Icon icon="solar:gallery-bold" className="size-5" />
                Ver portfólio
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </section>
      <section className="py-16 w-full flex flex-col justify-center items-center md:py-24 bg-[#041526]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              Mais do que código — criamos experiências.
            </h2>
            <p className="text-lg text-white">
              A Mavellium une design, tecnologia e estratégia para impulsionar negócios no ambiente
              digital. Criamos soluções digitais sob medida que geram resultado.
            </p>
            <Button variant="outline" className="mt-5 bg-[#041526] w-[200px] h-auto text-white">
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 w-full flex flex-col justify-center items-center bg-[#030F1B] md:py-24">
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
      <section className="py-16 w-full flex flex-col justify-center items-center md:py-24 bg-[#0C2136]">
        <div className="container">
          <div className="text-center text-white space-y-4 mb-12">
            <Badge variant="outline" className="text-white w-[100px]">Portfólio</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              Cases em destaque
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Projetos que transformaram negócios
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                alt="Tegbe"
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/generation-assets/photos/business-networking/landscape/3.webp"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>Tegbe</CardTitle>
                <CardDescription>Landing page institucional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                  <Icon icon="solar:arrow-up-bold" className="size-4" />
                  <span>+40% conversões</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Ver case completo
                  <Icon icon="solar:arrow-right-bold" className="size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                alt="TegPro"
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/generation-assets/photos/business-networking/landscape/5.webp"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>TegPro</CardTitle>
                <CardDescription>Página de produto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                  <Icon icon="solar:check-circle-bold" className="size-4" />
                  <span>Lançamento</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Ver case completo
                  <Icon icon="solar:arrow-right-bold" className="size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                alt="FAIP"
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/generation-assets/photos/universities/landscape/2.webp"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>FAIP</CardTitle>
                <CardDescription>Campanha de captação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                  <Icon icon="solar:users-group-rounded-bold" className="size-4" />
                  <span>+250 leads</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Ver case completo
                  <Icon icon="solar:arrow-right-bold" className="size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                alt="Instituto do Sorriso"
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/generation-assets/photos/dental-practices/landscape/4.webp"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>Instituto do Sorriso</CardTitle>
                <CardDescription>Website institucional</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">A publicar nesta semana</Badge>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" disabled className="w-full">
                  Em breve
                  <Icon icon="solar:clock-circle-bold" className="size-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="shadow-lg shadow-[#3B82F6]/20 bg-[#04A15E] hover:bg-[#06BB6E]"
            >
              Ver todos os cases
              <Icon icon="solar:arrow-right-bold" className="size-4" />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 w-full flex flex-col justify-center bg-[#0C2136] items-center md:py-24">
        <div className="container">
          <div className="text-center text-white space-y-4 mb-12">
            <Badge variant="outline" className="text-white w-[100px]">Processo</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              Como trabalhamos
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Uma metodologia ágil e orientada a resultados
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#19383B] flex items-center justify-center z-10">
                    <Icon icon="solar:magnifer-bold" className="size-8 text-[#04A15E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#04A15E] mb-2">Descoberta</h3>
                    <p className="text-sm text-white">
                      Entendemos seu negócio e objetivos
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#19383B] flex items-center justify-center z-10">
                    <Icon icon="solar:palette-bold" className="size-8 text-[#04A15E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#04A15E] mb-2">Design</h3>
                    <p className="text-sm text-white">Criamos interfaces que encantam</p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#19383B] flex items-center justify-center z-10">
                    <Icon icon="solar:code-bold" className="size-8 text-[#04A15E] z-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#04A15E] mb-2">Desenvolvimento</h3>
                    <p className="text-sm text-white">
                      Transformamos design em código limpo
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#19383B] flex items-center justify-center z-10">
                    <Icon icon="solar:chart-bold" className="size-8 text-[#04A15E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#04A15E] mb-2">Otimização</h3>
                    <p className="text-sm text-white">
                      Refinamos para máxima performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 w-full flex flex-col justify-center items-center md:py-24 bg-[#030F1B]">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-white w-[100px]">Depoimentos</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="Cliente"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                    />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Doni</p>
                    <p className="text-sm text-muted-foreground">CEO, Tegbe</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "A Mavellium entregou exatamente o que precisávamos. O resultado superou nossas
                  expectativas."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="Cliente"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                    />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Maria Clara</p>
                    <p className="text-sm text-muted-foreground">Diretora, FAIP</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Profissionalismo e qualidade em cada detalhe. Recomendo para qualquer projeto
                  digital."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="Cliente"
                      src="https://randomuser.me/api/portraits/men/67.jpg"
                    />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Roberto Silva</p>
                    <p className="text-sm text-muted-foreground">Fundador, TegPro</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Parceria de longo prazo. Eles entendem nosso negócio e entregam soluções que
                  funcionam."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-16 items-center">
            <div className="text-[#04A15E] font-semibold">Parcerias:</div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background">
              <div className="size-8 rounded bg-[#3B82F6]/10 flex items-center justify-center">
                <span className="text-[#3B82F6] font-bold text-sm">T</span>
              </div>
              <span className="font-semibold">Tegbe</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background">
              <div className="size-8 rounded bg-[#3B82F6]/10 flex items-center justify-center">
                <span className="text-[#3B82F6] font-bold text-sm">F</span>
              </div>
              <span className="font-semibold">FAIP</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-background">
              <div className="size-8 rounded bg-[#3B82F6]/10 flex items-center justify-center">
                <span className="text-[#3B82F6] font-bold text-sm">T</span>
              </div>
              <span className="font-semibold">TegPro</span>
            </div>
          </div>
        </div>
      </section>
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
      <footer className="border-t w-full flex flex-col justify-center items-center border-border py-12 md:py-16 bg-[#030F1B]">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-xl text-white">Mavellium</span>
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
    </div>
  );
}
