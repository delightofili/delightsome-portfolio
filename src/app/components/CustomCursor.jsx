"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

// reads "does this device have a real mouse?" straight from the browser
const query = "(pointer: fine)";
const subscribe = (callback) => {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback); // re-checks if a mouse is plugged in or removed
  return () => media.removeEventListener("change", callback);
};
const getSnapshot = () => window.matchMedia(query).matches;
const getServerSnapshot = () => false; // the server has no mouse, so render nothing there

export default function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [mode, setMode] = useState("default"); // default | hover | label | text
  const [label, setLabel] = useState("");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [light, setLight] = useState(false); // true over orange areas, where an orange cursor would vanish

  // raw mouse position: the small dot follows this exactly
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // the ring follows the same position through a spring, so it trails behind
  const ringX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.6 });

  useEffect(() => {
    // phones and tablets have no hovering mouse, so keep the normal behaviour there
    if (!enabled) return;

    document.documentElement.classList.add("has-cursor");

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    // one listener on the whole document decides what the cursor turns into
    const onOver = (e) => {
      setLight(!!e.target.closest("[data-cursor-light]"));
      const el = e.target.closest(
        "[data-cursor], a, button, input, textarea, label",
      );
      if (!el) {
        setMode("default");
        return;
      }
      if (el.dataset.cursor) {
        setMode("label"); // big orange circle with text, used on project images
        setLabel(el.dataset.cursor);
      } else if (el.matches("input, textarea")) {
        setMode("text"); // thin bar for typing fields
      } else {
        setMode("hover"); // ring grows over links and buttons
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  // the size and look of the ring for each mode
  const ring = {
    default: { width: 36, height: 36 },
    hover: { width: 64, height: 64 },
    label: { width: 96, height: 96 },
    text: { width: 4, height: 30 },
  }[mode];

  // over orange sections swap orange for white, and the label circle turns dark
  const color = light ? "#ffffff" : "#ff5a1f";
  const look = {
    ...ring,
    borderColor: color,
    backgroundColor:
      mode === "label"
        ? light
          ? "#0f0f0f"
          : color
        : mode === "text"
          ? color
          : mode === "hover"
            ? light
              ? "rgba(255,255,255,0.18)"
              : "rgba(255,90,31,0.12)"
            : "rgba(0,0,0,0)",
  };

  return (
    <>
      {/* trailing ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          ...look,
          scale: pressed ? 0.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border-[1.5px]"
      >
        <AnimatePresence>
          {mode === "label" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-white"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* exact dot, hidden while the ring is showing a label or text bar */}
      <motion.div
        aria-hidden
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible && (mode === "default" || mode === "hover") ? 1 : 0,
          backgroundColor: color,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full"
      />
    </>
  );
}
