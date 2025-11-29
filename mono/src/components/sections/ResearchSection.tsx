"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import MainMenubar from "@/components/layout/MainMenubar";
import { Button } from "@/components/ui/button";

interface ResearchSectionProps {
  isOpen: boolean;
  onClose: () => void;
  onMenuItemClick?: (item: string) => void;
}

interface ResearchProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  color: string;
  tags: string[];
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
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

  const MenuTitles = ["ABOUT ME", "PROJECTS", "CV", "CONTACT", "ART"];

  const researchProjects: ResearchProject[] = [
    {
      id: "spectraview",
      slug: "spectraview",
      title: "AstroPhotonics Technology Lab",
      subtitle: "Satellite-based trace gas detection with ultra-high precision photonic spectrograph technology",
      heroImage: "/img/island.png",
      color: "from-violet-500/20 to-purple-600/20",
      tags: ["Satellite Sensing", "Algorithm Development", "Ha"],
    },
    {
      id: "sri-lab",
      slug: "sri-lab",
      title: "Building Damage Detection",
      subtitle: "Deep learning for LA County emergency response and infrastructure reinforcement",
      heroImage: "/img/sri-lab-hero.png",
      color: "from-blue-500/20 to-cyan-600/20",
      tags: ["Deep Learning", "PyTorch", "U-Net"],
    },
    {
      id: "tibetan-plateau",
      slug: "tibetan-plateau",
      title: "Origins and Slope Variations",
      subtitle: "A study of Longmen Shan and Min Shan Mountain Systems of the Tibetan Plateau and Sichuan Basin",
      heroImage: "/img/project_images/minshan.webp",
      color: "from-emerald-500/20 to-teal-600/20",
      tags: ["Geology", "QGIS", "Python"],
    },
    {
      id: "mars-gale-crater",
      slug: "mars-gale-crater",
      title: "Exploring Life on Mars",
      subtitle: "An In-depth Review of Gale Crater",
      heroImage: "/img/project_images/space.webp",
      color: "from-orange-500/20 to-red-600/20",
      tags: ["Astrobiology", "Mars", "Review Paper"],
    },
    {
      id: "nasa-shift",
      slug: "nasa-shift",
      title: "SHIFT Campaign",
      subtitle: "NASA JPL collaboration to understand land and aquatic ecosystems",
      heroImage: "/img/project_images/field.jpeg",
      color: "from-yellow-500/20 to-amber-600/20",
      tags: ["NASA JPL", "Remote Sensing", "Field Research"],
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black font-sans"
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={onClose}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white transition-all duration-300 hover:scale-110"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </motion.button>

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
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
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-[0.3em] uppercase">
            Research
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-4"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-300 text-lg leading-relaxed mb-16 text-center max-w-3xl mx-auto"
        >
          Throughout my academic journey at UCLA, I've been privileged to embark on an eclectic range of research projects 
          and expeditions that have expanded the horizons of my understanding and experience.
        </motion.p>

        {/* Research Projects Grid */}
        <div className="space-y-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15 }}
            >
              <Link href={`/research/${project.slug}`}>
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <div className="relative h-72 md:h-80 overflow-hidden">
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-white/70 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm md:text-base mb-4 line-clamp-2">
                      {project.subtitle}
                    </p>
                    
                    {/* Read More */}
                    <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* MainMenubar */}
        <div className="mt-20 mb-8">
          <MainMenubar titles={MenuTitles} onItemClick={(title) => onMenuItemClick?.(title)} />
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
