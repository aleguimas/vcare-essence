# Sprint 06 — A Casa

**Duração estimada:** 1 dia
**Objetivo:** páginas que materializam o pilar sensorial e da experiência física do espaço.

**Pré-leitura:** `04_content_inventory.md` (seções A CASA), `05_assets_guide.md` (todas as fotos da pasta Drive)

---

## Páginas

### 1. `/a-casa` — hub
### 2. `/a-casa/experiencia-sensorial` — **página estratégica**
### 3. `/a-casa/endereco`
### 4. `/a-casa/tour`
### 5. `/a-casa/curadoria` (opcional sprint 06, pode ir para sprint 08)
### 6. `/a-casa/imprensa` (placeholder, conteúdo futuro)

---

## `/a-casa/experiencia-sensorial` — a página que reivindica a categoria

Esta é a página que sustenta a tese de "primeira clínica sensorial de Recife". Tratamento editorial superior. **Densa em fotografia.**

### Estrutura (5 blocos)

#### 01 · Hero
- Eyebrow: `A CASA · EXPERIÊNCIA SENSORIAL`
- Display: `Cuidar começa antes da primeira palavra.`
- Subtítulo: `O ambiente da VCare é projetado para os cinco sentidos. Porque cuidar do que está por dentro começa pelo que o corpo sente do lado de fora.`
- **Imagem principal:** foto do céu estrelado em destaque

#### 02 · Por que o ambiente importa
Bloco editorial longo (3-4 parágrafos). Estabelece a tese clínica:
- Estado mental se constrói pelos sentidos
- Hipnoterapia depende de estado mental relaxado
- Para público em estado de alerta (empresários, adolescentes ansiosos, mulheres em sobrecarga), o desarme sensorial é, em si, terapêutico
- Citação destacada no meio do bloco (do dossiê)

#### 03 · Os cinco sentidos, projetados
**Componente central deste sprint.** Layout em 5 grandes blocos editoriais — um por sentido. Cada bloco com:
- Imagem em destaque
- Eyebrow (nome do sentido em maiúsculas com tracking)
- Heading h3 (uma frase curta capturando o conceito)
- Parágrafo de 2-3 frases
- Pode ser implementado como **scrollytelling** (texto rolando enquanto imagem fica sticky) — opcional, valoriza a experiência.

##### Conteúdo dos cinco sentidos

**Olfato** — `Aroma como assinatura de marca.`
> Cada espaço da casa recebe um aroma cuidadosamente escolhido. O olfato é o sentido mais ligado à memória e à emoção — e o mais negligenciado pelas clínicas comuns. Aqui, o cheiro da recepção já começa o cuidado.

**Audição** — `A cidade fica do lado de fora.`
> Isolamento acústico real protege as conversas. E entre as paredes, ou silêncio projetado ou trilha sonora discreta — nunca rádio, nunca conversa de outros consultórios infiltrando.

**Visão** — `Luz quente. Céu estrelado. Nenhuma luz fria.`
> Não há iluminação hospitalar aqui. A luz é quente, calibrada, suave. E olhe para cima na recepção: o céu estrelado em fibra óptica não é decoração — é a primeira pausa que a gente oferece. (foto do céu estrelado)

**Tato** — `Materiais que convidam ao toque.`
> Madeira, tecidos naturais, cerâmica, mantas. Temperatura constante. O corpo precisa se sentir abraçado antes da mente conseguir falar.

**Paladar** — `O ritual da chegada.`
> Água aromatizada, chá, café especial. Não é cortesia institucional. É o gesto que marca a transição entre o estado de pressa e o estado de cuidado.

#### 04 · Por que isso é vantagem competitiva difícil de copiar
Bloco editorial curto:
> A experiência sensorial não se replica em uma tarde. Exige projeto, investimento e consistência. Pode-se copiar uma palavra-chave de SEO, um post de Instagram, uma tagline. Mas não se copia a sensação de entrar aqui sem refazer o próprio espaço do zero.

#### 05 · CTA
- `Vir conhecer ao vivo →` botão linkando para `/a-casa/endereco`
- ou `Agendar uma conversa →`

---

## `/a-casa` — hub

Estrutura padrão de hub:
- Hero curto: "A Casa"
- 3 cards grandes:
  - Experiência sensorial (CTA principal)
  - Endereço (foto da fachada/recepção)
  - Tour visual
- Bloco de texto sobre o conceito de casa boutique
- CTA agendamento

---

## `/a-casa/endereco`

### Estrutura
1. Hero
2. **Endereço completo**: Av. República do Líbano, 251 · RioMar Trade Center, Torre 4 · Pina, Recife — PE
3. **Mapa interativo** — Google Maps embed (ou Mapbox para mais controle visual)
4. **Como chegar**:
   - De carro (estacionamento, valet)
   - Caminhando do RioMar Shopping
   - Ônibus / Uber
5. **Foto da fachada/lobby** (quando disponível)
6. **Horário de funcionamento** (a confirmar)
7. CTA: Agendar

### Componente do mapa
Usar `next-google-map-embed` ou iframe direto + lazy load. **Não bloquear LCP.**

---

## `/a-casa/tour`

Galeria visual editorial — **a página com mais fotos do site**. Mostra a casa em detalhes.

### Estrutura
1. Hero curto
2. Galeria principal em **grid editorial assimétrico**:
   - Não é grid uniforme. Algumas fotos grandes, outras pequenas, alguns "respiros"
   - Cada foto tem um caption curto (uma linha)
   - Capítulos visuais opcionais: "A recepção", "As salas", "Os detalhes"
3. Lightbox ao clicar (Radix Dialog + framer-motion)
4. CTA final

### Implementação técnica
- Usar `next/image` para cada foto, otimizadas em WebP/AVIF
- Lazy load fora do hero
- `aspect-ratio` definido para evitar CLS
- Quando clica, expande em modal — sem refresh

---

## Componentes a criar

`components/sections/casa/`:
- `SensoryGrid.tsx` — os 5 sentidos com imagens
- `FiveSensesBlock.tsx` — bloco individual de cada sentido
- `MapEmbed.tsx` — mapa lazy-loaded
- `EditorialGallery.tsx` — galeria assimétrica com lightbox

---

## Inventário das fotos (Sprint 06 task crítica)

Antes ou no início deste sprint:

1. **Baixar todas as 16 fotos** da pasta Drive para `public/_raw/`
2. **Converter HEIC → JPG** com `heif-convert` ou Sharp
3. **Catalogar visualmente** — abrir cada foto, identificar conteúdo, renomear descritivamente
4. **Otimizar para web** (WebP + AVIF, múltiplos tamanhos)
5. **Decidir uso de cada foto** com base no inventário visual:
   - Quais são heroes potenciais
   - Quais são detalhes para os 5 sentidos
   - Quais entram no tour
6. **Atualizar `05_assets_guide.md`** com o inventário visual completo

---

## SEO

### Metadata `/a-casa/experiencia-sensorial`
```ts
export const metadata: Metadata = {
  title: 'A experiência sensorial · A casa',
  description: 'A VCare Essence é a primeira clínica sensorial de Recife. O ambiente é projetado para os cinco sentidos — e o ambiente é parte do tratamento.',
  alternates: { canonical: '/a-casa/experiencia-sensorial' },
};
```

### Schema `LocalBusiness` em `/a-casa/endereco`
```ts
{
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': 'https://vcareessence.com.br/#clinic',
  name: 'VCare Essence',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. República do Líbano, 251 — RioMar Trade Center, Torre 4',
    addressLocality: 'Recife',
    addressRegion: 'PE',
    postalCode: '51110-160',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.124,    // TODO: coordenadas exatas
    longitude: -34.901,
  },
  url: 'https://vcareessence.com.br',
  telephone: '+55-81-...',  // TODO
  // openingHoursSpecification: ...
}
```

---

## Critérios de aceitação

- [ ] `/a-casa` hub funcionando
- [ ] `/a-casa/experiencia-sensorial` com 5 blocos sensoriais ricos
- [ ] `/a-casa/endereco` com mapa + informações de acesso
- [ ] `/a-casa/tour` com galeria editorial + lightbox
- [ ] Todas as 16 fotos da pasta Drive inventariadas, convertidas, otimizadas e em `public/images/`
- [ ] `05_assets_guide.md` atualizado com inventário visual
- [ ] Schema `LocalBusiness` em `/a-casa/endereco`
- [ ] Galeria com lazy load — sem prejuízo de LCP
- [ ] Mobile responsivo
- [ ] Lighthouse ≥ 90

---

## Próximo passo
Sprint 07 — Sou profissional (B2B).
