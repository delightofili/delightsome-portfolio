import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, HeartPulse } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";

// builds every case study page at build time, so they load instantly
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Chukwunonso Ofili`,
    description: project.shortDescription,
    openGraph: { images: [project.image] },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  // the next project loops back to the first one at the end
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <section className="px-5 pb-16 pt-36 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/work"
            className="mb-12 inline-flex items-center gap-2 font-semibold text-neutral-500 hover:text-brand"
          >
            <ArrowLeft size={18} /> All projects
          </Link>

          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
              {project.type === "health" && (
                <span className="flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-white">
                  <HeartPulse size={14} /> Health tech
                </span>
              )}
              <span>{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-brand" />
              <span>{project.year}</span>
            </div>

            <h1 className="font-display text-6xl font-bold tracking-[-0.05em] sm:text-8xl lg:text-[9rem] lg:leading-[0.88]">
              {project.title}
              <span className="text-brand">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-9">
                {project.description}
              </p>
              <Links project={project} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-line bg-white">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <Label>Overview</Label>
          <div className="space-y-4">
            {project.overview.map((item) => (
              <Reveal key={item}>
                <div className="flex gap-4 border-b border-line pb-4">
                  <span className="text-brand">→</span>
                  <p className="leading-7 text-neutral-700">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <Label>My role</Label>
            <p className="mt-3 font-display text-2xl font-bold">
              {project.role}
            </p>
          </div>
          <div>
            <Label>Technology</Label>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <Label>The challenge</Label>
          <div>
            <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Simple on the surface usually means hard problems underneath.
            </h2>
            <div className="mt-10 space-y-6">
              {project.challenges.map((c, i) => (
                <Reveal key={c}>
                  <div className="flex gap-5">
                    <span className="font-display text-lg font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-2xl leading-7 text-neutral-700">{c}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* some small projects have no engineering list, so the section only shows when there is one */}
      {project.engineering?.length > 0 && (
        <section className="bg-ink px-5 py-24 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
              Engineering
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              What&apos;s happening under the hood.
            </h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2">
              {project.engineering.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-ink p-8 transition-colors hover:bg-[#1a1a1a] sm:p-10"
                >
                  <span className="font-display font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-10 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* next project teaser keeps people moving through the work */}
      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <Link
          href={`/work/${next.slug}`}
          data-cursor="Next"
          data-cursor-light
          className="group mx-auto block max-w-6xl rounded-[32px] bg-brand p-10 text-white sm:p-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Next project
          </p>
          <div className="mt-4 flex items-end justify-between gap-6">
            <h2 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
              {next.title}
            </h2>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-brand transition-transform group-hover:-rotate-45">
              <ArrowUpRight size={26} />
            </span>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function Label({ children }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
      {children}
    </p>
  );
}

function Links({ project }) {
  return (
    <div className="flex shrink-0 flex-wrap gap-3">
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
        >
          Live site <ArrowUpRight size={18} />
        </a>
      ) : (
        <span className="rounded-full border border-line px-6 py-3 font-semibold text-neutral-500">
          Deploying soon
        </span>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-[10px] font-semibold hover:bg-ink hover:text-white"
      >
        <FaGithub size={18} /> Code
      </a>
    </div>
  );
}
