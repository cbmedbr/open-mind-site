import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

/**
 * Logo PROVISÓRIO (SDD §6.1 / §13.8). O arquivo real em vetor é TODO [PENDENTE 2];
 * este componente é o ponto único de troca. Símbolo abstrato: três peças nas
 * cores da marca que se encaixam (cérebro/quebra-cabeça estilizado).
 *
 * Assinatura animada (SDD §6.5): quando `animated`, as peças recebem `.logo-piece`
 * e a animação roda 1× por sessão. A decisão (animar / estático / reduced-motion)
 * é tomada ANTES da pintura pelo script inline no layout (classe html.logo-static).
 */

interface LogoProps {
  className?: string;
  /** Anima a montagem na 1ª carga da sessão (use no header). */
  animated?: boolean;
  /** Mostra o nome ao lado do símbolo (lockup horizontal). */
  showWordmark?: boolean;
  /** Cor do nome — claro para uso sobre fundo escuro (footer). */
  tone?: "dark" | "light";
}

interface Piece {
  cx: number;
  cy: number;
  fill: string;
  style: CSSProperties;
}

// Três peças em triângulo; cada uma entra de uma direção, com stagger.
const PIECES: Piece[] = [
  {
    cx: 24,
    cy: 15,
    fill: "var(--color-petrol-700)",
    style: { ["--lp-y" as string]: "-9px", ["--lp-delay" as string]: "0ms" },
  },
  {
    cx: 16,
    cy: 29,
    fill: "var(--color-blue-500)",
    style: {
      ["--lp-x" as string]: "-9px",
      ["--lp-y" as string]: "5px",
      ["--lp-delay" as string]: "120ms",
    },
  },
  {
    cx: 32,
    cy: 29,
    fill: "var(--color-gold-500)",
    style: {
      ["--lp-x" as string]: "9px",
      ["--lp-y" as string]: "5px",
      ["--lp-delay" as string]: "240ms",
    },
  },
];

export function Logo({
  className,
  animated = false,
  showWordmark = true,
  tone = "dark",
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-label="Open Mind"
        className="h-9 w-9 shrink-0"
      >
        {PIECES.map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={9}
            fill={p.fill}
            className={animated ? "logo-piece" : undefined}
            style={animated ? p.style : undefined}
          />
        ))}
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-serif text-[1.35rem] font-medium leading-none tracking-tight",
            tone === "light" ? "text-white" : "text-petrol-900",
          )}
        >
          Open Mind
        </span>
      )}
    </span>
  );
}
