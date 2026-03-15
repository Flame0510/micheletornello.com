"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export const Press = () => {
  const { lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
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

  const pressItems = [
    { label: "RTL 102.5", title: lang === "it" ? "Intervista in diretta nazionale" : "National live interview", year: "2024" },
    { label: "Università di Catania", title: lang === "it" ? "Speaker React Native" : "React Native Speaker", year: "2024" },
    { label: "TEDx Catania", title: lang === "it" ? "Staff organizzativo" : "Organizing Staff", year: "2023" },
  ];

  return (
    <section ref={sectionRef} className="overflow-hidden" style={{ background: "#060606" }}>
      <div className="px-6 pt-16 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#707070" }}>02 — Press</span>
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
            <span className="font-mono text-xs mb-4" style={{ color: "#C9A84C" }}>{item.year}</span>
            <p className="font-display mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#E8E8E8" }}>{item.label}</p>
            <p className="font-mono text-sm" style={{ color: "#707070" }}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
