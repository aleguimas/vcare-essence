# Sprint 12 — Launch

**Duração estimada:** 0.5 dia
**Objetivo:** publicar o site em produção com tudo verificado.

---

## 1. Pré-flight (antes do deploy)

- [ ] Todos os TODOs estratégicos resolvidos OU conscientemente adiados (nomes dos métodos, CRPs, telefone, CEP, coordenadas, horários, preços)
- [ ] Revisão de copy final pelas sócias (responsabilidade delas)
- [ ] Revisão legal: CFP (sem promessa de cura, CRP visível) + LGPD
- [ ] Todas as imagens otimizadas e com alt
- [ ] Todos os links internos funcionando (sem 404)
- [ ] Links WhatsApp e Cal.com com número/conta reais
- [ ] Formulários enviando para o email correto das sócias
- [ ] `pnpm build` sem erros nem warnings
- [ ] `pnpm tsc --noEmit` limpo
- [ ] Lighthouse ≥ 90 em todas as páginas

## 2. Domínio e DNS

- [ ] Registrar `vcareessence.com.br` (e `.com` se disponível)
- [ ] Registrar/manter `ansiedadezero.com.br` → redirect 301 para `/metodo-v` (decisão do capítulo 14)
- [ ] Apontar DNS para a Vercel
- [ ] SSL automático (Vercel) ativo
- [ ] Testar redirects (www → apex ou vice-versa)

## 3. Deploy Vercel

- [ ] Conectar repositório GitHub à Vercel
- [ ] Configurar variáveis de ambiente de produção (Sanity, Resend, WhatsApp, GA4, Cal.com)
- [ ] Deploy de produção a partir da branch `main`
- [ ] Verificar preview deploys em PRs
- [ ] Confirmar build de produção idêntico ao local

## 4. Pós-deploy

- [ ] **Google Search Console**: adicionar propriedade, verificar via DNS, submeter `sitemap.xml`
- [ ] **Bing Webmaster Tools**: idem
- [ ] **GA4 + GTM**: confirmar tracking em produção (modo debug)
- [ ] **Microsoft Clarity**: confirmar gravação de sessões
- [ ] **Google Business Profile**: criar/otimizar com categorias, endereço padronizado, 30+ fotos
- [ ] Padronizar NAP (nome, endereço, telefone) em Doctoralia, BoaConsulta, MundoPsicólogos, Apple Maps, Waze
- [ ] Testar OG/Twitter cards em produção (FB Debugger, Twitter Validator)
- [ ] Testar todos os formulários em produção (end-to-end real)
- [ ] Monitorar Core Web Vitals reais (Vercel Analytics) na primeira semana

## 5. Primeiros backlinks (kick-off de autoridade)

- [ ] Perfis completos: Doctoralia, BoaConsulta, MundoPsicólogos
- [ ] Perfil CRP de cada profissional apontando para o site
- [ ] Instagram com link na bio

## Critérios de aceitação
- [ ] Site no ar em `vcareessence.com.br` com SSL
- [ ] Search Console + sitemap submetidos
- [ ] Analytics funcionando em produção
- [ ] GBP otimizado
- [ ] Todos os formulários e integrações testados em produção
- [ ] Zero links quebrados
- [ ] Core Web Vitals reais dentro das metas

## Pós-launch (não é deste sprint, mas registrar)
- Cadência de blog: 2 posts/mês nos primeiros 6 meses
- Coleta ativa de avaliações Google (meta 50 em 6 meses)
- Monitoramento mensal de ranking nos clusters do dossiê (capítulo 9)
