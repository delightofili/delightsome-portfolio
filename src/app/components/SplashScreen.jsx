"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function SplashScreen({ onDone }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 1300; // ms for the counter to reach 100
    const start = performance.now();
    let frame;

    // requestAnimationFrame keeps the count smooth and in sync with the screen
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out: fast start, soft finish
      setCount(Math.round(eased * 100));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250); // short pause on 100 before leaving
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    // onExitComplete fires once the curtain has fully left the screen
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div
          key="splash"
          // the whole orange sheet slides up and away like a curtain
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-brand p-6 text-white sm:p-10"
        >
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em]">
            <span>Delightsome</span>
            <span>Portfolio 2026</span>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              Health tech. Fullstack.
            </motion.p>
          </div>

          <div className="flex items-end justify-between">
            <span className="text-sm font-medium">Loading the good stuff</span>
            {/* tabular-nums stops the numbers from jumping in width */}
            <span className="font-display text-[22vw] font-bold leading-[0.8] tabular-nums sm:text-[14vw]">
              {count}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
