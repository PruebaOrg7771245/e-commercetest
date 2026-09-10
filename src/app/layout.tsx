// src/app/layout.tsx
import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google"; // importamos las 2 fuentes que sí vamos a usar (quitamos Geist)
import "./globals.css";
import Header from "@/components/Header"; // importamos el nuevo encabezado global

// Fuente para títulos - Archivo, en pesos semi-bold y bold
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading", // variable CSS que usamos en los componentes como var(--font-heading)
  weight: ["600", "700"],
});

// Fuente para texto de cuerpo - Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Comercial Maya | Porcelanatos y Pisos", // reemplazamos el título default de create-next-app
  description: "Catálogo de porcelanatos importados y pisos SPC de alta resistencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${archivo.variable} ${inter.variable} font-[var(--font-body)] antialiased`}>
        {/* El Header se pone AQUÍ, fuera de {children} - así aparece
            en TODAS las páginas (catálogo, detalle de producto, etc.)
            sin tener que repetirlo en cada archivo individual */}
        <Header />
        {children}
      </body>
    </html>
  );
}