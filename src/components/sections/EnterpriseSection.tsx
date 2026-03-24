'use client';

import { motion } from 'framer-motion';

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="entG_section anchor-link">
      <div className="entG_container">
        <motion.div
          className="entG_main"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="entG_left">
            <motion.h2
              className="entG_headline"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              Sistemi reali.<br />
              Scala reale.
            </motion.h2>
            <motion.p
              className="entG_body"
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              Ho contribuito a prodotti digitali per clienti enterprise internazionali nei settori Smart Home/IoT, Healthcare IT, Cloud Networking, Food-Tech ed Energia — da startup a multinazionali con milioni di utenti.
            </motion.p>
          </div>

          <div className="entG_stats">
            {[
              { num: '5', lab: 'SETTORI INDUSTRY' },
              { num: '130+', lab: 'PAESI RAGGIUNTI' },
              { num: '2022–24', lab: 'CORE ENTERPRISE' },
              { num: 'M+', lab: 'UTENTI ATTIVI' }
            ].map((stat, i) => (
              <motion.div
                key={stat.lab}
                className="entG_stat"
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <span className="entG_number">{stat.num}</span>
                <span className="entG_label">{stat.lab}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.footer
          className="entG_footer"
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="entG_sectors">
            Smart Home / IoT · Healthcare IT · Cloud Networking · Food-Tech · Energia & Infrastrutture
          </div>
          <div className="entG_firma">
            // VERIFIED_BY: SYSTEM_ARCHITECT · SISTEMI DISTRIBUITI · PERIOD: 2022–2024
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
