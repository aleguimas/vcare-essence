import type { Metadata } from 'next';
import { Hero } from '@/components/sections/home/Hero';
import { SensoryIntro } from '@/components/sections/home/SensoryIntro';
import { MethodsIntro } from '@/components/sections/home/MethodsIntro';
import { CareGrid } from '@/components/sections/home/CareGrid';
import { Founders } from '@/components/sections/home/Founders';
import { HouseGallery } from '@/components/sections/home/HouseGallery';
import { JournalPreview } from '@/components/sections/home/JournalPreview';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { OnlineCTA } from '@/components/sections/home/OnlineCTA';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import { SITE } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'VCare Essence — A primeira clínica sensorial de Recife',
  description:
    'Casa boutique de saúde mental no RioMar Trade Center. Cuidamos do que ninguém vê: a mente, o emocional, a essência. Atendimento presencial em Recife e online.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'VCare Essence — A primeira clínica sensorial de Recife',
    description:
      'Casa boutique de saúde mental no RioMar Trade Center. Cuidamos do que ninguém vê: a mente, o emocional, a essência.',
    images: [{ url: '/images/og/og-home.jpg', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.street}, ${SITE.address.complement}`,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
  // TODO: telephone, openingHours, priceRange — aguardar decisão das sócias
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <SensoryIntro />
      <MethodsIntro />
      <CareGrid />
      <Founders />
      <HouseGallery />
      <JournalPreview />
      <Testimonials />
      <OnlineCTA />
      <FinalCTA />
    </>
  );
}
