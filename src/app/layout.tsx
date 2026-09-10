import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TiendaProvider } from "@/context/TiendaContext";
import { SiteChrome } from "@/components/SiteChrome";
import { MARCA, SITIO } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: {
    default: `${MARCA.nombre} — ${MARCA.tagline}`,
    template: `%s · ${MARCA.nombre}`,
  },
  description: MARCA.descripcion,
  keywords: [
    "lencería",
    "lencería Perú",
    "lencería Lima",
    "sets de lencería",
    "lencería por mayor",
  ],
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: MARCA.nombre,
    title: `${MARCA.nombre} — ${MARCA.tagline}`,
    description: MARCA.descripcion,
    url: SITIO,
    // Archivo estático (no ruta generada) para que GitHub Pages lo sirva
    // como image/png; si no, WhatsApp no muestra la vista previa.
    images: [
      {
        url: `${SITIO}/logo.png`,
        width: 1200,
        height: 1200,
        alt: `${MARCA.nombre} — ${MARCA.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var r=document.documentElement;var t=localStorage.getItem('raiz.tema');if(t==='dark')r.setAttribute('data-theme','dark');var a=localStorage.getItem('raiz.acento');if(a){r.style.setProperty('--acento',a);var n=parseInt(a.slice(1),16),R=Math.round((n>>16&255)*0.85),G=Math.round((n>>8&255)*0.85),B=Math.round((n&255)*0.85);r.style.setProperty('--acento-fuerte','#'+[R,G,B].map(function(x){return('0'+x.toString(16)).slice(-2)}).join(''));}}catch(e){}",
          }}
        />
        <TiendaProvider>
          <SiteChrome>{children}</SiteChrome>
        </TiendaProvider>
      </body>
    </html>
  );
}
