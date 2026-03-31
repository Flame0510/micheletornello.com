'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';
import Image from 'next/image';

function useCounter(target: number, isInView: boolean, duration = 1200) {
  const [count, setCount] = useState(target);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    setCount(0);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);
  return count;
}

function StatBox({ value, label, isNumber = true }: { value: string | number, label: string, isNumber?: boolean }) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, { once: true });
  const numericValue = typeof value === 'number' ? value : parseInt(value.toString().replace(/\D/g, ''));
  const count = useCounter(numericValue, isInView);

  return (
    <div ref={ref} className="docH_stat">
      <span className="docH_statVal">
        {isNumber ? (typeof value === 'string' && value.includes('+') ? `${count}+` : count) : value}
      </span>
      <span className="docH_statLab">{label}</span>
    </div>
  );
}

export default function AcademySection() {
  return (
    <section id="academy" className="docH_section">
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div className="docH_container">
          <div className="docH_grid">
            <div className="docH_visual">
              <div className="docH_imageWrapper">
                <Image src="/academy-class.jpg" alt="Michele Tornello in aula" className="docH_img" fill style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }} />
                <div className="docH_imageOverlay"></div>
              </div>
              <div className="docH_imgMeta">
                <span className="docH_mono">EST. 2022</span>
                <span className="docH_mono">SJA · CATANIA</span>
              </div>
            </div>

            <div className="docH_content">
              <header className="docH_header">
                <span className="docH_label docH_mono">// LA MISSIONE</span>
                <h2 className="docH_title">
                  L&apos;eredità non è il codice.<br />
                  È la <em>forma mentis</em>.
                </h2>
              </header>

              <div className="docH_body">
                <p className="docH_text">
                  La docenza non è trasferimento di sintassi, ma architettura del pensiero. Nelle aule della Steve Jobs Academy, guido la prossima generazione di sviluppatori verso una comprensione sistemica della tecnologia.
                </p>

                <blockquote className="docH_quote">
                  &quot;Non insegno a programmare. Insegno a pensare da ingegnere.&quot;
                </blockquote>

                <div className="docH_stats">
                  <StatBox value="150+" label="Studenti Formati" />
                  <StatBox value={2022} label="Inizio Docenza" />
                  <StatBox value="SJA" label="Steve Jobs Academy" isNumber={false} />
                  <StatBox value={7} label="Materie Insegnate" />
                </div>

                <a href="/academy" className="docH_cta">Scopri il programma →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
