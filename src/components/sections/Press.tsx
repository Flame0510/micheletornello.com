"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import { pressItems } from "@/lib/press-data";

export const Press = () => {
  const { lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    const init = async () => {
      const { gsap } = await import("@/lib/gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!trackRef.current || !sectionRef.current) return;
      const cards = trackRef.current.querySelectorAll(".press-card");
      const totalWidth = (cards.length - 1) * (cards[0] as HTMLElement).offsetWidth;

      ctx = gsap.context(() => {
        gsap.to(trackRef.current, {
          x: () => -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });
      });
    };
    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden"
      style={{ background: "var(--bg-loader)" }}
      aria-label="Riconoscimenti — scorri orizzontalmente per vedere tutti"
    >
      <div className="px-6 pt-16 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>02 — Press</span>
      </div>
      <div ref={trackRef} className="flex" style={{ width: "max-content", paddingLeft: "6rem" }}>
        {pressItems.map((item, i) => (
          <div
            key={i}
            className="press-card shrink-0 flex flex-col justify-end p-12"
            style={{
              width: "60vw",
              height: "70vh",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              marginRight: "2rem",
            }}
          >
            <span className="font-mono text-xs mb-4" style={{ color: "var(--color-brand-alt)" }}>{item.year}</span>
            <p className="font-display mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--text-primary)" }}>{item.label}</p>
            <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>{item.title[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
