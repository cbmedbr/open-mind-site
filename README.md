# Open Mind — Site institucional

Site institucional da **Open Mind**, clínica de psiquiatria em Florianópolis/SC.
Construído a partir do `sdd-open-mind.md` (fonte da verdade do projeto).

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript** estrito
- **Tailwind CSS v4** — design tokens em `@theme` (cores §6.2, tipografia §6.4)
- **Motion** (motion.dev) com `LazyMotion` — animações §6.5
- Fontes self-hosted via `next/font`: **Fraunces** (títulos) + **Figtree** (corpo)

## Scripts

```bash
npm run dev     # desenvolvimento (http://localhost:3000)
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Arquitetura

- `src/config/` — **fonte única de dados** da clínica
  - `site.ts` — NAP, contatos, WhatsApp, jurídico, crise (pendências como `// TODO [PENDENTE n]`)
  - `team.ts` — corpo clínico (CRM-SC/RQE reais, §5.5)
  - `services.ts` — metadados dos 10 serviços (§5.2, §5.5, §7.1, §9.3)
- `src/lib/` — `motion.ts` (tokens de movimento em JS), `whatsapp.ts`, `utils.ts`, `fonts.ts`
- `src/components/ui/` — componentes base (§6.3)
- `src/components/layout/` — Header e Footer (§4)
- `src/app/globals.css` — design tokens (CSS variables + `@theme`)

## Regras inegociáveis (do SDD)

- Nunca inventar CRM/RQE, CNPJ, preços, estatísticas, depoimentos, horários ou
  convênios além da Unimed. Faltou dado real → placeholder em `site.ts`.
- `CrisisBanner` sem nenhuma animação, visível instantaneamente.
- `prefers-reduced-motion` desliga todas as animações.
- Não existe página nem menção a dependência química como serviço ofertado (v1).

## Fases

- **F1 Setup** — concluída (tokens, componentes base, layout, assinatura do logo)
- **F2 Institucionais** — Home, Sobre, Equipe, Contato, Privacidade
- **F3 Serviços** — hub + 10 páginas de serviço
- **F4 Lançamento** — GA4, JSON-LD, QA, go-live (depende das pendências 1, 4 e 9)
