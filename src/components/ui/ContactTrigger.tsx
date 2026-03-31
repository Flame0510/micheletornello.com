'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactTrigger() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    let idleTimer: ReturnType<typeof setTimeout>;
    let countdownStarted = false;

    const handleScroll = () => {
      if (countdownStarted) return;
      if (window.scrollY > window.innerHeight * 0.6) {
        countdownStarted = true;
        idleTimer = setTimeout(() => setVisible(true), 15000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(idleTimer);
    };
  }, [dismissed]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 p-5 shadow-xl rounded-2xl"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            minWidth: '220px',
          }}
        >
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 transition-colors text-xs"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Chiudi"
          >
            ✕
          </button>

          <p
            className="text-[10px] uppercase tracking-widest mb-3 font-semibold"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-primary)' }}
          >
            Contatto diretto
          </p>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:micheletornello5@gmail.com"
              className="text-sm transition-colors"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              → Email
            </a>
            <a
              href="https://www.linkedin.com/in/michele-tornello-06a6341aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              → LinkedIn
            </a>
            <a
              href="/#contatto"
              className="text-sm transition-colors"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              → Form contatti
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
