"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export const DocenzaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=80%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        }).from(textRef.current, { opacity: 0, y: 40, duration: 1 });
      });
    };
    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/academy-class.jpg" alt="Steve Jobs Academy" fill style={{ objectFit: "cover", opacity: 0.15 }} />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16">
        <div style={{ borderLeft: "3px solid #C41C1C", paddingLeft: "2rem" }}>
          <p style={{ color: "#C41C1C", fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Steve Jobs Academy Catania · Dal 2024
          </p>
          <div ref={textRef}>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontFamily: "Instrument Serif, serif", color: "#F5F3EF", lineHeight: 1.1, marginBottom: "2rem" }}>
              Da studente<br />a docente.
            </h2>
            <p style={{ color: "#888", fontFamily: "JetBrains Mono, monospace", fontSize: "1rem", lineHeight: 1.8, maxWidth: "560px" }}>
              Nel 2020 ero in aula come studente. Nel 2024 sono tornato come docente.<br />
              400+ sviluppatori formati. Architettura di sistemi, problem solving ingegneristico, mentalità da builder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
