import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`font-mono text-xs uppercase tracking-widest hover:text-[#B87333] transition-colors ${className}`}
    >
      Michele <span className="text-[#B87333]">Tornello</span>
    </Link>
  );
}
