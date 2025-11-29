"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconCode,
  IconChartBar,
  IconRocket,
  IconCreditCard,
  IconDrone,
  IconSatellite,
  IconX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { projectsData, Project } from "../data/projectsData";
import { AnimatedHeader, GradientHeader } from "./headerAnimations";

// Map icon names to components
const iconMap = {
  code: <IconCode className="h-4 w-4 text-emerald-500" />,
  chart: <IconChartBar className="h-4 w-4 text-blue-500" />,
  rocket: <IconRocket className="h-4 w-4 text-orange-500" />,
  credit: <IconCreditCard className="h-4 w-4 text-purple-500" />,
  drone: <IconDrone className="h-4 w-4 text-green-500" />,
  satellite: <IconSatellite className="h-4 w-4 text-rose-500" />,
};

// Map icon names to hex colors for hover border
const accentColorMap: Record<string, string> = {
  code: "#10b981",      // emerald-500
  chart: "#3b82f6",     // blue-500
  rocket: "#f97316",    // orange-500
  credit: "#a855f7",    // purple-500
  drone: "#22c55e",     // green-500
  satellite: "#f43f5e", // rose-500
};

// Map icon names to larger icons for headers
const headerIconMap = {
  code: <IconCode size={40} className="text-white drop-shadow-lg" strokeWidth={1.5} />,
  chart: <IconChartBar size={40} className="text-white drop-shadow-lg" strokeWidth={1.5} />,
  rocket: <IconRocket size={40} className="text-white drop-shadow-lg" strokeWidth={1.5} />,
  credit: <IconCreditCard size={40} className="text-white drop-shadow-lg" strokeWidth={1.5} />,
  drone: <IconDrone size={40} className="text-white drop-shadow-lg" strokeWidth={1.5} />,
  satellite: <IconSatellite size={40} className="text-white drop-shadow-lg" strokeWidth={1.5} />,
};

// Dynamic project header component - uses animation from headerAnimations.tsx
const ProjectHeader = ({ project }: { project: Project }) => {
  if (project.headerImage) {
    return (
      <AnimatedHeader
        image={project.headerImage}
        alt={project.title}
        color={project.color}
        animation={project.headerAnimation || "3d"}
      />
    );
  }

  return (
    <GradientHeader
      color={project.color}
      icon={headerIconMap[project.iconName]}
    />
  );
};

// Project Detail Modal - Modern Portfolio Style
const ProjectDetailModal = ({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) => {
  if (!project) return null;

  // Extract gradient colors for accents
  const gradientClass = project.color;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop with blur */}
        <motion.div 
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-[#0a0a0a] rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button - floating */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110"
          >
            <IconX size={18} className="text-white" />
          </motion.button>

          {/* Scrollable content */}
          <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
            {/* Hero Section with Image/Video */}
            <div className="relative">
              {/* Hero Media */}
              {project.fullDescription.videoUrl ? (
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={project.fullDescription.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : project.headerImage || project.fullDescription.image ? (
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={project.headerImage || project.fullDescription.image || ""}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                </div>
              ) : (
                <div className={`h-32 bg-gradient-to-br ${gradientClass}`} />
              )}

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 mb-3"
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradientClass} shadow-lg`}>
                    {React.cloneElement(iconMap[project.iconName] as React.ReactElement, {
                      className: "h-5 w-5 text-white"
                    })}
                  </div>
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
                    Project
                  </span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight"
                >
                  {project.title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-neutral-300"
                >
                  {project.shortDescription}
                </motion.p>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {project.fullDescription.intro}
                </p>
              </motion.div>

              {/* Features - Modern Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-px flex-1 bg-gradient-to-r ${gradientClass} opacity-30`} />
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
                    Key Features
                  </h3>
                  <div className={`h-px flex-1 bg-gradient-to-l ${gradientClass} opacity-30`} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {project.fullDescription.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="group relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      {/* Feature number */}
                      <span className={`absolute -top-3 -left-1 text-5xl font-black bg-gradient-to-br ${gradientClass} bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      
                      <div className="relative">
                        <h4 className="font-semibold text-white mb-2 text-lg">
                          {feature.title}
                        </h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Conclusion - Highlight Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative overflow-hidden rounded-2xl"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-10`} />
                <div className="absolute inset-0 bg-[#0a0a0a]/80" />
                
                {/* Content */}
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-1 h-full min-h-[60px] rounded-full bg-gradient-to-b ${gradientClass}`} />
                    <div>
                      <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3 block">
                        Impact & Outcome
                      </span>
                      <p className="text-neutral-200 leading-relaxed text-lg">
                        {project.fullDescription.conclusion}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom spacer */}
              <div className="h-4" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Projects with dedicated pages (maps project ID to page slug)
const dedicatedPages: Record<string, string> = {
  "satellite-fire": "satellite-fire",
  "actuals": "actuals",
  "genai-deloitte": "genai-deloitte",
  "data-analysis-deloitte": "data-analysis-deloitte",
  "drone-ndvi": "drone-ndvi",
};

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const router = useRouter();

  const handleProjectClick = (project: Project) => {
    const pageSlug = dedicatedPages[project.id];
    
    // If project has a dedicated page, navigate to it
    if (pageSlug) {
      router.push(`/projects/${pageSlug}`);
    } else {
      // Otherwise, open the modal
      setSelectedProject(project);
    }
  };

  return (
    <>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {projectsData.map((project, i) => (
          <BentoGridItem
            key={project.id}
            title={project.title}
            description={
              <span className="text-sm">{project.shortDescription}</span>
            }
            header={<ProjectHeader project={project} />}
            className={cn(
              "[&>p:text-lg] cursor-pointer transition-colors",
              project.className
            )}
            icon={iconMap[project.iconName]}
            accentColor={accentColorMap[project.iconName]}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </BentoGrid>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

