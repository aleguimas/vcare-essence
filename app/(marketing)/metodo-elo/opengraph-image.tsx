import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Método Elo · Para adolescentes em fase de escolha · VCare Essence';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: 'Método Elo · VCare Essence',
    title: 'Seu filho não é preguiçoso.',
  });
}
