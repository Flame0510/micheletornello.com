'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { showcases } from '@/lib/showcases-data';
import type { Showcase } from '@/lib/showcases-data';

function ShowcaseCard({ s, index }: { s: Showcase; index: number }) {
  return (
    <motion.article
      className="shw_card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <header className="shw_card_header">
        <span className="shw_card_id">{s.id}</span>
      </header>

      <div className="shw_card_body">
        <h3 className="shw_card_title">{s.title}</h3>
        {s.context && (
          <span className="shw_card_context">// {s.context}</span>
        )}
        <p className="shw_card_desc">{s.description}</p>
      </div>

      <div className="shw_stack">
        {s.stack.map((tech) => (
          <span key={tech} className="shw_chip">{tech}</span>
        ))}
      </div>

      <footer className="shw_card_footer">
        <a
          href={s.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shw_btn shw_btn_ghost"
        >
          <Github size={14} />
          Repository
        </a>
        {s.liveUrl && (
          <a
            href={s.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shw_btn shw_btn_accent"
          >
            <ExternalLink size={14} />
            Apri
          </a>
        )}
      </footer>
    </motion.article>
  );
}

export default function ShowcasesPageClient() {
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

          <span className="shw_badge">// SHOWCASE_LAB</span>

          <motion.h1
            className="shw_headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Piattaforme che insegnano.<br />
            <em>Codice che dimostra.</em>
          </motion.h1>

          <motion.p
            className="shw_hero_sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Progetti open source costruiti per la Steve Jobs Academy e per la
            community: piattaforme interattive, quiz gamificati, ambienti di
            apprendimento live.
          </motion.p>

          <motion.div
            className="shw_hero_stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span>{showcases.length.toString().padStart(2, '0')} PROGETTI</span>
            <span className="shw_sep">·</span>
            <span>{showcases.filter(s => s.status === 'LIVE').length.toString().padStart(2, '0')} LIVE</span>
            <span className="shw_sep">·</span>
            <span>OPEN SOURCE</span>
          </motion.div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="shw_section">
        <div className="shw_container">
          <header className="shw_section_header">
            <span className="shw_section_label">// SHW_LAB_INDEX</span>
            <h2 className="shw_section_title">
              Showcases
            </h2>
          </header>

          <div className="shw_grid">
            {showcases.map((s, i) => (
              <ShowcaseCard key={s.id} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ORG BANNER ── */}
      <section className="shw_orga">
        <div className="shw_orga_inner">
          <span className="shw_orga_label">// MT_SHOWCASES_ORG</span>
          <p className="shw_orga_text">
            Tutti i repo sono pubblici. Fork, studia il codice, contribuisci.
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
