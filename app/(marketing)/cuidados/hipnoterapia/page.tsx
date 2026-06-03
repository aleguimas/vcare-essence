import type { Metadata } from 'next';
import { VerticalHero } from '@/components/sections/vertical/VerticalHero';
import { VerticalDefinition } from '@/components/sections/vertical/VerticalDefinition';
import { VerticalForWho } from '@/components/sections/vertical/VerticalForWho';
import { VerticalNotForWho } from '@/components/sections/vertical/VerticalNotForWho';
import { VerticalHowItWorks } from '@/components/sections/vertical/VerticalHowItWorks';
import { VerticalProfessionals } from '@/components/sections/vertical/VerticalProfessionals';
import { VerticalCTA } from '@/components/sections/vertical/VerticalCTA';
import { MethodFAQ } from '@/components/sections/method/MethodFAQ';
import { Callout } from '@/components/editorial/Callout';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/editorial/Eyebrow';
import { Heading } from '@/components/editorial/Heading';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMedicalTherapySchema, buildBreadcrumbSchema } from '@/lib/schemas';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Hipnoterapia Clínica · VCare Essence',
  description:
    'Hipnoterapia clínica em Recife. Sem mística, com método. Atendimento regulamentado para ansiedade, fobias, hábitos e trauma. Vanessa Albuquerque, 14 anos de prática.',
  alternates: { canonical: ROUTES.hipnoterapia },
};

const schema = [
  buildMedicalTherapySchema({
    name: 'Hipnoterapia Clínica',
    description:
      'Hipnoterapia clínica regulamentada pelo Conselho Federal de Psicologia, indicada para ansiedade, fobias, hábitos automáticos e trauma.',
    path: ROUTES.hipnoterapia,
  }),
  buildBreadcrumbSchema([
    { name: 'Início', path: ROUTES.home },
    { name: 'Cuidados', path: ROUTES.cuidados },
    { name: 'Hipnoterapia Clínica', path: ROUTES.hipnoterapia },
  ]),
];

const PROFESSIONALS = [
  {
    name: 'Vanessa Albuquerque',
    role: 'Hipnoterapeuta Clínica',
    crp: 'CRP XX/XXXXX', // TODO: aguardar dados das sócias
    href: ROUTES.vanessa,
    imgSrc: '/images/profissionais/vanessa-albuquerque-vcare-essence-01.webp',
  },
];

const HOW_ITEMS = [
  { label: 'Duração da sessão', value: '60 a 90 minutos' },
  { label: 'Formato', value: 'Presencial ou online' },
  { label: 'Estado durante a sessão', value: 'Consciente, com memória preservada' },
  { label: 'Número de sessões', value: 'Definido individualmente' },
];

const FAQ = [
  {
    question: 'Eu fico inconsciente durante a hipnoterapia?',
    answer:
      'Não. A hipnoterapia clínica é um estado de atenção focada — você permanece consciente, com memória do que acontece e com capacidade de interromper a sessão quando quiser. O que muda é o nível de ativação do pensamento analítico: ele recua, permitindo acesso a camadas mais profundas. Não há perda de controle.',
  },
  {
    question: 'E se eu tiver vontade de sair no meio da sessão?',
    answer:
      'Você pode sair quando quiser. O estado hipnótico não é uma prisão — é um estado que você entra e sai ativamente. A qualquer momento, basta a intenção de retornar ao estado de vigília normal.',
  },
  {
    question: 'Funciona para todo mundo?',
    answer:
      'A grande maioria das pessoas consegue atingir o estado hipnótico necessário para o trabalho clínico. Pessoas com transtornos psicóticos ativos ou que estejam sob efeito de substâncias não são atendidas. Nos demais casos, a profundidade do estado varia — o que é trabalhado na sessão inicial.',
  },
  {
    question: 'Quantas sessões preciso?',
    answer:
      'Depende do objetivo e do quadro. Para questões pontuais (fobia específica, hábito, ansiedade situacional), costuma ser entre 3 e 8 sessões. Para trabalhos mais profundos, pode ser mais. Isso é definido na avaliação inicial.',
  },
  {
    question: 'Posso fazer hipnoterapia online?',
    answer:
      'Sim. A hipnoterapia clínica funciona bem no formato online quando há ambiente adequado — silêncio, sem interrupções, áudio claro. Alguns casos pedem presencial, o que é avaliado individualmente.',
  },
  {
    question: 'A hipnoterapia é regulamentada no Brasil?',
    answer:
      'Sim. O Conselho Federal de Psicologia regulamenta o uso da hipnose como recurso auxiliar no trabalho do psicólogo desde a Resolução CFP nº 013/2000. Vanessa Albuquerque atua dentro dessa regulamentação.',
  },
  {
    question: 'Qual a formação da Vanessa em hipnoterapia?',
    answer:
      'Vanessa tem 14 anos de prática em hipnoterapia clínica, com formação continuada na área. A especificidade da formação pode ser verificada no perfil completo da profissional.',
  },
  {
    question: 'Hipnoterapia avulsa é diferente do Método V?',
    answer:
      'Sim — são coisas diferentes. A hipnoterapia avulsa aqui é para questões pontuais: uma fobia, um hábito, ansiedade em contexto específico. O Método V é o programa completo e premium de Vanessa, voltado para empresários com trava emocional profunda, com diagnóstico aprofundado e plano exclusivo de encontros. Ambos usam hipnoterapia clínica como técnica — a diferença está no escopo, na profundidade e no público.',
  },
];

export default function HipnoterapiaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <VerticalHero
        eyebrow="Cuidados · Hipnoterapia Clínica"
        headline="Hipnoterapia clínica. Sem mística. Com método."
        subtitle="Uma técnica reconhecida e regulamentada para acessar o inconsciente e trabalhar padrões que o pensamento consciente não alcança."
      />

      {/* O que é e o que NÃO é */}
      <VerticalDefinition eyebrow="O que é" headline="Estado focado, consciência preservada, acesso profundo.">
        <p>
          A hipnoterapia clínica é um estado de relaxamento profundo com atenção focada. Nesse
          estado, o pensamento analítico recua e o inconsciente fica mais disponível para o
          trabalho terapêutico. Você permanece consciente durante toda a sessão, com memória
          preservada — não há "apagão", nem perda de controle.
        </p>
        <p>
          É um recurso auxiliar regulamentado pelo Conselho Federal de Psicologia (Resolução CFP
          nº 013/2000) para uso por profissionais habilitados. Na VCare Essence, é conduzida por
          Vanessa Albuquerque, hipnoterapeuta com 14 anos de prática clínica.
        </p>
      </VerticalDefinition>

      {/* O que NÃO é */}
      <Section tone="sand">
        <Container narrow>
          <Eyebrow>O que não é</Eyebrow>
          <Heading as="h2" size="h2" className="mt-4">
            Hipnoterapia clínica não é o que aparece na televisão.
          </Heading>
          <div className="mt-8 space-y-3">
            {[
              'Não é controle mental — você não faz coisas contra a sua vontade',
              'Não é perda de consciência — você lembra de tudo que acontece',
              'Não é espetáculo — nada acontece sem sua cooperação ativa',
              'Não é mágica — é uma técnica com base em neurociência e psicologia clínica',
              'Não é terapia alternativa — é recurso clínico regulamentado',
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 py-3 border-b border-line last:border-0">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-bronze/40" aria-hidden="true" />
                <p className="text-body text-ink/80">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <VerticalForWho
        headline="Para quais quadros é indicada"
        indications={[
          'Ansiedade generalizada ou situacional',
          'Fobias específicas (avião, altura, agulha, animais)',
          'Hábitos automáticos (tabagismo, comportamentos compulsivos)',
          'Insônia com componente emocional',
          'Dor crônica (em parceria com acompanhamento médico)',
          'Trauma com indicação clínica (avaliação prévia obrigatória)',
          'Bloqueios emocionais pontuais sem caráter de trava profunda',
        ]}
        tone="cream"
      />

      <VerticalNotForWho
        items={[
          'Transtornos psicóticos em período de surto ativo',
          'Condições que exigem psiquiatria de urgência',
          'Pessoas sob efeito de álcool ou outras substâncias',
          'Bloqueios emocionais profundos com origem em padrões inconscientes enraizados — para esses casos, o Método V é mais adequado',
        ]}
        tone="sand"
      />

      {/* Callout diferenciação Método V */}
      <Section tone="cream" size="sm">
        <Container narrow>
          <Callout title="Hipnoterapia avulsa × Método V — qual é a diferença?">
            A hipnoterapia clínica avulsa é a porta de entrada mais acessível ao trabalho com
            hipnoterapia — indicada para questões pontuais e bem delimitadas. O Método V é o
            programa completo de Vanessa, voltado especificamente para empresários com trava
            emocional profunda, com diagnóstico aprofundado, plano exclusivo e acompanhamento
            integral. Ambos usam hipnoterapia clínica como técnica, mas com público e estrutura
            radicalmente diferentes.
          </Callout>
        </Container>
      </Section>

      <VerticalHowItWorks items={HOW_ITEMS} tone="sand">
        <p>
          Uma sessão de hipnoterapia clínica começa com um momento de alinhamento — entender o
          objetivo daquele encontro e o estado atual. Em seguida, a indução: um guia verbal que
          conduz ao estado de relaxamento focado. O trabalho terapêutico acontece nesse estado —
          que pode incluir visualização, reprocessamento de memória, ressignificação de padrões.
          A sessão termina com um retorno gradual ao estado de vigília e uma integração do que
          foi trabalhado.
        </p>
      </VerticalHowItWorks>

      <VerticalProfessionals professionals={PROFESSIONALS} tone="cream" />

      <MethodFAQ questions={FAQ} tone="sand" />

      <VerticalCTA
        headline="Uma primeira sessão é uma avaliação — não um compromisso."
        subtext="Entendemos o seu caso e verificamos se a hipnoterapia clínica é o caminho adequado."
      />
    </>
  );
}
