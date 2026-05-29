# Sprint 09 — Agendar e Integrações

**Duração estimada:** 1-2 dias
**Objetivo:** página `/agendar` + integração WhatsApp + agendamento online + tracking de conversão.

**Pré-leitura:** `04_content_inventory.md` (AGENDAR), `CLAUDE.md` (duas jornadas)

---

## Página `/agendar`

### Decisão estratégica importante — UI deve refletir as duas jornadas

A página de agendamento atende **dois fluxos diferentes**:

**Fluxo A — Método V / Método C (alta qualificação)**
- O lead vem do conteúdo, já meio aquecido
- Site qualifica, presencial fecha
- CTA: "Agendar primeiro encontro"
- Acionar agendamento com algumas perguntas prévias (Cal.com com formulário)

**Fluxo B — Demais verticais clínicas (alta intenção, baixa fricção)**
- O lead vem do SEO, busca agendamento direto
- Conversão por WhatsApp ou booking direto
- CTA: "Agendar sessão" ou "Falar pelo WhatsApp"

### Estrutura sugerida

#### 01 · Hero curto
- Eyebrow: `VCARE ESSENCE · AGENDAR`
- Heading: `Comece quando quiser.`
- Subtítulo: `Atendemos presencialmente no RioMar Trade Center e online. A primeira conversa é uma escuta — não compromisso.`

#### 02 · Filtro segmentador
Pergunta clara para o visitante segmentar:
> **O que você procura?**
- 🔘 Quero conhecer o Método V (destravamento emocional para empresários) → Vanessa
- 🔘 Quero conhecer o Método C (programa para adolescentes) → Camila
- 🔘 Quero psicoterapia (semanal/quinzenal)
- 🔘 Quero hipnoterapia clínica (para questão pontual)
- 🔘 Quero teste vocacional
- 🔘 Quero orientação familiar
- 🔘 Outro / Não sei ainda

A seleção desbloqueia o próximo bloco (interface progressiva, não exigir todos os campos de uma vez).

#### 03 · Caminhos de contato
Após segmentação, mostrar as 3 opções com peso visual diferente conforme a vertical:

| Vertical | CTA principal | CTA secundário | CTA terciário |
|---|---|---|---|
| Método V | Agendar primeiro encontro (Cal.com) | WhatsApp | Email |
| Método C | Agendar conversa inicial (Cal.com) | WhatsApp | Email |
| Demais | WhatsApp (mais imediato) | Cal.com | Email |

#### 04 · Informações práticas
- Endereço completo
- Horário de funcionamento (a confirmar com as sócias)
- Formas de pagamento aceitas (a confirmar)
- Atendimento por convênio? (provavelmente não — particular)
- Política de cancelamento (a confirmar)

#### 05 · FAQ rápido
- Quanto tempo dura a primeira sessão?
- Preciso de indicação médica?
- Como funciona o pagamento?
- Vocês emitem nota fiscal / recibo para reembolso?
- Como é o atendimento online?

#### 06 · CTA fallback
Para quem ainda está pesquisando:
> Quer conhecer melhor antes de marcar? Volte para a [home] ou veja o [diário VCare].

---

## Integração Cal.com

### 1. Setup
- Criar conta em cal.com (gratuita até 1 usuário)
- Configurar slots por profissional:
  - Vanessa: tipo de evento "Primeiro encontro - Método V" (60min, sem cobrança no calendar)
  - Camila: tipo "Conversa inicial - Método C" (45min) + "Sessão de psicoterapia" (50min) + outros
- Personalizar branding (cores, logo)
- Configurar regras (antecedência mínima, intervalos entre sessões, buffer)

### 2. Integração embedada
```tsx
'use client';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export function CalendarEmbed({ calLink }: { calLink: string }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#8C7853' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return <Cal calLink={calLink} style={{ width: '100%', height: '100%', overflow: 'scroll' }} />;
}
```

`calLink`s:
- `vcareessence/primeiro-encontro-metodo-v`
- `vcareessence/conversa-inicial-metodo-c`
- `vcareessence/psicoterapia-camila`
- etc.

### 3. Roteamento condicional
Quando o usuário escolhe uma vertical no segmentador, abrir o Cal específico em modal ou navegação interna.

---

## Integração WhatsApp

### 1. WhatsApp Business
Configurar WhatsApp Business com número dedicado da clínica. Anotar:
- Número de WhatsApp (formato internacional: 5581XXXXXXXX)

### 2. Click-to-chat
Não exige WhatsApp Cloud API para começar. Use links diretos:
```tsx
<a href="https://wa.me/5581999999999?text=Olá!%20Cheguei%20pelo%20site%20da%20VCare%20Essence." />
```

### 3. Mensagem pré-preenchida segmentada
```ts
const buildWhatsAppLink = (vertical: string) => {
  const baseMessage = `Olá! Cheguei pelo site da VCare Essence.`;
  const verticalMessages: Record<string, string> = {
    'metodo-v': `${baseMessage} Tenho interesse em conhecer o Método V (Vanessa).`,
    'metodo-c': `${baseMessage} Tenho interesse no Método C (Camila) para um adolescente da família.`,
    'psicoterapia': `${baseMessage} Gostaria de informações sobre psicoterapia.`,
    'hipnoterapia': `${baseMessage} Gostaria de informações sobre hipnoterapia clínica.`,
    'teste-vocacional': `${baseMessage} Tenho interesse em teste vocacional.`,
    'orientacao-familiar': `${baseMessage} Tenho interesse em orientação familiar.`,
    default: baseMessage,
  };
  const message = verticalMessages[vertical] || verticalMessages.default;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
```

Isso ajuda a Camila/Vanessa **identificar a origem do lead** sem fazer pergunta.

### 4. Botão flutuante (opcional)
WhatsApp button no canto inferior direito em todas as páginas. Comportamento:
- Aparece após 30% de scroll OU após 10s
- Mobile: tap = WhatsApp direto
- Desktop: hover mostra tooltip com nome
- **Tom discreto.** Cor `bronze`, não verde WhatsApp estridente.
- Pode ser **escondido** nas páginas dos métodos autorais (Método V e Método C) — porque essas páginas não convertem por WhatsApp, e o botão polui a jornada.

---

## Tracking de conversão

Para entender a performance do funil. Implementar com GA4 + GTM.

### Eventos a rastrear
```ts
// Click em CTA principal
gtag('event', 'cta_click', {
  cta_name: 'agendar_metodo_v',
  page_path: window.location.pathname,
});

// Abertura de WhatsApp
gtag('event', 'whatsapp_open', {
  vertical: 'metodo-v',
  source_page: window.location.pathname,
});

// Abertura de calendário
gtag('event', 'calendar_open', {
  calendar_type: 'metodo_v',
});

// Confirmação de agendamento (via Cal.com webhook → server action → gtag)
gtag('event', 'appointment_booked', {
  vertical: 'metodo-v',
  professional: 'vanessa',
});

// Submissão de formulário (B2B)
gtag('event', 'form_submit', {
  form_name: 'candidatura_residente',
});
```

### Conversões GA4
Marcar como conversão no GA4:
- `appointment_booked`
- `whatsapp_open`
- `form_submit`

---

## Página de obrigado (pós-conversão)

Cal.com tem página pós-booking nativa, mas você pode criar uma página de retorno para tracking customizado:

`/agendado` (ou `?status=success`):
- Confirmação amigável
- "Em breve você receberá um email com os detalhes."
- O que esperar do primeiro encontro
- Link para enquanto isso: explorar o blog, ver o tour

---

## Critérios de aceitação

- [ ] `/agendar` com segmentador funcional
- [ ] Cal.com integrado e funcionando
- [ ] Slots configurados para Vanessa e Camila
- [ ] Links WhatsApp segmentados por vertical
- [ ] (Opcional) Botão WhatsApp flutuante em páginas adequadas
- [ ] Eventos GA4 rastreando corretamente (testar em modo debug)
- [ ] Página de obrigado configurada
- [ ] FAQ inline funcionando
- [ ] Mobile responsivo
- [ ] Lighthouse ≥ 90 (Cal.com embed pode prejudicar — usar lazy load se necessário)

---

## Próximo passo
Sprint 10 — SEO técnico (schemas, sitemap, OG, páginas por bairro).
