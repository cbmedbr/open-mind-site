import type { NextConfig } from "next";
import path from "node:path";

/** Headers de segurança básicos (SDD §8 — privacidade técnica). */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Fixa a raiz do projeto (há um package-lock.json solto em C:\Users\vienn que
  // confunde a inferência de workspace do Turbopack).
  turbopack: { root: path.resolve() },
  images: {
    // SDD §8: AVIF/WebP via next/image
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
