"use client";
import { motion } from "framer-motion";

export const RevealLine = () => (
  <motion.div
    className="h-px bg-accent mb-4"
    style={{ width: 60, originX: 0 }}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, amount: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  />
);
