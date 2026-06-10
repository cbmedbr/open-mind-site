import { differentials } from "@/config/content";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./icons";
import { staggerDelay } from "@/lib/motion";

/** Diferenciais da clínica (SDD §5.1/§5.3) — fade-up com stagger. */
export function Differentials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {differentials.map((d, i) => (
        <Reveal key={d.title} delay={staggerDelay(i)}>
          <div className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-gold-100 text-gold-700">
              <CheckIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-h3 text-petrol-900">{d.title}</h3>
              <p className="mt-1.5 text-petrol-700">{d.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
