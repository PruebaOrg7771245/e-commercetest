// src/components/AddToCartButton.tsx
//
// La página de detalle de producto (page.tsx) es un "server component"
// (no tiene "use client"), pero agregar al carrito requiere interactividad
// del navegador. Por eso separamos SOLO el botón en su propio componente
// cliente, y dejamos el resto de la página como estaba.

"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type AddToCartButtonProps = {
  id: string;
  name: string;
  image: string;
  price: number | null;
};

export default function AddToCartButton({ id, name, image, price }: AddToCartButtonProps) {
  const { addItem } = useCart();
  // Estado local solo para mostrar un mensaje de confirmación breve tras hacer clic
  const [justAdded, setJustAdded] = useState(false);

  function handleClick() {
    addItem({ id, name, image, price }); // agrega el producto al carrito global
    setJustAdded(true); // activamos el mensaje de confirmación

    // Después de 2 segundos, el botón vuelve a su texto normal
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <button
      onClick={handleClick}
      className="mt-8 w-full bg-[#232320] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#A8562E]"
    >
      {/* Cambiamos el texto del botón temporalmente para dar feedback visual claro */}
      {justAdded ? "✓ Agregado al pedido" : "Agregar al pedido"}
    </button>
  );
}
