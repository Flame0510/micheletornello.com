"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function IntroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !counterRef.current || !nameRef.current) return;
    const ctx = gsap.context(() => {
      const counter = { value: 0 };
      gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=100%", pin: true, scrub: 1 } })
      .to(counter, { value: 100, duration: 0.45, ease: "none", onUpdate: () => {
        if (counterRef.current) counterRef.current.textContent = String(Math.round(counter.value)).padStart(2, "0");
      }})
      .to(".intro-loading", { autoAlpha: 0, y: -50, duration: 0.1 }, 0.42)
      .fromTo(nameRef.current, { scale: 0.2, opacity: 0, letterSpacing: "0.25em" }, { scale: 1, opacity: 1, letterSpacing: "0.02em", duration: 0.5, ease: "power3.out" }, 0.5);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex h-screen items-center justify-center overflow-hidden bg-black text-[#F5F3EF]">
      <div className="intro-loading absolute inset-0 flex flex-col items-center justify-center gap-2 font-mono uppercase tracking-[0.2em]">
        <p className="text-lg">Loading...</p><p className="text-5xl"><span ref={counterRef}>00</span></p>
      </div>
      <h1 ref={nameRef} className="w-full px-[1vw] text-center text-[12vw] font-black uppercase leading-none tracking-[0.02em] text-[#F5F3EF] opacity-0">MICHELE TORNELLO</h1>
    </section>
  );
}
