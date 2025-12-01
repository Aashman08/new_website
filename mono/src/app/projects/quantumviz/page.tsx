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
  ImageFigure,
  Divider,
  Callout,
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
export default function QuantumVizPage() {
  // Project metadata
  const project = {
    title: "QuantumViz",
    subtitle: "AI-powered quantum circuit design through natural language and interactive 3D visualization",
    heroImage: "/img/quantumn.webp",
    color: "from-pink-500 to-orange-500",
    date: "2024",
    tags: ["Quantum Computing", "OpenAI", "IBM Qiskit", "RAG", "Next.js", "Python"],
  };

  // Tech stack data
  const techStack = [
    { name: "OpenAI", desc: "Text generation & speech-to-text models" },
    { name: "Groq + LlamaIndex", desc: "RAG model for code generation" },
    { name: "IBM Qiskit", desc: "Quantum circuit simulation & visualization" },
    { name: "Selenium + Scrapy", desc: "Research paper parsing & web scraping" },
    { name: "Next.js + TypeScript", desc: "Full-stack web application" },
    { name: "Quirk", desc: "Interactive circuit editor" },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
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
              className="flex items-center gap-4 sm:gap-6 mt-3 sm:mt-4 md:mt-6"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-400">
                <IconCalendar size={14} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm md:text-base">{project.date}</span>
              </div>
              <a
                href="https://devpost.com/software/quantumviz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all text-xs sm:text-sm"
              >
                <IconExternalLink size={14} className="sm:w-[16px] sm:h-[16px]" />
                <span>Devpost</span>
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-24">
        {/* Demo Video */}
        <Section>
          <VideoEmbed
            url="https://www.youtube.com/embed/OuZSJU72B7s"
            caption="QuantumViz Demo — Transforming ideas into quantum circuits"
          />
        </Section>

        {/* The Problem */}
        <Section>
          <SectionHeading>The Problem</SectionHeading>
          <Paragraph>
            Quantum computing has the potential to transform technology and solve problems that classical 
            computers can&apos;t handle. At the crux of quantum computing is building quantum circuits—they&apos;re 
            like the ABC&apos;s of quantum computing, but unlike your usual ABC&apos;s, building quantum circuits 
            is very complicated, time-consuming, and difficult for even skilled researchers and developers.
          </Paragraph>
        </Section>

        <Divider />

        {/* Expert Insights */}
        <Section>
          <SectionHeading>Expert Insights</SectionHeading>
          <Quote borderColor="border-pink-500/50">
            &ldquo;A more visual and intuitive method for designing quantum circuits would be a game-changer, 
            especially if it allows us to visualize circuits in a multimodal way before even writing a 
            line of code.&rdquo;
            <span className="block mt-2 text-sm text-neutral-500">
              — Dr. Jens Palsberg, Quantum Computing Researcher, UCLA CS Faculty
            </span>
          </Quote>

          <Quote borderColor="border-orange-500/50">
            &ldquo;The ability to create quantum circuits through natural language is a breakthrough that 
            could revolutionize how we interact with these complex systems.&rdquo;
            <span className="block mt-2 text-sm text-neutral-500">
              — Dr. Allen Ho, Google Quantum AI, Quantum Qolab Founder
            </span>
          </Quote>

          <Quote borderColor="border-amber-500/50">
            &ldquo;One of the biggest challenges in quantum computing research is the cumbersome process of 
            manually coding LaTeX for circuit representations. A tool that generates circuit diagrams 
            and exports them directly to LaTeX would save time and enhance research efficiency.&rdquo;
            <span className="block mt-2 text-sm text-neutral-500">
              — Sam McArdle, Leading Quantum Scientist at AWS
            </span>
          </Quote>
        </Section>

        <Divider />

        {/* Solution */}
        <Section>
          <SectionHeading>Our Solution</SectionHeading>
          <Paragraph>
            QuantumViz is a quantum circuit generator that simplifies and enhances the process of 
            designing quantum circuits by text or speech using AI. It generates interactive 3D 
            visualizations, executable code snippets, and includes a customized chatbot trained on 
            Quantum Code Documentation and Research Papers.
          </Paragraph>
          <Callout title="Core Innovation" variant="info">
            Natural language to quantum circuit generation — making quantum computing accessible 
            without extensive coding knowledge.
          </Callout>
        </Section>

        {/* System Architecture */}
        <ImageFigure
          src="/img/quantum_system.webp"
          alt="QuantumViz System Architecture"
          caption="Simplifying the creation and visualization of quantum circuits through natural language"
          maxWidth="max-w-4xl"
        />

        <Divider />

        {/* Key Features */}
        <Section>
          <SectionHeading>Key Features</SectionHeading>
          
          <div className="space-y-6 my-6">
            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">Natural Language Interface</h4>
              <Paragraph>
                Generate circuit designs using text or speech input via OpenAI models. Users can 
                describe their desired circuit in plain English and watch it come to life.
              </Paragraph>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">3D Qubit Visualization</h4>
              <Paragraph>
                Interactive Bloch sphere visualizations powered by IBM Qiskit allow users to explore 
                qubit states in 3D before writing any code. Understand circuit design and flow intuitively.
              </Paragraph>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">Code & LaTeX Generation</h4>
              <Paragraph>
                Automatically generate executable Python/Qiskit code and export circuit diagrams 
                directly to LaTeX format—streamlining research documentation and presentations.
              </Paragraph>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">RAG-Powered Chatbot</h4>
              <Paragraph>
                A conversational agent built with Groq and LlamaIndex, trained on hundreds of 
                research papers and IBM Qiskit documentation. Ask any question about quantum 
                computing and get accurate, contextual answers.
              </Paragraph>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">Research Paper Parsing</h4>
              <Paragraph>
                Automatically extract quantum circuit images from arXiv papers using Selenium and 
                Scrapy. Convert circuit images directly to executable Qiskit code through our platform.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Tech Stack */}
        <Section>
          <SectionHeading>Technology Stack</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors"
              >
                <h4 className="text-white font-medium text-sm sm:text-base">{tech.name}</h4>
                <p className="text-neutral-500 text-xs sm:text-sm mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Challenges */}
        <Section>
          <SectionHeading>Challenges & Accomplishments</SectionHeading>
          <Paragraph>
            Our primary challenge was figuring out how to generate the quantum circuit visually. 
            We knew we wanted a 3D visual that users could interact with, but were not initially 
            sure what software to use. After experimentation, we successfully integrated interactive 
            Bloch sphere visualizations.
          </Paragraph>
          <Paragraph>
            We were proud of being able to correctly connect Selenium to trace paths and find 
            research papers to train our models and chatbot—all automatically. The RAG model 
            trained on Qiskit documentation proved highly effective for code generation.
          </Paragraph>
        </Section>

        <Divider />

        {/* Future Vision */}
        <Section>
          <SectionHeading>What&apos;s Next</SectionHeading>
          <Paragraph>
            We hope that this tool will become a widespread quantum computing tool as many quantum 
            researchers and students mentioned they wished it was something they had earlier. It&apos;s 
            just the beginning in a long list of tools we plan to build to reduce barriers to entry 
            and fast-track research.
          </Paragraph>
          <ul className="my-4 sm:my-6 space-y-2 list-disc pl-6 sm:pl-10">
            <li className="text-neutral-300 text-sm sm:text-base md:text-lg">
              <strong className="text-white">Enhanced Model Training:</strong> Train models using 
              images of quantum circuits, not just text, for improved visual understanding.
            </li>
            <li className="text-neutral-300 text-sm sm:text-base md:text-lg">
              <strong className="text-white">Complex Design Testing:</strong> Rigorous testing 
              with intricate circuit designs, collaborating with researchers to refine algorithms.
            </li>
            <li className="text-neutral-300 text-sm sm:text-base md:text-lg">
              <strong className="text-white">Platform Integration:</strong> Integration with 
              IBM&apos;s quantum tools and other established platforms for a comprehensive experience.
            </li>
          </ul>
        </Section>

        <Divider />

        {/* Conclusion */}
        <Section>
          <SectionHeading>Impact</SectionHeading>
          <Quote borderColor="border-pink-500/50">
            QuantumViz bridges the gap between the complexities of quantum mechanics and the 
            approaching era of quantum computing—making circuit design accessible, intuitive, 
            and efficient for researchers and students alike.
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

