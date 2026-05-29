# Sprint 04 — Cuidados Clínicos

**Duração estimada:** 2 dias
**Objetivo:** páginas-hub `/cuidados` + 5 subpáginas (Psicoterapia, Hipnoterapia, Teste Vocacional, Orientação Familiar, Atendimento Online).

**Pré-leitura obrigatória:** `04_content_inventory.md` (seções CUIDADOS / *), `CLAUDE.md`

---

## Jornada — diferente dos métodos autorais

Estas páginas usam a **Jornada B**: apresentar oferta com clareza, facilitar marcação direta via WhatsApp. CTAs podem ser duplos (Agendar + WhatsApp) e diretos.

---

## Páginas a entregar

### 1. `/cuidados` — Hub das verticais
**Estrutura curta** (50% da densidade de uma vertical):
- Hero curto
- Grid 2×3 com 5 cards (verticais) + 1 card destacando atendimento online
- Cada card: ícone Lucide + nome + 1 linha + link

### 2. `/cuidados/psicoterapia`
Estrutura padrão de vertical clínica (ver template abaixo).

### 3. `/cuidados/hipnoterapia`
Estrutura padrão **+ ênfase educacional**:
- Seção "O que é (e o que não é)" — desmistificação extensa
- FAQ mais robusto (10-12 perguntas)
- Linguagem rigorosa: sempre "hipnoterapia clínica", nunca apenas "hipnose"
- Diferenciação clara em relação ao Método V (link cruzado)

### 4. `/cuidados/teste-vocacional`
Estrutura padrão **+ duas frentes claras**:
- Para adolescentes
- Para adultos em reposicionamento
- Cada frente com FAQ específico

### 5. `/cuidados/orientacao-familiar`
Estrutura padrão **+ três cenários**:
- Famílias com adolescente em conflito
- Pais alinhando abordagem educacional
- Cuidadores de idosos ou pessoas em adoecimento

### 6. `/cuidados/atendimento-online`
Não é uma vertical, é um canal. Estrutura mais leve:
- Hero
- Para quem é
- Como funciona (plataforma segura, LGPD)
- Em quais verticais se aplica (todas as clínicas)
- "Reduz a ansiedade de quem nunca fez terapia"
- FAQ
- CTA

---

## Template de vertical clínica

Criar `components/sections/vertical/` com componentes reutilizáveis e usar para cada uma das verticais 2-5. Cada página vira basicamente uma instância configurada.

### Estrutura padrão (mínimo 1.500 palavras de conteúdo único)

```tsx
// app/(marketing)/cuidados/psicoterapia/page.tsx
export default function PsicoterapiaPage() {
  return (
    <>
      <VerticalHero
        eyebrow="CUIDADOS · PSICOTERAPIA"
        headline="Psicoterapia, no ritmo que seu processo precisa."
        subtitle="..."
        imageSrc="..."
      />
      <VerticalDefinition>
        {/* O que é — texto editorial, não dicionário */}
      </VerticalDefinition>
      <VerticalForWho indications={...} />
      <VerticalApproaches list={['TCC', 'Análise do Comportamento', '...']} />
      <VerticalHowItWorks
        frequency="Semanal ou quinzenal"
        format="Presencial ou online"
        firstSession="..."
      />
      <VerticalProfessionals primary={camila} guests={[...]} />
      <VerticalFAQ items={faqItems} />
      <VerticalCTA />
    </>
  );
}
```

### Componentes reutilizáveis a criar

| Componente | Responsabilidade |
|---|---|
| `VerticalHero` | Eyebrow + headline + subtitle + imagem editorial |
| `VerticalDefinition` | Bloco "o que é" — texto longo editorial |
| `VerticalForWho` | Lista editorial de indicações (não checklist) |
| `VerticalNotForWho` | Anti-positioning quando aplicável |
| `VerticalApproaches` | Métodos disponíveis nessa vertical |
| `VerticalHowItWorks` | Como funciona (frequência, formato, 1ª sessão) |
| `VerticalProfessionals` | Quem cuida — links para perfis |
| `VerticalFAQ` | Accordion + schema FAQPage |
| `VerticalCTA` | CTA duplo (Agendar + WhatsApp) |

---

## Conteúdo específico

### `/cuidados/hipnoterapia` — desmistificação cuidadosa

Esta é a vertical mais sensível por causa da imagem popular da "hipnose" como espetáculo. Tratamento educacional:

**O que é:**
- Estado de relaxamento profundo com consciência preservada
- Técnica reconhecida pela Federação Mundial de Sociedades de Hipnose (a verificar)
- No Brasil, regulamentada pelo Conselho Federal de Psicologia (Res. 13/2000) quando aplicada por psicóloga

**O que NÃO é:**
- Não é mágica
- Não é controle mental
- Você não fica "apagado" ou faz coisas contra a vontade
- Não é espetáculo de palco

**Para quais quadros é indicada:**
- Ansiedade
- Fobias específicas
- Hábitos automáticos (tabagismo, ansiedade alimentar)
- Trauma (com indicação clínica)
- Dor crônica (em parceria com médico)

**Para quais quadros NÃO é indicada:**
- Transtornos psicóticos (em surto)
- Condições que exigem psiquiatria de urgência
- Pessoas sob efeito de substâncias

**FAQ extenso** (referência: Sprint 10 schema FAQPage):
- Eu fico inconsciente?
- E se eu tiver vontade de sair no meio?
- Funciona pra todo mundo?
- Quantas sessões preciso?
- Posso fazer online?
- Qual a formação da Vanessa em hipnoterapia?
- É diferente do Método V?

**Diferenciação com Método V** (callout explícito):
> A hipnoterapia clínica avulsa é a porta de entrada mais acessível ao trabalho com hipnoterapia. O Método V é o programa completo e premium, voltado especificamente para empresários com trava emocional, com diagnóstico aprofundado e plano exclusivo de encontros. Ambos usam hipnoterapia clínica como técnica, mas com público e estrutura diferentes.

### `/cuidados/teste-vocacional` — duas frentes

Layout com **dois grandes blocos lado a lado** após a definição inicial:

**Bloco A — Para adolescentes**
- 16-18 anos, ENEM/vestibular
- Pacote: testagem + devolutiva familiar + 2 sessões de acompanhamento
- Familiar acompanha a devolutiva

**Bloco B — Para adultos**
- 30-50 anos, reposicionamento de carreira
- Pacote: testagem + plano comportamental + acompanhamento
- Diferencial: integração com psicoterapia (não é coaching superficial)
- Pode incluir referência ao Método V quando a questão for trava inconsciente

### `/cuidados/orientacao-familiar` — três cenários

Layout em **3 cards verticais**, cada um com:
- Imagem editorial diferente
- Título do cenário
- Descrição do desafio
- Como o atendimento ajuda

### `/cuidados/atendimento-online` — canal, não vertical

Diferente em estrutura. Mais curta:
- Hero
- "Online com a mesma profundidade"
- Como funciona tecnicamente (plataforma, LGPD)
- Quais verticais oferecem online (todas)
- Tranquiliza quem nunca fez terapia online
- FAQ leve
- CTA

---

## Critérios de aceitação

- [ ] `/cuidados` (hub) com grid de cards funcionando
- [ ] 5 subpáginas implementadas usando os componentes reutilizáveis
- [ ] Cada subpágina tem mínimo 1.500 palavras de conteúdo único
- [ ] FAQs com schema FAQPage em todas
- [ ] CTAs apontando para WhatsApp (`https://wa.me/...`) + `/agendar`
- [ ] Links internos entre verticais relacionadas (hipnoterapia ↔ método V, teste vocacional ↔ método V quando aplicável)
- [ ] Mobile responsivo
- [ ] Lighthouse ≥ 90 em todas
- [ ] Zero violações `axe DevTools`

---

## Próximo passo
Sprint 05 — Páginas dos profissionais.
