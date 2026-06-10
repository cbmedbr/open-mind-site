/**
 * Espelho em JS dos tokens de movimento do CSS (SDD §6.5 e globals.css).
 * As animações da biblioteca Motion bebem daqui — nenhum tempo/easing mágico
 * espalhado pelos componentes. Durações em segundos (API do Motion).
 */

export const DURATION = {
  fast: 0.15, // 150ms — hovers, cores, links
  base: 0.25, // 250ms — botões, cards, accordion
  entrance: 0.6, // 600ms — reveals de seção
  hero: 0.9, // 900ms — coreografia do hero
  signature: 1.2, // 1200ms — assinatura do logo (única > 900ms)
} as const;

/** Curva padrão de entrada — cubic-bezier(0.22, 1, 0.36, 1). */
export const EASE_BRAND = [0.22, 1, 0.36, 1] as const;

/** Spring para accordion e FAB (SDD §6.5). */
export const SPRING = { type: "spring", stiffness: 260, damping: 26 } as const;

/** Stagger de listas/grids (80ms) e translate de entrada (16–24px). */
export const STAGGER = 0.08;
export const DISTANCE = 20;

/** Delay escalonado para o item de índice `i`. */
export const staggerDelay = (i: number, base = 0): number => base + i * STAGGER;
