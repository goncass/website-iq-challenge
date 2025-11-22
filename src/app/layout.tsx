import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "IQ Challenge - Descubra Seu QI",
  description: "Teste seu QI com nosso teste profissional e receba uma análise completa dos seus resultados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="/lasy-bridge.js" strategy="beforeInteractive" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
