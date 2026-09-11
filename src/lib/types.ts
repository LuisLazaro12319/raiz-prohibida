export type Categoria =
  | "sets"
  | "bodys"
  | "babydolls"
  | "bralettes"
  | "accesorios";

export type Modo = "minorista" | "mayorista";

export type Color = {
  /** Nombre visible, ej: "Beige arena" */
  nombre: string;
  /** Hex usado para el swatch y para el placeholder mientras no haya fotos. */
  hex: string;
};

export type Producto = {
  slug: string;
  nombre: string;
  categoria: Categoria;
  descripcion: string;
  /** Precio unitario de venta al público. */
  precioMinorista: number;
  /** Precio unitario por cantidad (a partir de MINIMO_MAYORISTA unidades). */
  precioMayorista: number;
  talles: string[];
  colores: Color[];
  /** Composición / detalle de la prenda, se muestra en la ficha. */
  detalle: string;
  destacado?: boolean;
  /** Si true, aparece en el filtro "Ofertas" del catálogo. */
  oferta?: boolean;
  sinStock?: boolean;
  /** Si true, hay una foto real en /public/prod/<slug>.jpg. Si no, se usa la
   *  silueta de PrendaPlaceholder. */
  foto?: boolean;
  /** Nombres de archivo extra en /public/prod/ (ej. el mismo modelo en otro
   *  color). Se muestran como miniaturas en la ficha, independientes del
   *  selector de Color — no cambian solas al elegir un color. */
  fotosExtra?: string[];
};

export type ItemCarrito = {
  slug: string;
  talle: string;
  color: string;
  cantidad: number;
};
