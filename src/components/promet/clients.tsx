const logos = [
  { src: "/logos/nini.png", alt: "Nini Mayorista" },
  { src: "/logos/aniuri.png", alt: "Añuri Construcciones Metálicas" },
  { src: "/logos/ipensa.png", alt: "Ipensa" },
  { src: "/logos/zoo-la-plata.png", alt: "Bioparque · Zoo La Plata" },
  { src: "/logos/rol-ingenieria.png", alt: "Rol Ingeniería" },
  { src: "/logos/credil.png", alt: "Credil" },
];

export function Clients() {
  const track = [...logos, ...logos];

  return (
    <section style={{ background: "#FFFFFF", padding: "48px 0" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: 32,
          color: "#F47920",
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontWeight: 600,
        }}
      >
        Trabajan con nosotros
      </div>

      <div
        className="carousel-wrapper"
        style={{
          overflow: "hidden",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="carousel-track">
          {track.map((logo, i) => (
            <div
              key={i}
              className="logo-card"
              style={{
                width: 300,
                height: 180,
                background: "#FFFFFF",
                border: "1px solid rgba(30,45,107,0.08)",
                borderRadius: 10,
                padding: "20px 24px",
                margin: "0 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll-left 25s linear infinite;
          will-change: transform;
        }
        .logo-card img {
          filter: grayscale(100%) opacity(0.6);
          transition: filter 0.4s ease;
        }
        .logo-card:hover img {
          filter: grayscale(0%) opacity(1);
        }
      `}</style>
    </section>
  );
}
