"use client"

import React, { useEffect, useRef } from "react";
import { ProjectsGrid } from "./ProjectsGrid";
import MainMenubar from "@/components/layout/MainMenubar";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";
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

const ProjectsSection: React.FC<SectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const MenuTitles = ['About Me', 'Contact', 'Research', 'Art'];

  const skillCategories = {
    "LANGUAGES": languages,
    "BACKEND & INFRASTRUCTURE": backendInfra,
    "ML & LLM TOOLING": mlTooling,
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 font-sans"
    >
      {/* Modal content container */}
      <div className="relative w-full max-w-6xl mx-auto mt-40 mb-10 p-10 bg-black text-white rounded-lg shadow-lg ">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/10"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="flex flex-col items-center mb-6 justify-center">
          <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
          Projects
          </h2>
        </div>

        <ProjectsGrid />

        {/* Skills Section */}
        <div className="flex flex-col items-center mb-6 pt-10 justify-center">
          <h2 className="text-lg md:text-4xl mb-10 text-white dark:text-white max-w-4xl pt-10">
          Skills
          </h2>
        </div>

        {Object.entries(skillCategories).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center mt-8">
            <span className="text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase mb-6">
              {category}
            </span>
            <div className="flex items-center justify-center h-[8rem] w-full">
              <FloatingDock items={items} />
            </div>
          </div>
        ))}

        <div className="mt-16 mb-8">
          <MainMenubar titles={MenuTitles} onItemClick={(title) => onMenuItemClick?.(title)} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

