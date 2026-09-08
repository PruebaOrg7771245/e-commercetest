// src/data/products.ts
//
// Archivo temporal con datos "quemados" (hardcoded) del catálogo real
// que el cliente proporcionó (Comercial Maya).
//
// IMPORTANTE: el catálogo original NO trae precios, por lo que el campo
// "prices" quedó en null. Hay que pedirle al cliente precios de referencia
// antes de mostrar el boceto, o dejar el botón como "Consultar precio".
//
// Cuando migremos a la base de datos real (Postgres), esta misma forma
// de datos ("shape") es la que va a devolver la API - así los componentes
// visuales no cambian, solo cambia de dónde vienen los datos.

export type ProductVariant = {
  attribute: string; // ej: "formato"
  value: string;      // ej: "60x120"
};

export type ProductPrices = {
  minorista: number | null; // precio al público, null = pendiente de confirmar con cliente
  mayorista: number | null; // precio mayorista, null = pendiente de confirmar con cliente
};

export type Product = {
  id: string;              // identificador único, usado en la URL del producto
  name: string;             // nombre comercial del producto
  category: string;         // categoría principal
  subcategory?: string;     // línea/colección dentro de la categoría
  description: string;      // descripción corta para mostrar en el catálogo
  images: string[];         // rutas de las imágenes (relativas a /public)
  variants: ProductVariant[]; // variantes disponibles (formatos)
  prices: ProductPrices;    // precios diferenciados, null si no se ha definido aún
  brand?: string;           // marca/fabricante si aplica
};

export const products: Product[] = [
  // ==========================================
  // CATEGORÍA: PORCELANATOS IMPORTADOS
  // Marca: Azulejos Benadresa, S.A.
  // ==========================================
  {
    id: "betonhome-pearl",
    name: "Betonhome Pearl",
    category: "Porcelanatos",
    subcategory: "Betonhome",
    description: "Porcelanato importado acabado concreto, tono perla, ideal para espacios modernos y minimalistas.",
    images: ["/images/products/betonhome-pearl.jpg"],
    variants: [
      { attribute: "formato", value: "30x90" },
      { attribute: "formato", value: "60x120" },
    ],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "magna-betonhome-grey",
    name: "Magna Betonhome Grey",
    category: "Porcelanatos",
    subcategory: "Betonhome",
    description: "Porcelanato importado con textura decorativa, tono gris, para muros y paredes de alto impacto visual.",
    images: ["/images/products/magna-betonhome.jpg"],
    variants: [{ attribute: "formato", value: "30x90" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "magna-betonhome-pearl",
    name: "Magna Betonhome Pearl",
    category: "Porcelanatos",
    subcategory: "Betonhome",
    description: "Porcelanato importado con textura decorativa, tono perla, para muros y paredes de alto impacto visual.",
    images: ["/images/products/magna-betonhome.jpg"],
    variants: [{ attribute: "formato", value: "30x90" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "fleur-halima-blanc",
    name: "Fleur Halima Blanc",
    category: "Porcelanatos",
    subcategory: "Halima",
    description: "Porcelanato importado con estampado floral decorativo sobre base blanca, para muros destacados.",
    images: ["/images/products/fleur-halima-blanc.jpg"],
    variants: [{ attribute: "formato", value: "60x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "halima-blanc",
    name: "Halima Blanc",
    category: "Porcelanatos",
    subcategory: "Halima",
    description: "Porcelanato importado tono blanco, acabado piedra natural, combina con la línea Fleur Halima.",
    images: ["/images/products/fleur-halima-blanc.jpg"],
    variants: [{ attribute: "formato", value: "60x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "icaria-ivory",
    name: "Icaria Ivory",
    category: "Porcelanatos",
    subcategory: "Icaria",
    description: "Porcelanato importado acabado piedra natural, tono marfil, para pisos y paredes de baños y espacios amplios.",
    images: ["/images/products/icaria-ivory.jpg"],
    variants: [{ attribute: "formato", value: "60x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "stryn",
    name: "Stryn",
    category: "Porcelanatos",
    subcategory: "Stryn",
    description: "Porcelanato importado tono neutro liso, base de la colección Stryn.",
    images: ["/images/products/stryn.jpg"],
    variants: [{ attribute: "formato", value: "60x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "blume-stryn",
    name: "Blume Stryn",
    category: "Porcelanatos",
    subcategory: "Stryn",
    description: "Porcelanato importado con estampado botánico decorativo, ideal para muros con personalidad.",
    images: ["/images/products/blume-stryn.jpg"],
    variants: [{ attribute: "formato", value: "60x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "verse-halima-bleu",
    name: "Verse Halima Bleu",
    category: "Porcelanatos",
    subcategory: "Verse",
    description: "Porcelanato importado acabado textil, tono azul grisáceo.",
    images: ["/images/products/verse-halima-bleu.jpg"],
    variants: [{ attribute: "formato", value: "60x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "verse-halima-argile",
    name: "Verse Halima Argile",
    category: "Porcelanatos",
    subcategory: "Verse",
    description: "Porcelanato importado acabado textil, tono arcilla/terracota.",
    images: ["/images/products/verse-halima-argile.jpg"],
    variants: [{ attribute: "formato", value: "60x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "spazio-alder",
    name: "Spazio Alder",
    category: "Porcelanatos",
    subcategory: "Spazio",
    description: "Porcelanato importado símil madera, tono claro (aliso), formato lama larga.",
    images: ["/images/products/spazio-alder.jpg"],
    variants: [{ attribute: "formato", value: "20x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "spazio-maple",
    name: "Spazio Maple",
    category: "Porcelanatos",
    subcategory: "Spazio",
    description: "Porcelanato importado símil madera, tono arce, formato lama larga.",
    images: ["/images/products/spazio-maple.jpg"],
    variants: [{ attribute: "formato", value: "20x120" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "finezza-bianco",
    name: "Finezza Bianco",
    category: "Porcelanatos",
    subcategory: "Finezza",
    description: "Porcelanato importado símil mármol Calacatta, tono blanco con vetas grises.",
    images: ["/images/products/finezza-bianco.jpg"],
    variants: [{ attribute: "formato", value: "80x160" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "finezza-oro",
    name: "Finezza Oro",
    category: "Porcelanatos",
    subcategory: "Finezza",
    description: "Porcelanato importado símil mármol, tono blanco con vetas doradas.",
    images: ["/images/products/finezza-oro.jpg"],
    variants: [{ attribute: "formato", value: "80x160" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "pietra-antica-nero",
    name: "Pietra Antica Nero",
    category: "Porcelanatos",
    subcategory: "Pietra Antica",
    description: "Porcelanato importado símil piedra natural, tono negro con vetas sutiles.",
    images: ["/images/products/pietra-antica-nero.jpg"],
    variants: [{ attribute: "formato", value: "80x160" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "ravena",
    name: "Ravena",
    category: "Porcelanatos",
    subcategory: "Ravena",
    description: "Porcelanato importado símil mármol Calacatta con vetas doradas y grises, alto valor decorativo.",
    images: ["/images/products/ravena.jpg"],
    variants: [{ attribute: "formato", value: "80x160" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "tessino-black",
    name: "Tessino Black",
    category: "Porcelanatos",
    subcategory: "Tessino",
    description: "Porcelanato importado símil piedra pulida, tono negro, acabado brillante.",
    images: ["/images/products/tessino-black.jpg"],
    variants: [{ attribute: "formato", value: "80x160" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "tessino-ivory",
    name: "Tessino Ivory",
    category: "Porcelanatos",
    subcategory: "Tessino",
    description: "Porcelanato importado símil piedra pulida, tono marfil, acabado brillante.",
    images: ["/images/products/tessino-ivory.jpg"],
    variants: [{ attribute: "formato", value: "80x160" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },
  {
    id: "tessino-smoke",
    name: "Tessino Smoke",
    category: "Porcelanatos",
    subcategory: "Tessino",
    description: "Porcelanato importado símil piedra pulida, tono gris humo, acabado brillante.",
    images: ["/images/products/tessino-smoke.jpg"],
    variants: [{ attribute: "formato", value: "80x160" }],
    prices: { minorista: null, mayorista: null },
    brand: "Azulejos Benadresa",
  },

  // ==========================================
  // CATEGORÍA: PISOS SPC
  // ==========================================
  {
    id: "spc-amareto",
    name: "SPC Amareto",
    category: "Pisos SPC",
    description: "Piso SPC de alta resistencia, 7mm de espesor (cuerpo SPC 5mm + capa EVA 2mm de aislamiento acústico), clasificación AC5 para alto tráfico.",
    images: ["/images/products/spc-amareto.jpg"],
    variants: [{ attribute: "espesor", value: "7mm" }],
    prices: { minorista: null, mayorista: null },
  },
  {
    id: "spc-espreso",
    name: "SPC Espreso",
    category: "Pisos SPC",
    description: "Piso SPC de alta resistencia, 7mm de espesor (cuerpo SPC 5mm + capa EVA 2mm de aislamiento acústico), clasificación AC5 para alto tráfico.",
    images: ["/images/products/spc-espreso.jpg"],
    variants: [{ attribute: "espesor", value: "7mm" }],
    prices: { minorista: null, mayorista: null },
  },
  {
    id: "spc-duna",
    name: "SPC Duna",
    category: "Pisos SPC",
    description: "Piso SPC de alta resistencia, 7mm de espesor (cuerpo SPC 5mm + capa EVA 2mm de aislamiento acústico), clasificación AC5 para alto tráfico.",
    images: ["/images/products/spc-duna.jpg"],
    variants: [{ attribute: "espesor", value: "7mm" }],
    prices: { minorista: null, mayorista: null },
  },
  {
    id: "spc-avellana",
    name: "SPC Avellana",
    category: "Pisos SPC",
    description: "Piso SPC de alta resistencia, 7mm de espesor (cuerpo SPC 5mm + capa EVA 2mm de aislamiento acústico), clasificación AC5 para alto tráfico.",
    images: ["/images/products/spc-avellana.jpg"],
    variants: [{ attribute: "espesor", value: "7mm" }],
    prices: { minorista: null, mayorista: null },
  },
];

// Categorías derivadas automáticamente de los productos (para el filtro del catálogo)
export const categories = Array.from(new Set(products.map((p) => p.category)));
