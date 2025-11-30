"use client";

import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Typography";
import React, { useEffect, useRef, useState } from "react";
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

// Safari detection utility
// From MDN: Chrome reports both as Chrome and Safari, so check for Safari AND absence of Chrome
function isSafari(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/Chrome/i);
  const macSafari = ua.includes('Safari') && !ua.includes('Chrome') && !ua.includes('Chromium');
  return iOSSafari || macSafari;
}

// AutoPlay Video Component with multiple fallback strategies
function AutoPlaySilentVideo({ className, video }: { className?: string; video: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useSafariImgFallback, setUseSafariImgFallback] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if Safari and use img fallback
    if (isSafari()) {
      setUseSafariImgFallback(true);
      return;
    }

    // For non-Safari browsers, try to force play
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // If video.play() fails, try Safari img fallback as last resort
        setUseSafariImgFallback(true);
      });
    }
  }, []);

  // Server-side render: show video tag (will be replaced on client)
  if (!isMounted) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{
          __html: `
            <video
              autoplay
              loop
              muted
              playsinline
              preload="auto"
              style="width: 100%; height: 100%; object-fit: cover;"
            >
              <source src="${video}" type="video/mp4" />
            </video>
          `,
        }}
      />
    );
  }

  // Safari fallback: use <img> tag which auto-plays MP4 without restrictions!
  // This is a bleeding edge feature that Safari supports
  if (useSafariImgFallback) {
    return (
      <div className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    );
  }

  // Default: use video tag with JavaScript force play
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `
          <video
            id="bg-video"
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            style="width: 100%; height: 100%; object-fit: cover;"
          >
            <source src="${video}" type="video/mp4" />
          </video>
          <script>
            (function() {
              var video = document.getElementById('bg-video');
              if (video) {
                video.muted = true;
                video.play().catch(function() {});
              }
            })();
          </script>
        `,
      }}
    />
  );
}

export default function HomePage() {
  const { menuAction, isModalOpen, handleMenuClick, handleModalClose } = useSection();

  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Background Video - uses defaultMuted fix for React's muted attribute bug */}
      <AutoPlaySilentVideo 
        video="/video/space.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Overlay Content */}
      {!isModalOpen && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 md:px-0">
          <div className="absolute top-[57%] transform -translate-y-1/2 text-center w-full px-4">
            <Heading level="h1">AASHMAN RASTOGI</Heading>
            <Text className="text-xs sm:text-sm md:text-base" style={{ letterSpacing: '0.15em' }}>ENTREPRENEURSHIP, AI AND SPACE</Text>
          </div>
          <div className="absolute bottom-36 sm:bottom-28 md:bottom-36 lg:bottom-52 w-full flex justify-center px-4">
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
