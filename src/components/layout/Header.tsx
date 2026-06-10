"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/config/services";
import { whatsappMessages } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { CTAWhatsApp } from "@/components/ui/CTAWhatsApp";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
} from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/** Link de navegação com sublinhado animado (scale-x a partir da esquerda, SDD §6.5). */
function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative inline-flex items-center py-2 text-[0.95rem] font-medium transition-colors duration-[var(--duration-fast)] ease-brand",
        active ? "text-petrol-900" : "text-petrol-700 hover:text-petrol-900",
      )}
    >
      {label}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold-500 transition-transform duration-[var(--duration-fast)] ease-brand",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesActive =
    pathname === "/servicos" || services.some((s) => s.path === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape fecha tudo.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Trava o scroll do fundo com o menu mobile aberto.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] transition-[background-color,box-shadow] duration-[var(--duration-base)] ease-brand",
        scrolled
          ? "border-b border-petrol-100 bg-white/80 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-[var(--duration-base)] ease-brand",
          scrolled ? "h-16" : "h-[5.5rem]",
        )}
      >
        <Link
          href="/"
          aria-label="Open Mind, página inicial"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-petrol-500"
        >
          <Logo animated />
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            <li>
              <NavLink href="/sobre" label="Sobre" active={pathname === "/sobre"} />
            </li>
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className={cn(
                  "group relative inline-flex items-center gap-1 py-2 text-[0.95rem] font-medium transition-colors duration-[var(--duration-fast)] ease-brand",
                  servicesActive
                    ? "text-petrol-900"
                    : "text-petrol-700 hover:text-petrol-900",
                )}
              >
                Serviços
                <ChevronDownIcon
                  className={cn(
                    "h-4 w-4 transition-transform duration-[var(--duration-fast)] ease-brand",
                    servicesOpen && "rotate-180",
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold-500 transition-transform duration-[var(--duration-fast)] ease-brand",
                    servicesActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[min(40rem,88vw)] -translate-x-1/2 pt-3">
                  <div className="rounded-card border border-petrol-100 bg-white p-2 shadow-lift">
                    <Link
                      href="/servicos"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-medium text-petrol-900 transition-colors duration-[var(--duration-fast)] hover:bg-petrol-50"
                    >
                      Todos os serviços
                      <ArrowRightIcon className="h-4 w-4 text-petrol-500" />
                    </Link>
                    <ul className="grid grid-cols-2 gap-0.5 p-1">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={s.path}
                            onClick={() => setServicesOpen(false)}
                            aria-current={
                              pathname === s.path ? "page" : undefined
                            }
                            className="block rounded-lg px-4 py-2.5 text-[0.9rem] text-petrol-700 transition-colors duration-[var(--duration-fast)] hover:bg-petrol-50 hover:text-petrol-900"
                          >
                            {s.navLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <NavLink href="/equipe" label="Equipe" active={pathname === "/equipe"} />
            </li>
            <li>
              <NavLink
                href="/contato"
                label="Contato"
                active={pathname === "/contato"}
              />
            </li>
          </ul>
        </nav>

        <div className="hidden lg:block">
          <CTAWhatsApp
            message={whatsappMessages.default}
            size="md"
            pagePath={pathname}
            ctaPosition="header"
          />
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-petrol-700 hover:bg-petrol-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-500 lg:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </Container>

      {/* Menu mobile (overlay full-screen) */}
      <div
        className={cn(
          "fixed inset-0 z-[130] flex flex-col bg-white transition-opacity duration-[var(--duration-base)] ease-brand lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-[5.5rem] shrink-0 items-center justify-between px-5 sm:px-6">
          <Logo />
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-petrol-700 hover:bg-petrol-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-500"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav
          aria-label="Navegação principal"
          className="flex-1 overflow-y-auto px-5 pb-8 sm:px-6"
        >
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/sobre"
                onClick={() => setMobileOpen(false)}
                className="block border-b border-petrol-100 py-4 text-lead font-medium text-petrol-900"
              >
                Sobre
              </Link>
            </li>
            <li className="border-b border-petrol-100 py-4">
              <Link
                href="/servicos"
                onClick={() => setMobileOpen(false)}
                className="text-lead font-medium text-petrol-900"
              >
                Serviços
              </Link>
              <ul className="mt-2 grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={s.path}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg py-2 text-[0.95rem] text-petrol-700 hover:text-petrol-900"
                    >
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/equipe"
                onClick={() => setMobileOpen(false)}
                className="block border-b border-petrol-100 py-4 text-lead font-medium text-petrol-900"
              >
                Equipe
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                onClick={() => setMobileOpen(false)}
                className="block border-b border-petrol-100 py-4 text-lead font-medium text-petrol-900"
              >
                Contato
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <CTAWhatsApp
              message={whatsappMessages.default}
              size="lg"
              className="w-full"
              pagePath={pathname}
              ctaPosition="mobile-menu"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
