'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { TimelineItem } from '@/components/ui/TimelineItem';

const timelineItems = [
  {
    year: '2022',
    title: 'ENTERPRISE & DOCENZA',
    text: 'Prima architettura enterprise in produzione.\nInizio docenza Steve Jobs Academy.',
    highlight: true,
  },
  {
    year: '2023',
    title: 'PRESENZA TECNICA',
    text: 'TEDx Catania, GDG, workshop universitari.\nCostruzione di metodo e comunità.',
    highlight: false,
  },
  {
    year: '2024',
    title: 'LAUREA & MEDIA',
    text: 'Laurea in Ingegneria Informatica.\nIntervista RTL 102.5. Speaker UniCT.',
    highlight: false,
  },
  {
    year: '2025',
    title: 'PRODOTTI LIVE',
    text: 'Watching Stars, Memory Cloud, Cashbee.\nDall\'architettura ai prodotti in mercato.',
    highlight: false,
  },
  {
    year: '2026',
    title: 'ADESSO',
    text: 'System Architect attivo, docente SJA,\nAI applicata — Olympus, Keeper e oltre.',
    highlight: true,
  },
];

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export default function ChiSonoSection() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduced ? 0.1 : 0.55, ease, delay: reduced ? 0 : delay },
  });

  const slideLeft = {
    initial: { opacity: 0, x: reduced ? 0 : -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduced ? 0.1 : 0.65, ease },
  };

  return (
    <section id="chi-sono" className="chiB_section">
      <div className="chiB_container">

        <motion.div className="chiB_visual" {...slideLeft}>
          <div className="chiB_photoBox">
            <Image
              src="/michele-profile.webp"
              alt="Michele Tornello"
              className="chiB_img"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
            />
            <div className="chiB_texture" />
            <div className="chiB_statsOverlay">
              <div className="chiB_stat">
                <span className="chiB_val">2022</span>
                <span className="chiB_lab">Inizio Docenza SJA</span>
              </div>
              <div className="chiB_stat">
                <span className="chiB_val">150+</span>
                <span className="chiB_lab">Studenti Formati</span>
              </div>
              <div className="chiB_stat">
                <span className="chiB_val">06</span>
                <span className="chiB_lab">Progetti Lanciati</span>
              </div>
              <div className="chiB_stat">
                <span className="chiB_val">SJA</span>
                <span className="chiB_lab">Partner Tecnico</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="chiB_story">
          <motion.header className="chiB_header" {...fadeUp(0)}>
            <span className="chiB_label">// CHI SONO</span>
            <h2 className="chiB_title">
              Prima il <em>pensiero</em>.<br />
              Poi il codice.
            </h2>
            <p className="chiB_intro">
              Laureato in Ingegneria Informatica. System Architect · Product Engineer · Tech Educator. Lavora su sistemi enterprise in produzione dal 2022.
            </p>
          </motion.header>

          <div className="chiB_timeline">
            {timelineItems.map((item, i) => (
              <motion.div key={item.year} {...fadeUp(i * 0.07)}>
                <TimelineItem
                  year={item.year}
                  title={item.title}
                  text={item.text}
                  variant="chi-sono"
                  highlight={item.highlight}
                />
              </motion.div>
            ))}
          </div>

          <motion.div style={{ marginTop: '2rem' }} {...fadeUp(0.35)}>
            <a href="#contatto" className="btn-primary">
              Parliamo del tuo progetto →
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
