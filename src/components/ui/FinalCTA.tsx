import { Container } from "./Container";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CTAWhatsApp } from "./CTAWhatsApp";
import { staggerDelay } from "@/lib/motion";

interface FinalCTAProps {
  /** Mensagem pré-preenchida do WhatsApp da página de origem (SDD §7.1). */
  message: string;
  pagePath: string;
  title?: string;
  text?: string;
}

/**
 * CTA final (SDD §5.1 item 7 / §5.3 item 9). Fecha toda página com convite à
 * conversa — nunca autodiagnóstico (SDD §9.1).
 */
export function FinalCTA({
  message,
  pagePath,
  title = "O primeiro passo é uma conversa",
  text = "Fale com a Open Mind pelo WhatsApp. Atendimento acolhedor, sigiloso e sem compromisso.",
}: FinalCTAProps) {
  return (
    <Section className="bg-petrol-700">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="max-w-2xl text-h2 text-white">{title}</h2>
        </Reveal>
        <Reveal delay={staggerDelay(1)}>
          <p className="max-w-readable text-petrol-100">{text}</p>
        </Reveal>
        <Reveal delay={staggerDelay(2)}>
          <CTAWhatsApp
            message={message}
            pagePath={pagePath}
            ctaPosition="cta-final"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
