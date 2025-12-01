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

// Video embed component
const VideoEmbed = ({
  url,
  caption,
}: {
  url: string;
  caption?: string;
}) => (
  <figure className="my-6 sm:my-8 md:my-10 max-w-3xl mx-auto">
    <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
      <iframe
        src={url}
        className="w-full h-full"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    {caption && (
      <figcaption className="text-center text-neutral-500 text-xs sm:text-sm mt-3 sm:mt-4 italic px-2">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Main Page Component
export default function AIEngineeringDeloittePage() {
  // Project metadata
  const project = {
    title: "Generative AI for Code & Data",
    subtitle: "GPT-powered coding assistant and natural language data analysis platform at Deloitte",
    heroImage: "/img/deloitte.webp",
    color: "from-emerald-500 to-blue-600",
    date: "Summer 2023",
    tags: ["Generative AI", "GPT-3.5", "PandasAI", "Prompt Engineering", "Python"],
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
            onClick={handleBackToProjects}
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
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay`} />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6"
            >
              {project.tags.slice(0, 5).map((tag, i) => (
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
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight"
              style={{ textTransform: "none", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl"
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 md:mt-6 text-neutral-400"
            >
              <IconCalendar size={14} className="sm:w-[18px] sm:h-[18px]" />
              <span className="text-xs sm:text-sm md:text-base">{project.date}</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-24">
        {/* Introduction Video */}
        <Section>
          <VideoEmbed
            url="https://www.youtube.com/embed/5SxYQvWsMCw"
            caption="AI transformation in financial institutions and businesses. Credits: Deloitte AI Institute US"
          />
        </Section>

        {/* Overview */}
        <Section>
          <SectionHeading>Overview</SectionHeading>
          <Paragraph>
            During my internship at Deloitte, I developed two enterprise AI solutions that aimed to democratize 
            technical capabilities across the organization. Both projects leveraged{" "}
            <a 
              href="https://cobusgreyling.medium.com/openai-16k-context-3-5-turbo-model-1ebd979041dc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              GPT-3.5 Turbo
            </a>{" "}
            with custom prompt engineering to create intuitive, natural language interfaces.
          </Paragraph>
          <Paragraph>
            <span className="text-neutral-500 italic">
              Note: These projects were developed just prior to OpenAI&apos;s release of Codex, 
              making them early explorations into AI-assisted development using prompt engineering 
              techniques before dedicated code models became available.
            </span>
          </Paragraph>
        </Section>

        <Divider />

        {/* Project 1: AI Coding Assistant */}
        <Section>
          <SectionHeading>AI Coding Assistant</SectionHeading>
          <Paragraph>
            The first solution was a comprehensive code generation system supporting code creation, 
            explanation, conversion, debugging, and optimization. The system implements a robust 
            <strong className="text-white"> Flow Control System</strong> with moderation checks and 
            input validation to ensure safe and reliable outputs.
          </Paragraph>
          <Paragraph>
            Key architectural features include <strong className="text-white">Task Execution</strong> with 
            self-evaluation for quality assurance, robust <strong className="text-white">Error Handling</strong> through 
            comprehensive try-except blocks, and <strong className="text-white">Conversational Memory</strong> for 
            follow-up questions and contextual understanding.
          </Paragraph>
        </Section>

        <Divider />

        {/* Project 2: Data Analysis Platform */}
        <Section>
          <SectionHeading>Intelligent Data Analysis</SectionHeading>
          <Paragraph>
            The second solution democratized advanced DataFrame analysis using GPT and PandasAI. Users could 
            upload datasets and ask questions in natural language, receiving comprehensive answers with 
            textual explanations, graphical representations, and interactive data visualizations.
          </Paragraph>
          <Paragraph>
            A key innovation was <strong className="text-white">Smart Data Merging</strong>—prompt engineering 
            enabled the model to automatically select relevant DataFrames and identify common columns for 
            joining disparate data sources.
          </Paragraph>
        </Section>

        <ImageFigure
          src="/img/project_images/panda1.webp"
          alt="PandasAI Integration"
          caption="PandasAI integration for natural language data queries"
          maxWidth="max-w-3xl"
        />

        <Divider />

        {/* Technical Features */}
        <Section>
          <SectionHeading>Technical Highlights</SectionHeading>
          <Paragraph>
            <strong className="text-white">Interactive Visualizations:</strong> HTML and JavaScript-powered plots 
            that go beyond standard Python matplotlib outputs, enhancing the user experience with zoomable, 
            filterable charts.
          </Paragraph>
          <Paragraph>
            <strong className="text-white">Missing Data Handling:</strong> Intelligent interpolation and null value 
            filling tailored to data types, using RSS (Residual Sum of Squares) minimization for numerical columns 
            to ensure accurate data representation.
          </Paragraph>
          <Paragraph>
            <strong className="text-white">Quality Assurance:</strong> Extensive testing achieved a{" "}
            <span className="text-emerald-400">90%+ accuracy rate</span> across both tools, with multiple 
            checkpoints and self-evaluation mechanisms to ensure output quality.
          </Paragraph>
        </Section>

        <Divider />

        {/* Conclusion */}
        <Section>
          <SectionHeading>Impact</SectionHeading>
          <Quote borderColor="border-emerald-500/50">
            Both tools were designed to empower users to leverage AI without deep technical expertise, 
            transforming how teams interact with code and data—democratizing capabilities that were 
            previously limited to technical specialists.
          </Quote>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <Link
            href="/"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:bg-neutral-200 transition-colors"
          >
            <IconArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            Back to Projects
          </Link>
        </div>
      </footer>
    </div>
  );
}

