"use client";

import { createContext, useContext, useState } from "react";
import { MotionConfig } from "motion/react";
import SplashScreen from "./SplashScreen";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import Navbar from "./Navbar";

// tells the hero when the splash has gone, so its entrance is not hidden behind the curtain
const IntroContext = createContext(true);
export const useIntroDone = () => useContext(IntroContext);

export default function Providers({ children }) {
  const [introDone, setIntroDone] = useState(false);

  return (
    // reducedMotion="user" makes every animation respect the visitor's system setting
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={introDone}>
        <SplashScreen onDone={() => setIntroDone(true)} />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        {children}
      </IntroContext.Provider>
    </MotionConfig>
  );
}
