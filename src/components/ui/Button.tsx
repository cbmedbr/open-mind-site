import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "md" | "lg";

/**
 * Estilos de botão/CTA (SDD §6.5 microinterações + §6.2 regras de acessibilidade
 * da paleta). Exportado como helper para aplicar em <button>, <a> ou <Link>.
 *
 * - primary (dourado): texto petrol-900 (contraste AA), hover lift 2px + gold-700
 *   + sombra; press scale 0,98; foco com ring petrol-500.
 * - Alvos de toque ≥ 44px (min-h-11).
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap " +
  "transition-[transform,background-color,box-shadow,border-color] duration-[var(--duration-base)] ease-brand " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-500 " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-petrol-900 shadow-[var(--shadow-gold)] hover:bg-gold-700 hover:-translate-y-0.5",
  secondary:
    "bg-petrol-700 text-white hover:bg-petrol-900 hover:-translate-y-0.5",
  outline:
    "border border-petrol-100 text-petrol-700 hover:border-petrol-500 hover:bg-petrol-50",
  ghost: "text-petrol-700 hover:bg-petrol-50",
};

const sizeClass: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 py-2.5 text-[0.95rem]",
  lg: "min-h-[3.25rem] px-7 py-3 text-[1.05rem]",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variantClass[variant], sizeClass[size], className);
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return <button className={buttonClass(variant, size, className)} {...props} />;
}
