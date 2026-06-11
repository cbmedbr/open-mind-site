import { site } from "@/config/site";
import type { TeamMember } from "@/config/team";

/**
 * Dados estruturados (SDD §8): MedicalClinic (home/contato), Physician (equipe)
 * e FAQPage (FAQ da home). Apenas dados reais; campos pendentes são omitidos.
 */

export function medicalClinicLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${site.url}/#clinic`,
    name: site.seoName,
    url: site.url,
    email: site.contact.email,
    telephone: `+${site.contact.whatsapp.e164}`,
    medicalSpecialty: "Psychiatric",
    ...(site.legal.companyName ? { legalName: site.legal.companyName } : {}),
    ...(site.legal.cnpj ? { taxID: site.legal.cnpj } : {}),
    ...(site.legal.foundingDate ? { foundingDate: site.legal.foundingDate } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.complement}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "BR",
    },
    areaServed: site.address.city,
    sameAs: [site.contact.instagramUrl],
    // geo e openingHours: TODO [PENDENTE 9 / geocode] — adicionar na F4.
  };
}

export function faqPageLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function physicianLd(m: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: m.name,
    medicalSpecialty: "Psychiatric",
    memberOf: {
      "@type": "MedicalOrganization",
      name: site.seoName,
      url: site.url,
    },
    identifier: `CRM-SC ${m.crmSc} / RQE ${m.rqe}`,
  };
}
