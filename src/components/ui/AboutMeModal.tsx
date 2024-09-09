// "use client";

// import React, { useEffect, useRef } from 'react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import MainMenubar from "@/CustomComponents/MainMenubar";

// interface AboutMeModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   viewportHeight: number;
// }

// const AboutMeModal: React.FC<AboutMeModalProps> = ({ isOpen, onClose, viewportHeight }) => {
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (isOpen && contentRef.current) {
//       contentRef.current.scrollTop = 0;
//     }
//   }, [isOpen]);

//   const handleMenuItemClick = (title: string) => {
//     if (title === 'About Me') {
//       onClose();
//     }
//     // Handle other menu item clicks as needed
//   };

//   const aboutMeTitles = ['Projects', 'CV', 'Contact', 'Rsearch', 'Art'];

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent 
//         className="bg-black text-white w-[80%] max-w-4xl mx-auto p-12 rounded-lg "
//         style={{ height: `${viewportHeight*0.8 }px`, overflowY: "auto"}} // Dialog taller than the viewport
//       >
//         <DialogHeader className="flex flex-col items-center">
//           <DialogTitle className="text-4xl font-medium bold tracking-widest relative inline-block">
//             ABOUT ME
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.3 bg-white"></span>
//           </DialogTitle>
//           <DialogClose className="absolute top-4 right-4 text-white" />
//         </DialogHeader>
//         {/* The main content container */}
//         <div ref={contentRef} className="mt-6">
//           <div className="flex flex-col items-center justify-start">
//             <Avatar className="w-60 h-60">
//               <AvatarImage src="/img/NYC_pic.png" alt="Aashman Rastogi" />
//               <AvatarFallback>AR</AvatarFallback>
//             </Avatar>
//             <div className="space-y-4 text-base leading-relaxed text-gray-350 font-thin">
//               <p>Hi! Thank you for visiting my webpage.<br /><br />
//               I'm a rising senior at the <b><a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer">University of California, Los Angeles (UCLA)</a></b> and am majoring in <b>Statistics and Data Science Engineering</b> with a keen fascination towards <b>Artificial Intelligence and Machine Learning</b>. 
//               {/* More content */}
//               </p>
//               <br />
//               <p className="font-thin tracking-wider">
//                 My academic path has been filled with inspirational moments, from getting to interact and take guidance from esteemed professors like Prof. <b><a href="https://www.diviner.ucla.edu/dap/" target="_blank" rel="noopener noreferrer">David Piage</a></b> (UCLA), working on groundbreaking projects like the <b><a href="https://www.diviner.ucla.edu/dap/" target="_blank" rel="noopener noreferrer">Perseverance rover on Mars and Lunar Reconnaissance Orbiter</a></b>. It was through this voyage that I was introduced to the mesmerizing world of remote sensing, marking the beginning of my endearing journey with data science.
//               </p>
//               <br />
//               <p className="font-thin tracking-wider">
//                 I am fervently driven by a vision to harness <b>Generative AI and Machine Learning</b> and deeply passionate about their transformative potential in industries as diverse as <b>finance, consulting, autonomous vehicles, agriculture, disaster management, energy, environment, and government</b>. Be it finance or farming, my goal is simple: to use technology to solve problems and improve lives.
//               </p>
//               <br />
//               <p className="font-thin tracking-wider">
//                 Outside of academics, I have a variety of interests and hobbies that enrich my life. Since the age of six, I've been immersed in the world of sketching and painting, experimenting with mediums from oil and acrylics to colored pencils. This artistic journey has been transformative, teaching me both attention to detail and patience. I've devoted a special section to showcase my artwork and hope it brings you as much joy as it has brought me. I also enjoy swimming, playing badminton and cricket, watching documentaries, movies and hanging out with my friends and having discussions on a wide range of topics.
//               </p>
//               <br />
//               <p className="font-thin tracking-wider">
//                 I hope this website gives you an idea of who I am and what I am passionate about. Below I list my skills to help you get a better understanding of my technical abilities. Enjoy exploring this website!
//               </p>
//               <br /><br />
//               <h3 className="text-2xl font-semibold mb-2">Skills</h3>
//               <ul>
//                 <h4 className="text-xl font-semibold">Programming Languages</h4>
//                 <li> Python (Numpy, Pandas, Matplotlib, Seaborn, Plotly)</li>
//                 <li> C++ </li>
//                 <li> R </li>
//                 <li> SQL </li>
//                 <li> JavaScript </li>
//                 <li> HTML </li>
//                 <li> CSS </li>
//                 <br />
//                 <h4 className="text-xl font-semibold">AI and ML Libraries</h4>
//                 <li> Langchain </li>
//                 <li> Tensorflow </li>
//                 <li> Pytorch </li>
//                 <li> Huggingface </li>
//                 <li> PandasAI </li>
//                 <li> Scikit-Learn </li>
//                 <br />
//                 <h4 className="text-xl font-semibold">Large Language Models (LLM) and Techniques</h4>
//                 <li> OpenAI </li>
//                 <li> Llama </li>
//                 <li> Claude </li>
//                 <li> Groq </li>
//                 <li> Prompt Engineering </li>
//                 <br />
//                 <h4 className="text-xl font-semibold">Softwares and Tools</h4>
//                 <li> AWS (S3, EC2, ECS, Cloudformation, Bedrock, Textract)</li>
//                 <li> Docker </li>
//                 <li> Microsoft Suite </li>
//                 <li> G-suite </li>
//                 <li> Notion </li>
//                 <li> Visual Studio (VSCode) </li>
//                 <li> Xcode </li>
//                 <li> R-studio </li>
//                 <li> Figma (UI/UX) </li>
//                 <br />
//                 <h4 className="text-xl font-semibold">Version Control</h4>
//                 <li> Git </li>
//                 <li> Github </li>
//                 <br />
//                 <h4 className="text-xl font-semibold">Geographic Information System (GIS) Tools</h4>
//                 <li> QGIS </li>
//                 <li> ArcGIS </li>
//               </ul>
//               <br />
//               <p>For more details, please see my CV or visit the 'Contact' section to know how we could get in touch.</p>
//             </div>
//             <div className="mt-8 flex justify-start w-full">
//               <MainMenubar titles={aboutMeTitles} onItemClick={handleMenuItemClick} />
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AboutMeModal;

"use client";

import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MainMenubar from "@/CustomComponents/MainMenubar";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

  if (!isOpen) return null;
//bg-opacity-20 backdrop-blur-sm // bg-black p-8
  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 overflow-y-auto "
    >
      <div className="min-h-screen text-white p-4 md:p-8">
        <div className="max-w-5xl mx-auto mt-[180px] bg-black p-8 bg-opacity-80">
          <div className="relative flex justify-center items-center mb-8">
            <h1 className="text-4xl font-medium bold tracking-widest text-center relative inline-block">
              ABOUT ME
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
            </h1>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="mt-6">
            <div className="flex flex-col items-center justify-start">
              <Avatar className="w-60 h-60">
                <AvatarImage src="/img/NYC_pic.png" alt="Aashman Rastogi" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="space-y-4 text-base leading-relaxed text-gray-350 font-thin mt-8">
                <p>Hi! Thank you for visiting my webpage.</p>
                <p>
                  I'm a rising senior at the <b><a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">University of California, Los Angeles (UCLA)</a></b> and am majoring in <b>Statistics and Data Science Engineering</b> with a keen fascination towards <b>Artificial Intelligence and Machine Learning</b>. 
                </p>
                <p className="font-thin tracking-wider">
                  My academic path has been filled with inspirational moments, from getting to interact and take guidance from esteemed professors like Prof. <b><a href="https://www.diviner.ucla.edu/dap/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">David Paige</a></b> (UCLA), working on groundbreaking projects like the <b><a href="https://www.diviner.ucla.edu/dap/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Perseverance rover on Mars and Lunar Reconnaissance Orbiter</a></b>. It was through this voyage that I was introduced to the mesmerizing world of remote sensing, marking the beginning of my endearing journey with data science.
                </p>
                <p className="font-thin tracking-wider">
                  I am fervently driven by a vision to harness <b>Generative AI and Machine Learning</b> and deeply passionate about their transformative potential in industries as diverse as <b>finance, consulting, autonomous vehicles, agriculture, disaster management, energy, environment, and government</b>. Be it finance or farming, my goal is simple: to use technology to solve problems and improve lives.
                </p>
                <p className="font-thin tracking-wider">
                  Outside of academics, I have a variety of interests and hobbies that enrich my life. Since the age of six, I've been immersed in the world of sketching and painting, experimenting with mediums from oil and acrylics to colored pencils. This artistic journey has been transformative, teaching me both attention to detail and patience. I've devoted a special section to showcase my artwork and hope it brings you as much joy as it has brought me. I also enjoy swimming, playing badminton and cricket, watching documentaries, movies and hanging out with my friends and having discussions on a wide range of topics.
                </p>
                <p className="font-thin tracking-wider">
                  I hope this website gives you an idea of who I am and what I am passionate about. Below I list my skills to help you get a better understanding of my technical abilities. Enjoy exploring this website!
                </p>
                <h3 className="text-2xl font-semibold mb-2">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xl font-semibold">Programming Languages</h4>
                    <ul className="list-disc list-inside">
                      <li>Python (Numpy, Pandas, Matplotlib, Seaborn, Plotly)</li>
                      <li>C++</li>
                      <li>R</li>
                      <li>SQL</li>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">AI and ML Libraries</h4>
                    <ul className="list-disc list-inside">
                      <li>Langchain</li>
                      <li>Tensorflow</li>
                      <li>Pytorch</li>
                      <li>Huggingface</li>
                      <li>PandasAI</li>
                      <li>Scikit-Learn</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Large Language Models (LLM) and Techniques</h4>
                    <ul className="list-disc list-inside">
                      <li>OpenAI</li>
                      <li>Llama</li>
                      <li>Claude</li>
                      <li>Groq</li>
                      <li>Prompt Engineering</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Softwares and Tools</h4>
                    <ul className="list-disc list-inside">
                      <li>AWS (S3, EC2, ECS, Cloudformation, Bedrock, Textract)</li>
                      <li>Docker</li>
                      <li>Microsoft Suite</li>
                      <li>G-suite</li>
                      <li>Notion</li>
                      <li>Visual Studio (VSCode)</li>
                      <li>Xcode</li>
                      <li>R-studio</li>
                      <li>Figma (UI/UX)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Version Control</h4>
                    <ul className="list-disc list-inside">
                      <li>Git</li>
                      <li>Github</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Geographic Information System (GIS) Tools</h4>
                    <ul className="list-disc list-inside">
                      <li>QGIS</li>
                      <li>ArcGIS</li>
                    </ul>
                  </div>
                </div>
                <p>For more details, please see my CV or visit the 'Contact' section to know how we could get in touch.</p>
              </div>
              <div className="mt-8 flex justify-start w-full font-thin tracking-wider">
                <MainMenubar titles={aboutMeTitles} onItemClick={handleMenuItemClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;