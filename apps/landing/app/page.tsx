"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { DotPattern, cn } from "@repo/ui";

export default function Home() {
  return (
    <motion.div
      className="relative min-h-screen bg-background flex flex-col overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle dot pattern background */}
      <DotPattern
        className={cn(
          "fixed inset-0 -z-30 opacity-30 dark:opacity-20",
          "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        )}
        width={24}
        height={24}
        cr={1}
      />

      {/* Main content */}
      <main className="flex w-full flex-col items-center flex-1">
        <Hero />
        <Features />
      </main>
      
      <Footer />
    </motion.div>
  );
}
