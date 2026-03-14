"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";
import { heroAnimation } from "../../lib/animations";
import { hero, bio } from "../../lib/data";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full -z-10" />

      <motion.div
        variants={heroAnimation}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl space-y-8"
      >
        <Badge variant="success" className="animate-pulse">
          {hero.badge}
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          {hero.tagline.split(" ").map((word, i) => (
            i === 3 ? <span key={i}><GradientText>{word}</GradientText> </span> : <span key={i}>{word} </span>
          ))}
        </h1>

        <p className="text-xl md:text-2xl text-text-muted font-medium">
          {bio.role}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="#portfolio">
            <Button className="w-full sm:w-auto gap-2">
              Esplora i lavori <ArrowRight size={18} />
            </Button>
          </Link>
          <Button variant="ghost" className="w-full sm:w-auto gap-2">
            <Download size={18} /> Scarica CV
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
