"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export function ThemeToggle({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    updateTheme(initialTheme);
  }, []);

  const updateTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center w-8 h-8 rounded-md bg-transparent hover:bg-muted transition-colors",
          className
        )}
        aria-label="Toggle theme"
        {...props}
      >
        <Sun className="h-4 w-4 text-[#0098B0]" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center w-8 h-8 rounded-md bg-transparent hover:bg-muted transition-colors",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      {...props}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-[#0098B0]" />
      ) : (
        <Sun className="h-4 w-4 text-[#0098B0]" />
      )}
    </button>
  );
}
