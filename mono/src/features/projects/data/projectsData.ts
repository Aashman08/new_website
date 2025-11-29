/**
 * Projects Data
 * Data for the projects section
 */

import type { HeaderAnimationType } from '../components/headerAnimations';

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ProjectFullDescription {
  intro: string;
  features: ProjectFeature[];
  conclusion: string;
  videoUrl?: string;
  image?: string;
}

export type ProjectIconName = 'code' | 'chart' | 'rocket' | 'credit' | 'drone' | 'satellite';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  iconName: ProjectIconName;
  className: string;
  color: string;
  // Card header/thumbnail
  headerImage?: string;
  // Animation type: "3d" | "zoom" | "parallax" | "glow" | "none" (default: "3d")
  headerAnimation?: HeaderAnimationType;
  fullDescription: ProjectFullDescription;
}

export const projectsData: Project[] = [
  {
    id: "genai-deloitte",
    title: "Generative AI at Deloitte",
    shortDescription: "Internal Development Tool for AI coding assistance",
    iconName: "code",
    className: "md:col-span-1",
    color: "from-emerald-500 to-teal-600",
    headerImage: "/img/deloitte.png",
    headerAnimation: "3d",
    fullDescription: {
      intro: "This project aims to make coding accessible to everyone, including non-technical users, by leveraging the GPT-3.5 Turbo model fine-tuned with prompt engineering for specific tasks.",
      features: [
        { title: "Flow Control System", desc: "Ensures safety and efficiency with moderation checks and input validation." },
        { title: "Task Execution", desc: "Valid inputs trigger the requested tasks, followed by self-evaluation for quality and accuracy." },
        { title: "Error Handling", desc: "Robust error management with try-except blocks for unexpected situations." },
        { title: "Conversational Capability", desc: "Supports follow-up questions and recurrent tasks using memory storage and context understanding." },
      ],
      conclusion: "The goal is to democratize coding, making it user-friendly and personalized, empowering users to engage in meaningful coding conversations and effectively apply coding concepts in their projects.",
      image: "/img/deloitte.png",
      videoUrl: "https://www.youtube.com/embed/5SxYQvWsMCw",
    },
  },
  {
    id: "data-analysis-deloitte",
    title: "AI for Data Analysis at Deloitte",
    shortDescription: "Advanced DataFrame analysis and visualizations with GPT and PandasAI",
    iconName: "chart",
    className: "md:col-span-1",
    color: "from-blue-500 to-indigo-600",
    headerImage: "/img/pandas.png",
    headerAnimation: "parallax",
    fullDescription: {
      intro: "The primary objective of this project is to democratize advanced DataFrame analysis, making it accessible to both technical and non-technical users. By allowing users to upload datasets and ask questions in natural language, the system generates comprehensive answers with textual explanations, graphical representations, and data visualizations.",
      features: [
        { title: "GPT & PandasAI Integration", desc: "Customized for specific use-cases, including prompt modifications and function edits for versatile data handling." },
        { title: "Smart Data Merging", desc: "Prompt engineering enables the model to select relevant DataFrames and identify common columns for merging." },
        { title: "Interactive Visualizations", desc: "Uses HTML and JavaScript for interactive plots, enhancing the user experience beyond standard Python plots." },
        { title: "Missing Data Handling", desc: "Offers interpolation and null value filling, tailored to data types with RSS minimization for numerical columns." },
      ],
      conclusion: "Extensive testing has achieved a 90% accuracy rate, with multiple checkpoints to ensure output quality. This project transforms DataFrame analysis into an intuitive and user-friendly experience.",
      image: "/img/pandas.png",
    },
  },
  {
    id: "actuals",
    title: "AI for SMB Acquisitions",
    shortDescription: "Founding Engineer at an AI startup streamlining business acquisitions",
    iconName: "rocket",
    className: "md:col-span-1",
    color: "from-orange-500 to-amber-500",
    headerImage: "/img/actuals.png",
    headerAnimation: "parallax",
    fullDescription: {
      intro: "Joined Actuals as a Founding Software Engineer, an AI startup backed by F7 Ventures, aimed at streamlining the acquisition process for Small and Medium Businesses (SMBs) across the United States.",
      features: [
        { title: "AI-Powered Deal Flow", desc: "Built intelligent systems to analyze and qualify potential acquisition targets, reducing manual screening time significantly." },
        { title: "Due Diligence Automation", desc: "Developed automated tools to extract and analyze key financial metrics from business documents." },
        { title: "Full-Stack Development", desc: "Contributed to the entire product stack from frontend interfaces to backend data pipelines." },
        { title: "Startup Experience", desc: "Gained hands-on experience in early-stage product development, rapid iteration, and working directly with founders." },
      ],
      conclusion: "This venture into entrepreneurship provided invaluable experience in building AI products from the ground up and understanding the SMB acquisition landscape.",
      image: "/img/actuals.png",
    },
  },
  {
    id: "drone-ndvi",
    title: "Drone-Mounted IR System for Vegetation Monitoring",
    shortDescription: "Enhancing environmental monitoring using drone technology",
    iconName: "drone",
    className: "md:col-span-1",
    color: "from-green-500 to-emerald-600",
    headerImage: "/img/drone.png",
    headerAnimation: "zoom",
    fullDescription: {
      intro: "During the summer of 2022, I interned at the Edge of Space Academy at the University of Iowa, focusing on spaceflight instrumentation and mission design. As Project Manager for the Ashton Prairie Near Infrared Sensing team, I explored drone technology's potential in land and ecology management.",
      features: [
        { title: "Custom Hardware", desc: "Built the imaging system from scratch: two cameras, two Raspberry Pi units, a battery pack, and a 3D-printed container—all within a $1000 budget." },
        { title: "NDVI Analysis", desc: "Developed Python scripts for post-processing aerial images, extracting relevant pixel values from RGB and IR images to assess vegetation health." },
        { title: "False-Color Imaging", desc: "Created false-color images to visualize vegetation stress based on NDVI values during heatwave conditions." },
        { title: "3D Modeling", desc: "Provided proof of concept for rendering 3D models of vegetation height using structure from motion photogrammetric techniques." },
      ],
      conclusion: "This project presents an affordable and viable alternative for small-scale farmers worldwide, enabling them to carry out land assessment and management independently.",
      image: "/img/drone.png",
    },
  },
  {
    id: "satellite-fire",
    title: "Satellite-Based Fire Detection",
    shortDescription: "Visualizing fire, water, and land cover using Copernicus data from ESA",
    iconName: "satellite",
    className: "md:col-span-2",
    color: "from-rose-500 to-orange-600",
    headerImage: "/img/project_images/fire.png",
    headerAnimation: "zoom",
    fullDescription: {
      intro: "For this project, I utilized Sentinel-2 satellite data obtained from the open-source Copernicus hub, courtesy of the European Space Agency. The Sentinel-2 satellite records images across 12 unique spectral bands, each revealing distinct features at varying wavelengths.",
      features: [
        { title: "NDVI (B4 & B8)", desc: "Normalized Differential Vegetation Index assesses dryness and health of vegetation, identifying areas susceptible to fires." },
        { title: "NDWI (B3 & B8)", desc: "Normalized Difference Water Index detects and monitors open water surfaces like lakes, rivers, and flood extents." },
        { title: "BAI (B11 & B8)", desc: "Burn Area Index monitors wildfire impact, providing information about extent and severity of burn scars—piercing through smoke." },
        { title: "Study Region", desc: "Analysis conducted on Northern California, in the vicinity of Yosemite National Park and Lake Tahoe." },
      ],
      conclusion: "Higher BAI values correspond to more severe burn scars. This index allows us to see through smoke and assess actual fire damage, providing valuable data for environmental monitoring and emergency response.",
    },
  },
];

