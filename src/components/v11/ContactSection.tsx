"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-inner", { y: 80, opacity: 0 }, { y: 0, opacity: 1, scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=70%", pin: true, scrub: 1 } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section ref={sectionRef} className="flex h-screen items-center justify-center bg-[#F5F3EF] text-[#0D0D0D]"><div className="contact-inner flex flex-col items-center gap-8 text-center opacity-0"><a href="mailto:info@micheletornello.com" className="text-[6vw] font-black leading-none hover:text-[#C41C1C]">info@micheletornello.com</a><div className="flex items-center gap-6 text-[#C41C1C]"><a href="#" aria-label="Instagram" className="transition-transform hover:scale-110"><Instagram size={34} /></a><a href="#" aria-label="LinkedIn" className="transition-transform hover:scale-110"><Linkedin size={34} /></a><a href="mailto:info@micheletornello.com" aria-label="Email" className="transition-transform hover:scale-110"><Mail size={34} /></a></div></div></section>;
}
