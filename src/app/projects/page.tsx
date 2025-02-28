"use client"

import React, { useEffect, useRef } from "react";
import { BentoGridThirdDemo } from "@/CustomComponents/BentoGridThirdDemo"; // Adjust path as needed
import { Text, StyledLink } from "@/CustomComponents/Typography";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainMenubar from "@/CustomComponents/MainMenubar";
import { Heading } from "@/CustomComponents/Heading";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";
// Import custom SVGs as React components

// import { ReactComponent as AnthropicIcon } from '@/assets/icons/anthropic.svg';
// import { ReactComponent as LlamaIcon } from '@/assets/icons/llama.svg';
// import { ReactComponent as GroqIcon } from '@/assets/icons/groq.svg';

import {
  IconCode,
  IconBrandPython,
  IconBrandHtml5,
  IconBrandCss3,
  IconTerminal2,
  IconBrandGit,
  IconBrandGithub,
  IconBrandDocker,
  IconDeviceGamepad2,
  IconBrandVisualStudio,
  IconBrandGoogleDrive,
  IconBrandNotion,
  IconWorldWww,
  IconBrandFigma,
  IconMap2,
  IconBrain,
} from "@tabler/icons-react";
import { 
  SiCplusplus, 
  SiR, 
  SiTypescript, 
  SiMysql, 
  SiPostgresql,
  SiHuggingface, 
  SiOpenai, 
  SiPytorch, 
  SiTensorflow,
  SiQgis, 
  SiArcgis,
  SiMeta
} from 'react-icons/si';
import AnthropicIcon from "@/icons/anthropic";
import LangChainIcon from "@/icons/langchain";


const programmingLanguages = [
  { title: "C++", icon: <SiCplusplus className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
  { title: "R", icon: <SiR className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
  { title: "MySQL", icon: <SiMysql className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
  { title: "PostgreSQL", icon: <SiPostgresql className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
  { title: "Typescript", icon: <SiTypescript className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
  { title: "Python", icon: <IconBrandPython className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
  { title: "Shell", icon: <IconTerminal2 className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
  // { title: "HTML", icon: <IconBrandHtml5 className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
  // { title: "CSS", icon: <IconBrandCss3 className="h-full w-full text-neutral-200 dark:text-neutral-300" size={30} />, href: "#" },
];

const aiLibraries = [ 
  { title: "Hugging Face", icon: <SiHuggingface className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24} />, href: "#" }, 
  { title: "OpenAI", icon: <SiOpenai className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24} />, href: "#" }, 
  { title: "PyTorch", icon: <SiPytorch className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24} />, href: "#" }, 
  { title: "TensorFlow", icon: <SiTensorflow className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24} />, href: "#" }, 
  { title: "Langchain", icon: <LangChainIcon className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" }, 
  { title: "PandasAI", icon: <IconBrain className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" } 
];

const llmTechniques = [
  { title: "GPT", icon: <SiOpenai className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24} />, href: "#",},
  { title: "Llama-2", icon: <SiMeta className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24}/>, href: "#" },
  { title: "Claude", icon: <AnthropicIcon className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
];

const versionControl = [
  { title: "Git", icon: <IconBrandGit className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
];

const softwaresTools = [
  { title: "Docker", icon: <IconBrandDocker className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  { title: "Xcode", icon: <IconDeviceGamepad2 className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  { title: "VSCode", icon: <IconBrandVisualStudio className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  // { title: "R-studios", icon: <IconCode className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  // { title: "Microsoft Suite", icon: <IconCode className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  // { title: "G-Suite", icon: <IconBrandGoogleDrive className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  { title: "Notion", icon: <IconBrandNotion className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  { title: "Airtable", icon: <IconWorldWww className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
  { title: "Figma (UI/UX)", icon: <IconBrandFigma className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
];

const gisTools = [ 
  { title: "Qgis", icon: <SiQgis className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24} />, href: "#" }, 
  { title: "ArcGIS", icon: <SiArcgis className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24} />, href: "#" } 
];

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
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

  const handleMenuItemClick = (title: string) => {
    if (title === 'About Me') {
      onClose();
    }
    // Handle other menu item clicks as needed
  };

  const MenuTitles = ['About Me', "Skills", 'CV', 'Contact', 'Research', 'Art'];

  const skillLinks = {
    "PROGRAMMING LANGUAGES": programmingLanguages,
    "AI LIBRARIES": aiLibraries,
    "LLM & TECHNIQUES": llmTechniques,
    "VERSION CONTROL": versionControl,
    "SOFTWARES AND TOOLS": softwaresTools,
    "GIS TOOLS": gisTools,
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-90 font-sans"
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

        
        <BentoGridThirdDemo />

        {/* =============================== */}
        {/*           SKILLS               */}
        {/* =============================== */}
        <div className="flex flex-col items-center mb-6 pt-10 justify-center">
          <h2 className="text-lg md:text-4xl mb-10 text-white dark:text-white max-w-4xl pt-10">
          Skills
          </h2>
        </div>

        {Object.entries(skillLinks).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center mt-6">
            {/* Category Title */}
            <Text className="font-bold">{category}</Text>
            {/* Floating Dock */}
            <div className="flex items-center justify-center h-[10rem] w-full">
              <FloatingDock items={items} /> {/* Ensure items are passed correctly */}
            </div>
          </div>
        ))}



        <div className="mt-8">
          <MainMenubar titles={MenuTitles} onItemClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;

