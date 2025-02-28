"use client";

import { Text, StyledLink } from "./Typography";
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainMenubar from "./MainMenubar";
import { Heading } from "./Heading";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {SparklesCore } from "@/components/ui/sparkles"
import {TimelineDemo} from "./timeline"
// Import custom SVGs as React components

// import { ReactComponent as AnthropicIcon } from '@/assets/icons/anthropic.svg';
// import { ReactComponent as LlamaIcon } from '@/assets/icons/llama.svg';
// import { ReactComponent as GroqIcon } from '@/assets/icons/groq.svg';

// 1) IMPORT the FloatingDock and relevant ICONS from Tabler
import { FloatingDock } from "@/components/ui/floating-dock";
// import {
//   IconCode,
//   IconBrandPython,
//   IconBrandHtml5,
//   IconBrandCss3,
//   IconTerminal2,
//   IconBrandGit,
//   IconBrandGithub,
//   IconBrandDocker,
//   IconDeviceGamepad2,
//   IconBrandVisualStudio,
//   IconBrandGoogleDrive,
//   IconBrandNotion,
//   IconWorldWww,
//   IconBrandFigma,
//   IconMap2,
//   IconBrain,
// } from "@tabler/icons-react";
// import { 
//   SiCplusplus, 
//   SiR, 
//   SiTypescript, 
//   SiMysql, 
//   SiPostgresql,
//   SiHuggingface, 
//   SiOpenai, 
//   SiPytorch, 
//   SiTensorflow,
//   SiQgis, 
//   SiArcgis,
//   SiMeta
// } from 'react-icons/si';
// import AnthropicIcon from "@/icons/anthropic";
// import LangChainIcon from "@/icons/langchain";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// const programmingLanguages = [
//   { title: "C++", 
//     icon: (
//       <SiCplusplus
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24} // Adjust size as needed
//       />
//     ), 
//     href: "#" },
//   {
//     title: "R",
//     icon: 
//       <SiR
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24} // Adjust size as needed
//       />
//     ,
//     href: "#",
//   },
//   {
//     title: "MySQL",
//     // Option 1: Using Specific SQL Dialect Icon (e.g., MySQL)
//     icon: 
//       <SiMysql
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24} // Adjust size as needed
//       />
//     ,
//     href: "#",
//   },
//   { title: "PostgreSQL", 
//     icon: <SiPostgresql
//       className="h-full w-full text-neutral-200 dark:text-neutral-300"
//       size={24} // Adjust size as needed
//     />,  
//     href: "#" },
//   { title: "Typescript", 
//       icon: <SiTypescript
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24} // Adjust size as needed
//       />,  
//     href: "#" },
//   { title: "Python", icon: <IconBrandPython className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "Shell", icon: <IconTerminal2 className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "HTML", icon: <IconBrandHtml5 className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "CSS", icon: <IconBrandCss3 className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
// ];

// const aiLibraries = [
//   {
//     title: "Hugging Face",
//     icon: (
//       <SiHuggingface
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24}
//       />
//     ),
//     href: "#",
//   },
//   {
//     title: "OpenAI",
//     icon: (
//       <SiOpenai
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24}
//       />
//     ),
//     href: "#",
//   },
//   {
//     title: "PyTorch",
//     icon: (
//       <SiPytorch
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24}
//       />
//     ),
//     href: "#",
//   },
//   {
//     title: "TensorFlow",
//     icon: (
//       <SiTensorflow
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24}
//       />
//     ),
//     href: "#",
//   },
//   { title: "Langchain", icon: <LangChainIcon className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "PandasAI", icon: <IconBrain className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
// ];

// const llmTechniques = [
//   {
//     title: "GPT",
//     icon: (
//       <SiOpenai
//       className="h-full w-full text-neutral-200 dark:text-neutral-300"
//       size={24}
//     />
//   ),
//     href: "#",
//   },
//   { title: "Llama-2", icon: <SiMeta className="h-full w-full text-neutral-200 dark:text-neutral-300" size={24}/>, href: "#" },
//   { title: "Claude", icon: <AnthropicIcon className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
// ];

// const versionControl = [
//   { title: "Git", icon: <IconBrandGit className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
// ];

// const softwaresTools = [
//   { title: "Docker", icon: <IconBrandDocker className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "Xcode", icon: <IconDeviceGamepad2 className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "VSCode", icon: <IconBrandVisualStudio className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "R-studios", icon: <IconCode className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "Microsoft Suite", icon: <IconCode className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "G-Suite", icon: <IconBrandGoogleDrive className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "Notion", icon: <IconBrandNotion className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "Airtable", icon: <IconWorldWww className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
//   { title: "Figma (UI/UX)", icon: <IconBrandFigma className="h-full w-full text-neutral-200 dark:text-neutral-300" />, href: "#" },
// ];

// const gisTools = [
//   {
//     title: "Qgis",
//     icon: (
//       <SiQgis
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24}
//       />
//     ),
//     href: "#",
//   },
//   {
//     title: "ArcGIS",
//     icon: (
//       <SiArcgis
//         className="h-full w-full text-neutral-200 dark:text-neutral-300"
//         size={24}
//       />
//     ),
//     href: "#",
//   }
// ];

const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose }) => {
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

  const aboutMeTitles = ['Projects', 'CV', 'Contact', 'Research', 'Art'];

  // const skillLinks = {
  //   "PROGRAMMING LANGUAGES": programmingLanguages,
  //   "AI LIBRARIES": aiLibraries,
  //   "LLM & TECHNIQUES": llmTechniques,
  //   "VERSION CONTROL": versionControl,
  //   "SOFTWARES AND TOOLS": softwaresTools,
  //   "GIS TOOLS": gisTools,
  // };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 font-sans"
    >
      <div className="relative w-full max-w-6xl mx-auto mt-40 mb-10 p-10 bg-black text-white rounded-lg shadow-lg ">
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
        {/* <h1 className="text-4xl font-bold text-center mb-6">ABOUT ME</h1> */}
        <div className="flex flex-col items-center mb-6 justify-center">
          <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
            About Me
          </h2>
        </div>



        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <Avatar className="w-64 h-64">
            <AvatarImage src="/img/NYC_pic.png" alt="Aashman Rastogi" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        </div>

        {/* Content */}
        {/* <div className="justify-start text-justify ml-4"> */}
        <div > {/* Ensure this has a higher z-index */}
          <TimelineDemo />
        </div>
        {/* </div> */}

        {/* MainMenubar */}
        <div className="mt-8">
          <MainMenubar titles={aboutMeTitles} onItemClick={() => {}} />
        </div>
        <br /> 
      </div>
    </div>
  );
  };

  export default AboutMeModal;


  // <div className="justify-start text-justify ml-4">
          {/* <Text>
            Hi! Thank you for visiting my webpage.
          </Text>
          <Text>
            I'm a rising senior at the{" "}
            <StyledLink href="https://www.ucla.edu/">University of California, Los Angeles (UCLA)</StyledLink>{" "}
            and am majoring in <b>Statistics and Data Science Engineering</b> with a keen fascination towards{" "}
            <b>Artificial Intelligence and Machine Learning</b>.
          </Text>
          <Text>
            My academic path has been filled with inspirational moments, from getting to interact and take guidance 
            from esteemed professors like Prof.{" "}
            <StyledLink href="https://www.diviner.ucla.edu/dap/">David Paige</StyledLink>{" "}
            (UCLA), working on groundbreaking projects like the{" "}
            <StyledLink href="https://www.diviner.ucla.edu/dap/">
              Perseverance rover on Mars and Lunar Reconnaissance Orbiter
            </StyledLink>.
          </Text>
          <Text>
            My journey has been a diverse one – my passion towards outer space
            rooted itself within me as a ninth-grader, igniting a profound
            desire to become a planetary scientist and inspiring a fervor that
            initially led me down the path of <b>Geology</b> at UCLA.
            </Text>
            <Text>
            My academic path has been filled with inspirational moments, from
            getting to interact and take guidance from esteemed professors like
            Prof.{" "}
            <b>
            <StyledLink 
                href="https://www.diviner.ucla.edu/dap/"
                className="text-white font-bold no-underline"
              >
                David Paige
              </StyledLink>
            </b>{" "}
            (UCLA), working on groundbreaking projects like the{" "}
            <b>Perseverance rover on Mars and Lunar Reconnaissance Orbiter</b>.
            It was through this voyage that I was introduced to the mesmerizing
            world of remote sensing, marking the beginning of my endearing
            journey with data science.
            </Text>
            <Text>
            I am fervently driven by a vision to harness{" "}
            <b>Generative AI and Machine Learning</b> and deeply passionate
            about their transformative potential in industries as diverse as{" "}
            <b>
              finance, consulting, autonomous vehicles, agriculture, disaster
              management, energy, environment, and government
            </b>
            . Be it finance or farming, my goal is simple: to use technology to
            solve problems and improve lives.
          </Text>
          <Text>
            Outside of academics, I have a variety of interests and hobbies
            that enrich my life. Since the age of six, I've been immersed in the
            world of sketching and painting, experimenting with mediums from oil
            and acrylics to colored pencils. This artistic journey has been
            transformative, teaching me both attention to detail and patience.
            I've devoted a special section to showcase my artwork and hope it
            brings you as much joy as it has brought me. I also enjoy swimming,
            playing badminton and cricket, watching documentaries, movies, and
            hanging out with my friends and having discussions on a wide range
            of topics.
          </Text>

          <Text>
            Outside of academics, I have a variety of interests and hobbies
            that enrich my life. Since the age of six, I've been immersed in the
            world of sketching and painting, experimenting with mediums from oil
            and acrylics to colored pencils. This artistic journey has been
            transformative, teaching me both attention to detail and patience.
            I've devoted a special section to showcase my artwork and hope it
            brings you as much joy as it has brought me. I also enjoy swimming,
            playing badminton and cricket, watching documentaries, movies, and
            hanging out with my friends and having discussions on a wide range
            of topics.
          </Text>

          <Text>
            Outside of academics, I have a variety of interests and hobbies
            that enrich my life. Since the age of six, I've been immersed in the
            world of sketching and painting, experimenting with mediums from oil
            and acrylics to colored pencils. This artistic journey has been
            transformative, teaching me both attention to detail and patience.
            I've devoted a special section to showcase my artwork and hope it
            brings you as much joy as it has brought me. I also enjoy swimming,
            playing badminton and cricket, watching documentaries, movies, and
            hanging out with my friends and having discussions on a wide range
            of topics.
          </Text>
          {/* =============================== */}
            //           SKILLS               */}
            // ===============================
            {/* <Text className="text-xl font-bold mt-8">SKILLS</Text>

            {/* Iterate over each skill category and render a FloatingDock */}
            {/* {Object.entries(skillLinks).map(([category, items]) => (
              <div key={category} className="mt-6">
                {/* Category Title */}
                {/* <Text className="font-bold">{category}</Text>
                {/* Floating Dock */}
                // {/* <div className="flex items-center justify-center h-[10rem] w-full">
            //       // <FloatingDock items={items} />
            //     </div>
            //   </div>
            // ))} */
          //  } */} */} */}

            // {/* End of SKILLS section */}
          // </div>

          // {/* End of SKILLS section */}