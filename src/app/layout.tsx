import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cirima - Instalaciones electricas y de calefaccion",
  description: "Instalaciones electricas y de calefacion en Pamplona",
  keywords: ["Electricista", "Calderas", "Pamplona"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={montserrat.className} lang="en">
      <head>
        <link rel="icon" href="./logo-cirima.png" type="image/png" sizes="32x32" />
      </head>

      <body className={montserrat.className}>{children}</body>
      <Footer />
    </html>
  );
}
