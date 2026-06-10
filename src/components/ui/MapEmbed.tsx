"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Mapa embedado (SDD §5.6 / §6.5): skeleton enquanto carrega, depois fade-in.
 * Embed do Google Maps sem chave (output=embed). A altura vem do container pai.
 */
export function MapEmbed({ className }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery,
  )}&output=embed`;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card border border-petrol-100 bg-petrol-50",
        className,
      )}
    >
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-petrol-100"
        />
      )}
      <iframe
        src={src}
        title={`Mapa: ${site.address.full}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full border-0 transition-opacity duration-[var(--duration-base)] ease-brand",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
