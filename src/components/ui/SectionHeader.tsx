import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  centered?: boolean;
  className?: string;
}

/** Cabeçalho de seção consistente: eyebrow + h2 + lead (hierarquia §6.4). */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-readable",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-2.5 text-eyebrow uppercase text-petrol-700",
            centered && "justify-center",
          )}
        >
          <span aria-hidden="true" className="h-px w-7 bg-gold-500" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-h2 text-petrol-900">{title}</h2>
      {lead && <p className="mt-3 text-lead text-petrol-700">{lead}</p>}
    </div>
  );
}
