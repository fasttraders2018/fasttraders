import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, variant = 'up', delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style = { '--delay': `${delay}ms` } as CSSProperties;
  const variantClass = variant === 'up' ? '' : `reveal-${variant}`;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${variantClass} ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
