export const WHATSAPP_NUMBER = "5565993334646";
export const EMAIL = "eduardo.naginski@stratyxbr.com";

export function whatsappUrl(
  message = "Olá, gostaria de agendar uma Consultoria de IA com a STRATYX.",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONSULTING_URL = whatsappUrl();
