"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Users, Sparkles, Zap, Palette } from "lucide-react";
import { MagicCard, cn } from "@repo/ui";

const features = [
  {
    title: "AI-Powered Creation",
    description:
      "Transform ideas into reality with AI-enhanced drawing and intelligent note-taking.",
    icon: Brain,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Work seamlessly with your team. Share whiteboards with multiplayer cursors.",
    icon: Users,
  },
  {
    title: "Infinite Canvas",
    description:
      "No limits on creativity. Zoom, pan, and expand across an infinite workspace.",
    icon: Palette,
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <MagicCard
        className={cn(
          "h-full bg-card/50 backdrop-blur-sm border-border/50",
          "hover:border-[#0098B0]/30 transition-all duration-500"
        )}
        gradientColor="#0098B0"
        gradientOpacity={0.15}
      >
        <div className="p-5 flex flex-col h-full">
          {/* Icon and heading in one line */}
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              className="relative w-8 h-8 rounded-lg flex items-center justify-center bg-[#0098B0]/10 shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Icon className="w-4 h-4 text-[#0098B0]" />
            </motion.div>
            <h3 className="text-base font-semibold text-foreground">
              {feature.title}
            </h3>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </MagicCard>
    </motion.div>
  );
};

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0098B0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0098B0]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0098B0]/10 text-[#0098B0] text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            Features
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        
          
      </div>
    </section>
  );
}
