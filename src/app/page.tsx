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
        <input
          className="contactInput"
          type="text"
          placeholder="Nome"
          required
          value={form.name}
          onChange={e => setForm(f => ({...f, name: e.target.value}))}
        />
        <input
          className="contactInput"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={e => setForm(f => ({...f, email: e.target.value}))}
        />
      </div>
      <textarea
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
    { label: 'System Architect', state: 'VERIFIED' },
    { label: 'Docente SJA', state: 'CONFIRMED' },
    { label: 'Intervistato RTL 102.5', state: 'ACTIVE' },
    { label: 'Founder Indipendente', state: 'ON TARGET' },
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
      name: 'Kastalia',
      stack: 'Next.js/TS',
      metric: '50k+ users'
    },
    {
      name: 'Cashbee',
      stack: 'Next.js/Node',
      metric: 'Cashback'
    }
  ];

  return (
    <main>
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
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
        </div>
      </section>

      <section className="credibility">
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <p>HA PARLATO A: RTL 102.5 · Università di Catania · TEDx Catania</p>
        </div>
      </section>

      <section className="status sectionWrap">
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <h2>STATUS CHECK</h2>
          <div className="statusGrid">
            {statusRows.map((row) => (
              <p key={row.label}>
                <span><span className="dot">●</span> {row.label}</span>
                <span className="state">[{row.state}]</span>
              </p>
            ))}
          </div>
          
          <div className="systemsTable">
            <p><span className="prompt">$</span> systems --list --status=live</p>
            <p>&gt; REC Security    <span className="live">[LIVE]</span>   PHP+React     99.9% uptime</p>
            <p>&gt; Kastalia App    <span className="live">[LIVE]</span>   Next.js+Node  50k+ users</p>
            <p>&gt; Cashbee         <span className="live">[LIVE]</span>   Next.js/Node  cashback engine</p>
          </div>

          <div className="systemsMobileList">
            <p style={{fontFamily:'monospace', color:'#5A5A5A', fontSize:'0.7rem'}}>$ systems --list --status=live</p>
            {operations.map(op => (
               <div key={op.name} className="sysItem">
                  <div>&gt; {op.name} <span>[LIVE]</span></div>
                  <div style={{color:'#888'}}>{op.stack} · {op.metric}</div>
               </div>
            ))}
          </div>
        </div>
      </section>

      <section id="chi-sono" className="about sectionWrap">
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
          <div className="aboutMedia"><img src="/profile-photo.png" alt="Michele Tornello" /></div>
          <div className="aboutText">
            <h2>CHI SONO</h2>
            <p className="execLabel">CHI È</p>
            <p className="execText">Tornello, Michele — System Architect e Developer Full-Stack con oltre 3 anni di esperienza su sistemi enterprise in produzione. Assunto a tempo indeterminato da Paradigma SPA nel 2022. Dal 2024 docente Steve Jobs Academy con oltre 400 professionisti formati. Speaker nazionale: RTL 102.5, Università di Catania, TEDx Catania.</p>
            
            <div className="svcGrid">
              {[
                { code: '[SVC-01]', title: 'WEB & MOBILE', body: 'React, Next.js, Vue, Nuxt, Angular, React Native.' },
                { code: '[SVC-02]', title: 'BACKEND', body: 'Node.js, PHP, Java, API design, microservizi.' },
                { code: '[SVC-03]', title: 'ARCHITECTURE', body: 'Cloud architecture, database design, scalability.' }
              ].map((svc, i) => (
                <motion.div 
                  key={svc.code} 
                  className="svcCol"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <p className="svcCode">{svc.code}</p>
                  <p className="svcTitle">{svc.title}</p>
                  <p className="svcBody">{svc.body}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="poeticLine">Ha costruito il primo sistema in produzione a 22 anni.</p>
            <p className="poeticLine">A 24, ne insegna l&apos;architettura.</p>
            <p className="poeticLine">Non scrive codice. Progetta sistemi.</p>
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
