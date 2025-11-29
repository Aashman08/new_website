"use client";

import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Typography";
import React, { useState, useEffect } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

// Section components
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CVSection from "@/components/sections/CVSection";
import ContactSection from "@/components/sections/ContactSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ArtSection from "@/components/sections/ArtSection";

// Map URL section params to menu actions
const sectionMap: Record<string, string> = {
  "about": "ABOUT ME",
  "projects": "PROJECTS",
  "cv": "CV",
  "contact": "CONTACT",
  "research": "RESEARCH",
  "art": "ART",
};

// Storage key for persisting section state
const SECTION_STORAGE_KEY = "currentSection";

// Get initial section from URL params or sessionStorage (runs synchronously)
const getInitialSection = (): string | null => {
  if (typeof window === "undefined") return null;
  
  // First check URL params (for direct navigation like /?section=projects)
  const params = new URLSearchParams(window.location.search);
  const urlSection = params.get("section");
  if (urlSection && sectionMap[urlSection]) {
    // Clean up URL immediately
    window.history.replaceState({}, "", "/");
    return sectionMap[urlSection];
  }
  
  // Then check sessionStorage (for back button navigation)
  const stored = sessionStorage.getItem(SECTION_STORAGE_KEY);
  if (stored) {
    // Clear it so refreshing the page goes to landing
    sessionStorage.removeItem(SECTION_STORAGE_KEY);
    return stored;
  }
  
  return null;
};

export default function HomePage() {
  // Get initial section once (to avoid calling getInitialSection twice)
  const [initialSection] = useState<string | null>(() => getInitialSection());
  
  // Initialize state from the stored section - no useEffect delay
  const [menuAction, setMenuAction] = useState<string | null>(initialSection);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(initialSection !== null);
  const [viewportHeight, setViewportHeight] = useState(0);

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
        if (["ABOUT ME", "PROJECTS", "CV", "CONTACT", "RESEARCH", "ART"].includes(action)) {
          setIsModalOpen(true);
          // Save to sessionStorage for back button navigation
          sessionStorage.setItem(SECTION_STORAGE_KEY, action);
        }
      }, 0);
    } else {
      setMenuAction(action);
      if (["ABOUT ME", "PROJECTS", "CV", "CONTACT", "RESEARCH", "ART"].includes(action)) {
        setIsModalOpen(true);
        // Save to sessionStorage for back button navigation
        sessionStorage.setItem(SECTION_STORAGE_KEY, action);
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setMenuAction(null);
    // Clear sessionStorage when closing modal (user explicitly closed it)
    sessionStorage.removeItem(SECTION_STORAGE_KEY);
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
              {["ABOUT ME", "PROJECTS", "CV", "CONTACT", "RESEARCH", "ART"].map(
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
