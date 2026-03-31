'use client';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ badge, title, subtitle, align = 'left', className = '' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <header className={`flex flex-col ${alignClass} ${className}`}>
      {badge && (
        <span
          className="font-mono text-xs uppercase tracking-widest mb-3"
          style={{ color: 'var(--accent-primary)' }}
        >
          {badge}
        </span>
      )}
      <h2
        className="section-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="section-subtitle mt-4 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}

export default SectionHeader;
