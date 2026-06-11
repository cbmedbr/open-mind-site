import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/** Rotas do site institucional enxuto (SDD §4, v1.1). */
const routes = ["", "/sobre", "/equipe", "/contato", "/privacidade"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
