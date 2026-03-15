"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number; // ms total
  delay?: number; // ms before start
}

export const ScrambleText = ({ text, className, style, duration = 600, delay = 0 }: ScrambleTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const timeout = setTimeout(() => {
      const start = performance.now();
      const resolve = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const resolvedChars = Math.floor(progress * text.length);

        const scrambled = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolvedChars) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplayed(scrambled);
        if (progress < 1) requestAnimationFrame(resolve);
        else setDisplayed(text);
      };
      requestAnimationFrame(resolve);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, duration, delay]);

  return (
    <span ref={ref} className={className} style={style} aria-label={text}>
      {displayed}
    </span>
  );
};
