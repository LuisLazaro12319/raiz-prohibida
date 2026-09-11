import type { Categoria, Producto } from "@/lib/types";

/**
 * Catálogo de Raíz Prohibida. Los primeros 6 son productos reales de la
 * clienta, con foto real. Girly y Misterio vienen en dos colores (mismo
 * modelo) — la foto muestra un color, pero se pueden pedir ambos. Los
 * últimos 2 son de ejemplo para completar categorías sin foto real todavía.
 */

const TALLES = ["S", "M", "L", "XL"];

const ROSA = { nombre: "Rosa", hex: "#e6a3c4" };
const NEGRO = { nombre: "Negro", hex: "#1c1c1c" };
const ROJO = { nombre: "Rojo", hex: "#a01c2c" };
const BLANCO = { nombre: "Blanco", hex: "#f3ecec" };
const VINO = { nombre: "Vino", hex: "#5c1030" };
const FUCSIA = { nombre: "Fucsia", hex: "#d0057b" };

export const productos: Producto[] = [
  {
    slug: "set-girly",
    nombre: "Set Girly",
    categoria: "babydolls",
    descripcion: "Rosa que provoca 💗 o diseño exclusivo en negro 🔥. Babydoll de encaje con breteles finos y detalle de moños, disponible en rosa o negro.",
    detalle: "Encaje suave · Breteles regulables · Incluye tanga",
    precioMinorista: 89,
    precioMayorista: 55,
    talles: TALLES,
    colores: [ROSA, NEGRO],
    destacado: true,
    foto: true,
    fotosExtra: ["set-girly-negro.jpg"],
  },
  {
    slug: "set-celine",
    nombre: "Set Celine",
    categoria: "bodys",
    descripcion: "Coqueta por naturaleza 💗. Body de encaje con liguero integrado, delicado y femenino para toda ocasión especial.",
    detalle: "Encaje delicado · Body de una pieza · Liguero integrado",
    precioMinorista: 99,
    precioMayorista: 62,
    talles: TALLES,
    colores: [ROSA],
    destacado: true,
    foto: true,
  },
  {
    slug: "set-misterio",
    nombre: "Set Misterio",
    categoria: "bodys",
    descripcion: "Diseño exclusivo 🔞. Bustier con liguero y bombacha, disponible en rojo intenso o negro misterioso, para noches inolvidables.",
    detalle: "Encaje y microfibra · Bustier + liguero + bombacha",
    precioMinorista: 95,
    precioMayorista: 58,
    talles: TALLES,
    colores: [ROJO, NEGRO],
    destacado: true,
    foto: true,
    fotosExtra: ["set-misterio-negro.jpg"],
  },
  {
    slug: "set-jessica-rabbit",
    nombre: "Set Jessica Rabbit",
    categoria: "bodys",
    descripcion: "Glamour total ✨. Body de satén y malla en color vino, con guantes y choker a juego. Diseño exclusivo para looks de alto impacto.",
    detalle: "Satén y malla · Incluye guantes y choker · Liguero integrado",
    precioMinorista: 120,
    precioMayorista: 75,
    talles: TALLES,
    colores: [VINO],
    destacado: true,
    foto: true,
  },
  {
    slug: "set-raiz-floral",
    nombre: "Set Raíz Floral",
    categoria: "sets",
    descripcion: "Nuestro clásico de marca 🌹. Conjunto de sostén y bombacha en encaje floral vino, romántico y sensual.",
    detalle: "Encaje floral · Sostén + bombacha · Ajuste regulable",
    precioMinorista: 89,
    precioMayorista: 55,
    talles: TALLES,
    colores: [VINO],
    destacado: true,
    foto: true,
  },
  {
    slug: "conjunto-debora",
    nombre: "Conjunto Débora",
    categoria: "bodys",
    descripcion: "Actitud pura 🖤. Body de símil cuero y malla con tiras cruzadas y liguero, diseño atrevido y exclusivo.",
    detalle: "Símil cuero y malla · Tiras cruzadas · Liguero integrado",
    precioMinorista: 110,
    precioMayorista: 68,
    talles: TALLES,
    colores: [NEGRO],
    destacado: true,
    foto: true,
  },
  {
    slug: "bralette-flor",
    nombre: "Bralette Flor",
    categoria: "bralettes",
    descripcion: "Bralette sin aros, tela suave con detalle floral. Comodidad total sin resignar estilo.",
    detalle: "Sin aros · Tela suave · Tirantes regulables",
    precioMinorista: 65,
    precioMayorista: 39,
    talles: TALLES,
    colores: [FUCSIA, NEGRO, BLANCO],
    oferta: true,
    foto: false,
  },
  {
    slug: "ligero-encaje",
    nombre: "Ligero de Encaje",
    categoria: "accesorios",
    descripcion: "Portaligas de encaje elástico, complemento perfecto para tus sets favoritos.",
    detalle: "Encaje elástico · Broches ajustables · Un talle",
    precioMinorista: 45,
    precioMayorista: 26,
    talles: ["Único"],
    colores: [NEGRO, ROJO],
    foto: false,
  },
];

export const CATEGORIAS: { id: Categoria; nombre: string }[] = [
  { id: "sets", nombre: "Sets" },
  { id: "bodys", nombre: "Bodys" },
  { id: "babydolls", nombre: "Babydolls" },
  { id: "bralettes", nombre: "Bralettes" },
  { id: "accesorios", nombre: "Accesorios" },
];

export function getProducto(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}
