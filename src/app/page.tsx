import Link from "next/link";
import { site, whatsappMessages } from "@/config/site";
import { team } from "@/config/team";
import { brandAttributes, howItWorks, careAreas } from "@/config/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { CTAWhatsApp } from "@/components/ui/CTAWhatsApp";
import { Differentials } from "@/components/ui/Differentials";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { buttonClass } from "@/components/ui/Button";
import { PinIcon } from "@/components/ui/icons";
import { staggerDelay } from "@/lib/motion";
import { medicalClinicLd, faqPageLd } from "@/lib/jsonld";

const ageSentence = (() => {
  const by = Object.fromEntries(team.map((m) => [m.slug, m]));
  return `Atendemos a partir dos ${by["patricia"].ageMin} anos com a ${by["patricia"].shortName}; a ${by["ana-beatriz"].shortName} atende a partir dos ${by["ana-beatriz"].ageMin} anos e a ${by["angela"].shortName}, a partir dos ${by["angela"].ageMin} anos.`;
})();

const faq = [
  {
    question: "A Open Mind atende por convênio?",
    answer:
      "Atendemos pelo convênio Unimed e também em modalidade particular.",
  },
  {
    question: "Como é a primeira consulta?",
    answer:
      "É uma avaliação cuidadosa: a médica escuta a sua história, entende as suas necessidades e, junto com você, define os próximos passos do cuidado.",
  },
  {
    question: "A partir de que idade vocês atendem?",
    answer: ageSentence,
  },
  {
    question: "O atendimento é sigiloso?",
    answer:
      "Sim. O sigilo médico é a base do cuidado: as suas informações são tratadas com total confidencialidade.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={medicalClinicLd()} />
      <JsonLd data={faqPageLd(faq)} />

      {/* 1. Hero — coreografia CSS pura (SDD §5.3 / §6.5) */}
      <section className="relative overflow-hidden bg-linear-to-b from-gold-100 to-white">
        <Container className="flex flex-col items-start gap-5 py-20 sm:py-28 lg:py-32">
          <p className="hero-sub flex items-center gap-2.5 text-eyebrow uppercase text-petrol-700">
            <span aria-hidden="true" className="h-px w-7 bg-gold-500" />
            Psiquiatria · {site.address.city}/{site.address.state}
          </p>
          <h1 className="hero-title max-w-3xl text-display text-petrol-900">
            Psiquiatria humanizada em Florianópolis
          </h1>
          <p className="hero-sub max-w-readable font-serif text-lead italic text-petrol-700">
            {site.tagline}
          </p>
          <p className="hero-sub max-w-readable text-lead text-petrol-700">
            Cuidado psiquiátrico baseado em evidências, no centro da cidade,
            para crianças, adolescentes e adultos. Cada plano terapêutico é
            construído para a sua história.
          </p>
          <div className="hero-cta mt-3 flex flex-col gap-3 sm:flex-row">
            <CTAWhatsApp
              message={whatsappMessages.default}
              pagePath="/"
              ctaPosition="hero"
            />
            <Link href="/sobre" className={buttonClass("outline", "lg")}>
              Conhecer a clínica
            </Link>
          </div>
        </Container>
      </section>

      {/* 2. Faixa de confiança — atributos de marca, sem números inventados (SDD §5.3) */}
      <div className="border-y border-petrol-100 bg-white">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6">
          {brandAttributes.map((attr) => (
            <span key={attr} className="text-eyebrow uppercase text-petrol-700">
              {attr}
            </span>
          ))}
        </Container>
      </div>

      {/* 3. O que atendemos — bloco simples, sem páginas/links/CTA (SDD §5.1 / §4, v1.1) */}
      <Section className="bg-gold-100">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="O que atendemos"
              title="Condições e serviços"
              lead="As principais condições e serviços acompanhados pela equipe da Open Mind, para crianças, adolescentes e adultos."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careAreas.map((group, i) => (
              <Reveal key={group.group} delay={staggerDelay(i)}>
                <div className="h-full rounded-card border border-petrol-100 bg-white p-6">
                  <h3 className="text-h3 text-petrol-900">{group.group}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-petrol-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-pill bg-gold-500"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Como funciona — 3 passos (SDD §5.3) */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Como funciona"
              title="Do WhatsApp à consulta, em poucos passos"
            />
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {howItWorks.map((step, i) => (
              <Reveal key={step.n} delay={staggerDelay(i)}>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-gold-100 font-serif text-xl text-petrol-900">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-h3 text-petrol-900">{step.title}</h3>
                  <p className="mt-2 text-petrol-700">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Diferenciais (SDD §5.3 item 5) */}
      <Section className="bg-gold-100">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Por que a Open Mind"
              title="Um cuidado que começa pela escuta"
            />
          </Reveal>
          <div className="mt-10">
            <Differentials />
          </div>
        </Container>
      </Section>

      {/* 6. Equipe (teaser) — fotos com placeholder (SDD §5.3 / PENDENTE 3) */}
      <Section>
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader
                eyebrow="Corpo clínico"
                title="Psiquiatras especializadas"
              />
              <Link
                href="/equipe"
                className="font-medium text-blue-700 underline-offset-4 hover:underline"
              >
                Conhecer a equipe
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={staggerDelay(i)} className="h-full">
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Localização (SDD §5.3) */}
      <Section className="bg-gold-100">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeader eyebrow="Onde estamos" title="No centro de Florianópolis" />
              <p className="mt-5 flex items-start gap-2 text-petrol-700">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-petrol-500" />
                <span>{site.address.full}</span>
              </p>
              <p className="mt-2 text-petrol-700">
                {site.address.building} · {site.address.district}.
              </p>
              <div className="mt-6">
                <Link href="/contato" className={buttonClass("secondary", "md")}>
                  Ver contato e acesso
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={staggerDelay(1)}>
            <MapEmbed className="aspect-4/3 w-full" />
          </Reveal>
        </Container>
      </Section>

      {/* 8. FAQ geral (SDD §5.3) — sem telemedicina na v1 */}
      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeader eyebrow="Perguntas frequentes" title="Tudo bem ter dúvidas" />
          </Reveal>
          <Reveal delay={staggerDelay(1)} className="mt-8">
            <FAQAccordion items={faq} />
          </Reveal>
        </Container>
      </Section>

      {/* 9. CTA final (SDD §5.3) */}
      <FinalCTA message={whatsappMessages.default} pagePath="/" />
    </>
  );
}
