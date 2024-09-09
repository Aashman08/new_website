"use client"

import React, { useState, useEffect } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import AboutMeModal from "@/components/ui/AboutMeModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = (action: string) => {
    setIsContentVisible(false);
    if (action === 'ABOUT ME') {
      setIsModalOpen(true);
    }
    // Handle other menu actions here
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      {isContentVisible && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white bg-black bg-opacity-50">
          <div className="absolute top-[55%] transform -translate-y-1/2 text-center">
            <h1 className="text-5xl font-medium bold tracking-widest"> AASHMAN RASTOGI </h1>
            <p className="font-thin tracking-widest"> STATISTICS AND DATA SCIENCE </p>
          </div>
          <div className="absolute bottom-40 mb-8 flex space-x-4 justify-center">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger onClick={() => handleMenuClick('ABOUT ME')}>ABOUT ME</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger onClick={() => handleMenuClick('PROJECTS')}>PROJECTS</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger onClick={() => handleMenuClick('CV')}>CV</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger onClick={() => handleMenuClick('CONTACT')}>CONTACT</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger onClick={() => handleMenuClick('RESEARCH')}>RESEARCH</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger onClick={() => handleMenuClick('ART')}>ART</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      )}

      {/* About Me Modal */}
      <AboutMeModal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false); setIsContentVisible(true);}} viewportHeight={viewportHeight} />
    </div>
  )
}