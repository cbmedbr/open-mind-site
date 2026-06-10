/**
 * Copy de marca reutilizável (SDD §2, §5.1, §5.3). Centralizado para Home e as
 * páginas de serviço (F3) ficarem CONSISTENTES. Nível institucional, sem
 * promessa clínica e sem autodiagnóstico (SDD §9.1).
 */

/** Atributos de marca (SDD §2) — faixa de confiança, sem números inventados. */
export const brandAttributes = [
  "Acolhedora",
  "Científica",
  "Discreta",
  "Humanizada",
  "Especializada",
];

/** Como funciona — 3 passos (SDD §5.3). */
export const howItWorks = [
  {
    n: "1",
    title: "Você chama no WhatsApp",
    text: "O primeiro passo é uma conversa, não um formulário.",
  },
  {
    n: "2",
    title: "Triagem acolhedora",
    text: "Entendemos a sua necessidade e orientamos o melhor caminho.",
  },
  {
    n: "3",
    title: "Consulta agendada",
    text: "Atendimento por convênio Unimed ou particular.",
  },
];

/** Diferenciais — consistentes em todas as páginas (SDD §5.1 item 4 / §5.3 item 5). */
export const differentials = [
  {
    title: "Escuta qualificada",
    text: "Tempo e atenção para entender a sua história antes de qualquer conduta.",
  },
  {
    title: "Plano individualizado",
    text: "Cada plano terapêutico é construído para a sua história — não para um diagnóstico genérico.",
  },
  {
    title: "Base em evidências",
    text: "Condutas fundamentadas na melhor evidência científica disponível.",
  },
  {
    title: "Discrição",
    text: "Sigilo e cuidado com a sua privacidade em todas as etapas.",
  },
];
