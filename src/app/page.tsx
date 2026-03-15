const palette = {
  white: '#FFFFFF',
  blue: '#1E3A5F',
  mustard: '#D4A017',
  lightGray: '#F7F7F7',
  darkBlue: '#132B46',
};

const projects = [
  {
    name: 'Nexa Core Platform',
    year: '2025',
    description:
      'Architettura di una piattaforma modulare per orchestrare servizi business-critical in ambienti enterprise.',
    metric: '99.98% uptime annuale',
  },
  {
    name: 'Atlas Commerce Suite',
    year: '2024',
    description:
      'Rebuild full-stack di un ecosistema e-commerce con focus su performance, governance del codice e delivery continuo.',
    metric: '-37% tempo di rilascio',
  },
  {
    name: 'SignalOps Dashboard',
    year: '2024',
    description:
      'Sistema osservabilità e KPI real-time per decisioni tecniche rapide e allineamento tra team prodotto e sviluppo.',
    metric: '4 team allineati su KPI unici',
  },
  {
    name: 'Academy Engineering Track',
    year: '2024',
    description:
      'Percorso didattico pratico per formare sviluppatori con metodo ingegneristico, non solo competenze operative.',
    metric: '400+ studenti formati',
  },
];

export default function HomePage() {
  return (
    <main style={{ background: palette.white, color: palette.blue, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <section className="mentor-section" style={{ maxWidth: 1240, margin: '0 auto', padding: '86px 32px 92px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.5fr) minmax(320px, 1fr)',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontFamily: 'var(--font-merriweather), Georgia, serif',
                fontSize: 'clamp(2.4rem, 3.5vw, 4rem)',
                lineHeight: 1.05,
                color: palette.blue,
              }}
            >
              Michele Tornello
            </h1>
            <div
              style={{
                display: 'inline-block',
                marginTop: 16,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: palette.mustard,
              }}
            >
              System Architect · Docente · Speaker
            </div>
            <p style={{ marginTop: 24, maxWidth: 620, fontSize: '1rem', lineHeight: 1.85, color: '#294D73' }}>
              Sono un system architect e docente: costruisco sistemi software in produzione e formo professionisti capaci
              di ragionare con disciplina tecnica. Unisco rigore accademico, esperienza reale e visione imprenditoriale.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
              <a
                href="#contatto"
                style={{
                  background: palette.blue,
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '12px 22px',
                  borderRadius: 2,
                  fontWeight: 700,
                }}
              >
                Lavoriamo insieme
              </a>
              <a
                href="#docenza"
                style={{
                  border: `1.5px solid ${palette.blue}`,
                  color: palette.blue,
                  textDecoration: 'none',
                  padding: '12px 22px',
                  borderRadius: 2,
                  fontWeight: 700,
                  background: 'transparent',
                }}
              >
                Scopri la mia Academy
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', padding: 12 }}>
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '52%',
                height: '44%',
                background: `linear-gradient(145deg, ${palette.mustard}, #e2c05f)`,
                borderRadius: 6,
              }}
            />
            <img
              src="/profile-photo.png"
              alt="Michele Tornello"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: 450,
                display: 'block',
                borderRadius: 6,
                objectFit: 'cover',
                boxShadow: '0 18px 36px rgba(30,58,95,0.12)',
              }}
            />
          </div>
        </div>
      </section>

      <section className="mentor-section" style={{ background: palette.lightGray, borderTop: '1px solid #ECECEC', borderBottom: '1px solid #ECECEC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 24px', textAlign: 'center', fontWeight: 700, color: palette.mustard }}>
          <span style={{ marginRight: 12, color: palette.blue }}>Ha parlato a:</span>
          <span style={{ margin: '0 14px' }}>RTL 102.5</span>
          <span style={{ margin: '0 14px' }}>Università di Catania</span>
          <span style={{ margin: '0 14px' }}>TEDx Catania</span>
        </div>
      </section>

      <section className="mentor-section" style={{ maxWidth: 1200, margin: '0 auto', padding: '84px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.8fr', gap: 34, alignItems: 'start' }}>
          <div>
            <h2 style={{ marginTop: 0, marginBottom: 18, fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '2rem' }}>Chi sono</h2>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.08rem', lineHeight: 1.95, color: '#213B57' }}>
              <p>
                Sono cresciuto tra codice, responsabilità e desiderio di costruire qualcosa che restasse in piedi nel
                tempo. Ho iniziato presto a lavorare su sistemi reali, dove ogni scelta tecnica ha un costo e ogni
                scorciatoia prima o poi presenta il conto.
              </p>
              <p>
                Oggi progetto architetture, accompagno team nello sviluppo full-stack e insegno a studenti che vogliono
                smettere di “scrivere codice” e iniziare a pensare da ingegneri. In aula e in produzione porto lo stesso
                approccio: chiarezza, metodo, e rispetto per la complessità.
              </p>
              <p>
                Se lavori con me, non trovi solo esecuzione. Trovi direzione tecnica, standard elevati e un confronto
                umano autentico. Perché la tecnologia migliore nasce sempre da persone che sanno farsi le domande giuste.
              </p>
            </div>
          </div>
          <aside style={{ background: palette.darkBlue, color: '#fff', padding: '28px 26px', borderRadius: 8, boxShadow: '0 14px 30px rgba(19,43,70,0.25)' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 16, fontSize: '1.05rem', lineHeight: 1.6 }}>
              <li>3+ anni in produzione</li>
              <li>400+ studenti</li>
              <li>4 sistemi live</li>
              <li>Assunto a tempo indeterminato a 22 anni</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="docenza" className="mentor-section" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 88px' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '2.2rem', color: palette.blue }}>Docenza</h2>
        <p style={{ marginTop: 10, marginBottom: 28, color: palette.mustard, fontWeight: 700 }}>
          Steve Jobs Academy Catania · Dal 2024
        </p>
        <img
          src="/academy-class.jpg"
          alt="Lezione in aula alla Steve Jobs Academy"
          style={{ width: '100%', maxHeight: 500, objectFit: 'cover', borderRadius: 8, display: 'block' }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 36, marginTop: 28, alignItems: 'start' }}>
          <div style={{ color: '#274B70', lineHeight: 1.9 }}>
            <p>
              Nel 2020 ero uno studente che cercava metodo. Nel 2024 sono diventato docente nello stesso ecosistema che
              mi ha formato. Questo passaggio non è un titolo: è una responsabilità.
            </p>
            <p>
              Porto in aula casi reali, ragionamento architetturale e disciplina professionale. Voglio che ogni studente
              esca con una mentalità ingegneristica, capace di leggere problemi complessi e trasformarli in sistemi
              chiari, scalabili, utili.
            </p>
          </div>
          <blockquote
            style={{
              margin: 0,
              padding: 0,
              fontFamily: 'var(--font-merriweather), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)',
              lineHeight: 1.5,
              color: palette.blue,
            }}
          >
            “Non insegno a programmare. Insegno a pensare da ingegnere.”
          </blockquote>
        </div>
      </section>

      <section className="mentor-section" style={{ background: palette.lightGray, padding: '82px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ marginTop: 0, marginBottom: 26, fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '2.1rem', color: palette.blue }}>
            Progetti
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 22 }}>
            {projects.map((project) => (
              <article
                key={project.name}
                style={{ background: '#fff', padding: '22px 20px', borderRadius: 8, boxShadow: '0 10px 20px rgba(30,58,95,0.08)' }}
              >
                <h3 style={{ margin: '0 0 6px', fontSize: '1.1rem' }}>{project.name}</h3>
                <p style={{ margin: '0 0 10px', color: '#5A6D82', fontWeight: 600 }}>{project.year}</p>
                <p style={{ margin: '0 0 14px', color: '#2F4B68', lineHeight: 1.65 }}>{project.description}</p>
                <p style={{ margin: 0, color: palette.mustard, fontWeight: 800 }}>{project.metric}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mentor-section" style={{ maxWidth: 1200, margin: '0 auto', padding: '84px 32px' }}>
        <h2 style={{ marginTop: 0, marginBottom: 30, fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '2.1rem' }}>
          Aree di Expertise
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }}>
          {[
            {
              icon: '🏗️',
              title: 'Architettura Sistemi',
              points: ['System design enterprise', 'Scalabilità e resilienza', 'Domain modeling', 'Governance tecnica'],
            },
            {
              icon: '💻',
              title: 'Full-Stack Dev',
              points: ['Frontend moderno', 'Backend robusto', 'API design', 'CI/CD e qualità del rilascio'],
            },
            {
              icon: '🎓',
              title: 'Formazione Tecnica',
              points: ['Didattica pratica', 'Metodo ingegneristico', 'Mentorship professionale', 'Preparazione al lavoro reale'],
            },
          ].map((area) => (
            <article key={area.title} style={{ padding: '10px 4px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>{area.icon}</div>
              <h3 style={{ marginTop: 0, marginBottom: 12, fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '1.35rem' }}>
                {area.title}
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: '#2B4A69', lineHeight: 1.8 }}>
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contatto" className="mentor-section" style={{ background: palette.blue, color: '#fff', textAlign: 'center', padding: '84px 24px' }}>
        <h2 style={{ marginTop: 0, marginBottom: 14, fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '2rem', color: '#fff' }}>
          Prenota una consulenza.
        </h2>
        <p style={{ margin: '0 auto 14px', maxWidth: 660, lineHeight: 1.8 }}>
          Se vuoi costruire sistemi migliori, far crescere il tuo team o accelerare il tuo percorso tecnico, parliamone.
        </p>
        <p style={{ margin: '0 0 8px', color: palette.mustard, fontWeight: 700 }}>michele.tornello@gmail.com</p>
        <p style={{ margin: '0 0 8px' }}>LinkedIn: linkedin.com/in/micheletornello</p>
        <p style={{ margin: 0, opacity: 0.9 }}>Rispondo entro 48 ore.</p>
      </section>
    </main>
  );
}
