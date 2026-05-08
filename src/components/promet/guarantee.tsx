import { ShieldCheck, Clock, Wrench, FileSignature } from "lucide-react";
import { waLink } from "@/lib/promet";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Respaldo de 60 años",
    desc: "No necesitamos un papel. Necesitamos que vuelvas y nos recomiendes.",
  },
  {
    icon: Clock,
    title: "Cumplimos los plazos",
    desc: "El día que acordamos, entregamos. Así venimos hace 60 años.",
  },
  {
    icon: Wrench,
    title: "Postventa real",
    desc: "Si algo necesita ajuste después, nos llamás y lo resolvemos. No hay letra chica.",
  },
  {
    icon: FileSignature,
    title: "Presupuesto cerrado",
    desc: "El número que te damos es el número final. Sin sorpresas, sin adicionales.",
  },
];

export function Guarantee() {
  return (
    <section id="nosotros" className="py-20 md:py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
              Garantía Promet
            </span>
            <h2 className="font-display uppercase text-navy text-4xl md:text-5xl leading-[0.95]">
              Si algo no quedó bien,
              <br />
              <span className="text-forge-gradient">lo resolvemos.</span>
            </h2>
            <p className="mt-5 text-base" style={{ color: "#3A3A3A" }}>
              Desde 1960. La misma familia, en el mismo taller de Calle 43.
              Nuestra palabra es nuestra firma.
            </p>
            <a
              href={waLink("Hola Promet! Quiero hablar con ustedes.", "garantia")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-semibold uppercase text-sm tracking-wider rounded hover:brightness-110 transition"
            >
              Escribinos al taller →
            </a>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-5 corner-cut bg-white border transition"
                style={{ borderColor: "rgba(30,45,107,0.10)" }}
              >
                <p.icon className="w-6 h-6 text-primary" />
                <div className="mt-3 font-display uppercase text-xl text-navy">
                  {p.title}
                </div>
                <p className="text-sm mt-1.5" style={{ color: "#3A3A3A" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
