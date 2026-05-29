import type { Metadata } from 'next';
import { CandidaturaResidente } from '@/components/forms/CandidaturaResidente';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Consultório Residente — Sou Profissional · VCare Essence',
  description:
    'Programa de residência para psicólogos, psiquiatras e terapeutas com formação consolidada. Não é locação de sala — é curadoria. RioMar Trade Center, Recife.',
  alternates: { canonical: ROUTES.consultorioResidente },
};

export default function ConsultorioResidentePage() {
  return (
    <>
      {/* Hero */}
      <Section tone="cream" size="md" className="border-b border-line">
        <Container>
          <Eyebrow>Sou Profissional · Consultório Residente</Eyebrow>
          <Heading as="h1" size="display-md" className="mt-5 max-w-prose-wide">
            Profissional em residência da VCare Essence.
          </Heading>
          <p className="mt-6 text-lead text-ink/70 max-w-prose">
            Não é locação de sala. É curadoria — você entra numa casa que tem marca, narrativa e
            cuidado, e essa casa passa a fortalecer também a sua presença.
          </p>
        </Container>
      </Section>

      {/* O conceito */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>A diferença</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Integrar uma casa é diferente de alugar uma sala.
          </Heading>
          <div className="mt-8 space-y-5 text-body text-ink/80 leading-relaxed">
            <p>
              Espaços de coworking para clínicos — ESMERE, Coclinic e similares — vendem
              infraestrutura. Você chega, usa o espaço, vai embora. A marca do espaço não te
              acrescenta nada, e você não acrescenta nada à marca do espaço.
            </p>
            <p>
              A VCare Essence oferece outra coisa: pertencimento a uma marca premium com
              posicionamento claro. Os pacientes que chegam aqui chegam por confiança na casa —
              e essa confiança se estende a cada profissional que a habita. Os profissionais
              residentes são apresentados na comunicação da casa, participam da identidade da
              marca e têm acesso ao fluxo de pacientes que ela gera.
            </p>
            <p>
              Em troca, a casa é seletiva. Não basta ter cadastro, não basta pagar. É necessário
              fit de valores, abordagem e qualidade de prática.
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefícios */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>O que você ganha</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Marca, infraestrutura e comunidade.
          </Heading>
          <div className="mt-10 space-y-0">
            {[
              {
                title: 'Endereço premium',
                body: 'RioMar Trade Center — um dos endereços comerciais mais valorizados de Recife. Suas consultas acontecem em um espaço que comunica qualidade antes mesmo de você dizer uma palavra.',
              },
              {
                title: 'Infraestrutura completa',
                body: 'Sala mobiliada com identidade visual da casa, recepção, WiFi e espaço de espera projetado. Você chega e atende — sem preocupação com logística.',
              },
              {
                title: 'Fluxo de pacientes da casa',
                body: 'Pacientes que chegam à VCare e não encontram fit com as fundadoras podem ser direcionados a você, conforme sua especialidade.',
              },
              {
                title: 'Presença na comunicação da casa',
                body: 'Profissionais residentes são apresentados no site, nas redes sociais e, eventualmente, em conteúdos colaborativos da marca.',
              },
              {
                title: 'Curadoria que protege seu posicionamento',
                body: 'Você sabe quem mais está aqui. Nenhuma surpresa de dividir espaço com práticas que contradizem seus valores.',
              },
              {
                title: 'Flexibilidade de turnos',
                body: 'Turnos adaptados à sua agenda — manhã, tarde ou noite, por diária, semana ou contrato mensal.',
              },
            ].map((b) => (
              <div key={b.title} className="py-6 border-b border-line last:border-0">
                <p className="font-sans font-medium text-moss">{b.title}</p>
                <p className="mt-2 text-body text-ink/70 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Como funciona */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>Processo</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Como funciona em 3 passos.
          </Heading>
          <div className="mt-10 space-y-8">
            {[
              { n: '1', title: 'Candidatura', body: 'Preencha o formulário abaixo com suas informações, especialidade, abordagem e por que quer integrar a casa. É uma candidatura — não um cadastro.' },
              { n: '2', title: 'Conversa de curadoria', body: 'Se houver fit inicial, agendamos uma conversa presencial ou online para alinhamento de valores, abordagem e expectativas mútuas.' },
              { n: '3', title: 'Residência', body: 'Formalizamos com um contrato com prazo, turnos e regras de comunicação. Você passa a integrar a casa — com tudo que isso implica.' },
            ].map((step) => (
              <div key={step.n} className="flex gap-6">
                <span className="shrink-0 font-serif text-display-md text-bronze/30 leading-none mt-1">
                  {step.n}
                </span>
                <div>
                  <p className="font-sans font-medium text-moss">{step.title}</p>
                  <p className="mt-2 text-body text-ink/70 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Para quem é */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Para quem é</Eyebrow>
          <Heading as="h2" size="h2" className="mt-4">
            Profissionais com formação consolidada e fit com a casa.
          </Heading>
          <div className="mt-6 space-y-2">
            {[
              'Psicólogos(as) clínicos(as)',
              'Psiquiatras',
              'Terapeutas e hipnoterapeutas',
              'Nutricionistas comportamentais',
              'Neuropsicólogos(as)',
              'Outros profissionais de saúde mental com registro ativo',
            ].map((p) => (
              <div key={p} className="flex items-center gap-3 text-body text-ink/80">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze shrink-0" aria-hidden="true" />
                {p}
              </div>
            ))}
          </div>
          <p className="mt-6 text-small text-muted italic font-sans">
            Estamos selecionando os primeiros profissionais convidados da casa. Sua candidatura pode ser uma das primeiras.
          </p>
        </Container>
      </Section>

      {/* Formulário */}
      <Section tone="sand" id="candidatura">
        <Container narrow>
          <Eyebrow>Candidatura</Eyebrow>
          <Heading as="h2" size="h1" className="mt-4">
            Envie sua candidatura.
          </Heading>
          <p className="mt-4 text-body text-muted">
            Não é um cadastro automático. Cada candidatura é lida com atenção. Respondemos em até
            5 dias úteis.
          </p>
          <div className="mt-10">
            <CandidaturaResidente />
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <Container narrow>
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <div className="mt-8 space-y-0">
            {[
              { q: 'Quanto custa?', a: 'O valor varia conforme o formato (diária, semana, mensal) e o turno. Detalhes são apresentados na conversa de curadoria, após avaliação de candidatura.' },
              { q: 'Posso atender meus pacientes atuais aqui?', a: 'Sim. Residentes podem usar o espaço tanto para pacientes próprios quanto, quando aplicável, para pacientes oriundos do fluxo da casa.' },
              { q: 'Que tipo de contrato é assinado?', a: 'Contrato de cessão de uso de espaço com prazo determinado (mínimo 3 meses), com cláusulas de uso de marca, comunicação e confidencialidade.' },
              { q: 'Em quanto tempo recebo retorno?', a: 'Candidaturas são avaliadas e respondidas em até 5 dias úteis. Se houver fit, agendamos conversa em até 2 semanas.' },
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
