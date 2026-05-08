import { MapPin, Phone, Clock } from "lucide-react";
import { PROMET, waLink } from "@/lib/promet";
import logo from "@/assets/promet-logo.png";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const services = [
  "Portones",
  "Puertas y Rejas",
  "Escaleras",
  "Techos y Estructuras",
  "Corte de Chapas",
  "Plegado y Cilindrado",
];

const nav = [
  { label: "Inicio", href: "#top" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const wa = waLink("Hola Promet! Vi su web y quiero pedir un presupuesto.");
  return (
    <footer style={{ backgroundColor: "#1E2D6B", borderTop: "3px solid #F47920" }} className="pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* COL 1 — BRAND */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Promet" className="w-10 h-10 object-contain" />
              <div>
                <div className="font-display font-black text-white tracking-wider text-xl">PROMET</div>
                <div className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Metalúrgica · 1960
                </div>
              </div>
            </div>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
              Metalúrgica Promet. Desde 1960 en Calle 43, La Plata.
            </p>
          </div>

          {/* COL 2 — SERVICIOS */}
          <div>
            <h3 className="text-white uppercase font-bold mb-3" style={{ fontSize: 11, letterSpacing: "0.18em" }}>
              Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-white transition" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — NAVEGACIÓN */}
          <div>
            <h3 className="text-white uppercase font-bold mb-3" style={{ fontSize: 11, letterSpacing: "0.18em" }}>
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white transition" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — CONTACTO */}
          <div>
            <h3 className="text-white uppercase font-bold mb-3" style={{ fontSize: 11, letterSpacing: "0.18em" }}>
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={PROMET.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Calle 43 e/ 148 y 149, La Plata
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+5492213611947" className="hover:text-white">
                  221 361-1947
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Lun-Vie 8 a 18hs · Sáb-Dom cerrado</span>
              </li>
            </ul>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded text-white font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5" aria-hidden="true">
                <path d={WA_PATH} />
              </svg>
              Escribinos →
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row gap-3 justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", fontSize: 12 }}
        >
          <div>© {new Date().getFullYear()} Metalúrgica Promet LP</div>
          <div>La Plata · Buenos Aires · Argentina</div>
        </div>
      </div>
    </footer>
  );
}
