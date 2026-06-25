'use client';

import { motion, useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: i * 0.12 }
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
      {/* Light overlay — lascia vedere la foto ma mantiene testo scuro leggibile */}
      <div className="heroOverlay" />
      <div className="heroContent" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div className="heroInner">
          {/* Text column — layout singola colonna, senza portrait */}
          <div className="heroText flex flex-col items-start">
            {/* Single h1 with two visual lines */}
            <motion.h1
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
              className="flex flex-col"
            >
              <span className="hero_pre_title" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                Non costruisco software.
              </span>
              <motion.span
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                style={{ color: 'var(--accent-primary)', fontStyle: 'normal', fontWeight: 800 }}
              >
                Costruisco sistemi.
              </motion.span>
            </motion.h1>

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
              className="btn-primary"
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
            >
              Parliamo del tuo progetto <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
