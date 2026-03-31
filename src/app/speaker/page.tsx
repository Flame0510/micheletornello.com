'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
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
  short: "Michele Tornello è System Architect, Product Engineer e docente presso la Steve Jobs Academy. Lavora alla progettazione di architetture scalabili per applicazioni web e mobile e sviluppa prodotti digitali indipendenti. È stato intervistato da RTL 102.5 e partecipa attivamente alla community tecnologica italiana.",
  long: "Michele Tornello è System Architect, Product Engineer e docente presso la Steve Jobs Academy. Laureato in Ingegneria Informatica, si occupa della progettazione di architetture software scalabili e dello sviluppo di applicazioni web e mobile utilizzate in contesti enterprise dal 2022.\n\nLavora con tecnologie moderne dell'ecosistema JavaScript come React, Next.js e React Native, oltre ad avere esperienza con Angular, Vue, Nuxt, PHP e Java. Parallelamente allo sviluppo professionale si dedica alla formazione di nuovi programmatori, contribuendo alla crescita della nuova generazione di sviluppatori.\n\nHa sviluppato diversi progetti digitali indipendenti e partecipa attivamente alla community tecnologica italiana. È stato intervistato da RTL 102.5 e ha collaborato come volontario con TEDx Catania."
};

const topics = [
  {
    title: "Sviluppo software e architetture enterprise",
    subtitle: "Dal primo prototipo alla produzione: come progettare codebase mantenibili e scalabili.",
    abstract: "Il passaggio da un prototipo a un prodotto in produzione richiede rigore architettonico. Questo talk esplora come progettare sistemi che durano nel tempo, concentrandosi su architettura di progetto, gestione dello stato, modularità del codice e risoluzione degli errori comuni che rallentano lo scaling.",
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
  { label: "Ing. Informatica", detail: "Laurea · 2024", icon: <Cpu className="w-4 h-4" /> }
];

type FormData = {
  name: string;
  organization: string;
  email: string;
  eventType: string;
  eventDate: string;
  city: string;
  topic: string;
  attendees: string;
  notes: string;
};

export default function SpeakerPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization: '',
    email: '',
    eventType: '',
    eventDate: '',
    city: '',
    topic: '',
    attendees: '',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/speaker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-transparent border border-[var(--text-primary)]/10 px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder-[var(--text-primary)]/30 focus:outline-none focus:border-[var(--accent-copper)] transition-colors";
  const labelClass = "block font-mono text-[10px] uppercase tracking-widest text-[var(--text-primary)]/50 mb-2";

  return (
    <div className="min-h-screen text-[var(--text-primary)] selection:bg-[var(--accent-copper)]/30" style={{ background: 'var(--bg-base)' }}>
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        {/* Header Section */}
        <header className="mb-20 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--accent-copper)]/30 bg-[var(--accent-copper)]/5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-copper)] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-copper)]">Available for Speaking</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 leading-[0.9] tracking-tighter">
            Michele <br />
            <span className="text-[var(--accent-copper)]">Tornello</span>
          </h1>
          
          <p className="font-mono text-sm md:text-base text-[var(--text-primary)]/60 max-w-xl leading-relaxed">
            System Architect · Product Engineer · Tech Educator
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={handleScrollToForm}
              className="btn-primary"
            >
              <span className="inline-flex items-center gap-2">
                BOOK FOR EVENT <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
            <button className="btn-outline">
              <span className="inline-flex items-center gap-2">
                DOWNLOAD KIT <Download className="w-4 h-4" />
              </span>
            </button>
          </div>
        </header>

        {/* Bio Section */}
        <section className="mb-12 md:mb-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <SectionLabel>Biography</SectionLabel>
            <div className="space-y-6">
              <p className="text-[var(--text-primary)]/70 leading-relaxed font-light">
                {bio.long}
              </p>
            </div>
          </div>
          <div className="md:col-span-4">
             <div className="aspect-[3/4] bg-white border border-[var(--text-primary)]/5 relative group overflow-hidden">
                <Image
                  src="/speaker-unict.jpg"
                  alt="Michele Tornello — Seminario React Native, Università di Catania"
                  fill
                  className="object-cover object-center grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60" />

             </div>
          </div>
        </section>

        {/* Credentials Grid */}
        <section className="mb-12 md:mb-16 border-y border-[var(--text-primary)]/5 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((item, i) => (
              <div key={i} className="group">
                <div className="text-[var(--accent-copper)] mb-3 group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-primary)]/40 mb-1">
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
        <section className="mb-12 md:mb-16">
          <SectionLabel>Speaking Topics</SectionLabel>
          
          <div className="space-y-12">
            {topics.map((topic, i) => (
              <div key={i} className="group border border-[var(--text-primary)]/5 p-6 md:p-8 hover:border-[var(--accent-copper)]/40 transition-colors overflow-hidden">
                <div className="mb-4 flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[var(--bg-base)] border border-[var(--text-primary)]/10 rounded-full flex items-center justify-center text-[var(--accent-copper)] group-hover:border-[var(--accent-copper)]/40 transition-colors">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-3xl mb-2 group-hover:text-[var(--accent-copper)] transition-colors leading-tight">
                      {topic.title}
                    </h3>
                    <p className="font-mono text-xs text-[var(--accent-copper)]/80 italic">
                      {topic.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--text-primary)]/60 text-sm leading-relaxed max-w-2xl mb-6">
                  {topic.abstract}
                </p>
                <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest text-[var(--text-primary)]/40">
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
        <section className="mb-12 md:mb-16">
          <SectionLabel>Stack & Expertise</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-primary)]/40 mb-3">Sistemi Web & Mobile</h3>
              <p className="text-lg">React, Next.js, Vue, Nuxt, Angular, React Native</p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-primary)]/40 mb-3">Backend & Architecture</h3>
              <p className="text-lg">Node.js, PHP, Java / API design, microservizi, cloud architecture, database design</p>
            </div>
          </div>
        </section>

        {/* Past Media */}
        <section className="mb-12 md:mb-16">
          <SectionLabel>Featured In</SectionLabel>
          <a 
            href="https://play.rtl.it/ospiti/1/michele-tornello-il-post-in-fabbrica-mercoledi-27-marzo-2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 border border-[var(--text-primary)]/5 bg-[var(--text-primary)]/[0.02] hover:bg-[var(--accent-copper)]/5 hover:border-[var(--accent-copper)]/20 transition-all group"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-copper)] mb-2">Interview / Radio</div>
                <h3 className="font-display text-2xl group-hover:underline decoration-[var(--accent-copper)]">RTL 102.5 — Il Post in Fabbrica</h3>
                <p className="text-[var(--text-primary)]/50 text-sm mt-2 font-mono">27 Marzo 2024</p>
              </div>
              <ExternalLink className="w-5 h-5 text-[var(--text-primary)]/20 group-hover:text-[var(--accent-copper)] transition-colors" />
            </div>
          </a>
        </section>

        {/* Booking Form */}
        <section ref={formRef} className="mb-12 md:mb-16 scroll-mt-24">
          <SectionLabel>Book for Your Event</SectionLabel>

          {status === 'success' ? (
            <div className="border border-[var(--accent-copper)]/30 bg-[var(--accent-copper)]/5 p-10 text-center">
              <p className="font-mono text-sm text-[var(--accent-copper)]">
                Richiesta inviata — ti rispondo entro 48 ore.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Nome *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Organizzazione</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Azienda / università / associazione"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@esempio.it"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Tipo evento *</label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Seleziona tipo evento</option>
                    <option value="Conferenza tecnica">Conferenza tecnica</option>
                    <option value="Workshop universitario">Workshop universitario</option>
                    <option value="Evento aziendale">Evento aziendale</option>
                    <option value="Panel discussion">Panel discussion</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Data prevista</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Città</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Es. Catania, Milano, Roma"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Topic preferito</label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Nessuna preferenza</option>
                    <option value="Sviluppo software e architetture enterprise">Sviluppo software e architetture enterprise</option>
                    <option value="Architettura software pragmatica">Architettura software pragmatica</option>
                    <option value="Costruire prodotti digitali indipendenti">Costruire prodotti digitali indipendenti</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Partecipanti stimati</label>
                  <select
                    name="attendees"
                    value={formData.attendees}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Seleziona fascia</option>
                    <option value="<50">&lt;50</option>
                    <option value="50-200">50–200</option>
                    <option value="200-500">200–500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Note aggiuntive</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Racconta il contesto dell'evento, eventuali richieste specifiche o domande..."
                  className={inputClass + " resize-none"}
                />
              </div>

              {status === 'error' && (
                <p className="font-mono text-[10px] text-red-500 uppercase tracking-widest">
                  Errore durante l&apos;invio — riprova tra qualche istante.
                </p>
              )}

              <div className="flex">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="inline-flex items-center gap-2">
                    {status === 'loading' ? 'INVIO IN CORSO...' : 'INVIA RICHIESTA'} <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}
