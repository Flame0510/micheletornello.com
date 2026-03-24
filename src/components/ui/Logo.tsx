import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`font-mono text-xs uppercase tracking-widest hover:text-[var(--color-brand)] transition-colors ${className}`}
    >
      Michele <span className="text-[var(--color-brand)]">Tornello</span>
    </Link>
  );
}
