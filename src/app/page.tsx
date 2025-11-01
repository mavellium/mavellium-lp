import { About } from "@/components/Home/About";
import { Cases } from "@/components/Home/Cases";
import { Clients } from "@/components/Home/Clients";
import { Header } from "@/components/Home/Header";
import { Headline } from "@/components/Home/Headline";
import { Methodology } from "@/components/Home/Methodology";
import { NextStep } from "@/components/Home/NextStep";
import { Solution } from "@/components/Home/Solution";
import { Footer } from "@/components/Home/Footer";
import ButtonWhatsapp from "@/components/Home/ButtonWhatsapp";


export default function Home() {
  return (
    <>
    <main>
    <Header></Header>
    <Headline></Headline>
    <About></About>
    <Solution></Solution>
    {/* <Cases></Cases> */}
    <Methodology></Methodology>
    {/* <Clients></Clients> */}
    <NextStep></NextStep>
    </main>
    <Footer></Footer>
    <ButtonWhatsapp></ButtonWhatsapp>
    </>
  );
}
