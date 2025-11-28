"use client"

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import MainMenubar from "@/components/layout/MainMenubar";
import { Button } from "@/components/ui/button";

interface ArtSectionProps {
    isOpen: boolean;
    onClose: () => void;
    onMenuItemClick?: (item: string) => void;
  }

  const ArtSection: React.FC<ArtSectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
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

    const MenuTitles = ["ABOUT ME", "PROJECTS", "CV", "SKILLS", "CONTACT", "RESEARCH"];

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
                  ART
              </h2>
            </div>
  
  
            {/* MainMenubar */}
            <div className="mt-16 mb-8">
              <MainMenubar titles={MenuTitles} onItemClick={(title) => onMenuItemClick?.(title)} />
            </div>
          <br /> 
      </div>
      </div>
  );
  };
  
  export default ArtSection;

