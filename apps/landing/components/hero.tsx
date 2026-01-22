"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, ArrowRight, Star } from "lucide-react";
import { cn } from "@repo/ui";

export function Hero() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);

  // Fetch GitHub star count
  useEffect(() => {
    fetch("https://api.github.com/repos/2xBuild/drawi.ai")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStarCount(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

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
      <div className="relative flex min-h-screen w-full items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-5xl font-eunjin font-bold text-foreground md:text-6xl lg:text-7xl leading-tight">
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
    "rate",
    ", ",
    "Communicate"
  ];

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center px-6 py-12">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 text-center">
        {/* Hero headline with theme toggle in the "o" */}
        <h1 className="text-5xl font-eunjin font-bold text-foreground md:text-6xl lg:text-7xl leading-tight flex flex-wrap items-center justify-center gap-0">
          <span>{headlineParts[0]}</span>
          <span className="whitespace-nowrap">
            {headlineParts[1]}
            <button
              onClick={toggleTheme}
              className={cn(
                "relative inline-flex items-center justify-center",
                "text-foreground transition-colors duration-200",
                "focus:outline-none rounded-full mx-0.5 cursor-pointer",
                "hover:text-[#0098B0]"
              )}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <span className="relative inline-block w-[1em] h-[1em]">
                <span className="opacity-0 select-none">{headlineParts[2]}</span>
                <span className="absolute inset-0 flex items-center justify-center">
                  {theme === "light" ? (
                    <Sun className="h-[0.85em] w-[0.85em] text-[#0098B0]" />
                  ) : (
                    <Moon className="h-[0.85em] w-[0.85em] text-[#0098B0]" />
                  )}
                </span>
              </span>
            </button>
            {headlineParts[3]}
          </span>
          {headlineParts.slice(4).map((part, index) => (
            <span key={index + 4}>{part}</span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground max-w-xl mx-auto md:text-xl leading-relaxed">
          A next-generation AI-powered whiteboard for drawing, mind mapping, and intelligent note-taking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button
            className={cn(
              "px-8 py-3 rounded-full text-base font-medium",
              "bg-[#0098B0] text-white",
              "hover:bg-[#0098B0]/90 transition-colors duration-200",
              "flex items-center gap-2"
            )}
          >
            Get Started Free
            <ArrowRight className="size-4" />
          </button>
          
          {/* GitHub button with hand-drawn star count annotation */}
          <div className="relative">
            <a
              href="https://github.com/2xBuild/drawi.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-8 py-3 rounded-full text-base font-medium",
                "border border-border bg-background",
                "text-foreground hover:bg-accent/10 transition-colors duration-200",
                "flex items-center gap-2"
              )}
            >
              Star on GitHub
              <Star className="size-4" />
            </a>

            {/* Hand-drawn style annotation - positioned below button */}
            <div className="absolute pointer-events-none top-full left-1/2 -translate-x-1/2 mt-2">
              {/* Hand-drawn curved arrow: tail at button, head at star count */}
              <svg
                width="50"
                height="35"
                viewBox="0 0 50 35"
                fill="none"
                className="text-foreground/60 absolute -top-6 left-1/2 -translate-x-1/2"
              >
                <defs>
                  <filter id="sketchy-arrow" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                {/* Curved path: starts at top (button), curves down to bottom (star count) */}
                <path
                  d="M 25 2 Q 22 12, 24 20 Q 26 28, 25 32"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  style={{ filter: "url(#sketchy-arrow)" }}
                />
                {/* Arrow head pointing DOWN to star count */}
                <path
                  d="M 25 32 L 21 26 M 25 32 L 29 26"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  style={{ filter: "url(#sketchy-arrow)" }}
                />
              </svg>

              {/* Star count text - tilted hand-drawn style */}
              <div className="flex items-center gap-1.5 -rotate-6 font-eunjin text-foreground/80 whitespace-nowrap mt-1">
                <Star className="size-4 fill-yellow-400 text-yellow-500" />
                <span className="text-sm">
                  {starCount !== null ? `${starCount} stars!` : "Star us!"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
