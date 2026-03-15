import Image from "next/image";

const projects = [
  "Paradigma Digitale · 2024 · Consulenza",
  "AI Automation Lab · 2023 · Sistemi",
  "Formazione Executive · 2024 · Academy",
  "Digital Product Sprint · 2022 · Strategia",
];

const press = [
  { name: "RTL 102.5", date: "2024" },
  { name: "Università di Catania", date: "2024" },
  { name: "TEDx Catania", date: "2023" },
];

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff" }}>
      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10vw 7vw",
          background: "#000000",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "Georgia, serif",
            fontSize: "8vw",
            lineHeight: 0.95,
            fontWeight: 400,
            color: "#FFFFFF",
          }}
        >
          Michele Tornello
        </h1>
        <p
          style={{
            marginTop: "1.5rem",
            marginBottom: 0,
            color: "#7C9A7E",
            fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
            letterSpacing: "0.02em",
          }}
        >
          System Architect · Catania · 2024
        </p>
      </section>

      <section
        style={{
          background: "#FFFFFF",
          color: "#000000",
          padding: "10vw 7vw",
        }}
      >
        <div style={{ fontFamily: "Georgia, serif", fontSize: "3vw", lineHeight: 1.45 }}>
          <p style={{ margin: "0 0 1.5rem" }}>Costruisco sistemi che durano.</p>
          <p style={{ margin: "0 0 1.5rem" }}>Formo chi li costruirà.</p>
          <p style={{ margin: 0 }}>Il codice è il mezzo. Il pensiero è il prodotto.</p>
        </div>
      </section>

      <section style={{ background: "#000000", color: "#FFFFFF", padding: "10vw 7vw" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <Image
            src="/profile-photo.png"
            alt="Michele Tornello"
            width={900}
            height={1200}
            style={{ width: "100%", height: "auto", filter: "grayscale(1)" }}
            priority
          />
          <p
            style={{
              margin: 0,
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              lineHeight: 1.9,
              maxWidth: "48ch",
            }}
          >
            Progetto architetture digitali essenziali, robuste e leggibili nel tempo. Lavoro con
            team tecnici e leadership per trasformare complessità in sistemi chiari: meno rumore,
            più direzione. Ogni scelta è intenzionale, ogni dettaglio è al servizio della durata.
          </p>
        </div>
      </section>

      <section style={{ background: "#FFFFFF", color: "#000000", padding: "10vw 7vw" }}>
        <h2
          style={{
            margin: "0 0 2rem",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 400,
          }}
        >
          Lavoro
        </h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          {projects.map((item) => (
            <p
              key={item}
              style={{
                margin: 0,
                paddingBottom: "0.4rem",
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                borderBottom: "1px solid #000000",
              }}
              className="ghost-project-row"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section style={{ position: "relative", background: "#000000", color: "#FFFFFF", minHeight: "62svh" }}>
        <Image
          src="/academy-class.jpg"
          alt="Docenza Steve Jobs Academy"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.3 }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "62svh",
            display: "grid",
            placeItems: "center",
            padding: "8vw 7vw",
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3.1vw, 3rem)",
              lineHeight: 1.4,
            }}
          >
            Steve Jobs Academy · Docente dal 2024 · 400+ studenti
          </p>
        </div>
      </section>

      <section style={{ background: "#FFFFFF", color: "#000000", padding: "10vw 7vw" }}>
        <h2
          style={{
            margin: "0 0 2rem",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 400,
          }}
        >
          Press
        </h2>
        {press.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              alignItems: "center",
              padding: "0.9rem 0",
              borderBottom: "1px solid #000000",
            }}
          >
            <span style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}>{item.name}</span>
            <span style={{ fontSize: "0.95rem" }}>{item.date}</span>
          </div>
        ))}
      </section>

      <section
        style={{
          minHeight: "40svh",
          background: "#000000",
          display: "grid",
          placeItems: "center",
          padding: "10vw 7vw",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#7C9A7E",
            fontFamily: "Georgia, serif",
            fontSize: "3vw",
            lineHeight: 1.2,
            wordBreak: "break-word",
          }}
        >
          michele@paradigmadigitale.it
        </p>
      </section>
    </main>
  );
}
