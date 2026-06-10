/**
 * Corpo clínico (SDD §5.5). Dados REAIS fornecidos no SDD: nome, CRM-SC, RQE,
 * bio, faixa etária. NÃO inventar credenciais. Fotos pendentes (placeholder).
 */

export type TeamSlug = "ana-beatriz" | "angela" | "patricia";

export interface TeamMember {
  slug: TeamSlug;
  name: string;
  /** Tratamento curto para assinaturas ("Dra. Ana Beatriz"). */
  shortName: string;
  crmSc: string;
  rqe: string;
  specialty: string;
  bio: string;
  /** Idade mínima atendida (SDD §5.5). */
  ageMin: number;
  ageLabel: string;
  /** Foto em alta. TODO [PENDENTE 3]: pedir arquivos originais padronizados. */
  photo: string | null;
}

export const team: TeamMember[] = [
  {
    slug: "ana-beatriz",
    name: "Dra. Ana Beatriz Pires Lima",
    shortName: "Dra. Ana Beatriz",
    crmSc: "8506",
    rqe: "8923",
    specialty: "Psiquiatria",
    bio: "Especialista em Psiquiatria, com especialização em Medicina de Família e Comunidade. Avaliação, diagnóstico e tratamento de transtornos mentais e emocionais em diferentes faixas etárias, com abordagem baseada em evidências e cuidado individualizado.",
    ageMin: 7,
    ageLabel: "Atende a partir de 7 anos",
    photo: null,
  },
  {
    slug: "angela",
    name: "Dra. Ângela Rafaela Grandi",
    shortName: "Dra. Ângela",
    crmSc: "24150",
    rqe: "14614",
    specialty: "Psiquiatria",
    bio: "Especialista em Psiquiatria, com atuação em Medicina do Sono e Perícia Médica. Avaliação e tratamento de transtornos mentais e distúrbios do sono, com prescrição de canabidiol quando clinicamente indicado.",
    ageMin: 18,
    ageLabel: "Atende a partir de 18 anos",
    photo: null,
  },
  {
    slug: "patricia",
    name: "Dra. Patrícia Helena Alves",
    shortName: "Dra. Patrícia",
    crmSc: "14299",
    rqe: "9061",
    specialty: "Psiquiatria",
    bio: "Especialista em Psiquiatria, com atuação no Transtorno do Espectro Autista (TEA) e experiência na prescrição de canabidiol. Capacitação em TCC, formação em Terapêutica Tântrica e Sexualidade Plena, mestranda em Ciências da Saúde com ênfase em Neurociência.",
    ageMin: 2,
    ageLabel: "Atende a partir de 2 anos",
    photo: null,
  },
];

const teamBySlug = Object.fromEntries(team.map((m) => [m.slug, m])) as Record<
  TeamSlug,
  TeamMember
>;

export function getTeamMember(slug: TeamSlug): TeamMember {
  return teamBySlug[slug];
}

/** Credencial formatada para exibição (E-E-A-T, SDD §10). */
export function credential(m: TeamMember): string {
  return `CRM-SC ${m.crmSc} · RQE ${m.rqe}`;
}
