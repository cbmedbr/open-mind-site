import type { Metadata } from "next";
import { fraunces, figtree } from "@/lib/fonts";
import { site } from "@/config/site";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SkipLink } from "@/components/ui/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url), // TODO [PENDENTE 1]: domínio definitivo
  title: {
    default: `${site.name} · Psiquiatria humanizada em Florianópolis`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} · Psiquiatria humanizada em Florianópolis`,
    description: site.description,
    url: site.url,
  },
  // robots, sitemap e ícones (dependem do logo em vetor — PENDENTE 2): F4.
};

/**
 * Decide a assinatura do logo ANTES da pintura, evitando flash e CLS (SDD §6.5):
 * - 1ª carga da sessão e sem reduced-motion → anima (não adiciona classe).
 * - Já visto nesta sessão OU reduced-motion → html.logo-static (montado, sem animar).
 */
const LOGO_SIGNATURE_SCRIPT = `(()=>{try{var k='om_logo_seen';var seen=sessionStorage.getItem(k);var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;if(seen||rm){document.documentElement.classList.add('logo-static');}else{sessionStorage.setItem(k,'1');}}catch(e){document.documentElement.classList.add('logo-static');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${figtree.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <script dangerouslySetInnerHTML={{ __html: LOGO_SIGNATURE_SCRIPT }} />
        <MotionProvider>
          <SkipLink />
          <Header />
          <main id="conteudo" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
        </MotionProvider>
      </body>
    </html>
  );
}
