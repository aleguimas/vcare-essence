interface CalloutProps {
  title?: string;
  children: React.ReactNode;
}

export function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="bg-cream-50 border-l-4 border-bronze border-y border-r border-line p-6 md:p-8 my-8 rounded-r-sm">
      {title && <p className="font-sans font-medium text-navy mb-2">{title}</p>}
      <div className="font-sans text-ink leading-relaxed">{children}</div>
    </aside>
  );
}
