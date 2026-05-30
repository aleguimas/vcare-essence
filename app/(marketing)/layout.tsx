import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { JsonLd } from '@/components/seo/JsonLd';
import { medicalClinicSchema, websiteSchema } from '@/lib/schemas';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[medicalClinicSchema, websiteSchema]} />
      <Header />
      <main id="main" className="pt-[72px]">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
