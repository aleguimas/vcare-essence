# VCare Essence — Contexto do Projeto

> Este arquivo é lido automaticamente pelo Claude Code no início de cada sessão. **Mantenha-o atualizado** conforme o projeto evolui.

---

## ⚠️ Ajustes do cliente aplicados em 2026-06-15 (NÃO regredir)

Rodada de ajustes a partir do doc "AJUSTES SITE VCARE.pdf". Estas decisões já estão no código e **substituem** indicações anteriores deste arquivo:

1. **Tipografia: Georgia (títulos) + Arial (corpo).** Fraunces/Inter foram REMOVIDOS. Stack web-safe em `app/globals.css` (`--font-serif`/`--font-sans`); `next/font` saiu do `app/layout.tsx`. Não reintroduzir Fraunces/Inter.
2. **"Casa" → "Clínica" em toda copy visível.** "Casa Boutique" → "Clínica Boutique"; nav "A Casa" → "A Clínica". **Preservar:** rotas `/a-casa`, key `ROUTES.aCasa`, imports `components/sections/casa/`, o bairro **Casa Forte** (slug `casa-forte`) e "casa" quando = lar do paciente (ex.: "conforto de casa").
3. **"Método V" → "MEP" (Mapeamento Emocional Profundo).** URL `/metodo-v` → **`/mep`** (pasta `app/(marketing)/mep/`). `ROUTES.metodoV` mantém o nome da key, mas `value = '/mep'`. **Método C (Camila) não foi renomeado.**
4. **Travessões (—) banidos do site** (davam "cara de IA"): use vírgula (ou `·` em títulos de página). Não usar `—` em copy.
5. **WhatsApp por pessoa:** `SITE.whatsapp` = `5581997671049` (Camila, padrão/home) e `SITE.whatsappVanessa` = `5581999022649`. `whatsappNumberForPath()` em `lib/whatsapp.ts` escolhe Vanessa nas páginas dela (vanessa, /mep, hipnoterapia), Camila no resto.
6. **CRPs preenchidos:** Camila Clemente = 02/19121; Vanessa Albuquerque = 02/15875.
7. **Hipnoterapia:** não usar a palavra "mística" (nem para desmistificar); enquadrar como "com ciência, resultado rápido e eficaz".

---

## Identidade do projeto

**Cliente:** VCare Essence — clínica boutique de saúde mental
**Endereço:** RioMar Trade Center, Torre 4 — Av. República do Líbano, 251, Pina, Recife — PE
**Tagline de trabalho:** A primeira clínica sensorial de Recife.
**Domínio:** vcareessence.com.br (a registrar)

---

## Posicionamento essencial

A VCare Essence reivindica uma categoria nova em Recife: **a Clínica Boutique da Mente, a primeira clínica sensorial da cidade**. Não é uma clínica como as outras: o ambiente é parte do tratamento, não cenário. Atende dois polos distintos do mercado premium de saúde mental:

1. **Vanessa Albuquerque** — hipnoterapeuta, 14 anos de prática. Atende empresários(as) 30-55 anos com **trava emocional**. Método autoral usando hipnoterapia clínica. Encontros estruturados, ticket alto, conversão presencial 60-80%. **A hipnoterapia É o método dela** — não é serviço à parte.

2. **Camila Clemente** — psicóloga, 10 anos de prática. Especialista em análise do comportamento, psicomotricidade relacional, reabilitação neuropsicológica, TDAH, terapêutica sistêmica. Mentora e docente. Tem **método autoral próprio para adolescentes** (rendimento escolar + vestibular + suporte integral + acompanhamento familiar). Atende psicoterapia tradicional, teste vocacional, orientação familiar.

A casa cobre dois polos com lógicas comerciais opostas — Vanessa = **resolução** (encontros pontuais); Camila = **estrutura e acompanhamento** (sessões regulares ou pacotes).

---

## Big Idea

> **Por dentro é onde tudo começa. E onde tudo trava.**

Tudo que importa começa por dentro: a calma, o foco, a alegria, a escolha. E quando algo não anda, é por dentro que está travado.

---

## Os cinco pilares da marca

1. **Interioridade** — tudo aponta para dentro
2. **Curadoria** — escolhas conscientes, profissionais selecionados
3. **Discrição** — público A/B valoriza discrição mais que ostentação
4. **Resolução** — ciência sem ser fria, processo sem ser eterno (anti-moralismo: "trava, não preguiça"; "falta de motivação, não preguiça")
5. **Experiência sensorial** — o ambiente é parte do tratamento (céu estrelado no teto, aroma-assinatura, isolamento acústico, luz quente, materiais táteis)

---

## As sete verticais de oferta

**Métodos autorais (premium):**
1. **MEP — Mapeamento Emocional Profundo** (Vanessa): hipnoterapia para destravar empresários. Rota `/mep`. Página dedicada robusta.
2. **Método C** (Camila): programa estruturado para adolescentes (rendimento + vestibular + suporte + família). Rota `/metodo-c`. Página dedicada robusta.

**Verticais clínicas:**
3. **Psicoterapia tradicional** — Camila e convidados, adolescentes e adultos
4. **Hipnoterapia clínica (avulsa)** — Vanessa, para questões pontuais
5. **Teste vocacional** — Camila, adolescentes e adultos em reposicionamento
6. **Orientação familiar** — Camila, base em Terapêutica Sistêmica

**Vertical B2B:**
7. **Sublocação de salas** — duas portas: consultório residente (clínicos) + sala para reuniões/gravações (criadores de conteúdo)

Todas as verticais clínicas têm versão **presencial + online**.

---

## Duas jornadas digitais distintas — código-chave do site

O site hospeda **duas jornadas radicalmente diferentes**. **Misturá-las é o pior erro estratégico possível.**

| | Jornada Métodos Autorais | Jornada Demais Verticais |
|---|---|---|
| Entrada | Conteúdo/Instagram/indicação | Busca orgânica (SEO) |
| Objetivo do site | **Qualificar** o lead, não vender | **Apresentar** oferta e facilitar marcação |
| CTA principal | "Agendar primeiro encontro / conversa inicial" | WhatsApp para agendamento direto |
| Conversão | Presencial, na sessão inicial | No agendamento + primeira sessão |
| Copy | Qualificação, anti-positioning, casos editoriais | Oferta, transparência, FAQ funcional |

Toda decisão de UX/copy deve respeitar essa distinção.

---

## Voz e tom da marca

- **Acolhedora** sem ser piegas: "Você não precisa começar com respostas."
- **Técnica** sem ser fria: "Trabalhamos com TCC, AC, hipnoterapia clínica, sistêmica."
- **Anti-moralista**: "Trava, não preguiça." "Falta de motivação, não preguiça."
- **Direta**: "Acesso a raiz e destravo o que te impede de avançar."
- **Confiante** sem arrogância: "Encontros, não anos de terapia."
- **Sensorial**: "Luz baixa, silêncio, tempo. A sessão começa antes da consulta."
- **Discreta**: "O que se fala aqui, fica aqui."

**Evitar absolutamente:** travessões (—) na copy (usar vírgula; dão "cara de IA"), a palavra "mística", emojis em copy institucional, exclamações, jargão de auto-ajuda, depoimentos em primeiro plano com foto, "promoções", linguagem hospitalar fria.

---

## Direção visual

**Paleta:**
- `--cream`: `#F5F1EA` — fundo principal
- `--sand`: `#D9CFBE` — fundo secundário
- `--bronze`: `#8C7853` — destaques, links, botões (cor do logo)
- `--moss`: `#3A4A3F` — tipografia principal, sensação de raiz
- `--navy`: `#1F2A44` — uso pontual, títulos institucionais
- `--gray-text`: `#6B6B6B` — texto secundário

**Tipografia (atualizada 2026-06-15):**
- Títulos: **Georgia** (serifa web-safe) — `--font-serif`
- Corpo: **Arial** (sans web-safe) — `--font-sans`
- Detalhe: itálicos da Georgia para citações e ênfases
- Fraunces/Inter foram removidos por decisão do cliente. Não reintroduzir.

**Logo:**
- Símbolo: flor estilizada com pétalas em traços finos, "coração" formado por linhas que terminam em V (referência sutil ao V da marca e ao Vanessa+Camila)
- Cor: dourado/bronze (#8C7853 aproximado)
- Tagline visual no logo: "EMOTIONAL HEALING & CONSCIOUS PSYCHOLOGY"

**Fotografia disponível** (pasta Google Drive — ver `05_assets_guide.md`):
- Detalhes sensoriais do espaço (céu estrelado, plantas, materiais táteis, decoração contemplativa)
- Maioria em formato HEIC — precisa conversão para WebP/AVIF no pipeline

---

## Stack técnico (decidido)

- **Framework:** Next.js 15 (App Router), TypeScript estrito
- **Estilo:** Tailwind CSS v4 com tokens customizados + shadcn/ui (base) + Framer Motion (animações)
- **CMS:** Sanity (recomendado) — fallback MDX se equipe preferir simplicidade
- **Imagens:** `next/image` com `sharp` para otimização
- **Fontes:** Georgia (títulos) + Arial (corpo), web-safe via stack CSS em `globals.css` (sem `next/font`)
- **Hospedagem:** Vercel
- **Analytics:** GA4 + Google Tag Manager + Microsoft Clarity
- **Forms/WhatsApp:** integração direta (número por pessoa via `whatsappNumberForPath()`, ver callout no topo) + n8n para roteamento opcional
- **Agendamento:** Cal.com (open source, autorrouting) ou Doctoralia API

Detalhes em `01_tech_stack.md`.

---

## Princípios de código

1. **Server Components por padrão**, Client Components só quando necessário (estado, eventos, animações).
2. **Acessibilidade WCAG 2.2 AA** desde o primeiro componente — não é etapa final.
3. **Performance é decisão de marca**: LCP < 2.5s, CLS < 0.1, INP < 200ms. Não é negociável.
4. **Conteúdo localizado em PT-BR** com estrutura preparada para EN futuramente.
5. **Schema.org sempre** — MedicalClinic, Physician, MedicalTherapy, FAQPage, Article, BreadcrumbList.
6. **Sem componente sem prop tipada.** Tudo TypeScript estrito.
7. **Sem CSS solto.** Tudo via Tailwind ou CSS Modules quando necessário.
8. **Convenções de commit:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).

---

## Conformidade obrigatória

- **LGPD**: política de privacidade, banner de cookies, formulários com consentimento explícito. Saúde mental = dado sensível.
- **CFP (Conselho Federal de Psicologia)**: sem promessa de cura, CRP visível, descrever método e processo, nunca resultado garantido.
- **Hipnoterapia**: usar "hipnoterapia clínica" (regulada), não "hipnose" (genérico).
- **Imagens de pacientes**: nunca de frente; silhueta, costas ou mãos, sempre com consentimento documentado.

---

## Como interagir com este projeto

- Antes de qualquer mudança estrutural, **leia o sprint atual**, em `sprints/sprint-XX.md`.
- Em dúvida sobre conteúdo, **consulte `04_content_inventory.md`** primeiro.
- Em dúvida sobre tokens visuais, **consulte `02_design_system.md`**.
- Se a dúvida for estratégica (qual texto, qual ênfase), **pause e pergunte** ao usuário. Não invente.
- **TODOs estratégicos** (nomes dos métodos, tagline final, etc.) ficam marcados como `// TODO: aguardar decisão das sócias` no código. Não tente decidir por elas.

---

## Status do projeto

`Sprints 00–12 concluídos — pronto para deploy. Ver DEPLOY.md para pré-flight, env vars e pendências de conteúdo/decisão.`
