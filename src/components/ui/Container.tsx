import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/** Largura máxima e respiro horizontal consistentes (grid do SDD §6.3). */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
