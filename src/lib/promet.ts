// Datos del negocio Promet (de fuente oficial existente)
export const PROMET = {
  name: "Promet",
  fullName: "Metalúrgica Promet",
  tagline: "Metalúrgica en La Plata desde 1960",
  yearsInBusiness: 60,
  foundedYear: 1960,
  city: "La Plata",
  address: "Calle 43 entre 148 y 149, La Plata",
  whatsappNumber: "5492213611947",
  phoneDisplay: "+54 9 221 361-1947",
  hours: "Lun-Vie 8 a 18hs · Sáb-Dom cerrado",
  mapsUrl:
    "https://www.google.com/maps/place/Promet+Metal%C3%BArgica+Promet/@-34.9487225,-57.9993909,17z/",
} as const;

export function waLink(message: string, _source = "web") {
  // Source is intentionally NOT appended to the message — it would inject parens
  // into the WhatsApp text and look unprofessional to the recipient.
  const text = encodeURIComponent(message);
  return `https://wa.me/${PROMET.whatsappNumber}?text=${text}`;
}
