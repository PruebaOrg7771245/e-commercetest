// src/components/CategoryFilter.tsx
//
// Muestra las categorías como pestañas horizontales clickeables.
// No maneja el estado internamente - recibe la categoría activa y una función
// para cambiarla, así el componente padre (page.tsx) controla el filtrado real.

type CategoryFilterProps = {
  categories: string[]; // lista de categorías disponibles, ej: ["Porcelanatos", "Pisos SPC"]
  active: string; // la categoría actualmente seleccionada
  onChange: (category: string) => void; // función que se llama cuando el usuario elige otra categoría
};

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  // Agregamos "Todos" al inicio de la lista para poder ver el catálogo completo
  const allOptions = ["Todos", ...categories];

  return (
    // Contenedor con scroll horizontal en móvil (overflow-x-auto) para que no se rompa el layout
    <div className="flex gap-6 overflow-x-auto border-b border-[#D8D4CC] pb-0">
      {allOptions.map((category) => {
        const isActive = category === active; // comparamos si esta es la pestaña seleccionada

        return (
          <button
            key={category} // key única requerida por React al renderizar listas
            onClick={() => onChange(category)} // avisa al padre qué categoría se eligió
            className={`
              whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition-colors
              ${
                isActive
                  ? "border-[#A8562E] text-[#232320]" // estilo cuando está activa: línea inferior color acento
                  : "border-transparent text-[#6B6862] hover:text-[#232320]" // estilo inactivo
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
