"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
const sentence = "Formo chi li costruirà.";

export function TaglineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const typeRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    if (!sectionRef.current || !typeRef.current) return;
    const ctx = gsap.context(() => {
      const state = { length: 0 };
      gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=80%", pin: true, scrub: 1 } })
        .from(".tagline-line-1", { yPercent: 60, opacity: 0, duration: 0.35 })
        .to(state, { length: sentence.length, duration: 0.65, ease: "none", onUpdate: () => {
          if (typeRef.current) typeRef.current.textContent = sentence.slice(0, Math.floor(state.length));
        }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section ref={sectionRef} className="flex h-screen items-center bg-[#F5F3EF] px-[5vw] text-[#C41C1C]"><div className="w-full"><p className="tagline-line-1 text-[12vw] font-black uppercase leading-[0.9]">Costruisco sistemi.</p><p ref={typeRef} className="mt-4 min-h-[1.2em] text-[6vw] font-semibold leading-[0.95]" /></div></section>;
}
