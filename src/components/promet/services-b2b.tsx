import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/promet";

const services = [
  {
    title: "Corte de chapa",
    desc: "Chapa de 0,5 mm a 3,16 mm (chapa 25). Acero, inoxidable, aluminio y galvanizado. Piezas únicas o producción en serie.",
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Plegado",
    desc: "Encastre de perfilería para marcos, canaletas, bandejas y campanas. En cantidad y a medida. Calidad de plegado que se nota.",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Cilindrado",
    desc: "Cilindrado de chapa para tanques, ductos y piezas curvas. Ajustamos al diámetro que necesite tu obra.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Soldadura MIG / TIG",
    desc: "Soldadores con experiencia. Estructuras críticas, acero inoxidable y reparaciones.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Fabricación a plano",
    desc: "Tomamos tu plano, lo fabricamos y entregamos listo para montaje en obra.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Racks y estanterías",
    desc: "Baldas, racks tipo Nini y estantes para galpones y comercios. El trabajo con más margen y el que más se repite.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=60&w=600",
  },
];

const capacities = [
  { label: "Espesor de corte", value: "hasta 12mm" },
  { label: "Largo de plegado", value: "hasta 3 m" },
  { label: "Materiales", value: "Acero, inox y galvanizado" },
  { label: "Entrega en", value: "3-4 días" },
];

export function ServicesB2B() {
  return (
    <section id="mayorista" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <span className="inline-block text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
              Para herreros y obras
            </span>
            <h2 className="font-display uppercase text-navy text-4xl md:text-6xl leading-[0.95]">
              Mandá las medidas.
              <br />
              <span className="text-forge-gradient">En 3-4 días lo tenés.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg max-w-2xl" style={{ color: "#3A3A3A" }}>
              Corte, plegado y cilindrado con entrega en 3-4 días. Mandá tus medidas
              por WhatsApp y te cotizamos hoy.
            </p>
          </div>

          <div
            className="lg:col-span-5 grid grid-cols-2 gap-3 p-5 corner-cut bg-light border"
            style={{ borderColor: "rgba(30,45,107,0.10)" }}
          >
            {capacities.map((c) => (
              <div key={c.label} className="border-l-2 border-primary pl-3">
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {c.label}
                </div>
                <div className="font-display tabular text-navy text-xl mt-0.5 font-bold">
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: Math.min(i, 3) * 0.06, duration: 0.4, ease: "easeOut" }}
              className="group rounded-lg overflow-hidden bg-white border transition-all hover:-translate-y-1"
              style={{
                borderColor: "rgba(30,45,107,0.10)",
                borderBottomWidth: 3,
                boxShadow: "0 4px 14px -8px rgba(30,45,107,0.18)",
              }}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "rgba(30,45,107,0.35)" }} />
              </div>
              <div className="p-6">
                <h3 className="font-display uppercase text-navy text-2xl leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: "#3A3A3A" }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <a
            href={waLink(
              "Hola Promet! Necesito cotizar trabajos a plano. Te paso archivos por acá.",
              "b2b_cotizar",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 corner-cut bg-primary text-white flex items-center justify-between gap-4 hover:brightness-110 transition"
          >
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] opacity-80">
                Entrega en 3-4 días
              </div>
              <div className="font-display uppercase text-2xl md:text-3xl mt-1 text-white">
                Mandanos tus medidas
              </div>
              <div className="text-sm opacity-90 mt-1">
                Mandanos tus archivos por WhatsApp y te respondemos en el día.
              </div>
            </div>
            <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition shrink-0" />
          </a>
          <a
            href={waLink(
              "Hola Promet! Soy del rubro y quiero consultar precios.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 corner-cut bg-white border flex items-center justify-between gap-4 hover:border-primary/60 transition"
            style={{ borderColor: "rgba(30,45,107,0.15)" }}
          >
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Atención directa
              </div>
              <div className="font-display uppercase text-2xl md:text-3xl mt-1 text-navy">
                Consultar precios
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Consultanos y te pasamos precios actualizados por WhatsApp.
              </div>
            </div>
            <FileText className="w-7 h-7 text-primary shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
