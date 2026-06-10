import Link from "next/link";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { PinIcon } from "@/components/ui/icons";

const institutional = [
  { label: "Sobre a clínica", href: "/sobre" },
  { label: "Corpo clínico", href: "/equipe" },
  { label: "Contato", href: "/contato" },
  { label: "Política de privacidade", href: "/privacidade" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const rt = site.responsibleTechnician;
  const rtCredential = rt.crm && rt.rqe ? ` · CRM-SC ${rt.crm} · RQE ${rt.rqe}` : "";

  return (
    <footer className="border-t-2 border-gold-500 bg-petrol-700 text-petrol-100">
      {/* Linha de crise — sempre visível (SDD §9.3) */}
      <div className="border-b border-white/10">
        <Container className="py-4">
          <p className="text-[0.9rem] leading-snug text-petrol-50">
            {site.crisis.footerLine}
          </p>
        </Container>
      </div>

      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* Marca + NAP */}
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-[0.95rem] text-petrol-100/90">
            {site.tagline}
          </p>
          <address className="mt-5 space-y-2 text-[0.9rem] not-italic text-petrol-100/90">
            <span className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-petrol-50" />
              <span>{site.address.full}</span>
            </span>
            <span className="block">
              <a
                href={`mailto:${site.contact.email}`}
                className="underline-offset-2 hover:text-white hover:underline"
              >
                {site.contact.email}
              </a>
            </span>
            <span className="block">
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${site.contact.whatsapp.e164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-white hover:underline"
              >
                {site.contact.whatsapp.display}
              </a>
            </span>
            <span className="block">
              <a
                href={site.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-white hover:underline"
              >
                Instagram {site.contact.instagram}
              </a>
            </span>
          </address>
        </div>

        {/* Serviços — linkagem interna de SEO (SDD §4/§10) */}
        <nav aria-label="Serviços">
          <h2 className="text-eyebrow uppercase text-gold-500">Serviços</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.path}
                  className="text-petrol-100/90 underline-offset-2 hover:text-white hover:underline"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Institucional */}
        <nav aria-label="Institucional">
          <h2 className="text-eyebrow uppercase text-gold-500">Open Mind</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9rem]">
            {institutional.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-petrol-100/90 underline-offset-2 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      {/* Barra inferior: responsável técnico + jurídico (CFM 2.336/2023, SDD §9.1) */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-[0.82rem] text-petrol-100/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Responsável técnico: {rt.name}
            {rtCredential}
            {/* CRM-SC/RQE do RT: TODO [PENDENTE 4] */}
          </p>
          <p>
            © {year} {site.name}
            {site.legal.companyName ? ` · ${site.legal.companyName}` : ""}
            {site.legal.cnpj ? ` · CNPJ ${site.legal.cnpj}` : ""}
            {/* Razão social / CNPJ: TODO [PENDENTE 4] — só renderiza após confirmação */}
          </p>
        </Container>
      </div>
    </footer>
  );
}
