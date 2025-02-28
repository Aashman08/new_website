"use client";

import {Heading} from "@/CustomComponents/Heading"
import { Text } from "@/CustomComponents/Typography";
import React, { useState, useEffect } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import ProjectsModal from "./projects/page"
import AboutMeModal from "./about/page";
import ContactModal from "./contact/page";
import ArtModal from "./art/page";
import SkillsModal from "./skills/page";
import ResearchModal from "./research/page";
import CVModal from "./CV/page"; 

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
      }, 0); // Adjust delay to match your closing animation, if any.
    } else {
      setMenuAction(action);
      if (["ABOUT ME", "PROJECTS", "CV", "SKILLS", "CONTACT", "RESEARCH", "ART"].includes(action)) {
        setIsModalOpen(true);
      }
    }
    // Add logic for other menu actions (e.g., PROJECTS, CONTACT)
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
            {/* <h1 className="text-5xl font-bold tracking-widest">AASHMAN RASTOGI</h1> */}
            {/* <p className="mt-4 text-xl font-thin tracking-widest">STATISTICS AND DATA SCIENCE</p> */}
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

    

      {/* Modals */}
      {menuAction === "ABOUT ME" && (
        <AboutMeModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick} // Pass the callback to the modal
          // viewportHeight={viewportHeight}
        />
      )}
      {menuAction === "PROJECTS" && (
        <ProjectsModal 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
        />
      )}
      {menuAction === "SKILLS" && (
        <SkillsModal 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
        />
      )}
      {menuAction === "CONTACT" && (
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
        />
      )}
      {menuAction === "RESEARCH" && (
        <ResearchModal 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
        />
      )}
      {menuAction === "ART" && (
        <ArtModal 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
        />
      )}
      {menuAction === "CV" && (
        <CVModal 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
        />

      )}
      {/* Add other modals here for PROJECTS, CV, etc. */}
    </div>
  );
}
