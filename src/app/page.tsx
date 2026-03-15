const palette = {
  ivory: '#F9F6F0',
  ink: '#1A1A2E',
  gold: '#B8972A',
};

const caseStudies = [
  {
    title: 'Architettura per Ecosistema Enterprise',
    byline: '2024 · System Design',
    body: 'Ridisegno di una piattaforma multi-team con dominio modulare, standard condivisi e governance tecnica orientata alla continuità operativa.',
    metric: 'Metrica chiave: uptime stabile al 99.96%.',
  },
  {
    title: 'Modernizzazione Full-Stack in Produzione',
    byline: '2023 · Product Engineering',
    body: 'Implementazione end-to-end di un nuovo stack web con focus su performance reali, qualità del codice e rilascio incrementale sicuro.',
    metric: 'Metrica chiave: -42% nei tempi medi di rilascio.',
  },
  {
    title: 'Data Layer e Controllo KPI in Tempo Reale',
    byline: '2023 · Analytics Platform',
    body: 'Costruzione di dashboard direzionali e sistemi di alerting per allineare tecnologia e business su indicatori condivisi.',
    metric: 'Metrica chiave: -35% nel decision time operativo.',
  },
  {
    title: 'Academy Engineering Program',
    byline: '2022–2024 · Education',
    body: 'Percorso formativo strutturato su metodo, disciplina tecnica e mentalità sistemica per profili in ingresso nel mondo software.',
    metric: 'Metrica chiave: oltre 400 studenti accompagnati.',
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        background: palette.ivory,
        color: palette.ink,
        fontFamily: 'Georgia, serif',
      }}
    >
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          background: palette.ivory,
          borderBottom: `3px double ${palette.ink}`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '14px 24px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'end',
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-playfair-display), Georgia, serif',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              lineHeight: 1,
            }}
          >
            Michele Tornello
          </div>
          <div
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            15 Marzo 2024
          </div>
          <div
            style={{
              textAlign: 'right',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Catania · IT
          </div>
        </div>
      </header>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 40px' }}>
        <h1
          style={{
            margin: '0 0 12px',
            fontFamily: 'var(--font-playfair-display), Georgia, serif',
            fontSize: 'clamp(2.1rem, 4vw, 4rem)',
            lineHeight: 1.08,
          }}
        >
          L&apos;Architetto che Forma chi Costruirà il Futuro
        </h1>
        <p
          style={{
            margin: '0 0 30px',
            color: palette.gold,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 12,
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
          }}
        >
          System Architect · Paradigma SPA · Steve Jobs Academy
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '250px 1fr',
            gap: 28,
            alignItems: 'start',
          }}
        >
          <img
            src="/profile-photo.png"
            alt="Ritratto di Michele Tornello"
            style={{
              width: 250,
              maxWidth: '100%',
              border: `1px solid ${palette.ink}`,
              filter: 'grayscale(1) contrast(1.05)',
            }}
          />
          <div style={{ columnCount: 1, fontSize: '1rem', lineHeight: 1.8 }}>
            <p style={{ marginTop: 0 }}>
              Michele Tornello è un System Architect che opera tra progettazione software, sviluppo full-stack e
              formazione tecnica. Nel suo lavoro, l&apos;architettura non è un esercizio teorico ma un processo concreto:
              trasformare complessità operative in sistemi leggibili, scalabili e sostenibili nel tempo.
            </p>
            <p>
              In Paradigma SPA guida iniziative che coinvolgono più team, definendo standard di qualità e strategie di
              delivery capaci di tenere insieme visione e execution. Ogni decisione viene misurata sull&apos;impatto reale:
              stabilità di piattaforma, velocità di rilascio, capacità di evolvere senza perdere affidabilità.
            </p>
            <p style={{ marginBottom: 0 }}>
              In parallelo, porta avanti una missione formativa alla Steve Jobs Academy: costruire professionisti che
              sappiano ragionare da ingegneri del sistema. Non solo codice, ma metodo, responsabilità tecnica e cultura
              del miglioramento continuo.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px 50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 26,
        }}
      >
        {[
          {
            title: 'Sistema Scalabile',
            body: 'Progetta architetture modulari e resilienti, pensate per sostenere crescita, evoluzione funzionale e affidabilità continua.',
          },
          {
            title: 'Full-Stack in Produzione',
            body: 'Sviluppa applicazioni end-to-end con attenzione a performance, maintainability e qualità del rilascio in ambienti reali.',
          },
          {
            title: '400 Studenti Formati',
            body: 'Trasferisce competenze tecniche e mentalità ingegneristica formando profili capaci di lavorare per sistemi e obiettivi.',
          },
        ].map((item, index) => (
          <article
            key={item.title}
            style={{
              paddingLeft: index === 0 ? 0 : 20,
              borderLeft: index === 0 ? 'none' : `1px solid rgba(26,26,46,0.25)`,
            }}
          >
            <h2
              style={{
                margin: '0 0 10px',
                fontFamily: 'var(--font-playfair-display), Georgia, serif',
                fontSize: '1.8rem',
              }}
            >
              {item.title}
            </h2>
            <p style={{ margin: 0, lineHeight: 1.75 }}>{item.body}</p>
          </article>
        ))}
      </section>

      <section style={{ background: palette.ink, padding: '44px 24px' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 18,
          }}
        >
          {[
            ['3+', 'Anni in architettura enterprise'],
            ['400+', 'Studenti formati'],
            ['4', 'Aree core: design, dev, delivery, teaching'],
            ['<50ms', 'Target su interazioni critiche UI'],
          ].map(([value, label]) => (
            <div key={value} style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: palette.gold,
                  fontFamily: 'var(--font-playfair-display), Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.1,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  color: '#F3F3F3',
                  marginTop: 8,
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
        <h2
          style={{
            margin: '0 0 22px',
            fontFamily: 'var(--font-playfair-display), Georgia, serif',
            fontSize: '2.2rem',
          }}
        >
          Portfolio — Case Study
        </h2>
        <div style={{ display: 'grid', gap: 18 }}>
          {caseStudies.map((item) => (
            <article key={item.title} style={{ paddingBottom: 16, borderBottom: `1px solid rgba(26,26,46,0.18)` }}>
              <h3
                style={{
                  margin: '0 0 4px',
                  fontFamily: 'var(--font-playfair-display), Georgia, serif',
                  fontSize: '1.6rem',
                }}
              >
                {item.title}
              </h3>
              <div
                style={{
                  marginBottom: 10,
                  color: palette.gold,
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  textTransform: 'uppercase',
                  fontSize: 12,
                  letterSpacing: '0.08em',
                }}
              >
                {item.byline}
              </div>
              <p style={{ margin: '0 0 6px' }}>{item.body}</p>
              <p style={{ margin: 0, fontWeight: 700 }}>{item.metric}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '10px 24px 48px' }}>
        <article style={{ border: `1px solid ${palette.ink}`, padding: 16 }}>
          <img
            src="/academy-class.jpg"
            alt="Aula Steve Jobs Academy"
            style={{
              width: '100%',
              maxHeight: 500,
              objectFit: 'cover',
              display: 'block',
              filter: 'grayscale(0.3)',
            }}
          />
          <div
            style={{
              marginTop: 10,
              color: palette.gold,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              textTransform: 'uppercase',
              fontSize: 11,
              letterSpacing: '0.09em',
            }}
          >
            Reportage · Steve Jobs Academy, Catania · Aula tecnica 2024
          </div>

          <div style={{ marginTop: 18, columnCount: 2, columnGap: 28, lineHeight: 1.8 }}>
            <p style={{ marginTop: 0 }}>
              Tra il 2020 e il 2024 il percorso di Michele Tornello nella Steve Jobs Academy si trasforma da esperienza
              personale a responsabilità collettiva. Da studente a docente, il passaggio è guidato da una sola idea:
              rendere trasferibile il metodo con cui si affronta la complessità software.
            </p>
            <p>
              Le attività in aula si concentrano su casi reali, decomposizione dei problemi, progettazione modulare e
              qualità del pensiero tecnico prima ancora della riga di codice. L&apos;obiettivo non è produrre esecutori,
              ma professionisti capaci di leggere i sistemi e prendere decisioni solide nel tempo.
            </p>
          </div>

          <blockquote
            style={{
              margin: '16px 0 0',
              fontFamily: 'var(--font-playfair-display), Georgia, serif',
              fontSize: 'clamp(1.4rem, 2.6vw, 2rem)',
              fontStyle: 'italic',
              color: palette.ink,
            }}
          >
            “Non insegno a programmare. Insegno a pensare da ingegnere.”
          </blockquote>
        </article>
      </section>

      <section style={{ background: palette.ink, padding: '42px 24px', color: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'var(--font-playfair-display), Georgia, serif',
              fontSize: '2rem',
              color: palette.gold,
              marginBottom: 10,
            }}
          >
            Citato da:
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: palette.gold }}>RTL 102.5</span> · Università di Catania ·{' '}
            <span style={{ color: palette.gold }}>TEDx Catania</span>
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 72px', textAlign: 'center' }}>
        <h2
          style={{
            margin: '0 0 12px',
            fontFamily: 'var(--font-playfair-display), Georgia, serif',
            fontStyle: 'italic',
            fontSize: '2rem',
          }}
        >
          Contatta la redazione.
        </h2>
        <div style={{ color: palette.gold, marginBottom: 6 }}>michele.tornello@gmail.com</div>
        <div style={{ marginBottom: 10 }}>LinkedIn · instagram.com/micheletornello</div>
        <div
          style={{
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 11,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
          }}
        >
          Risponde di persona.
        </div>
      </section>
    </main>
  );
}
