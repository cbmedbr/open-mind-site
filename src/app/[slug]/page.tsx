import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/config/services";
import { getServiceContent } from "@/content";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";

type Params = Promise<{ slug: string }>;

/** Apenas os 10 slugs de serviço são válidos; o resto retorna 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getServiceContent(slug);
  if (!content) return {};
  return {
    title: content.h1,
    description: content.metaDescription,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const content = getServiceContent(slug);
  if (!content) notFound();
  return <ServiceTemplate content={content} />;
}
