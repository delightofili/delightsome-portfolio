"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Fullstack Developer.",
  "Product Builder.",
  "Problem Solver.",
  "Creative Developer.",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-neutral-50 text-neutral-950"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-20 pt-28 sm:px-10 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-7 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-500 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-neutral-400 sm:text-sm"
            >
              Hello There!, I&apos;m Chukwunonso
            </motion.p>

            {/* Main heading */}
            <div className="relative">
              {/* Changing role */}
              <div className="relative mt-2 h-[clamp(4.2rem,7vw,7rem)] w-[min(90vw,750px)] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roles[roleIndex]}
                    initial={{
                      opacity: 0,
                      y: 65,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -65,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 text-[clamp(3.3rem,5.5vw,6rem)] font-medium leading-[0.9] tracking-[-0.07em] text-neutral-400"
                  >
                    {roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mt-9 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg sm:leading-8"
            >
              I build thoughtful web applications and digital products from idea
              to deployment — combining clean interfaces, solid backend systems,
              and thoughtful user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-9 flex items-center gap-3"
            >
              <Link
                href="/work"
                className="group flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-medium !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
              >
                View my work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/#contact"
                className="group flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-7 py-4 text-sm font-medium text-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300"
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative h-[230px] w-[180px] sm:h-[255px] sm:w-[200px]">
              {/* Back card */}
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: -16, y: 15 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 rotate-[-6deg] rounded-2xl border border-neutral-200 bg-neutral-100"
              />

              {/* Front image card */}
              <motion.div
                initial={{ opacity: 0, rotate: 0, y: 10 }}
                animate={{ opacity: 1, rotate: 6, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  rotate: 3,
                  y: -5,
                  transition: {
                    duration: 0.35,
                  },
                }}
                className="absolute inset-0 overflow-hidden rounded-2xl border-4 border-white bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <img
                  src="/profile.png"
                  alt="Chukwunonso Ofili"
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>

              {/* Name tag */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                className="absolute -bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs font-medium text-neutral-500 shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
              >
                Delightsome
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
          className="absolute bottom-4  left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-[9px] uppercase tracking-[0.35em]">
            Scroll to explore
          </span>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDownRight size={14} className="rotate-45" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
