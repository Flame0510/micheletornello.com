"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    // Delay to let DOM settle
    setTimeout(addHover, 500);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mouseX, mouseY]);

  const size = hovering ? 20 : 12;
  const color = hovering ? "#5E6AD2" : "#707070";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Crosshair horizontal */}
      <motion.div
        className="absolute top-1/2 left-1/2"
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ width: size * 2, opacity: clicking ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Left arm */}
        <motion.div
          className="absolute right-1/2 top-1/2 h-px"
          style={{ background: color, marginRight: "3px", translateY: "-50%" }}
          animate={{ width: size, background: color }}
          transition={{ duration: 0.2 }}
        />
        {/* Right arm */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-px"
          style={{ background: color, marginLeft: "3px", translateY: "-50%" }}
          animate={{ width: size, background: color }}
          transition={{ duration: 0.2 }}
        />
        {/* Top arm */}
        <motion.div
          className="absolute bottom-1/2 left-1/2 w-px"
          style={{ background: color, marginBottom: "3px", translateX: "-50%" }}
          animate={{ height: size, background: color }}
          transition={{ duration: 0.2 }}
        />
        {/* Bottom arm */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-px"
          style={{ background: color, marginTop: "3px", translateX: "-50%" }}
          animate={{ height: size, background: color }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};
