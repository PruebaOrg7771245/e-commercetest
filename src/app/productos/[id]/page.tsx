// src/app/productos/[id]/page.tsx
//
// Página de detalle de producto. La carpeta "[id]" entre corchetes le dice
// a Next.js que esta es una ruta DINÁMICA - "id" puede ser cualquier valor,
// ej: /productos/betonhome-pearl, /productos/tessino-black, etc.

import { notFound } from "next/navigation"; // función especial que muestra la página 404 de Next.js
import Link from "next/link";
import { products } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";

// Formatea el precio igual que en ProductCard - si es null, muestra "Consultar precio"
function formatPrice(price: number | null): string {
  if (price === null) {
    return "Consultar precio";
  }
  return new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

// generateStaticParams le dice a Next.js, al momento de hacer el build,
// TODAS las páginas de producto que existen - así se generan como HTML
// estático de antemano (más rápido) en vez de generarse en cada visita
export async function generateStaticParams() {
  // Devolvemos un arreglo de objetos { id: "..." } - uno por cada producto
  return products.map((product) => ({
    id: product.id,
  }));
}

// En Next.js 15+, "params" llega como una Promise, por eso la función
// es "async" y usamos "await" para obtener el valor real de adentro
export default async function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>; // el tipo indica que params es una promesa que resuelve a un objeto con "id"
}) {
  const { id } = await params; // desempaquetamos el id ya resuelto

  // Buscamos el producto cuyo id coincide con el de la URL
  const product = products.find((p) => p.id === id);

  // Si no se encuentra el producto (ej: alguien entra a una URL inválida),
  // mostramos automáticamente la página 404 de Next.js
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#EFEDE7]">
      {/* Barra superior simple con link para volver al catálogo */}
      <header className="border-b border-[#D8D4CC] bg-white px-6 py-4">
        <Link href="/" className="text-sm text-[#6B6862] hover:text-[#232320]">
          ← Volver al catálogo
        </Link>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Grid de 2 columnas en desktop: galería a la izquierda, info a la derecha.
            En móvil se apilan una debajo de otra (grid-cols-1 por defecto) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Columna izquierda: galería de fotos */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Columna derecha: información del producto */}
          <div>
            {/* Categoría/subcategoría como texto pequeño arriba del título */}
            <p className="text-sm text-[#6B6862]">
              {product.subcategory ?? product.category}
              {product.brand && ` · ${product.brand}`}
              {/* si tiene marca, la mostramos junto a la subcategoría, ej: "Betonhome · Azulejos Benadresa" */}
            </p>

            {/* Nombre del producto en grande */}
            <h1 className="mt-2 font-[var(--font-heading)] text-3xl font-bold text-[#232320]">
              {product.name}
            </h1>

            {/* Descripción */}
            <p className="mt-4 text-base leading-relaxed text-[#6B6862]">
              {product.description}
            </p>

            {/* Formatos disponibles, mostrados como etiquetas individuales */}
            <div className="mt-6">
              <p className="text-sm font-medium text-[#232320]">Formatos disponibles</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <span
                    key={variant.value} // asumimos que cada valor de variante es único dentro del producto
                    className="border border-[#D8D4CC] bg-white px-3 py-1 text-sm text-[#232320]"
                  >
                    {variant.value}
                  </span>
                ))}
              </div>
            </div>

            {/* Bloque de precios */}
            <div className="mt-8 border-t border-[#D8D4CC] pt-6">
              <div className="flex items-center justify-between">
                <span className="text-[#6B6862]">Precio minorista</span>
                <span className="text-xl font-semibold text-[#232320]">
                  {formatPrice(product.prices.minorista)}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[#6B6862]">Precio mayorista</span>
                <span className="text-xl font-semibold text-[#232320]">
                  {formatPrice(product.prices.mayorista)}
                </span>
              </div>
            </div>

            {/* Botón de acción principal - por ahora solo visual, el carrito real lo conectamos después */}
            <button className="mt-8 w-full bg-[#232320] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#A8562E]">
              Agregar al pedido
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
