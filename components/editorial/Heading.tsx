import { cn } from '@/lib/utils';

type HeadingSize = 'display-xl' | 'display-lg' | 'display-md' | 'h1' | 'h2' | 'h3';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: HeadingSize;
  serif?: boolean;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<HeadingSize, string> = {
  'display-xl': 'text-display-xl',
  'display-lg': 'text-display-lg',
  'display-md': 'text-display-md',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
};

export function Heading({
  as: As = 'h2',
  size = 'h2',
  serif = true,
  children,
  className,
}: HeadingProps) {
  return (
    <As
      className={cn(
        sizeClasses[size],
        serif ? 'font-serif text-moss' : 'font-sans text-ink font-medium',
        'text-balance',
        className,
      )}
    >
      {children}
    </As>
  );
}
