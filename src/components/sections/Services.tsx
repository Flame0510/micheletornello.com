"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger } from "../../lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

/* ── Services section — Cresci Style ── */
export const Services = () => {
  const { lang } = useLang();
  const t = translations.services[lang];
  const items = t.items;

  const serviceKeys = ["SERVICE_01", "SERVICE_02", "SERVICE_03"];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <SectionTitle prefix="// 02" title={t.title} subtitle={t.subtitle} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {items.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '1.25rem',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-card)',
              transition: 'box-shadow 0.2s, border-color 0.2s',
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card-hover)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-accent)';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
            }}
          >
            {/* Icon circle */}
            <div style={{
              width: 48, height: 48,
              borderRadius: '50%',
              background: 'var(--accent-primary-subtle)',
              border: '1px solid var(--border-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              color: 'var(--accent-primary)',
              fontSize: '1.1rem',
              fontWeight: 700,
              fontFamily: 'var(--font-body)',
            }}>
              0{i + 1}
            </div>

            {/* Header secundario */}
            <span style={{
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "var(--accent-primary)",
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              marginBottom: '0.25rem',
              display: 'block',
            }}>
              &gt; {serviceKeys[i]}
            </span>

            {/* Titolo */}
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)",
              color: "var(--text-primary)",
              lineHeight: 1.2,
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}>
              {service.title}
            </h3>

            {/* Problem — italic */}
            {"problem" in service && (
              <p style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontStyle: 'italic',
                marginBottom: '1rem',
                lineHeight: 1.5,
              }}>
                {(service as { problem: string }).problem}
              </p>
            )}

            {/* Divider */}
            <div style={{
              height: "1px",
              backgroundColor: "var(--border)",
              width: "100%",
              marginBottom: '1rem',
            }} />

            {/* Descrizione */}
            <p style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: '1.25rem',
            }}>
              {service.description}
            </p>

            {/* Deliverables */}
            {"deliverables" in service && (
              <div style={{ marginBottom: '1.25rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {(service as { deliverables: string[] }).deliverables.map(
                    (d, j) => (
                      <li
                        key={j}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: "0.85rem", color: "var(--text-secondary)" }}
                      >
                        <span style={{
                          color: "var(--accent-primary)",
                          fontSize: "0.7rem",
                          lineHeight: "1.6",
                          flexShrink: 0,
                          marginTop: '0.1rem',
                        }}>
                          ●
                        </span>
                        <span>{d}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* Processo */}
            {"process" in service && (
              <div style={{ marginBottom: '1.5rem', marginTop: 'auto' }}>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem',
                  fontFamily: 'var(--font-body)', fontSize: "0.7rem", color: "var(--text-muted)"
                }}>
                  {(service as { process: string[] }).process.map(
                    (step, j, arr) => (
                      <span key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{
                          border: "1px solid var(--border)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: '0.35rem',
                          color: "var(--text-secondary)",
                          background: 'var(--bg-base)',
                        }}>
                          {step}
                        </span>
                        {j < arr.length - 1 && (
                          <span style={{ color: "var(--accent-primary)", opacity: 0.5 }}>→</span>
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* CTA */}
            {"cta" in service && (
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: '1rem', marginTop: 'auto' }}>
                <a
                  href="#contatto"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    fontSize: "0.88rem",
                    color: "var(--accent-primary)",
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-primary-dark)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                >
                  {(service as { cta: string }).cta}
                  <span style={{ fontSize: "0.95rem" }}>→</span>
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
