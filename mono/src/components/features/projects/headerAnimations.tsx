"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

// Animation type options
export type HeaderAnimationType = "3d" | "zoom" | "parallax" | "glow" | "none";

interface AnimatedHeaderProps {
  image: string;
  alt: string;
  color: string;
  animation?: HeaderAnimationType;
  icon?: ReactNode;
}

// ============================================
// Animation Variants
// ============================================

// 3D Perspective hover effect
const variants3D = {
  container: {
    initial: { rotateY: 0, rotateX: 0, scale: 1 },
    hover: {
      rotateY: 8,
      rotateX: 5,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  image: {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
};

// Zoom effect
const variantsZoom = {
  container: {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
  image: {
    initial: { scale: 1 },
    hover: {
      scale: 1.15,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
};

// Parallax effect (image moves opposite to mouse)
const variantsParallax = {
  container: {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  },
  image: {
    initial: { scale: 1.1, y: 0 },
    hover: {
      scale: 1.15,
      y: -10,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
};

// Glow effect
const variantsGlow = {
  container: {
    initial: { scale: 1, boxShadow: "0 0 0 rgba(255,255,255,0)" },
    hover: {
      scale: 1.02,
      boxShadow: "0 0 30px rgba(255,255,255,0.3)",
      transition: { duration: 0.3 },
    },
  },
  image: {
    initial: { scale: 1, filter: "brightness(1)" },
    hover: {
      scale: 1.05,
      filter: "brightness(1.1)",
      transition: { duration: 0.3 },
    },
  },
};

// No animation
const variantsNone = {
  container: {
    initial: {},
    hover: {},
  },
  image: {
    initial: {},
    hover: {},
  },
};

// Map animation types to their variants
const animationVariantsMap: Record<HeaderAnimationType, { container: Variants; image: Variants }> = {
  "3d": variants3D,
  zoom: variantsZoom,
  parallax: variantsParallax,
  glow: variantsGlow,
  none: variantsNone,
};

// ============================================
// Animated Header Component
// ============================================

export const AnimatedHeader = ({
  image,
  alt,
  color,
  animation = "3d",
}: AnimatedHeaderProps) => {
  const variants = animationVariantsMap[animation];
  const use3DPerspective = animation === "3d";

  return (
    <div
      style={use3DPerspective ? { perspective: "1000px" } : undefined}
      className="flex flex-1 w-full h-full min-h-[6rem]"
    >
      <motion.div
        className={`relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br ${color}`}
        variants={variants.container}
        initial="initial"
        whileHover="hover"
        style={use3DPerspective ? { transformStyle: "preserve-3d" } : undefined}
      >
        <motion.div className="absolute inset-0" variants={variants.image}>
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Subtle gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

// ============================================
// Gradient Header (fallback when no image)
// ============================================

interface GradientHeaderProps {
  color: string;
  icon: ReactNode;
}

export const GradientHeader = ({ color, icon }: GradientHeaderProps) => {
  return (
    <motion.div
      className={`flex flex-1 w-full h-full min-h-[6rem] rounded-lg overflow-hidden bg-gradient-to-br ${color}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center w-full p-4">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-white/90"
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
};

