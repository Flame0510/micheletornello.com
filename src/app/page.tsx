import Image from "next/image";

const projects = [
  { name: "PARADIGMA DIGITALE PLATFORM", year: "2024" },
  { name: "AI AUTOMATION LAB", year: "2023" },
  { name: "ACADEMY ENGINEERING TRACK", year: "2024" },
  { name: "SYSTEM DESIGN BOOTCAMP", year: "2022" },
];

const stats = [
  { value: "3 YRS", label: "IN PRODUZIONE" },
  { value: "400+", label: "STUDENTI FORMATI" },
  { value: "4", label: "SISTEMI LIVE" },
  { value: "24", label: "ANNI (AND COUNTING)" },
];

export default function Home() {
  return (
    <main
      style={{
        background: "#FFFFFF",
        color: "#000000",
        fontFamily: "Arial Black, Arial, sans-serif",
        textTransform: "uppercase",
        margin: 0,
      }}
    >
      <section
        style={{
          background: "#FFE500",
          padding: "5vw 4vw 3vw",
          borderBottom: "4px solid #000000",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "15vw",
            lineHeight: 0.86,
            letterSpacing: "-0.03em",
          }}
        >
          MICHELE
          <br />
          TORNELLO
        </h1>
        <p style={{ margin: "1.5rem 0 0", fontSize: "1rem", letterSpacing: "0.02em" }}>
          SYSTEM ARCHITECT — CATANIA — 2024
        </p>
      </section>

      <section style={{ background: "#FFFFFF", padding: "3vw", border: "4px solid #000000" }}>
        <p
          style={{
            margin: 0,
            fontSize: "clamp(1.2rem, 3vw, 3rem)",
            lineHeight: 1.12,
            textAlign: "justify",
          }}
        >
          COSTRUISCO SISTEMI. FORMO PERSONE. RISOLVO PROBLEMI VERI.
        </p>
      </section>

      <section
        style={{
          background: "#000000",
          color: "#FFFFFF",
          borderTop: "4px solid #000000",
          borderBottom: "4px solid #000000",
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: "0",
        }}
      >
        <div style={{ minHeight: "520px", position: "relative" }}>
          <Image
            src="/profile-photo.png"
            alt="Michele Tornello"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ padding: "3vw" }}>
          <h2 style={{ margin: "0 0 1rem", fontSize: "clamp(1.5rem, 3vw, 3rem)" }}>CHI SONO</h2>
          <p style={{ margin: 0, fontSize: "clamp(1rem, 1.5vw, 1.4rem)", lineHeight: 1.35 }}>
            SONO MICHELE TORNELLO. SYSTEM ARCHITECT. COSTRUISCO PRODOTTI DIGITALI CHE DEVONO STARE
            IN PIEDI NEL MONDO REALE, NON NELLE SLIDE. LAVORO IN PRODUZIONE, GESTISCO COMPLESSITÀ,
            PRENDO DECISIONI CHIARE. NEL 2024 SONO DIVENTATO DOCENTE: FORMO PERSONE A PENSARE IN
            SISTEMI, NON A COPIARE CODICE.
          </p>
        </div>
      </section>

      <section style={{ background: "#FFE500", color: "#000000", padding: "3vw", borderBottom: "4px solid #000000" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2vw",
          }}
        >
          {stats.map((item) => (
            <article key={item.value} style={{ border: "4px solid #000000", padding: "1.2rem", background: "#FFE500" }}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1 }}>{item.value}</div>
              <div style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", marginTop: "0.5rem" }}>{item.label}</div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#FFFFFF", color: "#000000", borderBottom: "4px solid #000000" }}>
        <h2 style={{ margin: 0, padding: "3vw 3vw 1vw", fontSize: "clamp(1.7rem, 3vw, 3rem)" }}>LAVORI</h2>
        <div>
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                borderBottom: "2px solid #000000",
                padding: "1.2rem 3vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }}>{project.name}</span>
              <span style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.2rem)" }}>{project.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#000000", color: "#FFFFFF", paddingBottom: "3vw", borderBottom: "4px solid #000000" }}>
        <div style={{ maxHeight: "600px", overflow: "hidden" }}>
          <Image
            src="/academy-class.jpg"
            alt="Docenza"
            width={1800}
            height={1000}
            style={{ width: "100%", height: "600px", objectFit: "cover", display: "block" }}
          />
        </div>
        <p style={{ margin: "2vw 3vw 0", fontSize: "clamp(1rem, 2vw, 2rem)", lineHeight: 1.25 }}>
          STEVE JOBS ACADEMY. DOCENTE DAL 2024. 400+ STUDENTI. NON INSEGNO A PROGRAMMARE. INSEGNO
          A PENSARE.
        </p>
      </section>

      <section
        style={{
          background: "#FFE500",
          color: "#000000",
          border: "4px solid #000000",
          margin: "0",
          padding: "3vw",
        }}
      >
        <p style={{ margin: "0 0 0.8rem", fontSize: "clamp(1.2rem, 2.3vw, 2rem)" }}>RTL 102.5 — 2024</p>
        <p style={{ margin: "0 0 0.8rem", fontSize: "clamp(1.2rem, 2.3vw, 2rem)" }}>
          UNIVERSITÀ DI CATANIA — 2024
        </p>
        <p style={{ margin: 0, fontSize: "clamp(1.2rem, 2.3vw, 2rem)" }}>TEDX CATANIA — 2023</p>
      </section>

      <section style={{ background: "#000000", color: "#FFFFFF", padding: "5vw 3vw 6vw" }}>
        <h2 style={{ margin: 0, fontSize: "clamp(2rem, 5vw, 5rem)", lineHeight: 1 }}>HAI UN PROGETTO?</h2>
        <p style={{ margin: "1rem 0 0", color: "#FFE500", fontSize: "clamp(1.2rem, 2.4vw, 2.3rem)" }}>
          MICHELE@PARADIGMADIGITALE.IT
        </p>
        <p style={{ margin: "1rem 0 0", fontSize: "clamp(0.9rem, 1.2vw, 1.2rem)" }}>
          NON RISPONDO A CHI VUOLE &quot;UNA COSINA VELOCE&quot;.
        </p>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }
        section div[style*="border-bottom: 2px solid #000000"]:hover {
          background: #FFE500;
        }
      `}</style>
    </main>
  );
}
