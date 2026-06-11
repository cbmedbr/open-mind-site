import type { Metadata } from "next";
import { fraunces, figtree } from "@/lib/fonts";
import { site } from "@/config/site";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SkipLink } from "@/components/ui/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import "./globals.css";

/** Indexável só no domínio real (SDD §13.6 / PENDENTE 16). Definir
 *  NEXT_PUBLIC_ALLOW_INDEX=true junto com NEXT_PUBLIC_SITE_URL no go-live. */
const allowIndex = process.env.NEXT_PUBLIC_ALLOW_INDEX === "true";

export const metadata: Metadata = {
  metadataBase: new URL(site.url), // TODO [PENDENTE 1]: domínio definitivo
  title: {
    default: `${site.name} · Psiquiatria humanizada em Florianópolis`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  // Preview fica noindex/nofollow; canonical e og:url não fixam domínio não confirmado.
  robots: allowIndex
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} · Psiquiatria humanizada em Florianópolis`,
    description: site.description,
    ...(allowIndex ? { url: site.url } : {}),
  },
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
