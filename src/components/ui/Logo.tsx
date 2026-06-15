import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo oficial da Open Mind (cérebro de quebra-cabeça nas 3 cores da marca).
 * Asset: /logo-open-mind.png — PNG transparente de alta qualidade derivado do
 * arquivo enviado pela clínica (fundo branco removido por flood-fill, brancos
 * internos preservados). Funciona sobre qualquer fundo (claro ou petróleo).
 *
 * Assinatura animada (SDD §6.5): quando `animated`, o símbolo entra 1× por sessão
 * (scale + fade via `.logo-piece`); a decisão (animar / estático / reduced-motion)
 * é tomada antes da pintura pelo script inline do layout (html.logo-static).
 */

interface LogoProps {
  className?: string;
  /** Anima a entrada na 1ª carga da sessão (usar no header). */
  animated?: boolean;
  /** Mostra o nome ao lado do símbolo (lockup horizontal). */
  showWordmark?: boolean;
  /** Cor do nome — claro para fundo escuro (footer). */
  tone?: "dark" | "light";
}

export function Logo({
  className,
  animated = false,
  showWordmark = true,
  tone = "dark",
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo-open-mind.png"
        alt={showWordmark ? "" : "Open Mind"}
        width={688}
        height={618}
        priority={animated}
        sizes="40px"
        className={cn("h-9 w-auto", animated && "logo-piece")}
      />
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
