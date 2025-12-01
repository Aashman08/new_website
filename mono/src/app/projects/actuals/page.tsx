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
  FeatureCard,
} from "@/features/projects";

// Main Page Component
export default function ActualsPage() {
  // Project metadata
  const project = {
    title: "AI for SMB Acquisitions",
    subtitle: "Founding Software Engineer at Actuals, an AI startup streamlining business acquisitions for aspiring entrepreneurs",
    heroImage: "/img/actuals.webp",
    color: "from-orange-500 to-amber-500",
    date: "May - October 2024",
    tags: ["AI/ML", "Full-Stack", "Startup", "FastAPI", "AWS"],
  };

  const technicalFeatures = [
    {
      title: "AI-Powered Document Analysis",
      description: "Developed an AI system using OpenAI Assistants API, S3, Textract, OpenCV and MongoDB to extract and flag data inaccuracies in Financial Documents, saving $50,000 in professional services fees."
    },
    {
      title: "Revenue Projection Model",
      description: "Designed a Monte Carlo simulation model to forecast growth, blending user-provided and industry growth rates with time-sensitive confidence adjustments based on deviations, operator performance, and industry trends."
    }
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
          className="object-cover object-top"
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
              {project.tags.slice(0, 4).map((tag, i) => (
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
        {/* The Problem */}
        <Section>
          <SectionHeading>The Opportunity</SectionHeading>
          <Paragraph>
            By 2030, most baby boomers will be over 65. Many of them own small businesses that could 
            soon close their doors—not because they&apos;re failing, but because there&apos;s no one to take over. 
            That&apos;s where Actuals comes in.
          </Paragraph>
          <Quote borderColor="border-orange-500/50">
            We believe buying a business shouldn&apos;t be complicated or out of reach. You&apos;ve worked hard, 
            you have a vision, and now it&apos;s time to own something that&apos;s yours.
          </Quote>
        </Section>

        {/* Mission */}
        <Section>
          <SectionHeading>Our Mission</SectionHeading>
          <Paragraph>
            Our mission is to make buying a small business easier, faster, and more aligned with your goals. 
            Using AI and expert insights, we connect you with businesses that fit what you&apos;re looking for—your 
            industry preferences, financial goals, and lifestyle vision. No more endless searching or chasing 
            the wrong opportunities.
          </Paragraph>
          <Paragraph>
            We focus on businesses under $1 million, perfect for owner-operators who want to step in and make 
            a meaningful impact. Whether you&apos;re looking for your next career move, a way to leave the grind 
            behind, or a chance to build something lasting, we make the process clear and tailored to you.
          </Paragraph>
        </Section>

        <ImageFigure
          src="/img/actuals_profile.webp"
          alt="Actuals User Profile"
          caption="Personalized buyer profile with target criteria and deal team"
          maxWidth="max-w-3xl"
        />

        <Divider />

        {/* Technical Implementation */}
        <Section>
          <SectionHeading>Technical Implementation</SectionHeading>
          <Paragraph>
            As a Founding Software Engineer, I was responsible for building core AI systems and infrastructure 
            that powered the platform&apos;s ability to match buyers with the right businesses.
          </Paragraph>
          
          <div className="grid gap-4 my-8">
            {technicalFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <FeatureCard title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </div>
          <ImageFigure
          src="/img/chart.webp"
          alt="Financial Analysis"
          caption="Revenue projection and financial analysis tools"
        />
        </Section>

        <Divider />

        {/* Dashboard */}
        <Section>
          <SectionHeading>Virtual Buyer Assistant Dashboard</SectionHeading>
          <Paragraph>
            The platform featured a comprehensive dashboard for buyers to track key financial metrics, 
            analyze potential acquisitions, and perform due diligence with AI-powered insights.
          </Paragraph>
        </Section>

        <ImageFigure
          src="/img/actuals_dashboard.webp"
          alt="Actuals Dashboard Overview"
          caption="Dashboard showing SDE, EBITDA, profit margins, and financial visualizations"
          maxWidth="max-w-3xl"
        />

        <ImageFigure
          src="/img/actuals_flags.webp"
          alt="Financial Flags System"
          caption="AI-powered financial flags detecting discrepancies across Tax Returns, Balance Sheets, and CIM documents"
          maxWidth="max-w-3xl"
        />

        <Divider />

        {/* Personalized Matching */}
        <Section>
          <SectionHeading>Personalized Matching</SectionHeading>
          <Paragraph>
            Every match we create is personalized. We don&apos;t just connect you with businesses—we introduce 
            you to opportunities that make sense for your life. Our team carefully vets each match to ensure 
            it aligns with your goals, so you can move forward with confidence and clarity.
          </Paragraph>
          <Paragraph>
            If you&apos;re ready to take the next step, we&apos;re here to guide you. Let&apos;s find the right business 
            for you—the one that fits your vision and sets you up for a future of freedom, purpose, and growth.
          </Paragraph>
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
