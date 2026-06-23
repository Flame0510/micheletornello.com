'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function SJAWatermark() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-35vh']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.div
      aria-hidden
      className="fixed pointer-events-none select-none"
      style={{
        right: '-4rem',
        top: '50%',
        translateY: '-50%',
        y,
        scale,
        opacity: 0.045,
        zIndex: 0,
      }}
    >
      <Image src="/sja-logo.png" alt="" width={420} height={420} className="object-contain" />
    </motion.div>
  );
}
