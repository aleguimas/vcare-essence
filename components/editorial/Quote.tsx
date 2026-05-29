import { cn } from '@/lib/utils';

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export function Quote({ children, author, className }: QuoteProps) {
  return (
    <figure className={cn('border-l-2 border-bronze pl-6 my-8', className)}>
      <blockquote className="font-serif italic text-h3 text-moss leading-relaxed">
        &ldquo;{children}&rdquo;
      </blockquote>
      {author && (
        <figcaption className="mt-3 text-small text-muted not-italic font-sans">
          &mdash; {author}
        </figcaption>
      )}
    </figure>
  );
}
