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

export type ProjectIconName = 'code' | 'chart' | 'rocket' | 'credit' | 'drone' | 'satellite' | 'quantum' | 'fluid';

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
    id: "quantumviz",
    title: "QuantumViz",
    shortDescription: "AI-powered quantum circuit generator using natural language and 3D visualization",
    iconName: "quantum",
    className: "md:col-span-1",
    color: "from-pink-500 to-orange-500",
    headerImage: "/img/quantumn.webp",
    headerAnimation: "3d",
    fullDescription: {
      intro: "QuantumViz transforms ideas into quantum circuits using natural language. Built to address a critical gap in quantum computing tools, it simplifies circuit design through AI-powered generation, interactive 3D visualization, and a RAG-powered chatbot trained on quantum documentation and research papers.",
      features: [
        { title: "Natural Language Interface", desc: "Generate circuit designs using text or speech input via OpenAI, making quantum computing accessible without extensive coding knowledge." },
        { title: "3D Qubit Visualization", desc: "Interactive Bloch sphere visualizations powered by IBM Qiskit, allowing users to explore qubit states before writing any code." },
        { title: "Code & LaTeX Generation", desc: "Automatically generates executable Python/Qiskit code and exports circuit diagrams to LaTeX for research documentation." },
        { title: "RAG-Powered Chatbot", desc: "Custom conversational agent built with Groq and LlamaIndex, trained on 100s of research papers and Qiskit documentation." },
        { title: "Research Paper Parsing", desc: "Automatically extracts quantum circuit images from arXiv using Selenium and Scrapy, converting them directly to Qiskit code." },
      ],
      conclusion: "Endorsed by quantum researchers at UCLA, Google Quantum AI, and AWS, QuantumViz aims to reduce barriers to entry in quantum computing and accelerate research by saving time on circuit design and documentation.",
      image: "/img/quantumviz.webp",
      videoUrl: "https://www.youtube.com/embed/OuZSJU72B7s",
    },
  },
  {
    id: "ai-engineering-deloitte",
    title: "Generative AI for Code & Data",
    shortDescription: "GPT-powered coding assistant and natural language data analysis platform at Deloitte",
    iconName: "code",
    className: "md:col-span-1",
    color: "from-emerald-500 to-blue-600",
    headerImage: "/img/deloitte.webp",
    headerAnimation: "3d",
    fullDescription: {
      intro: "Developed two enterprise AI solutions at Deloitte: a GPT-powered coding assistant to democratize software development, and an intelligent data analysis platform using PandasAI to make DataFrame analysis accessible to non-technical users through natural language queries.",
      features: [
        { title: "AI Coding Assistant", desc: "GPT-3.5 Turbo fine-tuned with prompt engineering, featuring moderation checks, self-evaluation, and conversational memory for follow-up questions." },
        { title: "Natural Language Data Analysis", desc: "Upload datasets and ask questions in plain English—get textual explanations, interactive visualizations, and actionable insights." },
        { title: "Smart Data Operations", desc: "Intelligent DataFrame merging, missing data interpolation, and RSS minimization for numerical columns." },
        { title: "Interactive Visualizations", desc: "HTML/JavaScript-powered plots that go beyond standard Python visualizations for enhanced user experience." },
      ],
      conclusion: "Both tools achieved 90%+ accuracy rates and were designed to empower users to leverage AI without deep technical expertise, transforming how teams interact with code and data.",
      image: "/img/deloitte.webp",
      videoUrl: "https://www.youtube.com/embed/5SxYQvWsMCw",
    },
  },
  {
    id: "actuals",
    title: "AI for SMB Acquisitions",
    shortDescription: "Founding Engineer at an AI startup streamlining business acquisitions",
    iconName: "rocket",
    className: "md:col-span-1",
    color: "from-orange-500 to-amber-500",
    headerImage: "/img/actuals.webp",
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
      image: "/img/actuals.webp",
    },
  },
  {
    id: "drone-ndvi",
    title: "Drone-Mounted IR System for Vegetation Monitoring",
    shortDescription: "Enhancing environmental monitoring using drone technology",
    iconName: "drone",
    className: "md:col-span-1",
    color: "from-green-500 to-emerald-600",
    headerImage: "/img/drone.webp",
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
      image: "/img/drone.webp",
    },
  },
  {
    id: "satellite-fire",
    title: "Satellite-Based Fire Detection",
    shortDescription: "Visualizing fire, water, and land cover using Copernicus data from ESA",
    iconName: "satellite",
    className: "md:col-span-2",
    color: "from-rose-500 to-orange-600",
    headerImage: "/img/project_images/fire.webp",
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
  {
    id: "lattice-boltzmann",
    title: "Lattice Boltzmann Fluid Simulation",
    shortDescription: "Computational fluid dynamics simulation of flow past a cylinder using the LBM method",
    iconName: "fluid",
    className: "md:col-span-3",
    color: "from-cyan-500 to-blue-600",
    headerImage: "/img/fluid_output.png",
    headerAnimation: "parallax",
    fullDescription: {
      intro: "A mesoscopic fluid dynamics simulation implementing the Lattice Boltzmann Method (LBM) to visualize flow past a cylindrical obstacle. This approach bridges the gap between molecular dynamics and continuum mechanics, offering computational efficiency while capturing complex fluid behaviors like vortex shedding.",
      features: [
        { title: "D2Q9 Lattice Model", desc: "Implements a 2D lattice with 9 discrete velocity directions, balancing computational efficiency with accurate flow representation." },
        { title: "BGK Collision Operator", desc: "Uses the Bhatnagar-Gross-Krook approximation for particle collisions, controlled by the relaxation parameter τ (tau) for kinematic viscosity." },
        { title: "Streaming & Collision", desc: "Two-step algorithm where particles stream to neighboring nodes, then undergo collision relaxation toward equilibrium distribution." },
        { title: "Bounce-Back Boundary", desc: "Implements no-slip boundary conditions on the cylinder by reversing particle velocities upon collision with the obstacle." },
      ],
      conclusion: "The simulation successfully captures the formation of von Kármán vortex streets—alternating vortices shed behind the cylinder—demonstrating the power of LBM for complex fluid dynamics visualization.",
      image: "/img/fluid_output.png",
    },
  },
];

