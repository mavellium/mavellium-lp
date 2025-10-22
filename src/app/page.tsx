import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import { Clients } from "@/components/clients";
import { Header } from "@/components/header";
import { Headline } from "@/components/headline";
import { Methodology } from "@/components/methodology";
import { NextStep } from "@/components/nextStep";
import { Solution } from "@/components/solution";
import { Footer } from "@/components/footer";
import ButtonWhatsapp from "@/components/ButtonWhatsapp";


export default function Home() {
  return (
    <>
    <main>
    <Header></Header>
    <Headline></Headline>
    <About></About>
    <Solution></Solution>
    <Cases></Cases>
    <Methodology></Methodology>
    <Clients></Clients>
    <NextStep></NextStep>
    </main>
    <Footer></Footer>
    <ButtonWhatsapp></ButtonWhatsapp>
    </>
  );
}
