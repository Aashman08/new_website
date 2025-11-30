"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainMenubar from "@/components/layout/MainMenubar";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CareerTimeline } from "@/features/timeline";
import { EducationTimeline } from "@/features/education";
import type { SectionProps } from "@/types";

interface AboutSectionProps extends SectionProps {
    onMenuItemClick: (title: string) => void; 
}

const AboutSection: React.FC<AboutSectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
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
  
    const MenuTitles = ["PROJECTS", "CONTACT", "RESEARCH", "ART"];
  
    if (!isOpen) return null;
  
    return (
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 font-sans"
      >
        {/* Fixed Menubar at Top */}
        <div className="fixed top-6 sm:top-8 left-0 right-0 z-[60] px-4 flex justify-center">
          <MainMenubar titles={MenuTitles} onItemClick={onMenuItemClick} />
        </div>

        <div className="relative w-full max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-28 mb-6 md:mb-10 p-4 sm:p-6 md:p-10 bg-black text-white rounded-lg shadow-lg">
          {/* Close Button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/10"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Title */}
          <div className="flex flex-col items-center pt-2 justify-center mb-6 sm:mb-8 md:mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl font-light text-white tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase"
            >
              About Me
            </motion.h2>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6">
          <Avatar className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <AvatarImage src="/img/NYC_pic.png" alt="Aashman Rastogi" />
              <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          </div>
        
          {/* content 1 */}
          <div className="max-w-5xl mx-auto pt-6 sm:pt-8 md:pt-10 pb-4 px-2 sm:px-6 md:px-8 lg:px-10">
              <p className="text-lg sm:text-xl md:text-4xl mb-3 sm:mb-4 text-white dark:text-white max-w-5xl text-justify">
              Hi, I&apos;m Aashman
              </p>
              <div className="w-full border-b border-white mb-3 sm:mb-4 mx-auto"></div>
              <p className="w-full text-neutral-300 dark:text-neutral-300 text-sm sm:text-base md:text-lg text-justify mt-4 sm:mt-6">
              I&apos;m an <i><b>AI Engineer</b></i> at{" "}
              <i><b>
                  <a href="https://kindo.ai/" className="underline">
                  Kindo AI
                  </a>
              </b></i>
              , a Series A cybersecurity AI startup focused on automating security and identity workflows. I&apos;m passionate about building impactful products and thrive in fast-moving, collaborative <i><b>deep tech</b></i> environments, where I&apos;m constantly inspired by the pace of innovation and its real-world impact.
              </p>

              <p className="w-full text-neutral-300 dark:text-neutral-300 text-sm sm:text-base md:text-lg text-justify mt-4">
              I&apos;ve definitely caught the entrepreneurship bug and love turning early-stage ideas into things people actually use. Since I was a kid, I&apos;ve been deeply fascinated by <i><b>space and space tech</b></i>, and I&apos;m exploring how emerging technologies can drive the next wave of innovation that ultimately benefits life on Earth.
              </p>

              <p className="w-full text-neutral-300 dark:text-neutral-300 text-sm sm:text-base md:text-lg text-justify mt-4">
              I graduated from{" "}
              <i><b>
                  <a href="https://www.ucla.edu/" className="underline">
                  UCLA
                  </a>
              </b></i>{" "}
              with a degree in <i><b>Statistics and Data Science</b></i> and a minor in <i><b>Data Science Engineering</b></i>. If you&apos;re building something ambitious—or just want to talk AI, startups, or space—I&apos;d love to connect.
              </p>
          </div>

          {/* Scroll down arrow */}
          <button 
            onClick={() => {
              const target = document.getElementById('career-timeline');
              if (!target) return;
              
              const start = modalRef.current?.scrollTop || 0;
              const end = target.offsetTop - 100;
              const duration = 1200; // ms - adjust for slower/faster scroll
              const startTime = performance.now();
              
              const easeInOutCubic = (t: number) => 
                t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
              
              const scroll = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = easeInOutCubic(progress);
                
                if (modalRef.current) {
                  modalRef.current.scrollTop = start + (end - start) * eased;
                }
                
                if (progress < 1) {
                  requestAnimationFrame(scroll);
                }
              };
              
              requestAnimationFrame(scroll);
            }}
            className="mx-auto block cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Scroll to timeline"
          >
            <Image src="/icon.svg" alt="Scroll down" width={28} height={10} />
          </button>

          <div id="career-timeline">
            <CareerTimeline />
          </div>

          {/* Education Section */}
          <div id="education-section" className="mt-8 sm:mt-12 md:mt-16">
            <EducationTimeline />
          </div>

        <br /> 
    </div>
    </div>
);
};

export default AboutSection;

