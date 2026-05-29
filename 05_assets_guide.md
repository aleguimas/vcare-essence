# 05 — Assets Guide

## Pasta-fonte no Google Drive

**Pasta principal:** `VCARE ESSENCE - CAMILA`
**URL:** https://drive.google.com/drive/folders/1Zdsq13TB1EueGRF_1IMqHy3DU-VZnCnS

### Subpastas relevantes

| Pasta | Conteúdo | Drive Folder ID |
|---|---|---|
| `Fotos` | 16 fotos do espaço da clínica (HEIC + JPG) | `1ZFpcEatNZ6OQTn4KCZ7QP3Wbd3q9rVQg` |
| `Logo` | Logo vetorizado (PNG + JPG, alta resolução 8000×4500) | `1H3o8804-hUMJ0k6paPSHow_2nHLC4lmO` |

### Outros arquivos relevantes na pasta principal
- `casa musical.pdf` — referência de inspiração estética (investigar)
- `Proposta Comercial e Contrato - VCARE ESSENCE`
- `VCare_Essence_Dossie_Estrategico_v3-2.docx` — dossiê estratégico oficial

---

## Pipeline de assets — passo a passo

### 1. Baixar tudo do Drive para `public/_raw/`
**Nunca commitar** essa pasta no git. Adicionar ao `.gitignore`:

```gitignore
# Assets brutos (não otimizados)
public/_raw/
```

### 2. Converter HEIC → JPG/PNG
A maioria das fotos está em `.HEIC` (formato iPhone). Converter para JPG ou diretamente para WebP/AVIF usando `sharp` ou `imagemagick`:

```bash
# usando heif-convert (Linux/macOS)
sudo apt install libheif-examples   # ou: brew install libheif
for f in public/_raw/*.HEIC; do
  heif-convert "$f" "${f%.HEIC}.jpg"
done

# Alternativa via Node script com sharp
node scripts/convert-heic.js
```

### 3. Otimizar e gerar variantes responsivas
Usar `next/image` em runtime — ele gera variantes automaticamente. Mas para o **hero** (imagens críticas que precisam de pré-processamento manual), gerar manualmente:

```bash
# Tamanhos recomendados por papel
# - Hero: 1920w, 1280w, 768w (WebP + AVIF)
# - Editorial inline: 1200w, 800w (WebP)
# - Cards: 600w, 400w (WebP)
# - Thumbs: 200w (WebP)
```

Script sugerido em `scripts/optimize-images.ts` (criar no Sprint 06 quando começar a integrar imagens).

### 4. Estrutura final em `public/images/`

```
public/
├── images/
│   ├── ambiente/
│   │   ├── ceu-estrelado-hero.webp          ← FOTO PRINCIPAL (céu estrelado fibra óptica)
│   │   ├── ceu-estrelado-hero.avif
│   │   ├── detalhes-tateis-01.webp           ← planta + esfera de fibra + cristais
│   │   ├── recepcao.webp
│   │   ├── sala-consulta.webp
│   │   └── ...
│   ├── profissionais/
│   │   ├── vanessa-editorial-01.webp         ← TODO: fazer ensaio editorial
│   │   └── camila-editorial-01.webp          ← TODO: fazer ensaio editorial
│   ├── logo/
│   │   ├── vcare-essence-full.svg            ← versão vetorial (TODO: vetorizar do PNG)
│   │   ├── vcare-essence-full.png            ← fallback
│   │   ├── vcare-essence-mark.svg            ← só o símbolo (flor+coração+V)
│   │   └── vcare-essence-monochrome.svg     ← versão monocromática
│   └── og/
│       ├── og-home.jpg                       ← 1200×630
│       ├── og-metodo-v.jpg
│       ├── og-metodo-c.jpg
│       └── og-default.jpg
```

---

## Inventário das 16 fotos da pasta `Fotos`

Análise preliminar baseada em duas amostras já visualizadas:

| ID Drive | Nome | Tipo | Descrição (preliminar) | Uso sugerido |
|---|---|---|---|---|
| `14LAMewFIHwzw9oczxFwKRbnT04Wch6sD` | `67712A31...JPG` | JPG | **Céu estrelado no teto** (fibra óptica) | **HERO PRINCIPAL** da home + página sensorial |
| `1hhm9Vnh9BhXOz9Bx5XTb34ZrtwccGnIE` | `B88C5C02...JPG` | JPG | Detalhes táteis (planta, esfera de fibra, pirita, pirâmides decorativas) | Cards editoriais, página sensorial |
| `1YsW_bHMu0QU1NMAotj_GqRL2Tefd1FT2` | `IMG_0448` | HEIC | A inventariar | A definir |
| `10RC62Xlz1mq3MmPIHg-CU34DHWyVJHk-` | `IMG_9484` | HEIC | A inventariar | A definir |
| `1p7TC_Nkls0R5AbvLdL7_K3eT3xwFCN0M` | `IMG_8303` | HEIC | A inventariar | A definir |
| `1jCK2kVj8VnqONtbClVdG5B7A1xS7bBms` | `IMG_8641` | HEIC | A inventariar | A definir |
| `1XV9qiekip5EpRW4OHIvf0YQ_4kZQv9mq` | `IMG_0446` | HEIC | A inventariar | A definir |
| `11JGXvOOnH_XfMMJlW6MhMDYH3IcEg_wr` | `IMG_8706` | HEIC | A inventariar | A definir |
| `1Au48VNKmHUmduhz7b9Ss--y8z-DkwuTS` | `IMG_9496` | HEIC | A inventariar | A definir |
| `1Z4ReCC20CP_DjWAynfSIm3pBQvW65W7l` | `IMG_8302` | HEIC | A inventariar | A definir |
| `1W_5XQdRoFCnut_4U84zq7kD14970oRdc` | `IMG_0459` | HEIC | A inventariar | A definir |
| `1gWY4F915Sd1KBi5cQw1B1_TH7EwU281-` | `IMG_0457` | HEIC | A inventariar | A definir |
| `1l_evPB26s5HjGVM4C5KHsMwT07BjDSSt` | `IMG_0460` | HEIC | A inventariar | A definir |
| `1Szfy9xZXQrcDZipYYu3JqbdEPU7jYYaY` | `IMG_0458` | HEIC | A inventariar | A definir |
| `1aDXzmvqXce3WWComp42A3AdfYn8zbD2i` | `IMG_0461` | HEIC | A inventariar | A definir |
| `1A-4qxUV8jz9MjiqyhJd79sUc3LD5fz8f` | `IMG_0456` | HEIC | A inventariar | A definir |

### **Tarefa do Sprint 06: inventário visual completo**
Após converter todas para JPG/WebP, criar um **arquivo de catálogo** em `public/_raw/CATALOG.md` com thumbnail + descrição + uso planejado de cada foto. Renomear arquivos com nomes descritivos antes de mover para `public/images/`.

---

## Logo — análise e diretrizes

### Versão disponível
- **Arquivo principal:** `LOGOTIPOS VETORIZADAS-05.png` (Drive ID `1GH9U_hF3s3nAF2NpVmhcmy1Jt2LjPAfi`)
- **Dimensões:** 8000×4500px (resolução alta, mas é raster)
- **Outras versões:** `-05.jpg` (1.8MB) e `-09.jpg`

### Características do logo
- **Símbolo:** flor estilizada com pétalas em traços finos, "coração" abaixo formado por linhas que se fecham em uma forma de V invertido
- **Tipografia:** "VCare Essence" em serifa moderna (alinhada com a recomendação Fraunces)
- **Tagline interna:** `EMOTIONAL HEALING & CONSCIOUS PSYCHOLOGY`
- **Cor:** dourado/bronze metálico (~ #8C7853 a #B5A47F)
- **Fundo:** branco/transparente

### Recomendação crítica
**Vetorizar o logo (SVG).** Logo raster em 8000×4500 funciona em emergência, mas:
- Não escala perfeitamente
- Não permite color overrides via CSS
- Penaliza performance (arquivo grande)

**Ações para o Sprint 01:**
1. Levar o arquivo a um designer/ilustrador para vetorização em SVG
2. Gerar três versões SVG:
   - `vcare-essence-full.svg` — símbolo + texto (padrão)
   - `vcare-essence-mark.svg` — só símbolo (para avatar/favicon)
   - `vcare-essence-monochrome.svg` — versão em uma cor só (para fundos coloridos)
3. Manter o PNG como fallback em `public/images/logo/`

### Cor exata do logo
Capturar a cor exata do PNG e adicionar como token `bronze-logo` se diferir significativamente do `bronze` do design system. Provavelmente é praticamente o mesmo (#8C7853).

---

## Imagens que **ainda precisam ser produzidas**

| Tipo | Status | Quando |
|---|---|---|
| **Ensaio editorial Vanessa** | TODO | Sprint 05 — agendar com fotógrafo |
| **Ensaio editorial Camila** | TODO | Sprint 05 — agendar com fotógrafo |
| **Tour fotográfico ampliado** do espaço | TODO | Sprint 06 — sessão profissional |
| **Vídeo curto de loop** do céu estrelado (hero) | TODO | Sprint 02 — pode ser gravado com celular bom |
| **OG images** por página | TODO | Sprint 10 — gerar via template |
| **Favicon e app icons** | TODO | Sprint 01 — gerar a partir do SVG do símbolo |

---

## Direção fotográfica (referência do dossiê)

Para o ensaio editorial das profissionais e tour fotográfico:

- **Luz natural sempre que possível.** Janela à esquerda, sombras suaves.
- **Tons quentes pós-processados** — leve sépia, baixa saturação, sensação de filme analógico.
- **Espaço respirando** — composições com muito ar.
- **Detalhes táteis** — madeira, tecido, planta, xícara, livro aberto, luz filtrada.
- **Pessoas reais** — proibido banco de imagens.
- **Pacientes nunca de frente** — silhueta, costas, mãos, sempre com consentimento documentado.
- **Profissionais NÃO de jaleco sorrindo para a câmera.** Editorial, lateral, contemplativo. Igual ensaio para revista de cultura, não LinkedIn.
- **Vetar absolutamente:**
  - estoque corporativo
  - cabeças com engrenagens
  - mãos em coração
  - paciente sorrindo com profissional de jaleco
  - cores saturadas

---

## Lista de imagens de **referência externa**

(Para passar ao designer/fotógrafo como inspiração, não para uso direto no site — direitos autorais.)

- Aman Resorts (atmosfera de retiro contemplativo)
- Aesop (atmosfera de butique sensorial)
- Le Labo (fotografia editorial de produto íntimo)
- Soho House (fotografia de espaço acolhedor premium)
- Hotéis da Six Senses (uso de fibra óptica e elementos naturais)

Não copiar nada — usar como vocabulário visual.

---

## Como o Claude Code deve usar este arquivo

1. **Antes de adicionar qualquer imagem ao código**, verifique se está em `public/images/` (otimizada). Se estiver em `public/_raw/`, processar primeiro.
2. **Sempre usar `next/image`** com `width`, `height`, `alt` descritivo e `priority` (apenas no LCP hero).
3. **Alt text é copy** — escrever como descrição editorial, não "imagem de" / "foto de".
4. **Nunca usar imagens em CSS background** quando puder usar `next/image`. Performance.
5. **Sempre fornecer `sizes`** para imagens responsivas.
6. **Imagens decorativas** (puro ornamento, sem informação) recebem `alt=""` + `aria-hidden="true"`.

```tsx
// Bom
<Image
  src="/images/ambiente/ceu-estrelado-hero.webp"
  alt="Teto da recepção da VCare Essence com efeito de céu estrelado em fibra óptica"
  width={1920}
  height={1080}
  priority
  sizes="100vw"
/>

// Ruim
<img src="/images/foto.jpg" alt="imagem" />
```
