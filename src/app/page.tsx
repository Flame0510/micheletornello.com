"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const portfolioItems = [
  {
    number: "01.",
    title: "MT Academy Platform",
    year: "2024",
    description:
      "Percorso formativo full-stack con mentorship diretta, laboratorio live e framework pratico per junior developer.",
  },
  {
    number: "02.",
    title: "Low-Latency Trading Stack",
    year: "2023",
    description:
      "Architettura event-driven in Node.js per sistemi real-time con osservabilità completa e fallback deterministici.",
  },
  {
    number: "03.",
    title: "React Native Field Suite",
    year: "2022",
    description:
      "Suite mobile per team distribuiti: sincronizzazione offline-first, workflow multi-ruolo e deploy continuo.",
  },
  {
    number: "04.",
    title: "Engineering Education System",
    year: "2021",
    description:
      "Metodo didattico orientato al pensiero ingegneristico: meno tutorial, più casi reali, metriche e rigore.",
  },
];

const pressItems = [
  {
    outlet: "Tech Italia",
    title: "Architetture che insegnano a pensare",
    year: "2024",
  },
  {
    outlet: "Catania Today",
    title: "Dal codice alla cultura tecnica",
    year: "2023",
  },
  {
    outlet: "Dev Journal",
    title: "Formare ingegneri, non copiare snippet",
    year: "2023",
  },
  {
    outlet: "Campus Magazine",
    title: "La nuova grammatica della programmazione",
    year: "2022",
  },
];

const principles = [
  {
    title: "Pensiero sistemico prima del framework",
    text: "Ogni decisione tecnica è una scelta di sistema: dipendenze, costi operativi, manutenzione, performance e impatto sul team. Il codice è solo l’ultimo strato visibile di una struttura più ampia. Per questo si parte sempre dai vincoli reali, non dall’hype del momento.",
  },
  {
    title: "Semplicità come disciplina progettuale",
    text: "Semplice non significa banale: significa ridurre il superfluo fino a lasciare solo ciò che regge nel tempo. Architetture leggibili, naming netto, responsabilità chiare. La complessità è inevitabile, il caos no.",
  },
  {
    title: "Didattica orientata alla realtà",
    text: "Insegnare sviluppo software vuol dire allenare giudizio tecnico: leggere trade-off, stimare rischi, progettare in anticipo gli errori. L’obiettivo non è “far funzionare” qualcosa oggi, ma costruire strumenti mentali che funzionino sempre.",
  },
];

export default function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#FAF8F4] text-[#111111] antialiased selection:bg-[#B87333]/30">
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-8 pt-10 md:px-12 lg:px-16">
        <div className="overflow-hidden leading-[0.84] tracking-[-0.04em]">
          <h1
            style={{ fontSize: "20vw" }}
            className="font-serif uppercase text-[#111111]"
          >
            MICHELE
          </h1>
        </div>
        <div className="overflow-hidden leading-[0.9] tracking-[-0.03em]">
          <h2
            style={{ fontSize: "10vw" }}
            className="font-serif uppercase text-[#111111]"
          >
            TORNELLO
          </h2>
        </div>
        <p className="self-end font-mono text-[10px] uppercase tracking-[0.2em] text-[#111111]/70 md:text-xs">
          System Architect, Catania — 2024
        </p>
      </section>

      <section className="overflow-hidden bg-[#111111] py-24">
        <div className="marquee-track whitespace-nowrap font-serif uppercase text-[#B87333]" style={{ fontSize: "8vw" }}>
          <span className="mx-8">3 ANNI DI PRODUZIONE</span>
          <span className="mx-8">150K+ RIGHE</span>
          <span className="mx-8">50ms LATENZA</span>
          <span className="mx-8">400 STUDENTI</span>
          <span className="mx-8">3 ANNI DI PRODUZIONE</span>
          <span className="mx-8">150K+ RIGHE</span>
          <span className="mx-8">50ms LATENZA</span>
          <span className="mx-8">400 STUDENTI</span>
        </div>
      </section>

      <section data-reveal className="reveal border-t-2 border-[#B87333] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="max-w-3xl text-base leading-relaxed text-[#111111]/85 md:text-lg">
            <p>
              Michele Tornello progetta sistemi digitali come fossero pubblicazioni: una struttura precisa, una gerarchia leggibile, una voce coerente. Il suo lavoro nasce all&apos;incrocio tra architettura software e cultura progettuale. Ogni riga è pensata per durare, ogni scelta è motivata da impatto reale.
            </p>
            <p className="mt-6">
              Da Catania, guida team e studenti nella costruzione di prodotti robusti: backend affidabili, interfacce essenziali, pipeline che non collassano alla prima scalata. L&apos;obiettivo non è impressionare con effetti: è costruire sistemi che continuano a funzionare quando la pressione aumenta.
            </p>
            <p className="mt-6">
              Questo spazio raccoglie progetti, metodo e tracce editoriali di un approccio rigoroso. Meno estetica decorativa, più chiarezza. Meno rumore, più idea.
            </p>
          </article>

          <figure className="max-w-xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#111111]/15">
              <Image
                src="/profile-photo.png"
                alt="Ritratto editoriale di Michele Tornello"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
            <figcaption className="mt-4 border-t border-[#B87333]/70 pt-3 font-mono text-xs uppercase tracking-[0.16em] text-[#111111]/70">
              Ritratto editoriale — Archivio personale, Catania
            </figcaption>
          </figure>
        </div>
      </section>

      <section data-reveal className="reveal bg-[#FAF8F4] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <h3 className="mb-10 font-serif text-3xl md:text-5xl">Portfolio Magazine</h3>
        <div className="border-y border-[#111111]/20">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="group border-b border-[#111111]/20 px-3 py-6 transition-colors duration-300 last:border-b-0 hover:bg-[#111111]"
            >
              <div className="mb-2 grid gap-2 md:grid-cols-[80px_1fr_90px] md:items-baseline">
                <span className="font-mono text-sm tracking-[0.1em] text-[#111111]/70 transition-colors group-hover:text-[#FAF8F4]/70">
                  {item.number}
                </span>
                <h4 className="font-serif text-3xl leading-tight transition-colors md:text-5xl group-hover:text-[#FAF8F4]">
                  {item.title}
                </h4>
                <span className="font-mono text-sm tracking-[0.1em] text-[#111111]/70 transition-colors md:text-right group-hover:text-[#FAF8F4]/70">
                  {item.year}
                </span>
              </div>
              <p className="max-w-4xl text-sm leading-relaxed text-[#111111]/80 transition-colors md:text-base group-hover:text-[#FAF8F4]/85">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-28 text-white md:px-12 lg:px-16" style={{ backgroundColor: "#B87333" }}>
        <blockquote
          style={{ fontSize: "4vw" }}
          className="mx-auto max-w-6xl font-serif leading-[1.14] tracking-[-0.02em]"
        >
          “Non insegno a programmare. Insegno a pensare da ingegnere.”
        </blockquote>
      </section>

      <section data-reveal className="reveal bg-[#111111] px-6 py-20 text-[#FAF8F4] md:px-12 lg:px-16 lg:py-28">
        <h3 className="mb-10 font-serif text-3xl md:text-5xl">Press</h3>
        <div className="border-t border-[#FAF8F4]/30">
          {pressItems.map((item) => (
            <div
              key={`${item.outlet}-${item.year}`}
              className="grid gap-2 border-b border-[#FAF8F4]/30 py-5 transition-colors duration-300 hover:bg-[#B87333] md:grid-cols-[1fr_2.2fr_80px] md:items-center md:px-2"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FAF8F4]/75">{item.outlet}</p>
              <p className="font-serif text-xl md:text-3xl">{item.title}</p>
              <p className="font-mono text-sm tracking-[0.14em] md:text-right">{item.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal bg-[#FAF8F4] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <h3 className="mb-12 font-serif text-3xl md:text-5xl">Come penso</h3>
        <div className="space-y-12">
          {principles.map((principle) => (
            <article key={principle.title} className="max-w-5xl border-t border-[#111111]/20 pt-6">
              <h4 className="font-serif text-3xl leading-tight md:text-4xl">{principle.title}</h4>
              <p className="mt-4 text-base leading-relaxed text-[#111111]/85 md:text-lg">{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[#111111] px-6 py-24 text-center text-[#FAF8F4] md:px-12">
        <h3 style={{ fontSize: "6vw" }} className="font-serif leading-none">
          Parliamo.
        </h3>
        <Link
          href="mailto:ciao@micheletornello.it"
          className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-[#FAF8F4]/80 transition hover:text-[#B87333] md:text-base"
        >
          ciao@micheletornello.it
        </Link>
        <div className="mt-6 flex gap-6 font-mono text-xs uppercase tracking-[0.16em] text-[#FAF8F4]/65 md:text-sm">
          <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-[#B87333]">
            LinkedIn
          </Link>
          <Link href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-[#B87333]">
            GitHub
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-[#B87333]">
            Instagram
          </Link>
        </div>
      </section>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 700ms ease, transform 700ms ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .marquee-track {
          display: inline-block;
          min-width: 200%;
          animation: marquee 24s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
