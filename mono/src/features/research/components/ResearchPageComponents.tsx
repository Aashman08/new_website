"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Helper to navigate back to research section
export const handleBackToResearch = () => {
  sessionStorage.setItem("currentSection", "RESEARCH");
};

// Reusable Components for Research Pages
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

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white mt-10 sm:mt-12 md:mt-16 mb-4 sm:mb-6">{children}</h2>
);

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">{children}</p>
);

export const ImageFigure = ({
  src,
  alt,
  caption,
  maxWidth = "max-w-2xl",
}: {
  src: string;
  alt: string;
  caption?: string | React.ReactNode;
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

export const Divider = () => (
  <div className="my-10 sm:my-12 md:my-16 flex items-center gap-4">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  </div>
);

export const Quote = ({ children, borderColor = "border-white/30" }: { children: React.ReactNode; borderColor?: string }) => (
  <blockquote className={`my-6 sm:my-8 md:my-10 pl-4 sm:pl-6 border-l-2 sm:border-l-4 ${borderColor}`}>
    <p className="text-sm sm:text-base md:text-xl text-neutral-200 italic leading-relaxed">{children}</p>
  </blockquote>
);

