"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
  variant?: 'primary' | 'ghost' | 'outline';
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className = "", 
  ...props 
}: ButtonProps) => {
  const base = "px-6 py-3 rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover glow-accent",
    ghost: "text-text-muted hover:bg-surface hover:text-text-main",
    outline: "border border-border text-text-main hover:border-text-muted",
  };

  return (
    <motion.button 
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ y: -1 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
