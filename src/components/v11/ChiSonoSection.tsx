"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function ChiSonoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { yPercent: 10 }, { yPercent: -40, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=130%", pin: true, scrub: 1 } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden bg-[#0D0D0D] text-[#F5F3EF]"><div className="grid h-full grid-cols-1 md:grid-cols-2"><div className="relative h-[50vh] md:h-full"><Image src="/michele-profile.png" alt="Michele Tornello" fill className="object-cover" sizes="50vw" priority /></div><div className="relative h-full border-l-4 border-[#C41C1C] px-8 py-10 md:px-12"><div ref={contentRef} className="space-y-8"><h2 className="text-[10vw] font-black uppercase leading-[0.85] md:text-[6vw]">Chi Sono</h2><p className="max-w-xl text-xl leading-relaxed text-[#d7d2cb] md:text-2xl">Ingegnere informatico, builder di sistemi digitali complessi, formatore in aula. Lavoro dove strategia, architettura e codice devono parlare la stessa lingua.</p><p className="max-w-xl text-lg leading-relaxed text-[#c8c3bc] md:text-xl">Negli ultimi anni ho guidato prodotti da zero a produzione: stack full-stack, processi tecnici, team operativi. Non inseguo trend: progetto strutture che reggono.</p><p className="max-w-xl text-lg leading-relaxed text-[#c8c3bc] md:text-xl">Oggi costruisco e insegno lo stesso metodo: visione netta, esecuzione disciplinata, risultati misurabili.</p></div></div></div></section>
  );
}
