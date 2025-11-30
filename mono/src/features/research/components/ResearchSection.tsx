"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import MainMenubar from "@/components/layout/MainMenubar";
import { researchProjects } from "../data/researchData";
import type { SectionProps } from "@/types";

const ResearchSection: React.FC<SectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  const MenuTitles = ["ABOUT ME", "PROJECTS", "CONTACT", "ART"];

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black font-sans"
    >
      {/* Fixed Menubar at Top */}
      <div className="fixed top-6 sm:top-8 left-0 right-0 z-[60] px-4 flex justify-center">
        <MainMenubar titles={MenuTitles} onItemClick={(title) => onMenuItemClick?.(title)} />
      </div>

      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={onClose}
        className="fixed top-16 sm:top-20 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white transition-all duration-300 hover:scale-110"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </motion.button>

      {/* Hero Banner */}
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] min-h-[280px] sm:min-h-[320px] md:min-h-[400px] overflow-hidden mt-14 sm:mt-16">
        <Image
          src="/img/project_images/mars.jpeg"
          alt="Mars"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-6xl font-light text-white tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Research
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-3 sm:mt-4"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-16">
        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 sm:mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          Throughout my academic journey at UCLA, I&apos;ve been privileged to embark on an eclectic range of research projects 
          and expeditions that have expanded the horizons of my understanding and experience.
        </motion.p>

        {/* Research Projects Grid */}
        <div className="space-y-6 sm:space-y-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15 }}
            >
              <Link href={`/research/${project.slug}`}>
                <div className="group relative rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-300">
                  {/* Glassmorphic border container */}
                  <div 
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] transition-all duration-300 group-hover:border-white/20"
                    style={{
                      background: "linear-gradient(145deg, rgba(20,20,20,0.92) 0%, rgba(10,10,10,0.97) 100%)",
                      boxShadow: "inset 1px 1px 0px rgba(255,255,255,0.08), 0 0 40px rgba(255,255,255,0.01)",
                    }}
                  >
                    {/* Top edge highlight */}
                    <div 
                      className="absolute top-0 left-8 right-8 h-[1px] rounded-full z-10 transition-all duration-300"
                      style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.4) 70%, transparent 100%)",
                        boxShadow: "0 0 8px rgba(255,255,255,0.2), 0 0 15px rgba(255,255,255,0.1)",
                      }}
                    />
                    
                    {/* Background Image */}
                    <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white/70 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white/50">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2">
                        {project.subtitle}
                      </p>
                      
                      {/* Read More */}
                      <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                        <span className="text-xs sm:text-sm font-medium">Explore</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ResearchSection;

