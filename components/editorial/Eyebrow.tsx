import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  tone?: 'bronze' | 'moss' | 'muted';
  className?: string;
}

export function Eyebrow({ children, tone = 'bronze', className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'text-eyebrow font-sans font-semibold uppercase tracking-[0.15em]',
        tone === 'bronze' && 'text-bronze',
        tone === 'moss' && 'text-moss',
        tone === 'muted' && 'text-muted',
        className,
      )}
    >
      {children}
    </p>
  );
}
