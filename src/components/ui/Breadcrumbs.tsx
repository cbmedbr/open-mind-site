import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Trilha de navegação (SDD §6.3 / §8). O JSON-LD BreadcrumbList é adicionado
 * nas páginas (F3/F4). Aqui, a UI acessível.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="text-[0.85rem]">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-x-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-petrol-700 underline-offset-2 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="text-petrol-900"
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-petrol-500">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
