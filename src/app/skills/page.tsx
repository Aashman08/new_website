"use client"

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import MainMenubar from "@/CustomComponents/MainMenubar";
import { Button } from "@/components/ui/button";
import { TailwindcssButtons } from "@/CustomComponents/tailwindcss_buttons";
// import {SkillsOverview} from "@/CustomComponents/skills";

import { ParallaxSkills } from "@/CustomComponents/parallax-skills";

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

//
// const programmingLanguages = [
//   { title: "C++", icon: <SiCplusplus size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)", 
//     style: { borderColor: "#ffc266" }, }, //1
//   { title: "PostgreSQL", icon: <SiPostgresql size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, rgb(66, 246, 255), rgb(20, 184, 166), rgb(17, 94, 89), rgb(15, 23, 42), rgb(0, 0, 0))", 
//     style: { borderColor: "#42F6FF" } }, //4
//   { title: "Shell", icon: <IconTerminal2 size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #666666, #333333, #111111, #000000, #000000)", 
//     style: { borderColor: "#666666" } },//7
//   { title: "Langchain", icon: <LangChainIcon width={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #ff66b2, #e11d48, #be123c, #881337, #4c0519)", 
//     style: { borderColor: "#ff66b2" } }, //10
//   { title: "Git", icon: <IconBrandGit size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)", 
//     style: { borderColor: "#ffc266" } }, //13
//   { title: "OpenAI", icon: <SiOpenai size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", 
//     style: { borderColor: "#7be7ff" } }, //16
//   { title: "VSCode", icon: <IconBrandVisualStudio size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, rgb(135, 206, 255), rgb(80, 156, 220), rgb(20, 116, 184), rgb(17, 74, 139), rgb(15, 32, 85), rgb(0, 0, 0))", 
//     style: { borderColor: "#66d9ff" } }, //19
//   { title: "GPT", icon: <SiOpenai size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #ffe566, #ffd700, #ff9a00, #ff6f00, #cc5500)", 
//     style: { borderColor: "#ffe566" } }, //22
//   { title: "Qgis", icon: <SiQgis size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, rgb(66, 246, 255), rgb(20, 184, 166), rgb(17, 94, 89), rgb(15, 23, 42), rgb(0, 0, 0))", 
//     style: { borderColor: "#6ee7b7" } }, //25

//   { title: "Typescript", icon: <SiTypescript size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 70% 30%, #CFA2F9, #9A46C5, #551A8B, #1A0A38,  #000000)", 
//     style: { borderColor: "#B068E2" }}, //2
//   { title: "R", icon: <SiR size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #ff66b2, #e11d48, #be123c, #881337, #4c0519, #000000)", 
//     style: { borderColor: "#e11d48"} },//5
//   { title: "TensorFlow", icon: <SiTensorflow size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)", 
//     style: { borderColor: "#ffc266" } },  //8
//   { title: "Hugging Face", icon: <SiHuggingface size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #CFA2F9, #9A46C5, #551A8B, #1A0A38,  #000000)", 
//     style: { borderColor: "#CFA2F9" } }, //11
//   { title: "GitHub", icon: <IconBrandGithub size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, rgb(66, 246, 255), rgb(20, 184, 166), rgb(17, 94, 89), rgb(15, 23, 42), rgb(0, 0, 0))", 
//     style: { borderColor: "#67e8f9" } }, //14
//   { title: "Claude", icon: <AnthropicIcon width={52} />, href: "#", 
//     gradient:  "radial-gradient(circle at 30% 30%, #ff66b2, #e11d48, #be123c, #881337, #4c0519)",
//     style: { borderColor: "#ff66b2" } }, //17
//   { title: "Xcode", icon: <IconDeviceGamepad2 size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", 
//     style: { borderColor: "#7be7ff" } }, //20
//   { title: "Figma (UI/UX)", icon: <IconBrandFigma size={48} />, href: "#", 
//     gradient: "radial-gradient(circle at 30% 30%, #ff66b2, #e11d48, #be123c, #881337, #4c0519)", 
//     style: { borderColor: "#ff66b2" } }, //23
//   { title: "ArcGIS", icon: <SiArcgis size={48} />, href: "#", 
//     gradient:  "radial-gradient(circle at 30% 30%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", 
//     style: { borderColor: "#7be7ff" } }, //26
  
//   { title: "MySQL", icon: <SiMysql size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #1BCCCC, #23A8E0, #3458B0, #242874, #000000)", style: { borderColor: "#23A8E0" } }, //3
//   { title: "Python", icon: <IconBrandPython size={48} />, href: "#", gradient: "radial-gradient(circle at 70% 30%, #FCEE21, #C8E750, #6ABF4B, #009245, #000000)", style: { borderColor: "FCEE21" } }, //6
//   { title: "PyTorch", icon: <SiPytorch size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", style: { borderColor: "#87CEFF" } }, //9
//   { title: "PandasAI", icon: <IconBrain size={48} />, href: "#", gradient:"radial-gradient(circle at 30% 30%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)", style: { borderColor: "#ffc266" } }, //12
//   { title: "Docker", icon: <IconBrandDocker size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #66d9ff, #00c6ff, #0072ff, #0033cc, #001f7a)", style: { borderColor: "#93c5fd" } }, //15
//   { title: "Llama-2", icon: <SiMeta size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", style: { borderColor: "#7be7ff" } }, //18
//   { title: "Notion", icon: <IconBrandNotion size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #666666, #333333, #111111, #000000, #000000)", style: { borderColor: "#666666" } }, //21
//   { title: "Airtable", icon: <IconWorldWww size={48} />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #ffe566, #ffd700, #ffaa00, #ff6f00, #cc5500)", style: { borderColor: "#ffe566" } }, //24
// ];

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



interface SkillsModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
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
            <div className="mt-8">
            <MainMenubar titles={MenuTitles} onItemClick={() => {}} />
            </div>
        </div>
      </div>
  );
  };
  
  export default SkillsModal;




// const aiLibraries = [
//   { title: "Hugging Face", icon: <SiHuggingface />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #ffd700, #ffa500, #ff7e00)" },
//   { title: "OpenAI", icon: <SiOpenai />, href: "#", gradient: "conic-gradient(from 45deg, #36d1dc, #5b86e5, #2b65c0)" },
//   { title: "PyTorch", icon: <SiPytorch />, href: "#", gradient: "conic-gradient(from 45deg, #ff6b6b, #ff3b3b, #c70000)" },
//   { title: "TensorFlow", icon: <SiTensorflow />, href: "#", gradient: "conic-gradient(from 45deg, #ffae00, #ff6f00, #ff3b00)" },
//   { title: "Langchain", icon: <LangChainIcon />, href: "#", gradient: "conic-gradient(from 45deg, #6a11cb, #2575fc, #0033cc)" },
//   { title: "PandasAI", icon: <IconBrain />, href: "#", gradient: "conic-gradient(from 45deg, #ff7e5f, #ff4c3b, #c70000)" }
// ];


// const llmTechniques = [
//   { title: "GPT", icon: <SiOpenai />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #ffd700, #ff9a00, #ff6f00)" },
//   { title: "Llama-2", icon: <SiMeta />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #36d1dc, #5b86e5, #2b65c0)" },
//   { title: "Claude", icon: <AnthropicIcon />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #ff6b6b, #ff3b3b, #c70000)" }
// ];


// const versionControl = [
//   { title: "Git", icon: <IconBrandGit />, href: "#", gradient: "conic-gradient(from 45deg, #ff7e5f, #ff4c3b, #c70000)" },
//   { title: "GitHub", icon: <IconBrandGithub />, href: "#", gradient: "conic-gradient(from 45deg, #333333, #000000, #111111)" }
// ];


// const softwaresTools = [
// { title: "Docker", icon: <IconBrandDocker />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #00c6ff, #0072ff, #0033cc)" },
// { title: "Xcode", icon: <IconDeviceGamepad2 />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #36d1dc, #5b86e5, #2b65c0)" },
// { title: "VSCode", icon: <IconBrandVisualStudio />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #0072ff, #0056b3, #003d80)" },
// { title: "Notion", icon: <IconBrandNotion />, href: "#", gradient: "conic-gradient(from 45deg, #333333, #000000, #111111)" },
// { title: "Airtable", icon: <IconWorldWww />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #ffd700, #ffaa00, #ff6f00)" },
// { title: "Figma (UI/UX)", icon: <IconBrandFigma />, href: "#", gradient: "conic-gradient(from 45deg, #ff7e5f, #ff4c3b, #c70000)" }
// ];


// const gisTools = [
// { title: "Qgis", icon: <SiQgis />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #00b09b, #007d65, #003d33)" },
// { title: "ArcGIS", icon: <SiArcgis />, href: "#", gradient: "radial-gradient(circle at 30% 30%, #5b86e5, #3a5bbf, #1a318f)" }
// ];



// const programmingLanguages = [
//   // Row 1: (Comment 1, 2, 3)
//   { 
//     title: "C++", 
//     icon: <SiCplusplus size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 20% 50%, #00ffcc, #00b09b, #006d55, #004a3d, #001a15)", 
//     borderColor: "linear-gradient(to bottom left, #001a15, #004a3d, #006d55, #00b09b, #00ffcc)" // (Comment 1)
//   },
//   { 
//     title: "R", 
//     icon: <SiR size={48} />, 
//     href: "#", 
//     gradient:"radial-gradient(circle at 50% 50%, rgb(250, 49, 49) 0%, rgb(146, 32, 43) 50%, #37000a 80%, #2b0000 100%)", 
//     borderColor: "linear-gradient(135deg, #2b0000, #37000a, #bf1e2e, #ff3b3b)" // (Comment 2)
//   },
//   { 
//     title: "MySQL", 
//     icon: <SiMysql size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 80% 50%, #ff9e8f, #ff7e5f, #ff4c3b, #c70000, #8b0000)", 
//     borderColor: "border-red-300" // (Comment 3)
//   },

//   // Row 2: (Comment 4, 5, 6)
//   { 
//     title: "PostgreSQL", 
//     icon: <SiPostgresql size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 20% 50%, #66d9ff, #00c6ff, #0072ff, #0033cc, #001f7a)", 
//     borderColor: "border-blue-300" // (Comment 4)
//   },
//   { 
//     title: "Shell", 
//     icon: <IconTerminal2 size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 50% 50%, #666666, #333333, #000000, #111111, #000000)", 
//     borderColor: "border-gray-400" // (Comment 5)
//   },
//   { 
//     title: "Python", 
//     icon: <IconBrandPython size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 80% 50%, #ffeb99, #ffd700, #ffaa00, #ff6f00, #cc5500)", 
//     borderColor: "border-yellow-300" // (Comment 6)
//   },

//   // Row 3: (Comment 7, 8, 9)
//   { 
//     title: "Typescript", 
//     icon: <SiTypescript size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 20% 50%, #66d9ff, #0072ff, #0056b3, #003d80, #002347)", 
//     borderColor: "border-blue-300" // (Comment 7)
//   },
//   { 
//     title: "TensorFlow", 
//     icon: <SiTensorflow size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 50% 50%, #ffc266, #ffae00, #ff6f00, #ff3b00, #cc2900)",  
//     borderColor: "border-orange-300" // (Comment 8)
//   },
//   { 
//     title: "PyTorch", 
//     icon: <SiPytorch size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 80% 50%, #ff9e9e, #ff6b6b, #ff3b3b, #c70000, #8b0000)", 
//     borderColor: "border-red-300" // (Comment 9)
//   },

//   // Row 4: (Comment 10, 11, 12)
//   { 
//     title: "Langchain", 
//     icon: <LangChainIcon width={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 20% 50%, #ff66b2, #e11d48, #be123c, #881337, #4c0519)", 
//     borderColor: "border-pink-300" // (Comment 10)
//   },
//   { 
//     title: "Hugging Face", 
//     icon: <SiHuggingface size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 50% 50%, #ffe566, #ffd700, #ffa500, #ff7e00, #cc6600)", 
//     borderColor: "border-yellow-300" // (Comment 11)
//   },
//   { 
//     title: "PandasAI", 
//     icon: <IconBrain size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 80% 50%, #ff9e8f, #ff7e5f, #ff4c3b, #c70000, #8b0000)", 
//     borderColor: "border-red-300" // (Comment 12)
//   },

//   // Row 5: (Comment 13, 14, 15)
//   { 
//     title: "Git", 
//     icon: <IconBrandGit size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 20% 50%, #ff9e8f, #ff7e5f, #ff4c3b, #c70000, #8b0000)", 
//     borderColor: "border-red-300" // (Comment 13)
//   },
//   { 
//     title: "GitHub", 
//     icon: <IconBrandGithub size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 50% 50%, rgb(66, 246, 255), rgb(20, 184, 166), rgb(17, 94, 89), rgb(15, 23, 42), rgb(0, 0, 0))", 
//     borderColor: "border-cyan-300" // (Comment 14)
//   },
//   { 
//     title: "Docker", 
//     icon: <IconBrandDocker size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 80% 50%, #66d9ff, #00c6ff, #0072ff, #0033cc, #001f7a)", 
//     borderColor: "border-blue-300" // (Comment 15)
//   },

//   // Row 6: (Comment 16, 17, 18)
//   { 
//     title: "OpenAI", 
//     icon: <SiOpenai size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 20% 50%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", 
//     borderColor: "border-blue-300" // (Comment 16)
//   },
//   { 
//     title: "Claude", 
//     icon: <AnthropicIcon width={52} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 50% 50%, #ff9e9e, #ff6b6b, #ff3b3b, #c70000, #8b0000)",
//     borderColor: "border-red-300" // (Comment 17)
//   },
//   { 
//     title: "Llama-2", 
//     icon: <SiMeta size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 80% 50%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", 
//     borderColor: "border-blue-300" // (Comment 18)
//   },

//   // Row 7: (Comment 19, 20, 21)
//   { 
//     title: "VSCode", 
//     icon: <IconBrandVisualStudio size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 20% 50%, #66d9ff, #0072ff, #0056b3, #003d80, #002347)", 
//     borderColor: "border-blue-300" // (Comment 19)
//   },
//   { 
//     title: "Xcode", 
//     icon: <IconDeviceGamepad2 size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 50% 50%, #7be7ff, #36d1dc, #5b86e5, #2b65c0, #1a4488)", 
//     borderColor: "border-blue-300" // (Comment 20)
//   },
//   { 
//     title: "Notion", 
//     icon: <IconBrandNotion size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 80% 50%, #666666, #333333, #000000, #111111, #000000)", 
//     borderColor: "border-gray-400" // (Comment 21)
//   },

//   // Row 8: (Comment 22, 23, 24)
//   { 
//     title: "GPT", 
//     icon: <SiOpenai size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 20% 50%, #ffe566, #ffd700, #ff9a00, #ff6f00, #cc5500)", 
//     borderColor: "border-yellow-300" // (Comment 22)
//   },
//   { 
//     title: "Figma (UI/UX)", 
//     icon: <IconBrandFigma size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 50% 50%, #ff9e8f, #ff7e5f, #ff4c3b, #c70000, #8b0000)", 
//     borderColor: "border-red-300" // (Comment 23)
//   },
//   { 
//     title: "Airtable", 
//     icon: <IconWorldWww size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 80% 50%, #ffe566, #ffd700, #ffaa00, #ff6f00, #cc5500)", 
//     borderColor: "border-yellow-300" // (Comment 24)
//   },

//   // Row 9: (Comment 25, 26)
//   { 
//     title: "Qgis", 
//     icon: <SiQgis size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 30% 50%, #00ffcc, #00b09b, #006d55, #004a3d, #001a15)", 
//     borderColor: "border-green-300" // (Comment 25)
//   },
//   { 
//     title: "ArcGIS", 
//     icon: <SiArcgis size={48} />, 
//     href: "#", 
//     gradient: "radial-gradient(circle at 70% 50%, #7ca9ff, #5b86e5, #3a5bbf, #1a318f, #0a1445)", 
//     borderColor: "border-blue-300" // (Comment 26)
//   },
// ];
