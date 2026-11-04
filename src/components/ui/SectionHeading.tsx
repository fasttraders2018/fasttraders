import Reveal from '@/components/ui/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
          <span className="h-px w-8 bg-brand-600" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-500">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
