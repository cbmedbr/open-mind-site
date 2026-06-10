import type { Metadata } from "next";
import { site, whatsappMessages } from "@/config/site";
import { team } from "@/config/team";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { TeamCard } from "@/components/ui/TeamCard";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { staggerDelay } from "@/lib/motion";
import { physicianLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Corpo clínico",
  description:
    "Conheça as psiquiatras da Open Mind em Florianópolis — formação, RQE e áreas de atuação. Atendimento por convênio Unimed e particular.",
};

export default function EquipePage() {
  return (
    <>
      <JsonLd data={team.map(physicianLd)} />

      <PageHeader
        title="Corpo clínico"
        lead="Psiquiatras especializadas, com formação e foco por área de atuação. Cada profissional traz a sua expertise para o cuidado certo."
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Equipe" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={staggerDelay(i)} className="h-full">
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={staggerDelay(3)} className="mt-10">
            <p className="font-serif text-lead italic text-petrol-700">
              {site.tagline}
            </p>
          </Reveal>
        </Container>
      </Section>

      <FinalCTA message={whatsappMessages.default} pagePath="/equipe" />
    </>
  );
}
