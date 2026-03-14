"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  spotlight?: boolean;
}

export const Card = ({ children, className = "", hoverEffect = true, spotlight = true }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const background = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(200px circle at ${x}px ${y}px, rgba(94,106,210,0.06), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={spotlight ? handleMouseMove : undefined}
      whileHover={hoverEffect ? { y: -4 } : {}}
      className={`relative bg-surface border border-border rounded-xl overflow-hidden group ${className}`}
      style={{ transition: "border-color 0.2s" }}
    >
      {/* Spotlight overlay */}
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-xl"
          style={{ background }}
        />
      )}

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="p-6 relative z-20">
        {children}
      </div>
    </motion.div>
  );
};
