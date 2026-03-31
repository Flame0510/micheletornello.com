'use client';

import Image from 'next/image';

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
            <div className="chiB_tlItem">
              <div className="chiB_tlDot" />
              <div className="chiB_tlContent">
                <div className="chiB_tlMeta">
                  <span className="chiB_tlYear">2020</span>
                  <span className="chiB_tlTag">PRIMA ARCHITETTURA LIVE</span>
                </div>
                <p className="chiB_tlText">
                  Primo sistema in produzione.<br />
                  Stabilità reale, utenti reali, responsabilità reale.
                </p>
              </div>
            </div>

            <div className="chiB_tlItem chiB_tlHighlight">
              <div className="chiB_tlDot" />
              <div className="chiB_tlContent">
                <div className="chiB_tlMeta">
                  <span className="chiB_tlYear">2022</span>
                  <span className="chiB_tlTag">SCALING ENTERPRISE</span>
                </div>
                <p className="chiB_tlText">
                  Dalla build alla resilienza: osservabilità,<br />
                  performance e qualità operativa.
                </p>
              </div>
            </div>

            <div className="chiB_tlItem">
              <div className="chiB_tlDot" />
              <div className="chiB_tlContent">
                <div className="chiB_tlMeta">
                  <span className="chiB_tlYear">2024</span>
                  <span className="chiB_tlTag">SYSTEM THINKING</span>
                </div>
                <p className="chiB_tlText">
                  Focus su sistemi duraturi: design decisionale,<br />
                  manutenzione evolutiva, impatto globale.
                </p>
              </div>
            </div>
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
