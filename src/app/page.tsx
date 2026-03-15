import { CSSProperties } from 'react';
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const statusChecks = [
  { label: 'DISPONIBILE', value: '[OK]' },
  { label: 'COMPETENZE', value: '[VERIFIED: 3+ years production]' },
  { label: 'STUDENTI FORMATI', value: '[CONFIRMED: 400+]' },
  { label: 'SISTEMI LIVE', value: '[STATUS: 4 active]' },
  { label: 'LATENZA TARGET', value: '[<50ms avg]' },
];

const deploymentLog = [
  '[2022-01] REC Security Platform   | LIVE      | 99.9% uptime | PHP+React',
  '[2023-06] Kastalia App            | LIVE      | 50k+ utenti  | Next.js',
  '[2024-02] Ludelist Platform       | LIVE      | <50ms p99    | Node+React',
  '[2024-09] Pong Game (Academy)     | DELIVERED | 400+ studenti',
];

const links = [
  '→ RTL 102.5      [2024] Interview',
  '→ Università CT  [2024] React Native seminar',
  '→ TEDx Catania   [2023] Volunteer staff',
];

const styles: Record<string, CSSProperties> = {
  main: { background: '#FFFFFF', color: '#000000', minHeight: '100vh' },
  shell: { width: 'min(1100px, 100%)', margin: '0 auto', borderLeft: '1px solid #000', borderRight: '1px solid #000' },
  header: {
    borderBottom: '1px solid #000',
    padding: '1rem 1.25rem',
    fontSize: '1rem',
    lineHeight: 1.7,
    whiteSpace: 'nowrap',
    overflowX: 'auto',
  },
  section: { padding: '2rem 1.25rem', borderBottom: '1px solid #E5E7EB' },
  title: { fontSize: '0.82rem', letterSpacing: '0.08em', marginBottom: '1.1rem', color: '#6B7280' },
  statusList: { display: 'grid', gap: '0.85rem' },
  statusRow: { display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap', fontSize: '0.98rem', lineHeight: 1.8 },
  dot: { color: '#059669' },
  label: { minWidth: '15.5rem', letterSpacing: '0.04em' },
  badge: { color: '#059669', border: '1px solid #059669', padding: '0.08rem 0.45rem' },
  mono: { margin: 0, whiteSpace: 'pre-wrap', lineHeight: 2, fontSize: '0.95rem' },
  logSection: { padding: '2rem 1.25rem', borderBottom: '1px solid #E5E7EB', background: '#F9FAFB' },
  logList: { display: 'grid', gap: '0.4rem' },
  logRow: { padding: '0.6rem 0.65rem', lineHeight: 1.9, whiteSpace: 'pre-wrap', userSelect: 'text' },
  image: { width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(1)', border: '1px solid #E5E7EB' },
  teachingLine: { margin: '1rem 0 0', lineHeight: 1.9, fontSize: '0.94rem' },
  quote: { margin: '0.75rem 0 0', color: '#6B7280' },
  linksList: { display: 'grid', gap: '0.7rem' },
  linkRow: { lineHeight: 1.8 },
  contact: { background: '#000', color: '#FFF', padding: '2rem 1.25rem' },
  contactBlock: { margin: 0, lineHeight: 1.9, whiteSpace: 'pre-wrap', fontSize: '0.95rem' },
  cursor: { display: 'inline-block', animation: 'blink 1s step-end infinite' },
};

export default function Page() {
  return (
    <main className={jetbrainsMono.className} style={styles.main}>
      <style>{`@keyframes blink {0%,100%{opacity:1}50%{opacity:0}} @media (max-width:768px){.proof-shell{border-left:none!important;border-right:none!important}.proof-header{white-space:pre-wrap!important;overflow-x:visible!important}.status-label{min-width:0!important}} .log-row:hover{background:#E5E7EB}`}</style>
      <div className="proof-shell" style={styles.shell}>
        <header className="proof-header" style={styles.header}>
          $ whoami → Michele Tornello | System Architect | Catania, IT | +3yr prod
        </header>

        <section style={styles.section}>
          <div style={styles.title}>STATUS CHECK</div>
          <div style={styles.statusList}>
            {statusChecks.map((item) => (
              <div key={item.label} style={styles.statusRow}>
                <span aria-hidden="true" style={styles.dot}>
                  ●
                </span>
                <span className="status-label" style={styles.label}>
                  {item.label}
                </span>
                <span style={styles.badge}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.title}>BIO</div>
          <pre style={styles.mono}>{`NAME: Tornello, Michele
DOB:  2001-10-05 (24 anni)
ROLE: System Architect + Full-Stack Developer
ORG:  Paradigma SPA (2022 → presente, indeterminato)
EDU:  Steve Jobs Academy (2020 studente → 2024 docente)
LANG: TypeScript, PHP, Python, React, Next.js
NOTE: Speaker nazionale (RTL 102.5, UniCT, TEDx Catania)`}</pre>
        </section>

        <section style={styles.logSection}>
          <div style={styles.title}>PORTFOLIO — DEPLOYMENT LOG</div>
          <div style={styles.logList}>
            {deploymentLog.map((row) => (
              <div key={row} className="log-row" style={styles.logRow}>
                {row}
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.title}>TEACHING MODULE</div>
          <img src="/academy-class.jpg" alt="Classe in aula - Steve Jobs Academy" style={styles.image} />
          <p style={styles.teachingLine}>
            INSTRUCTOR: Tornello, Michele @ Steve Jobs Academy, Catania (2024–) | STUDENTS: 400+ | CURRICULUM:
            Systems Architecture, Full-Stack Dev, Engineering Mindset
          </p>
          <p style={styles.quote}>/* Non insegno a programmare. Insegno a pensare da ingegnere. */</p>
        </section>

        <section style={styles.section}>
          <div style={styles.title}>PRESS/EXTERNAL LINKS</div>
          <div style={styles.linksList}>
            {links.map((row) => (
              <div key={row} style={styles.linkRow}>
                {row}
              </div>
            ))}
          </div>
        </section>

        <section style={styles.contact}>
          <pre style={styles.contactBlock}>{`$ contact michele
> Email:    [email protetta]
> LinkedIn: /in/michele-tornello-06a6341aa
> Status:   accepting new projects (2024)

$ `}<span style={styles.cursor}>_</span></pre>
        </section>
      </div>
    </main>
  );
}
