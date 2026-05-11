export const CONTACT_PHONE = "+91 80899 66229";
export const WHATSAPP_NUMBER = "918089966229";

export const BRANDS = [
  { name: 'BMW' },
  { name: 'Audi' },
  { name: 'Mercedes-Benz' },
  { name: 'Volkswagen' },
  { name: 'Skoda' },
  { name: 'Ford' },
];

export const BRANDS_EXTENDED = [...BRANDS, ...BRANDS].map((brand, i) => ({ ...brand, id: i }));
