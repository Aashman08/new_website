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
  ImagePair,
  Divider,
  Quote,
} from "@/components/features/projects/ProjectPageComponents";

// Main Page Component
export default function DroneNDVIPage() {
  // Project metadata
  const project = {
    title: "Drone-Mounted IR System for Vegetation Monitoring",
    subtitle: "Enhancing environmental monitoring using NDVI and near-infrared sensing technology",
    heroImage: "/img/project_images/Drone.jpg",
    color: "from-green-500 to-emerald-600",
    date: "Summer 2022",
    tags: ["Drone Technology", "NDVI", "Raspberry Pi", "Python", "Photogrammetry"],
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
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
            During the summer of 2022, I was an undergraduate researcher at the{" "}
            <a 
              href="https://edgeofspace.sites.uiowa.edu/cohorts/2022-cohort" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline underline-offset-2"
            >
              Edge of Space Academy
            </a>{" "}
            at the University of Iowa, focusing on spaceflight instrumentation and mission design. 
            As Project Manager for the Ashton Prairie Near Infrared Sensing team, I explored drone 
            technology's potential in land and ecology management.
          </Paragraph>
        </Section>

        {/* On-Site Images */}
        <Section>
          <SectionHeading>On-Site at Ashton Prairie</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 my-10">
            <figure>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/img/iowa1.jpg"
                  alt="Team presentation at Iowa"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </figure>
            <figure>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/img/iowa2.jpg"
                  alt="Field work at Ashton Prairie"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </figure>
          </div>
        </Section>

        <Divider />

        {/* Hardware Build */}
        <Section>
          <SectionHeading>Building the Imaging System</SectionHeading>
          <Paragraph>
            Our project aimed to monitor vegetation health during a heatwave using near-infrared sensing 
            technology, all within a <strong className="text-white">$1000 budget</strong>. We built the imaging system's 
            hardware from scratch, including two cameras, two Raspberry Pi units, a battery pack, and a 
            3D-printed container. Each component was meticulously integrated with the drone for optimal 
            stability and safety during operation.
          </Paragraph>
        </Section>

        <Divider />

        {/* NDVI Explanation */}
        <Section>
          <SectionHeading>NDVI Analysis</SectionHeading>
          <figure className="my-10 max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/img/project_images/NDVI.png"
                alt="NDVI Explanation"
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-center text-neutral-500 text-sm mt-4 italic">
              Source:{" "}
              <a 
                href="https://hortau.com/ndvi-faqs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline"
              >
                NDVI
              </a>
            </figcaption>
          </figure>
          <Paragraph>
            I developed a Python script for post-processing aerial images, extracting relevant pixel 
            values from RGB and IR images. We used Normalized Difference Vegetation Index (NDVI) values 
            to assess vegetation health and stress during the heatwave. NDVI, a key indicator of live 
            green vegetation, provided valuable insights into the vegetation's response to heatwave conditions. 
            I also created a false-color image to visualize vegetation stress based on NDVI values. 
            This data can be used to predict potential ecological changes and implement preventive measures.
          </Paragraph>
        </Section>

        {/* RGB vs False Color Comparison */}
        <ImagePair
          first={{
            src: "/img/project_images/RGB.jpeg",
            alt: "RGB aerial image",
            caption: "RGB",
          }}
          second={{
            src: "/img/project_images/false_ndvi.png",
            alt: "False color NDVI image",
            caption: "False Image - NDVI",
          }}
        />

        <Divider />

        {/* 3D Modeling */}
        <Section>
          <SectionHeading>3D Structure Rendering</SectionHeading>
          <Paragraph>
            Not only this, we also provided a proof of concept for rendering a 3D model of vegetation 
            height using structure from motion photogrammetric range imaging technique.
          </Paragraph>
          <ImageFigure
            src="/img/project_images/3D_render.png"
            alt="3D structure rendering"
            caption="Rendering of 3D structure using Agisoft"
            maxWidth="max-w-3xl"
          />
        </Section>

        <Divider />

        {/* Impact */}
        <Section>
          <SectionHeading>Impact</SectionHeading>
          <Paragraph>
            The project underlined the importance of interdisciplinary collaboration in finding 
            cost-effective solutions to pressing environmental issues.
          </Paragraph>
          <Quote borderColor="border-green-500/50">
            This presents an affordable and viable alternative for small-scale farmers worldwide, 
            enabling them to carry out land assessment and management independently, rather than 
            depending on commercial entities.
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

