"use client";

import { m } from "motion/react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { whatsappMessages } from "@/config/site";
import { DURATION, EASE_BRAND } from "@/lib/motion";
import { WhatsAppIcon } from "./icons";

/**
 * FAB do WhatsApp (SDD §4 / §6.5): fixo em todas as páginas. Entra com scale
 * após 600ms e dá 1 pulso ÚNICO (nunca em loop). Sob reduced-motion, aparece
 * pronto (MotionConfig desliga o transform). Mensagem institucional padrão.
 */
export function WhatsAppFab() {
  function handleClick() {
    window.gtag?.("event", "whatsapp_click", {
      page_path: "fab",
      cta_position: "fab",
    });
  }

  return (
    <m.a
      href={buildWhatsAppUrl(whatsappMessages.default)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
      data-cta="whatsapp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1, 1.08, 1], opacity: 1 }}
      transition={{
        delay: DURATION.entrance,
        duration: 0.6,
        times: [0, 0.65, 0.82, 1],
        ease: EASE_BRAND,
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[120] flex h-14 w-14 items-center justify-center rounded-pill bg-whatsapp text-white shadow-lift outline-offset-2 focus-visible:outline-2 focus-visible:outline-petrol-500"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </m.a>
  );
}
