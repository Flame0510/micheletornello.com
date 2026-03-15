export default function HomePage() {
  const ops = [
    {
      nome: 'OPERAZIONE NEXUS PLATFORM',
      anno: '2024',
      descrizione:
        'Ridisegno completo di una piattaforma enterprise con architettura modulare, pipeline CI/CD e governance tecnica trasversale ai team prodotto.',
      metrica: 'UPTIME OPERATIVO: 99.96%'
    },
    {
      nome: 'OPERAZIONE FALCON STACK',
      anno: '2023',
      descrizione:
        'Sviluppo full-stack di ecosistema web ad alte prestazioni con focus su velocità percepita, qualità del codice e scalabilità orizzontale.',
      metrica: 'RIDUZIONE TEMPI DI RILASCIO: -42%'
    },
    {
      nome: 'OPERAZIONE CONTROL ROOM',
      anno: '2023',
      descrizione:
        'Implementazione dashboard direzionali per monitoraggio KPI tecnici e business, con alerting e lettura strategica in tempo reale.',
      metrica: 'DECISION TIME: -35%'
    },
    {
      nome: 'OPERAZIONE ACADEMY GRID',
      anno: '2022',
      descrizione:
        'Progettazione percorso formativo tecnico-pratico per accelerare la crescita di profili junior verso standard professionali senior.',
      metrica: 'PROFILI FORMATI: 400+'
    }
  ];

  const competenze = [
    {
      titolo: 'Architettura Sistemi',
      testo:
        'Progettazione di sistemi affidabili, modulari e misurabili. Dalla visione tecnica alla delivery: scelte architetturali orientate a resilienza, mantenibilità e risultato.'
    },
    {
      titolo: 'Full-Stack Dev',
      testo:
        'Sviluppo end-to-end di prodotti digitali moderni: frontend, backend, integrazioni e performance engineering. Focus costante su codice pulito e impatto reale.'
    },
    {
      titolo: 'Formazione',
      testo:
        'Didattica applicata al mondo engineering: metodo, mentalità e disciplina operativa. Obiettivo: creare professionisti che ragionano per sistemi e non per feature isolate.'
    }
  ];

  const press = [
    { ente: 'RTL 102.5', data: '2024-05-12', tipo: 'Radio' },
    { ente: 'Università di Catania', data: '2024-03-21', tipo: 'Università' },
    { ente: 'TEDx Catania', data: '2023-11-09', tipo: 'Conference' }
  ];

  return (
    <main
      style={{
        margin: 0,
        backgroundColor: '#F2EFE8',
        color: '#1C2B3A',
        fontFamily: 'Georgia, serif',
        lineHeight: 1.6
      }}
    >
      <section
        style={{
          minHeight: '100vh',
          backgroundColor: '#1C2B3A',
          color: '#FFFFFF',
          border: '2px solid #8B1A1A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px'
        }}
      >
        <pre
          style={{
            margin: 0,
            whiteSpace: 'pre-wrap',
            textAlign: 'center',
            fontFamily: 'Courier New, Courier, monospace',
            fontSize: 'clamp(16px, 2.2vw, 26px)',
            lineHeight: 1.7,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}
        >{`[Dossier Classificato]

Soggetto: Tornello, Michele
Classificazione: System Architect
Sede: Catania, IT · 37°30'N 15°06'E
Anno: 2024

████████████████████████
Accesso Autorizzato
████████████████████████`}</pre>
      </section>

      <section style={{ backgroundColor: '#F2EFE8', padding: '96px 8vw' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.6fr) minmax(280px, 1fr)',
            gap: 40
          }}
        >
          <article>
            <h2
              style={{
                marginTop: 0,
                marginBottom: 24,
                fontFamily: 'Courier New, Courier, monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: 28
              }}
            >
              Profilo Operativo
            </h2>
            <p style={{ marginTop: 0, fontSize: 20 }}>
              Michele Tornello è un System Architect con base a Catania, specializzato nella progettazione e nella
              costruzione di ecosistemi digitali ad alta affidabilità. Combina visione strategica e precisione
              esecutiva per trasformare requisiti complessi in sistemi concreti, misurabili e durevoli.
            </p>
            <p style={{ fontSize: 19 }}>
              Dal 2022 opera in Paradigma SPA, dove guida iniziative trasversali su architettura, performance e
              standard di delivery. La sua metodologia integra ingegneria del software, disciplina operativa e cultura
              del miglioramento continuo: ogni progetto viene trattato come una missione con obiettivi chiari,
              indicatori verificabili e responsabilità definite.
            </p>
            <p style={{ marginBottom: 0, fontSize: 19 }}>
              Parallelamente, è attivo nella formazione di nuovi talenti: trasferisce competenze tecniche e mentalità
              progettuale, aiutando studenti e professionisti a sviluppare un approccio da ingegneri del sistema,
              orientato all&apos;impatto e non solo all&apos;implementazione.
            </p>
          </article>

          <aside>
            <img
              src="/profile-photo.png"
              alt="Michele Tornello"
              style={{
                width: 220,
                maxWidth: '100%',
                display: 'block',
                margin: '0 auto 20px auto',
                border: '1.5px solid #1C2B3A',
                filter: 'grayscale(1) contrast(1.05)'
              }}
            />
            <div
              style={{
                border: '1px solid #1C2B3A',
                padding: 20,
                backgroundColor: '#F8F5EE',
                fontFamily: 'Courier New, Courier, monospace',
                textTransform: 'uppercase',
                fontSize: 14,
                lineHeight: 1.85,
                letterSpacing: '0.04em'
              }}
            >
              <div>NOME: Michele Tornello</div>
              <div>ETÀ: 24</div>
              <div>RUOLO: System Architect</div>
              <div>AZIENDA: Paradigma SPA</div>
              <div>STATUS: Attivo dal 2022</div>
              <div>CLEARANCE: Senior</div>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ backgroundColor: '#1C2B3A', padding: '96px 8vw' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              marginTop: 0,
              marginBottom: 36,
              color: '#8B1A1A',
              fontFamily: 'Courier New, Courier, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: 30
            }}
          >
            Capacità Operative
          </h2>
          <div style={{ display: 'grid', gap: 20 }}>
            {competenze.map((item) => (
              <div
                key={item.titolo}
                style={{
                  borderLeft: '2px solid #8B1A1A',
                  padding: '10px 0 10px 16px',
                  color: '#FFFFFF'
                }}
              >
                <h3
                  style={{
                    margin: '0 0 6px 0',
                    fontFamily: 'Courier New, Courier, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontSize: 20
                  }}
                >
                  {item.titolo}
                </h3>
                <p style={{ margin: 0, fontSize: 18 }}>{item.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F2EFE8', padding: '96px 8vw' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              marginTop: 0,
              marginBottom: 36,
              color: '#1C2B3A',
              fontFamily: 'Courier New, Courier, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: 30
            }}
          >
            Operazioni Completate
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 18 }}>
            {ops.map((op) => (
              <article
                key={op.nome}
                style={{
                  border: '1px solid rgba(28, 43, 58, 0.28)',
                  padding: 18,
                  backgroundColor: '#F7F4ED'
                }}
              >
                <div
                  style={{
                    fontFamily: 'Courier New, Courier, monospace',
                    textTransform: 'uppercase',
                    color: '#1C2B3A',
                    letterSpacing: '0.05em',
                    fontSize: 15,
                    marginBottom: 5
                  }}
                >
                  {op.nome}
                </div>
                <div
                  style={{
                    color: '#8B1A1A',
                    fontFamily: 'Courier New, Courier, monospace',
                    fontSize: 14,
                    marginBottom: 10
                  }}
                >
                  {op.anno}
                </div>
                <p style={{ marginTop: 0, marginBottom: 12, fontSize: 17 }}>{op.descrizione}</p>
                <div
                  style={{
                    fontFamily: 'Courier New, Courier, monospace',
                    textTransform: 'uppercase',
                    color: '#1C2B3A',
                    fontSize: 13,
                    borderTop: '1px solid rgba(28, 43, 58, 0.2)',
                    paddingTop: 10
                  }}
                >
                  {op.metrica}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#1C2B3A', padding: '96px 0 84px 0', color: '#FFFFFF' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 8vw' }}>
          <img
            src="/academy-class.jpg"
            alt="Programma Steve Jobs Academy"
            style={{
              width: '100%',
              display: 'block',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              filter: 'grayscale(1) contrast(1.1)'
            }}
          />
          <div
            style={{
              marginTop: 24,
              fontFamily: 'Courier New, Courier, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontSize: 16
            }}
          >
            Programma: Steve Jobs Academy
          </div>
          <div
            style={{
              marginTop: 8,
              fontFamily: 'Courier New, Courier, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 14,
              color: '#E2DFD8'
            }}
          >
            2020: Studente · 2024: Istruttore · Formati: 400+
          </div>
          <blockquote
            style={{
              margin: '20px 0 0 0',
              color: '#8B1A1A',
              fontStyle: 'italic',
              fontSize: 'clamp(21px, 3vw, 31px)',
              lineHeight: 1.4
            }}
          >
            “Non insegno a programmare. Insegno a pensare da ingegnere.”
          </blockquote>
        </div>
      </section>

      <section style={{ backgroundColor: '#F2EFE8', padding: '96px 8vw' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2
            style={{
              marginTop: 0,
              marginBottom: 24,
              color: '#1C2B3A',
              fontFamily: 'Courier New, Courier, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: 30
            }}
          >
            Menzioni Pubbliche
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 17 }}>
            <thead>
              <tr style={{ fontFamily: 'Courier New, Courier, monospace', textTransform: 'uppercase', fontSize: 13 }}>
                <th style={{ textAlign: 'left', padding: '10px 8px', borderBottom: '1px solid #1C2B3A' }}>Fonte</th>
                <th style={{ textAlign: 'left', padding: '10px 8px', borderBottom: '1px solid #1C2B3A' }}>Data</th>
                <th style={{ textAlign: 'left', padding: '10px 8px', borderBottom: '1px solid #1C2B3A' }}>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {press.map((item) => (
                <tr key={item.ente}>
                  <td style={{ padding: '12px 8px', borderBottom: '1px solid rgba(28, 43, 58, 0.2)' }}>{item.ente}</td>
                  <td style={{ padding: '12px 8px', borderBottom: '1px solid rgba(28, 43, 58, 0.2)' }}>{item.data}</td>
                  <td style={{ padding: '12px 8px', borderBottom: '1px solid rgba(28, 43, 58, 0.2)' }}>{item.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ backgroundColor: '#1C2B3A', padding: '90px 8vw', color: '#FFFFFF' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <h2
            style={{
              marginTop: 0,
              marginBottom: 20,
              fontFamily: 'Courier New, Courier, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.09em',
              fontSize: 30
            }}
          >
            Canale di Comunicazione Sicuro
          </h2>
          <div
            style={{
              fontFamily: 'Courier New, Courier, monospace',
              fontSize: 16,
              lineHeight: 2,
              letterSpacing: '0.03em'
            }}
          >
            <div>Email: michele.tornello@gmail.com</div>
            <div>LinkedIn: linkedin.com/in/micheletornello</div>
            <div>Instagram: @micheletornello</div>
          </div>
          <div
            style={{
              marginTop: 20,
              color: '#D7D1C6',
              fontFamily: 'Courier New, Courier, monospace',
              textTransform: 'uppercase',
              fontSize: 13,
              letterSpacing: '0.08em'
            }}
          >
            Risposta entro 48h · Soggetti selezionati
          </div>
        </div>
      </section>
    </main>
  );
}
