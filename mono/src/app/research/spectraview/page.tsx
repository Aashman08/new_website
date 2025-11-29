"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCalendar, IconExternalLink } from "@tabler/icons-react";
import {
  handleBackToResearch,
  Section,
  SectionHeading,
  Paragraph,
  ImageFigure,
  Divider,
  Quote,
} from "@/components/features/research/ResearchPageComponents";

export default function SpectraViewPage() {
  const research = {
    title: "AstroPhotonics Technology Lab",
    subtitle: "Revolutionizing trace gas and environmental monitoring from satellites with ultra-high precision photonic spectrograph technology",
    heroImage: "/img/satellite.png", 
    color: "from-violet-500 to-purple-600",
    date: "Dec 2024 – June 2025",
    tags: ["Satellite Sensing", "Python", "Signal Processing", "Startup", "Stanford Collaboration"],
    websiteLink: "https://spectraview.co",
    labLink: "https://gatkine.astro.ucla.edu/research.html"
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            onClick={handleBackToResearch}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
          >
            <IconArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Research</span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/satellite.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${research.color} opacity-20 mix-blend-overlay`} />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {research.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              style={{ textTransform: "none", letterSpacing: "-0.02em" }}
            >
              {research.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-neutral-300 max-w-2xl"
            >
              {research.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 mt-6"
            >
              <div className="flex items-center gap-2 text-neutral-400">
                <IconCalendar size={18} />
                <span>{research.date}</span>
              </div>
              <a
                href={research.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-400 hover:bg-violet-500/30 transition-colors text-sm font-medium"
              >
                Visit Spectra View
                <IconExternalLink size={14} />
              </a>
              <a
                href={research.labLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-400 hover:bg-violet-500/30 transition-colors text-sm font-medium"
              >
                Prof. Gatkine's Lab
                <IconExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <Section>
          <Paragraph>
            I began as an <strong className="text-white">Undergraduate Research Assistant</strong> at the 
            AstroPhotonics Technology Lab under <strong className="text-white">Prof. Pradip Gatkine</strong> at UCLA, 
            and then transitioned to become a <strong className="text-white">Founding Engineer</strong> for{" "}
            <a 
              href="https://spectraview.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 underline underline-offset-2"
            >
              Spectra View
            </a>
            , a startup born from this lab focused on revolutionizing environmental monitoring from space.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>The Vision</SectionHeading>
          <Quote borderColor="border-violet-500/50">
            Delivering ultra-high precision trace gas detection at the lowest cost — detecting CO₂ and methane 
            at 2.65 parts-per-billion (ppb), along with wildfires, heat signatures, and beyond.
          </Quote>
          <Paragraph>
            Spectra View is developing a compact photonic spectrograph chip for satellites that can monitor 
            atmospheric trace gases with unprecedented precision. This technology has applications in climate 
            monitoring, wildfire detection, and industrial emissions tracking.
          </Paragraph>
          <figure className="my-10 max-w-3xl mx-auto">
            <Image
              src="/img/chip.png"
              alt="Photonic chip architecture"
              width={900}
              height={500}
              className="w-full h-auto rounded-2xl"
            />
            <figcaption className="text-center text-neutral-500 text-sm mt-4 italic">
              The on-chip spectrograph uses waveguides and a free propagation region to separate light into its spectral components
            </figcaption>
          </figure>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Software Development for Seed Fundraising</SectionHeading>
          <Paragraph>
            Led software development to support ultra-high-precision satellite sensing and atmospheric trace 
            gas detection for an early product demo. I integrated analysis tooling, visualization, and reporting 
            to showcase spectrograph capabilities for <strong className="text-white">Seed fundraising</strong>.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>End-to-End Data Pipelines</SectionHeading>
          <Paragraph>
            Built comprehensive <strong className="text-white">Python data pipelines</strong> — from raw hardware 
            signal acquisition to signal-processing algorithms — enabling trace gas detection below{" "}
            <strong className="text-white">2.65 ppb at 0.05 nm spectral resolution</strong>.
          </Paragraph>
          <ul className="my-6 space-y-2 list-disc pl-10">
            <li className="text-neutral-300 text-lg">Raw hardware signal acquisition</li>
            <li className="text-neutral-300 text-lg">Signal processing algorithms</li>
            <li className="text-neutral-300 text-lg">Trace gas detection and quantification</li>
            <li className="text-neutral-300 text-lg">Visualization and reporting tools</li>
          </ul>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Research Collaborations</SectionHeading>
          <Paragraph>
            Deployed APIs and data services that connected the spectrograph to multiple experimental testbeds 
            in collaboration with <strong className="text-white">Stanford researchers</strong> and industry partners, 
            enabling high-resolution spectral analysis across diverse conditions.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>The Team</SectionHeading>
          <Paragraph>
            Working alongside brilliant researchers and engineers at the AstroPhotonics Technology Lab, 
            pushing the boundaries of what's possible in satellite-based environmental monitoring.
          </Paragraph>
          <ImageFigure
            src="/img/team.png"
            alt="AstroPhotonics Technology Lab team"
            caption="The AstroPhotonics Technology Lab team at UCLA"
            maxWidth="max-w-3xl"
          />
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <Link
            href="/"
            onClick={handleBackToResearch}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
          >
            <IconArrowLeft size={18} />
            Back to Research
          </Link>
        </div>
      </footer>
    </div>
  );
}

