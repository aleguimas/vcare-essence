# Sprint 07 — Sou Profissional (B2B)

**Duração estimada:** 1 dia
**Objetivo:** páginas de captação B2B — consultório residente (clínicos) e sala para gravações (criadores).

**Pré-leitura:** `04_content_inventory.md` (SOU PROFISSIONAL / *), `CLAUDE.md`

---

## Páginas

### 1. `/sou-profissional` — hub
Curta. 2 cards grandes (Consultório Residente + Sala Gravações) + texto sobre curadoria.

### 2. `/sou-profissional/consultorio-residente`
### 3. `/sou-profissional/sala-gravacoes`

---

## `/sou-profissional` — hub

Texto curto sobre o conceito de **convidado em curadoria** (não locatário). Reforça o pilar de curadoria da casa.

Layout: 2 cards lado a lado. Cada um leva a uma subpágina com escopo completamente diferente.

---

## `/sou-profissional/consultorio-residente`

### Estrutura

#### 01 · Hero
- Eyebrow: `SOU PROFISSIONAL · CONSULTÓRIO RESIDENTE`
- Heading: `Profissional em residência da VCare Essence.`
- Subtítulo: `Não é locação de sala. É curadoria — você entra numa casa que tem marca, narrativa e cuidado, e essa casa passa a fortalecer também a sua presença.`
- Foto do espaço (consultório)

#### 02 · O conceito
Texto editorial sobre a diferença entre **alugar uma sala** e **integrar uma casa**:
- ESMERE, Coclinic e outros vendem infraestrutura
- VCare oferece pertencimento a uma marca premium
- Cada convidado é selecionado — não basta pagar

#### 03 · Benefícios concretos
Lista (mas em formato editorial, não bullet asséptico):
- Marca premium do RioMar Trade Center / VCare Essence
- Fluxo de pacientes da casa
- Infraestrutura completa (sala mobiliada, recepção, secretária, WiFi)
- Comunicação compartilhada (Instagram da casa cita os residentes, possível colaboração em conteúdo)
- Curadoria que protege seu posicionamento (você sabe quem mais está aqui)
- Flexibilidade de turnos

#### 04 · Como funciona
Processo em 3 passos:
1. **Candidatura** — formulário curto
2. **Conversa de curadoria** — alinhamento de valores, abordagem, fit
3. **Residência** — contrato com prazo, turnos, comunicação

#### 05 · Para quem é
- Psicólogos, psiquiatras, terapeutas, nutricionistas comportamentais, neuropsicólogos
- Com formação consolidada
- Que querem estar associados a uma marca premium
- Que apreciem trabalhar em colaboração com profissionais da mesma casa

#### 06 · Profissionais já em residência
Quando houver, exibir. Por ora: `Estamos selecionando os primeiros profissionais convidados da casa. Sua candidatura pode ser uma das primeiras.`

#### 07 · Formulário de candidatura
```tsx
// Campos
- Nome completo *
- Email *
- WhatsApp *
- Especialidade clínica *
- CRP / CRM / CRN / outro registro *
- Abordagem terapêutica
- Anos de prática
- Site / Instagram (link opcional)
- Por que você quer integrar a VCare? (textarea, 200-500 caracteres)
```

**Implementação:**
- `react-hook-form` + `zod` para validação
- Server Action para envio
- Email transacional via Resend ou Mailgun
- Toast de confirmação (Sonner)
- LGPD: checkbox de consentimento obrigatório, política de privacidade linkada

#### 08 · CTA final / FAQ
Pequena FAQ inline (não accordion neste caso, pode ser texto corrido):
- Quanto custa?
- Posso atender meus pacientes atuais aqui?
- Que tipo de contrato é assinado?
- Em quanto tempo recebo retorno?

---

## `/sou-profissional/sala-gravacoes`

**Página mais visual do site B2B.** Foco em fotografia. Copy curta.

### Estrutura

#### 01 · Hero visual
- Eyebrow: `SOU PROFISSIONAL · SALA PARA GRAVAÇÕES`
- Heading: `Uma sala com atmosfera, para conteúdo que merece atmosfera.`
- Subtítulo: `Cenário, identidade, endereço premium. Você traz seu equipamento.`
- **Galeria visual do espaço já no hero** — 3-4 fotos editoriais

#### 02 · Para quem é
3-4 categorias com ícone discreto + descrição curta:
- **Criadores de conteúdo de saúde** — psicólogos, médicos, nutricionistas, mentores que produzem para Instagram, TikTok, YouTube
- **Podcasts** — entrevistas, episódios solo, programas regulares
- **Vídeos institucionais** — cursos online, mentorias gravadas, lives
- **Equipes pequenas** — sala de reunião premium para encontros estratégicos

#### 03 · Importante (transparência crítica)
**Bloco em destaque** (Callout):
> A sala é oferecida **sem equipamento técnico**.
> Você traz o seu kit (câmera, microfone, iluminação).
> O que oferecemos é o cenário, a atmosfera, o endereço premium.
> Quem precisa de estúdio com equipamento completo deve buscar fornecedores especializados.

Esta transparência logo no início **filtra desqualificados** e reduz frustração.

#### 04 · Galeria ampliada
Grid grande de fotos da sala — o que você verá no vídeo gravado.

#### 05 · Casos de uso (com imagens dos usos)
Quando houver criadores que já gravaram, mostrar exemplos (com permissão). Por ora: descrições genéricas.

#### 06 · Turnos e valores
**Tabela simples** com:
- Turno (manhã / tarde / noite)
- Duração padrão (4h)
- Valor aproximado (ou "Solicite orçamento" se não quiserem expor)
- Quem inclui pacote mensal?

#### 07 · Formulário de reserva
```tsx
// Campos
- Nome *
- Email *
- WhatsApp *
- Instagram / Canal (link, opcional)
- Tipo de uso * (select: vídeo / podcast / mentoria / reunião / outro)
- Data desejada *
- Turno preferido *
- Equipamento que você traz (textarea, opcional)
- Informações adicionais (textarea, opcional)
```

#### 08 · FAQ específico
- Tem ar-condicionado?
- Quantas pessoas cabem confortavelmente?
- Posso visitar antes de reservar?
- E se eu precisar cancelar?
- Trabalham com produtores externos?
- Vocês podem indicar fotógrafos / técnicos de som locais?

---

## Componentes a criar

`components/forms/`:
- `CandidaturaResidente.tsx` — formulário B2B clínicos
- `ReservaSala.tsx` — formulário B2B criadores
- Compartilham componentes base (`FormField`, `Input`, `Textarea`, `Select`, `Checkbox`)

`app/api/`:
- `app/api/candidatura/route.ts` — POST handler com validação Zod + envio de email
- `app/api/reserva-sala/route.ts` — idem

---

## Variáveis de ambiente

`.env.local`:
```bash
RESEND_API_KEY=re_xxx
CANDIDATURA_EMAIL_TO=contato@vcareessence.com.br  # email das sócias
RESERVA_EMAIL_TO=contato@vcareessence.com.br
```

---

## SEO

### Metadata `/sou-profissional/consultorio-residente`
```ts
export const metadata: Metadata = {
  title: 'Consultório residente — Sou profissional',
  description: 'Programa de residência para psicólogos, psiquiatras e terapeutas com formação consolidada. Não é locação de sala — é curadoria. RioMar Trade Center, Recife.',
  alternates: { canonical: '/sou-profissional/consultorio-residente' },
};
```

### Metadata `/sou-profissional/sala-gravacoes`
```ts
export const metadata: Metadata = {
  title: 'Sala para gravações — Sou profissional',
  description: 'Cenário com atmosfera e endereço premium para criadores de conteúdo de saúde e bem-estar. Sem equipamento técnico — traga seu kit. RioMar Trade Center, Recife.',
  alternates: { canonical: '/sou-profissional/sala-gravacoes' },
};
```

---

## Critérios de aceitação

- [ ] `/sou-profissional` hub funcionando
- [ ] `/sou-profissional/consultorio-residente` completa com formulário funcional
- [ ] `/sou-profissional/sala-gravacoes` completa com galeria + formulário
- [ ] Formulários validam corretamente (Zod)
- [ ] Submit envia email (testar end-to-end com email de dev)
- [ ] Toasts de sucesso/erro funcionando (Sonner)
- [ ] LGPD: consentimento obrigatório, política de privacidade linkada
- [ ] Mobile responsivo
- [ ] Lighthouse ≥ 90
- [ ] Sem campos obrigatórios escondidos / sem dark patterns

---

## Próximo passo
Sprint 08 — Diário (Blog), com CMS.
