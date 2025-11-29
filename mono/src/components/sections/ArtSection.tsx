"use client"

import React, { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import MainMenubar from "@/components/layout/MainMenubar";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ArtSectionProps {
  isOpen: boolean;
  onClose: () => void;
  onMenuItemClick?: (item: string) => void;
}

interface ArtPiece {
  id: string;
  title: string;
  medium: string;
  image: string;
}

const artworks: ArtPiece[] = [
  {
    id: "wolf-color",
    title: "Wolf",
    medium: "Color Pencils",
    image: "/img/art/wolf_d.jpeg",
  },
  {
    id: "leopard",
    title: "Leopard",
    medium: "Color Pencils",
    image: "/img/art/leopard2.jpeg",
  },
  {
    id: "tiger",
    title: "Tiger",
    medium: "Color Pencils",
    image: "/img/art/tiger1.jpeg",
  },
  {
    id: "lion",
    title: "Lion",
    medium: "Lead Pencils",
    image: "/img/art/lion.jpeg",
  },
  {
    id: "wolf-lead",
    title: "Wolf",
    medium: "Lead Pencils",
    image: "/img/art/wolf_face.jpeg",
  },
  {
    id: "bird",
    title: "Just a Bird",
    medium: "Lead Pencils",
    image: "/img/art/bird_hd.jpeg",
  },
  {
    id: "mountains",
    title: "Misty Mountains",
    medium: "Lead Pencils",
    image: "/img/art/mount.jpeg",
  },
  {
    id: "duomo",
    title: "Duomo",
    medium: "Color Pencils",
    image: "/img/art/duomo.png",
  },
  {
    id: "jaipur",
    title: "Jaipur",
    medium: "Lead Pencils",
    image: "/img/art/jaipur.png",
  },
  {
    id: "temple",
    title: "Temple",
    medium: "Lead Pencils",
    image: "/img/art/temple.png",
  },
];

const ArtSection: React.FC<ArtSectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  const MenuTitles = ["ABOUT ME", "PROJECTS", "CV", "CONTACT", "RESEARCH"];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  const currentArt = artworks[currentIndex];

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black font-sans"
    >
      <div className="relative w-full min-h-screen">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 z-50 text-white hover:bg-white/10"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Title */}
        <div className="flex flex-col items-center pt-12 justify-center">
          <h2 className="text-lg md:text-4xl text-white max-w-4xl tracking-[0.3em] font-semibold">
            ART
          </h2>
          <div className="w-16 h-0.5 bg-white/50 mt-4" />
        </div>

        {/* Gallery */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 py-12 lg:py-16 max-w-7xl mx-auto">
          {/* Navigation - Left */}
          <button
            onClick={goToPrevious}
            className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
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
                className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-lg"
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
                <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-[0.2em] uppercase mb-4">
                  {currentArt.title}
                </h3>
                <p className="text-neutral-400 text-base">
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
            className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="hidden lg:flex justify-center gap-3 pb-16">
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

        {/* MainMenubar */}
        <div className="pb-12 px-6">
          <MainMenubar titles={MenuTitles} onItemClick={(title) => onMenuItemClick?.(title)} />
        </div>
      </div>
    </div>
  );
};

export default ArtSection;
