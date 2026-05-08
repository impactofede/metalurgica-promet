import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { waLink } from "@/lib/promet";
import logo from "@/assets/promet-logo.png";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const links = [
  { id: "servicios", label: "Servicios" },
  { id: "trabajos", label: "Trabajos" },
  { id: "nosotros", label: "Nosotros" },
  { id: "proceso", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when overlay open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const wa = waLink("Hola Promet! Vi su web y quiero pedir un presupuesto.");

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-white/95 backdrop-blur-md" : "bg-transparent"}`}
        style={scrolled ? { borderBottom: "1px solid rgba(30,45,107,0.08)" } : undefined}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <a href="#top" onClick={(e) => handleNav(e, "top")} className="flex items-center gap-2.5">
            <img src={logo} alt="Promet" className="w-9 h-9 object-contain" />
            <div className="leading-tight">
              <div className={`font-display font-black tracking-wider text-lg ${scrolled ? "text-navy" : "text-white"}`}>PROMET</div>
              <div className={`text-[10px] uppercase tracking-[0.2em] -mt-0.5 ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>Metalúrgica · 1960</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {links.map((l) => {
              const isActive = active === l.id;
              const base = scrolled ? "text-navy" : "text-white";
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => handleNav(e, l.id)}
                  className={`font-medium transition uppercase tracking-wider hover:text-primary ${base}`}
                  style={{ fontSize: 13, color: isActive ? "#F47920" : undefined }}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Presupuesto
            </a>
          </div>

          <button
            onClick={() => setOpen((s) => !s)}
            className={`md:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`}
            aria-label="Menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      {open && (
        <div
          className="md:hidden fixed inset-0 flex flex-col"
          style={{ backgroundColor: "#1E2D6B", zIndex: 100, animation: "slideInDown 0.3s ease" }}
        >
          <div className="flex items-center justify-between" style={{ padding: 20 }}>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Promet" className="w-9 h-9 object-contain" />
              <div className="font-display font-black text-white tracking-wider text-lg">PROMET</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white"
              aria-label="Cerrar"
              style={{ width: 32, height: 32 }}
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-2">
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleNav(e, l.id)}
                className="block uppercase font-display font-bold"
                style={{
                  fontSize: 32,
                  padding: "16px 24px",
                  color: active === l.id ? "#F47920" : "#fff",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  animation: `fadeInUp 0.3s ease ${i * 0.08}s both`,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ backgroundColor: "rgba(0,0,0,0.2)", padding: 24, paddingBottom: "calc(24px + env(safe-area-inset-bottom, 0px))" }}>
            <div className="flex items-start gap-2 mb-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Calle 43 e/ 148 y 149, La Plata</span>
            </div>
            <a
              href="tel:+5492213611947"
              className="flex items-center gap-2 text-white font-semibold mb-2"
              style={{ fontSize: 14 }}
            >
              <Phone className="w-4 h-4 text-primary" />
              221 361-1947
            </a>
            <div className="flex items-start gap-2" style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
              <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Lun-Vie 8 a 18hs · Sáb-Dom cerrado</span>
            </div>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 text-white font-semibold rounded-lg"
              style={{ backgroundColor: "#25D366", height: 52 }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
                <path d={WA_PATH} />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>

          <style>{`
            @keyframes slideInDown { from { transform: translateY(-10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
          `}</style>
        </div>
      )}
    </>
  );
}
