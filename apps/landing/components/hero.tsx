"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, ArrowRight, Sparkles } from "lucide-react";
import { 
  Particles, 
  ShimmerButton, 
  AnimatedGradientText, 
  BorderBeam,
  cn 
} from "@repo/ui";

export function Hero() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    const initialTheme = isDark ? "dark" : "light";
    setTheme(initialTheme);

    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains("dark");
      const currentTheme = isDarkNow ? "dark" : "light";
      if (currentTheme !== theme) {
        setTheme(currentTheme);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) {
    return (
      <div className="relative flex min-h-screen w-full items-center justify-center px-6 py-12 overflow-hidden">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-5xl font-eunjin font-bold text-foreground md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            Create, Collaborate, Communicate
          </h1>
        </div>
      </div>
    );
  }

  const headlineParts = [
    "Create, ",
    "Collab",
    "o",
    "rate, ",
    "Communicate"
  ];

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center px-6 py-12 overflow-hidden">
      {/* Animated particles background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={80}
        staticity={30}
        ease={70}
        color={theme === "dark" ? "#0098B0" : "#0098B0"}
        size={0.5}
      />
      
      {/* Gradient orbs in background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute -top-[40%] -left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#0098B0]/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[#0098B0]/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center gap-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AnimatedGradientText className="cursor-pointer">
            <Sparkles className="mr-2 size-4 text-[#0098B0]" />
            <span className="inline animate-gradient bg-gradient-to-r from-[#0098B0] via-[#00C9E6] to-[#0098B0] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              AI-Powered Whiteboard
            </span>
            <ArrowRight className="ml-2 size-4 text-[#0098B0] transition-transform group-hover:translate-x-1" />
          </AnimatedGradientText>
        </motion.div>

        {/* Hero headline with enhanced theme toggle in the "o" */}
        <motion.h1
          className="text-5xl font-eunjin font-bold text-foreground md:text-6xl lg:text-7xl xl:text-8xl leading-tight flex flex-wrap items-center justify-center gap-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {headlineParts.map((part, index) => {
            if (index === 2) {
              // Enhanced theme toggle in the "o"
              return (
                <motion.button
                  key={index}
                  onClick={toggleTheme}
                  className={cn(
                    "relative inline-flex items-center justify-center",
                    "text-foreground transition-colors duration-300",
                    "focus:outline-none rounded-full mx-0.5 cursor-pointer group"
                  )}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9, rotate: theme === "light" ? 180 : -180 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                  title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                  <span className="relative inline-block w-[1em] h-[1em]">
                    <span className="opacity-0 select-none">{part}</span>
                    
                    {/* Glow effect behind icon */}
                    <motion.span
                      className="absolute inset-0 rounded-full bg-[#0098B0]/30 blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Icon container */}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={theme}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {theme === "light" ? (
                          <Sun 
                            className={cn(
                              "h-[0.85em] w-[0.85em] text-[#0098B0]",
                              "drop-shadow-[0_0_12px_rgba(0,152,176,0.6)]",
                              "transition-all duration-300",
                              "group-hover:drop-shadow-[0_0_20px_rgba(0,152,176,0.8)]"
                            )}
                          />
                        ) : (
                          <Moon 
                            className={cn(
                              "h-[0.85em] w-[0.85em] text-[#0098B0]",
                              "drop-shadow-[0_0_12px_rgba(0,152,176,0.6)]",
                              "transition-all duration-300",
                              "group-hover:drop-shadow-[0_0_20px_rgba(0,152,176,0.8)]"
                            )}
                          />
                        )}
                      </motion.span>
                    </AnimatePresence>
                    
                    
                  </span>
                </motion.button>
              );
            }
            return <span key={index}>{part}</span>;
          })}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          A next-generation AI-powered whiteboard for drawing, mind mapping, and intelligent note-taking. 
          Transform your ideas into visual masterpieces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <ShimmerButton
            shimmerColor="#00C9E6"
            background={theme === "dark" ? "rgba(0, 152, 176, 1)" : "rgba(0, 152, 176, 1)"}
            className="px-8 py-3 text-base font-medium"
          >
            <span className="flex items-center gap-2 text-white">
              Get Started Free
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </ShimmerButton>
          
          <motion.button
            className={cn(
              "relative px-8 py-3 rounded-full text-base font-medium",
              "border border-border/50 bg-background/50 backdrop-blur-sm",
              "text-foreground hover:bg-accent/10 transition-colors duration-300",
              "overflow-hidden"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Watch Demo
            <BorderBeam size={120} duration={8} borderWidth={1.5} />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
