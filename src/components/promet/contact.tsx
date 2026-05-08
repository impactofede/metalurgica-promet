import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PROMET, waLink } from "@/lib/promet";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export function Contact() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nombre = encodeURIComponent(name.trim() || "—");
    const necesidad = encodeURIComponent(need.trim() || "consulta");
    const mensaje = `Hola%20Promet%21%20Soy%20${nombre}%20y%20necesito%3A%20${necesidad}`;
    window.open(`https://wa.me/${PROMET.whatsappNumber}?text=${mensaje}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="inline-block text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
              Hablemos
            </span>
            <h2 className="font-display uppercase text-navy text-4xl md:text-5xl leading-[0.95]">
              Pedí tu presupuesto
              <br />
              <span className="text-forge-gradient">hoy mismo.</span>
            </h2>
            <p className="mt-4" style={{ color: "#3A3A3A" }}>
              Más de 50 familias y empresas nos escriben cada semana. Te respondemos en
              menos de 24 hs hábiles.
            </p>

            <div className="mt-8 space-y-4">
              <InfoRow icon={MapPin} label="Taller en La Plata" value={PROMET.address} href={PROMET.mapsUrl} />
              <InfoRow icon={MessageCircle} label="WhatsApp" value={PROMET.phoneDisplay} href={waLink("Hola Promet! Vi su web y quiero pedir un presupuesto.")} />
              <InfoRow icon={Phone} label="Teléfono" value={PROMET.phoneDisplay} href="tel:+5492213611947" />
              <InfoRow icon={Clock} label="Horario" value={PROMET.hours} />
            </div>
          </div>

          <form
            onSubmit={submit}
            className="lg:col-span-7 p-6 md:p-8 corner-cut bg-white border"
            style={{ borderColor: "rgba(30,45,107,0.10)" }}
          >
            <p className="mb-5 italic" style={{ color: "#7A7A78", fontSize: 14 }}>
              Sin formularios complicados. Solo contanos qué necesitás y te respondemos hoy.
            </p>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.15em] text-navy font-bold mb-1.5">
                Nombre
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Tu nombre"
                className="w-full bg-light border rounded px-4 py-3 text-navy focus:border-primary focus:outline-none transition"
                style={{ borderColor: "rgba(30,45,107,0.15)" }}
              />
            </div>

            <div className="mt-4">
              <label className="block text-[11px] uppercase tracking-[0.15em] text-navy font-bold mb-1.5">
                ¿Qué necesitás?
              </label>
              <textarea
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                rows={3}
                required
                placeholder="Ej: portón corredizo para cochera doble, ancho aprox 4m"
                className="w-full bg-light border rounded px-4 py-3 text-navy focus:border-primary focus:outline-none transition resize-none"
                style={{ borderColor: "rgba(30,45,107,0.15)" }}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-4 text-white font-bold uppercase tracking-wider rounded hover:brightness-110 transition"
              style={{ backgroundColor: "#F47920" }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
                <path d={WA_PATH} />
              </svg>
              Enviar por WhatsApp →
            </button>

            <p className="text-center mt-3" style={{ color: "#7A7A78", fontSize: 13 }}>
              📱 O escribinos directo:{" "}
              <a
                href={waLink("Hola Promet! Vi su web y quiero pedir un presupuesto.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                {PROMET.phoneDisplay}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const isExternal = href?.startsWith("http");
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href, ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {})}
      className="flex items-start gap-3 p-3 rounded border bg-white hover:border-primary/40 transition"
      style={{ borderColor: "rgba(30,45,107,0.10)" }}
    >
      <div className="w-9 h-9 grid place-items-center corner-cut bg-light shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="text-navy text-sm font-medium leading-snug">{value}</div>
      </div>
    </Wrap>
  );
}
