/**
 * Research Data
 * Data for the research section
 */

export interface ResearchProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  color: string;
  tags: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    id: "spectraview",
    slug: "spectraview",
    title: "AstroPhotonics Technology Lab",
    subtitle: "Satellite-based trace gas detection with ultra-high precision photonic spectrograph technology",
    heroImage: "/img/island.png",
    color: "from-violet-500/20 to-purple-600/20",
    tags: ["Satellite Sensing", "Algorithm Development", "Ha"],
  },
  {
    id: "sri-lab",
    slug: "sri-lab",
    title: "Building Damage Detection",
    subtitle: "Deep learning for LA County emergency response and infrastructure reinforcement",
    heroImage: "/img/sri-lab-hero.png",
    color: "from-blue-500/20 to-cyan-600/20",
    tags: ["Deep Learning", "PyTorch", "U-Net"],
  },
  {
    id: "tibetan-plateau",
    slug: "tibetan-plateau",
    title: "Origins and Slope Variations",
    subtitle: "A study of Longmen Shan and Min Shan Mountain Systems of the Tibetan Plateau and Sichuan Basin",
    heroImage: "/img/project_images/minshan.webp",
    color: "from-emerald-500/20 to-teal-600/20",
    tags: ["Geology", "QGIS", "Python"],
  },
  {
    id: "mars-gale-crater",
    slug: "mars-gale-crater",
    title: "Exploring Life on Mars",
    subtitle: "An In-depth Review of Gale Crater",
    heroImage: "/img/project_images/space.webp",
    color: "from-orange-500/20 to-red-600/20",
    tags: ["Astrobiology", "Mars", "Review Paper"],
  },
  {
    id: "nasa-shift",
    slug: "nasa-shift",
    title: "SHIFT Campaign",
    subtitle: "NASA JPL collaboration to understand land and aquatic ecosystems",
    heroImage: "/img/project_images/field.jpeg",
    color: "from-yellow-500/20 to-amber-600/20",
    tags: ["NASA JPL", "Remote Sensing", "Field Research"],
  },
];

