"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandGithub } from "@tabler/icons-react";
import MainMenubar from "@/components/layout/MainMenubar";
import { Button } from "@/components/ui/button";
import type { SectionProps } from "@/types";

const ContactSection: React.FC<SectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
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

  const MenuTitles = ["ABOUT ME", "PROJECTS", "RESEARCH", "ART"];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/aashman-rastogi-7b76a1189/",
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      color: "text-[#0077B5]",
    },
    {
      href: "https://www.instagram.com/aashman08/",
      icon: IconBrandInstagram,
      label: "Instagram",
      color: "text-[#E4405F]",
    },
    {
      href: "https://github.com/Aashman08/",
      icon: IconBrandGithub,
      label: "GitHub",
      color: "text-[#A6CE39]",
    }
  ];

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-95 font-sans"
    >
      <div className="relative w-full max-w-4xl mx-auto mt-20 mb-10 px-6 md:px-10 py-10 text-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white tracking-wider">
            CONTACT
          </h2>
        </div>

        {/* Moon Image */}
        <div className="flex justify-center mb-12">
          <Image
            src="/img/project_images/moon.jpeg"
            alt="Moon phases"
            width={700}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Introduction */}
        <p className="text-neutral-300 text-lg leading-relaxed mb-12">
          If you have any questions, comments or suggestions regarding my work or would like to collaborate, or want to connect, please do get in touch. I&apos;d love to hear from you!
        </p>

        {/* Email Section */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-white uppercase tracking-[0.2em] mb-4">
            Email
          </h3>
          <p className="text-neutral-300">
            <a href="mailto:aashman@kindo.ai" className="hover:text-white transition-colors">aashman@kindo.ai</a>
            {", "}
            <a href="mailto:aashman080303@gmail.com" className="hover:text-white transition-colors">aashman080303@gmail.com</a>
          </p>
        </div>

        {/* Location Section */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-white uppercase tracking-[0.2em] mb-4">
            Location
          </h3>
          <p className="text-neutral-300">Los Angeles, CA</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full border border-white/20 ${social.color} hover:border-white/40 hover:scale-110 transition-all duration-300`}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* MainMenubar */}
        <div className="mt-16 mb-8">
          <MainMenubar titles={MenuTitles} onItemClick={(title) => onMenuItemClick?.(title)} />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

