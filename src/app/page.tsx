import Link from "next/link";
import Image from "next/image";
import { productos } from "@/data/productos";
import { ProductoCard } from "@/components/ProductoCard";
import { ComoComprar } from "@/components/ComoComprar";
import { Separador } from "@/components/Separador";
import { SeccionConFondo } from "@/components/SeccionConFondo";
import { PromosCarrusel } from "@/components/PromosCarrusel";
import { BASE_PATH, FONDOS, MINIMO_MAYORISTA } from "@/lib/config";

const BENEFICIOS = [
  {
    titulo: "DISEÑOS",
    sub: "EXCLUSIVOS",
    icon: (
      <svg className="w-5 h-5 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m0-18l-4 4m4-4l4 4M5 12h14" />
      </svg>
    ),
  },
  {
    titulo: "ENVÍOS",
    sub: "TODO EL PAÍS",
    icon: (
      <svg className="w-5 h-5 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8" />
      </svg>
    ),
  },
  {
    titulo: "MAYORISTA",
    sub: `DESDE ${MINIMO_MAYORISTA}U`,
    icon: (
      <svg className="w-5 h-5 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const TEXTOS_CINTA = [
  "DISEÑOS EXCLUSIVOS",
  "HASTA 50% OFF POR MAYOR",
  "COMPRA SEGURA Y DISCRETA",
  "ENVÍOS A TODO EL PAÍS",
  "CALIDAD PREMIUM",
];

export default function Home() {
  const destacados = productos.filter((p) => p.destacado);

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* HERO PRINCIPAL */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-background text-foreground overflow-hidden flex items-center">
        {/* Mobile: foto de fondo completa, atenuada */}
        <div className="absolute inset-0 lg:hidden pointer-events-none z-0">
          <Image
            src={`${BASE_PATH}/fondo-hero.jpg`}
            alt="Conjunto de Raíz Prohibida"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background/90" />
        </div>

        {/* Desktop: panel a la derecha, foto rellenando todo el panel */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 xl:w-[45%] pointer-events-none z-0 overflow-hidden">
          <Image
            src={`${BASE_PATH}/fondo-hero.jpg`}
            alt="Conjunto de Raíz Prohibida"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>

        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-superficie border border-borde px-3 py-1 text-xs text-tenue">
                <span className="h-2 w-2 rounded-full bg-acento animate-pulse" />
                <span className="font-medium tracking-wide uppercase text-[11px]">
                  LENCERÍA · LIMA, PERÚ
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-foreground">
                SIÉNTETE <br />
                AUTÉNTICA <br />
                <span className="text-acento">Y PODEROSA</span>
              </h1>

              <p className="max-w-xl text-tenue text-sm sm:text-base leading-relaxed">
                Sets pensados para que te sientas segura y auténtica. Elegí tu talle, armá tu pedido y lo cerramos por WhatsApp — con envíos a todo el país.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/productos"
                  className="inline-flex h-12 items-center justify-center rounded-none bg-acento px-6 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-95"
                >
                  VER CATÁLOGO →
                </Link>
                <Link
                  href="/productos?ver=mayorista"
                  className="inline-flex h-12 items-center justify-center rounded-none border border-borde bg-superficie px-6 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-superficie/80"
                >
                  PRECIOS MAYORISTAS
                </Link>
              </div>

              <div className="border-t border-borde pt-6 mt-8" />

              <div className="grid grid-cols-3 gap-4 pt-2">
                {BENEFICIOS.map((b) => (
                  <div key={b.titulo} className="space-y-1">
                    <div className="mb-2">{b.icon}</div>
                    <p className="text-[11px] font-semibold text-tenue uppercase tracking-wider">
                      {b.titulo}
                    </p>
                    <p className="text-xs font-black uppercase text-foreground tracking-wide">
                      {b.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10px] font-bold tracking-[0.4em] text-tenue/50 uppercase select-none z-30 pointer-events-none">
          SEGURIDAD · AMOR PROPIO · ESENCIA
        </div>
      </section>

      {/* CINTA DESPLAZABLE */}
      <div className="bg-acento text-white py-3.5 overflow-hidden select-none">
        <div className="animate-marquee-loop whitespace-nowrap flex items-center gap-8 text-sm font-black uppercase tracking-wider">
          {[...TEXTOS_CINTA, ...TEXTOS_CINTA, ...TEXTOS_CINTA, ...TEXTOS_CINTA].map((texto, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{texto}</span>
              <span className="text-white/60 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Separador />

      <PromosCarrusel />

      <Separador />

      {/* PRODUCTOS DESTACADOS */}
      <SeccionConFondo fondo={FONDOS.destacados} className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-acento font-semibold mb-1">
                EL CATÁLOGO
              </p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
                DESTACADOS
              </h2>
            </div>
            <Link
              href="/productos"
              className="shrink-0 text-sm font-bold uppercase tracking-wider text-tenue transition-colors hover:text-acento"
            >
              Ver todo ↗
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {destacados.map((producto) => (
              <ProductoCard key={producto.slug} producto={producto} />
            ))}
          </div>
        </div>
      </SeccionConFondo>

      <Separador />

      <ComoComprar />

      <Separador />

      {/* SECCIÓN MAYORISTA */}
      <section className="relative w-full lg:min-h-[680px] bg-black text-white flex items-center justify-center overflow-hidden py-16 sm:py-24 px-4">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acento/20 blur-[140px]" />
        </div>

        <div className="relative z-20 mx-auto max-w-3xl text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-acento/60 hidden sm:block" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-white/90">
              SEGURIDAD · AMOR PROPIO
            </p>
            <span className="h-[1px] w-12 bg-acento/60 hidden sm:block" />
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">
            COMPRÁ <span className="text-acento">MAYORISTA</span>
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
            Sets de lencería al mejor precio y calidad. Accedé a precio mayorista desde solo {MINIMO_MAYORISTA} unidades.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 pb-2 border-y border-white/10 max-w-2xl mx-auto">
            <div className="flex sm:flex-col items-center justify-center gap-3 text-left sm:text-center">
              <svg className="w-6 h-6 text-acento shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8" />
              </svg>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-white">ENVÍOS A</p>
                <p className="text-[11px] font-semibold text-zinc-400 uppercase">TODO EL PAÍS</p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center justify-center gap-3 text-left sm:text-center">
              <svg className="w-6 h-6 text-acento shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-white">CALIDAD</p>
                <p className="text-[11px] font-semibold text-zinc-400 uppercase">GARANTIZADA</p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center justify-center gap-3 text-left sm:text-center">
              <svg className="w-6 h-6 text-acento shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-white">AMPLIA</p>
                <p className="text-[11px] font-semibold text-zinc-400 uppercase">VARIEDAD</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/productos"
              className="inline-flex h-12 items-center justify-center rounded-none bg-acento px-8 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              VER CATÁLOGO →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
