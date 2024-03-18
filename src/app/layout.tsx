import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="icon" href="./cropped-logo-cirima2-32x32.png" type="image/png" sizes="32x32" />
      </head>

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
