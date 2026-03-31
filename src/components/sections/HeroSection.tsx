'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

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
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? fadeUpReduced : fadeUp;

  return (
    <section id="hero" className="hero">
      <div className="heroContent" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div className="heroInner">
          {/* Left column — text */}
          <div className="heroText">
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
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              >
                Non costruisco software.
              </motion.h1>
              <motion.h1
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
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
              style={{
                display: 'inline-block',
                marginTop: '2rem',
                padding: '0.9rem 2rem',
                background: 'var(--accent-copper)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                textTransform: 'uppercase' as const,
                transition: 'background 0.2s ease',
                borderRadius: '0.5rem',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'var(--accent-copper-dark)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'var(--accent-copper)')}
            >
              Parliamo del tuo progetto →
            </motion.a>
          </div>

          {/* Right column — photo */}
          <motion.div
            className="heroPhoto"
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            <div className="heroPhotoWrap">
              <Image
                src="/profile-photo.png"
                alt="Michele Tornello"
                fill
                priority
                sizes="(max-width: 767px) 0px, (max-width: 1023px) 300px, 420px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
