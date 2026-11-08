"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

// a motion version of Next's Link, so menu items can animate and still navigate the Next way
const MotionLink = motion.create(Link);

const navItems = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Journey", id: "experience" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // hide the bar when scrolling down, bring it back when scrolling up
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(current > previous && current > 300 && !menuOpen);
  });

  // watch every section; the one crossing the middle of the screen becomes active
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["home", ...navItems.map((n) => n.id), "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Escape closes the mobile menu, and the page behind cannot scroll while it is open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-24px)] max-w-[660px]"
      >
        <div className="flex items-center justify-between rounded-full border border-line bg-white/85 p-2 shadow-[0_10px_40px_rgba(15,15,15,0.06)] backdrop-blur-xl">
          {/* "/#home" works on every page: on the home page it scrolls, elsewhere it navigates home */}
          <Link
            href="/#home"
            onClick={close}
            className="flex items-center gap-2 pl-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
              C.O
            </span>
            <span className="hidden font-display text-sm font-semibold sm:block">
              Nonso
            </span>
          </Link>

          <div className="hidden items-center md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className="relative rounded-full px-4 py-2 text-sm font-medium"
              >
                {/* layoutId makes the orange pill slide from one link to the next */}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-brand"
                  />
                )}
                <span
                  className={`relative transition-colors ${
                    active === item.id
                      ? "text-white"
                      : "text-neutral-500 hover:text-ink"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand md:block"
            >
              Let&apos;s talk
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink md:hidden"
            >
              <span className="relative h-3.5 w-5">
                <motion.span
                  animate={
                    menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="absolute left-0 top-0 h-[1.5px] w-5 bg-white"
                />
                <motion.span
                  animate={
                    menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="absolute bottom-0 left-0 h-[1.5px] w-5 bg-white"
                />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-[64px] rounded-[28px] border border-line bg-white p-3 shadow-[0_20px_60px_rgba(15,15,15,0.12)] md:hidden"
            >
              {navItems.map((item, i) => (
                <MotionLink
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={close}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-center justify-between rounded-2xl px-5 py-4 font-display text-lg font-semibold hover:bg-brand-soft"
                >
                  {item.label}
                  <span className="text-brand">↗</span>
                </MotionLink>
              ))}
              <Link
                href="/#contact"
                onClick={close}
                className="mt-2 flex items-center justify-between rounded-2xl bg-brand px-5 py-4 font-semibold text-white"
              >
                Let&apos;s talk <span>↗</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
