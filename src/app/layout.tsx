import type { Metadata } from "next";
import GoogleTagManager from "../components/GoogleTagManager";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mavellium | Especialistas em Landing Pages de Alta Conversão",
  description: "Pare de perder dinheiro com anúncios. Criamos landing pages otimizadas (Velocidade, UX e Copy) que diminuem seu Custo por Lead (CPA) e maximizam seu ROI. Peça um diagnóstico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-x-hidden">
      <body className="antialiased overflow-x-hidden">
        <GoogleTagManager gtmId="GTM-TNLKRFV3" />
        {children}
      </body>
    </html>
  );
}