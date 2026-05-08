import { MessageCircle, FileText, Wrench, Truck } from "lucide-react";
import { useAudience } from "./audience-context";

const stepsB2C = [
  { icon: MessageCircle, t: "Contanos", d: "Por WhatsApp o formulario. Mandás fotos del lugar." },
  { icon: FileText, t: "Medimos sin cargo", d: "Vamos a tu casa, medimos y armamos presupuesto cerrado." },
  { icon: Wrench, t: "Fabricamos", d: "Producción en taller propio en Calle 43, La Plata." },
  { icon: Truck, t: "Instalamos", d: "Si algo no queda como acordamos, se arregla. Siempre fue así." },
];

const stepsB2B = [
  { icon: FileText, t: "Plano + cantidades", d: "Nos pasás el plano o pieza a fabricar y la cantidad." },
  { icon: MessageCircle, t: "Cotización en el día", d: "Te respondemos con plazo, precio y condiciones." },
  { icon: Wrench, t: "Producción", d: "Corte, plegado y soldadura en serie con calidad estable." },
  { icon: Truck, t: "Entrega 3-4 días", d: "Despachamos a obra o retirás directo en taller." },
];

export function Process() {
  const { audience } = useAudience();
  const steps = audience === "mayorista" ? stepsB2B : stepsB2C;

  return (
    <section id="proceso" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
            Cómo trabajamos
          </span>
          <h2 className="font-display uppercase text-navy text-4xl md:text-5xl leading-[0.95]">
            Cuatro pasos. Cero sorpresas.
          </h2>
          <p className="mt-4" style={{ color: "#3A3A3A" }}>
            Mismo método para particulares y obras. Cambia la cabeza del trabajo, no el rigor.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 relative">
          <div
            className="hidden md:block absolute top-10 left-12 right-12 h-px"
            style={{ borderTop: "1px dashed rgba(244,121,32,0.30)" }}
          />
          {steps.map((s, i) => (
            <div key={s.t} className="relative text-center">
              <div className="relative inline-grid place-items-center w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 corner-cut bg-navy" />
                <s.icon className="relative w-7 h-7 text-white" />
                <span className="absolute -top-2 -right-2 w-7 h-7 grid place-items-center corner-cut bg-primary text-white font-display tabular text-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display uppercase text-navy text-xl">{s.t}</h3>
              <p className="text-sm mt-1.5 max-w-[220px] mx-auto" style={{ color: "#3A3A3A" }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
