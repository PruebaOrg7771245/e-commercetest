// src/app/layout.tsx
import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google"; // importamos las 2 fuentes que sí vamos a usar (quitamos Geist)
import "./globals.css";

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
    <html lang="es">
       {/* cambiado de "en" a "es" ya que el sitio es en español */}
      <body className={`${archivo.variable} ${inter.variable} font-[var(--font-body)] antialiased`}>
        {/* aplicamos ambas variables de fuente + la fuente de cuerpo como default del body */}
        {children}
      </body>
    </html>
  );
}