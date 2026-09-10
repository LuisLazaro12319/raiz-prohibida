import type { Categoria, Producto } from "@/lib/types";

/**
 * Catálogo de Raíz Prohibida. Los 6 primeros son los productos reales que
 * pasó la clienta (mismos nombres y descripciones que en su TikTok Shop); los
 * últimos 3 son de ejemplo para completar categorías. Todos con `foto: false`
 * (se muestra la silueta) hasta que suba las fotos reales de cada uno.
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
    slug: "set-girly-rosa",
    nombre: "Set Girly Rosa",
    categoria: "sets",
    descripcion: "Rosa que provoca 💗. Conjunto de sostén y bombacha en encaje suave, diseño coqueto y femenino.",
    detalle: "Encaje suave · Sostén + bombacha · Ajuste regulable",
    precioMinorista: 89,
    precioMayorista: 55,
    talles: TALLES,
    colores: [ROSA],
    destacado: true,
    foto: false,
  },
  {
    slug: "set-girly-negro",
    nombre: "Set Girly Negro",
    categoria: "sets",
    descripcion: "Diseño exclusivo 🔥. Conjunto de sostén y bombacha en encaje negro, elegante y atrevido.",
    detalle: "Encaje · Sostén + bombacha · Ajuste regulable",
    precioMinorista: 89,
    precioMayorista: 55,
    talles: TALLES,
    colores: [NEGRO],
    destacado: true,
    foto: false,
  },
  {
    slug: "set-celine-rosa",
    nombre: "Set Celine Rosa",
    categoria: "bodys",
    descripcion: "Body de encaje rosa, delicado, coqueto y lleno de detalles. Una pieza que estiliza y enamora.",
    detalle: "Encaje delicado · Body de una pieza · Broches en la entrepierna",
    precioMinorista: 99,
    precioMayorista: 62,
    talles: TALLES,
    colores: [ROSA],
    destacado: true,
    foto: false,
  },
  {
    slug: "set-celine",
    nombre: "Set Celine",
    categoria: "bodys",
    descripcion: "Coqueta por naturaleza 💙. Body de encaje blanco, delicado y femenino para toda ocasión especial.",
    detalle: "Encaje · Body de una pieza · Broches en la entrepierna",
    precioMinorista: 99,
    precioMayorista: 62,
    talles: TALLES,
    colores: [BLANCO],
    foto: false,
  },
  {
    slug: "set-misterio-rojo",
    nombre: "Set Misterio Rojo",
    categoria: "sets",
    descripcion: "Diseño exclusivo 🔞. Conjunto de sostén y bombacha en rojo intenso, para noches inolvidables.",
    detalle: "Encaje y microfibra · Sostén + bombacha · Ajuste regulable",
    precioMinorista: 95,
    precioMayorista: 58,
    talles: TALLES,
    colores: [ROJO],
    destacado: true,
    foto: false,
  },
  {
    slug: "set-misterio-negro",
    nombre: "Set Misterio Negro",
    categoria: "sets",
    descripcion: "Diseño exclusivo 🔞. Conjunto de sostén y bombacha en negro, misterioso y sensual.",
    detalle: "Encaje y microfibra · Sostén + bombacha · Ajuste regulable",
    precioMinorista: 95,
    precioMayorista: 58,
    talles: TALLES,
    colores: [NEGRO],
    foto: false,
  },
  {
    slug: "babydoll-luna",
    nombre: "Babydoll Luna",
    categoria: "babydolls",
    descripcion: "Camisón corto de encaje con vuelo delicado. Liviano, romántico y muy femenino.",
    detalle: "Encaje y tul suave · Corte evasé · Incluye tanga",
    precioMinorista: 85,
    precioMayorista: 52,
    talles: TALLES,
    colores: [VINO, NEGRO],
    foto: false,
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
