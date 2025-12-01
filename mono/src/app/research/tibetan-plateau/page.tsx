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

export default function TibetanPlateauPage() {
  const research = {
    title: "Origins and Slope Variations",
    subtitle: "A study of Longmen Shan and Min Shan Mountain Systems of the Tibetan Plateau and Sichuan Basin",
    heroImage: "/img/project_images/minshan.webp",
    color: "from-emerald-500 to-teal-600",
    date: "Apr – Nov 2022",
    tags: ["Geology", "QGIS", "Python", "ArcGIS", "Remote Sensing"],
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
            In a fulfilling learning opportunity with <strong className="text-white">Abijah Simons</strong>, 
            a PhD student in the EPSS department, I embarked on a profound journey exploring the Longmen Shan 
            and Min Shan Mountain systems that elegantly stretch across the Tibetan Plateau and the Sichuan Basin. 
            As part of her thesis, we employed visualizations to decipher the slope gradients present in both mountain systems.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Digital Elevation Modeling with QGIS</SectionHeading>
          <Paragraph>
            Our first step involved harnessing the capabilities of <strong className="text-white">QGIS</strong>. 
            Through this, we meticulously crafted cross-sectional elevation profiles using Digital Elevation Models (DEM), 
            revealing the hidden contours and elevations of both mountain systems.
          </Paragraph>
          <ImageFigure
            src="/img/project_images/qgis.webp"
            alt="DEM of Tibetan Plateau region"
            caption="DEM of Tibetan Plateau region"
          />
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Topographic Analysis with Python</SectionHeading>
          <Paragraph>
            Utilizing <strong className="text-white">Python</strong>, we successfully extracted the point-values 
            along the selected contours and formulated topographic swath profiles. The results were enlightening, 
            as they vividly illustrated the gradient variations between the two ranges. This furthered the quest 
            to understand how the origin and geological changes map to the evident slope variations.
          </Paragraph>
          <ImageFigure
            src="/img/project_images/profile.webp"
            alt="Topographic profiles"
            caption="Topographic profiles of the mountain systems"
          />
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Regional Mineralogical Mapping</SectionHeading>
          <Paragraph>
            Leveraging the capabilities of <strong className="text-white">ArcGIS</strong>, I created a digitized 
            regional mineralogical map which will be made publicly available for further research.
          </Paragraph>
          <Quote borderColor="border-emerald-500/50">
            This research contributes to our understanding of how geological origins and tectonic changes 
            manifest in observable slope variations across major mountain systems.
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

