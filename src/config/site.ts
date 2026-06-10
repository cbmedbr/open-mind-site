/**
 * FONTE ÚNICA dos dados da clínica (SDD §13.2).
 * Regra: nunca inventar CRM/RQE, CNPJ, preços, estatísticas, horários, convênios
 * além da Unimed (SDD §13.3). Tudo que falta entra como placeholder + TODO [PENDENTE n].
 */

export const site = {
  name: "Open Mind",
  /** Diferenciação de marca/SEO — sempre "Psiquiatria" + Florianópolis (SDD §3). */
  seoName: "Open Mind Psiquiatria",
  /** Slogan oficial (SDD §2 / §5.5). */
  tagline: "Tecnologia, ciência e empatia em saúde mental.",
  description:
    "Clínica de psiquiatria humanizada e baseada em evidências, no centro de Florianópolis.",

  /** Domínio. TODO [PENDENTE 1]: candidato NÃO confirmado (SDD §12 — checar no registro.br:
   *  openmindpsiquiatria.com.br, clinicaopenmind.com.br, openmindclinica.com.br).
   *  Na F4/produção, definir NEXT_PUBLIC_SITE_URL com o domínio real ANTES do build; o
   *  valor abaixo é só fallback de desenvolvimento e não deve ir a produção em
   *  JSON-LD/canonical (pode pertencer a terceiro). */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://openmindpsiquiatria.com.br",

  address: {
    building: "Edifício Pórtico",
    street: "R. Felipe Schmidt, 515",
    complement: "2º andar, salas 207 e 208",
    district: "Centro",
    city: "Florianópolis",
    state: "SC",
    zip: "88010-001",
    full: "Edifício Pórtico, R. Felipe Schmidt, 515, 2º andar — salas 207 e 208, Centro, Florianópolis/SC, CEP 88010-001",
    mapsQuery:
      "Edifício Pórtico, R. Felipe Schmidt, 515, Centro, Florianópolis - SC, 88010-001",
    /** Geo para JSON-LD/mapa. TODO [PENDENTE]: geocodificar o endereço na F4. */
    geo: { lat: null as number | null, lng: null as number | null },
  },

  contact: {
    email: "openmindclinicamedica@gmail.com",
    instagram: "@openmind.clinicamedica",
    instagramUrl: "https://instagram.com/openmind.clinicamedica",
    whatsapp: {
      display: "(48) 99128-5567",
      e164: "5548991285567",
      // Business x comum é decisão operacional — TODO [PENDENTE 11] (não bloqueia; o wa.me é idêntico).
    },
  },

  /** Horários de atendimento. TODO [PENDENTE 9]: aguardando a gestão. NÃO inventar. */
  hours: null as null | Array<{ days: string; open: string; close: string }>,

  /** Convênios (SDD §12 item 5 RESOLVIDO): Unimed + particular. Nunca adicionar outros sem confirmação. */
  insurance: { covenants: ["Unimed"] as const, privatePay: true },

  /** Responsável/diretor técnico — visível no rodapé (CFM 2.336/2023, SDD §9.1). */
  responsibleTechnician: {
    name: "Dr. Arthur de Freitas Andrade",
    crm: null as string | null, // TODO [PENDENTE 4]: CRM-SC do RT
    rqe: null as string | null, // TODO [PENDENTE 4]: RQE do RT
  },

  /** Dados jurídicos. TODO [PENDENTE 4]: confirmar com a gestora ANTES de publicar.
   *  Busca pública (NÃO confirmada): "Openmind Clinica Medica Ltda", CNPJ 59.811.329/0001-85. */
  legal: {
    companyName: null as string | null,
    cnpj: null as string | null,
  },

  /** Protocolo de crise (SDD §9.3) — dados públicos, fixos. */
  crisis: {
    cvv: "188",
    samu: "192",
    footerLine:
      "Em crise ou pensando em se machucar? Ligue 188 (CVV, 24 h) ou procure a emergência mais próxima (SAMU 192).",
  },

  /** Reservas para o futuro (SDD §7.4) — NÃO prometer/ofertar na v1. */
  future: {
    onlineScheduling: false, // botão "Agendar online" (MedScale) — TODO [PENDENTE 12]
    telemedicine: false, // em implementação pela clínica — fora da copy da v1
  },
} as const;

/** Mensagens pré-preenchidas do WhatsApp (SDD §7.1). As específicas de serviço ficam em services.ts. */
export const whatsappMessages = {
  /** Home, Sobre, Equipe, Contato. */
  default:
    "Olá! Vim pelo site da Open Mind e gostaria de agendar uma consulta.",
} as const;
