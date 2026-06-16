import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const alt = 'MEP · Para destravar emocionalmente · VCare Essence';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: 'MEP · VCare Essence',
    title: 'Você não está cansado. Você está travado.',
  });
}
