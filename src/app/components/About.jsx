"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "motion/react";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const stats = [
  { value: 4, suffix: "+", label: "Years writing code" },
  { value: 8, suffix: "", label: "Projects shipped" },
  { value: 2, suffix: "", label: "Health products" },
  { value: 4, suffix: "", label: "Languages in Prima" },
];

const socials = [
  { href: "https://github.com/delightofili", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/delightofili",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/DelightOfili", icon: FaXTwitter, label: "X" },
  {
    href: "https://www.tiktok.com/@delightsomeee",
    icon: FaTiktok,
    label: "TikTok",
  },
];

export default function About() {
  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    // lg:h-svh makes the section exactly one screen tall on laptops, so it fits without scrolling inside it
    <section
      id="about"
      className="flex items-center bg-ink px-5 py-28 text-white sm:px-8 lg:h-svh lg:min-h-[700px] lg:px-12 lg:py-0"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[300px_1fr] lg:gap-20 lg:pt-16">
        {/* smaller photo so everything sits on one screen */}
        <motion.div
          {...fade()}
          className="relative mx-auto w-[240px] lg:w-[300px]"
        >
          <div className="absolute inset-0 -rotate-6 rounded-[28px] bg-brand" />
          <motion.div
            whileHover={{ rotate: -2, scale: 1.02 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] border-4 border-white"
          >
            <Image
              src="/profile.png"
              alt="Chukwunonso Ofili"
              fill
              sizes="300px"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-bold text-ink">
            Enugu, Nigeria 🇳🇬
          </div>
        </motion.div>

        <div>
          <motion.p
            {...fade(0.05)}
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-brand"
          >
            <span className="h-px w-8 bg-brand" /> About me
          </motion.p>

          <motion.h2
            {...fade(0.1)}
            className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl xl:text-6xl"
          >
            Public health mind.{" "}
            <span className="text-brand">Engineer&apos;s hands.</span>
          </motion.h2>

          <motion.div
            {...fade(0.15)}
            className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-white/75 xl:text-lg xl:leading-8"
          >
            <p>
              I&apos;m Chukwunonso, Nonso for short, a final year public health
              student and a self taught fullstack developer. I&apos;ve been
              writing code since 2022 and I build in public.
            </p>
            <p>
              Studying health showed me where clinics struggle: lost paper
              records, no network, no time. So I build for that, like Prima for
              primary health centres and MedCore for hospitals. I also build
              fullstack products of every kind, from fintech ledgers to team
              tools.
            </p>
          </motion.div>

          {/* animated counters */}
          <motion.div
            {...fade(0.2)}
            className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-ink p-5">
                <p className="font-display text-4xl font-bold text-brand">
                  <Counter to={s.value} />
                  {s.suffix}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...fade(0.25)}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <p className="text-sm text-white/60">
              Beyond code: God lover, piano player, problem solver.
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:-translate-y-1 hover:border-brand hover:bg-brand"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// counts from 0 to the target number the first time it scrolls into view
function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value}</span>;
}
