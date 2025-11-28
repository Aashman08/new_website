"use client"

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import MainMenubar from "@/components/layout/MainMenubar";
import { Button } from "@/components/ui/button";
import { ParallaxSkills } from "@/components/features/skills/ParallaxSkills";

import {
  IconBrandPython,
  IconTerminal2,
  IconBrandGit,
  IconBrandGithub,
  IconBrandDocker,
  IconDeviceGamepad2,
  IconBrandVisualStudio,
  IconBrandNotion,
  IconWorldWww,
  IconBrandFigma,
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
import AnthropicIcon from "@/icons/AnthropicIcon";
import LangChainIcon from "@/icons/LangChainIcon";

const programmingLanguages = [
  { title: "C++", icon: <SiCplusplus size={48} />, href: "#", gradient: "radial-gradient(circle at 20% 20%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", style: { borderColor: "#7be7ff" } },
  { title: "PostgreSQL", icon: <SiPostgresql size={48} />, href: "#", gradient: "radial-gradient(circle at 20% 20%, #FFA133 0%, #EE9341 25%, #FF3000 50%, #D20000 75%, #8B0000 100%)", style: { borderColor: "", filter: "1.2" } },
  { title: "Shell", icon: <IconTerminal2 size={48} />, href: "#", gradient: "radial-gradient(circle at 50% 50%, #CFA2F9, #9A46C5, #551A8B, #1A0A38, #000000)", style: { borderColor: "#B068E2" } },
  { title: "Langchain", icon: <LangChainIcon width={48} />, href: "#", gradient: "radial-gradient(circle at 60% 30%, #ff66b2, #e11d48, #be123c, #881337, #4c0519)", style: { borderColor: "#ff66b2" } },
  { title: "Git", icon: <IconBrandGit size={48} />, href: "#", gradient: "radial-gradient(circle at 70% 40%, rgb(66, 246, 255), rgb(20, 184, 166), rgb(17, 94, 89), rgb(15, 23, 42), rgb(0, 0, 0))", style: { borderColor: "#42F6FF" } },
  { title: "OpenAI", icon: <SiOpenai size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 70%, #FCEE21, #C8E750, #6ABF4B, #009245, #000000)", style: { borderColor: "#FCEE21" } },
  { title: "VSCode", icon: <IconBrandVisualStudio size={48} />, href: "#", gradient: "radial-gradient(circle at 80% 20%, #666666, #333333, #111111, #000000, #000000)", style: { borderColor: "#666666" } },
  { title: "GPT", icon: <SiOpenai size={48} />, href: "#", gradient: "radial-gradient(circle at 20% 80%, #CFA2F9, #9A46C5, #551A8B, #1A0A38, #000000)", style: { borderColor: "#CFA2F9" } },
  { title: "Qgis", icon: <SiQgis size={48} />, href: "#", gradient: "radial-gradient(circle at 50% 30%, #ffe566, #ffd700, #ffaa00, #ff6f00, #cc2900)", style: { borderColor: "#ffe566" } },

  { title: "Typescript", icon: <SiTypescript size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 70%, #FCEE21, #C8E750, #6ABF4B, #009245, #000000)", style: { borderColor: "#FCEE21" } },
  { title: "R", icon: <SiR size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 40%, #ff66b2, #e11d48, #be123c, #881337, #4c0519, #000000)", style: { borderColor: "#e11d48" } },
  { title: "TensorFlow", icon: <SiTensorflow size={48} />, href: "#", gradient: "radial-gradient(circle at 40% 30%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", style: { borderColor: "#7be7ff" } },
  { title: "Hugging Face", icon: <SiHuggingface size={48} />, href: "#", gradient: "radial-gradient(circle at 60% 50%, #1BCCCC, #23A8E0, #3458B0, #242874, #000000)", style: { borderColor: "#23A8E0" } },
  { title: "GitHub", icon: <IconBrandGithub size={48} />, href: "#", gradient: "radial-gradient(circle at 50% 40%, #ff66b2, #e11d48, #be123c, #881337, #4c0519)", style: { borderColor: "#ff66b2" } },
  { title: "Claude", icon: <AnthropicIcon width={52} />, href: "#", gradient: "radial-gradient(circle at 30% 60%, rgb(135, 206, 255), rgb(80, 156, 220), rgb(20, 116, 184), rgb(17, 74, 139), rgb(15, 32, 85), rgb(0, 0, 0))", style: { borderColor: "#66d9ff" } },
  { title: "Xcode", icon: <IconDeviceGamepad2 size={48} />, href: "#", gradient: "radial-gradient(circle at 70% 30%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)", style: { borderColor: "#ffc266" } },
  { title: "Figma (UI/UX)", icon: <IconBrandFigma size={48} />, href: "#", gradient: "radial-gradient(circle at 40% 60%, rgb(66, 246, 255), rgb(20, 184, 166), rgb(17, 94, 89), rgb(15, 23, 42), rgb(0, 0, 0))", style: { borderColor: "#42F6FF" } },
  { title: "ArcGIS", icon: <SiArcgis size={48} />, href: "#", gradient: "radial-gradient(circle at 60% 40%, #ff66b2, #e11d48, #be123c, #881337, #4c0519)", style: { borderColor: "#ff66b2" } },
  
  { title: "MySQL", icon: <SiMysql size={48} />, href: "#", gradient: "radial-gradient(circle at 80% 30%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", style: { borderColor: "#7be7ff" } },
  { title: "Python", icon: <IconBrandPython size={48} />, href: "#", gradient: "radial-gradient(circle at 20% 50%, #666666, #333333, #111111, #000000, #000000)", style: { borderColor: "#666666" } },
  { title: "PyTorch", icon: <SiPytorch size={48} />, href: "#", gradient: "radial-gradient(circle at 50% 20%, #66d9ff, #00c6ff, #0072ff, #0033cc, #001f7a)", style: { borderColor: "#93c5fd" } },
  { title: "PandasAI", icon: <IconBrain size={48} />, href: "#", gradient: "radial-gradient(circle at 70% 50%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)", style: { borderColor: "#ffc266" } },
  { title: "Docker", icon: <IconBrandDocker size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 20%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", style: { borderColor: "#7be7ff" } },
  { title: "Llama-2", icon: <SiMeta size={48} />, href: "#", gradient: "radial-gradient(circle at 40% 50%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)", style: { borderColor: "#ffc266" } },
  { title: "Notion", icon: <IconBrandNotion size={48} />, href: "#", gradient: "radial-gradient(circle at 60% 30%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", style: { borderColor: "#7be7ff" } },
  { title: "Airtable", icon: <IconWorldWww size={48} />, href: "#", gradient: "radial-gradient(circle at 80% 40%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)", style: { borderColor: "#ffc266" } }
];

interface SkillsSectionProps {
    isOpen: boolean;
    onClose: () => void;
    onMenuItemClick?: (item: string) => void;
  }

  const SkillsSection: React.FC<SkillsSectionProps> = ({ isOpen, onClose, onMenuItemClick }) => {
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

    const MenuTitles = ["ABOUT ME", "PROJECTS", "CV", "CONTACT", "RESEARCH", "ART"];

    if (!isOpen) return null;

    return (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 overflow-y-scroll bg-black bg-opacity-90 font-sans"
        >
          <div className="relative w-full max-w-full mx-auto mt-30 mb-10 p-10 bg-black text-white rounded-lg shadow-lg ">
            {/* Close Button */}
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
  
            {/* Title */}
            <div className="flex flex-col items-center pt-2 justify-center">
              <h2 className="text-lg md:text-4xl mb-6 text-white dark:text-white max-w-4xl">
                  SKILLS
              </h2>
            </div>
        
            <ParallaxSkills skills={programmingLanguages} />
            
            {/* MainMenubar */}
            <div className="mt-16 mb-8">
              <MainMenubar titles={MenuTitles} onItemClick={(title) => onMenuItemClick?.(title)} />
            </div>
        </div>
      </div>
  );
  };
  
  export default SkillsSection;

