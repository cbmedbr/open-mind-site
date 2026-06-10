import type { Metadata } from "next";
import { site, whatsappMessages } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { CTAWhatsApp } from "@/components/ui/CTAWhatsApp";
import { JsonLd } from "@/components/ui/JsonLd";
import { PinIcon, MailIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { staggerDelay } from "@/lib/motion";
import { medicalClinicLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contato e localização",
  description:
    "Fale com a Open Mind, clínica de psiquiatria no centro de Florianópolis. Endereço no Edifício Pórtico, WhatsApp, e-mail e Instagram.",
};

export default function ContatoPage() {
  return (
    <>
      <JsonLd data={medicalClinicLd()} />

      <PageHeader
        title="Contato e localização"
        lead="O primeiro passo é uma conversa pelo WhatsApp. Estamos no centro de Florianópolis."
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-h3 text-petrol-900">Onde nos encontrar</h2>
              <ul className="mt-6 space-y-5 text-petrol-700">
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol-500" />
                  <span>{site.address.full}</span>
                </li>
                <li className="flex items-start gap-3">
                  <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol-500" />
                  <span>
                    WhatsApp:{" "}
                    <a
                      href={`https://wa.me/${site.contact.whatsapp.e164}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-petrol-900 underline-offset-2 hover:underline"
                    >
                      {site.contact.whatsapp.display}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol-500" />
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-petrol-900 underline-offset-2 hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-petrol-500" />
                  <a
                    href={site.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-petrol-900 underline-offset-2 hover:underline"
                  >
                    {site.contact.instagram}
                  </a>
                </li>
              </ul>

              {/* Horários: TODO [PENDENTE 9] — não inventar; direcionar ao WhatsApp. */}
              <p className="mt-6 text-[0.95rem] text-petrol-700">
                Horários de atendimento: confirme a disponibilidade pelo
                WhatsApp.
              </p>

              <div className="mt-8">
                <CTAWhatsApp
                  message={whatsappMessages.default}
                  pagePath="/contato"
                  ctaPosition="contato"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={staggerDelay(1)}>
            <MapEmbed className="aspect-4/3 h-full min-h-80 w-full" />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
