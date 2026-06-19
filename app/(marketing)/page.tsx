import type { Metadata } from 'next';
import { Hero } from '@/components/sections/home/Hero';
import { SensoryIntro } from '@/components/sections/home/SensoryIntro';
import { MethodsIntro } from '@/components/sections/home/MethodsIntro';
import { CareGrid } from '@/components/sections/home/CareGrid';
import { Founders } from '@/components/sections/home/Founders';
import { HouseGallery } from '@/components/sections/home/HouseGallery';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { OnlineCTA } from '@/components/sections/home/OnlineCTA';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildVideoSchema } from '@/lib/schemas';
import { TOUR_VIDEO } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'VCare Essence, A primeira clínica sensorial de Recife',
  description:
    'Clínica boutique de saúde mental no RioMar Trade Center. Cuidamos do que ninguém vê: a mente, o emocional, a essência. Atendimento presencial em Recife e online.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'VCare Essence, A primeira clínica sensorial de Recife',
    description:
      'Clínica boutique de saúde mental no RioMar Trade Center. Cuidamos do que ninguém vê: a mente, o emocional, a essência.',
    // OG image gerada dinamicamente por app/opengraph-image.tsx
  },
};

export default function HomePage() {
  // O schema MedicalClinic + WebSite é injetado globalmente no layout.
  return (
    <>
      <JsonLd
        data={buildVideoSchema({
          videoId: TOUR_VIDEO.videoId,
          name: TOUR_VIDEO.title,
          description: TOUR_VIDEO.description,
          uploadDate: TOUR_VIDEO.uploadDate,
          path: '/',
        })}
      />
      <Hero />
      <SensoryIntro />
      <MethodsIntro />
      <CareGrid />
      <Founders />
      <HouseGallery />
      <Testimonials />
      <OnlineCTA />
      <FinalCTA />
    </>
  );
}
