import type { Metadata } from 'next';
import Link from 'next/link';
import { MapEmbed } from '@/components/sections/casa/MapEmbed';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { Button } from '@/components/ui/button';
import { ROUTES, SITE } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Endereço · A Casa · VCare Essence',
  description:
    'VCare Essence no RioMar Trade Center, Torre 4 — Av. República do Líbano, 251, Pina, Recife. Como chegar, estacionamento e horários de atendimento.',
  alternates: { canonical: ROUTES.endereco },
};

// Schema LocalBusiness / MedicalClinic com geo
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${SITE.url}/#clinic`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.street} — ${SITE.address.complement}`,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.1244, // TODO: verificar coordenadas exatas
    longitude: -34.9028,
  },
  telephone: SITE.phone || undefined,
  // openingHoursSpecification: [] — TODO: aguardar decisão das sócias
};

export default function EnderecoPage() {
  const fullAddress = `${SITE.address.street}, ${SITE.address.complement}, ${SITE.address.neighborhood}, ${SITE.address.city} — ${SITE.address.state}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>A Casa · Endereço</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Nos encontre no RioMar Trade Center.
          </Heading>
          <address className="mt-6 not-italic text-lead text-ink/70 font-sans leading-relaxed">
            Av. República do Líbano, 251<br />
            RioMar Trade Center, Torre 4<br />
            Pina, Recife — PE
          </address>
        </Container>
      </Section>

      {/* Mapa */}
      <Section tone="sand">
        <Container>
          <MapEmbed
            address={fullAddress}
            label="Abrir no Google Maps"
          />
        </Container>
      </Section>

      {/* Como chegar */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Como chegar</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Fácil de acessar. Difícil de esquecer.
          </Heading>

          <div className="mt-10 space-y-8">
            {[
              {
                title: 'De carro',
                body: 'O RioMar Trade Center tem estacionamento próprio coberto com amplas vagas. A entrada principal é pela Av. República do Líbano. Após estacionar, acesse a Torre 4 pelo saguão interno do complexo.',
              },
              {
                title: 'A pé — vindo do RioMar Shopping',
                body: 'O Trade Center é integrado ao RioMar Shopping pelo piso L1. Siga as indicações internas até a Torre 4 — são aproximadamente 5 minutos a pé pelo complexo.',
              },
              {
                title: 'Transporte público / aplicativo',
                body: 'Vários ônibus circulam pela Av. República do Líbano. Para Uber e 99, use o endereço "RioMar Trade Center, Pina, Recife" como destino — o complexo tem área de embarque e desembarque.',
              },
            ].map((item) => (
              <div key={item.title} className="border-b border-line pb-8 last:border-0">
                <p className="font-sans font-medium text-moss">{item.title}</p>
                <p className="mt-2 text-body text-ink/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Horários e CTA */}
      <Section tone="sand">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <Eyebrow>Horários</Eyebrow>
              <Heading as="h2" size="h2" className="mt-4">
                Atendimento presencial e online.
              </Heading>
              {/* TODO: horários a confirmar com as sócias */}
              <div className="mt-6 space-y-3">
                {[
                  { day: 'Segunda a Sexta', hours: 'A confirmar' },
                  { day: 'Sábado', hours: 'A confirmar' },
                  { day: 'Domingo', hours: 'Fechado' },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-body text-ink/70 py-3 border-b border-line last:border-0">
                    <span className="font-sans">{h.day}</span>
                    <span className="font-sans text-muted">{h.hours}</span>
                  </div>
                ))}
                <p className="text-small text-muted/60 italic pt-2">
                  Horários a confirmar. Agendamento pelo formulário ou WhatsApp.
                </p>
              </div>
            </div>

            <div>
              <Eyebrow>Agendar</Eyebrow>
              <Heading as="h2" size="h2" className="mt-4">
                Vir conhecer ao vivo.
              </Heading>
              <p className="mt-4 text-body text-ink/70 leading-relaxed">
                A melhor forma de entender a diferença da VCare Essence é estar aqui. O espaço
                não se descreve — se experimenta.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={ROUTES.agendar}>Agendar visita</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
