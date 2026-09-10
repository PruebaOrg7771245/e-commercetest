// src/components/ProductGallery.tsx
//
// Muestra la foto principal grande arriba y miniaturas abajo para cambiar
// entre las fotos del producto. Es "use client" porque necesita estado
// (cuál imagen está seleccionada) que solo puede vivir en el navegador.

"use client";

import { useState } from "react"; // hook para guardar qué imagen está activa
import Image from "next/image";

type ProductGalleryProps = {
  images: string[]; // arreglo de rutas de imágenes del producto
  productName: string; // usado como texto alternativo (alt) de accesibilidad
};

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  // Guardamos el índice (posición) de la imagen que se está mostrando grande. Empieza en la primera (0).
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      {/* Imagen grande principal */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#D8D4CC] bg-[#EFEDE7]">
        <Image
          src={images[selectedIndex]} // muestra la imagen que esté seleccionada actualmente
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority // le dice a Next.js que cargue esta imagen de inmediato (es la más importante de la página)
        />
      </div>

      {/* Fila de miniaturas - solo se muestra si hay más de 1 imagen, no tiene sentido con una sola */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((image, index) => (
            <button
              key={image} // usamos la url como key ya que es única por imagen
              onClick={() => setSelectedIndex(index)} // al hacer clic, esa miniatura pasa a ser la principal
              className={`
                relative h-16 w-16 shrink-0 overflow-hidden border-2
                ${index === selectedIndex ? "border-[#A8562E]" : "border-transparent"}
              `}
              // el borde color acento marca cuál miniatura está activa
            >
              <Image src={image} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
