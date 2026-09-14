// src/components/Header.tsx
//
// Encabezado global del sitio: logo + nombre de la empresa a la izquierda,
// ícono de carrito a la derecha. Por ahora todo es VISUAL/referencial -
// el carrito no tiene funcionalidad real todavía, es para que el cliente
// vea cómo se vería la navegación completa del sitio.
"use client";  // ahora necesita "use client" porque usa el hook useCart (estado interactivo)

import Link from "next/link";
import { useCart } from "@/context/CartContext"; // hook para leer el estado del carrito

export default function Header() {
  const { totalItems } = useCart(); // obtenemos la cantidad total de productos en el carrito

  return (
    <header className="border-b border-[#D8D4CC] bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 30V16C8 9.373 12.925 4 19 4C25.075 4 30 9.373 30 16V30"
              stroke="#232320"
              strokeWidth="2.5"
              fill="none"
            />
            <line x1="6" y1="30" x2="32" y2="30" stroke="#232320" strokeWidth="2.5" />
          </svg>

          <div>
            <p className="font-[var(--font-heading)] text-lg font-bold leading-none text-[#232320]">
              Comercial Maya
            </p>
            <p className="mt-1 text-xs text-[#6B6862]">
              Porcelanatos y pisos de alta resistencia
            </p>
          </div>
        </Link>

        {/* Ahora el carrito SÍ es un Link real hacia /carrito, y el número
            del badge viene del contexto (totalItems) en vez de estar fijo en "0" */}
        <Link
          href="/carrito"
          aria-label="Ver carrito de pedido"
          className="relative rounded-full p-2 transition-colors hover:bg-[#EFEDE7]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          {/* Solo mostramos el badge si hay al menos 1 producto - si el carrito
              está vacío, no tiene sentido mostrar un "0" pegado al ícono */}
          {totalItems > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#A8562E] text-[10px] font-medium text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
