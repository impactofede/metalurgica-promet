
# Promet — Rediseño UX/UI + Copy de ventas (B2C + B2B)

## Diagnóstico rápido del sitio actual

Lo que funciona: 60 años de historia, WhatsApp como canal principal, badges de confianza, secciones de proceso y testimonios.

Lo que falla:
- **Una sola voz para dos públicos muy distintos.** Un dueño de casa busca seguridad, plazo y precio cerrado. Un herrero/constructor busca capacidad productiva, precios por mayor, plazos de obra y servicios complementarios (corte, plegado, soldadura, materia prima). Hoy todo el copy le habla solo al primero.
- Hero genérico ("Tu casa segura"): no segmenta, no muestra capacidad de taller.
- Servicios en una sola lista plana, sin diferenciar producto terminado vs. servicio de taller.
- Falta prueba social específica B2B (logos de constructoras, talleres, obras).
- CTA único (WhatsApp). Para B2B falta lead magnet (lista de precios mayorista, ficha técnica, cotizador rápido por planos).
- Tipografía y color OK pero todo el peso visual en naranja brillante; falta jerarquía y "peso industrial".
- Sin SEO local fuerte (La Plata + términos como "metalúrgica mayorista", "corte láser La Plata").

## Estrategia de ventas

**Posicionamiento:** "Metalúrgica Promet — 60 años fabricando en La Plata. Para tu casa o tu obra."

**Doble embudo desde el hero:**
- **Particulares** → portones, puertas, rejas, escaleras, techos. Dolor: seguridad, prolijidad, cumplir plazo. CTA: presupuesto WhatsApp + medición a domicilio gratis.
- **Herreros y constructores** → corte, plegado, soldadura, perfilería, herrajes, fabricación a plano. Dolor: cumplir obra, precio mayorista, plazo productivo. CTA: cotizar por plano + lista de precios mayorista.

**Disparadores psicológicos por audiencia:**
- B2C: garantía escrita, 60 años, medición sin cargo, "respuesta <24h", testimonios con foto, casas terminadas.
- B2B: capacidad de taller (m²/máquinas), plazos productivos, cuenta corriente, descuentos por volumen, logos de obras, fichas técnicas descargables.

## Sistema visual nuevo

**Concepto:** *Industrial premium* — peso, oficio, confianza. Menos "agencia tech", más "taller que sabe lo que hace".

- **Color (oklch en `src/styles.css`):**
  - `background` casi-negro acerado (no slate-blue)
  - `foreground` blanco hueso
  - `primary` naranja forja profundo (más rojizo que el actual #D97706, tipo brasa)
  - `accent` acero pulido (gris frío metálico)
  - `surface` para el modo "claro" en secciones B2C: blanco hueso con grano
  - Tokens: `--gradient-forge`, `--shadow-steel`, `--texture-grain`
- **Tipografía:** display condensado y rotundo para titulares (Barlow Condensed o Anton 800), body en Inter/Manrope. Números en tabular para specs.
- **Layout:** grilla 12 col con asimetrías; secciones alternando dark (taller) / light (showroom). Secciones B2B con fondo oscuro + datos técnicos; B2C con fondo claro + fotos de obra terminada.
- **Detalles:** chamfered corners (4–6px), líneas técnicas finas, badges con ícono de tornillo/soldadura, micro-grano metálico, sparks sutiles solo en hero.
- **Motion:** entradas cortas y firmes (140–200ms, easing snappy). Sin parallax exagerado.

## Estructura nueva (single page con anchors internos + 1 ruta extra)

`/` (home con doble entrada):

1. **Navbar** sticky con switch "Particulares / Herreros y Constructores" que cambia CTAs y resalta secciones relevantes.
2. **Hero dividido (split)** — H1 "60 años forjando en La Plata. Para tu casa o tu obra." Dos tarjetas grandes: *Soy particular* / *Soy herrero o constructor*, cada una con su CTA.
3. **Banda de confianza** — años, m² de taller, obras entregadas, clientes B2B activos (números reales o aproximados del zip).
4. **Sección Particulares** (id `particulares`, fondo claro): portones, puertas, rejas, escaleras, techos. Cada card con beneficio + foto + CTA WhatsApp con mensaje precargado.
5. **Sección Herreros & Constructores** (id `mayorista`, fondo oscuro): servicios de taller (corte, plegado, soldadura MIG/TIG, perfiles, herrajes, fabricación a plano), tabla de capacidades (espesores, largos), CTA "Cotizar por plano" + "Pedir lista mayorista".
6. **Galería / Casos** con filtro por audiencia (Casa / Obra).
7. **Cómo trabajamos** — proceso adaptado por audiencia (2 columnas).
8. **Garantía Promet** — bloque de garantía escrita, política de plazos, resolución de errores.
9. **Testimonios** — 2 columnas: clientes particulares (con foto de la casa) + clientes B2B (logo + nombre del responsable).
10. **FAQ** — separadas por audiencia (precio, plazos, envíos, cuenta corriente, garantía, medición).
11. **Contacto** — formulario con campo "Soy: particular / herrero / constructor / arquitecto" que cambia los siguientes campos. WhatsApp, teléfono, dirección Calle 43, mapa, horarios.
12. **Footer** industrial.

Ruta adicional `/mayorista` (opcional, decidible al implementar): landing dedicada B2B con lead magnet "Lista de precios mayorista 2026" (descarga tras dejar email/WhatsApp).

## Copy clave (muestras)

- **Hero H1:** "60 años forjando confianza en La Plata."
- **Hero sub:** "Fabricamos a medida para tu casa. Producimos a escala para tu obra."
- **Card B2C:** "Para tu casa — Portones, rejas y aberturas que duran décadas. Medimos en tu domicilio sin cargo."
- **Card B2B:** "Para herreros y constructores — Corte, plegado y fabricación a plano. Plazos de obra, precio mayorista, cuenta corriente."
- **CTA primario B2C:** "Pedir presupuesto por WhatsApp"
- **CTA primario B2B:** "Cotizar por plano" / "Descargar lista mayorista"
- **Garantía:** "Si algo no quedó como acordamos, lo resolvemos. Por escrito, desde 1960."

## Detalles técnicos

- Stack: TanStack Start ya configurado. Crear `src/routes/index.tsx` con todas las secciones y, si se decide, `src/routes/mayorista.tsx` con `head()` propio.
- Componentes nuevos en `src/components/promet/`: `Navbar`, `HeroSplit`, `AudienceSwitch`, `TrustBand`, `ServicesB2C`, `ServicesB2B`, `CapacitiesTable`, `Gallery`, `Process`, `Guarantee`, `Testimonials`, `FAQ`, `ContactForm`, `Footer`, `WhatsAppFAB`, `MobileStickyCTA`.
- Reutilizar componentes shadcn ya presentes (`button`, `card`, `accordion`, `tabs`, `dialog`, `form`, `input`, `textarea`, `select`).
- Hooks: portar `use-whatsapp` (mensaje + número). Número y datos: tomados del zip.
- Imágenes: usar las URLs de Unsplash que trae el zip como placeholders; fácil de reemplazar luego por fotos reales.
- Animaciones: `framer-motion` (instalar si falta) con duraciones cortas.
- Tokens en `src/styles.css` en `oklch`; nada de colores hardcodeados en componentes.
- SEO: `head()` por ruta con title, description, og:title, og:description, JSON-LD `LocalBusiness` (dirección Calle 43, La Plata, teléfono, horarios).
- Accesibilidad: contraste AA en dark, focus-visible, aria-labels en CTAs WhatsApp, `prefers-reduced-motion`.
- Performance: imágenes con `loading="lazy"`, dimensiones explícitas, sin librerías pesadas extra.

## Entregable de esta iteración

Home rediseñada (doble audiencia), sistema de tokens nuevo, todos los componentes nuevos, copy de ventas aplicado, WhatsApp FAB y sticky mobile CTA. Sin backend (form de contacto vía WhatsApp + `mailto:` por ahora). La landing `/mayorista` queda como paso opcional para una segunda iteración.
