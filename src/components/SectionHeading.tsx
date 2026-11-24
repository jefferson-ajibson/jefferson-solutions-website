import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-500">
        {align === 'left' && <span className="h-px w-8 bg-brand-500" aria-hidden="true" />}
        {eyebrow}
        {align === 'center' && <span className="h-px w-8 bg-brand-500" aria-hidden="true" />}
      </p>
      <h2
        className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-charcoal-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-charcoal-300' : 'text-charcoal-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
