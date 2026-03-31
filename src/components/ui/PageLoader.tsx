"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = () => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [skip, setSkip] = useState(true); // default skip, check sessionStorage

  useEffect(() => {
    const visited = sessionStorage.getItem("mt_visited");
    if (visited) {
      setSkip(true);
      return;
    }
    setSkip(false);
    sessionStorage.setItem("mt_visited", "1");

    // Count from 0 to 100 in 700ms
    const start = performance.now();
    const duration = 700;
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Exponential ease
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setDone(true), 150);
      }
    };
    requestAnimationFrame(animate);
  }, []);

  if (skip) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ background: 'var(--bg-loader)' }}
          exit={{
            clipPath: ["circle(150% at 50% 50%)", "circle(0% at 50% 50%)"],
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.span
            className="font-mono tabular-nums select-none"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "var(--text-loader)",
              letterSpacing: "0.1em",
              fontVariantNumeric: "tabular-nums",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {String(count).padStart(2, "0")}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
