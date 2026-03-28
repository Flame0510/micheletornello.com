'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useParallax } from '@/hooks/useParallax';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as any, delay: i * 0.12 }
  })
};

const fadeUpReduced = {
  hidden: { opacity: 0, y: 0 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.1 }
  })
};

export default function HeroSection() {
  const parallaxRef = useParallax(0.25);
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section id="hero" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* LCP preload: priority image for desk-setup.png hero background */}
      <Image
        src="/desk-setup.png"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}
        aria-hidden="true"
      />
      <div
        ref={parallaxRef}
        style={{
          position: 'absolute',
          inset: '-20% 0',
          backgroundImage: "url('/desk-setup.png')",
          backgroundSize: 'cover',
          backgroundPosition: '30% center',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      <div className="overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
      <div className="heroContent" style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <motion.span
          className="badge"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
        >
          ● Disponibile per nuovi progetti · {new Date().getFullYear()}
        </motion.span>

        <motion.p
          className="thesis"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
        >
          Tra i pochi professionisti italiani under-30 con esperienza enterprise e docenza strutturata.
        </motion.p>

        <div className="flex flex-col">
          <motion.h1
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            Non costruisco software.
          </motion.h1>
          <motion.h1
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            Costruisco sistemi.
          </motion.h1>
        </div>

        <motion.p
          className="sub"
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
        >
          Formo chi li costruirà.
        </motion.p>

        <motion.a
          href="#contatto"
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          className="hero-cta"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.85rem 1.8rem',
            background: 'var(--color-brand)',
            color: 'var(--color-bg)',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textDecoration: 'none',
            textTransform: 'uppercase' as const,
            transition: 'opacity 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Parliamo del tuo progetto →
        </motion.a>
      </div>
    </section>
  );
}
