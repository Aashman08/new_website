"use client"

import React from "react";
import Image from "next/image";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandGithub } from "@tabler/icons-react";
import { SectionModal, SectionPanel, SectionTitle } from "@/components/layout/SectionModal";
import { SECTIONS } from "@/config";
import type { SectionProps } from "@/types";

const ContactSection: React.FC<SectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
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

  return (
    <SectionModal section={SECTIONS.CONTACT} isOpen={isOpen} onMenuItemClick={onMenuItemClick}>
      <SectionPanel onClose={onClose} className="max-w-4xl py-6 sm:py-8 md:py-10">
        <SectionTitle>Contact</SectionTitle>

        {/* Moon Image */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <Image
            src="/img/project_images/moon.webp"
            alt="Moon phases"
            width={700}
            height={200}
            className="rounded-2xl w-full max-w-[700px] h-auto border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* Introduction */}
        <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12">
          If you have any questions, comments or suggestions regarding my work or would like to collaborate, or want to connect, please do get in touch. I&apos;d love to hear from you!
        </p>

        {/* Email Section */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">
            Email
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base break-all sm:break-normal">
            <a href="mailto:aashman@kindo.ai" className="hover:text-white transition-colors">aashman@kindo.ai</a>
            <span className="hidden sm:inline">{", "}</span>
            <br className="sm:hidden" />
            <a href="mailto:aashman080303@gmail.com" className="hover:text-white transition-colors">aashman080303@gmail.com</a>
          </p>
        </div>

        {/* Location Section */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">
            Location
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base">Los Angeles, CA</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 sm:p-3 rounded-full border border-white/15 bg-white/[0.03] ${social.color} hover:border-cyan-100/30 hover:bg-cyan-100/10 hover:scale-110 transition-all duration-300`}
              aria-label={social.label}
            >
              <social.icon size={20} className="sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
      </SectionPanel>
    </SectionModal>
  );
};

export default ContactSection;

