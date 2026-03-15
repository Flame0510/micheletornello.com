"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const lines = [
  "2018 — Prime architetture in produzione.",
  "2020 — Full-stack delivery per startup e PMI.",
  "2022 — Ottimizzazione processi e sistemi mission-critical.",
  "2024 — Aula, mentoring, metodo replicabile.",
  "2026 — THE MACHINE: prodotto, formazione, impatto.",
];

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const crawlRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!sectionRef.current || !crawlRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(crawlRef.current, { yPercent: 55 }, { yPercent: -120, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=150%", pin: true, scrub: 1 } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#6a1414] text-[#F5F3EF] [perspective:800px]"><div ref={crawlRef} className="absolute left-1/2 top-full w-[85vw] -translate-x-1/2 text-center [transform:rotateX(30deg)]"><p className="mb-10 text-[5vw] font-black uppercase leading-none">Timeline</p><div className="space-y-10 text-[3vw] font-semibold leading-tight md:text-[2.5vw]">{lines.map((line) => <p key={line}>{line}</p>)}</div></div></section>;
}
