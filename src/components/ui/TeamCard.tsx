import Image from "next/image";
import type { TeamMember } from "@/config/team";
import { credential } from "@/config/team";
import { site, whatsappMessages } from "@/config/site";
import { CTAWhatsApp } from "./CTAWhatsApp";

function initialsOf(member: TeamMember): string {
  return member.shortName
    .replace(/^Dra?\.\s*/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

const attendanceLabel = `Convênio ${site.insurance.covenants.join(", ")} e particular`;

/**
 * Card do corpo clínico (SDD §5.5): retrato circular com anel dourado e selo de
 * idade (linguagem visual da apresentação oficial), credenciais reais, selos de
 * foco e CTA de agendamento com a médica. `compact` omite a bio (teaser da Home).
 */
export function TeamCard({
  member,
  pagePath,
  compact = false,
}: {
  member: TeamMember;
  /** Param `page_path` do evento GA4 `whatsapp_click`. */
  pagePath: string;
  compact?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-petrol-100 bg-white p-6 transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-brand hover:-translate-y-1 hover:border-petrol-500 hover:shadow-soft">
      <div className="relative w-fit">
        <div className="rounded-pill bg-linear-to-br from-gold-500 to-blue-100 p-[3px]">
          <div className="relative size-36 overflow-hidden rounded-pill border-4 border-white bg-petrol-50">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={`Retrato de ${member.name}`}
                fill
                sizes="144px"
                className="object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center font-serif text-2xl text-petrol-700">
                {initialsOf(member)}
              </span>
            )}
          </div>
        </div>
        <span className="absolute bottom-1 left-[68%] whitespace-nowrap rounded-pill border border-petrol-100 bg-white px-3 py-1 text-[0.8rem] font-medium text-petrol-900 shadow-soft">
          {member.ageLabel}
        </span>
      </div>

      <h3 className="mt-6 text-h3 text-petrol-900">{member.name}</h3>
      <p className="mt-1 text-[0.9rem] font-medium text-blue-700">
        {member.specialty} · {credential(member)}
      </p>

      {!compact && (
        <p className="mt-3 text-[0.95rem] text-petrol-700">{member.bio}</p>
      )}

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Áreas de foco">
        {member.focus.map((item) => (
          <li
            key={item}
            className="rounded-pill bg-blue-100 px-3 py-1 text-[0.8rem] font-medium text-petrol-700"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <p className="mb-3 text-[0.9rem] text-petrol-700">{attendanceLabel}</p>
        <CTAWhatsApp
          message={whatsappMessages.withDoctor(member.shortName)}
          variant="outline"
          size="md"
          className="w-full"
          pagePath={pagePath}
          ctaPosition={`team-card:${member.slug}`}
        >
          Agendar consulta
          <span className="sr-only"> com a {member.shortName}</span>
        </CTAWhatsApp>
      </div>
    </article>
  );
}
