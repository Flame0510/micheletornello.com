'use client';

import { motion } from 'framer-motion';
import { StatBox } from '@/components/ui/StatBox';
import { ENTERPRISE_SECTORS } from '@/lib/enterprise-data';

const stats = [
  { num: '5', lab: 'SETTORI INDUSTRY' },
  { num: '130+', lab: 'PAESI RAGGIUNTI' },
  { num: '2022+', lab: 'CORE ENTERPRISE' },
  { num: 'M+', lab: 'UTENTI ATTIVI' },
];

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="entG_section anchor-link">
      <div className="entG_container">
        <motion.div
          className="entG_main"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            {stats.map((stat, i) => (
              <motion.div
                key={stat.lab}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <StatBox
                  value={stat.num}
                  label={stat.lab}
                  isNumber={/\d/.test(stat.num) && stat.num !== '2022+'}
                  className="entG_stat"
                  valueClassName="entG_number"
                  labelClassName="entG_label"
                />
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
            {ENTERPRISE_SECTORS.join(' · ')}
          </div>
          <div className="entG_firma">
            // VERIFIED_BY: SYSTEM_ARCHITECT · SISTEMI DISTRIBUITI · PERIOD: 2022–PRESENT
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
