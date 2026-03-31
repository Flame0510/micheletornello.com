'use client';

import Image from 'next/image';

export default function ChiSonoSection() {
  return (
    <section id="chi-sono" className="chiB_section">
      <div className="chiB_container">
        <div className="chiB_visual">
          <div className="chiB_photoBox">
            <Image src="/profile-photo.png" alt="Michele Tornello" className="chiB_img" fill style={{ objectFit: 'cover' }} />
            <div className="chiB_texture"></div>
          </div>

          <div className="chiB_stats">
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

          <div className="chiB_flow">
            <div className="chiB_step">
              <div className="chiB_stepMeta">
                <span className="chiB_node"></span>
                <span className="chiB_year">2020</span>
                <span className="chiB_stepTag">PRIMA ARCHITETTURA LIVE</span>
              </div>
              <p className="chiB_stepText">
                Primo sistema in produzione.<br />
                Stabilità reale, utenti reali, responsabilità reale.
              </p>
            </div>

            <div className="chiB_step chiB_highlight">
              <div className="chiB_stepMeta">
                <span className="chiB_node"></span>
                <span className="chiB_year">2022</span>
                <span className="chiB_stepTag">SCALING ENTERPRISE</span>
              </div>
              <p className="chiB_stepText">
                Dalla build alla resilienza: osservabilità,<br />
                performance e qualità operativa.
              </p>
            </div>

            <div className="chiB_step">
              <div className="chiB_stepMeta">
                <span className="chiB_node"></span>
                <span className="chiB_year">2024</span>
                <span className="chiB_stepTag">SYSTEM THINKING</span>
              </div>
              <p className="chiB_stepText">
                Focus su sistemi duraturi: design decisionale,<br />
                manutenzione evolutiva, impatto globale.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <a
              href="#contatto"
              style={{
                display: 'inline-block',
                background: 'var(--accent-copper)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                padding: '0.9rem 2rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                transition: 'background 0.2s ease',
                borderRadius: '0.5rem',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'var(--accent-copper-dark)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'var(--accent-copper)')}
            >
              Parliamo del tuo progetto →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
