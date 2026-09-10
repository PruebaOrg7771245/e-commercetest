// src/components/Header.tsx
//
// Encabezado global del sitio: logo + nombre de la empresa a la izquierda,
// ícono de carrito a la derecha. Por ahora todo es VISUAL/referencial -
// el carrito no tiene funcionalidad real todavía, es para que el cliente
// vea cómo se vería la navegación completa del sitio.

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[#D8D4CC] bg-white px-6 py-4">
      {/* Contenedor con ancho máximo para alinear con el resto del contenido,
          y flex para poner logo a la izquierda y carrito a la derecha */}
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo + nombre - todo envuelto en Link para volver al inicio al hacer clic */}
        <Link href="/" className="flex items-center gap-3">
          {/* Ícono de marca - placeholder inspirado en el arco del logo real del cliente.
              Reemplazar por el SVG real de Comercial Maya en cuanto lo compartan. */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Forma de arco - dos columnas verticales unidas por una curva superior */}
            <path
              d="M8 30V16C8 9.373 12.925 4 19 4C25.075 4 30 9.373 30 16V30"
              stroke="#232320"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Base horizontal del arco, como un umbral/puerta */}
            <line x1="6" y1="30" x2="32" y2="30" stroke="#232320" strokeWidth="2.5" />
          </svg>

          {/* Bloque de texto: nombre + tagline pequeño debajo */}
          <div>
            <p className="font-[var(--font-heading)] text-lg font-bold leading-none text-[#232320]">
              Comercial Maya
            </p>
            <p className="mt-1 text-xs text-[#6B6862]">
              Porcelanatos y pisos de alta resistencia
            </p>
          </div>
        </Link>

        {/* Ícono de carrito a la derecha - SOLO VISUAL por ahora, sin funcionalidad ni contador real */}
        <button
          type="button"
          aria-label="Carrito de pedido" // texto para lectores de pantalla, buena práctica de accesibilidad
          className="relative rounded-full p-2 transition-colors hover:bg-[#EFEDE7]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ícono simple de carrito de compras, dibujado a mano en SVG (sin librerías externas) */}
            <path
              d="M3 3H5L5.4 5M5.4 5H21L18 13H7M5.4 5L7 13M7 13L5.5 16H18"
              stroke="#232320"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="20" r="1.4" fill="#232320" />
            <circle cx="17" cy="20" r="1.4" fill="#232320" />
          </svg>

          {/* Badge/contador - fijo en "0" por ahora, se conecta a lógica real cuando armemos el carrito funcional */}
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#A8562E] text-[10px] font-medium text-white">
            0
          </span>
        </button>
      </div>
    </header>
  );
}