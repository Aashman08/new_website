"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainMenubar from "@/components/layout/MainMenubar";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CareerTimeline } from "@/components/features/timeline/CareerTimeline";

interface AboutSectionProps {
    isOpen: boolean;
    onClose: () => void;
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
  
    const MenuTitles = ["PROJECTS", "CV", "SKILLS", "CONTACT", "RESEARCH", "ART"];
  
    if (!isOpen) return null;
  
    return (
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 font-sans"
      >
        <div className="relative w-full max-w-6xl mx-auto mt-40 mb-10 p-10 bg-black text-white rounded-lg shadow-lg ">
          {/* Close Button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Title */}
          <div className="flex flex-col items-center pt-2 justify-center">
            <h2 className="text-lg md:text-4xl mb-6 text-white dark:text-white max-w-4xl">
                About Me
            </h2>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center mt-8 mb-6">
          <Avatar className="w-80 h-80">
              <AvatarImage src="/img/NYC_pic.png" alt="Aashman Rastogi" />
              <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          </div>
        
          {/* content 1 */}
          <div className="max-w-5xl mx-auto pt-10 pb-12 px-10 md:px-8 lg:px-10">
              <p className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-5xl text-center">
              Hi, I am Aashman Rastogi
              </p>
              <div className="w-full border-b border-white mb-4 mx-auto"></div>
              <p className="w-full text-neutral-300 dark:text-neutral-300 text-lg text-center">
              <br></br>
              I&apos;m a senior at the{" "}
              <i><b>
                  <a href="https://www.ucla.edu/" className="underline">
                  University of California, Los Angeles (UCLA)
                  </a>
              </b></i>{" "}
              and am majoring in <i><b>Statistics and Data Science</b></i> with a minor in <i><b>Data Science Engineering</b></i> focusing towards{" "}
              <i><b>Artificial Intelligence and Machine Learning</b></i>.
              </p>

              <p className="w-full text-neutral-300 dark:text-neutral-300 text-lg text-center">
              My journey into technology has been quite interesting and purpose driven, and I&apos;m eager to share it with you. As you explore my story below, I hope you feel inspired and energized by my experiences.
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

          {/* MainMenubar */}
          <div className="mt-8">
            <MainMenubar titles={MenuTitles} onItemClick={onMenuItemClick} />
          </div>
        <br /> 
    </div>
    </div>
);
};

export default AboutSection;

