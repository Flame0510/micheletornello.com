"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";
import { heroAnimation } from "../../lib/animations";
import { bio } from "../../lib/data";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Hero = () => {
  const { lang } = useLang();
  const t = translations.hero[lang];

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Asymmetric background glows — not centered blobs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 blur-[140px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-[300px] h-[300px] bg-accent/8 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <motion.div
        variants={heroAnimation}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl space-y-8"
      >
        <Badge variant="outline" className="font-mono text-xs tracking-widest uppercase">
          {t.badge}
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08]">
          {t.tagline.split(" ").map((word, i) =>
            i === 4 ? (
              <span key={i}>
                <GradientText>{word}</GradientText>{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            ),
          )}
        </h1>

        <p className="text-xl md:text-2xl text-text-muted font-medium">{bio.role}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="#portfolio">
            <Button className="w-full sm:w-auto gap-2">
              {t.ctaPrimary ?? (lang === "it" ? "Vedi i progetti" : "See projects")} <ArrowRight size={18} />
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="ghost" className="w-full sm:w-auto gap-2">
              <FileText size={18} /> {t.ctaSecondary ?? (lang === "it" ? "Contattami" : "Get in touch")}
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
