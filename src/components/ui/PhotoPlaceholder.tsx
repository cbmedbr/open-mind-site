import { cn } from "@/lib/utils";

/** Placeholder de foto no mesmo aspect-ratio do asset final (SDD §13.8 — sem CLS). */
export function PhotoPlaceholder({
  className,
  label = "Foto em breve",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-card border border-petrol-100 bg-petrol-50",
        className,
      )}
    >
      <span className="text-eyebrow uppercase text-petrol-700">{label}</span>
    </div>
  );
}
