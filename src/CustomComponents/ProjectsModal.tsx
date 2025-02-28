// "use client";

// import { Text, StyledLink } from "./Typography";
// import React, { useEffect, useRef } from "react";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
// import { Heading } from "./Heading";
// import { TracingBeam } from "@/components/ui/tracing-beam";
// import Image from "next/image";

// interface ProjectsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const projectsData = [
//   {
//     title: "Project One",
//     description: "Description for Project One",
//     imageSrc: "/img/NYC_pic.png",
//   },
//   {
//     title: "Project Two",
//     description: "Description for Project Two",
//     imageSrc: "/img/NYC_pic.png",
//   },
//   {
//     title: "Project Three",
//     description: "Description for Project Three",
//     imageSrc:"/img/NYC_pic.png",
//   },
// ];

// const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
//   const modalRef = useRef<HTMLDivElement>(null);

//   // Handle body scroll lock
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//       if (modalRef.current) {
//         modalRef.current.scrollTop = 0;
//       }
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   // If not open, render nothing
//   if (!isOpen) return null;

//   return (
//     <div
//       ref={modalRef}
//       className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 font-sans"
//     >
//       <div className="relative w-full max-w-7xl mx-auto mt-40 mb-10 p-10 bg-black text-white rounded-lg shadow-lg">
//         {/* Close Button */}
//         <Button
//           onClick={onClose}
//           variant="ghost"
//           size="icon"
//           className="absolute top-4 right-4 text-white hover:bg-white/10"
//         >
//           <X className="h-6 w-6" />
//           <span className="sr-only">Close</span>
//         </Button>

//         {/* Title */}
//         <TracingBeam>
//         <div className="flex justify-center mb-6">
//           <Heading level="h2">Projects</Heading>
//         </div>

//         {/* 3D Cards */}
//         <div className="space-y-10">
//           {projectsData.map((project) => (
//             <CardContainer key={project.title} containerClassName="inter-var">
//               <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.6] border-white/[0.4] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
//                 <CardItem
//                   translateZ="50"
//                   className="text-xl font-bold text-neutral-200 dark:text-white"
//                 >
//                   {project.title}
//                 </CardItem>
//                 <CardItem
//                   as="p"
//                   translateZ="60"
//                   className="text-neutral-200 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                 >
//                   {project.description}
//                 </CardItem>
//                 <CardItem translateZ="100"
//                   rotateX={20}
//                   rotateZ={-10}
//                   className="w-full mt-4">
//                   <Image
//                     src={project.imageSrc}
//                     height="1000"
//                     width="1000"
//                     className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                     alt="thumbnail"
//                   />
//                 </CardItem>
//                 <div className="flex justify-between items-center mt-10">
//                   <CardItem
//                     translateZ={20}
//                     translateX={-40}
//                     as="button"
//                     className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//                   >
//                     Try now →
//                   </CardItem>
//                   <CardItem
//                     translateZ={20}
//                     translateX={40}
//                     as="button"
//                     className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                   >
//                     Sign up
//                   </CardItem>
//                 </div>
//               </CardBody>
//             </CardContainer>
//           ))}
//         </div>
//         </TracingBeam>
//       </div>
//     </div>
//   );
// };

// export default ProjectsModal;
"use client"

import React, { useEffect, useRef } from "react";
import { BentoGridThirdDemo } from "./BentoGridThirdDemo"; // Adjust path as needed
import { Text, StyledLink } from "./Typography";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainMenubar from "./MainMenubar";
import { Heading } from "./Heading";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";


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

  const aboutMeTitles = ['About Me', 'CV', 'Contact', 'Research', 'Art'];

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 font-sans"
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
        {/* <div className="flex justify-center mb-6">
          <Heading level="h2">Projects</Heading>
        </div> */}

        {/* 
          Render the BentoGridThirdDemo inside your ProjectsModal. 
          You can pass any necessary props as needed.
        */}
        <BentoGridThirdDemo />

        <div className="mt-8">
          <MainMenubar titles={aboutMeTitles} onItemClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;

