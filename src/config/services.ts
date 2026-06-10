import type { TeamSlug } from "@/config/team";

/**
 * Metadados dos 10 serviços (SDD §4, §5.2, §5.5, §7.1, §9.3).
 * Apenas DADOS do SDD (rotas, termo-alvo, mensagem de WhatsApp, mapa serviço×profissional,
 * obrigatoriedade de CrisisBanner). A COPY de cada página é escrita na F3.
 *
 * NÃO existe "dependência química" como serviço na v1 (SDD §5.5 / §13.9 — decisão de 10/06/2026).
 */

export interface ServiceMeta {
  slug: string;
  /** Caminho da rota (nível raiz — os termos de SEO/§7.1 usam /tea, /depressao, ...). */
  path: string;
  /** Rótulo curto (dropdown do header, cards). */
  navLabel: string;
  /** Nome completo do serviço (H1 / breadcrumb). */
  title: string;
  /** Termo-alvo principal de SEO local (SDD §5.2). */
  termoAlvo: string;
  /** Mensagem pré-preenchida do WhatsApp (SDD §7.1, verbatim). */
  whatsappMessage: string;
  /** Carro-chefe — destaque na Home e prioridade na F3 (SDD §5.3). */
  featured: boolean;
  /** CrisisBanner obrigatório, SEM animação (SDD §9.3). */
  crisisBanner: boolean;
  /** Quem atende + assina a revisão médica (SDD §5.5). */
  professionals: TeamSlug[];
}

const WA_PREFIX = "Olá! Vim pelo site da Open Mind e gostaria de ";

export const services: ServiceMeta[] = [
  {
    slug: "tea",
    path: "/tea",
    navLabel: "TEA (Autismo)",
    title: "Transtorno do Espectro Autista (TEA)",
    termoAlvo: "psiquiatra TEA Florianópolis",
    whatsappMessage:
      WA_PREFIX + "informações sobre avaliação e acompanhamento de TEA.",
    featured: true,
    crisisBanner: false,
    professionals: ["patricia"],
  },
  {
    slug: "tdah",
    path: "/tdah",
    navLabel: "TDAH e TOD",
    title: "TDAH e TOD",
    termoAlvo: "psiquiatra TDAH Florianópolis",
    whatsappMessage: WA_PREFIX + "informações sobre avaliação de TDAH.",
    featured: false,
    crisisBanner: false,
    professionals: ["patricia", "ana-beatriz"],
  },
  {
    slug: "canabidiol",
    path: "/canabidiol",
    navLabel: "Canabidiol",
    title: "Tratamento com Canabidiol",
    termoAlvo: "médico canabidiol Florianópolis",
    whatsappMessage:
      WA_PREFIX + "saber sobre a avaliação para tratamento com canabidiol.",
    featured: true,
    crisisBanner: false,
    professionals: ["patricia", "angela"],
  },
  {
    slug: "medicina-do-sono",
    path: "/medicina-do-sono",
    navLabel: "Medicina do Sono",
    title: "Medicina do Sono",
    termoAlvo: "médico do sono Florianópolis",
    whatsappMessage: WA_PREFIX + "agendar uma consulta de medicina do sono.",
    featured: true,
    crisisBanner: false,
    professionals: ["angela"],
  },
  {
    slug: "psiquiatria-infantil",
    path: "/psiquiatria-infantil",
    navLabel: "Psiquiatria Infantil",
    title: "Psiquiatria Infantil e do Adolescente",
    termoAlvo: "psiquiatra infantil Florianópolis",
    whatsappMessage:
      WA_PREFIX + "agendar uma avaliação com psiquiatra infantil.",
    featured: false,
    crisisBanner: false,
    professionals: ["patricia", "ana-beatriz"],
  },
  {
    slug: "ansiedade-e-burnout",
    path: "/ansiedade-e-burnout",
    navLabel: "Ansiedade e Burnout",
    title: "Ansiedade, Estresse e Burnout",
    termoAlvo: "psiquiatra para ansiedade Florianópolis",
    whatsappMessage:
      WA_PREFIX + "informações sobre o tratamento para ansiedade e estresse.",
    featured: false,
    crisisBanner: false,
    professionals: ["ana-beatriz", "angela", "patricia"],
  },
  {
    slug: "depressao",
    path: "/depressao",
    navLabel: "Depressão e Luto",
    title: "Depressão e Luto",
    termoAlvo: "psiquiatra depressão Florianópolis",
    whatsappMessage:
      WA_PREFIX + "informações sobre o tratamento para depressão.",
    featured: false,
    crisisBanner: true, // SDD §9.3 — obrigatório
    professionals: ["ana-beatriz", "angela", "patricia"],
  },
  {
    slug: "transtorno-bipolar",
    path: "/transtorno-bipolar",
    navLabel: "Transtorno Bipolar",
    title: "Transtorno Bipolar e do Humor",
    termoAlvo: "tratamento transtorno bipolar Florianópolis",
    whatsappMessage:
      WA_PREFIX + "informações sobre o acompanhamento de transtorno bipolar.",
    featured: false,
    crisisBanner: true, // SDD §9.3 — obrigatório
    professionals: ["ana-beatriz", "angela", "patricia"],
  },
  {
    slug: "saude-mental-da-mulher",
    path: "/saude-mental-da-mulher",
    navLabel: "Saúde Mental da Mulher",
    title: "Saúde Mental da Mulher",
    termoAlvo: "psiquiatra saúde da mulher Florianópolis",
    whatsappMessage:
      WA_PREFIX + "informações sobre a consulta de saúde mental da mulher.",
    featured: false,
    crisisBanner: false,
    professionals: ["ana-beatriz", "angela", "patricia"], // assinada pela equipe (SDD §5.5)
  },
  {
    slug: "pericia-medica",
    path: "/pericia-medica",
    navLabel: "Perícia Médica",
    title: "Perícia Médica em Saúde Mental",
    termoAlvo: "perícia médica psiquiátrica Florianópolis",
    whatsappMessage:
      WA_PREFIX + "informações sobre perícia médica em saúde mental.",
    featured: false,
    crisisBanner: false,
    professionals: ["angela"], // assinada pela Dra. Ângela (SDD §5.5)
  },
];

const serviceBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s]),
) as Record<string, ServiceMeta>;

export function getService(slug: string): ServiceMeta | undefined {
  return serviceBySlug[slug];
}

export const featuredServices = services.filter((s) => s.featured);
