"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Hero = () => {
  const { lang } = useLang();
  const t = translations.hero[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const init = async () => {
      const { gsap } = await import("@/lib/gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.from(word1Ref.current, { opacity: 0, y: 60, duration: 1 })
          .from(word2Ref.current, { opacity: 0, x: 100, duration: 1 }, "-=0.3")
          .from(taglineRef.current, { opacity: 0, y: 30, duration: 1 }, "-=0.3")
          .from(nameRef.current, { opacity: 0, scale: 0.8, y: 40, duration: 1 }, "-=0.3");
      });
    };
    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="heroSection relative flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/desk-setup.png')",
        backgroundSize: "cover",
        backgroundPosition: "30% center",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(4,4,4,0.88)" }} />
      <div className="relative z-10 px-6 md:px-16 max-w-[1120px] mx-auto w-full">
        <div ref={word1Ref} className="font-display leading-none mb-2" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#E8E8E8" }}>
          Costruisco sistemi.
        </div>
        <div ref={word2Ref} className="font-display leading-none mb-8" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "var(--color-brand-alt)" }}>
          Formo chi li costruirà.
        </div>
        <div ref={taglineRef} className="font-mono text-sm mb-6" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
          System Architect · Docente · Catania
        </div>
        <div ref={nameRef} className="font-display" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#E8E8E8", opacity: 0.4 }}>
          Michele Tornello
        </div>
      </div>
    </section>
  );
};
