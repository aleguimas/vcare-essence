import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'cream' | 'sand' | 'moss';
  as?: 'section' | 'article' | 'div';
}

export function Section({
  children,
  className,
  size = 'md',
  tone = 'cream',
  as: As = 'section',
  ...rest
}: SectionProps) {
  return (
    <As
      className={cn(
        size === 'sm' && 'py-section-sm',
        size === 'md' && 'py-section',
        size === 'lg' && 'py-section-lg',
        tone === 'cream' && 'bg-cream text-ink',
        tone === 'sand' && 'bg-sand text-ink',
        tone === 'moss' && 'bg-moss text-cream',
        className,
      )}
      {...rest}
    >
      {children}
    </As>
  );
}
