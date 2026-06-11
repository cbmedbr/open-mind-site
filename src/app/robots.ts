import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/** Preview fica bloqueado até o go-live no domínio real (SDD §13.6 / PENDENTE 16).
 *  Definir NEXT_PUBLIC_ALLOW_INDEX=true junto com NEXT_PUBLIC_SITE_URL. */
const allowIndex = process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndex) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
