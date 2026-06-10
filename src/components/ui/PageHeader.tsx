import { Container } from "./Container";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  lead?: string;
  breadcrumbs: Crumb[];
}

/**
 * Cabeçalho das páginas internas: breadcrumbs + H1 + lead, sobre fundo claro.
 * Entrada em CSS puro (hero-title/hero-sub) — o H1 (LCP) nunca fica invisível.
 */
export function PageHeader({ title, lead, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="border-b border-petrol-100 bg-gold-100">
      <Container className="py-12 sm:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="hero-title mt-5 max-w-3xl text-h1 text-petrol-900">
          {title}
        </h1>
        {lead && (
          <p className="hero-sub mt-4 max-w-readable text-lead text-petrol-700">
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
