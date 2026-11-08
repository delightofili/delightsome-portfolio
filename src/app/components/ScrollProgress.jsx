"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  // scrollYProgress goes from 0 at the top of the page to 1 at the bottom
  const { scrollYProgress } = useScroll();
  // the spring makes the bar glide instead of jumping on every wheel tick
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand"
    />
  );
}
