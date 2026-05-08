import { UserCircle, Star } from "lucide-react";

type Review = {
  name: string;
  detail: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Silvio I.",
    detail: "Google · hace una semana",
    text: "Excelente atención, siempre predispuestos, tanto en mostrador como los chicos del taller. Precio, calidad y atención en un solo lugar.",
  },
  {
    name: "Sabina P.",
    detail: "Google · cliente verificada",
    text: "Excelente atención al público. Respondieron mi mail rápido y me pasaron directo a WhatsApp para resolver mis dudas. Siendo un trabajo chico, no lo despreciaron. El precio me pareció más que adecuado.",
  },
  {
    name: "Cristian O.",
    detail: "Google · hace 5 meses",
    text: "Encontré muy buena atención a mis dudas en el plegado de chapa.",
  },
  {
    name: "Francisco R.",
    detail: "Google · cliente verificado",
    text: "Seriedad y trayectoria. Totalmente recomendable.",
  },
  {
    name: "Dario D.",
    detail: "Google · cliente verificado",
    text: "Atención cordial y trabajos recomendables.",
  },
];

function GoogleG({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span
            className="inline-block font-bold mb-3"
            style={{
              color: "#F47920",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Reseñas de Google
          </span>
          <h2 className="font-display uppercase text-navy text-4xl md:text-5xl leading-[0.95]">
            Lo que dicen
            <br />
            <span className="text-forge-gradient">nuestros clientes.</span>
          </h2>

          <div
            className="mt-5 inline-flex items-center justify-center gap-2"
            style={{ color: "#7A7A78", fontSize: 13 }}
          >
            <GoogleG size={16} />
            <span className="font-semibold" style={{ color: "#1E2D6B" }}>Google</span>
            <Star className="w-4 h-4 fill-current" style={{ color: "#F47920" }} />
            <span style={{ color: "#1E2D6B", fontWeight: 600 }}>5.0</span>
            <span>· 5 reseñas verificadas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="review-card"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(30,45,107,0.08)",
        borderTop: "3px solid #F47920",
        borderRadius: 10,
        padding: "28px 24px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        transition: "all 0.25s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="grid place-items-center rounded-full shrink-0"
          style={{ width: 44, height: 44, background: "#F5F7FA" }}
        >
          <UserCircle className="w-6 h-6" style={{ color: "#1E2D6B" }} />
        </div>
        <div className="min-w-0">
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1E2D6B" }}>
            {review.name}
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#7A7A78" }}>
            {review.detail}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-3" style={{ gap: 2 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#F47920" }} />
        ))}
      </div>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 15,
          lineHeight: 1.7,
          fontStyle: "italic",
          color: "#3A3A3A",
          marginTop: 12,
          flex: 1,
        }}
      >
        "{review.text}"
      </p>

      <div
        className="flex items-center gap-1.5 mt-5 pt-4"
        style={{ borderTop: "1px solid rgba(30,45,107,0.08)" }}
      >
        <GoogleG size={12} />
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#7A7A78" }}>
          Reseña de Google
        </span>
      </div>

      <style>{`
        .review-card:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
