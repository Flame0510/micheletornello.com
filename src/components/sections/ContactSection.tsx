'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') return (
    <div className="contactSuccess" role="status" aria-live="polite">
      <p className="contactSuccessCode">// 200 OK</p>
      <p>Messaggio ricevuto. Ti rispondo entro 24h.</p>
    </div>
  );

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="contactRow">
        <label htmlFor="contact-name" className="sr-only">Nome</label>
        <input
          id="contact-name"
          className="contactInput"
          type="text"
          placeholder="Nome"
          required
          value={form.name}
          onChange={e => setForm(f => ({...f, name: e.target.value}))}
        />
        <label htmlFor="contact-email" className="sr-only">Email</label>
        <input
          id="contact-email"
          className="contactInput"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={e => setForm(f => ({...f, email: e.target.value}))}
        />
      </div>
      <label htmlFor="contact-message" className="sr-only">Messaggio</label>
      <textarea
        id="contact-message"
        className="contactInput contactTextarea"
        placeholder="Raccontami il progetto..."
        required
        rows={5}
        value={form.message}
        onChange={e => setForm(f => ({...f, message: e.target.value}))}
      />
      <button className="btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'INVIO...' : 'INVIA MESSAGGIO →'}
      </button>
      {status === 'error' && <p className="contactError" role="status" aria-live="polite">Errore nell&apos;invio. Scrivi a {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ''}</p>}
    </form>
  );
}

export default function ContactSection() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: reduced ? 0.1 : 0.55, ease, delay: reduced ? 0 : delay },
  });

  return (
    <section id="contatto" className="cta sectionWrap">
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <motion.h2
          {...fadeUp(0)}
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}
        >
          Hai un sistema che deve durare?
        </motion.h2>
        <motion.p className="ctaSub" {...fadeUp(0.1)}>
          Raccontami il progetto — rispondo entro 24h.
        </motion.p>
        <motion.div {...fadeUp(0.2)}>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
