"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Users, Sparkles, Palette, Pencil, Lightbulb, Share2 } from "lucide-react";
import { SketchCard, SketchIcon, SketchBadge } from "@/components/sketch-card";

const features = [
  {
    title: "AI-Powered Creation",
    description:
      "Turn ideas into reality with AI-enhanced drawing and intelligent note-taking.",
    icon: Brain,
    rotation: -1.5,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Share boards, video, screens and chat with your team to collaborate in real-time.",
    icon: Users,
    rotation: 0.8,
  },
  {
    title: "Infinite Canvas",
    description:
      "Infinite canvas, multiple files, multiple export options. Both cloud sync and local storage.",
    icon: Palette,
    rotation: -0.5,
  },
  {
    title: "MindMapping & NoteTaking",
    description:
      "MindMapping and NoteTaking with AI-powered suggestions and completions.",
    icon: Pencil,
    rotation: 1.2,
  },
  {
    title: "Audio, Video & Screen Sharing",
    description:
      "Share audio, video and screen with thousands of users in real-time.",
    icon: Lightbulb,
    rotation: -1,
  },
  {
    title: "Built for Everyone",
    description:
      "Ideal for tutors, professionals, artists, designers, developers, writers and more.",
    icon: Share2,
    rotation: 0.6,
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  return (
    <SketchCard
      rotation={feature.rotation}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      cardClassName="hover:border-[#0098B0]/60 hover:bg-card"
    >
      {/* Icon and heading in one line */}
      <div className="flex items-center gap-3 mb-3">
        <SketchIcon icon={feature.icon} />
        <h3 className="text-lg font-eunjin font-semibold text-foreground">
          {feature.title}
        </h3>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed pl-1">
        {feature.description}
      </p>
    </SketchCard>
  );
};

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SketchBadge className="font-eunjin">
            <Sparkles className="w-4 h-4" />
            Features
          </SketchBadge>

          <motion.h2
            className="mt-6 text-3xl md:text-4xl font-eunjin font-bold text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to create
          </motion.h2>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
