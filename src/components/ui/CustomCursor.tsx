"use client";
import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.35);
      current.current.y = lerp(current.current.y, pos.current.y, 0.35);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${current.current.x - 4}px, ${current.current.y - 4}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setHovered(true);
      }
    };
    const onMouseOut = () => setHovered(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full transition-all duration-200"
      style={{
        width: hovered ? 32 : 8,
        height: hovered ? 32 : 8,
        background: hovered ? "transparent" : "#C9A84C",
        border: hovered ? "1px solid #C9A84C" : "none",
        marginLeft: hovered ? -12 : 0,
        marginTop: hovered ? -12 : 0,
        mixBlendMode: "normal",
        willChange: "transform",
      }}
    />
  );
};
