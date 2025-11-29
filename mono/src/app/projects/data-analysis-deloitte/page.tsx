"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import {
  handleBackToProjects,
  Section,
  SectionHeading,
  Paragraph,
  ImageFigure,
  Divider,
  Quote,
} from "@/features/projects";

// Main Page Component
export default function DataAnalysisDeloittePage() {
  // Project metadata
  const project = {
    title: "AI for Data Analysis",
    subtitle: "Advanced DataFrame analysis and visualizations with GPT and PandasAI",
    heroImage: "/img/ai_analysis.png",
    color: "from-blue-500 to-indigo-600",
    date: "Summer 2023",
    tags: ["GPT", "PandasAI", "Data Visualization", "Python", "NLP"],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            onClick={handleBackToProjects}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
          >
            <IconArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay`} />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {project.tags.map((tag, i) => (
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
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-neutral-300 max-w-2xl"
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mt-6 text-neutral-400"
            >
              <IconCalendar size={18} />
              <span>{project.date}</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">

        {/* Overview */}
        <Section>
          <SectionHeading>Overview</SectionHeading>
          <Paragraph>
            The primary objective of this project is to democratize advanced DataFrame analysis, 
            making it accessible to both technical and non-technical users. By allowing users to 
            upload datasets and ask questions in natural language, the system generates comprehensive 
            answers with textual explanations, graphical representations, and data visualizations.
          </Paragraph>
        </Section>

        <br />

        {/* Technical Approach */}
        <Section>
          <SectionHeading>Technical Approach</SectionHeading>
          <Paragraph>
            The project integrates GPT and PandasAI, customized for specific use-cases, including 
            prompt modifications and function edits. This ensures versatile and accurate management 
            of diverse data types and queries.
          </Paragraph>
          <Paragraph>
            A significant feature is merging data from disparate sources. Prompt engineering enables 
            the model to select relevant DataFrames and identify common columns for merging, ensuring 
            comprehensive and accurate answers.
          </Paragraph>
        </Section>

        <ImageFigure
          src="/img/project_images/panda1.png"
          alt="PandasAI Integration"
          caption="PandasAI"
          maxWidth="max-w-3xl"
        />

        <Divider />

        {/* Data Visualization */}
        <Section>
          <SectionHeading>Data Visualization & Accuracy</SectionHeading>
          <Paragraph>
            The project excels in data visualization, using HTML and JavaScript for interactive plots, 
            enhancing the user experience. Extensive testing has achieved a <strong className="text-white">90% accuracy rate</strong>, 
            with multiple checkpoints to ensure output quality.
          </Paragraph>
        </Section>

        <Divider />

        {/* Missing Data Handling */}
        <Section>
          <SectionHeading>Handling Missing Data</SectionHeading>
          <Paragraph>
            For missing data, the system offers interpolation and filling of null values, tailored to 
            the data type. Numerical columns use interpolation techniques minimizing RSS (Residual Sum of Squares), 
            ensuring accurate data representation.
          </Paragraph>
        </Section>

        <Divider />

        {/* Conclusion */}
        <Section>
          <SectionHeading>Impact</SectionHeading>
          <Quote borderColor="border-blue-500/50">
            This project transforms DataFrame analysis into an intuitive and user-friendly experience, 
            leveraging AI and customization to make data science accessible to all.
          </Quote>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <Link
            href="/"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
          >
            <IconArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </footer>
    </div>
  );
}

