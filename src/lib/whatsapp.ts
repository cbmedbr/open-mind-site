import { site } from "@/config/site";

/**
 * Monta o link wa.me com a mensagem pré-preenchida (SDD §7.1).
 * Atribuição de origem sem ferramenta paga: cada página passa sua mensagem.
 */
export function buildWhatsAppUrl(message: string): string {
  const base = `https://wa.me/${site.contact.whatsapp.e164}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
