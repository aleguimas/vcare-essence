# Deploy & Launch — VCare Essence

Runbook do Sprint 12. Itens marcados com **[código ✓]** já estão prontos no
repositório. Os demais dependem de contas, credenciais ou decisões das sócias.

---

## 1. Pendências de conteúdo/decisão (resolver antes ou logo após o go-live)

Tudo isso está marcado como `// TODO` no código. São dados/decisões que não
podem ser inventados (CFP/LGPD e identidade de marca):

| Item | Onde editar |
|---|---|
| Nomes finais dos Métodos V e C | `lib/routes.ts` (slugs) + eyebrows nas páginas `metodo-v`/`metodo-c` |
| CRPs de Vanessa e Camila | `lib/routes.ts` (não há campo ainda — hoje vão inline nas páginas) + schemas |
| Telefone / WhatsApp | `lib/routes.ts` → `SITE.whatsapp` (formato `5581XXXXXXXXX`) e `SITE.phone` |
| E-mail institucional | `lib/routes.ts` → `SITE.email` |
| Instagram | `lib/routes.ts` → `SITE.instagram` |
| CNPJ | `lib/routes.ts` → `SITE.cnpj` (footer) |
| CEP exato e coordenadas geo | `lib/routes.ts` (zip) e `lib/schemas.ts` (`CLINIC_GEO`) |
| Horários de atendimento | `lib/schemas.ts` (openingHours) + página `agendar` e `a-casa/endereco` |
| Formas de pagamento / política de cancelamento | páginas `agendar` e `termos-de-uso` |
| Revisão jurídica de `politica-de-privacidade` e `termos-de-uso` | as duas páginas (minutas) |
| Revisão de copy final pelas sócias | todas as páginas |
| Ensaios editoriais (Vanessa, Camila) | `public/images/profissionais/` (hoje placeholder) |
| Decisão sobre `ansiedadezero.com.br` → `/metodo-v` | `next.config.ts` (redirect comentado) |

**Preencher `SITE.whatsapp` destrava automaticamente:** todos os links WhatsApp,
o botão flutuante e o CTA do segmentador. Hoje degradam para "em breve"/ocultos.

---

## 2. Pré-flight de código — **[código ✓]**

- [x] `pnpm build` sem erros
- [x] `pnpm tsc --noEmit` limpo
- [x] `pnpm lint` sem warnings
- [x] Imagens otimizadas (ambiente ≤186KB) e com `alt`
- [x] Links internos sem 404 (seção Diário removida da home até o blog existir)
- [x] OG: imagens dinâmicas via `opengraph-image.tsx` (home, metodo-v, metodo-c)
- [x] `sitemap.xml`, `robots.txt`, schemas JSON-LD, favicon

---

## 3. Variáveis de ambiente (Vercel → Project Settings → Environment Variables)

Ver `.env.example`. Mínimo para produção plena:

- `RESEND_API_KEY`, `CANDIDATURA_EMAIL_TO`, `RESERVA_EMAIL_TO` — formulários B2B
- `NEXT_PUBLIC_GA_ID` (e/ou `NEXT_PUBLIC_GTM_ID`) — analytics (pós-consentimento)
- `NEXT_PUBLIC_CALCOM_USERNAME` — agenda online (criar event-types do CAL_LINKS)

Sanity fica para quando o Diário for ativado.

---

## 4. Domínio e DNS

- [ ] Registrar `vcareessence.com.br` (e `.com` se disponível)
- [ ] Apontar DNS para a Vercel; SSL automático
- [ ] Definir apex vs www (redirect)
- [ ] `ansiedadezero.com.br` → 301 para `/metodo-v` (após decisão; redirect já
      preparado, comentado, em `next.config.ts`)

## 5. Deploy Vercel

- [ ] Conectar repo GitHub `aleguimas/vcare-essence` à Vercel
- [ ] Configurar env vars de produção
- [ ] Deploy da branch `main`; confirmar preview deploys em PRs

## 6. Pós-deploy

- [ ] Google Search Console: verificar via DNS, submeter `sitemap.xml`
- [ ] Bing Webmaster Tools: idem
- [ ] Confirmar GA4/GTM em produção (modo debug) **após aceitar cookies**
- [ ] Microsoft Clarity (a integrar — não está no código ainda)
- [ ] Google Business Profile: categorias, NAP padronizado, 30+ fotos
- [ ] NAP consistente em Doctoralia, BoaConsulta, MundoPsicólogos, Apple Maps, Waze
- [ ] Testar OG/Twitter cards (FB Debugger, Twitter Validator)
- [ ] Testar formulários end-to-end (recebimento do e-mail real)
- [ ] Lighthouse mobile ≥ 90 em todas as páginas; monitorar Core Web Vitals (Vercel Analytics)

## 7. Primeiros backlinks

- [ ] Perfis Doctoralia / BoaConsulta / MundoPsicólogos
- [ ] Perfil CRP de cada profissional apontando para o site
- [ ] Link na bio do Instagram

---

## Pós-launch (registro)

- Cadência de blog: 2 posts/mês nos primeiros 6 meses (requer ativar o CMS — ver Sprint 08)
- Coleta ativa de avaliações Google (meta 50 em 6 meses)
- Monitoramento mensal de ranking nos clusters do dossiê
