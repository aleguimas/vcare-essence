import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'VCare Essence — A primeira clínica sensorial de Recife';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: 'VCare Essence · Recife',
    title: 'A primeira clínica sensorial de Recife.',
  });
}
