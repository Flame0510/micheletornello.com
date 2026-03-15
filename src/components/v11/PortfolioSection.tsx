"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const projects = [
  { n: "01", title: "Rec Security Core", line: "Da caos operativo a macchina decisionale in tempo reale." },
  { n: "02", title: "Kastalia Engine", line: "Prenotazioni e pagamenti orchestrati come una control room." },
  { n: "03", title: "Ludelist Grid", line: "Una piattaforma che trasforma collezioni in community attive." },
  { n: "04", title: "Multiplayer Lab", line: "Esperienza realtime fluida, progettata con logica da prodotto." },
];

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: () => `+=${trackRef.current!.scrollWidth - window.innerWidth}`, pin: true, scrub: 1 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section ref={sectionRef} className="h-screen overflow-hidden bg-[#F5F3EF] text-[#0D0D0D]"><div ref={trackRef} className="flex h-full w-max">{projects.map((p) => <article key={p.n} className="flex h-screen w-screen flex-col justify-between border-r border-[#d7d2cb] px-[6vw] py-[8vh]"><p className="text-[14vw] font-black leading-none text-[#C41C1C]">{p.n}</p><div><h3 className="text-[5vw] font-black uppercase leading-[0.95]">{p.title}</h3><p className="mt-4 max-w-3xl text-2xl text-[#1f1f1f]">{p.line}</p></div></article>)}</div></section>;
}
