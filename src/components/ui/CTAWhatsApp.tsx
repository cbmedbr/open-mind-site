"use client";

import type { ReactNode } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { buttonClass, type ButtonVariant, type ButtonSize } from "./Button";
import { WhatsAppIcon } from "./icons";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface CTAWhatsAppProps {
  /** Mensagem pré-preenchida da página (SDD §7.1). */
  message: string;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Params do evento GA4 `whatsapp_click` (SDD §7.1/§7.2). */
  pagePath?: string;
  ctaPosition?: string;
}

/**
 * CTA principal de conversão (SDD §7.1): abre o WhatsApp em nova aba e dispara
 * o evento GA4 ANTES do redirect. GA é instalado na F4 — até lá, `gtag` é no-op.
 */
export function CTAWhatsApp({
  message,
  children = "Falar no WhatsApp",
  variant = "primary",
  size = "lg",
  className,
  pagePath,
  ctaPosition,
}: CTAWhatsAppProps) {
  function handleClick() {
    window.gtag?.("event", "whatsapp_click", {
      page_path: pagePath,
      cta_position: ctaPosition,
    });
  }

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-cta="whatsapp"
      className={buttonClass(variant, size, className)}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}
