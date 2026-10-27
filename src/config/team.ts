/**
 * Corpo clínico (SDD §5.5). Dados REAIS fornecidos pela clínica (SDD + apresentação
 * oficial "Apresentacao-Open-Mind.pdf"): nome, CRM-SC, RQE, bio, faixa etária, foto.
 * NÃO inventar credenciais.
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
  /** Selos de foco clínico. Descrevem o que a médica atende, não títulos:
   *  especialidade/área de atuação só com RQE (CFM 2.336/2023, SDD §9.1). */
  focus: string[];
  /** Recorte quadrado, exibido em círculo. Provisórias (extraídas do PDF, ~500–670 px).
   *  TODO [PENDENTE 3]: trocar pelos originais em alta, com enquadramento padronizado. */
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
    bio: "Médica psiquiatra, com especialização em Medicina de Família e Comunidade e experiência na avaliação, no diagnóstico e no tratamento de transtornos mentais e emocionais em diferentes faixas etárias. Une a abordagem baseada em evidências ao cuidado individualizado e conduz cada acompanhamento com empatia, ética e acolhimento, em um ambiente seguro no qual o paciente é protagonista do próprio cuidado.",
    ageMin: 7,
    ageLabel: "A partir de 7 anos",
    focus: ["Crianças e adolescentes", "Adultos"],
    photo: "/equipe/ana-beatriz.jpg",
  },
  {
    slug: "angela",
    name: "Dra. Ângela Rafaela Grandi",
    shortName: "Dra. Ângela",
    crmSc: "24150",
    rqe: "14614",
    specialty: "Psiquiatria",
    bio: "Médica psiquiatra com atuação em Medicina do Sono e Perícia Médica. Avalia, diagnostica e trata transtornos mentais e distúrbios do sono, com prescrição de canabidiol quando clinicamente indicado, além de realizar perícias na área de saúde mental. Combina rigor técnico e abordagem humanizada para compreender a história, os sentimentos e as necessidades de cada paciente, com foco no equilíbrio emocional, na qualidade do sono e no bem-estar global.",
    ageMin: 18,
    ageLabel: "A partir de 18 anos",
    focus: ["Adultos", "Distúrbios do sono", "Perícia médica"],
    photo: "/equipe/angela.jpg",
  },
  {
    slug: "patricia",
    name: "Dra. Patrícia Helena Alves",
    shortName: "Dra. Patrícia",
    crmSc: "14299",
    rqe: "9061",
    specialty: "Psiquiatria",
    bio: "Médica psiquiatra com atuação no Transtorno do Espectro Autista (TEA) e experiência na prescrição de canabidiol conforme indicação clínica. Tem capacitação em Terapia Cognitivo-Comportamental (TCC), formação em Terapêutica Tântrica e Sexualidade Plena e é mestranda em Ciências da Saúde, com ênfase em Neurociência. Sua prática se apoia em escuta qualificada, ética profissional e olhar detalhista, com planos terapêuticos personalizados e acompanhamento clínico contínuo.",
    ageMin: 2,
    ageLabel: "A partir de 2 anos",
    focus: ["TEA (autismo)", "Tratamento com canabidiol", "TCC"],
    photo: "/equipe/patricia.jpg",
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
