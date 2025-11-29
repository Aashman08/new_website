"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import {
  handleBackToResearch,
  Section,
  SectionHeading,
  Paragraph,
  ImageFigure,
  Divider,
  Quote,
} from "@/features/research";

export default function NASAShiftPage() {
  const research = {
    title: "SHIFT Campaign",
    subtitle: "Surface Biology and Geology High-Frequency Time Series to understand land and aquatic ecosystems",
    heroImage: "/img/project_images/field.jpeg",
    color: "from-yellow-500 to-amber-600",
    date: "2022",
    tags: ["NASA JPL", "Remote Sensing", "Hyperspectral Imaging", "Ecology", "Field Research"],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            onClick={handleBackToResearch}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
          >
            <IconArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Research</span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] overflow-hidden">
        <Image
          src={research.heroImage}
          alt={research.title}
          fill
          className="object-cover"
          priority
        />
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
              className="flex items-center gap-2 mt-6 text-neutral-400"
            >
              <IconCalendar size={18} />
              <span>{research.date}</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-24">
        <Section>
          <Paragraph>
            This research trip was a part of a project by <strong className="text-white">NASA JPL</strong> in 
            collaboration with the UCLA Department of Ecology and Evolutionary Biology under{" "}
            <strong className="text-white">Dr. Elsa Ordway&apos;s lab</strong> to link field measurements to 
            hyperspectral remote sensing data in order to understand weekly changes in plants and trees 
            such as their phenology.
          </Paragraph>
          <Paragraph>
            Field research was conducted at the <strong className="text-white">Sedgwick Reserve</strong> operated 
            by UC Santa Barbara.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Hyperspectral Imaging</SectionHeading>
          <Paragraph>
            The below image provides an example of what hyperspectral imagery produces for viewing phenology 
            (not related to this research in any way, only an example of what hyperspectral imagery can help visualize).
          </Paragraph>
          <ImageFigure
            src="/img/project_images/hyper.jpeg"
            alt="Hyperspectral imagery example"
            caption={
              <>
                Credit:{" "}
                <a 
                  href="https://www.researchgate.net/publication/339129897_Continental-scale_land_surface_phenology_from_harmonized_Landsat_8_and_Sentinel-2_imagery" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 underline"
                >
                  Continental-scale land surface phenology from harmonized Landsat 8 and Sentinel-2 imagery
                </a>
              </>
            }
          />
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Field Work & Sample Collection</SectionHeading>
          <Paragraph>
            Over the two days, we collected samples in pre-dawn and mid-day to take different measurements including:
          </Paragraph>
          <ul className="my-6 space-y-2 list-disc pl-6 sm:pl-10">
            <li className="text-neutral-300 text-sm sm:text-base md:text-lg">Pre-dawn water potential</li>
            <li className="text-neutral-300 text-sm sm:text-base md:text-lg">Mid-day water potential</li>
            <li className="text-neutral-300 text-sm sm:text-base md:text-lg">Relative water potential</li>
            <li className="text-neutral-300 text-sm sm:text-base md:text-lg">Turgor loss point</li>
          </ul>
          <Paragraph>
            I further assisted the JPL team and the research group in processing of samples which included 
            weighing, cutting, and storage in liquid nitrogen.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>A Once-in-a-Lifetime Experience</SectionHeading>
          <Quote borderColor="border-yellow-500/50">
            This opportunity gave me my first field trip experience and a chance to interact with NASA scientists. 
            Moreover, I was lucky to see the Milky Way galaxy with the naked eye for the first time and witnessed 
            a Falcon 9 launch from Vandenberg Air Force Base.
          </Quote>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-10 md:py-12">
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

