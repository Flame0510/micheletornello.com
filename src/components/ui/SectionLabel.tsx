interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] mb-8 ${className}`}
      style={{ color: 'var(--text-primary)' }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '2rem',
          height: '1px',
          background: 'var(--accent-copper)',
          flexShrink: 0,
        }}
      />
      {children}
    </p>
  );
}
