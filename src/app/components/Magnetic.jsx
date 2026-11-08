"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// wraps any button or link and pulls it gently toward the mouse
export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    // distance from the centre of the element, scaled down by strength
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  // snap back to the resting place when the mouse leaves
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
