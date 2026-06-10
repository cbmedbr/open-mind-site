"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";
import { DURATION, EASE_BRAND, DISTANCE } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso (s). Para grids/listas, usar staggerDelay(i). */
  delay?: number;
  /** Translate de entrada (16–24px, SDD §6.5). */
  y?: number;
  duration?: number;
}

/**
 * Reveal de entrada por viewport (SDD §6.5): fade-up, roda 1 única vez,
 * só transform/opacity. Sob prefers-reduced-motion, o MotionConfig desliga o
 * deslocamento (entra apenas com opacidade). Reserva o próprio espaço → zero CLS.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = DISTANCE,
  duration = DURATION.entrance,
}: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, ease: EASE_BRAND, delay }}
    >
      {children}
    </m.div>
  );
}
