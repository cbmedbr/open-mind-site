import type { Metadata } from "next";
import { site, whatsappMessages } from "@/config/site";
import { brandAttributes } from "@/config/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Differentials } from "@/components/ui/Differentials";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { staggerDelay } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Sobre a clínica",
  description:
    "A Open Mind é uma clínica de psiquiatria humanizada e baseada em evidências, no centro de Florianópolis. Conheça a nossa filosofia de cuidado.",
};

const philosophy = [
  {
    title: "Paciente protagonista",
    text: "Você é o centro do cuidado. As decisões são tomadas com você, no seu tempo.",
  },
  {
    title: "Baseado em evidências",
    text: "Cada conduta se apoia na melhor ciência disponível, sem modismos nem promessas.",
  },
  {
    title: "Acolhimento",
    text: "Um espaço sem julgamento, onde a sua história é ouvida com atenção e respeito.",
  },
];

const valueDescriptions: Record<string, string> = {
  Acolhedora: "Tom empático, escuta sem julgamento e respeito pela sua história.",
  Científica: "Decisões fundamentadas em evidência, com sobriedade.",
  Discreta: "Sigilo e privacidade em cada etapa do cuidado.",
  Humanizada: "A pessoa no centro, não o diagnóstico.",
  Especializada: "Psiquiatras com formação e foco por área de atuação.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        title="Sobre a Open Mind"
        lead={site.tagline}
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Sobre" }]}
      />

      {/* Propósito (SDD §5.4) */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="max-w-readable">
              <SectionHeader eyebrow="Nosso propósito" title="Psiquiatria de verdade, sem fricção" />
              <p className="mt-5 text-petrol-700">
                A Open Mind reúne psiquiatras especializadas para cuidar de
                crianças, adolescentes e adultos no centro de Florianópolis. Une
                tecnologia, ciência e empatia em saúde mental, com escuta
                qualificada e planos construídos caso a caso.
              </p>
              <p className="mt-4 text-petrol-700">
                Aqui, o primeiro passo é uma conversa — acolhedora e sigilosa —,
                não um formulário. O objetivo é simples: oferecer um cuidado
                premium, humano e baseado em evidências.
              </p>
            </div>
          </Reveal>
          <Reveal delay={staggerDelay(1)}>
            {/* TODO [PENDENTE]: fotos reais do espaço da clínica em alta resolução. */}
            <PhotoPlaceholder className="aspect-4/3 w-full" label="Foto da clínica em breve" />
          </Reveal>
        </Container>
      </Section>

      {/* Filosofia de cuidado (SDD §5.4) */}
      <Section className="bg-petrol-50">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Filosofia de cuidado"
              title="Como pensamos o cuidado"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={staggerDelay(i)}>
                <div className="h-full rounded-card border border-petrol-100 bg-white p-6">
                  <h3 className="text-h3 text-petrol-900">{p.title}</h3>
                  <p className="mt-2 text-petrol-700">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Espaço físico (SDD §5.4) */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="O espaço"
              title="No coração do Centro"
              lead={`${site.address.building}, ${site.address.district}, em um ambiente pensado para ser acolhedor e discreto.`}
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {/* TODO [PENDENTE]: fotos reais do espaço (recepção, consultórios). */}
            <PhotoPlaceholder className="aspect-4/3" />
            <PhotoPlaceholder className="aspect-4/3" />
            <PhotoPlaceholder className="aspect-4/3" />
          </div>
        </Container>
      </Section>

      {/* Valores (SDD §5.4 / §2) */}
      <Section className="bg-petrol-50">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Valores" title="O que nos guia" />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandAttributes.map((attr, i) => (
              <Reveal key={attr} delay={staggerDelay(i)}>
                <div>
                  <h3 className="text-h3 text-petrol-900">{attr}</h3>
                  <p className="mt-1.5 text-petrol-700">
                    {valueDescriptions[attr]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Diferenciais (consistência de marca, SDD §5.1) */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Por que a Open Mind" title="Um cuidado que começa pela escuta" />
          </Reveal>
          <div className="mt-10">
            <Differentials />
          </div>
        </Container>
      </Section>

      <FinalCTA message={whatsappMessages.default} pagePath="/sobre" />
    </>
  );
}
