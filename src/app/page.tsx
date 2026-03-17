'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView as useFramerInView } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import PortfolioSection from '@/components/sections/PortfolioSection';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as any, delay: i * 0.12 }
  })
};

// Hook semplice per il counter animato
function useCounter(target: number, isInView: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  return count;
}

function StatBox({ value, label, isNumber = true }: { value: string | number, label: string, isNumber?: boolean }) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, { once: true });
  const numericValue = typeof value === 'number' ? value : parseInt(value.toString().replace(/\D/g, ''));
  const count = useCounter(numericValue, isInView);
  
  return (
    <div ref={ref} className="docH_stat">
      <span className="docH_statVal">
        {isNumber ? (typeof value === 'string' && value.includes('+') ? `${count}+` : count) : value}
      </span>
      <span className="docH_statLab">{label}</span>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') return (
    <div className="contactSuccess">
      <p className="contactSuccessCode">// 200 OK</p>
      <p>Messaggio ricevuto. Ti rispondo entro 24h.</p>
    </div>
  );

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="contactRow">
        <label htmlFor="contact-name" className="sr-only">Nome</label>
        <input
          id="contact-name"
          className="contactInput"
          type="text"
          placeholder="Nome"
          required
          value={form.name}
          onChange={e => setForm(f => ({...f, name: e.target.value}))}
        />
        <label htmlFor="contact-email" className="sr-only">Email</label>
        <input
          id="contact-email"
          className="contactInput"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={e => setForm(f => ({...f, email: e.target.value}))}
        />
      </div>
      <label htmlFor="contact-message" className="sr-only">Messaggio</label>
      <textarea
        id="contact-message"
        className="contactInput contactTextarea"
        placeholder="Raccontami il progetto..."
        required
        rows={5}
        value={form.message}
        onChange={e => setForm(f => ({...f, message: e.target.value}))}
      />
      <button className="contactBtn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? '// INVIO...' : 'INVIA MESSAGGIO →'}
      </button>
      {status === 'error' && <p className="contactError">Errore nell&apos;invio. Scrivi a micheletornello.dev@gmail.com</p>}
    </form>
  );
}

export default function HomePage() {
  const parallaxRef = useParallax(0.25);
  const statusRows = [
    { label: 'ROLE', desc: 'System Architect & Full-Stack Dev', state: 'STABLE' },
    { label: 'EDU', desc: 'SJA Lecturer — 400+ devs trained', state: 'DEPLOYED' },
    { label: 'PRESS', desc: 'RTL 102.5 National Interview', state: 'VERIFIED' },
    { label: 'OPS', desc: 'Independent Founder & Enterprise Dev', state: 'ACTIVE' },
  ];

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
      title: 'SYSTEM THINKING',
      text: 'Focus su sistemi duraturi: design decisionale, manutenzione evolutiva, impatto.',
    },
  ];

  const operations = [
    {
      name: 'REC Security',
      stack: 'Node/PostgreSQL',
      metric: '99.9% uptime'
    },
    {
      name: 'Cashbee',
      stack: 'Next.js/Node',
      metric: 'Cashback'
    }
  ];

  return (
    <main>
      <section id="hero" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div 
          ref={parallaxRef}
          style={{ 
            position: 'absolute', 
            inset: '-20% 0',
            backgroundImage: "url('/desk-setup.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
            variants={fadeUp}
          >
            ● Disponibile per nuovi progetti · {new Date().getFullYear()}
          </motion.span>
          
          <motion.p 
            className="thesis"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Tra i pochi professionisti italiani under-30 con esperienza enterprise e docenza strutturata.
          </motion.p>
          
          <div className="flex flex-col">
            <motion.h1 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Non costruisco software.
            </motion.h1>
            <motion.h1 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
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
            variants={fadeUp}
          >
            Formo chi li costruirà.
          </motion.p>
          
          <motion.a
            href="#contatto"
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="hero-cta"
            style={{
              display: 'inline-block',
              marginTop: '2rem',
              padding: '0.85rem 1.8rem',
              background: '#B87333',
              color: '#080808',
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

      {/* Credibility Strip */}
      <div className="credStrip_wrap">
        <p className="credStrip_label">// RICONOSCIMENTI & COMMUNITY</p>
        <div className="credStrip_items">
          <span className="credStrip_item"><span className="credStrip_name">RTL 102.5</span><span className="credStrip_role">Intervista in diretta nazionale</span></span>
          <span className="credStrip_sep">·</span>
          <span className="credStrip_item"><span className="credStrip_name">Università di Catania</span><span className="credStrip_role">Speaker React Native</span></span>
          <span className="credStrip_sep">·</span>
          <span className="credStrip_item"><span className="credStrip_name">TEDx Catania</span><span className="credStrip_role">Staff Volontario</span></span>
          <span className="credStrip_sep">·</span>
          <span className="credStrip_item"><span className="credStrip_name">Friends of Figma Catania</span><span className="credStrip_role">Contributore</span></span>
          <span className="credStrip_sep">·</span>
          <span className="credStrip_item"><span className="credStrip_name">Google Developer Group Catania</span><span className="credStrip_role">Membro attivo</span></span>
        </div>
      </div>

      <section id="enterprise" className="entG_section anchor-link">
        <div className="entG_container">
          <motion.div 
            className="entG_main"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="entG_left">
              <motion.h2 
                className="entG_headline"
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                Sistemi reali.<br />
                Scala reale.
              </motion.h2>
              <motion.p 
                className="entG_body"
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                Ho contribuito a prodotti digitali per clienti enterprise internazionali nei settori Smart Home/IoT, Healthcare IT, Cloud Networking, Food-Tech ed Energia — da startup a multinazionali con milioni di utenti.
              </motion.p>
            </div>

            <div className="entG_stats">
              {[
                { num: '5', lab: 'SETTORI INDUSTRY' },
                { num: '130+', lab: 'PAESI RAGGIUNTI' },
                { num: '2022–24', lab: 'CORE ENTERPRISE' },
                { num: 'M+', lab: 'UTENTI ATTIVI' }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.lab}
                  className="entG_stat"
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <span className="entG_number">{stat.num}</span>
                  <span className="entG_label">{stat.lab}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.footer 
            className="entG_footer"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="entG_sectors">
              Smart Home / IoT · Healthcare IT · Cloud Networking · Food-Tech · Energia & Infrastrutture
            </div>
            <div className="entG_firma">
              // VERIFIED_BY: SYSTEM_ARCHITECT · SISTEMI DISTRIBUITI · PERIOD: 2022–2024
            </div>
          </motion.footer>
        </div>
      </section>

      <section id="chi-sono" className="chiB_section">
        <div className="chiB_container">
          <div className="chiB_visual">
            <div className="chiB_photoBox">
              <img src="/profile-photo.png" alt="Michele Tornello" className="chiB_img" />
              <div className="chiB_texture"></div>
            </div>

            <div className="chiB_stats">
              <div className="chiB_stat">
                <span className="chiB_val">2022</span>
                <span className="chiB_lab">Inizio Docenza SJA</span>
              </div>
              <div className="chiB_stat">
                <span className="chiB_val">100+</span>
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
                Tornello, Michele — System Architect e Developer Full-Stack con oltre 3 anni di esperienza su sistemi enterprise in produzione. 
                Assunto a tempo indeterminato da Paradigma SPA nel 2022.
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
                  background: '#B87333',
                  color: '#080808',
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '0.85rem 1.8rem',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  transition: 'opacity 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Parliamo del tuo progetto →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROOF OF WORK ========== */}
      <section className="pwH_section" id="proof">
        <div className="pwH_container">
          
          {/* Header */}
          <header className="pwH_header">
            <span className="pwH_overline">// TECHNICAL_VALIDATION · 2022—2025</span>
            <h2 className="pwH_title">Sistemi in produzione.<br/><em>Impatto misurabile.</em></h2>
          </header>

          {/* Hero Number — 99.9% full width */}
          <div className="pwH_hero_stat">
            <div className="pwH_hero_inner">
              <span className="pwH_hero_num">99.9<span className="pwH_hero_pct">%</span></span>
              <div className="pwH_hero_meta">
                <span className="pwH_hero_label">UPTIME OPERATIVO</span>
                <span className="pwH_hero_sub">Sistemi live in produzione — REC Security · Cashbee</span>
                <div className="pwH_status_bus">
                  <span className="pwH_pulse"></span>
                  <code className="pwH_status_code">SYSTEM_STATUS: OPERATIONAL</code>
                </div>
              </div>
            </div>
            <div className="pwH_uptime_bar"><div className="pwH_uptime_fill"></div></div>
          </div>

          {/* Grid modulare */}
          <div className="pwH_grid">
            
            {/* ENTERPRISE IMPACT - v2 Audit Log */}
            <div className="pvG2_container pwH_span2">
              <div className="pvG2_header">
                <div className="pvG2_dot" />
                <h3 className="pvG2_title">SYSTEM_ARCH_IMPACT // ENTERPRISE_LOG</h3>
                <span className="pvG2_version">v2.0</span>
              </div>
              <div className="pvG2_table_wrapper">
                <table className="pvG2_table">
                  <thead>
                    <tr>
                      <th>SECTOR_DOMAIN</th>
                      <th>SCALE_DATA</th>
                      <th className="pvG2_hide_mobile">SYSTEM_METRIC</th>
                      <th className="pvG2_hide_mobile">STACK_ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { sector: "CLOUD NETWORKING", scale: "130+ COUNTRIES", metric: "GLOBAL_REACH", tech: "React Native / Edge" },
                      { sector: "SMART HOME / IOT", scale: "1.15B€ GROUP", metric: "CORP_VALUATION", tech: "React Native / BLE" },
                      { sector: "HEALTHCARE IT", scale: "EUROPEAN SCALE", metric: "PHARMA_LOGISTICS", tech: "Enterprise React" },
                      { sector: "FOOD-TECH", scale: "160+ STORES", metric: "RETAIL_FOOTPRINT", tech: "React Native / Kiosk" },
                      { sector: "ENERGY & INFRA", scale: "32.700 KM NET", metric: "INFRA_MONITORING", tech: "AEM / Core Web" },
                    ].map((row, i) => (
                      <tr key={i} className="pvG2_row">
                        <td className="pvG2_sector">{row.sector}</td>
                        <td className="pvG2_scale">{row.scale}</td>
                        <td className="pvG2_metric pvG2_hide_mobile">{row.metric}</td>
                        <td className="pvG2_tech pvG2_hide_mobile">{row.tech}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pvG2_footer">
                <p>[AUTH_LEVEL: SENIOR_FRONTEND_DEV] — Zero client disclosure policy in effect · Role: Senior Frontend Developer · React Native Enterprise Architectures</p>
              </div>
            </div>

            {/* Module 2: Live Products */}
            <div className="pwH_module">
              <div className="pwH_mod_label">LIVE SYSTEMS</div>
              <div className="pwH_live_list">
                <div className="pwH_live_item">
                  <div className="pwH_live_dot"></div>
                  <div>
                    <div className="pwH_live_name">REC Security</div>
                    <div className="pwH_live_stack">PHP · React · IoT</div>
                  </div>
                </div>
                <div className="pwH_live_item">
                  <div className="pwH_live_dot"></div>
                  <div>
                    <div className="pwH_live_name">Cashbee</div>
                    <div className="pwH_live_stack">Next.js · Node.js</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3: Education — narrativo da Beta */}
            <div className="pwH_module pwH_span3">
              <div className="pwH_mod_label">KNOWLEDGE TRANSFER</div>
              <div className="pwH_edu_content">
                <div className="pwH_edu_num">400<span className="pwH_edu_plus">+</span></div>
                <div className="pwH_edu_text">
                  <p className="pwH_edu_copy">Scalare la conoscenza per scalare i sistemi. Come docente presso <strong>SJA Catania</strong>, ho guidato oltre 400 developer verso standard enterprise su React, Cloud e Architetture OS.</p>
                  <div className="pwH_edu_tags">
                    <span>React</span><span>Angular</span><span>PHP</span><span>Cloud Computing</span><span>OS</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer metrics — da Gamma */}
          <div className="pwH_footer_metrics">
            <div className="pwH_footer_item">
              <span className="pwH_footer_mono">PRESS</span>
              <span className="pwH_footer_val">RTL 102.5 — Intervista Nazionale</span>
            </div>
            <div className="pwH_footer_item">
              <span className="pwH_footer_mono">STAGE</span>
              <span className="pwH_footer_val">UniCT Speaker · TEDx Catania Staff</span>
            </div>
            <div className="pwH_footer_item">
              <span className="pwH_footer_mono">COMMUNITY</span>
              <span className="pwH_footer_val">GDG Catania · Friends of Figma</span>
            </div>
            <div className="pwH_footer_item">
              <span className="pwH_footer_mono">BASE</span>
              <span className="pwH_footer_val">Sicily-based · Global Reach</span>
            </div>
          </div>

        </div>
      </section>

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

      <PortfolioSection />

      <section id="academy" className="docH_section">
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div className="docH_container">
            <div className="docH_grid">
              <div className="docH_visual">
                <div className="docH_imageWrapper">
                  <img src="/academy-class.jpg" alt="Michele Tornello in aula" className="docH_img" />
                  <div className="docH_imageOverlay"></div>
                </div>
                <div className="docH_imgMeta">
                  <span className="docH_mono">EST. 2022</span>
                  <span className="docH_mono">SJA · CATANIA</span>
                </div>
              </div>

              <div className="docH_content">
                <header className="docH_header">
                  <span className="docH_label docH_mono">// LA MISSIONE</span>
                  <h2 className="docH_title">
                    L&apos;eredità non è il codice.<br />
                    È la <em>forma mentis</em>.
                  </h2>
                </header>

                <div className="docH_body">
                  <p className="docH_text">
                    La docenza non è trasferimento di sintassi, ma architettura del pensiero. Nelle aule della Steve Jobs Academy, guido la prossima generazione di sviluppatori verso una comprensione sistemica della tecnologia.
                  </p>

                  <blockquote className="docH_quote">
                    &quot;Non insegno a programmare. Insegno a pensare da ingegnere.&quot;
                  </blockquote>

                  <div className="docH_stats">
                    <StatBox value="100+" label="Studenti Formati" />
                    <StatBox value={2022} label="Inizio Docenza" />
                    <StatBox value="SJA" label="Steve Jobs Academy" isNumber={false} />
                    <StatBox value={7} label="Materie Insegnate" />
                  </div>

                  <a href="/academy" className="docH_cta">Scopri il programma →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contatto" className="cta sectionWrap">
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <h2>Hai un sistema che deve durare?</h2>
          <p className="ctaSub">Raccontami il progetto — rispondo entro 24h.</p>
          <ContactForm />
        </div>
      </section>

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
