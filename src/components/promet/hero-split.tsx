import { motion } from "framer-motion";
import { Home, HardHat, ArrowRight, Check } from "lucide-react";
import { useAudience } from "./audience-context";
import { waLink } from "@/lib/promet";

export function HeroSplit() {
  const { setAudience } = useAudience();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-24 pb-16 overflow-hidden bg-navy"
    >
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244,121,32,0.18) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ borderColor: "#F47920", color: "#F47920" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ember-pulse" />
            La Plata · desde 1960
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 font-display uppercase text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
          >
            +60 años en La Plata.
            <br />
            El trabajo habla solo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Fabricamos a medida para tu casa y producimos a escala para tu obra.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <AudienceCard
            id="particular"
            onClick={() => setAudience("particular")}
            icon={<Home className="w-6 h-6" />}
            tag="Para tu casa"
            title="Soy particular"
            desc="Portones, puertas, rejas, escaleras y techos. Te medimos gratis en La Plata, te presupuestamos en el día y arrancamos cuando digas."
            bullets={["Respaldo Promet", "Medición sin cargo", "Plazo cerrado"]}
            cta="Pedir presupuesto"
            href={waLink("Hola Promet! Soy particular y quiero un presupuesto.")}
          />
          <AudienceCard
            id="mayorista"
            onClick={() => setAudience("mayorista")}
            icon={<HardHat className="w-6 h-6" />}
            tag="Para tu obra"
            title="Soy herrero o constructor"
            desc="Corte, plegado y cilindrado. Mandá medidas, cotizamos en el día, entregamos en 3-4 días."
            bullets={["Cotización en el día", "Mandanos tus medidas", "Entrega 3-4 días"]}
            cta="Cotizar mi obra"
            href={waLink("Hola Promet! Soy del rubro y necesito cotizar.")}
          />
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  onClick,
  icon,
  tag,
  title,
  desc,
  bullets,
  cta,
  href,
}: {
  id: string;
  onClick: () => void;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  href: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5 }}
      onMouseEnter={onClick}
      className="relative p-7 md:p-9 corner-cut bg-white border border-border hover:border-primary/60 transition-all hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-steel)" }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 grid place-items-center corner-cut bg-forge-gradient text-white">
          {icon}
        </div>
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          {tag}
        </span>
      </div>
      <h2 className="font-display uppercase text-3xl md:text-4xl leading-tight mb-3 text-navy">
        {title}
      </h2>
      <p className="text-sm md:text-base mb-5" style={{ color: "#3A3A3A" }}>
        {desc}
      </p>
      <ul className="space-y-1.5 mb-6">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm" style={{ color: "#3A3A3A" }}>
            <Check className="w-4 h-4 text-primary" />
            {b}
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold uppercase text-sm tracking-wider rounded hover:brightness-110 transition group"
      >
        {cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
      </a>
    </motion.div>
  );
}
