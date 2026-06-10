import { site } from "@/config/site";
import type { TeamMember } from "@/config/team";
import type { ServiceMeta } from "@/config/services";
import type { ServiceContent } from "@/content/types";
import { REVIEW_DATE_ISO } from "@/content/review";

/**
 * Dados estruturados (SDD §8). Apenas dados reais — campos pendentes (geo,
 * horários, CNPJ) são omitidos até confirmação, nunca inventados.
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

export function medicalWebPageLd(
  meta: ServiceMeta,
  content: ServiceContent,
  reviewers: TeamMember[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: content.h1,
    description: content.metaDescription,
    url: `${site.url}${meta.path}`,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#clinic` },
    about: { "@type": "MedicalCondition", name: meta.title },
    lastReviewed: REVIEW_DATE_ISO,
    reviewedBy: reviewers.map((r) => ({
      "@type": "Physician",
      name: r.name,
      identifier: `CRM-SC ${r.crmSc} / RQE ${r.rqe}`,
    })),
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
