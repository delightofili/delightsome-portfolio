"use client";

import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={onComplete}
    >
      {/* TOP PAPER */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#f5f1eb]"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1.25,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.25,
        }}
      >
        {/* Torn brown edge */}
        <div
          className="absolute bottom-[-7px] left-0 w-full h-[15px]"
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent 0%,
                #3b2a20 4%,
                #4a3326 8%,
                #34251d 13%,
                #4a3326 18%,
                #33231b 23%,
                #4a3326 28%,
                #35251d 34%,
                #4a3326 40%,
                #32221a 46%,
                #4a3326 52%,
                #35251d 58%,
                #4a3326 64%,
                #34241c 70%,
                #4a3326 76%,
                #33231b 82%,
                #4a3326 88%,
                #35251d 94%,
                transparent 100%
              )
            `,
            clipPath:
              "polygon(0 45%, 4% 60%, 8% 35%, 12% 65%, 16% 42%, 20% 58%, 24% 30%, 28% 60%, 32% 40%, 36% 68%, 40% 35%, 44% 55%, 48% 30%, 52% 65%, 56% 42%, 60% 58%, 64% 35%, 68% 62%, 72% 38%, 76% 58%, 80% 32%, 84% 65%, 88% 40%, 92% 60%, 96% 35%, 100% 50%, 100% 100%, 0 100%)",
          }}
        />
      </motion.div>

      {/* BOTTOM PAPER */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#f5f1eb]"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{
          duration: 1.25,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.25,
        }}
      >
        {/* Torn brown edge */}
        <div
          className="absolute top-[-7px] left-0 w-full h-[15px]"
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent 0%,
                #3b2a20 4%,
                #4a3326 8%,
                #34251d 13%,
                #4a3326 18%,
                #33231b 23%,
                #4a3326 28%,
                #35251d 34%,
                #4a3326 40%,
                #32221a 46%,
                #4a3326 52%,
                #35251d 58%,
                #4a3326 64%,
                #34241c 70%,
                #4a3326 76%,
                #33231b 82%,
                #4a3326 88%,
                #35251d 94%,
                transparent 100%
              )
            `,
            clipPath:
              "polygon(0 55%, 4% 40%, 8% 65%, 12% 35%, 16% 58%, 20% 42%, 24% 70%, 28% 40%, 32% 60%, 36% 32%, 40% 65%, 44% 45%, 48% 70%, 52% 35%, 56% 58%, 60% 42%, 64% 65%, 68% 38%, 72% 62%, 76% 42%, 80% 68%, 84% 35%, 88% 60%, 92% 40%, 96% 65%, 100% 50%, 100% 0, 0 0)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
