"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Infra de movimento (SDD §6.5 / §8):
 * - LazyMotion + domAnimation → bundle mínimo (carrega só o necessário).
 * - `strict` obriga o uso de `m` (não `motion`), evitando importar tudo.
 * - reducedMotion="user" → respeita prefers-reduced-motion automaticamente
 *   (transform desligado; no máximo opacidade). Reforçado pelo backstop em CSS.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
