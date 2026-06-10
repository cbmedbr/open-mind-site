import Image from "next/image";
import type { TeamMember } from "@/config/team";
import { credential } from "@/config/team";
import { site } from "@/config/site";

function initialsOf(member: TeamMember): string {
  return member.shortName
    .replace(/^Dra?\.\s*/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

const attendanceLabel = `${site.insurance.covenants.join(", ")} e particular`;

/**
 * Card do corpo clínico (SDD §5.5). Foto em alta é TODO [PENDENTE 3] — até chegar,
 * placeholder no MESMO aspect ratio (4:5), sem CLS. Exibe credenciais reais.
 */
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-petrol-100 bg-white transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-brand hover:-translate-y-1 hover:border-petrol-500 hover:shadow-soft">
      <div className="relative aspect-[4/5] w-full bg-petrol-50">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Retrato de ${member.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <span className="flex h-20 w-20 items-center justify-center rounded-pill bg-petrol-100 font-serif text-2xl text-petrol-700">
              {initialsOf(member)}
            </span>
            <span className="text-eyebrow uppercase text-petrol-700">
              Foto em breve
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-h3 text-petrol-900">{member.name}</h3>
        <p className="mt-1 text-[0.9rem] font-medium text-blue-700">
          {member.specialty} · {credential(member)}
        </p>
        <p className="mt-3 flex-1 text-[0.95rem] text-petrol-700">
          {member.bio}
        </p>
        <dl className="mt-4 space-y-0.5 text-[0.9rem] text-petrol-700">
          <div>{member.ageLabel}</div>
          <div>{attendanceLabel}</div>
        </dl>
      </div>
    </article>
  );
}
