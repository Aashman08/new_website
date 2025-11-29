"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCalendar, IconExternalLink } from "@tabler/icons-react";
import {
  handleBackToProjects,
  Section,
  SectionHeading,
  Paragraph,
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
  <figure className="my-10 max-w-3xl mx-auto">
    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
      <iframe
        src={url}
        className="w-full h-full"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    {caption && (
      <figcaption className="text-center text-neutral-500 text-sm mt-4 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Main Page Component
export default function GenAIDeloittePage() {
  // Project metadata
  const project = {
    title: "Generative AI at Deloitte",
    subtitle: "Comprehensive system for code generation, explanation, conversion, debugging, and optimization",
    heroImage: "/img/deloitte.png",
    color: "from-emerald-500 to-teal-600",
    date: "Summer 2023",
    tags: ["Generative AI", "GPT-3.5", "Prompt Engineering", "Python"],
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
        {/* Introduction Video */}
        <Section>
          <VideoEmbed
            url="https://www.youtube.com/embed/5SxYQvWsMCw"
            caption="A video explaining how AI is being leveraged to bring about transformation in financial institutions and businesses. Credits: Deloitte AI Institute US"
          />
        </Section>

        {/* Overview */}
        <Section>
          <SectionHeading>Overview</SectionHeading>
          <Paragraph>
            This project aims to make coding accessible to everyone, including non-technical users, 
            by leveraging the{" "}
            <a 
              href="https://cobusgreyling.medium.com/openai-16k-context-3-5-turbo-model-1ebd979041dc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              GPT-3.5 Turbo
            </a>{" "}
            model fine-tuned with prompt engineering for specific tasks.
          </Paragraph>
          <Paragraph>
            <span className="text-neutral-500 italic">
              Note: This project was developed just prior to OpenAI&apos;s release of Codex, 
              making it an early exploration into AI-assisted code generation using prompt engineering 
              techniques before dedicated code models became available.
            </span>
          </Paragraph>
        </Section>

        <Divider />

        {/* Approach */}
        <Section>
          <SectionHeading>Approach</SectionHeading>
          <Paragraph>
            The system implements a <strong className="text-white">Flow Control System</strong> that 
            ensures safety and efficiency with moderation checks and input validation. Valid inputs 
            trigger the requested <strong className="text-white">Task Execution</strong>, followed by 
            self-evaluation for quality and accuracy. <strong className="text-white">Error Handling</strong> is 
            managed through robust try-except blocks for unexpected situations. The system also supports 
            <strong className="text-white"> Conversational Capability</strong> for follow-up questions and 
            recurrent tasks using memory storage and context understanding.
          </Paragraph>
        </Section>

        <Divider />

        {/* Deep Learning Video */}
        <Section>
          <SectionHeading>Building Systems with ChatGPT</SectionHeading>
          <Paragraph>
            The architecture draws inspiration from best practices in building robust AI systems, 
            incorporating safety mechanisms and evaluation frameworks.
          </Paragraph>
          <VideoEmbed
            url="https://www.youtube.com/embed/BunESRhYhec"
            caption="A video by DeepLearning.AI on building systems using ChatGPT"
          />
        </Section>

        <Divider />

        {/* Conclusion */}
        <Section>
          <SectionHeading>Impact</SectionHeading>
          <Quote borderColor="border-emerald-500/50">
            The goal is to democratize coding, making it user-friendly and personalized, 
            empowering users to engage in meaningful coding conversations and effectively 
            apply coding concepts in their projects.
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

