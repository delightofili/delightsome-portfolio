"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling while menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm sm:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed left-1/2 top-5 z-50 w-[calc(100%-28px)] max-w-[590px] -translate-x-1/2"
      >
        <div className="relative">
          {/* Main navbar */}
          <div className="relative z-30 flex items-center justify-between rounded-full border border-[#e8e8e5] bg-white/80 px-2 py-2 shadow-[0_8px_35px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold !text-black"
            >
              C.O
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 sm:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm !text-neutral-500 transition hover:bg-neutral-100 hover:!text-black"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Desktop contact button */}
              <a
                href="#contact"
                className="hidden rounded-full bg-black px-5 py-3 text-sm font-medium !text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:block"
              >
                Let&apos;s talk
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
                className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-white sm:hidden"
              >
                <span className="relative flex h-4 w-5 flex-col justify-between">
                  <motion.span
                    animate={
                      menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-white"
                  />

                  <motion.span
                    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-white"
                  />

                  <motion.span
                    animate={
                      menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-0 left-0 h-[1.5px] w-5 rounded-full bg-white"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -12,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 right-0 top-[68px] z-20 sm:hidden"
              >
                <div className="overflow-hidden rounded-[28px] border border-[#e8e8e5] bg-white/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                  {/* Mobile navigation links */}
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={closeMenu}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: 0.05 + index * 0.05,
                        }}
                        className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-medium !text-neutral-800 transition hover:bg-neutral-100"
                      >
                        <span>{item.label}</span>

                        <span className="text-sm text-neutral-400">↗</span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-3 h-px bg-neutral-100" />

                  {/* Contact */}
                  <motion.a
                    href="#contact"
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2,
                    }}
                    className="flex items-center justify-between rounded-2xl bg-black px-5 py-4 text-sm font-medium !text-white"
                  >
                    <span>Let&apos;s talk</span>

                    <span>↗</span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
