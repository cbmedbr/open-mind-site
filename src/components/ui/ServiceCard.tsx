import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./icons";

interface ServiceCardProps {
  href: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Card de serviço (SDD §6.3). Microinteração (SDD §6.5): hover translate-y -4px,
 * borda petrol-100 → petrol-500, seta avança. Só transform/cor (GPU).
 */
export function ServiceCard({
  href,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-card border border-petrol-100 bg-white p-6",
        "transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-brand",
        "hover:-translate-y-1 hover:border-petrol-500 hover:shadow-soft",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-500",
        className,
      )}
    >
      <h3 className="text-h3 text-petrol-900">{title}</h3>
      {description && (
        <p className="mt-2 flex-1 text-[0.95rem] text-petrol-700">
          {description}
        </p>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-blue-700">
        Saiba mais
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-[var(--duration-base)] ease-brand group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
