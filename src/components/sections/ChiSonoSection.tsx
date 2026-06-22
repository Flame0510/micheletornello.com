'use client';

import Image from 'next/image';
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

export default function ChiSonoSection() {
  return (
    <section id="chi-sono" className="chiB_section">
      <div className="chiB_container">

        <div className="chiB_visual">
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
        </div>

        <div className="chiB_story">
          <header className="chiB_header">
            <span className="chiB_label">// CHI SONO</span>
            <h2 className="chiB_title">
              Prima il <em>pensiero</em>.<br />
              Poi il codice.
            </h2>
            <p className="chiB_intro">
              Laureato in Ingegneria Informatica. System Architect · Product Engineer · Tech Educator. Lavora su sistemi enterprise in produzione dal 2022.
            </p>
          </header>

          <div className="chiB_timeline">
            {timelineItems.map((item) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                text={item.text}
                variant="chi-sono"
                highlight={item.highlight}
              />
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a
              href="#contatto"
              className="btn-primary"
            >
              Parliamo del tuo progetto →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
