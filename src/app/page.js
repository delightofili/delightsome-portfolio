import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const words = [
  "Digital health",
  "Fullstack",
  "Offline first",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Built in public",
];

// no "use client" here: the page itself renders on the server, only the animated parts are client components
export default function Home() {
  return (
    <main className="relative">
      <Hero />

      {/* tilted orange band between hero and work */}
      <div
        data-cursor-light
        className="-rotate-2 scale-105 border-y-2 border-ink bg-brand py-5 text-white"
      >
        <Marquee
          speed="25s"
          items={words.map((w) => (
            <span
              key={w}
              className="flex items-center font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl"
            >
              <span className="px-6">{w}</span>
              <span className="text-ink">✦</span>
            </span>
          ))}
        />
      </div>

      <Work />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
