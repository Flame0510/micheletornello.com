'use client';

import Image from 'next/image';
import { TimelineItem } from '@/components/ui/TimelineItem';

const timelineItems = [
  {
    year: '2020',
    title: 'PRIMA ARCHITETTURA LIVE',
    text: 'Primo sistema in produzione.\nStabilità reale, utenti reali, responsabilità reale.',
    highlight: false,
  },
  {
    year: '2022',
    title: 'SCALING ENTERPRISE',
    text: 'Dalla build alla resilienza: osservabilità,\nperformance e qualità operativa.',
    highlight: true,
  },
  {
    year: '2024',
    title: 'SYSTEM THINKING',
    text: 'Focus su sistemi duraturi: design decisionale,\nmanutenzione evolutiva, impatto globale.',
    highlight: false,
  },
];

export default function ChiSonoSection() {
  return (
    <section id="chi-sono" className="chiB_section">
      <div className="chiB_container">

        <div className="chiB_visual">
          <div className="chiB_photoBox">
            <Image
              src="/profile-photo.png"
              alt="Michele Tornello"
              className="chiB_img"
              fill
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
