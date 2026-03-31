"use client";
import { motion } from "framer-motion";
import { RevealLine } from "./RevealLine";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  prefix?: string;
  className?: string;
}

export const SectionTitle = ({ title, subtitle, prefix, className = '' }: SectionTitleProps) => (
  <div className={`mb-12 md:mb-16 ${className}`}>
    {prefix && (
      <p className="font-mono-label mb-3" style={{ color: "var(--text-muted)" }}>
        {prefix}
      </p>
    )}
    <RevealLine />
    <motion.h2
      className="font-display text-text-main mb-4"
      style={{
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        letterSpacing: "-0.02em",
        lineHeight: 1.0,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        className="text-text-muted text-lg leading-relaxed max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
