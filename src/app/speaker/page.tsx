'use client';
import React from 'react';
import { Instrument_Serif, JetBrains_Mono } from 'next/font/google';
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

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

// Content
const bio = {
  short: "Michele Tornello, classe 2001, è System Architect, docente presso la Steve Jobs Academy e speaker specializzato in React Native. Già intervistato da RTL 102.5, coordina lo staff tecnico di TEDx Catania. Coniuga lo sviluppo di architetture scalabili per Paradigma SPA alla creazione di memoriali digitali e sistemi di sicurezza evoluti.",
  long: "Nato a Catania nel 2001, Michele Tornello ha trasformato una passione precoce per il codice in un percorso professionale d’impatto. Formatosi alla Steve Jobs Academy (SJA), viene assunto a tempo indeterminato nel 2022 da Paradigma SPA, partner di Confindustria Catania, dove opera come System Architect su piattaforme web scalabili. La sua dedizione al trasferimento di competenze lo porta nel 2024 a tornare in SJA in veste di docente, formando oltre 400 studenti sulle moderne architetture software. Nello stesso anno, consolida la sua presenza nel circuito dello speaking come relatore su React Native presso l'Università di Catania e con un intervento in diretta nazionale su RTL 102.5. Attivo nell'ecosistema dell'innovazione sociale come volontario nello staff di TEDx Catania, Michele è fondatore di diversi progetti digitali indipendenti: REC Security, Cashbee, Watching Stars e Memory Cloud. Quest’ultimo esplora l’intersezione tra tecnologia NFC e memoria collettiva attraverso memoriali digitali."
};

const topics = [
  {
    title: "React Native in produzione: da studente a docente",
    subtitle: "Evoluzione di un'architettura mobile tra banchi di scuola e sfide enterprise.",
    abstract: "Come si passa dal compilare il primo \"Hello World\" in React Native al gestire la formazione di 400 futuri sviluppatori? In questo talk, Michele analizza le lezioni apprese durante la transizione da studente a docente e professionista. Verranno esplorate le best practice per mantenere codebase scalabili, la gestione delle performance in contesti enterprise e le metodologie didattiche per trasmettere concetti complessi.",
    format: "Keynote (30 min) / Podcast",
    target: "Sviluppatori Junior/Mid, Studenti, Tech Lead",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Architettura di sistemi per il Sud Italia",
    subtitle: "Ingegneria del software resiliente oltre i limiti geografici e infrastrutturali.",
    abstract: "Costruire tecnologia d'eccellenza operando dalla Sicilia richiede una mentalità specifica. Michele condivide l'esperienza maturata in Paradigma SPA e come founder indipendente, dimostrando che l'alta disponibilità e la scalabilità non sono appannaggio esclusivo dei grandi hub internazionali. Il talk approfondisce il concetto di \"costruire senza scorciatoie\": dalla scelta dello stack alla cultura del testing.",
    format: "Keynote (30 min) / Workshop (60 min)",
    target: "Architect, CTO, Imprenditori digitali, Dev Community locali",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Memoriali digitali NFC: tecnologia e impatto sociale",
    subtitle: "Come il cloud e l'hardware low-power possono preservare la memoria collettiva.",
    abstract: "Con il progetto Memory Cloud, la tecnologia esce dagli uffici per entrare nella sfera emotiva e sociale. Michele illustra come l'integrazione tra tag NFC, architetture cloud e interfacce web minimali possa creare nuovi modi per conservare e condividere il ricordo. Il talk esplora le sfide tecniche della durabilità del dato a lungo termine e l'etica del \"digital afterlife\".",
    format: "Keynote (30 min) / Intervista Podcast",
    target: "Innovatori sociali, UX Designer, Product Manager, Maker",
    icon: <Radio className="w-5 h-5" />
  }
];

const credentials = [
  { label: "Docente SJA", detail: "400+ Studenti Formati", icon: <Users className="w-4 h-4" /> },
  { label: "RTL 102.5", detail: "Intervista Nazionale", icon: <Radio className="w-4 h-4" /> },
  { label: "TEDx Catania", detail: "Staff Volontario", icon: <MapPin className="w-4 h-4" /> },
  { label: "UniCT", detail: "Speaker React Native", icon: <Terminal className="w-4 h-4" /> }
];

export default function SpeakerPage() {
  return (
    <div className={`${instrument.variable} ${mono.variable} min-h-screen bg-[#080808] text-[#F2EDE8] font-sans selection:bg-[#B87333]/30`}>
      {/* Background grain effect */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-[99]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")'
        }}
      />

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        {/* Header Section */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B87333]/30 bg-[#B87333]/5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#B87333] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87333]">Available for Speaking</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 leading-[0.9] tracking-tighter">
            Michele <br />
            <span className="text-[#B87333]">Tornello</span>
          </h1>
          
          <p className="font-mono text-sm md:text-base text-[#F2EDE8]/60 max-w-xl leading-relaxed">
            System Architect, Docente e Speaker. Costruisco sistemi digitali resilienti con focus su React Native, Architetture Cloud e Impatto Sociale.
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

        {/* Footer */}
        <footer className="pt-12 border-t border-[#F2EDE8]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-2xl">
            Michele <span className="text-[#B87333]">Tornello</span>
          </div>
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-[#F2EDE8]/40">
             <a href="https://linkedin.com/in/michele-tornello-06a6341aa/" className="hover:text-[#B87333] transition-colors">LinkedIn</a>
             <a href="https://github.com/Flame0510" className="hover:text-[#B87333] transition-colors">GitHub</a>
             <a href="https://instagram.com/michele_tornello" className="hover:text-[#B87333] transition-colors">Instagram</a>
          </div>
        </footer>

      </main>

      {/* Global CSS for page-specific styles */}
      <style jsx global>{`
        .font-display { font-family: var(--font-instrument), serif; }
        .font-mono { font-family: var(--font-mono), monospace; }
        @media (max-width: 768px) {
          h1 { font-size: 3.5rem; }
        }
      `}</style>
    </div>
  );
}
