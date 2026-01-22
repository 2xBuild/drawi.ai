"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <main className="flex w-full flex-col items-center flex-1">
        <Hero />
        <Features />
      </main>
      
      <Footer />
    </div>
  );
}
