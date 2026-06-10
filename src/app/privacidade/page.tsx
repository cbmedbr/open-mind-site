import type { Metadata } from "next";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a Open Mind trata os seus dados pessoais, em conformidade com a LGPD. Cookies, analytics, canal de WhatsApp e direitos do titular.",
};

const LAST_UPDATE = "junho de 2026";

export default function PrivacidadePage() {
  return (
    <>
      <PageHeader
        title="Política de privacidade"
        lead="Como tratamos os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018)."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Política de privacidade" },
        ]}
      />

      <Section>
        <Container className="max-w-readable space-y-10 text-petrol-700">
          <p className="text-[0.9rem] text-petrol-700">
            Última atualização: {LAST_UPDATE}.
          </p>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">1. Quem é o controlador</h2>
            <p>
              O controlador dos dados tratados neste site é a {site.name},
              clínica de psiquiatria localizada em {site.address.full}.
            </p>
            {site.legal.companyName && (
              <p>
                {site.legal.companyName}
                {site.legal.cnpj ? ` — CNPJ ${site.legal.cnpj}.` : "."}
              </p>
            )}
            <p>
              Para qualquer questão relacionada à privacidade, fale conosco pelo
              e-mail{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-petrol-900 underline-offset-2 hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">2. Dados que coletamos</h2>
            <p>
              Este site é institucional e não possui formulários que coletem
              dados de saúde. Coletamos apenas dados de navegação para entender
              o uso do site e melhorá-lo, por meio de ferramentas de analytics
              (como o Google Analytics): páginas visitadas, origem do acesso,
              tipo de dispositivo e dados aproximados de localização, de forma
              agregada.
            </p>
            <p>
              Nenhum dado sensível de saúde é solicitado ou armazenado por este
              site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">
              3. Cookies e consentimento
            </h2>
            <p>
              Utilizamos cookies essenciais ao funcionamento do site e cookies
              de analytics. Os cookies de analytics só são ativados após o seu
              consentimento, solicitado por um aviso na primeira visita. Você
              pode ajustar as suas preferências a qualquer momento nas
              configurações do seu navegador.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">
              4. O WhatsApp como canal de triagem
            </h2>
            <p>
              O atendimento inicial acontece pelo WhatsApp. As mensagens trocadas
              nesse canal são tratadas com sigilo e servem para entender a sua
              necessidade e agendar a consulta. Informações sensíveis de saúde
              são tratadas em ambiente clínico, no decorrer do atendimento
              médico, e não neste site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">
              5. Finalidades e base legal
            </h2>
            <p>
              Tratamos os dados de navegação com base no seu consentimento e no
              legítimo interesse de manter e aprimorar o site. Os dados de
              contato compartilhados por você no WhatsApp são tratados para
              viabilizar o agendamento e o atendimento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">6. Compartilhamento</h2>
            <p>
              Não vendemos os seus dados. Eles podem ser processados por
              prestadores de serviço que viabilizam a operação do site (por
              exemplo, hospedagem e analytics), sempre limitados às finalidades
              descritas nesta política.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">
              7. Os seus direitos (LGPD)
            </h2>
            <p>
              Você pode solicitar, a qualquer momento, a confirmação da
              existência de tratamento, o acesso, a correção, a anonimização, a
              portabilidade ou a eliminação dos seus dados, além de revogar o
              consentimento. Para exercer esses direitos, escreva para{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-petrol-900 underline-offset-2 hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">8. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais razoáveis para
              proteger os dados tratados, incluindo conexão segura (HTTPS).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 text-petrol-900">
              9. Alterações desta política
            </h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças no site
              ou na legislação. A data da última atualização é indicada no topo
              desta página.
            </p>
          </section>
        </Container>
      </Section>
    </>
  );
}
