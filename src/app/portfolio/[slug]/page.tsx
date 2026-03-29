'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getCaseStudy } from '@/lib/case-studies';
import { Badge } from '@/components/ui/Badge';
import { useLang } from '@/lib/LanguageContext';
import { fadeUp, stagger } from '@/lib/animations';
import { use } from 'react';

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLang();
  const cs = getCaseStudy(slug);

  if (!cs) notFound();

  const t = cs.content[lang];

  const labels = {
    it: { back: '← Tutti i progetti', challenge: 'La sfida', solution: 'La soluzione', results: 'Risultati', lesson: 'Cosa ho imparato', stack: 'Stack & tecnologie' },
    en: { back: '← All projects', challenge: 'The challenge', solution: 'The solution', results: 'Results', lesson: 'What I learned', stack: 'Stack & technologies' },
  };
  const l = labels[lang];

  return (
    <main className="min-h-screen bg-background pt-24 pb-24">
      {/* Hero */}
      <div className={`w-full h-48 md:h-64 bg-gradient-to-br ${cs.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link href="/#lavori" className="inline-flex items-center gap-2 text-text-muted hover:text-accent text-sm font-mono mt-8 mb-12 transition-colors">
          <ArrowLeft size={14} /> {l.back}
        </Link>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-16">
          {/* Title */}
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {cs.tech.map(t => <Badge key={t} variant="outline" className="text-xs font-mono">{t}</Badge>)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t.title}</h1>
            <p className="text-xl text-text-muted leading-relaxed">{t.subtitle}</p>
          </motion.div>

          {/* Overview */}
          <motion.div variants={fadeUp}>
            <p className="text-lg text-text-main leading-relaxed border-l-2 border-accent pl-6">{t.overview}</p>
          </motion.div>

          {/* Challenge */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">{l.challenge}</h2>
            <div className="space-y-4">
              {t.challenge.map((para, i) => (
                <p key={i} className="text-text-muted leading-relaxed">{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">{l.solution}</h2>
            <div className="divide-y divide-border/50">
              {t.solution.map((item, i) => (
                <div key={i} className="py-4 flex flex-col sm:flex-row gap-2 sm:gap-8">
                  <span className="font-mono text-xs text-accent uppercase tracking-widest min-w-[120px] pt-1">{item.label}</span>
                  <span className="text-text-muted leading-relaxed">{item.description}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">{l.results}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.results.map((r, i) => (
                <div key={i} className="p-5 bg-surface border border-border/50 rounded-xl">
                  <div className="text-2xl font-bold text-accent mb-1">{r.value}</div>
                  <div className="text-sm text-text-muted">{r.metric}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lesson */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-text-main">{l.lesson}</h2>
            <p className="text-text-muted leading-relaxed italic border-l-2 border-border pl-6">{t.lesson}</p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="pt-8 border-t border-border/50">
            <Link href="/#contatto" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors">
              {lang === 'it' ? 'Hai un progetto simile? Parliamone' : 'Have a similar project? Let\'s talk'} <ExternalLink size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
