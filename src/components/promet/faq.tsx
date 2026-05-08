import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Hacen medición a domicilio?",
    a: "Sí, sin cargo dentro de La Plata y alrededores. Coordinamos por WhatsApp el día y horario que te quede mejor.",
  },
  {
    q: "¿En cuánto tiempo me dan el presupuesto?",
    a: "Después de medir, en menos de 24 hs te enviamos el presupuesto cerrado por WhatsApp. Sin sorpresas posteriores.",
  },
  {
    q: "¿Trabajan con herreros y constructoras?",
    a: "Sí. Hacemos corte, plegado y cilindrado para herreros, constructoras y arquitectos. Mandanos las medidas y entregamos en 3-4 días.",
  },
  {
    q: "¿Cómo es el proceso de pago?",
    a: "Para particulares: una seña al confirmar y el resto contra entrega. Para trabajos del rubro coordinamos las condiciones por WhatsApp.",
  },
  {
    q: "¿Puedo mandar medidas por WhatsApp?",
    a: "Sí, es la forma más rápida. Mandanos las medidas o un croquis por foto y te respondemos con el precio en el día.",
  },
  {
    q: "¿Hacen trabajos en cantidad?",
    a: "Sí, especialmente corte y plegado. Muchos herreros y constructoras nos mandan sus listados de corte y producimos todo junto. Consultanos volumen y precio.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
            Preguntas frecuentes
          </span>
          <h2 className="font-display uppercase text-navy text-4xl md:text-5xl leading-[0.95]">
            Respuestas claras,
            <br />
            <span className="text-forge-gradient">sin vueltas.</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="border corner-cut transition bg-white"
                style={{ borderColor: isOpen ? "#F47920" : "rgba(30,45,107,0.10)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display uppercase text-navy text-lg md:text-xl leading-tight">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm md:text-base leading-relaxed" style={{ color: "#3A3A3A" }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
