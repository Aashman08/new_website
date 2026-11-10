"use client"

import React from "react";
import { ProjectsGrid } from "./ProjectsGrid";
import { SectionModal, SectionPanel, SectionTitle } from "@/components/layout/SectionModal";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SECTIONS } from "@/config";
import type { SectionProps } from "@/types";

import {
  IconBrandPython,
  IconBrandDocker,
  IconBrandGithub,
  IconBrain,
} from "@tabler/icons-react";
import { 
  SiCplusplus, 
  SiR, 
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiAmazonwebservices,
  SiFastapi,
  SiPrometheus,
  SiGrafana,
  SiHuggingface, 
  SiPytorch, 
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';
import { LangChainIcon } from "@/assets/icons";

// Languages – Python, Typescript (React, Next.js), JavaScript, C++, SQL, R
const languages = [
  { title: "Python", icon: <IconBrandPython className="h-full w-full text-white" />, href: "#" },
  { title: "TypeScript", icon: <SiTypescript className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "React", icon: <SiReact className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "Next.js", icon: <SiNextdotjs className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "JavaScript", icon: <SiJavascript className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "C++", icon: <SiCplusplus className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "SQL", icon: <SiPostgresql className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "R", icon: <SiR className="h-full w-full text-white" size={24} />, href: "#" },
];

// Backend & Infra – AWS, Fast API, PostgreSQL, MongoDB, Langchain, Huggingface, Github Actions, Docker, Prometheus, Grafana
const backendInfra = [
  { title: "AWS", icon: <SiAmazonwebservices className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "FastAPI", icon: <SiFastapi className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "PostgreSQL", icon: <SiPostgresql className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "MongoDB", icon: <SiMongodb className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "LangChain", icon: <LangChainIcon className="h-full w-full text-white" />, href: "#" },
  { title: "Hugging Face", icon: <SiHuggingface className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "GitHub Actions", icon: <IconBrandGithub className="h-full w-full text-white" />, href: "#" },
  { title: "Docker", icon: <IconBrandDocker className="h-full w-full text-white" />, href: "#" },
  { title: "Prometheus", icon: <SiPrometheus className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "Grafana", icon: <SiGrafana className="h-full w-full text-white" size={24} />, href: "#" },
];

// ML & LLM Tooling – Pytorch, TensorFlow, Scikit-Learn, OpenCV, Pandas, NumPy, CNN
const mlTooling = [
  { title: "PyTorch", icon: <SiPytorch className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "TensorFlow", icon: <SiTensorflow className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "Scikit-Learn", icon: <SiScikitlearn className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "OpenCV", icon: <SiOpencv className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "Pandas", icon: <SiPandas className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "NumPy", icon: <SiNumpy className="h-full w-full text-white" size={24} />, href: "#" },
  { title: "CNN", icon: <IconBrain className="h-full w-full text-white" />, href: "#" },
];

const skillCategories = {
  "LANGUAGES": languages,
  "BACKEND & INFRASTRUCTURE": backendInfra,
  "ML & LLM TOOLING": mlTooling,
};

const ProjectsSection: React.FC<SectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
  return (
    <SectionModal section={SECTIONS.PROJECTS} isOpen={isOpen} onMenuItemClick={onMenuItemClick}>
      <SectionPanel onClose={onClose}>
        <SectionTitle>Projects</SectionTitle>

        <ProjectsGrid />

        <SectionTitle className="pt-10 sm:pt-12 md:pt-16">Skills</SectionTitle>

        {Object.entries(skillCategories).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center mt-4 sm:mt-6 md:mt-8">
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 uppercase mb-4 sm:mb-6 text-center px-2">
              {category}
            </span>
            <div className="flex items-center justify-center h-[6rem] sm:h-[7rem] md:h-[8rem] w-full">
              <FloatingDock items={items} />
            </div>
          </div>
        ))}
      </SectionPanel>
    </SectionModal>
  );
};

export default ProjectsSection;

