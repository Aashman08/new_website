"use client";

import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Typography";
import React, { useState, useEffect } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

// Section components
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CVSection from "@/components/sections/CVSection";
import ContactSection from "@/components/sections/ContactSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ArtSection from "@/components/sections/ArtSection";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [menuAction, setMenuAction] = useState<string | null>(null);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (action: string) => {
    // If a modal is already open and a different action is selected,
    // close the current modal first and then open the new one after a short delay.
    if (isModalOpen && menuAction !== action) {
      setIsModalOpen(false);
      setTimeout(() => {
        setMenuAction(action);
        if (["ABOUT ME", "PROJECTS", "CV", "SKILLS", "CONTACT", "RESEARCH", "ART"].includes(action)) {
          setIsModalOpen(true);
        }
      }, 0);
    } else {
      setMenuAction(action);
      if (["ABOUT ME", "PROJECTS", "CV", "SKILLS", "CONTACT", "RESEARCH", "ART"].includes(action)) {
        setIsModalOpen(true);
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setMenuAction(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
      >
        <source src="/video/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      {!isModalOpen && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          <div className="absolute top-[57%] transform -translate-y-1/2 text-center">
            <Heading level="h1">AASHMAN RASTOGI</Heading>
            <Text style={{ letterSpacing: '0.2em', fontSize: "90%" }}>STATISTICS AND DATA SCIENCE</Text>
          </div>
          <div className="absolute bottom-52 flex space-x-4">
            <Menubar>
              {["ABOUT ME", "PROJECTS", "SKILLS", "CV", "CONTACT", "RESEARCH", "ART"].map(
                (item) => (
                  <MenubarMenu key={item}>
                    <MenubarTrigger onClick={() => handleMenuClick(item)}>
                      {item}
                    </MenubarTrigger>
                  </MenubarMenu>
                )
              )}
            </Menubar>
          </div>
        </div>
      )}

      {/* Section Modals */}
      {menuAction === "ABOUT ME" && (
        <AboutSection
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === "PROJECTS" && (
        <ProjectsSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === "SKILLS" && (
        <SkillsSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === "CONTACT" && (
        <ContactSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === "RESEARCH" && (
        <ResearchSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === "ART" && (
        <ArtSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === "CV" && (
        <CVSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
    </div>
  );
}
