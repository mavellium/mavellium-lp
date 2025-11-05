import type { Metadata } from "next";
import GoogleTagManager from "../components/GoogleTagManager";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavellium — Landing Pages e Sites que Geram Resultados",
  description: "Criamos landing pages e sites institucionais de alta performance. Aumente conversões e destaque sua marca com tecnologia e design Mavellium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManager gtmId="..." />
        {children}
      </body>
    </html>
  );
}
