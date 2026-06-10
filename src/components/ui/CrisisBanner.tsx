import { site } from "@/config/site";
import { Container } from "./Container";

/**
 * CrisisBanner (SDD §9.3) — obrigatório em /depressao e /transtorno-bipolar.
 * REGRA INEGOCIÁVEL (SDD §6.5): SEM nenhuma animação, visível instantaneamente.
 * Tom calmo (azul de apoio), não dramatiza; o foco é a ajuda disponível.
 */
export function CrisisBanner() {
  return (
    <aside
      role="note"
      aria-label="Apoio imediato em momento de crise"
      className="border-y border-blue-100 bg-blue-100"
    >
      <Container className="flex items-start gap-3 py-4">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
        >
          <path
            d="M12 21s-7-4.35-9.33-8.66A5.5 5.5 0 0 1 12 6.5a5.5 5.5 0 0 1 9.33 5.84C19 16.65 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[0.95rem] leading-snug text-petrol-900">
          <strong className="font-semibold">Você não está sozinho.</strong>{" "}
          {site.crisis.footerLine}
        </p>
      </Container>
    </aside>
  );
}
