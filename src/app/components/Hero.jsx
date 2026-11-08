"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { useIntroDone } from "./Providers";

const roles = [
  "Digital health engineer",
  "Fullstack developer",
  "Public health student",
  "Product builder",
];

// each line of the headline; "accent" words turn orange
const lines = [
  [{ t: "I build software" }],
  [{ t: "for " }, { t: "health", accent: true }],
  [{ t: "& everything else." }],
];

const chips = [
  { label: "Offline first", className: "-left-10 top-8", depth: 30 },
  { label: "FHIR + DHIS2", className: "-right-12 top-24", depth: -40 },
  { label: "Next.js · NestJS", className: "-left-16 bottom-20", depth: -25 },
  { label: "PostgreSQL", className: "-right-6 bottom-6", depth: 35 },
];

export default function Hero() {
  const ready = useIntroDone();
  const [roleIndex, setRoleIndex] = useState(0);

  // mouse position relative to the centre of the hero, from -0.5 to 0.5
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(my, { stiffness: 60, damping: 20 });

  // the photo tilts a little toward the mouse
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  // parent variant staggers its children, so the headline lines rise one after the other
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
  };
  const rise = {
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };
  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="relative flex min-h-svh items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-12"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]"
      >
        <div>
          <motion.div
            variants={fade}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-neutral-600"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            Open to roles and freelance work
          </motion.div>

          <motion.p
            variants={fade}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500"
          >
            Hi, I&apos;m Chukwunonso Ofili
          </motion.p>

          <h1 className="font-display text-[clamp(2.75rem,6.2vw,6.25rem)] font-bold leading-[0.92] tracking-[-0.045em]">
            {lines.map((line, i) => (
              // overflow-hidden on each line is the mask the words rise up through
              <span
                key={i}
                className="-mb-[0.08em] block overflow-hidden pb-[0.14em]"
              >
                <motion.span variants={rise} className="block">
                  {line.map((part) =>
                    part.accent ? (
                      <span
                        key={part.t}
                        className="relative inline-block text-brand"
                      >
                        {part.t}
                        {/* hand drawn underline that draws itself after the words land */}
                        <svg
                          viewBox="0 0 300 20"
                          className="absolute -bottom-1 left-0 h-[0.18em] w-full"
                          aria-hidden
                        >
                          <motion.path
                            d="M3 14 C 70 4, 150 4, 297 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: ready ? 1 : 0 }}
                            transition={{
                              duration: 0.9,
                              delay: 0.8,
                              ease: "easeInOut",
                            }}
                          />
                        </svg>
                      </span>
                    ) : (
                      <span key={part.t}>{part.t}</span>
                    ),
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* rotating role, each one slides up and out */}
          <motion.div
            variants={fade}
            className="mt-6 flex items-center gap-3 text-lg font-semibold"
          >
            <span className="h-px w-10 bg-ink" />
            <span className="relative h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 28 }}
                  animate={{ y: 0 }}
                  exit={{ y: -28 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            variants={fade}
            className="mt-4 max-w-xl text-lg leading-8 text-neutral-600"
          >
            Public health student turned software developer. I build offline
            first tools for Nigerian clinics, hospital systems, and fullstack
            products from the database to the deploy.
          </motion.p>

          <motion.div
            variants={fade}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                className="group flex items-center gap-3 rounded-full bg-brand px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                See my work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="flex items-center gap-3 rounded-full border-2 border-ink px-8 py-[14px] font-semibold transition-colors hover:bg-ink hover:text-white"
              >
                Let&apos;s talk
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* photo side */}
        <motion.div
          variants={fade}
          className="relative mx-auto mt-4 h-[300px] w-[235px] sm:h-[400px] sm:w-[310px] lg:mt-0"
          style={{ perspective: 1000 }}
        >
          {/* orange block sitting behind the photo */}
          <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[32px] bg-brand" />

          <motion.div
            style={{ rotateX, rotateY }}
            className="relative h-full w-full overflow-hidden rounded-[32px] border-4 border-white bg-neutral-200 shadow-[0_30px_60px_rgba(15,15,15,0.15)]"
          >
            <Image
              src="/profile.png"
              alt="Chukwunonso Ofili"
              fill
              priority
              sizes="(max-width: 640px) 235px, 310px"
              className="object-cover"
            />
          </motion.div>

          {/* floating chips, each moves a different amount with the mouse for depth */}
          {chips.map((chip, i) => (
            <Chip
              key={chip.label}
              chip={chip}
              x={smoothX}
              y={smoothY}
              index={i}
            />
          ))}

          {/* spinning badge */}
          <div className="absolute -bottom-8 -left-8 h-24 w-24 sm:-bottom-10 sm:-left-12 sm:h-28 sm:w-28">
            <motion.svg
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="h-full w-full"
            >
              <defs>
                <path
                  id="circle"
                  d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                />
              </defs>
              <circle cx="50" cy="50" r="50" fill="#0f0f0f" />
              <text
                fill="#fff"
                fontSize="10.5"
                fontWeight="700"
                letterSpacing="2.4"
              >
                <textPath href="#circle">DIGITAL HEALTH • FULLSTACK •</textPath>
              </text>
            </motion.svg>
            <span className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-brand">
              +
            </span>
          </div>
        </motion.div>
      </motion.div>

      <a
        href="#work"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </a>
    </section>
  );
}

function Chip({ chip, x, y, index }) {
  // depth decides how far, and in which direction, the chip drifts
  const cx = useTransform(x, [-0.5, 0.5], [-chip.depth, chip.depth]);
  const cy = useTransform(y, [-0.5, 0.5], [-chip.depth, chip.depth]);

  return (
    <motion.div
      style={{ x: cx, y: cy }}
      className={`absolute z-10 hidden sm:block ${chip.className}`}
    >
      {/* a slow bob on top of the mouse drift keeps them alive when the mouse is still */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(15,15,15,0.08)]"
      >
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand" />
        {chip.label}
      </motion.div>
    </motion.div>
  );
}
