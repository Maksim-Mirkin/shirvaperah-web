import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'center' | 'right';
};

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'right' ? 'text-right' : 'text-center';
  const descriptionWidth = align === 'right' ? '' : 'mx-auto max-w-2xl';
  const accentPosition = align === 'right' ? '' : 'mx-auto';

  return (
    <div className={alignment}>
      <span className="text-sm font-semibold tracking-[0.14em] text-[#d4a5a5]">{eyebrow}</span>
      <h2 className="mt-2 text-4xl font-bold text-[#2c3e1f] sm:text-5xl">{title}</h2>
      <div className={`mt-5 h-1.5 w-16 rounded-full bg-[#d4a5a5] ${accentPosition}`} aria-hidden="true" />
      {description ? <p className={`mt-6 text-lg leading-relaxed text-[#5c6b4a] ${descriptionWidth}`}>{description}</p> : null}
    </div>
  );
}
