import Link from "next/link";
import { getService, getRelatedServices } from "@/config/services";
import { getTeamMember, credential, type TeamMember } from "@/config/team";
import type { ServiceContent } from "@/content/types";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CrisisBanner } from "@/components/ui/CrisisBanner";
import { CTAWhatsApp } from "@/components/ui/CTAWhatsApp";
import { Differentials } from "@/components/ui/Differentials";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { TeamCard } from "@/components/ui/TeamCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { buttonClass } from "@/components/ui/Button";
import { PinIcon, CheckIcon } from "@/components/ui/icons";
import { staggerDelay } from "@/lib/motion";
import { medicalWebPageLd, faqPageLd } from "@/lib/jsonld";
import { REVIEW_DATE_LABEL } from "@/content/review";

/** "Revisado por Dra. Nome (CRM-SC X · RQE Y)..." — credenciais reais (SDD §5.1/§5.5). */
function reviewedByText(reviewers: TeamMember[]): string {
  const parts = reviewers.map((r) => `${r.name} (${credential(r)})`);
  if (parts.length === 1) return `Revisado por ${parts[0]}.`;
  const last = parts.pop();
  return `Revisado por ${parts.join(", ")} e ${last}.`;
}

/**
 * Template padrão das páginas de serviço (SDD §5.1). Toda a estrutura, motion,
 * CrisisBanner (§9.3), "quem atende" + revisão médica assinada (§5.5) e JSON-LD
 * vivem aqui — a copy entra por `content`. Fecha sempre com convite à avaliação
 * individual, nunca autodiagnóstico (§9.1).
 */
export function ServiceTemplate({ content }: { content: ServiceContent }) {
  const meta = getService(content.slug);
  if (!meta) return null;

  const reviewers = meta.professionals.map(getTeamMember);
  const related = getRelatedServices(content.slug);

  return (
    <>
      <JsonLd data={medicalWebPageLd(meta, content, reviewers)} />
      <JsonLd data={faqPageLd(content.faq)} />

      {/* 1. Hero (SDD §5.1.1) */}
      <section className="border-b border-petrol-100 bg-linear-to-b from-petrol-50 to-white">
        <Container className="py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: meta.navLabel },
            ]}
          />
          <h1 className="hero-title mt-5 max-w-3xl text-h1 text-petrol-900">
            {content.h1}
          </h1>
          <p className="hero-sub mt-4 max-w-readable text-lead text-petrol-700">
            {content.heroSubtitle}
          </p>
          <div className="hero-cta mt-7">
            <CTAWhatsApp
              message={meta.whatsappMessage}
              pagePath={meta.path}
              ctaPosition="hero"
            />
          </div>
        </Container>
      </section>

      {/* CrisisBanner — visível instantaneamente, SEM animação (SDD §9.3) */}
      {meta.crisisBanner && <CrisisBanner />}

      {/* Intro + "Pode ser hora de buscar ajuda se..." (SDD §5.1.2) */}
      <Section>
        <Container className="max-w-readable">
          <Reveal>
            <p className="text-lead text-petrol-700">{content.intro}</p>
          </Reveal>
          <Reveal className="mt-12">
            <h2 className="text-h2 text-petrol-900">
              Pode ser hora de buscar ajuda se…
            </h2>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {content.signs.map((sign, i) => (
              <Reveal key={i} delay={staggerDelay(i)}>
                <li className="flex gap-3 text-petrol-700">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                  <span>{sign}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-6">
            <p className="rounded-card bg-blue-100 p-4 text-[0.95rem] text-petrol-900">
              {content.signsNote}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Como funciona o tratamento (SDD §5.1.3) */}
      <Section className="bg-petrol-50">
        <Container className="max-w-readable">
          <Reveal>
            <SectionHeader
              eyebrow="Tratamento"
              title="Como funciona o tratamento na Open Mind"
            />
          </Reveal>
          <div className="mt-6 space-y-4">
            {content.treatment.map((p, i) => (
              <Reveal key={i} delay={staggerDelay(i)}>
                <p className="text-petrol-700">{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Particularidades §5.2 (blocos extras) */}
      {content.extraBlocks.length > 0 && (
        <Section>
          <Container className="max-w-readable space-y-12">
            {content.extraBlocks.map((block, i) => (
              <Reveal key={i}>
                <div>
                  <h2 className="text-h2 text-petrol-900">{block.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {block.paragraphs.map((p, j) => (
                      <p key={j} className="text-petrol-700">
                        {p}
                      </p>
                    ))}
                  </div>
                  {block.items && block.items.length > 0 && (
                    <ol className="mt-5 space-y-3">
                      {block.items.map((it, j) => (
                        <li key={j} className="flex gap-3 text-petrol-700">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-blue-100 font-serif text-[0.85rem] text-blue-700">
                            {j + 1}
                          </span>
                          <span className="pt-0.5">{it}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </Reveal>
            ))}
          </Container>
        </Section>
      )}

      {/* 4. Diferenciais (SDD §5.1.4) */}
      <Section className="bg-petrol-50">
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

      {/* 5. Quem atende + revisão médica assinada (SDD §5.1.5 / §5.5) */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Quem atende"
              title={
                reviewers.length > 1
                  ? "Profissionais que atendem"
                  : "Profissional responsável"
              }
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviewers.map((m, i) => (
              <Reveal key={m.slug} delay={staggerDelay(i)} className="h-full">
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="rounded-card border border-petrol-100 bg-petrol-50 p-4 text-[0.9rem] text-petrol-700">
              {reviewedByText(reviewers)} Última revisão: {REVIEW_DATE_LABEL}.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Veja também — linkagem interna de SEO (SDD §10) */}
      {related.length > 0 && (
        <Section className="bg-petrol-50">
          <Container>
            <Reveal>
              <SectionHeader eyebrow="Veja também" title="Outras áreas de cuidado" />
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={staggerDelay(i)} className="h-full">
                  <ServiceCard href={r.path} title={r.title} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 6. FAQ (SDD §5.1.6) */}
      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeader
              eyebrow="Perguntas frequentes"
              title="Tudo bem ter dúvidas"
            />
          </Reveal>
          <Reveal className="mt-8">
            <FAQAccordion items={content.faq} />
          </Reveal>
        </Container>
      </Section>

      {/* Bloco resumido de localização (SDD §5.1.7) */}
      <Section className="bg-petrol-50">
        <Container className="flex flex-col items-start gap-4">
          <p className="flex items-start gap-2 text-petrol-700">
            <PinIcon className="mt-1 h-5 w-5 shrink-0 text-petrol-500" />
            <span>{site.address.full}</span>
          </p>
          <Link href="/contato" className={buttonClass("outline", "md")}>
            Ver contato e localização
          </Link>
        </Container>
      </Section>

      {/* 7. CTA final — convite à avaliação individual (SDD §5.1.7 / §9.1) */}
      <FinalCTA
        message={meta.whatsappMessage}
        pagePath={meta.path}
        title="Vamos conversar sobre o seu caso?"
        text="O primeiro passo é uma avaliação individual, no seu tempo. Fale com a Open Mind pelo WhatsApp."
      />
    </>
  );
}
