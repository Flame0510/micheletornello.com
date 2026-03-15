'use client';
import React from 'react';
import { 
  Mic2, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Download, 
  ExternalLink,
  Users,
  Terminal,
  Cpu,
  Radio,
  Briefcase
} from 'lucide-react';

// Content
const bio = {
  short: "Michele Tornello è System Architect, sviluppatore full-stack e docente presso la Steve Jobs Academy. Lavora alla progettazione di architetture scalabili per applicazioni web e mobile e sviluppa prodotti digitali indipendenti. È stato intervistato da RTL 102.5 e partecipa attivamente alla community tecnologica italiana.",
  long: "Michele Tornello è System Architect, sviluppatore full-stack e docente presso la Steve Jobs Academy. Si occupa della progettazione di architetture software scalabili e dello sviluppo di applicazioni web e mobile utilizzate in contesti reali.\n\nLavora con tecnologie moderne dell'ecosistema JavaScript come React, Next.js e React Native, oltre ad avere esperienza con Angular, Vue, Nuxt, PHP e Java. Parallelamente allo sviluppo professionale si dedica alla formazione di nuovi programmatori, contribuendo alla crescita della nuova generazione di sviluppatori.\n\nHa sviluppato diversi progetti digitali indipendenti e partecipa attivamente alla community tecnologica italiana. È stato intervistato da RTL 102.5 e ha collaborato come volontario con TEDx Catania."
};

const topics = [
  {
    title: "Costruire applicazioni reali con React e React Native",
    subtitle: "Dal primo prototipo alla produzione: come progettare codebase mantenibili e scalabili per applicazioni web e mobile.",
    abstract: "Il passaggio da un prototipo a un prodotto in produzione richiede rigore architettonico. Questo talk esplora come progettare sistemi web e mobile che durano nel tempo, concentrandosi su architettura di progetto, gestione dello stato, modularità del codice e risoluzione degli errori comuni che rallentano lo scaling.",
    format: "Talk tecnico (30-45 min)",
    target: "Web & Mobile Developer, Tech Lead",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Architettura software pragmatica",
    subtitle: "Come progettare sistemi scalabili senza creare complessità inutile.",
    abstract: "Spesso l'over-engineering è il primo nemico della velocità. Michele condivide un approccio pragmatico alla scelta delle tecnologie e alla progettazione di servizi semplici ma robusti. Vedremo come far evolvere le architetture nel tempo, mantenendo la flessibilità necessaria per rispondere al business senza sacrificare la stabilità.",
    format: "Workshop pratico / Talk",
    target: "Architect, CTO, Senior Developer",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Costruire prodotti digitali indipendenti",
    subtitle: "Dallo sviluppo tecnico alla creazione di prodotti reali: come passare dall'idea al software funzionante.",
    abstract: "Sviluppare un prodotto non significa solo scrivere codice. Questo intervento analizza il percorso completo: dalla progettazione di un MVP efficace all'iterazione rapida basata sul feedback. Approfondiremo la gestione tecnica del prodotto, la scelta delle infrastrutture e le strategie per garantire la scalabilità fin dal primo giorno.",
    format: "Panel discussion / Talk",
    target: "Product Manager, Indie Hackers, Full-stack Developer",
    icon: <Radio className="w-5 h-5" />
  }
];

const credentials = [
  { label: "System Architect", detail: "Software Design", icon: <Terminal className="w-4 h-4" /> },
  { label: "Docente SJA", detail: "Steve Jobs Academy", icon: <Users className="w-4 h-4" /> },
  { label: "RTL 102.5", detail: "Intervista Nazionale", icon: <Radio className="w-4 h-4" /> },
  { label: "TEDx Catania", detail: "Volontario Staff", icon: <MapPin className="w-4 h-4" /> }
];

export default function SpeakerPage() {
  return (
    <div className="min-h-screen text-[#F2EDE8] selection:bg-[#B87333]/30">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        {/* Header Section */}
        <header className="mb-20 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B87333]/30 bg-[#B87333]/5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#B87333] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87333]">Available for Speaking</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 leading-[0.9] tracking-tighter">
            Michele <br />
            <span className="text-[#B87333]">Tornello</span>
          </h1>
          
          <p className="font-mono text-sm md:text-base text-[#F2EDE8]/60 max-w-xl leading-relaxed">
            System Architect · Software Engineer · Tech Educator
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a 
              href="mailto:ciao@micheletornello.com" 
              className="px-6 py-3 bg-[#B87333] text-[#080808] font-mono text-sm font-bold flex items-center gap-2 hover:bg-[#B87333]/90 transition-colors"
            >
              BOOK FOR EVENT <ArrowUpRight className="w-4 h-4" />
            </a>
            <button className="px-6 py-3 border border-[#F2EDE8]/10 hover:border-[#B87333]/40 transition-colors font-mono text-sm flex items-center gap-2">
              DOWNLOAD KIT <Download className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Bio Section */}
        <section className="mb-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B87333] mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#B87333]/30" /> Biography
            </h2>
            <div className="space-y-6">
              <p className="font-display text-2xl md:text-3xl leading-snug">
                {bio.short}
              </p>
              <p className="text-[#F2EDE8]/70 leading-relaxed font-light">
                {bio.long}
              </p>
            </div>
          </div>
          <div className="md:col-span-4">
             <div className="aspect-[3/4] bg-[#111] border border-[#F2EDE8]/5 relative group overflow-hidden">
                {/* Placeholder for Speaker Photo */}
                <div className="absolute inset-0 flex items-center justify-center text-[#F2EDE8]/20 font-mono text-[10px] uppercase tracking-widest p-12 text-center">
                  Speaker Portrait (B&W)
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-[#B87333]/20 overflow-hidden">
                  <div className="w-1/3 h-full bg-[#B87333]" />
                </div>
             </div>
          </div>
        </section>

        {/* Credentials Grid */}
        <section className="mb-24 border-y border-[#F2EDE8]/5 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((item, i) => (
              <div key={i} className="group">
                <div className="text-[#B87333] mb-3 group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#F2EDE8]/40 mb-1">
                  {item.label}
                </div>
                <div className="font-display text-xl">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Topics List */}
        <section className="mb-24">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B87333] mb-12 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#B87333]/30" /> Speaking Topics
          </h2>
          
          <div className="space-y-12">
            {topics.map((topic, i) => (
              <div key={i} className="group relative border-l border-[#F2EDE8]/5 pl-8 hover:border-[#B87333]/40 transition-colors">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-[#080808] border border-[#F2EDE8]/10 rounded-full flex items-center justify-center text-[#B87333] group-hover:border-[#B87333]/40 transition-colors">
                  {topic.icon}
                </div>
                <div className="mb-4">
                  <h3 className="font-display text-3xl mb-2 group-hover:text-[#B87333] transition-colors leading-tight">
                    {topic.title}
                  </h3>
                  <p className="font-mono text-xs text-[#B87333]/80 italic">
                    {topic.subtitle}
                  </p>
                </div>
                <p className="text-[#F2EDE8]/60 text-sm leading-relaxed max-w-2xl mb-6">
                  {topic.abstract}
                </p>
                <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest text-[#F2EDE8]/40">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {topic.format}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" /> {topic.target}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-24">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B87333] mb-8 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#B87333]/30" /> Stack & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#F2EDE8]/40 mb-3">Web & Mobile</h3>
              <p className="text-lg">React, Next.js, Vue, Nuxt, Angular / React Native</p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#F2EDE8]/40 mb-3">Backend & Architecture</h3>
              <p className="text-lg">Node.js, PHP, Java / API design, microservizi, cloud architecture, database design</p>
            </div>
          </div>
        </section>

        {/* Past Media */}
        <section className="mb-24">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B87333] mb-8 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#B87333]/30" /> Featured In
          </h2>
          <a 
            href="https://play.rtl.it/ospiti/1/michele-tornello-il-post-in-fabbrica-mercoledi-27-marzo-2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 border border-[#F2EDE8]/5 bg-[#F2EDE8]/[0.02] hover:bg-[#B87333]/5 hover:border-[#B87333]/20 transition-all group"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#B87333] mb-2">Interview / Radio</div>
                <h3 className="font-display text-2xl group-hover:underline decoration-[#B87333]">RTL 102.5 — Il Post in Fabbrica</h3>
                <p className="text-[#F2EDE8]/50 text-sm mt-2 font-mono">27 Marzo 2024</p>
              </div>
              <ExternalLink className="w-5 h-5 text-[#F2EDE8]/20 group-hover:text-[#B87333] transition-colors" />
            </div>
          </a>
        </section>
      </main>

      <style jsx global>{`
        .font-display { font-family: var(--font-instrument-serif), serif; }
        .font-mono { font-family: var(--font-jetbrains-mono), monospace; }
        @media (max-width: 768px) {
          h1 { font-size: 3.5rem; }
        }
      `}</style>
    </div>
  );
}
