"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import MainMenubar from "@/components/layout/MainMenubar";
import { Button } from "@/components/ui/button";
import { getMenuItemsExcluding, type SectionValue } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface SectionModalProps {
  section: SectionValue;
  isOpen: boolean;
  onMenuItemClick?: (item: string) => void;
  className?: string;
  children: React.ReactNode;
}

// Full-screen overlay shared by every section: locks page scroll, resets its own
// scroll on open, and pins the menu of the other sections at the top.
export const SectionModal = forwardRef<HTMLDivElement, SectionModalProps>(
  ({ section, isOpen, onMenuItemClick, className, children }, ref) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => modalRef.current as HTMLDivElement);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        if (modalRef.current) {
          modalRef.current.scrollTop = 0;
        }
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <div
        ref={modalRef}
        className={cn("fixed inset-0 z-50 overflow-y-auto bg-black/80 font-sans", className)}
      >
        <div className="fixed top-6 sm:top-8 left-0 right-0 z-[60] px-4 flex justify-center">
          <MainMenubar
            titles={getMenuItemsExcluding([section])}
            onItemClick={(title) => onMenuItemClick?.(title)}
          />
        </div>
        {children}
      </div>
    );
  }
);
SectionModal.displayName = "SectionModal";

// Black content card with a close button in the top-right corner.
export const SectionPanel = ({
  onClose,
  className,
  children,
}: {
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "relative w-full max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-28 mb-6 md:mb-10 p-4 sm:p-6 md:p-10 bg-black text-white rounded-lg shadow-lg",
      className
    )}
  >
    <Button
      onClick={onClose}
      variant="ghost"
      size="icon"
      className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/10"
    >
      <X className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="sr-only">Close</span>
    </Button>
    {children}
  </div>
);

export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col items-center pt-2 justify-center mb-6 sm:mb-8 md:mb-10", className)}>
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl sm:text-3xl md:text-5xl font-light text-white tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase drop-shadow-[0_0_24px_rgba(255,255,255,0.10)]"
    >
      {children}
    </motion.h2>
  </div>
);
