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

export default function SRILabPage() {
  const research = {
    title: "Building Damage Detection with Deep Learning",
    subtitle: "Supporting LA County's emergency response and infrastructure reinforcement in fault-prone areas",
    heroImage: "/img/sri-lab-hero.png",
    color: "from-blue-500 to-cyan-600",
    date: "Nov 2023 – Feb 2024",
    tags: ["Deep Learning", "PyTorch", "U-Net", "Image Segmentation", "Computer Vision"],
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
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <Section>
          <Paragraph>
            As an <strong className="text-white">Undergraduate Research Assistant</strong> at the{" "}
            <strong className="text-white">Sensing and Robotics for Infrastructure (SRI) Lab</strong> at UCLA 
            under <strong className="text-white">Post Doc Debashish Jana</strong>, I developed deep learning 
            models for automated building damage classification from satellite imagery — supporting LA County&apos;s 
            emergency response and infrastructure reinforcement in earthquake-prone regions.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>The Challenge</SectionHeading>
          <Paragraph>
            Assessing damage conditions after natural disasters requires high-resolution satellite imagery, 
            but manually evaluating specific buildings across widespread disaster areas is an incredibly 
            tedious and time-consuming task. The solution: leverage <strong className="text-white">Convolutional Neural Networks (CNNs)</strong> to 
            automatically classify damage levels, enabling better disaster management and resource allocation.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>The xBD Dataset</SectionHeading>
          <Paragraph>
            We utilized the{" "}
            <a 
              href="https://xview2.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              xBD dataset
            </a>
            , one of the largest publicly available datasets for building damage assessment. It provides 
            pre and post-event satellite imagery across a variety of disaster events with building polygons 
            (masks) and labels of damage levels.
          </Paragraph>
          <ul className="my-6 space-y-2 list-disc pl-10">
            <li className="text-neutral-300 text-lg"><strong className="text-white">850,736</strong> building annotations across <strong className="text-white">45,362 km²</strong></li>
            <li className="text-neutral-300 text-lg">Covers hurricanes (Florence, Harvey, Matthew, Michael), earthquakes, flooding, tsunamis, volcanoes, and wildfires</li>
            <li className="text-neutral-300 text-lg">Four damage classification levels: Undamaged, Lightly Damaged, Severely Damaged, and Completely Destroyed</li>
          </ul>
        </Section>

        {/* Sample Images */}
        <Section>
          <SectionHeading>Training Data Samples</SectionHeading>
          <Paragraph>
            The model learns to compare pre and post-disaster satellite imagery, generate segmentation masks 
            identifying building footprints, and classify damage levels for each structure.
          </Paragraph>
          
          {/* Pre vs Post - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <figure>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image src="/img/pre-disaster.png" alt="Pre-disaster satellite image" width={500} height={500} className="w-full h-auto" />
              </div>
              <figcaption className="text-center text-neutral-400 text-sm mt-3">
                <span className="text-white font-medium">Pre-disaster</span> — Before the event
              </figcaption>
            </figure>
            <figure>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image src="/img/post-disaster.png" alt="Post-disaster satellite image" width={500} height={500} className="w-full h-auto" />
              </div>
              <figcaption className="text-center text-neutral-400 text-sm mt-3">
                <span className="text-white font-medium">Post-disaster</span> — After the event
              </figcaption>
            </figure>
          </div>

          {/* Mask and Classification - Stacked */}
          <div className="space-y-10 my-8 max-w-2xl mx-auto">
            <figure>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image src="/img/mask.png" alt="Segmentation mask" width={600} height={600} className="w-full h-auto" />
              </div>
              <figcaption className="text-center text-neutral-400 text-sm mt-3">
                <span className="text-white font-medium">Segmentation Mask</span> — Building footprints identified
              </figcaption>
            </figure>

            <figure>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image src="/img/classification.png" alt="Damage classification" width={600} height={600} className="w-full h-auto" />
              </div>
              <figcaption className="text-center text-neutral-400 text-sm mt-3">
                <span className="text-white font-medium">Classification Output</span> — Damage levels per building
              </figcaption>
              {/* Damage Level Badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <span className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: '#9CB443' }}>
                  Undamaged
                </span>
                <span className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: '#6B8E8E' }}>
                  Lightly Damaged
                </span>
                <span className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: '#F5A623' }}>
                  Severely Damaged
                </span>
                <span className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: '#D0605E' }}>
                  Completely Destroyed
                </span>
              </div>
            </figure>
          </div>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Data Pipeline & Preprocessing</SectionHeading>
          <Paragraph>
            Developed a comprehensive <strong className="text-white">ETL pipeline</strong> to transform raw 
            satellite imagery into a structured training dataset:
          </Paragraph>
          <ul className="my-6 space-y-3 list-disc pl-10">
            <li className="text-neutral-300 text-lg">Extracted and structured data by parsing large-scale JSON label files</li>
            <li className="text-neutral-300 text-lg">Created DataFrames organizing pre-event, post-event, and mask images for each sample</li>
            <li className="text-neutral-300 text-lg">Calculated net damage per sample to subset data for meaningful training examples</li>
            <li className="text-neutral-300 text-lg">Converted paths and prepared PyTorch DataLoaders for efficient batch processing</li>
          </ul>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Image Augmentation Strategy</SectionHeading>
          <Paragraph>
            To prevent overfitting and introduce variability, I implemented augmentation using the{" "}
            <strong className="text-white">Albumentations</strong> library:
          </Paragraph>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="font-semibold text-white mb-3">Color Augmentation</h4>
              <ul className="space-y-1 text-neutral-400 text-sm">
                <li>• Brightness and contrast adjustments</li>
                <li>• Gamma correction</li>
                <li>• Normalization</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="font-semibold text-white mb-3">Spatial Augmentation</h4>
              <ul className="space-y-1 text-neutral-400 text-sm">
                <li>• Cropping from 1024×1024 to 256×256</li>
                <li>• Rotation by different degrees</li>
                <li>• Transpose, shifting, and scaling</li>
              </ul>
            </div>
          </div>
          <Paragraph>
            This reduced overfitting by <strong className="text-white">20%</strong> and enabled unbiased, 
            accurate model training through data stratification.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>U-Net Architecture</SectionHeading>
          <Paragraph>
            We chose <strong className="text-white">U-Net</strong> for its ability to perform pixel-perfect 
            predictions in semantic segmentation tasks. The architecture uses an encoder-decoder structure 
            with skip connections that merge high-level abstract features with low-level detailed information.
          </Paragraph>
          
          <div className="my-8">
            <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">Training Configuration</h4>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 font-semibold">10</span>
                <span className="text-neutral-400 ml-2">epochs</span>
              </div>
              <div className="px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 font-semibold">6</span>
                <span className="text-neutral-400 ml-2">batch size</span>
              </div>
              <div className="px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 font-semibold">Adam</span>
                <span className="text-neutral-400 ml-2">optimizer</span>
              </div>
              <div className="px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 font-semibold">Cross Entropy</span>
                <span className="text-neutral-400 ml-2">loss</span>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Transfer Learning with EfficientNetB4</SectionHeading>
          <Paragraph>
            Experimented with different encoder-decoder frameworks to optimize model architecture. By applying 
            transfer learning using <strong className="text-white">EfficientNetB4</strong> as the encoder backbone, 
            we achieved a <strong className="text-white">10% improvement in F1 score</strong> and significant 
            reduction in cross-entropy loss.
          </Paragraph>
        </Section>

        <Divider />

        <Section>
          <SectionHeading>Results</SectionHeading>
          
          {/* Results as large stats */}
          <div className="flex flex-wrap gap-8 my-8">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-green-400">87.3%</p>
              <p className="text-neutral-500 mt-1">Training Accuracy</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-green-400">85.28%</p>
              <p className="text-neutral-500 mt-1">Validation Accuracy</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-green-400">+10%</p>
              <p className="text-neutral-500 mt-1">F1 Score Improvement</p>
            </div>
          </div>

          <Paragraph>
            Despite facing GPU memory constraints and kernel crashes when working with large 1024×1024 
            images, we optimized the pipeline through image cropping, grayscale conversion, and careful 
            hyperparameter tuning to achieve strong results.
          </Paragraph>

          <Quote borderColor="border-blue-500/50">
            This research directly contributes to LA County&apos;s infrastructure safety initiatives, 
            helping identify vulnerable buildings and prioritize reinforcement of gas pipelines 
            in earthquake-prone regions.
          </Quote>
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
