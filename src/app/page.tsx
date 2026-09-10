// src/app/page.tsx
//
// Página principal del catálogo. Es un "client component" (nota la directiva
// "use client" abajo) porque necesita manejar estado interactivo en el navegador
// (cuál categoría está seleccionada) - las páginas de Next.js son server components
// por defecto, pero el filtrado interactivo requiere que corra en el cliente.

"use client"; // le dice a Next.js que este archivo se ejecuta en el navegador, no en el servidor

import { useState, useMemo } from "react"; // hooks de React para manejar estado y cálculos memorizados
import { products, categories } from "@/data/products"; // nuestros datos del catálogo
import ProductCard from "@/components/ProductCard"; // tarjeta individual de producto
import CategoryFilter from "@/components/CategoryFilter"; // filtro de categorías

export default function HomePage() {
  // Estado que guarda qué categoría está seleccionada actualmente. Empieza en "Todos".
  const [activeCategory, setActiveCategory] = useState("Todos");

  // useMemo evita recalcular el filtrado en cada render si "activeCategory" no cambió,
  // mejora el rendimiento cuando el catálogo crezca a cientos de productos
  const filteredProducts = useMemo(() => {
    if (activeCategory === "Todos") {
      return products; // sin filtro, mostramos todo el catálogo
    }
    // filter() devuelve solo los productos cuya categoría coincide con la seleccionada
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]); // se vuelve a calcular solo cuando "activeCategory" cambia

  return (
    // Quitamos el <header> que estaba aquí antes - ahora ese contenido
    // (título, subtítulo) vive en el componente Header.tsx global.
    // Esta página empieza directo con el contenido del catálogo.
    <main className="min-h-screen bg-[#EFEDE7]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-12 text-center text-[#6B6862]">
            No hay productos en esta categoría todavía.
          </p>
        )}
      </div>
    </main>
  );
}

