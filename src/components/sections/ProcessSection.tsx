'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Analisi delle Sollecitazioni',
    body: 'Non un brief, ma un puzzle sistemico. Esploriamo persone, processi e tecnologie esistenti per disegnare una rotta chiara — e capire dove il sistema rompe prima che lo faccia davvero.',
  },
  {
    num: '02',
    title: 'Blueprint e Architettura',
    body: 'Definiamo insieme obiettivi concreti, stack e ruoli. Una proposta è un impegno bilaterale, non un preventivo. Precisione chirurgica, zero \u201cfuori budget\u201d imprevisti.',
  },
  {
    num: '03',
    title: 'Cantiere Aperto',
    body: 'Lavoriamo a fianco del tuo team, condividendo logiche e decisioni. Ogni iterazione è un passo verso la tua autonomia — non una semplice release da spuntare.',
  },
  {
    num: '04',
    title: 'Trasferimento di Tecnologia',
    body: 'Documentazione viva, sessioni di trasferimento know-how, chiavi in mano. Non voglio che tu sia dipendente da me; voglio che il tuo team sia all\u2019altezza dell\u2019architettura che abbiamo costruito insieme.',
  },
];

const EASE = 'easeOut' as const;

export default function ProcessSection() {
  return (
    <section id="process" className="proc_section anchor-link">
      <div className="proc_container">
        {/* Header */}
        <motion.header
          className="proc_header"
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
        >
          <span className="proc_badge">// COME LAVORO</span>
          <h2 className="proc_title">
            Costruire Sistemi,<br />
            <em>Non Solo Codice</em>
          </h2>
          <p className="proc_subtitle">
            Costruisco l&apos;architettura del tuo business mentre formo chi la governerà.
          </p>
        </motion.header>

        {/* Steps grid */}
        <div className="proc_grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="proc_card"
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <span className="proc_num">{step.num}</span>
              <h3 className="proc_step_title">{step.title}</h3>
              <p className="proc_step_body">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="proc_cta_wrap"
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          viewport={{ once: true }}
        >
          <p className="proc_cta_text">
            Mettiamo alla prova la tua visione: parliamo di architettura.
          </p>
          <a href="#contatto" className="btn-primary">
            Inizia la conversazione
            <span className="proc_cta_arrow" aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
