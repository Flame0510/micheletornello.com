"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const items = [
  { logo: "RTL", title: "Intervento su tecnologia e formazione", year: "2025" },
  { logo: "UNICT", title: "Seminario su sviluppo sistemi scalabili", year: "2024" },
  { logo: "TEDx", title: "Talk: dalla complessità al metodo", year: "2023" },
];

export function PressSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".press-card");
      const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top top", end: `+=${cards.length * 100}%`, pin: true, scrub: 1 } });
      cards.forEach((card, idx) => {
        if (idx === 0) return;
        tl.fromTo(card, { xPercent: 100 }, { xPercent: 0, duration: 1 }, idx - 0.2);
        tl.to(cards[idx - 1], { scaleX: 0.7, xPercent: -22, opacity: 0.5, duration: 1 }, idx - 0.2);
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#0D0D0D] text-[#F5F3EF]">{items.map((item, i) => <article key={item.logo} className="press-card absolute inset-0 flex h-full w-full origin-left flex-col justify-between border-l-8 border-[#C41C1C] bg-[#111111] px-[6vw] py-[8vh]" style={{ zIndex: i + 1 }}><p className="text-[14vw] font-black leading-none text-[#C41C1C]">{item.logo}</p><div><h3 className="text-5xl font-bold uppercase md:text-7xl">{item.title}</h3><p className="mt-3 text-2xl text-[#b8b3ac]">{item.year}</p></div></article>)}</section>;
}
