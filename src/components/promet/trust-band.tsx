import { motion } from "framer-motion";

const stats = [
  { value: "+60", label: "años en el rubro" },
  { value: "+12.000", label: "trabajos entregados" },
  { value: "<24hs", label: "para presupuestar" },
  { value: "3ra", label: "generación familiar" },
];

export function TrustBand() {
  return (
    <section className="bg-light py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center md:border-l first:border-l-0 md:px-2"
              style={{ borderColor: "rgba(30,45,107,0.12)" }}
            >
              <div className="font-display tabular text-5xl md:text-6xl text-primary leading-none font-black">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] text-navy font-bold">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
