import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cirima - Instalaciones electricas y de calefaccion",
  description: "Instalaciones electricas y de calefacion en Pamplona",
  keywords: ["Electricista", "Calderas", "Pamplona"],
  icons: [{ href: "./logo-cirima.png", url: "./logo-cirima.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
