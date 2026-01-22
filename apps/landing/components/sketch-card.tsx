"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";
import { cn } from "@repo/ui";

export interface SketchCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /** Content inside the card */
  children: React.ReactNode;
  /** Rotation angle in degrees for the hand-drawn effect */
  rotation?: number;
  /** Whether to show corner accents */
  showCorners?: boolean;
  /** Accent color for corners and hover state */
  accentColor?: string;
  /** Additional class names for the inner card div */
  cardClassName?: string;
}

export function SketchCard({
  children,
  className,
  cardClassName,
  rotation = 0,
  showCorners = true,
  accentColor = "#0098B0",
  ...motionProps
}: SketchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{
        rotate: 0,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={cn("relative group", className)}
      {...motionProps}
    >
      {/* Hand-drawn style card */}
      <div
        className={cn(
          "relative h-full p-6 rounded-xl",
          "bg-card/80 backdrop-blur-sm",
          "border-2 border-dashed border-border",
          "transition-colors duration-300",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]",
          "dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]",
          cardClassName
        )}
        style={{
          // @ts-expect-error - CSS custom property
          "--sketch-accent": accentColor,
        }}
      >
        {/* Sketch-style corner accents */}
        {showCorners && (
          <>
            <div
              className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 rounded-tl-sm"
              style={{ borderColor: `${accentColor}66` }}
            />
            <div
              className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 rounded-tr-sm"
              style={{ borderColor: `${accentColor}66` }}
            />
            <div
              className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 rounded-bl-sm"
              style={{ borderColor: `${accentColor}66` }}
            />
            <div
              className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 rounded-br-sm"
              style={{ borderColor: `${accentColor}66` }}
            />
          </>
        )}

        {children}
      </div>
    </motion.div>
  );
}

export interface SketchIconProps {
  /** Icon component to render */
  icon: React.ComponentType<{ className?: string }>;
  /** Size of the icon container */
  size?: "sm" | "md" | "lg";
  /** Accent color */
  accentColor?: string;
  /** Additional class names */
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function SketchIcon({
  icon: Icon,
  size = "md",
  accentColor = "#0098B0",
  className,
}: SketchIconProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-lg flex items-center justify-center",
        "border border-dashed shrink-0",
        sizeClasses[size],
        className
      )}
      style={{
        backgroundColor: `${accentColor}1A`,
        borderColor: `${accentColor}4D`,
      }}
      whileHover={{ scale: 1.1, rotate: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Icon className={iconSizeClasses[size] + " text-accent"} />
    </motion.div>
  );
}

export interface SketchBadgeProps {
  children: React.ReactNode;
  /** Rotation angle */
  rotation?: number;
  /** Accent color */
  accentColor?: string;
  /** Additional class names */
  className?: string;
}

export function SketchBadge({
  children,
  rotation = -2,
  accentColor = "#0098B0",
  className,
}: SketchBadgeProps) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-2 px-5 py-2.5",
        "rounded-full border-2 border-dashed",
        "text-sm",
        className
      )}
      style={{
        borderColor: `${accentColor}66`,
        backgroundColor: `${accentColor}0D`,
        color: accentColor,
      }}
      initial={{ opacity: 0, scale: 0.9, rotate: rotation }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
