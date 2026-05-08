import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Ruler, Clock } from "lucide-react";
import { waLink } from "@/lib/promet";

const services = [
  {
    title: "Portones",
    benefit: "Seguridad sin compromisos.",
    desc: "Corredizos, batientes y seccionales. Refuerzo estructural y cerraduras de alta seguridad.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=60&w=600",
    msg: "Hola Promet! Quiero un portón a medida.",
  },
  {
    title: "Puertas blindadas",
    benefit: "El primer escudo de tu casa.",
    desc: "Puertas de seguridad y de acceso, fabricadas a medida con marco reforzado.",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=60&w=600",
    msg: "Hola Promet! Necesito presupuesto para puerta blindada.",
  },
  {
    title: "Rejas y aberturas",
    benefit: "Diseño que protege.",
    desc: "Rejas para ventanas, balcones y frentes, con líneas modernas o clásicas.",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=60&w=600",
    msg: "Hola Promet! Quiero presupuesto para rejas a medida.",
  },
  {
    title: "Escaleras",
    benefit: "Resistencia y diseño que duran.",
    desc: "Rectas, en caracol e industriales. Interior y exterior, con barandas a medida.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=60&w=600",
    msg: "Hola Promet! Quiero presupuesto para una escalera.",
  },
  {
    title: "Techos y estructuras",
    benefit: "Sin filtraciones. Sin sorpresas.",
    desc: "Estructuras metálicas para viviendas, locales y depósitos. Cálculo y montaje.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=60&w=600",
    msg: "Hola Promet! Consulto por techo o estructura metálica.",
  },
];

const benefits = [
  { icon: Ruler, label: "Medición a domicilio sin cargo" },
  { icon: Clock, label: "Presupuesto en menos de 24 hs" },
  { icon: ShieldCheck, label: "Respaldo de 60 años en cada trabajo" },
];

export function ServicesB2C() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
            Para tu casa
          </span>
          <h2 className="font-display uppercase text-navy text-4xl md:text-6xl leading-[0.95]">
            Si entra a tu casa,
            <br />
            <span className="text-forge-gradient">lo hacemos nosotros.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg max-w-2xl" style={{ color: "#3A3A3A" }}>
            Cinco familias de productos pensados para que tu casa sea más segura, más
            prolija y más durable. Todo fabricado en La Plata, con el respaldo de 60 años.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-light border text-navy text-xs font-semibold"
                style={{ borderColor: "rgba(30,45,107,0.10)" }}
              >
                <b.icon className="w-3.5 h-3.5 text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={waLink(s.msg, `b2c_${s.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: Math.min(i, 3) * 0.06, duration: 0.4, ease: "easeOut" }}
              className="group block bg-white border rounded-lg overflow-hidden transition-all hover:-translate-y-1"
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
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(30,45,107,0.35)" }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display uppercase text-2xl text-navy leading-tight">
                  {s.title}
                </h3>
                <p className="text-primary font-semibold text-sm mt-1">{s.benefit}</p>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: "#3A3A3A" }}>
                  {s.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-wider">
                  Pedir presupuesto
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
