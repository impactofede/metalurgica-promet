import { createFileRoute } from "@tanstack/react-router";
import { AudienceProvider } from "@/components/promet/audience-context";
import { Navbar } from "@/components/promet/navbar";
import { HeroSplit } from "@/components/promet/hero-split";
import { TrustBand } from "@/components/promet/trust-band";
import { Clients } from "@/components/promet/clients";
import { ServicesB2C } from "@/components/promet/services-b2c";
import { ServicesB2B } from "@/components/promet/services-b2b";
import { Gallery } from "@/components/promet/gallery";
import { Process } from "@/components/promet/process";
import { Guarantee } from "@/components/promet/guarantee";
import { Testimonials } from "@/components/promet/testimonials";
import { FAQ } from "@/components/promet/faq";
import { Contact } from "@/components/promet/contact";
import { Footer } from "@/components/promet/footer";
import { WhatsAppFAB, MobileStickyCTA } from "@/components/promet/floating";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Promet · Metalúrgica en La Plata desde 1960",
      },
      {
        name: "description",
        content:
          "Metalúrgica Promet en La Plata desde 1960. Para tu casa: portones, rejas, escaleras, techos. Para tu obra: corte, plegado, soldadura y fabricación a plano. Presupuesto en menos de 24 hs por WhatsApp.",
      },
      {
        property: "og:title",
        content: "Promet · Metalúrgica en La Plata desde 1960",
      },
      {
        property: "og:description",
        content:
          "Fabricamos a medida para particulares y damos servicio mayorista a herreros, constructores y arquitectos. WhatsApp directo a taller.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://promet.com.ar/#org",
          name: "Metalúrgica Promet",
          description:
            "Metalúrgica en La Plata desde 1960. Fabricación a medida para particulares y servicios mayoristas para herreros y constructores.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle 43 entre 148 y 149",
            addressLocality: "La Plata",
            addressRegion: "Buenos Aires",
            addressCountry: "AR",
          },
          telephone: "+5492213611947",
          openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
          priceRange: "$$",
          foundingDate: "1960",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AudienceProvider>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <HeroSplit />
        <TrustBand />
        <Clients />
        <ServicesB2C />
        <ServicesB2B />
        <Gallery />
        <Process />
        <Guarantee />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
      <MobileStickyCTA />
    </AudienceProvider>
  );
}
