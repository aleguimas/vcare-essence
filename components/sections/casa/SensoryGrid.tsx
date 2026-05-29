import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { FiveSensesBlock, type SenseData } from './FiveSensesBlock';

interface SensoryGridProps {
  senses: SenseData[];
}

export function SensoryGrid({ senses }: SensoryGridProps) {
  return (
    <Section tone="cream">
      <Container>
        {senses.map((sense, i) => (
          <FiveSensesBlock key={sense.sense} {...sense} reverse={i % 2 !== 0} />
        ))}
      </Container>
    </Section>
  );
}
