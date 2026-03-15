import { useRef, useCallback, type MutableRefObject } from "react";

export const useMagneticEffect = (strength = 0.3) => {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      ref.current.style.transition = "transform 0.1s ease";
    },
    [strength],
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
  }, []);

  const bind = useCallback(
    (el: HTMLElement | null) => {
      if (!el) return;
      (ref as MutableRefObject<HTMLElement | null>).current = el;
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    [handleMouseMove, handleMouseLeave],
  );

  return { ref, bind };
};
