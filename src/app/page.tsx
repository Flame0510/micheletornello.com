import HeroSection from '@/components/sections/HeroSection';
import EnterpriseSection from '@/components/sections/EnterpriseSection';
import ChiSonoSection from '@/components/sections/ChiSonoSection';
import AcademySection from '@/components/sections/AcademySection';
import ContactSection from '@/components/sections/ContactSection';
import PortfolioSection from '@/components/sections/PortfolioSection';

const timeline = [
  {
    year: '2020',
    title: 'PRIMA ARCHITETTURA LIVE',
    text: 'Primo sistema in produzione. Stabilità reale, utenti reali, responsabilità reale.',
  },
  {
    year: '2022',
    title: 'SCALING ENTERPRISE',
    text: 'Dalla build alla resilienza: osservabilità, processi, performance e qualità operativa.',
  },
  {
    year: '2023',
    title: 'FORMAZIONE TECNICA',
    text: 'Trasferisce metodo e disciplina a team di sviluppo orientati al lungo periodo.',
  },
  {
    year: '2024',
    title: 'LAUREA IN INGEGNERIA INFORMATICA',
    text: 'BSc Computer Engineering — Percorso accademico focalizzato su sistemi complessi e architetture software.',
  },
  {
    year: '2024',
    title: 'SYSTEM THINKING',
    text: 'Focus su sistemi duraturi: design decisionale, manutenzione evolutiva, impatto.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Credibility Strip */}
      <div className="credStrip_wrap">
        <p className="credStrip_label">// RICONOSCIMENTI & COMMUNITY</p>
        <div className="credStrip_items">
          <span className="credStrip_item"><span className="credStrip_name">RTL 102.5</span><span className="credStrip_role">Intervista in diretta nazionale</span></span>
          <span className="credStrip_sep">·</span>
          <span className="credStrip_item"><span className="credStrip_name">Università di Catania</span><span className="credStrip_role">Speaker · Architetture Mobile</span></span>
          <span className="credStrip_sep">·</span>
          <span className="credStrip_item"><span className="credStrip_name">TEDx Catania</span><span className="credStrip_role">Staff Volontario</span></span>
          <span className="credStrip_sep">·</span>
          <span className="credStrip_item"><span className="credStrip_name">Friends of Figma Catania</span><span className="credStrip_role">Contributore</span></span>
          <span className="credStrip_sep">·</span>
          <span className="credStrip_item"><span className="credStrip_name">Google Developer Group Catania</span><span className="credStrip_role">Membro attivo</span></span>
        </div>
      </div>

      {/* 3. Enterprise */}
      <EnterpriseSection />

      {/* 4. Chi Sono */}
      <ChiSonoSection />

      {/* 5. Proof of Work */}
      <section id="proof" className="pv3G_section">
        <div className="pv3G_container">
          <header className="pv3G_header">
            <span className="pv3G_badge">// PROOF_OF_WORK</span>
            <h2 className="pv3G_title">Architetture validate<br /><em>su scala reale.</em></h2>
            <p className="pv3G_subtitle">
              Dall&apos;infrastruttura critica energetica ai sistemi IoT globali. Dati verificabili, non promesse.
            </p>
          </header>

          <div className="pv3G_grid">
            <div className="pv3G_card pv3G_col8 pv3G_enterprise">
              <div className="pv3G_card_content">
                <div className="pv3G_meta">2022 — 2024 · SYSTEM ARCHITECT · ENTERPRISE</div>
                <h3 className="pv3G_card_title">Enterprise Systems Architecture</h3>
                <div className="pv3G_stats_grid">
                  {[
                    { value: '5', label: 'Settori critici' },
                    { value: '130+', label: 'Paesi raggiunti' },
                    { value: '32.7k', label: 'km di rete' },
                    { value: '1.15B€', label: 'Volume gruppo' },
                  ].map((s) => (
                    <div key={s.label} className="pv3G_stat_item">
                      <span className="pv3G_stat_value">{s.value}</span>
                      <span className="pv3G_stat_label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="pv3G_sectors">
                  {['Smart Home / IoT', 'Healthcare IT', 'Cloud Networking', 'Food-Tech', 'Energia & Infrastrutture'].map((s) => (
                    <span key={s} className="pv3G_sector_tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pv3G_card pv3G_col4 pv3G_education">
              <div className="pv3G_card_content">
                <div className="pv3G_meta">DOCENZA · SJA CATANIA</div>
                <div className="pv3G_big_stat">150+</div>
                <p className="pv3G_card_text">
                  Developer formati presso la <strong>Steve Jobs Academy</strong> di Catania. Architetture enterprise, sistemi mobile e standard di qualità industriale.
                </p>
              </div>
            </div>

            <div className="pv3G_card pv3G_col6 pv3G_presence">
              <div className="pv3G_card_content">
                <div className="pv3G_meta">PRESENZA VERIFICABILE</div>
                <ul className="pv3G_list">
                  <li><strong>RTL 102.5</strong><span>Intervista nazionale</span></li>
                  <li><strong>UniCT</strong><span>Speaker · Architetture Mobile</span></li>
                  <li><strong>TEDx Catania</strong><span>Staff volontario</span></li>
                </ul>
              </div>
            </div>

            <div className="pv3G_card pv3G_col6 pv3G_community">
              <div className="pv3G_card_content">
                <div className="pv3G_meta">COMMUNITY & ECOSYSTEM</div>
                <div className="pv3G_logos">
                  <span>GDG Catania</span>
                  <span className="pv3G_sep">/</span>
                  <span>Friends of Figma</span>
                  <span className="pv3G_sep">/</span>
                  <span>SJA Catania</span>
                </div>
              </div>
            </div>

            <div className="pv3G_card pv3G_col12 pv3G_live">
              <div className="pv3G_live_inner">
                <div className="pv3G_live_header">
                  <div className="pv3G_meta">SISTEMI LIVE IN PRODUZIONE</div>
                  <div className="pv3G_pulse_wrap">
                    <span className="pv3G_pulse"></span>
                    <span className="pv3G_pulse_label">Online & verificabili</span>
                  </div>
                </div>
                <div className="pv3G_live_grid">
                  <a href="https://watchingstars.it" target="_blank" rel="noopener noreferrer" className="pv3G_live_link">
                    <span className="pv3G_live_name">Watching Stars</span>
                    <span className="pv3G_live_url">watchingstars.it →</span>
                  </a>
                  <a href="https://memorycloud.it" target="_blank" rel="noopener noreferrer" className="pv3G_live_link">
                    <span className="pv3G_live_name">Memory Cloud</span>
                    <span className="pv3G_live_url">memorycloud.it →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Timeline */}
      <section className="timeline sectionWrap">
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <h2>TIMELINE</h2>
          <div className="timelineLine">
            {timeline.map((item) => (
              <article key={item.year} className="timeCard">
                <p className="year">{item.year}</p><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Portfolio */}
      <PortfolioSection />

      {/* 8. Academy */}
      <AcademySection />

      {/* 9. Contatti */}
      <ContactSection />

      {/* Newsletter */}
      <section className="newsletter sectionWrap">
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <p className="newsletterLabel">// BUILD DIFFERENT</p>
          <h2>Architettura, sistemi e tech dal Sud Italia.</h2>
          <p className="newsletterSub">Una newsletter per developer e decision maker. Niente rumore — solo insight densi ogni settimana.</p>
          <form
            action="https://app.beehiiv.com/subscribe"
            method="POST"
            target="_blank"
            className="newsletterForm"
          >
            <input type="hidden" name="publication_id" value="fa05d1d5-3790-43f2-aa11-04a59c249428" />
            <input
              type="email"
              name="email"
              placeholder="la-tua@email.com"
              required
              className="newsletterInput"
            />
            <button type="submit" className="newsletterBtn">ISCRIVITI</button>
          </form>
          <p className="newsletterNote">Zero spam. Annulla quando vuoi.</p>
        </div>
      </section>
    </main>
  );
}
