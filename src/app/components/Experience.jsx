"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { SectionHeading } from "./Work";

const journey = [
  {
    period: "2026 · Present",
    title: "Founder & Developer",
    place: "Prima",
    tag: "Digital health",
    text: "Building an offline first patient register for Primary Health Centres in Nigeria, in public, from Enugu. Sync, privacy, payments, four languages, and pilot clinics next.",
  },
  {
    period: "2026",
    title: "Full Stack Development Intern",
    place: "Internmo",
    tag: "Internship",
    text: "Built MedCore HMS, a multi tenant hospital management system with NestJS, Next.js, PostgreSQL and Redis, covering reception to billing.",
  },
  {
    period: "2022 · Present",
    title: "Fullstack Developer",
    place: "Independent",
    tag: "Freelance & products",
    text: "Shipping web products end to end: fintech ledgers, team tools, AI resume builder and more. APIs, databases, auth, deployment and polished interfaces.",
  },
  {
    period: "Graduating 2027",
    title: "BSc Public Health",
    place: "Final year student",
    tag: "Education",
    text: "Where the health side comes from: epidemiology, health systems and how care actually reaches people. It shapes every health tool I build.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  // progress through this section only: 0 when it enters, 1 when it leaves
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section id="experience" className="px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Journey" title="Where I've been." />

        <div ref={ref} className="relative">
          {/* grey track with an orange line that fills as you scroll */}
          <div className="absolute bottom-0 left-[11px] top-0 w-[2px] bg-line md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-[11px] top-0 w-[2px] origin-top bg-brand md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-14">
            {journey.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                // on desktop the cards alternate left and right of the line
                className={`relative pl-12 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}
              >
                <span
                  className={`absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-paper bg-brand ${
                    i % 2 ? "md:-left-3" : "md:left-auto md:-right-3"
                  }`}
                />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 font-semibold text-neutral-500">
                  {item.place} · {item.tag}
                </p>
                <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
