import Image from "next/image";

const timeline = [
  {
    year: "2020",
    title: "Le fondamenta",
    text: "Inizio a progettare prodotti digitali partendo da un principio semplice: prima il sistema, poi l'interfaccia. Ogni scelta tecnica deve poter reggere nel tempo.",
  },
  {
    year: "2022",
    title: "La produzione reale",
    text: "Entro in produzione. Mi confronto con deadline, codice legacy, utenti reali. È qui che capisco che la qualità non è una feature: è una disciplina.",
  },
  {
    year: "2024",
    title: "La docenza",
    text: "Divento docente alla Steve Jobs Academy. Portare persone da zero a professionisti mi impone lo stesso standard che pretendo nei progetti: chiarezza, metodo, responsabilità.",
  },
];

const areas = [
  {
    roman: "I",
    title: "Architettura di Sistemi",
    text: "Disegno fondamenta software solide: domini chiari, flussi leggibili, decisioni tracciabili.",
  },
  {
    roman: "II",
    title: "Full-Stack Development",
    text: "Costruisco prodotti end-to-end dove performance, UX e manutenibilità non sono compromessi.",
  },
  {
    roman: "III",
    title: "Formazione Tecnica",
    text: "Alleno team e studenti a ragionare da ingegneri, non da esecutori di framework.",
  },
];

const projects = [
  {
    title: "Paradigma Digitale Platform",
    year: "2024",
    impact: "Ho trasformato un insieme di processi frammentati in una piattaforma operativa unica.",
    metric: "Riduzione tempi operativi: -38% in 6 mesi",
  },
  {
    title: "AI Automation Lab",
    year: "2023",
    impact: "Ho progettato pipeline di automazione che liberano i team dalle attività ripetitive.",
    metric: "Ore risparmiate: +420/anno",
  },
  {
    title: "Academy Engineering Track",
    year: "2024",
    impact: "Ho strutturato un percorso didattico orientato al pensiero sistemico, non al copia-incolla.",
    metric: "Studenti formati: 400+",
  },
];

const press = [
  { name: "RTL 102.5", year: "2024" },
  { name: "Università di Catania", year: "2024" },
  { name: "TEDx Catania", year: "2023" },
];

export default function Home() {
  return (
    <main
      style={{
        background: "#2D1810",
        color: "#FBF7F0",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
      }}
    >
      <style>{`
        .manifesto-section {
          opacity: 0;
          transform: translateY(22px);
          animation: reveal 700ms ease forwards;
        }
        .manifesto-section:nth-of-type(1) { animation-delay: 100ms; }
        .manifesto-section:nth-of-type(2) { animation-delay: 180ms; }
        .manifesto-section:nth-of-type(3) { animation-delay: 260ms; }
        .manifesto-section:nth-of-type(4) { animation-delay: 340ms; }
        .manifesto-section:nth-of-type(5) { animation-delay: 420ms; }
        .manifesto-section:nth-of-type(6) { animation-delay: 500ms; }
        .manifesto-section:nth-of-type(7) { animation-delay: 580ms; }
        .manifesto-section:nth-of-type(8) { animation-delay: 660ms; }

        @keyframes reveal {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        className="manifesto-section"
        style={{
          minHeight: "100svh",
          background: "#2D1810",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: "8vw 7vw",
        }}
      >
        <div style={{ maxWidth: "1200px" }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontSize: "clamp(2.6rem, 5vw, 5.5rem)",
              lineHeight: 1.05,
              fontStyle: "italic",
              fontWeight: 400,
              color: "#FBF7F0",
            }}
          >
            Non costruisco software. Costruisco sistemi che durano.
          </h1>
          <p
            style={{
              marginTop: "1.8rem",
              marginBottom: 0,
              color: "#C4541A",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "clamp(0.85rem, 1.1vw, 1.05rem)",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            Michele Tornello — System Architect, Catania
          </p>
        </div>
      </section>

      <section
        className="manifesto-section"
        style={{ background: "#FBF7F0", color: "#2D1810", padding: "8vw 7vw" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.86fr) minmax(0, 1fr)",
            gap: "3vw",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 1.6rem",
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontSize: "clamp(2rem, 3.2vw, 3.5rem)",
                fontWeight: 400,
              }}
            >
              Chi sono
            </h2>
            <p style={{ margin: 0, fontSize: "clamp(1.05rem, 1.35vw, 1.25rem)", lineHeight: 1.85 }}>
              Ho 24 anni. Lavoro in produzione dal 2022. Nel 2024 sono diventato docente. Non per
              caso. Ho scelto una strada precisa: trasformare complessità in sistemi leggibili,
              robusti, migliorabili. Entro nei progetti dove c&apos;è confusione e porto metodo, dove
              c&apos;è urgenza e porto struttura, dove c&apos;è crescita e porto responsabilità tecnica.
              Non inseguo mode. Costruisco architetture che devono funzionare oggi e restare sane
              domani.
            </p>
          </div>
          <div>
            <Image
              src="/profile-photo.png"
              alt="Michele Tornello"
              width={900}
              height={1200}
              priority
              style={{
                width: "100%",
                height: "auto",
                border: "3px solid #C4541A",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <section
        className="manifesto-section"
        style={{ background: "#2D1810", color: "#FBF7F0", padding: "8vw 7vw" }}
      >
        <h2
          style={{
            margin: "0 0 2.2rem",
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            fontSize: "clamp(2rem, 3vw, 3.2rem)",
            fontWeight: 400,
          }}
        >
          Il percorso
        </h2>
        <div style={{ borderLeft: "2px solid #C4541A", marginLeft: "1.4rem", paddingLeft: "2rem" }}>
          {timeline.map((item) => (
            <article
              key={item.year}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(115px, 19vw) 1fr",
                gap: "1.4rem",
                marginBottom: "2.6rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  color: "#C4541A",
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  lineHeight: 1,
                }}
              >
                {item.year}
              </div>
              <div>
                <h3 style={{ margin: "0 0 0.7rem", fontSize: "1.2rem", fontWeight: 600 }}>{item.title}</h3>
                <p style={{ margin: 0, maxWidth: "70ch", lineHeight: 1.8, fontSize: "1rem" }}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="manifesto-section"
        style={{ background: "#FBF7F0", color: "#2D1810", padding: "8vw 7vw" }}
      >
        <h2
          style={{
            margin: "0 0 2rem",
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            fontSize: "clamp(2rem, 3vw, 3.2rem)",
            fontWeight: 400,
          }}
        >
          Cosa costruisco
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {areas.map((area) => (
            <article
              key={area.roman}
              style={{ borderTop: "2px solid #C4541A", paddingTop: "1.2rem", minHeight: "220px" }}
            >
              <div
                style={{
                  color: "#C4541A",
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontSize: "clamp(2rem, 3.1vw, 3rem)",
                  lineHeight: 1,
                }}
              >
                {area.roman}
              </div>
              <h3
                style={{
                  margin: "0.9rem 0",
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                }}
              >
                {area.title}
              </h3>
              <p style={{ margin: 0, lineHeight: 1.75 }}>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="manifesto-section"
        style={{ background: "#21120D", color: "#FBF7F0", padding: "8vw 7vw" }}
      >
        <h2
          style={{
            margin: "0 0 2rem",
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            fontSize: "clamp(2rem, 3vw, 3.2rem)",
            fontWeight: 400,
          }}
        >
          Portfolio
        </h2>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {projects.map((project) => (
            <article key={project.title} style={{ borderLeft: "4px solid #C4541A", padding: "0.6rem 0 0.6rem 1.2rem" }}>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontSize: "clamp(1.8rem, 2.7vw, 2.8rem)",
                  fontWeight: 400,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  margin: "0.35rem 0 0.7rem",
                  color: "#C4541A",
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.92rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                }}
              >
                {project.year}
              </p>
              <p style={{ margin: "0 0 0.4rem", lineHeight: 1.75 }}>{project.impact}</p>
              <p style={{ margin: 0, fontWeight: 600 }}>{project.metric}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="manifesto-section"
        style={{ background: "#FBF7F0", color: "#2D1810", padding: "8vw 7vw" }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <Image
            src="/academy-class.jpg"
            alt="Docenza in aula"
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", display: "block", filter: "saturate(0.5)" }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 1rem",
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontSize: "clamp(2rem, 3vw, 3.2rem)",
                fontWeight: 400,
              }}
            >
              Da studente a docente in 4 anni
            </h2>
            <p style={{ margin: 0, lineHeight: 1.85 }}>
              La docenza non è un badge. È un banco di prova quotidiano. Ogni lezione mi costringe
              a rendere esplicito ciò che molti tengono implicito: perché una scelta è corretta,
              quali trade-off accettiamo, come si costruisce fiducia tecnica in un team.
            </p>
          </div>
          <blockquote
            style={{
              margin: 0,
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 3.4vw, 3.6rem)",
              lineHeight: 1.15,
            }}
          >
            “Non insegno a programmare. Insegno a pensare da ingegnere.”
          </blockquote>
        </div>
      </section>

      <section
        className="manifesto-section"
        style={{ background: "#2D1810", color: "#FBF7F0", padding: "8vw 7vw" }}
      >
        <h2
          style={{
            margin: "0 0 2rem",
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            fontSize: "clamp(2.2rem, 3.4vw, 3.6rem)",
            fontWeight: 400,
          }}
        >
          Ne hanno parlato.
        </h2>
        <div style={{ display: "grid", gap: "0.9rem" }}>
          {press.map((item) => (
            <article
              key={item.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                borderBottom: "1px solid rgba(251,247,240,0.25)",
                paddingBottom: "0.75rem",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontSize: "clamp(1.6rem, 2.3vw, 2.4rem)",
                  fontWeight: 400,
                }}
              >
                {item.name}
              </h3>
              <span
                style={{
                  color: "#C4541A",
                  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                  fontSize: "0.95rem",
                }}
              >
                {item.year}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section
        className="manifesto-section"
        style={{
          minHeight: "45svh",
          background: "#FBF7F0",
          color: "#2D1810",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: "8vw 7vw",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontSize: "clamp(2.3rem, 4vw, 4.2rem)",
              fontWeight: 400,
            }}
          >
            Hai un sistema da costruire?
          </h2>
          <p style={{ margin: "1.3rem 0 0", color: "#C4541A", fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}>
            <a href="mailto:michele@paradigmadigitale.it" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid #C4541A" }}>
              Parliamo.
            </a>
          </p>
          <p
            style={{
              margin: "1rem 0 0",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "0.95rem",
            }}
          >
            michele@paradigmadigitale.it
          </p>
          <div style={{ marginTop: "0.9rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="https://www.linkedin.com" style={{ color: "#2D1810", textDecoration: "none" }} aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://github.com" style={{ color: "#2D1810", textDecoration: "none" }} aria-label="GitHub">
              GitHub
            </a>
            <a href="https://www.instagram.com" style={{ color: "#2D1810", textDecoration: "none" }} aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
