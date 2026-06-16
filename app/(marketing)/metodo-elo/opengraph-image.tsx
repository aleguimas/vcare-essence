import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'Método ELO · Para adolescentes em fase de escolha · VCare Essence';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: 'Método ELO · VCare Essence',
    title: 'Seu filho não é preguiçoso.',
  });
}
