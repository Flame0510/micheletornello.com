export default function HomePage() {
  const statusRows = [
    { label: '3+ anni produzione', state: 'VERIFIED' },
    { label: '400+ dev formati', state: 'CONFIRMED' },
    { label: '4 sistemi live', state: 'ACTIVE' },
    { label: '<50ms target', state: 'ON TARGET' },
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
    },
    {
      code: '[MT-OP-002]',
      name: 'Kastalia',
      mission: 'Sistema didattico per formazione tecnica avanzata con tracking di progressione e feedback.',
      notes: 'Next.js · TypeScript · Event-driven analytics',
      log: '// 430+ developer formati · next + ts + analytics',
    },
    {
      code: '[MT-OP-003]',
      name: 'Ludelist',
      mission: 'Ottimizzazione pipeline applicativa con target di latenza sub-50ms su endpoint critici.',
      notes: 'Edge caching · profiling continuo · SLA engineering',
      log: '// <50ms p95 target · edge + profiling + sla',
    },
    {
      code: '[MT-OP-004]',
      name: 'Pong',
      mission: 'Progettazione e rilascio di una piattaforma ad alta affidabilità con esperienza utente real-time.',
      notes: 'Realtime architecture · WebSockets · observability stack',
      log: '// realtime uptime · ws + monitoring + incident response',
    },
  ];

  const css = `
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #080808; color: #f2ede8; font-family: 'JetBrains Mono', monospace; }
    a { color: inherit; text-decoration: none; }
    main { background: #080808; color: #f2ede8; overflow-x: hidden; }
    .topbar { position: fixed; top: 0; left: 0; width: 100%; z-index: 30; padding: 0.9rem 1.2rem; border-bottom: 1px solid rgba(184,115,51,.35); backdrop-filter: blur(8px); background: rgba(8,8,8,.78); font-size: .75rem; letter-spacing: .14em; text-transform: uppercase; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .topbar p { margin: 0; }
    .topNav { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .topNav a { font-family: 'JetBrains Mono', monospace; font-size: .75rem; color: #aaa; letter-spacing: .06em; text-transform: none; }
    .hero { min-height: 100vh; background-size: cover; background-position: center; position: relative; display: flex; align-items: flex-end; padding: 7rem 1.2rem 4.5rem; }
    .overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8,8,8,.25) 0%, rgba(8,8,8,.56) 48%, rgba(8,8,8,.97) 100%); }
    .heroContent { position: relative; z-index: 2; max-width: 980px; }
    .badge { display: inline-block; border: 1px solid rgba(184,115,51,.6); padding: .4rem .7rem; color: #B87333; font-family: 'JetBrains Mono', monospace; font-size: .75rem; letter-spacing: .02em; margin-bottom: 1rem; }
    .thesis { margin: 0 0 .7rem; font-family: 'Instrument Serif', serif; font-style: italic; font-size: 1.1rem; color: #aaa; }
    h1,h2,h3,blockquote { font-family: 'Instrument Serif', serif; font-weight: 400; margin: 0; }
    h1 { font-size: clamp(2.5rem, 5vw, 5.2rem); line-height: .98; max-width: 18ch; }
    .sub { margin-top: .65rem; font-family: 'Instrument Serif', serif; font-style: italic; color: #b87333; font-size: clamp(1.2rem, 2vw, 2rem); }
    .credibility { margin: -1.4rem 1.2rem 0; position: relative; z-index: 4; border: 1px solid rgba(242,237,232,.2); background: rgba(18,18,18,.6); padding: .8rem; text-align: center; letter-spacing: .06em; text-transform: uppercase; font-size: .78rem; }
    .sectionWrap { padding: 4.2rem 1.2rem; max-width: 1180px; margin: 0 auto; }
    .sectionWrap h2 { color: #b87333; font-size: clamp(1.8rem, 3.2vw, 3rem); margin-bottom: 1.5rem; }
    .statusGrid p { margin: 0; padding: .9rem 0; border-bottom: 1px solid rgba(242,237,232,.18); display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; text-transform: uppercase; letter-spacing: .05em; font-size: .88rem; }
    .dot, .state { color: #b87333; }
    .systemsTable { margin-top: 1rem; background: #111; padding: 16px; border-radius: 0; font-family: 'JetBrains Mono', monospace; font-size: .8rem; line-height: 1.7; }
    .systemsTable p { margin: 0; color: rgba(255,255,255,.6); white-space: pre; }
    .systemsTable .prompt, .systemsTable .live { color: #00C87A; }
    .about { display: grid; grid-template-columns: minmax(250px,360px) minmax(0,1fr); gap: 2rem; align-items: center; }
    .aboutMedia img { width: 100%; height: 440px; object-fit: cover; border: 1px solid rgba(184,115,51,.45); filter: grayscale(1); }
    .aboutText p { margin: 0 0 .85rem; font-size: 1rem; line-height: 1.7; max-width: 52ch; }
    .execLabel { margin: 0 0 .45rem !important; color: #5A5A5A; font-size: .7rem !important; letter-spacing: .16em; text-transform: uppercase; }
    .execText { margin: 0 0 1.1rem !important; color: #aaa; font-size: .9rem !important; max-width: 600px !important; line-height: 1.7; }
    .svcGrid { margin: 1rem 0 1.4rem; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .9rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 24px; }
    .svcCol p { margin: 0; }
    .svcCode { color: #B87333; font-size: .7rem; font-family: 'JetBrains Mono', monospace; margin-bottom: .45rem !important; }
    .svcTitle { color: #fff; font-size: .8rem; font-family: 'JetBrains Mono', monospace; letter-spacing: .08em; text-transform: uppercase; margin-bottom: .45rem !important; }
    .svcBody { color: #aaa; font-size: .85rem; line-height: 1.6; }
    .poeticLine { font-family: 'Instrument Serif', serif; font-style: italic; margin: 0 0 1rem !important; }
    .timelineLine { border-left: 1px solid rgba(184,115,51,.45); padding-left: 1.2rem; display: grid; gap: 1rem; }
    .timeCard { position: relative; padding: .95rem 1rem; border: 1px solid rgba(242,237,232,.14); background: rgba(255,255,255,.01); }
    .timeCard::before { content: ''; position: absolute; left: -1.58rem; top: 1.15rem; width: 9px; height: 9px; border-radius: 50%; background: #b87333; box-shadow: 0 0 0 4px #080808; }
    .year { margin: 0 0 .3rem; color: #b87333; letter-spacing: .08em; font-size: .8rem; }
    .timeCard h3 { font-size: 1.3rem; margin-bottom: .5rem; }
    .timeCard p { margin: 0; line-height: 1.6; font-size: .92rem; }
    .opsGrid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 1rem; }
    .portfolio { background: #F2EDE8; color: #0D0D0D; }
    .portfolio h2 { color: #0D0D0D; }
    .opCard { border: 1px solid rgba(13,13,13,.16); border-left: 3px solid #B87333; padding: 1rem; background: rgba(255,255,255,.35); }
    .opCard p { margin: 0; line-height: 1.65; font-size: .88rem; color: #0D0D0D; }
    .opRef { color: #B87333; letter-spacing: .08em; font-size: .7rem !important; margin-bottom: .22rem !important; }
    .opLabel { color: #0D0D0D; letter-spacing: .08em; text-transform: uppercase; margin-bottom: .15rem !important; font-size: .76rem !important; }
    .opName { margin: 0 0 .5rem !important; font-size: 1rem !important; color: #0D0D0D; }
    .notes { margin-top: .7rem !important; color: #B87333; }
    .log { margin-top: .75rem !important; color: #B87333; }
    .teaching { position: relative; min-height: 540px; margin-top: 1.8rem; }
    .teaching img { width: 100%; height: 100%; min-height: 540px; object-fit: cover; filter: saturate(.8) contrast(1.02); }
    .teachingOverlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8,8,8,.88) 0%, rgba(8,8,8,.62) 55%, rgba(8,8,8,.35) 100%); display: flex; flex-direction: column; justify-content: center; gap: 1rem; padding: 2rem 1.2rem; max-width: 820px; }
    .teachingOverlay p { margin: 0; max-width: 60ch; line-height: 1.7; font-size: .95rem; }
    blockquote { color: #b87333; font-size: clamp(1.45rem,2.3vw,2.4rem); font-style: italic; max-width: 24ch; }
    .academyClaim { margin: .4rem 0 0; font-family: 'JetBrains Mono', monospace; color: #B87333; font-size: .85rem; }
    .cta { text-align: center; padding-top: 5rem; padding-bottom: 5.4rem; }
    .cta h2 { font-size: clamp(2rem,3vw,3.2rem); margin-bottom: .9rem; }
    .cta a { color: #f2ede8; border-bottom: 1px solid rgba(184,115,51,.55); }
    .cta p { margin: 1rem 0 0; text-transform: uppercase; letter-spacing: .08em; font-size: .78rem; }
    @media (max-width: 980px) {
      .topbar { align-items: flex-start; flex-direction: column; }
      .topNav { gap: .7rem; }
      .opsGrid { grid-template-columns: 1fr; }
      .about { grid-template-columns: 1fr; }
      .svcGrid { grid-template-columns: 1fr; }
      .aboutMedia img { height: 360px; }
      .credibility { margin-top: -.9rem; }
    }
  `;

  return (
    <main>
      <header className="topbar">
        <p>Michele Tornello · 2024 · Catania · IT</p>
        <nav className="topNav">
          <a href="#chi-sono">[01] Chi sono</a>
          <a href="#lavori">[02] Lavori</a>
          <a href="#academy">[03] Academy</a>
          <a href="#contatto">[04] Contatto</a>
        </nav>
      </header>
      <section className="hero" style={{ backgroundImage: "url('/desk-setup.png')" }}>
        <div className="overlay" />
        <div className="heroContent">
          <span className="badge">● Disponibile per nuovi progetti · 2024</span>
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
            <p key={row.label}><span className="dot">●</span> {row.label}<span className="state">[{row.state}]</span></p>
          ))}
        </div>
        <div className="systemsTable">
          <p><span className="prompt">$</span> systems --list --status=live</p>
          <p>&gt; REC Security    <span className="live">[LIVE]</span>   PHP+React     99.9% uptime</p>
          <p>&gt; Kastalia App    <span className="live">[LIVE]</span>   Next.js+Node  50k+ users</p>
          <p>&gt; Ludelist        <span className="live">[LIVE]</span>   React+API     &lt;50ms p99</p>
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
              <p className="svcTitle">ARCHITETTURA</p>
              <p className="svcBody">Sistemi scalabili, microservizi, infrastruttura cloud.</p>
            </div>
            <div className="svcCol">
              <p className="svcCode">[SVC-02]</p>
              <p className="svcTitle">SVILUPPO</p>
              <p className="svcBody">TypeScript, PHP, React, Next.js, API.</p>
            </div>
            <div className="svcCol">
              <p className="svcCode">[SVC-03]</p>
              <p className="svcTitle">FORMAZIONE</p>
              <p className="svcBody">SJA, 400+ studenti, Systems thinking.</p>
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
      <section id="academy" className="teaching">
        <img src="/academy-class.jpg" alt="Docenza in aula" />
        <div className="teachingOverlay">
          <h2>DOCENZA</h2>
          <p>Formazione tecnica orientata alla pratica: architetture reali, revisione decisionale, responsabilità ingegneristica.</p>
          <blockquote>Non insegno a programmare. Insegno a pensare da ingegnere.</blockquote>
          <p className="academyClaim">// Non formo programmatori. Formo ingegneri che pensano ai sistemi.</p>
        </div>
      </section>
      <section id="contatto" className="cta sectionWrap">
        <h2>Hai un sistema che deve durare?</h2>
        <a href="mailto:micheletornello.dev@gmail.com">micheletornello.dev@gmail.com</a>
        <p><a href="https://www.linkedin.com/in/michele-tornello-06a6341aa/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></p>
      </section>
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </main>
  );
}
