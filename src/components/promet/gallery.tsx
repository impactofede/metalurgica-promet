import { useState } from "react";

type Item = { title: string; place: string; tag: string; img: string };

const items: Item[] = [
  {
    title: "Portón corredizo",
    place: "City Bell",
    tag: "Portones",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Escalera caracol",
    place: "Tolosa",
    tag: "Escaleras",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Techo industrial",
    place: "Ensenada",
    tag: "Techos",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Plegado para constructora",
    place: "La Plata",
    tag: "Plegado",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Reja de frente",
    place: "Gonnet",
    tag: "Rejas",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Soldadura inox",
    place: "Villa Elisa",
    tag: "Soldadura",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Estructura metálica",
    place: "Los Hornos",
    tag: "Estructuras",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Escalera exterior",
    place: "Berisso",
    tag: "Escaleras",
    img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Rack estantería",
    place: "Nini",
    tag: "Racks",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=60&w=500",
  },
];

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, 6);

  return (
    <section id="trabajos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <span className="inline-block text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
            Trabajos realizados
          </span>
          <h2 className="font-display uppercase text-navy text-4xl md:text-5xl leading-[0.95]">
            60 años se ven<br />
            <span className="text-forge-gradient">en cada trabajo.</span>
          </h2>
        </div>

        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(var(--cols, 1), minmax(0, 1fr))",
          }}
        >
          {visible.map((it) => (
            <GalleryCard key={it.title} item={it} />
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold uppercase text-sm tracking-wider rounded hover:bg-primary hover:text-white transition"
            >
              Ver más trabajos →
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 640px) { #trabajos .grid { --cols: 2; } }
        @media (min-width: 1024px) { #trabajos .grid { --cols: 3; } }
        #trabajos .gcard { height: 220px; }
        @media (min-width: 768px) { #trabajos .gcard { height: 280px; } }
      `}</style>
    </section>
  );
}

function GalleryCard({ item }: { item: Item }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="gcard relative overflow-hidden rounded-lg group">
      {!loaded && <div className="absolute inset-0 skeleton" />}
      <img
        src={item.img}
        alt={`${item.title} en ${item.place}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
        style={{ background: "rgba(30,45,107,0.75)" }}
      >
        <div className="font-display uppercase text-white text-xl leading-tight font-bold">
          {item.title}
        </div>
        <div className="text-sm font-semibold mt-1" style={{ color: "#F47920" }}>
          {item.place}
        </div>
      </div>
    </div>
  );
}
