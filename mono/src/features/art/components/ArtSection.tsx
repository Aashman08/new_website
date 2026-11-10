"use client"

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SectionModal, SectionPanel, SectionTitle } from "@/components/layout/SectionModal";
import { SECTIONS } from "@/config";
import { motion, AnimatePresence } from "framer-motion";
import { artworks } from "../data/artData";
import type { SectionProps } from "@/types";

const ArtSection: React.FC<SectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  const currentArt = artworks[currentIndex];

  return (
    <SectionModal section={SECTIONS.ART} isOpen={isOpen} onMenuItemClick={onMenuItemClick}>
      <SectionPanel onClose={onClose} className="min-h-[80vh]">
        <SectionTitle>Art</SectionTitle>

        {/* Gallery */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-6 lg:py-10">
          {/* Navigation - Left */}
          <button
            onClick={goToPrevious}
            className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.04] hover:bg-cyan-100/10 border border-white/10 hover:border-cyan-100/25 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="relative flex-1 max-w-3xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentArt.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              >
                <Image
                  src={currentArt.image}
                  alt={currentArt.title}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <span className="text-white/50 text-sm">
                {currentIndex + 1} / {artworks.length}
              </span>
              <button
                onClick={goToNext}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:w-64 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentArt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white tracking-[0.2em] uppercase mb-4">
                  {currentArt.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base">
                  Medium: {currentArt.medium}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator - Desktop */}
            <div className="hidden lg:flex flex-col gap-2 mt-8">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation - Right */}
          <button
            onClick={goToNext}
            className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.04] hover:bg-cyan-100/10 border border-white/10 hover:border-cyan-100/25 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="hidden lg:flex justify-center gap-3 pt-6 pb-4">
          {artworks.map((art, index) => (
            <button
              key={art.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </SectionPanel>
    </SectionModal>
  );
};

export default ArtSection;

