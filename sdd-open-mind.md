# SDD: Site Institucional Open Mind (Clínica de Psiquiatria)

**Versão:** 1.1 (escopo simplificado: site institucional tipo cartão de visitas)
**Data:** 10/06/2026
**Status:** site já construído e em preview na Vercel (open-mind-site-three.vercel.app). Esta versão registra a simplificação de escopo pedida em 10/06/2026 e orienta o refactor.
**Mudança da v1.0 para a v1.1:** removidas as 10 páginas de serviço e o hub `/servicos`. O site passa a ser institucional enxuto (info da clínica, corpo clínico, contato), com as patologias atendidas listadas de forma simples, sem páginas nem copy longa por condição. A especificação detalhada das páginas de serviço fica preservada no histórico de versões caso a estratégia de SEO por condição seja retomada no futuro.
**Como usar:** este documento é a fonte da verdade do projeto. O agente de build (Claude Code) deve ler o documento inteiro e seguir as instruções da seção 13.

---

## 1. Visão geral e objetivos

**Produto:** site institucional enxuto da Open Mind, clínica de psiquiatria em Florianópolis/SC (Centro). Funciona como um cartão de visitas digital: apresenta a clínica, o corpo clínico e o contato, com conversão via WhatsApp.

**Objetivos de negócio**
1. Apresentar a clínica e o corpo clínico com credibilidade e visual premium.
2. Converter quem chega ao site em conversa de triagem pelo WhatsApp.
3. Sustentar percepção premium da marca: acolhedora, científica, discreta, humanizada, especializada.
4. Jornada ágil: de qualquer página até a conversa de triagem no WhatsApp em no máximo 2 toques.

Nota: a captação por busca orgânica passa a depender de Google Business Profile, Instagram e indicação. O site dá suporte de SEO básico (marca, home, NAP), mas não rankeia por condição como rankearia com uma página por patologia.

**KPIs**

| KPI | Meta inicial | Medição |
|---|---|---|
| Taxa de clique no CTA WhatsApp (cliques / sessões) | >= 8% | GA4, evento `whatsapp_click` |
| Agendamentos atribuídos ao site | acompanhar na triagem | mensagem pré-preenchida do WhatsApp |
| Presença de marca (busca por "Open Mind Florianópolis") | aparecer no topo | Search Console + GBP |
| Performance (LCP mobile) | < 2,5 s | Lighthouse / CrUX |

**Fora de escopo da v1:** páginas de serviço por condição e hub `/servicos` (removidos na v1.1), blog, widget de agendamento MedScale, telemedicina embedada, área do paciente, CRM, automação de triagem (bot/n8n), canal de reativação de pacientes (e-mail/WhatsApp em massa), tráfego pago (Meta Pixel/Google Ads), multi-idioma, CMS.

---

## 2. Público e posicionamento

**Persona A: pais e responsáveis.** Buscam avaliação e acompanhamento para crianças e adolescentes com TEA, TDAH, TOD, dificuldades emocionais, comportamentais e relacionais. Chegam ansiosos, com dúvidas sobre diagnóstico e medo de estigma. Valorizam clareza sobre o processo e acolhimento.

**Persona B: adultos classe A/B, alto nível de exigência.** Enfrentam ansiedade, estresse, burnout, depressão, luto, transtornos do sono, transtorno bipolar e transtornos do humor. Valorizam discrição, agilidade, escuta qualificada e tratamento baseado em evidências. Pouca tolerância a fricção e a comunicação amadora.

**Atributos de marca e o que significam na prática**

| Atributo | No design | Na copy |
|---|---|---|
| Acolhedora | espaços generosos, fotografia humana | tom empático, segunda pessoa, sem julgamento |
| Científica | sobriedade, dados com parcimônia | "baseado em evidências", sem promessas |
| Discreta | nada chamativo, cores contidas | sigilo citado explicitamente |
| Humanizada | rostos reais, ambiente da clínica | paciente como protagonista do cuidado |
| Especializada | hierarquia clara por serviço | RQE, formação e foco de cada profissional |

**Tom de voz**

Usar: "pessoa com TEA", "convive com", frases curtas, linguagem direta e acolhedora, convite à avaliação individual.

Evitar: promessa de cura ou de resultado, sensacionalismo, apelo ao medo ou à culpa, diminutivos e infantilização, jargão sem tradução, termos estigmatizantes ("doente mental", "sofre de", "portador de").

**Slogan oficial da marca:** "Tecnologia, ciência e empatia em saúde mental." (usar no hero e materiais; reforça os três pilares de uma vez)

**Mensagens-chave**
1. Cuidado psiquiátrico humanizado e baseado em evidências, no centro de Florianópolis.
2. Avaliação individualizada: cada plano terapêutico é construído para a história de cada paciente.
3. Triagem acolhedora pelo WhatsApp: o primeiro passo é uma conversa, não um formulário.

---

## 3. Benchmark

**Concorrentes diretos (do dossiê):** Clínica Luciano Fogaça, Florianópolis Clínicas, Clínica Icamed.
**[PENDENTE: F0, não bloqueia o build]** Mapear de cada um: proposta de valor, termos em que rankeiam, estrutura de páginas, pontos fracos de UX e de copy. Saída: tabela comparativa + 5 oportunidades de diferenciação. Pode rodar em paralelo às fases F1 a F3.

**Referências visuais (do dossiê):** clinicatiocecim.com.br, bemcriar.com.br, clinicabiguacu.com.br.
**[PENDENTE: fase de design]** Extrair de cada uma o que aproveitar (navegação, densidade, fotografia) e o que descartar.

**Nota de marca:** existem outras clínicas "Open Mind" no Brasil (psicologia, em outras cidades), inclusive com domínio openmindpsicologia.com.br já ocupado. Em SEO e redes, sempre diferenciar como "Open Mind Psiquiatria" + Florianópolis.

---

## 4. Arquitetura de informação

```
/                       Home (inclui o bloco "O que atendemos")
/sobre                  Sobre a clínica
/equipe                 Corpo clínico
/contato                Contato e localização
/privacidade            Política de privacidade
```

As patologias e serviços atendidos aparecem como um bloco simples na Home (e podem ser ecoados em /sobre), sem páginas dedicadas nem copy longa. Lista a exibir: Transtorno do Espectro Autista (TEA), TDAH e TOD, Psiquiatria infantil e do adolescente, Ansiedade, estresse e burnout, Depressão e luto, Transtorno bipolar e do humor, Distúrbios do sono (medicina do sono), Saúde mental da mulher, Tratamento com canabidiol (avaliação e acompanhamento médico), Perícia médica em saúde mental.

**Header (desktop):** logo, Sobre, Equipe, Contato, botão destacado "Falar no WhatsApp". Sem dropdown de serviços.
**Header (mobile):** logo + hambúrguer; botão flutuante de WhatsApp (FAB) fixo em todas as páginas.
**Footer:** NAP completo (nome, endereço, telefone), e-mail e Instagram oficiais, razão social e CNPJ **[PENDENTE: confirmar]**, responsável técnico (Dr. Arthur de Freitas Andrade) com CRM/RQE **[PENDENTE: registro dele]**, links das páginas (Sobre, Equipe, Contato, Privacidade), política de privacidade e linha de crise fixa (CVV 188, ver 9.3). Sem lista de links de serviços.

---

## 5. Especificação página a página

### 5.1 Bloco "O que atendemos" (substitui as antigas páginas de serviço)

Grade simples de itens, sem páginas dedicadas, sem parágrafos longos e sem links para páginas inexistentes. Cada item é um rótulo curto (no máximo uma linha de apoio). Opcionalmente agrupar em "Crianças e adolescentes" e "Adultos", mais uma linha de "Serviços" para canabidiol e perícia.

Itens: TEA, TDAH e TOD, Psiquiatria infantil e do adolescente, Ansiedade, estresse e burnout, Depressão e luto, Transtorno bipolar e do humor, Distúrbios do sono, Saúde mental da mulher, Tratamento com canabidiol, Perícia médica em saúde mental.

Regras de conteúdo:
- Sem promessa de cura ou resultado; sem checklist de sintomas; sem autodiagnóstico.
- Canabidiol entra como serviço médico (avaliação e acompanhamento), nunca como produto: vale a regra 9.2 mesmo num rótulo curto. Não citar marca, preço ou venda.
- Não é necessária revisão médica assinada por item, já que não há texto clínico extenso; ainda assim, qualquer frase de apoio deve ser factual e sóbria.

### 5.2 (removida)
As páginas de serviço por condição foram descontinuadas na v1.1. A tabela de termos-alvo e particularidades por página fica preservada no histórico de versões (v1.0) caso a estratégia de SEO por condição seja retomada.

### 5.3 Home

1. **Hero:** H1 "Psiquiatria humanizada em Florianópolis" (ou variação aprovada), subtítulo com proposta de valor, CTA primário WhatsApp.
2. **Faixa de confiança:** atributos da clínica; sem números inventados, métricas reais só quando fornecidas pela gestão.
3. **O que atendemos:** bloco simples com a lista de patologias e serviços (ver 5.1). Sem links para páginas, sem parágrafos.
4. **Como funciona:** 3 passos (1. chama no WhatsApp, 2. triagem acolhedora, 3. consulta agendada).
5. **Diferenciais** (mesmos do template de serviço).
6. **Equipe (teaser):** 3 cards (Dra. Ana Beatriz, Dra. Ângela, Dra. Patrícia) + link /equipe. **[PENDENTE: fotos em alta]**
7. **Localização:** mapa, endereço, referência (Edifício Pórtico, Centro), horários **[PENDENTE]**.
8. **FAQ geral:** atende convênio Unimed e particular, como é a primeira consulta, faixas etárias atendidas (a partir de 2 anos com a Dra. Patrícia), sigilo. Telemedicina fica fora da FAQ da v1 (ainda não ofertada).
9. **CTA final.**

### 5.4 Sobre a clínica
História e propósito, filosofia de cuidado (paciente protagonista, evidências, acolhimento), espaço físico (fotos reais), valores. CTA padrão.

### 5.5 Corpo clínico

Grid de cards: foto, nome, CRM-SC/RQE, especialidade, mini-bio, faixa etária atendida, formas de atendimento. Estrutura pronta para virar página individual por profissional no futuro (mesma estratégia das landpages da Luciano Noceti).

Slogan da marca (do material oficial): **"Tecnologia, ciência e empatia em saúde mental."**

**Dra. Ana Beatriz Pires Lima** | CRM-SC 8506 | RQE 8923 | Psiquiatria
Especialista em Psiquiatria, com especialização em Medicina de Família e Comunidade. Avaliação, diagnóstico e tratamento de transtornos mentais e emocionais em diferentes faixas etárias, com abordagem baseada em evidências e cuidado individualizado. Atende a partir de 7 anos.

**Dra. Ângela Rafaela Grandi** | CRM-SC 24150 | RQE 14614 | Psiquiatria
Especialista em Psiquiatria, com atuação em Medicina do Sono e Perícia Médica. Avaliação e tratamento de transtornos mentais e distúrbios do sono. Atende a partir de 18 anos (exceto dependência química), com prescrição de canabidiol quando clinicamente indicado.

**Dra. Patrícia Helena Alves** | CRM-SC 14299 | RQE 9061 | Psiquiatria
Especialista em Psiquiatria, com atuação no Transtorno do Espectro Autista (TEA) e experiência na prescrição de canabidiol. Capacitação em TCC, formação em Terapêutica Tântrica e Sexualidade Plena, mestranda em Ciências da Saúde com ênfase em Neurociência. Atende a partir de 2 anos (exceto dependência química).

**Formas de atendimento (toda a equipe):** convênio Unimed e particular.

**Mapa serviço x profissional** (referência interna; informa o agrupamento do bloco "O que atendemos" e a página de equipe):

| Serviço | Profissionais | Observação |
|---|---|---|
| TEA | Dra. Patrícia (foco) | atende desde os 2 anos |
| Psiquiatria infantil e adolescente | Dra. Patrícia (2+), Dra. Ana Beatriz (7+) | nenhuma atende abaixo de 2 anos |
| Medicina do Sono | Dra. Ângela | atuação específica na área |
| Canabidiol | Dra. Patrícia, Dra. Ângela | quando clinicamente indicado |
| Adultos (ansiedade, burnout, depressão, bipolar, humor) | as três | Ana Beatriz 7+, Ângela e Patrícia conforme perfil |
| Saúde mental da mulher | as três | página assinada pela equipe |
| Dependência química | fora da v1 | decisão de 10/06/2026: sem profissional que atenda hoje; reentra quando houver |
| Perícia médica em saúde mental | Dra. Ângela | página própria confirmada: /pericia-medica |

**Decisões de arquitetura (atualizadas em 10/06/2026, v1.1):**
- Sem páginas de serviço: TEA, canabidiol, medicina do sono, depressão, bipolar, perícia etc. viram itens do bloco "O que atendemos" (5.1), não páginas.
- Dependência química não aparece como serviço ofertado (nenhuma profissional atende hoje).
- O mapa acima deixa de alimentar páginas e passa a orientar como agrupar os itens e, se útil, indicar na página de equipe quem é referência em quê (ex.: Dra. Ângela em sono e perícia; Dra. Patrícia em TEA).

**[PENDENTE: fotos em alta]** Os cards e o PDF trazem fotos em recorte circular de baixa resolução. Para o site, pedir os arquivos originais, idealmente com enquadramento e fundo padronizados entre as três.

### 5.6 Contato
NAP completo, mapa embedado, botão WhatsApp, horários **[PENDENTE]**, orientações de acesso/estacionamento (incluir só quando confirmadas pela gestão).
Dados oficiais confirmados: Edifício Pórtico, R. Felipe Schmidt, 515, 2º andar, salas 207 e 208, Centro, Florianópolis/SC, CEP 88010-001; e-mail openmindclinicamedica@gmail.com; Instagram @openmind.clinicamedica; WhatsApp (48) 99128-5567.

### 5.7 Política de privacidade
Texto próprio cobrindo: dados coletados (analytics), cookies e consentimento, canal WhatsApp como triagem, direitos do titular (LGPD), contato do controlador **[PENDENTE: CNPJ/razão social confirmados]**.

---

## 6. Design system (parcial: paleta e logo definidos)

**Padrão de qualidade:** visual no nível de um trabalho de UX design sênior. Hierarquia tipográfica impecável, grid consistente, respiro generoso, microinterações sutis e acessibilidade AA sem exceções. Nada de template genérico de clínica.

### 6.1 Logo
- Logo existente: cérebro formado por peças de quebra-cabeça nas três cores da marca (recebido em PNG circular de baixa resolução em 10/06/2026).
- **[PENDENTE: arquivos do logo]** Pedir o vetor (SVG/AI/PDF) ou PNG em alta com fundo transparente. Verificar se existe versão horizontal (símbolo + nome) para o header.
- Derivados a gerar no build: favicon, ícone PWA, imagem OG padrão.
- Nota de sensibilidade: a peça de quebra-cabeça é um símbolo historicamente ligado ao autismo e hoje contestado por parte da comunidade. No logo, como motivo abstrato do cérebro, não é problema; apenas evitar peças de quebra-cabeça isoladas como decoração nas páginas de TEA.

### 6.2 Paleta oficial

| Cor | Hex | Papel |
|---|---|---|
| Petróleo | #2E4E5D | Cor estrutural da marca: títulos, header, footer, blocos |
| Dourado | #D9B76D | Acento premium: CTA primário e micro-destaques |
| Azul claro | #5E9DBE | Apoio: tags, ilustrações, hovers, seções alternadas |

**Método 60/30/10:**
- **60% base clara:** fundos e superfícies em tons quase-brancos derivados do petróleo (`petrol-50` e branco puro) + respiro. É o que sustenta o ar premium e calmo.
- **30% estrutura:** petróleo como cor dominante de marca (tipografia de título, header, footer, blocos de hero), com o azul claro atuando como apoio dentro dessa fatia, nunca competindo com o petróleo.
- **10% acento:** dourado reservado a CTA primário, ícones pontuais e destaques. Regra prática: no máximo 1 elemento dourado dominante por tela visível.

**Escala tonal (tokens Tailwind), variações permitidas dentro da paleta:**

| Token | Hex | Uso |
|---|---|---|
| petrol-900 | #1E333C | títulos sobre fundo claro; texto sobre dourado |
| petrol-700 | #2E4E5D | base; estrutura, footer, links |
| petrol-500 | #627A85 | ícones, bordas fortes, texto de apoio |
| petrol-100 | #E6EAEC | divisores, bordas suaves |
| petrol-50 | #F4F7F8 | fundo dominante (os 60%) |
| blue-700 | #426E85 | texto e ícones sobre blue-100 |
| blue-500 | #5E9DBE | base; apoio decorativo, hovers |
| blue-100 | #DFEBF2 | fundos de seção alternados |
| gold-700 | #AE9257 | hover/pressed do CTA |
| gold-500 | #D9B76D | base; CTA primário |
| gold-100 | #F7F1E2 | selos e fundos sutis de destaque |
| ink | #2A3B43 | texto corrido |

**Regras de acessibilidade da paleta (inegociáveis):**
- Dourado nunca como cor de texto sobre fundo claro (contraste insuficiente). Botão dourado usa texto `petrol-900`.
- Azul claro (#5E9DBE) não é cor de texto sobre branco; uso decorativo ou como fundo com texto `petrol-700` ou mais escuro.
- Texto corrido sempre `ink` ou `petrol-900` sobre fundos claros; branco ou `petrol-50` sobre petróleo.

### 6.3 Diretrizes gerais (já travadas pelo posicionamento)
- Estética sóbria e premium: muito respiro, contraste contido, nada de visual "hospitalar frio" nem "wellness genérico".
- Fotografia: pessoas reais e o espaço da clínica sempre que possível; banco de imagens só com curadoria (proibido o clichê de pessoa com a cabeça entre as mãos).
- Acessibilidade: contraste AA, corpo de texto >= 16 px, alvos de toque >= 44 px.
- Componentes base: `Header`, `Footer`, `ServiceCard`, `FAQAccordion`, `CTAWhatsApp`, `CrisisBanner`, `TeamCard`, `MapEmbed`, `Breadcrumbs`.

### 6.4 Tipografia (definida: editorial premium)
- **Títulos:** Fraunces (serif humanista variável; usar eixo óptico e pesos 500 a 600, nunca 700+).
- **Corpo:** Figtree (sans humanista; pesos 400/500/600).
- Reserva, se a Fraunces ficar estilizada demais na aplicação real: Source Serif 4 + Inter.
- Carregamento: self-hosted via `next/font` (zero layout shift, nenhuma requisição externa).
- Escala (major third, base 16): corpo 16 a 17 px, h3 24, h2 32, h1 40 a 44 (mobile: h1 32).
- Regras de leitura: line-height 1,6 a 1,7 no corpo e 1,15 a 1,25 nos títulos; largura máxima de texto de 65 a 75 caracteres; letter-spacing levemente negativo em títulos grandes.

### 6.5 Motion e interações

**Filosofia:** em uma clínica de psiquiatria, movimento comunica cuidado, não espetáculo. A sofisticação está na coreografia e na contenção: cada seção entra de um jeito próprio, nada compete pela atenção e o conteúdo nunca espera a animação. Sem splash screen e sem preloader: a sensação de site vivo vem da entrada coreografada das seções.

**Tokens de movimento**

| Token | Valor | Uso |
|---|---|---|
| duration-fast | 150 ms | hovers, cores, links |
| duration-base | 250 ms | botões, cards, accordion |
| duration-entrance | 600 ms | reveals de seção |
| duration-hero | 900 ms | coreografia do hero |
| ease-out | cubic-bezier(0.22, 1, 0.36, 1) | curva padrão de entrada |
| ease-spring | spring (stiffness 260, damping 26) | accordion, FAB |
| stagger | 80 ms | listas e grids de cards |
| distance | 16 a 24 px | translate máximo de entrada |

**Assinatura de marca:** no primeiro carregamento da sessão, as três peças do quebra-cabeça do logo se encaixam formando o cérebro (SVG animado, 1,2 s, só transform/opacity). Roda 1 vez por sessão (flag em sessionStorage) e fica estática nas navegações seguintes. Com `prefers-reduced-motion`, aparece pronta.

**Coreografia de entrada, uma variante por seção**

| Seção | Entrada |
|---|---|
| Hero (todas as páginas) | título revela linha a linha (clip-path), subtítulo fade-up +100 ms, CTA scale-in 0,95→1 +200 ms; CSS puro, sem depender de hydration |
| Faixa de confiança | números em count-up ao entrar no viewport, 1 única vez |
| Bloco "O que atendemos" | itens fade-up com stagger de 80 ms |
| Como funciona (3 passos) | linha SVG se desenha conectando 1→2→3 (stroke-dashoffset) e os passos entram em sequência |
| Diferenciais | fade-up com stagger |
| Equipe | cards scale-in 0,96→1 com stagger |
| "Pode ser hora de buscar ajuda se..." | itens em fade-up suave, sem efeito chamativo (conteúdo sensível) |
| FAQ | itens fade-up; abertura com altura animada + chevron girando 180° |
| Localização | skeleton enquanto o mapa embeda, depois fade-in; pin com drop sutil |
| CTA final | bloco fade + translate; formas decorativas com parallax discreto (máximo 12 px) |
| Sobre | imagens com reveal por máscara (clip-path), texto fade-up |
| CrisisBanner | SEM animação: visível instantaneamente, sempre. Informação de crise não espera coreografia |

**Microinterações**

| Elemento | Comportamento |
|---|---|
| Header | sticky; após 80 px de scroll encolhe (88→64 px) e ganha fundo com leve blur |
| Links de navegação | sublinhado animado (scale-x a partir da esquerda); página ativa marcada |
| CTA primário (dourado) | hover: lift de 2 px + gold-700 + sombra suave; press: scale 0,98; foco: ring visível petrol-500 |
| Cards de serviço e equipe | hover: translate-y de -4 px, borda petrol-100→petrol-500, imagem com zoom 1,03 em 700 ms |
| FAQ accordion | altura animada via grid-template-rows, 250 ms |
| FAB WhatsApp | entra com scale após 600 ms e dá 1 pulso único; nunca pulso em loop |
| Imagens | blur-up placeholder via next/image |
| Links inline | transição de cor em 150 ms, sublinhado com offset |
| Transição entre páginas | View Transitions API com cross-fade de 200 ms; fallback sem transição |

**Regras inegociáveis de motion**
1. `prefers-reduced-motion: reduce` desliga tudo: conteúdo aparece pronto (no máximo um fade de opacidade). Público com ansiedade e sensibilidade vestibular faz parte da persona.
2. Só `transform` e `opacity` (GPU). Exceção única: a altura do accordion.
3. Zero CLS: todo elemento reserva o próprio espaço antes de animar.
4. Above the fold anima em CSS puro disparado no load; nada espera JS/hydration. O elemento LCP nunca fica invisível por tempo perceptível.
5. Reveals rodam 1 única vez (`once: true`); nada re-anima ao rolar de volta.
6. Nenhuma animação passa de 1,2 s, e essa só a assinatura do logo.
7. Animação nunca atrasa o acesso à informação: o texto é legível mesmo no meio da entrada.

**Implementação:** biblioteca Motion (motion.dev) com `LazyMotion` para bundle mínimo; reveals com `whileInView`; o que puder ser CSS puro, fica em CSS puro.

---

## 7. Integrações

### 7.1 WhatsApp (conversão principal)

Número: **+55 48 99128-5567**. Link base: `https://wa.me/5548991285567?text={mensagem URL-encoded}`.

Mensagens pré-preenchidas (sem páginas de serviço, conjunto enxuto):

| Origem | Mensagem |
|---|---|
| Todas as páginas (Home, Sobre, Equipe, Contato) | Olá! Vim pelo site da Open Mind e gostaria de agendar uma consulta. |

Opcional: um segundo botão na home/contato com a variante "...gostaria de tirar uma dúvida antes de agendar." Nada de mensagens por condição, já que não há páginas de serviço.

Comportamento: abre em nova aba; dispara evento GA4 antes do redirect.

**Modelo de triagem na v1:** click-to-chat direto para atendimento **humano**. Sem bot, sem fluxo n8n e sem CRM na v1 (o site não é CRM, é só site). Se a clínica automatizar a triagem no futuro, o link já carrega o `page_path` de origem, que um bot poderia ler para abrir a conversa no assunto certo.

**Conta WhatsApp:** decisão operacional, não bloqueia o build (o link `wa.me` funciona igual em conta comum ou Business). Recomendação: usar **WhatsApp Business** pelos recursos de horário de atendimento, mensagem de ausência e etiquetas de organização. **[PENDENTE leve: definir Business x comum]**

### 7.2 Analytics e tags (v1)
- GA4 com eventos: `whatsapp_click` (params: `page_path`, `cta_position`), scroll e outbound.
- Search Console vinculado desde o lançamento.
- Banner de consentimento (LGPD) antes de carregar os cookies de analytics do GA4.
- **Sem Meta Pixel na v1.** Tráfego pago não está previsto no momento. Se entrar Google Ads ou Meta Ads no futuro, adicionar o pixel correspondente e reavaliar o banner de consentimento.

### 7.3 Perfis externos (Google Business Profile + Doctoralia)
**Google Business Profile:** criar ou reivindicar com NAP idêntico ao do site. Categoria principal: "Psiquiatra" ou "Clínica psiquiátrica". É o ativo de SEO local mais importante depois do site.
**Doctoralia:** os concorrentes locais estão todos lá; é canal de captação, agendamento e avaliações. Se já existe perfil da clínica, o site linka; se não, vale criar.
Verificar a existência das duas fichas é item operacional e **não bloqueia o build**. **[PENDENTE leve: as fichas já existem?]**

### 7.4 Agendamento e telemedicina (futuro)
Fora da v1 como funcionalidade embedada. O site reserva slot no Header e no Hero para um futuro botão "Agendar online" (MedScale), sem quebrar o layout.
Telemedicina está em implementação pela clínica. Assim que a plataforma for definida, entra como página e FAQ próprias e, se aplicável, link de acesso à teleconsulta. Como hoje a clínica ainda não atende por telemedicina, a copy da v1 não promete o serviço; quando estiver no ar, atualizar FAQ e SEO.
**[PENDENTE: MedScale e a telemedicina serão a mesma plataforma ou ferramentas separadas?]**

---

## 8. Requisitos técnicos

- **Stack:** Next.js (App Router, versão estável atual) + TypeScript + Tailwind CSS. Repo no GitHub, deploy contínuo na Vercel. Build via Claude Code.
- **Conteúdo:** páginas estáticas (SSG). Textos em objetos TS tipados. Sem CMS na v1.
- **Performance:** LCP < 2,5 s, INP < 200 ms, CLS < 0,1. Imagens via `next/image` (AVIF/WebP), fontes self-hosted com `font-display: swap`.
- **Motion:** biblioteca Motion (motion.dev) via `LazyMotion`; animações fora do caminho crítico de renderização; orçamento de motion: zero impacto em CLS e LCP (regras na seção 6.5).
- **SEO técnico:** Metadata API por página, OG image padrão da marca, `sitemap.xml` e `robots.txt` gerados, canonical, breadcrumbs onde fizer sentido.
- **Dados estruturados (JSON-LD):** `MedicalClinic` (home e contato: nome, NAP, geo, horários) e `Physician` (equipe). Sem `MedicalWebPage`/`FAQPage` por serviço (não há páginas de serviço); `FAQPage` só se a home mantiver FAQ.
- **Acessibilidade:** WCAG 2.1 AA, navegação por teclado, ARIA nos componentes interativos.
- **Privacidade técnica:** HTTPS, headers de segurança básicos, nenhum formulário coletando dado de saúde na v1 (a conversa nasce no WhatsApp).

---

## 9. Conformidade

### 9.1 Publicidade médica (Resolução CFM 2.336/2023)
- Identificação do responsável/diretor técnico visível no rodapé de todas as páginas: **Dr. Arthur de Freitas Andrade. [PENDENTE: CRM-SC e RQE dele para a exibição completa]**
- Vedado: garantia de resultado, sensacionalismo, superlativos ("o melhor", "único"), preço como chamariz, autopromoção indevida.
- Depoimentos de pacientes: tratar como alto risco; não usar sem validação do RT.
- Todo conteúdo educativo fecha com convite à avaliação individual, nunca com autodiagnóstico.

### 9.2 Comunicação sobre canabidiol
- Falar do **serviço médico** (avaliação de elegibilidade, prescrição e acompanhamento), nunca do **produto**.
- Proibido: citar marcas ou fabricantes, prometer eficácia, sugerir venda, exibir preço de produto ou link de compra. Propaganda de produto à base de cannabis é vedada (RDC 327/2019).
- Tom: critérios clínicos, evidência por indicação, explicação do caminho legal de acesso via ANVISA.

### 9.3 Conteúdo sensível e protocolo de crise
- Linha de crise fixa no footer global de todas as páginas: "Em crise ou pensando em se machucar? Ligue 188 (CVV, 24 h) ou procure a emergência mais próxima (SAMU 192)." Sem animação, sempre visível.
- Como não há mais páginas de depressão e bipolar, o footer é o local que garante a presença da linha de crise no site inteiro.
- Qualquer texto sobre condições sensíveis (mesmo curto, no bloco "O que atendemos") não dramatiza nem detalha métodos; o foco é a ajuda disponível.

### 9.4 LGPD
- Política de privacidade própria (5.7), banner de consentimento para cookies de analytics e ads.
- Deixar claro que o WhatsApp é canal de triagem e que dados sensíveis de saúde são tratados em ambiente clínico.

---

## 10. Conteúdo e SEO local

- **Home:** "psiquiatra em Florianópolis", "clínica de psiquiatria Florianópolis"; citar as patologias atendidas no bloco "O que atendemos" cobre parte das buscas por condição, sem páginas dedicadas.
- **E-E-A-T:** autoria e equipe visíveis, bios com formação e RQE, RT identificado.
- **NAP consistente** em site, Google Business Profile, Instagram e Doctoralia (perfis existentes? **[PENDENTE]**).
- **Captação:** com o site enxuto, o peso de SEO recai sobre Google Business Profile e Instagram; o site dá suporte de marca e conversão.

---

## 11. Plano de implementação

| Fase | Entregas | Critério de aceite |
|---|---|---|
| **F0 Fundamentos** (sem código) | registrar domínio; confirmar razão social/CNPJ e registro do RT (Dr. Arthur); criar ou reivindicar GBP; obter arquivos do logo em vetor; fotos da equipe em alta; horários de atendimento | pendências bloqueantes resolvidas |
| **F1 Setup técnico** | repo, Next + Tailwind, tokens do design system (cor, tipografia e motion), componentes base, assinatura animada do logo, layout global, deploy na Vercel | preview navegável com header/footer, tokens e motion base aplicados |
| **F2 Páginas** | Home (com bloco "O que atendemos"), Sobre, Equipe (fotos com placeholder), Contato, Privacidade | páginas completas, responsivas, CTAs funcionando, sem páginas de serviço |
| **F4 Lançamento** | GA4 + Search Console, JSON-LD validado, QA de acessibilidade, performance e motion (prefers-reduced-motion, zero CLS), noindex desligado no domínio real | Lighthouse >= 90 nas 4 categorias; eventos disparando |

A cada fase iniciada, gerar o prompt pronto para colar no Claude Code.

---

## 12. Pendências abertas

| # | Item | Bloqueia | Status |
|---|---|---|---|
| 1 | Domínio. Candidatos a checar no registro.br: openmindpsiquiatria.com.br, clinicaopenmind.com.br, openmindclinica.com.br (openmind.com.br e openmindpsicologia.com.br já pertencem a terceiros) | F0, F4 | aberto |
| 2 | Identidade visual | F1 | PARCIAL: paleta (6.2) e tipografia (6.4) definidas, logo existente. Falta só: arquivo do logo em vetor ou alta resolução |
| 3 | Corpo clínico | F2 | PARCIAL: 3 psiquiatras com bios, CRM-SC, RQE e faixas etárias completos (5.5). Falta só: fotos em alta resolução |
| 4 | Razão social, CNPJ e registro do RT. Busca pública aponta "Openmind Clinica Medica Ltda", CNPJ 59.811.329/0001-85, no mesmo endereço. RT/diretor técnico confirmado: Dr. Arthur de Freitas Andrade (falta CRM-SC e RQE dele). Confirmar razão social/CNPJ com a gestora antes de publicar | rodapé, privacidade | a confirmar |
| 5 | Convênios | FAQ, copy | RESOLVIDO: convênio Unimed + particular |
| 6 | Telemedicina | FAQ, copy | RESOLVIDO p/ escopo: não atende ainda; fora da copy da v1 |
| 7 | Google Business Profile e Doctoralia existem? | SEO local (não bloqueia build) | aberto, prioridade baixa |
| 8 | Tráfego pago previsto (Meta Pixel)? | F4 | RESOLVIDO: sem ads e sem pixel na v1 |
| 9 | Horários de atendimento | Contato, schema | aberto |
| 10 | Redes sociais | footer, NAP | RESOLVIDO: Instagram @openmind.clinicamedica; e-mail openmindclinicamedica@gmail.com |
| 11 | Conta WhatsApp Business x comum | operacional (não bloqueia) | aberto, prioridade baixa |
| 12 | MedScale e telemedicina: mesma plataforma? | escopo futuro | aberto |
| 13 | Escopo das páginas de serviço | arquitetura | RESOLVIDO (v1.1): removidas; viram bloco "O que atendemos" |
| 14 | Perícia médica | conteúdo | RESOLVIDO (v1.1): item da lista, não página |
| 15 | Endereço: sala 207 ou 207+208? | Contato, schema | RESOLVIDO: salas 207 e 208 |
| 16 | Indexação do preview e domínio nas meta tags | SEO/lançamento | aberto: preview deve ficar noindex até o go-live (ver seção 13) |

---

## 13. Instruções para o agente de build (Claude Code)

1. **Fonte da verdade:** este SDD (v1.1). Em conflito entre criatividade e SDD, vale o SDD. Mudança estrutural (páginas, stack, escopo) só com aprovação explícita do Vinícius.
2. **Escopo:** site institucional enxuto. Páginas: Home, Sobre, Equipe, Contato, Privacidade. NÃO existem páginas de serviço nem hub `/servicos`. As patologias aparecem só como o bloco "O que atendemos" (5.1).
3. **Pendências viram placeholders centralizados.** Em `src/config/site.ts` concentrar todos os dados da clínica (NAP, CNPJ, RT, horários, domínio, redes, WhatsApp). Itens pendentes com `// TODO [PENDENTE n]`. Nenhum dado pendente hardcoded espalhado.
4. **Nunca inventar:** CRM/RQE, CNPJ, preços, estatísticas, depoimentos, convênios além da Unimed, horários, exames ou promessas clínicas. Faltou dado real, entra placeholder.
5. **Conteúdo:** seguir as seções 2 (tom de voz) e 9 (conformidade). Sem copy longa por condição. Canabidiol citado como serviço médico, nunca produto (9.2).
6. **Indexação:** o preview deve ficar `noindex, nofollow` até o go-live; canonical/OG não devem fixar um domínio não confirmado. Controlar por env (ver pendência 16).
7. **Qualidade de código:** TypeScript estrito; tokens das seções 6.2, 6.4 e 6.5 como design tokens; componentes da 6.3; zero valores mágicos de cor, tempo ou easing.
8. **Motion:** seguir a seção 6.5 à risca, incluindo `prefers-reduced-motion` e o CrisisBanner sem animação. Linha de crise (9.3) fixa no footer global.
9. **Assets provisórios:** logo PNG num componente `Logo` fácil de trocar; fotos da equipe com placeholder no mesmo aspect ratio até as fotos em alta chegarem.
10. **QA:** build e lint limpos; navegação por teclado; nenhuma menção a dependência química como serviço; nenhum link apontando para páginas de serviço removidas (sem 404).
