'use client';

import { motion } from 'framer-motion';
import { StatBox } from '@/components/ui/StatBox';
import { ENTERPRISE_SECTORS, ENTERPRISE_CASE_STUDIES } from '@/lib/enterprise-data';

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

        <div className="entG_cases">
          {ENTERPRISE_CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={i}
              className="entG_case_card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="entG_case_meta">
                <span className="entG_case_category">{cs.category}</span>
                <span className="entG_case_scale">{cs.scale}</span>
              </div>
              <h3 className="entG_case_title">{cs.title}</h3>
              <p className="entG_case_desc">{cs.description}</p>
              <div className="entG_case_stack">
                {cs.stack.map((tag) => (
                  <span key={tag} className="entG_case_tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
