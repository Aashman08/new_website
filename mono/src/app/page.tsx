"use client";

import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Typography";
import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

// Feature Section components
import { 
  AboutSection, 
  ProjectsSection, 
  ContactSection, 
  ResearchSection, 
  ArtSection 
} from "@/features";

// Hooks
import { useSection } from "@/hooks";

// Config
import { SECTIONS, MAIN_MENU_ITEMS } from "@/config";

export default function HomePage() {
  const { menuAction, isModalOpen, handleMenuClick, handleModalClose } = useSection();

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
              {MAIN_MENU_ITEMS.map((item) => (
                <MenubarMenu key={item}>
                  <MenubarTrigger onClick={() => handleMenuClick(item)}>
                    {item}
                  </MenubarTrigger>
                </MenubarMenu>
              ))}
            </Menubar>
          </div>
        </div>
      )}

      {/* Section Modals */}
      {menuAction === SECTIONS.ABOUT && (
        <AboutSection
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === SECTIONS.PROJECTS && (
        <ProjectsSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === SECTIONS.CONTACT && (
        <ContactSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === SECTIONS.RESEARCH && (
        <ResearchSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
      {menuAction === SECTIONS.ART && (
        <ArtSection 
          isOpen={isModalOpen} 
          onClose={handleModalClose}
          onMenuItemClick={handleMenuClick}
        />
      )}
    </div>
  );
}
