/**
 * Contrato da COPY de cada página de serviço (SDD §5.1 / §5.2).
 * "Quem atende", a revisão médica assinada e a mensagem de WhatsApp NÃO entram
 * aqui — vêm de config/services.ts e config/team.ts (dados reais, nunca inventados).
 */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

/** Bloco extra para particularidades §5.2 (ex.: TDAH adulto/infantil, jornada do TEA). */
export interface ServiceBlock {
  heading: string;
  paragraphs: string[];
  /** Lista opcional (passos, sinais por faixa, etc.). */
  items?: string[];
}

export interface ServiceContent {
  slug: string;
  /** H1 com termo-alvo + cidade (SDD §5.2 / §10). */
  h1: string;
  /** Meta description (~150 caracteres) para a Metadata API. */
  metaDescription: string;
  /** Subtítulo empático de 1 frase no hero (SDD §5.1.1). */
  heroSubtitle: string;
  /** Parágrafo de introdução logo abaixo do hero. */
  intro: string;
  /** "Pode ser hora de buscar ajuda se..." — sinais na linguagem do paciente (SDD §5.1.2). */
  signs: string[];
  /** Nota de que só a avaliação médica confirma diagnóstico (SDD §5.1.2). */
  signsNote: string;
  /** "Como funciona o tratamento na Open Mind" — parágrafos (SDD §5.1.3). */
  treatment: string[];
  /** Blocos extras das particularidades §5.2 (renderizados após o tratamento). */
  extraBlocks: ServiceBlock[];
  /** FAQ 4–6 perguntas (SDD §5.1.6). */
  faq: ServiceFAQ[];
}
