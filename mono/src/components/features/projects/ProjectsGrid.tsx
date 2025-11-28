"use client";
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
import { projectsData, Project } from "./projectsData";
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

// Project Detail Modal
const ProjectDetailModal = ({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-neutral-900 rounded-2xl shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div
            className={`sticky top-0 z-10 p-6 bg-gradient-to-r ${project.color} rounded-t-2xl`}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            >
              <IconX size={20} className="text-white" />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 rounded-lg">{iconMap[project.iconName]}</div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            </div>
            <p className="text-white/80">{project.shortDescription}</p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Video embed if available */}
            {project.fullDescription.videoUrl && (
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={project.fullDescription.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Image if available */}
            {project.fullDescription.image && (
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={project.fullDescription.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Introduction */}
            <p className="text-neutral-300 leading-relaxed">
              {project.fullDescription.intro}
            </p>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Key Features</h3>
              <div className="grid gap-3">
                {project.fullDescription.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <h4 className="font-medium text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-neutral-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg border-l-2 border-white/20">
              <p className="text-neutral-300 italic">
                {project.fullDescription.conclusion}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              "[&>p:text-lg] cursor-pointer hover:border-white/30 transition-colors",
              project.className
            )}
            icon={iconMap[project.iconName]}
            onClick={() => setSelectedProject(project)}
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
