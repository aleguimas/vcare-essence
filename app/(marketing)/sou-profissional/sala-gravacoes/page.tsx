import type { Metadata } from 'next';
import { ReservaSala } from '@/components/forms/ReservaSala';
import { Callout } from '@/components/editorial/Callout';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';
import { Video, Mic, BookOpen, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sala para Gravações · Sou Profissional · VCare Essence',
  description:
    'Cenário com atmosfera e endereço premium para criadores de conteúdo de saúde e bem-estar. Sem equipamento técnico, traga seu kit. RioMar Trade Center, Recife.',
  alternates: { canonical: ROUTES.salaGravacoes },
};

const CASOS_USO = [
  {
    icon: Video,
    label: 'Criadores de conteúdo de saúde',
    description: 'Psicólogos, médicos, nutricionistas e mentores que produzem para Instagram, TikTok ou YouTube.',
  },
  {
    icon: Mic,
    label: 'Podcasts',
    description: 'Entrevistas, episódios solo, programas regulares. Acústica projetada para voz.',
  },
  {
    icon: BookOpen,
    label: 'Mentorias e cursos gravados',
    description: 'Aulas online, vídeos institucionais, conteúdo de assinatura. Fundo que comunica autoridade.',
  },
  {
    icon: Users,
    label: 'Reuniões estratégicas',
    description: 'Equipes pequenas que precisam de sala de reunião premium para encontros que importam.',
  },
] as const;

export default function SalaGracoesPage() {
  return (
    <>
      {/* Hero visual */}
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>Sou Profissional · Sala para Gravações</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Uma sala com atmosfera, para conteúdo que merece atmosfera.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            Cenário, identidade, endereço premium. Você traz seu equipamento.
          </p>

          {/* Grade de fotos placeholder, substituir com fotos reais do Sprint 06 */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={`bg-sand rounded-xl ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'} flex items-end p-3`}>
                <p className="text-small text-muted/40 font-sans italic">Foto, Sprint 06</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Transparência crítica, primeiro bloco */}
      <Section tone="sand" size="sm">
        <Container narrow>
          <Callout title="Importante antes de reservar">
            A sala é oferecida <strong>sem equipamento técnico</strong>. Você traz o seu kit
            (câmera, microfone, iluminação). O que oferecemos é o cenário, a atmosfera e o
            endereço premium. Quem precisa de estúdio com equipamento completo deve buscar
            fornecedores especializados.
          </Callout>
        </Container>
      </Section>

      {/* Para quem é */}
      <Section tone="cream">
        <Container>
          <Eyebrow>Para quem é</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4 mb-10">
            Quatro casos de uso.
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CASOS_USO.map(({ icon: Icon, label, description }) => (
              <div key={label} className="flex gap-5 p-7 rounded-2xl border border-line bg-cream-50">
                <Icon size={24} strokeWidth={1.5} className="text-bronze shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-sans font-medium text-moss">{label}</p>
                  <p className="mt-2 text-small text-muted leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Turnos e valores */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Turnos e valores</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Disponibilidade flexível.
          </Heading>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-body font-sans border-collapse">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left py-3 pr-6 font-medium text-moss">Turno</th>
                  <th className="text-left py-3 pr-6 font-medium text-moss">Horário</th>
                  <th className="text-left py-3 font-medium text-moss">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                  { turno: 'Manhã', horario: '8h às 12h (4h)', valor: 'Solicite orçamento' },
                  { turno: 'Tarde', horario: '13h às 17h (4h)', valor: 'Solicite orçamento' },
                  { turno: 'Noite', horario: '18h às 22h (4h)', valor: 'Solicite orçamento' },
                ].map((row) => (
                  <tr key={row.turno}>
                    <td className="py-4 pr-6 font-medium text-moss">{row.turno}</td>
                    <td className="py-4 pr-6 text-ink/70">{row.horario}</td>
                    <td className="py-4 text-muted italic">{row.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* TODO: definir valores com as sócias */}
            <p className="mt-4 text-small text-muted/60 font-sans italic">
              Pacotes mensais disponíveis para uso recorrente. Valores informados após contato.
            </p>
          </div>
        </Container>
      </Section>

      {/* Formulário de reserva */}
      <Section tone="cream" id="reserva">
        <Container narrow>
          <Eyebrow>Reserva</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Solicite sua reserva.
          </Heading>
          <p className="mt-4 text-body text-muted">
            Verificamos disponibilidade e confirmamos em até 24 horas úteis.
          </p>
          <div className="mt-10">
            <ReservaSala />
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <div className="mt-8 space-y-0">
            {[
              { q: 'A sala tem ar-condicionado?', a: 'Sim. Temperatura controlada é parte da experiência sensorial da clínica.' },
              { q: 'Quantas pessoas cabem confortavelmente?', a: 'A sala foi projetada para 2 a 4 pessoas. Para grupos maiores, consulte disponibilidade de configuração.' },
              { q: 'Posso visitar antes de reservar?', a: 'Sim. Agende uma visita de reconhecimento, gratuita, sem compromisso.' },
              { q: 'E se eu precisar cancelar?', a: 'Cancelamentos com mais de 24h de antecedência não têm custo. Cancelamentos de última hora seguem política informada no momento da reserva.' },
              { q: 'Vocês podem indicar fotógrafos ou técnicos de som locais?', a: 'Temos parceiros de confiança em Recife. Na confirmação da reserva, compartilhamos referências quando solicitado.' },
              { q: 'Vocês trabalham com produtores externos?', a: 'Sim, desde que o uso seja compatível com os termos da reserva e os valores da clínica.' },
            ].map((item) => (
              <div key={item.q} className="py-6 border-b border-line last:border-0">
                <p className="font-sans font-medium text-moss">{item.q}</p>
                <p className="mt-2 text-body text-ink/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
