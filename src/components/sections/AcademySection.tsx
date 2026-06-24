'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { StatBox } from '@/components/ui/StatBox';

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export default function AcademySection() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduced ? 0.1 : 0.55, ease, delay: reduced ? 0 : delay },
  });

  const slideLeft = {
    initial: { opacity: 0, x: reduced ? 0 : -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduced ? 0.1 : 0.65, ease },
  };

  return (
    <section id="academy" className="docH_section">
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div className="docH_container">
          <div className="docH_grid">
            <motion.div className="docH_visual" {...slideLeft}>
              <div className="docH_imageWrapper">
                <Image
                  src="/academy-class.webp"
                  alt="Michele Tornello in aula"
                  className="docH_img"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
                />
                <div className="docH_imageOverlay" />
              </div>
              <div className="docH_imgMeta">
                <span className="docH_mono">EST. 2022</span>
                <span className="docH_mono">SJA · CATANIA</span>
              </div>
            </motion.div>

            <div className="docH_content">
              <motion.header className="docH_header" {...fadeUp(0.1)}>
                <span className="docH_label docH_mono">// LA MISSIONE</span>
                <h2 className="docH_title">
                  L&apos;eredità non è il codice.<br />
                  È la <em>forma mentis</em>.
                </h2>
              </motion.header>

              <div className="docH_body">
                <motion.p className="docH_text" {...fadeUp(0.2)}>
                  La docenza non è trasferimento di sintassi, ma architettura del pensiero. Nelle aule della Steve Jobs Academy, guido la prossima generazione di sviluppatori verso una comprensione sistemica della tecnologia.
                </motion.p>

                <motion.blockquote className="docH_quote" {...fadeUp(0.28)}>
                  &quot;Non insegno a programmare. Insegno a pensare da ingegnere.&quot;
                </motion.blockquote>

                <motion.div className="docH_stats" {...fadeUp(0.36)}>
                  <StatBox value="150+" label="Studenti Formati" />
                  <StatBox value={2022} label="Inizio Docenza" />
                  <StatBox value="SJA" label="Steve Jobs Academy" isNumber={false} />
                  <StatBox value={7} label="Materie Insegnate" />
                </motion.div>

                <motion.div className="flex items-start" {...fadeUp(0.44)}>
                  <a href="/academy" className="btn-primary">Scopri il programma →</a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
