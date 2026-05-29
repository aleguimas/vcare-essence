import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  prose?: boolean;
}

export function Container({ children, className, narrow, prose }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 md:px-10',
        prose && 'max-w-prose',
        narrow && !prose && 'max-w-prose-wide',
        !narrow && !prose && 'max-w-container',
        className,
      )}
    >
      {children}
    </div>
  );
}
