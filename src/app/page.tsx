import Link from "next/link";
import { site, whatsappMessages } from "@/config/site";
import { featuredServices } from "@/config/services";
import { team } from "@/config/team";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TeamCard } from "@/components/ui/TeamCard";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { CTAWhatsApp } from "@/components/ui/CTAWhatsApp";
import { buttonClass } from "@/components/ui/Button";
import { staggerDelay } from "@/lib/motion";
import { PinIcon } from "@/components/ui/icons";

const brandAttributes = [
  "Acolhedora",
  "Científica",
  "Discreta",
  "Humanizada",
  "Especializada",
];

// Blurbs curtos e conservadores (sem promessa clínica) — a copy completa é da F3.
const featuredBlurbs: Record<string, string> = {
  tea: "Avaliação e acompanhamento do Transtorno do Espectro Autista, a partir dos 2 anos.",
  canabidiol:
    "O serviço médico: avaliação de elegibilidade, prescrição e acompanhamento, dentro das normas.",
  "medicina-do-sono":
    "Avaliação clínica e tratamento dos distúrbios do sono, como a insônia.",
};

const steps = [
  {
    n: "1",
    title: "Você chama no WhatsApp",
    text: "O primeiro passo é uma conversa, não um formulário.",
  },
  {
    n: "2",
    title: "Triagem acolhedora",
    text: "Entendemos sua necessidade e orientamos o melhor caminho.",
  },
  {
    n: "3",
    title: "Consulta agendada",
    text: "Atendimento por convênio Unimed ou particular.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — coreografia CSS pura (SDD §5.3 / §6.5) */}
      <section className="relative overflow-hidden bg-linear-to-b from-petrol-50 to-white">
        <Container className="flex flex-col items-start gap-6 py-20 sm:py-28 lg:py-32">
          <p className="hero-sub text-eyebrow uppercase text-blue-700">
            Open Mind · {site.address.city}/{site.address.state}
          </p>
          <h1 className="hero-title max-w-3xl text-display text-petrol-900">
            Psiquiatria humanizada em Florianópolis
          </h1>
          <p className="hero-sub max-w-readable text-lead text-petrol-700">
            Cuidado psiquiátrico baseado em evidências, no centro da cidade. Cada
            plano terapêutico é construído para a história de cada paciente.
          </p>
          <div className="hero-cta mt-2 flex flex-col gap-3 sm:flex-row">
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

      {/* Faixa de confiança — atributos de marca (sem números inventados, SDD §5.3) */}
      <div className="border-y border-petrol-100 bg-white">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6">
          {brandAttributes.map((attr) => (
            <span
              key={attr}
              className="text-eyebrow uppercase text-petrol-500"
            >
              {attr}
            </span>
          ))}
        </Container>
      </div>

      {/* Serviços em destaque — os 3 carro-chefe (SDD §5.3) */}
      <Section className="bg-petrol-50">
        <Container>
          <Reveal>
            <div className="max-w-readable">
              <h2 className="text-h2 text-petrol-900">Áreas de cuidado</h2>
              <p className="mt-3 text-petrol-700">
                Atendimento especializado para crianças, adolescentes e adultos.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <Reveal key={s.slug} delay={staggerDelay(i)} className="h-full">
                <ServiceCard
                  href={s.path}
                  title={s.title}
                  description={featuredBlurbs[s.slug]}
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={staggerDelay(3)} className="mt-8">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-1.5 font-medium text-blue-700 underline-offset-4 hover:underline"
            >
              Ver todos os serviços
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Como funciona — 3 passos (SDD §5.3) */}
      <Section>
        <Container>
          <Reveal>
            <h2 className="text-h2 text-petrol-900">Como funciona</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={staggerDelay(i)}>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-blue-100 font-serif text-xl text-blue-700">
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

      {/* Equipe (teaser) — fotos com placeholder (SDD §5.3 / PENDENTE 3) */}
      <Section className="bg-petrol-50">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-h2 text-petrol-900">Corpo clínico</h2>
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

      {/* Localização (SDD §5.3) */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <h2 className="text-h2 text-petrol-900">Onde estamos</h2>
              <p className="mt-4 flex items-start gap-2 text-petrol-700">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-petrol-500" />
                <span>{site.address.full}</span>
              </p>
              <p className="mt-2 text-petrol-700">
                {site.address.building} · {site.address.district}, no centro de
                Florianópolis.
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

      {/* CTA final (SDD §5.3) */}
      <Section className="bg-petrol-700">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="max-w-2xl text-h2 text-white">
              O primeiro passo é uma conversa
            </h2>
          </Reveal>
          <Reveal delay={staggerDelay(1)}>
            <p className="max-w-readable text-petrol-100">
              Fale com a Open Mind pelo WhatsApp. Atendimento acolhedor,
              sigiloso e sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={staggerDelay(2)}>
            <CTAWhatsApp
              message={whatsappMessages.default}
              pagePath="/"
              ctaPosition="cta-final"
            />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
