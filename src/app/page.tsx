'use client';

import { useState } from 'react';

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
      code: '[MT-OP-001]',
      name: 'REC Security',
      mission: 'Replatforming di un backend legacy mission-critical con rollout progressivo zero-downtime.',
      notes: 'Node.js · PostgreSQL · Redis · CI/CD con canary release',
      log: '// 99.98% uptime · node + postgres + redis',
      year: '2022',
      stack: 'Node/PostgreSQL',
      metric: '99.9% uptime'
    },
    {
      code: '[MT-OP-002]',
      name: 'Kastalia',
      mission: 'Sistema didattico per formazione tecnica avanzata con tracking di progressione e feedback.',
      notes: 'Next.js · TypeScript · Event-driven analytics',
      log: '// 430+ developer formati · next + ts + analytics',
      year: '2023',
      stack: 'Next.js/TS',
      metric: '50k+ users'
    },
    {
      code: '[MT-OP-003]',
      name: 'Cashbee',
      mission: 'Piattaforma cashback per negozi fisici: fidelizzazione clienti con premi su ogni acquisto.',
      notes: 'Next.js · Node · sistema di reward · app mobile',
      log: '// cashback engine · loyalty system + merchant dashboard',
      year: '2024',
      stack: 'Next.js/Node',
      metric: 'Cashback'
    },
    {
      code: '[MT-OP-004]',
      name: 'Pong',
      mission: 'Progettazione e rilascio di una piattaforma ad alta affidabilità con esperienza utente real-time.',
      notes: 'Realtime architecture · WebSockets · observability stack',
      log: '// realtime uptime · ws + monitoring + incident response',
      year: '2024',
      stack: 'WS/Monitoring',
      metric: 'Realtime'
    },
    {
      code: '[MT-OP-005]',
      name: 'Watching Stars',
      mission: 'Piattaforma B2C+B2B per memoriali digitali con e-commerce NFC e integrazione AI.',
      notes: 'Next.js · Stripe · NFC · AI integration · bilingue IT/EN',
      log: '// memoriali attivi · nfc + ai + ecommerce + comuni',
      year: '2024',
      stack: 'Next/Stripe/NFC',
      metric: '100+'
    },
    {
      code: '[MT-OP-006]',
      name: 'Memory Cloud',
      mission: 'Sistema istituzionale di commemorazione digitale per PA e comuni italiani.',
      notes: 'Next.js · Node · portali comunali · architettura multi-tenant',
      log: '// deploy pubblico · multi-tenant + integrazione PA',
      year: '2024',
      stack: 'Next/Node/PA',
      metric: '3+'
    },
  ];

  return (
    <main>
      <section className="hero" style={{ backgroundImage: "url('/desk-setup.png')" }}>
        <div className="overlay" />
        <div className="heroContent">
          <span className="badge">● Disponibile per nuovi progetti · {new Date().getFullYear()}</span>
          <p className="thesis">Tra i pochi professionisti italiani under-30 con esperienza enterprise e docenza strutturata.</p>
          <h1>Non costruisco software. Costruisco sistemi.</h1>
          <p className="sub">Formo chi li costruirà.</p>
        </div>
      </section>

      <section className="credibility"><p>HA PARLATO A: RTL 102.5 · Università di Catania · TEDx Catania</p></section>

      <section className="status sectionWrap">
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
          {operations.slice(0,3).map(op => (
             <div key={op.name} className="sysItem">
                <div>&gt; {op.name} <span>[LIVE]</span></div>
                <div style={{color:'#888'}}>{op.stack} · {op.metric}</div>
             </div>
          ))}
        </div>
      </section>

      <section id="chi-sono" className="about sectionWrap">
        <div className="aboutMedia"><img src="/profile-photo.png" alt="Michele Tornello" /></div>
        <div className="aboutText">
          <h2>CHI SONO</h2>
          <p className="execLabel">CHI È</p>
          <p className="execText">Tornello, Michele — System Architect e Developer Full-Stack con oltre 3 anni di esperienza su sistemi enterprise in produzione. Assunto a tempo indeterminato da Paradigma SPA nel 2022. Dal 2024 docente Steve Jobs Academy con oltre 400 professionisti formati. Speaker nazionale: RTL 102.5, Università di Catania, TEDx Catania.</p>
          
          <div className="svcGrid">
            <div className="svcCol">
              <p className="svcCode">[SVC-01]</p>
              <p className="svcTitle">WEB & MOBILE</p>
              <p className="svcBody">React, Next.js, Vue, Nuxt, Angular, React Native.</p>
            </div>
            <div className="svcCol">
              <p className="svcCode">[SVC-02]</p>
              <p className="svcTitle">BACKEND</p>
              <p className="svcBody">Node.js, PHP, Java, API design, microservizi.</p>
            </div>
            <div className="svcCol">
              <p className="svcCode">[SVC-03]</p>
              <p className="svcTitle">ARCHITECTURE</p>
              <p className="svcBody">Cloud architecture, database design, scalability.</p>
            </div>
          </div>
          
          <p className="poeticLine">Ha costruito il primo sistema in produzione a 22 anni.</p>
          <p className="poeticLine">A 24, ne insegna l&apos;architettura.</p>
          <p className="poeticLine">Non scrive codice. Progetta sistemi.</p>
        </div>
      </section>

      <section className="timeline sectionWrap">
        <h2>TIMELINE</h2>
        <div className="timelineLine">
          {timeline.map((item) => (
            <article key={item.year} className="timeCard">
              <p className="year">{item.year}</p><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="lavori" className="portfolio sectionWrap">
        <h2>DEPLOYMENT LOG</h2>
        <div className="opsGrid">
          {operations.map((op) => (
            <article key={op.name} className="opCard">
              <p className="opRef">{op.code}</p>
              <p className="opLabel">OPERAZIONE:</p>
              <p className="opName">{op.name}</p>
              <p>{op.mission}</p><p className="notes">{op.notes}</p><p className="log">{op.log}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="academy" className="docH_section">
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
                  <div className="docH_stat">
                    <span className="docH_statVal">100+</span>
                    <span className="docH_statLab">Studenti Formati</span>
                  </div>
                  <div className="docH_stat">
                    <span className="docH_statVal">2022</span>
                    <span className="docH_statLab">Inizio Docenza</span>
                  </div>
                  <div className="docH_stat">
                    <span className="docH_statVal">SJA</span>
                    <span className="docH_statLab">Steve Jobs Academy</span>
                  </div>
                  <div className="docH_stat">
                    <span className="docH_statVal">7</span>
                    <span className="docH_statLab">Materie Insegnate</span>
                  </div>
                </div>

                <a href="/academy" className="docH_cta">Scopri il programa →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contatto" className="cta sectionWrap">
        <h2>Hai un sistema che deve durare?</h2>
        <p className="ctaSub">Raccontami il progetto — rispondo entro 24h.</p>
        <ContactForm />
      </section>

      <section className="newsletter sectionWrap">
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
      </section>
    </main>
  );
}
