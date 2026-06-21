'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { labProjects } from '@/lib/lab-data';
import type { LabProject, LabStatus } from '@/lib/lab-data';

const STATUS_COLOR: Record<LabStatus, string> = {
  'IN DEV':    '#F59E0B',
  'BETA':      'var(--accent-primary)',
  'EXPLORING': 'var(--accent-lab)',
  'PAUSED':    'var(--text-muted)',
  'COMPLETED': 'var(--accent-green)',
};

function LabCard({ p, index }: { p: LabProject; index: number }) {
  return (
    <motion.article
      className="lab_card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <header className="lab_card_header">
        <div className="lab_card_header_left">
          <span className="shw_card_id">{p.id}</span>
          <span className="lab_category">{p.category}</span>
        </div>
        <span className="lab_status" style={{ color: STATUS_COLOR[p.status] }}>
          {p.status}
        </span>
      </header>

      <div className="lab_card_body">
        <h3 className="lab_card_name">{p.name}</h3>
        <p className="lab_card_tagline">// {p.tagline}</p>
        <p className="lab_card_desc">{p.description}</p>
      </div>

      <div className="shw_stack">
        {p.stack.map((tech) => (
          <span key={tech} className="shw_chip">{tech}</span>
        ))}
      </div>

      <footer className="shw_card_footer">
        {p.repoUrl ? (
          <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="shw_btn shw_btn_ghost">
            <Github size={14} /> Repository
          </a>
        ) : (
          <span className="lab_repo_pending">// repo soon</span>
        )}
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="shw_btn shw_btn_accent">
            <ExternalLink size={14} /> Apri
          </a>
        )}
      </footer>
    </motion.article>
  );
}

export default function LabPageClient() {
  const activeCount = labProjects.filter(p => p.status === 'IN DEV' || p.status === 'BETA' || p.status === 'EXPLORING').length;

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-base)' }}>

      {/* ── HERO ── */}
      <section className="shw_hero">
        <div className="shw_hero_inner">
          <Link href="/" className="shw_back">
            <motion.span
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block' }}
            >
              ←
            </motion.span>
            Home
          </Link>

          <span className="shw_badge">// SIDE_PROJECTS</span>

          <motion.h1
            className="shw_headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Curiosità che<br />
            <em>diventa codice.</em>
          </motion.h1>

          <motion.p
            className="shw_hero_sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Progetti costruiti per il gusto di farlo — AI, tool, giochi, grafica 3D.
            Nessun brief, nessun cliente. Solo esperimenti.
          </motion.p>

          <motion.div
            className="shw_hero_stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span>{labProjects.length.toString().padStart(2, '0')} PROGETTI</span>
            <span className="shw_sep">·</span>
            <span>{activeCount.toString().padStart(2, '0')} ATTIVI</span>
            <span className="shw_sep">·</span>
            <span>AI · GAME · TOOL · 3D</span>
          </motion.div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="shw_section">
        <div className="shw_container">
          <header className="shw_section_header">
            <span className="shw_section_label">// LAB_INDEX</span>
            <h2 className="shw_section_title">Laboratorio</h2>
          </header>

          <div className="shw_grid">
            {labProjects.map((p, i) => (
              <LabCard key={p.id} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTE ── */}
      <section className="shw_orga">
        <div className="shw_orga_inner">
          <span className="shw_orga_label">// LAB_STATUS</span>
          <p className="shw_orga_text">
            Progetti personali in vari stadi. Architetture, nomi e approcci possono cambiare.
          </p>
          <a
            href="https://github.com/Flame0510"
            target="_blank"
            rel="noopener noreferrer"
            className="shw_orga_link"
          >
            → github.com/Flame0510
          </a>
        </div>
      </section>

    </main>
  );
}
