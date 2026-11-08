"use client";

import { motion } from "motion/react";
import {
  Cloud,
  Database,
  HeartPulse,
  Layout,
  Server,
  ShieldCheck,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiRedis,
  SiDocker,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiSocketdotio,
  SiVercel,
  SiCloudflare,
  SiGit,
  SiPwa,
} from "react-icons/si";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./Work";
import Marquee from "./Marquee";

// the data file stores icon names as text, this maps them to real components
const icons = { HeartPulse, Layout, Server, Database, ShieldCheck, Cloud };

const logos = [
  [SiNextdotjs, "Next.js"],
  [SiReact, "React"],
  [SiTypescript, "TypeScript"],
  [SiNodedotjs, "Node.js"],
  [SiNestjs, "NestJS"],
  [SiPostgresql, "PostgreSQL"],
  [SiPrisma, "Prisma"],
  [SiSupabase, "Supabase"],
  [SiRedis, "Redis"],
  [SiDocker, "Docker"],
  [SiTailwindcss, "Tailwind"],
  [SiPython, "Python"],
  [SiFastapi, "FastAPI"],
  [SiSocketdotio, "Socket.IO"],
  [SiPwa, "PWA"],
  [SiVercel, "Vercel"],
  [SiCloudflare, "Cloudflare"],
  [SiGit, "Git"],
];

export default function Skills() {
  const [health, ...rest] = skillGroups;

  return (
    <section id="skills" className="overflow-hidden py-28">
      {/* same side padding as every other section so the edges line up */}
      <div className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Skills"
            title="What I work with."
            text="Health domain knowledge on one side, a full web stack on the other. Grouped where they belong."
          />

          {/* bento grid: the health card is big and orange, the rest fill around it */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              group={health}
              index={0}
              className="md:col-span-2 lg:col-span-1 lg:row-span-2"
            />
            {rest.map((group, i) => (
              <SkillCard key={group.id} group={group} index={i + 1} />
            ))}
          </div>
        </div>
      </div>

      {/* two logo strips moving in opposite directions */}
      <div className="mt-20 space-y-4">
        <Marquee
          speed="40s"
          items={logos.map(([Icon, name]) => (
            <Logo key={name} Icon={Icon} name={name} />
          ))}
        />
        <Marquee
          speed="40s"
          reverse
          items={[...logos].reverse().map(([Icon, name]) => (
            <Logo key={name} Icon={Icon} name={name} />
          ))}
        />
      </div>
    </section>
  );
}

function SkillCard({ group, index, className = "" }) {
  const Icon = icons[group.icon];
  const hot = group.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={`group rounded-[28px] border p-7 transition-colors ${
        hot
          ? "border-brand bg-brand text-white"
          : "border-line bg-white hover:border-brand"
      } ${className}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            hot ? "bg-white text-brand" : "bg-brand-soft text-brand"
          }`}
        >
          <Icon size={22} />
        </span>
        <span
          className={`text-sm font-bold ${hot ? "text-white/70" : "text-neutral-400"}`}
        >
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
        {group.title}
      </h3>
      {group.blurb && (
        <p className="mt-3 leading-7 text-white/85">{group.blurb}</p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              hot
                ? "bg-white/15 text-white"
                : "border border-line text-neutral-600 group-hover:border-brand/40"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Logo({ Icon, name }) {
  return (
    <div className="mx-2 flex items-center gap-3 rounded-full border border-line bg-white px-6 py-3 text-neutral-700 transition-colors hover:border-brand hover:text-brand">
      <Icon size={20} />
      <span className="whitespace-nowrap text-sm font-semibold">{name}</span>
    </div>
  );
}
