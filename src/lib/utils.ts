/** Junta classes condicionais. Mantém o bundle enxuto (sem clsx/tailwind-merge). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
