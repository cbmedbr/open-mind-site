import type { Metadata } from "next";
import { services } from "@/config/services";
import { whatsappMessages } from "@/config/site";
import { getServiceContent } from "@/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { staggerDelay } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "As áreas de cuidado da Open Mind em Florianópolis: TEA, TDAH, canabidiol, medicina do sono, psiquiatria infantil, ansiedade, depressão, transtorno bipolar e mais.",
};

export default function ServicosHub() {
  return (
    <>
      <PageHeader
        title="Áreas de cuidado"
        lead="Atendimento psiquiátrico especializado para crianças, adolescentes e adultos. Escolha a área para entender como podemos ajudar."
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Serviços" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={staggerDelay(i % 3)} className="h-full">
                <ServiceCard
                  href={s.path}
                  title={s.title}
                  description={getServiceContent(s.slug)?.heroSubtitle}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA message={whatsappMessages.default} pagePath="/servicos" />
    </>
  );
}
