'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import { Download } from 'lucide-react';
import { bio, topics, credentials, Mic2, MapPin, Calendar, ArrowUpRight, ExternalLink, Users } from '@/lib/speaker-data';

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

export default function SpeakerPageClient() {
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

  const inputClass = "w-full bg-transparent border border-[var(--text-primary)]/10 px-4 py-3 font-mono text-sm text-[var(--text-primary)] placeholder-[var(--text-primary)]/30 focus:outline-none focus:border-[var(--accent-primary)] transition-colors";
  const labelClass = "block font-mono text-[10px] uppercase tracking-widest text-[var(--text-primary)]/50 mb-2";

  return (
    <div className="min-h-screen text-[var(--text-primary)] selection:bg-[var(--accent-primary)]/30" style={{ background: 'var(--bg-base)' }}>
      <main className="container py-12 md:py-24 relative z-10">
        
        {/* Header Section */}
        <header className="mb-20 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-primary)]">Available for Speaking</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl mb-6 leading-[0.9] tracking-tighter">
            Michele <br />
            <span className="text-[var(--accent-primary)]">Tornello</span>
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
            <a href="/speaker-kit.pdf" download className="btn-outline">
              <span className="inline-flex items-center gap-2">
                DOWNLOAD KIT <Download className="w-4 h-4" />
              </span>
            </a>
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
                <div className="text-[var(--accent-primary)] mb-3 group-hover:scale-110 transition-transform origin-left">
                  <item.Icon className="w-4 h-4" />
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
              <div key={i} className="group border border-[var(--text-primary)]/5 p-6 md:p-8 hover:border-[var(--accent-primary)]/40 transition-colors overflow-hidden">
                <div className="mb-4 flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[var(--bg-base)] border border-[var(--text-primary)]/10 rounded-full flex items-center justify-center text-[var(--accent-primary)] group-hover:border-[var(--accent-primary)]/40 transition-colors">
                    <topic.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl mb-2 group-hover:text-[var(--accent-primary)] transition-colors leading-tight">
                      {topic.title}
                    </h3>
                    <p className="font-mono text-xs text-[var(--accent-primary)]/80 italic">
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
            className="block p-8 border border-[var(--text-primary)]/5 bg-[var(--text-primary)]/[0.02] hover:bg-[var(--accent-primary)]/5 hover:border-[var(--accent-primary)]/20 transition-all group"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-primary)] mb-2">Interview / Radio</div>
                <h3 className="font-display text-2xl group-hover:underline decoration-[var(--accent-primary)]">RTL 102.5 — Il Post in Fabbrica</h3>
                <p className="text-[var(--text-primary)]/50 text-sm mt-2 font-mono">27 Marzo 2024</p>
              </div>
              <ExternalLink className="w-5 h-5 text-[var(--text-primary)]/20 group-hover:text-[var(--accent-primary)] transition-colors" />
            </div>
          </a>
        </section>

        {/* Booking Form */}
        <section ref={formRef} className="mb-12 md:mb-16 scroll-mt-24">
          <SectionLabel>Book for Your Event</SectionLabel>

          {status === 'success' ? (
            <div className="border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 p-10 text-center">
              <p className="font-mono text-sm text-[var(--accent-primary)]">
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
