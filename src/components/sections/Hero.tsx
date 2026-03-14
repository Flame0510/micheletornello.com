"use client";

import type { CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

const SplitText = ({
  text,
  className,
  style,
  staggerDelay = 0.04,
  baseDelay = 0,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  staggerDelay?: number;
  baseDelay?: number;
}) => {
  const chars = text.split("");

  return (
    <span
      className={className}
      style={{ ...style, display: "inline-block" }}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0, y: 20 }}
          animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: baseDelay + staggerDelay * i,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
            willChange: "transform, clip-path, opacity",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const FloatingDot = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: x, top: y, width: size, height: size,
      background: "rgba(201,168,76,0.15)", filter: "blur(1px)",
    }}
    animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const FloatingLine = ({ x, y, rotation, delay }: { x: string; y: string; rotation: number; delay: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: x, top: y, width: 40, height: 1,
      background: "rgba(94,106,210,0.2)",
      transform: `rotate(${rotation}deg)`,
      transformOrigin: "left center",
    }}
    animate={{ opacity: [0.2, 0.5, 0.2], scaleX: [1, 1.3, 1] }}
    transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

export const Hero = () => {
  const { lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["center 0%", "center 25%"]);

  const content = {
    it: {
      role: "System Architect · Full-Stack Developer · Docente",
      tagline: "Costruisco sistemi.",
      tagline2: "Formo chi li costruirà.",
      scroll: "scorri",
    },
    en: {
      role: "System Architect · Full-Stack Developer · Teacher",
      tagline: "I build systems.",
      tagline2: "I train those who will build them.",
      scroll: "scroll",
    },
  };

  const t = content[lang];
  const stagger = 0.04;
  const micheleChars = "Michele".length;
  const tornelloChars = "Tornello".length;
  const tornelloDelay = micheleChars * stagger + 0.1;
  const fullNameEnd = tornelloDelay + tornelloChars * stagger;
  const taglineDelay = fullNameEnd + 0.6;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/desk-setup.png)",
          backgroundSize: "cover",
          backgroundPosition: bgY,
          zIndex: 0,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #060606 0%, rgba(6,6,6,0.5) 50%, rgba(6,6,6,0.3) 100%)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(6,6,6,0.7) 0%, transparent 20%)",
          zIndex: 1,
        }}
      />

      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <FloatingDot x="8%" y="20%" size={4} delay={0} />
        <FloatingDot x="85%" y="15%" size={3} delay={1.2} />
        <FloatingDot x="15%" y="70%" size={5} delay={2.1} />
        <FloatingDot x="90%" y="60%" size={3} delay={0.8} />
        <FloatingDot x="50%" y="85%" size={4} delay={1.7} />
        <FloatingLine x="5%" y="35%" rotation={-15} delay={0.5} />
        <FloatingLine x="80%" y="40%" rotation={25} delay={1.4} />
        <FloatingLine x="60%" y="15%" rotation={-45} delay={2.3} />
      </div>

      <div className="relative max-w-[1120px] mx-auto w-full px-6 md:px-12 pt-24" style={{ zIndex: 3 }}>
        <div
          className="leading-[0.9] tracking-tight mb-8 select-none font-display text-text-main"
          style={{ fontSize: "clamp(4rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}
          aria-label="Michele Tornello"
        >
          <div>
            <SplitText text="Michele" staggerDelay={stagger} />
          </div>
          <div>
            <SplitText text="Tornello" staggerDelay={stagger} baseDelay={tornelloDelay} />
            <motion.span
              className="inline-block ml-2"
              style={{ color: "#C9A84C", fontFamily: "var(--font-mono)", fontSize: "0.5em" }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: fullNameEnd + 0.6 }}
            >
              _
            </motion.span>
          </div>
        </div>

        <motion.div
          className="max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: taglineDelay, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-2xl md:text-3xl text-text-main font-medium leading-snug mb-1">{t.tagline}</p>
          <p className="text-2xl md:text-3xl text-text-muted font-medium leading-snug">{t.tagline2}</p>
        </motion.div>

        <motion.p
          className="font-mono text-sm text-text-muted tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: taglineDelay + 0.3 }}
        >
          {t.role}
        </motion.p>

        <motion.div
          className="mt-16 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: taglineDelay + 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">{t.scroll}</span>
          <motion.span
            className="text-text-muted"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};
