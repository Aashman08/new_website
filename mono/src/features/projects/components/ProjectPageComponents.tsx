"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Helper to navigate back to projects section
export const handleBackToProjects = () => {
  sessionStorage.setItem("currentSection", "PROJECTS");
};

// Animated Section wrapper
export const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.section>
);

// Section heading (h2)
export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6">{children}</h2>
);

// Paragraph text
export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">{children}</p>
);

// Single image with caption
export const ImageFigure = ({
  src,
  alt,
  caption,
  maxWidth = "max-w-2xl",
}: {
  src: string;
  alt: string;
  caption?: string;
  maxWidth?: string;
}) => (
  <figure className={`my-6 sm:my-8 md:my-10 ${maxWidth} mx-auto`}>
    <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
      <Image 
        src={src} 
        alt={alt} 
        width={900}
        height={600}
        className="w-full h-auto"
      />
    </div>
    {caption && (
      <figcaption className="text-center text-neutral-500 text-xs sm:text-sm mt-3 sm:mt-4 italic px-2">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Pair of images stacked vertically
export const ImagePair = ({
  first,
  second,
}: {
  first: { src: string; alt: string; caption?: string };
  second: { src: string; alt: string; caption?: string };
}) => (
  <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 my-6 sm:my-8 md:my-10 max-w-2xl mx-auto">
    <figure>
      <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
        <Image 
          src={first.src} 
          alt={first.alt} 
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      {first.caption && (
        <figcaption className="text-center text-neutral-500 text-xs sm:text-sm mt-2 sm:mt-3 italic">
          {first.caption}
        </figcaption>
      )}
    </figure>
    <figure>
      <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
        <Image 
          src={second.src} 
          alt={second.alt} 
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      {second.caption && (
        <figcaption className="text-center text-neutral-500 text-xs sm:text-sm mt-2 sm:mt-3 italic">
          {second.caption}
        </figcaption>
      )}
    </figure>
  </div>
);

// Horizontal divider
export const Divider = () => (
  <div className="my-10 sm:my-12 md:my-16 flex items-center gap-4">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  </div>
);

// Blockquote
export const Quote = ({ children, borderColor = "border-white/30" }: { children: React.ReactNode; borderColor?: string }) => (
  <blockquote className={`my-6 sm:my-8 md:my-10 pl-4 sm:pl-6 border-l-2 sm:border-l-4 ${borderColor}`}>
    <p className="text-sm sm:text-base md:text-xl text-neutral-200 italic leading-relaxed">{children}</p>
  </blockquote>
);

// Callout box
export const Callout = ({
  title,
  children,
  variant = "info",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "success";
}) => {
  const variantStyles = {
    info: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
    warning: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
    success: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  };

  return (
    <div className={`my-6 sm:my-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${variantStyles[variant]} border backdrop-blur-sm`}>
      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">{title}</h4>
      <p className="text-neutral-300 text-sm sm:text-base">{children}</p>
    </div>
  );
};

// Feature card for technical features
export const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
    <h4 className="font-semibold text-white mb-1.5 sm:mb-2 text-base sm:text-lg">{title}</h4>
    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{description}</p>
  </div>
);

