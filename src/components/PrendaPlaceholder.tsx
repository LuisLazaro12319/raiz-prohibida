import type { Categoria } from "@/lib/types";

/**
 * Silueta de la prenda que se muestra mientras no haya fotos reales.
 * Cuando lleguen las fotos, este componente se reemplaza por <Image />
 * y no hay que tocar nada más.
 */
const SILUETAS: Record<Categoria, React.ReactNode> = {
  sets: (
    <>
      <path d="M30 20 Q36 13 43 20 L46 34 Q38 40 30 34 Z" />
      <path d="M70 20 Q64 13 57 20 L54 34 Q62 40 70 34 Z" />
      <path d="M32 20 L28 10 M68 20 L72 10" />
      <path d="M35 52 L65 52 L61 74 Q50 81 39 74 Z" />
      <path d="M35 52 L29 47 M65 52 L71 47" />
    </>
  ),
  bodys: (
    <>
      <path d="M30 18 Q36 11 43 18 L45 29 Q50 25 55 29 L57 18 Q64 11 70 18 L66 38 Q66 58 58 71 Q50 78 42 71 Q34 58 34 38 Z" />
      <path d="M32 18 L28 9 M68 18 L72 9" />
    </>
  ),
  babydolls: (
    <>
      <path d="M38 15 Q50 9 62 15 L66 29 Q71 50 77 74 Q50 85 23 74 Q29 50 34 29 Z" />
      <path d="M40 15 L36 7 M60 15 L64 7" />
      <path d="M42 30 L58 30" />
    </>
  ),
  bralettes: (
    <>
      <path d="M28 25 Q50 13 72 25 L67 41 Q50 49 33 41 Z" />
      <path d="M32 24 L28 11 M68 24 L72 11" />
      <circle cx="50" cy="25" r="3" />
    </>
  ),
  accesorios: (
    <>
      <path d="M30 29 L70 29 L67 40 L33 40 Z" />
      <path d="M39 40 L37 71 M61 40 L63 71" />
      <circle cx="37" cy="71" r="2.5" />
      <circle cx="63" cy="71" r="2.5" />
    </>
  ),
};

export function PrendaPlaceholder({
  categoria,
  hex,
  nombre,
}: {
  categoria: Categoria;
  hex: string;
  nombre: string;
}) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: hex }}
      role="img"
      aria-label={`${nombre} — imagen de referencia`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-3/5 w-3/5 opacity-25 mix-blend-luminosity"
        fill="none"
        stroke="#000"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {SILUETAS[categoria]}
      </svg>
      <span className="pointer-events-none absolute bottom-2 right-2.5 text-[9px] font-medium uppercase tracking-widest text-black/35">
        sin foto
      </span>
    </div>
  );
}
