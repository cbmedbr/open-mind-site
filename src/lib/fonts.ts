import { Fraunces, Figtree } from "next/font/google";

/**
 * Fontes self-hosted via next/font (SDD §6.4): zero layout shift, nenhuma
 * requisição externa, font-display: swap.
 * - Fraunces (serif humanista variável) para títulos — eixo óptico (opsz) ativo;
 *   pesos 500–600 controlados por CSS (nunca 700+).
 * - Figtree (sans humanista variável) para o corpo.
 */

export const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});
