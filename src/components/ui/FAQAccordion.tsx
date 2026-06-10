"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "./icons";

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

/**
 * FAQ accordion (SDD §6.3 / §6.5). Abertura com altura animada via
 * grid-template-rows 0fr→1fr (única exceção permitida fora de transform/opacity)
 * + chevron girando 180°. Sob reduced-motion, abre instantâneo (backstop CSS).
 */
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="divide-y divide-petrol-100 border-y border-petrol-100">
      {items.map((item, i) => {
        const isOpen = open === i;
        const triggerId = `${baseId}-t${i}`;
        const panelId = `${baseId}-p${i}`;
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-500"
              >
                <span className="font-sans text-[1.05rem] font-medium text-petrol-900">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={cn(
                    "h-5 w-5 shrink-0 text-petrol-500 transition-transform duration-[var(--duration-base)] ease-brand",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                "grid transition-[grid-template-rows] duration-[var(--duration-base)] ease-brand",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-[0.98rem] text-petrol-700">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
