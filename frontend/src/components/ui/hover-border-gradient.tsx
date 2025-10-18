"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1.2,
  ...props
}: React.PropsWithChildren<{
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
} & React.HTMLAttributes<HTMLElement>>) {
  const [hovered, setHovered] = useState(false);

  // Gradient colors similar to your navbar underline
  const gradient =
    "linear-gradient(90deg, #1E90FF 0%, #00fffc 50%, #fff 100%)";

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full items-center justify-center w-fit p-px overflow-visible",
        containerClassName
      )}
      {...props}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none z-0"
        style={{
          background: gradient,
          padding: 2,
        }}
        initial={{ opacity: 0.7, rotate: 0 }}
        animate={{
          opacity: hovered ? 1 : 0.7,
          rotate: hovered ? 360 : 0,
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: hovered ? Infinity : 0,
        }}
      />
      {/* Button content */}
      <div
        className={cn(
          "relative z-10 bg-black text-white px-6 py-2 rounded-full font-semibold",
          className
        )}
      >
        {children}
      </div>
      {/* Inner background to mask the border */}
      <div className="absolute inset-[2px] rounded-full bg-black z-0" />
    </Tag>
  );
}