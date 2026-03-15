import { useEffect, useRef } from 'react';

export function useParallax(speed: number = 0.2) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Solo desktop
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}
