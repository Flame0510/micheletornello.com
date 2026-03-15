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
      if (countdownStarted) return; // non resettare se già partito
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
          className="fixed bottom-6 right-6 z-50 bg-[#0d0d0d] border border-[#B87333]/40 p-5 shadow-2xl"
          style={{ minWidth: '220px' }}
        >
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 text-[#F2EDE8]/30 hover:text-[#F2EDE8]/70 transition-colors text-xs font-mono"
            aria-label="Chiudi"
          >
            ✕
          </button>

          <p className="font-mono text-[10px] uppercase tracking-widest text-[#B87333] mb-3">
            // Contatto diretto
          </p>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:micheletornello5@gmail.com"
              className="font-mono text-xs text-[#F2EDE8]/70 hover:text-[#B87333] transition-colors tracking-wide"
            >
              → Email
            </a>
            <a
              href="https://www.linkedin.com/in/michele-tornello-06a6341aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#F2EDE8]/70 hover:text-[#B87333] transition-colors tracking-wide"
            >
              → LinkedIn
            </a>
            <a
              href="/#contatto"
              className="font-mono text-xs text-[#F2EDE8]/70 hover:text-[#B87333] transition-colors tracking-wide"
            >
              → Form contatti
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
