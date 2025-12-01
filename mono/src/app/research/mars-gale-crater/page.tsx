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
} from "@/features/research";

export default function MarsGaleCraterPage() {
  const research = {
    title: "Exploring the Possibility of Life on Mars",
    subtitle: "An In-depth Review of Gale Crater",
    heroImage: "/img/project_images/space.webp",
    color: "from-orange-500 to-red-600",
    date: "2022",
    tags: ["Astrobiology", "Mars", "Planetary Science", "Literature Review"],
    paperLink: "https://github.com/Aashman08/Mars_Review_Paper/blob/d7269c16b001cbb392d79513981d78290072f5d4/Gale%20crater%20paper%20copy.pdf"
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
            <IconArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="text-xs sm:text-sm font-medium">Back</span>
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

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6"
            >
              {research.tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-5xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight"
              style={{ textTransform: "none", letterSpacing: "-0.02em" }}
            >
              {research.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl"
            >
              {research.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3 sm:mt-4 md:mt-6"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-400">
                <IconCalendar size={14} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm md:text-base">{research.date}</span>
              </div>
              <a
                href={research.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors text-xs sm:text-sm font-medium"
              >
                Read Paper
                <IconExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-24">
        <Section>
          <Paragraph>
            My research delves deep into the captivating geological history of Gale Crater on Mars, 
            aiming to illuminate how this significant feature was formed and how its environment has evolved over time. 
            I rely on the <strong className="text-white">Mars Reconnaissance Orbiter (MRO)</strong>, along with 
            invaluable data from the <strong className="text-white">Mars Science Laboratory (MSL) Curiosity Rover</strong>, 
            to answer pivotal questions about the Martian landscape and its potential for sustaining life.
          </Paragraph>
        </Section>

        <ImageFigure
          src="/img/project_images/Gale_Crater2.webp"
          alt="Curiosity Rover journey"
          caption="Curiosity Rover journey of Gale Crater"
        />

        <Divider />

        <Section>
          <SectionHeading>Formation & Sedimentary Structures</SectionHeading>
          <Paragraph>
            The formation of Gale Crater is a subject of particular interest, given its complex sedimentary structures. 
            By carefully analyzing the sedimentary evidence captured by MRO, I offer insights into the initial conditions 
            and processes that led to the creation of this intriguing Martian landmark.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Evidence of Liquid Water</SectionHeading>
          <Paragraph>
            A cornerstone of this review is examining the evidence for the <strong className="text-white">historical 
            presence of liquid water</strong> in Gale Crater. My work elaborates on previous studies that have identified 
            fan-like deposits and small channels on the northwestern rim of the crater. These features suggest the past 
            existence of flowing water, possibly even forming a lake, adding a new layer of complexity to our understanding 
            of Martian history.
          </Paragraph>
          <ImageFigure
            src="/img/project_images/Gale_Crater.webp"
            alt="Topographic profile of Gale Crater"
            caption="Topographic profile of Gale Crater"
          />
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Hydrothermal Activity</SectionHeading>
          <Paragraph>
            My analysis also extends to the role of hydrothermal activity in shaping the crater&apos;s environment. 
            I pay close attention to findings from the Curiosity Rover, particularly those concerning alteration halos 
            in the Murray and Stimpson formations. These features have important implications for the mineralogical 
            makeup of Gale Crater and contribute to our broader understanding of the region&apos;s environmental history.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Organics & Habitability</SectionHeading>
          <Paragraph>
            One of the most groundbreaking aspects of previous research focuses on the <strong className="text-white">organics 
            discovered in Gale Crater</strong> by the Curiosity Rover. These organic materials could have significant implications 
            for the potential habitability of the region, making these findings especially relevant for future Mars missions 
            aimed at identifying signs of past or present life.
          </Paragraph>
          <ImageFigure
            src="/img/project_images/methane.webp"
            alt="Probability of methane release"
            caption={
              <a 
                href="https://doi.org/10.1038/s41561-019-0331-9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                Probability of methane release - Nature Geoscience
              </a>
            }
          />
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Implications for Future Missions</SectionHeading>
          <Quote borderColor="border-orange-500/50">
            Understanding the geological and climatic transformations of Gale Crater offers valuable contributions 
            to the scientific community. It serves as a guidepost for future missions seeking to identify regions 
            of Mars that have a high probability of containing bio-signatures.
          </Quote>
          <Paragraph>
            This review aims to highlight the importance of different evidences pivotal in the ongoing quest to 
            comprehend the Red Planet&apos;s capacity to sustain life, both in the past and potentially in the future.
          </Paragraph>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <Link
            href="/"
            onClick={handleBackToResearch}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:bg-neutral-200 transition-colors"
          >
            <IconArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            Back to Research
          </Link>
        </div>
      </footer>
    </div>
  );
}

