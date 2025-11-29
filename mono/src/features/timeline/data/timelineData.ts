/**
 * Timeline Data
 * Data for the career timeline section
 */

export interface TimelineLink {
  text: string;
  href: string;
}

export interface TimelineImage {
  src: string;
  alt: string;
}

export interface TimelineEntryData {
  title: string;
  subtitle: string;
  paragraphs: (string | { text: string; links?: TimelineLink[] })[];
  images: TimelineImage[];
}

export const timelineData: TimelineEntryData[] = [
  {
    title: "Present",
    subtitle: "Software Engineer at Kindo AI (July 2025 – Current)",
    paragraphs: [
      {
        text: "Currently working as a Software Engineer at {Kindo}, a Series A cybersecurity AI startup focused on automating security and identity workflows.",
        links: [{ text: "Kindo", href: "https://kindo.ai" }]
      }
    ],
    images: [
      { src: "/img/kindo-logo2.png", alt: "AI Fundraising" },
      { src: "/img/kindo-logo.svg", alt: "Kindo" }
    ]
  },
  {
    title: "Early 2025",
    subtitle: "Founding Software Engineer at Spectraview (Jan – June 2025)",
    paragraphs: [
      {
        text: "Joined {Spectraview}, a pre-seed space tech startup, as a Founding Software Engineer to build software for ultra-high-precision satellite sensing and atmospheric trace-gas detection.",
        links: [{ text: "Spectraview", href: "https://gatkine.astro.ucla.edu/research.html" }]
      }
    ],
    images: [
      { src: "/img/cube.png", alt: "CubeSat project" },
      { src: "/img/tanager_1.png", alt: "Tanager satellite" }
    ]
  },
  {
    title: "2024",
    subtitle: "Founding Software Engineer at Actuals (May – Oct 2024)",
    paragraphs: [
      {
        text: "Ventured into entrepreneurship, joined {Actuals} as a Founding Software Engineer, an AI startup backed by {F7 Ventures}, aimed at streamlining the acquisition process for Small and Medium Businesses (SMBs) across the United States.",
        links: [{ text: "Actuals", href: "https://useactuals.com" }, { text: "F7 Ventures", href: "https://www.f7ventures.com" }]
      }
    ],
    images: [
      { src: "/img/actuals.png", alt: "Actuals platform" },
      { src: "/img/chart.png", alt: "Financial analysis chart" }
    ]
  },
  {
    title: "2023",
    subtitle: "Harnessing AI to Redefine Business Solutions",
    paragraphs: [
      {
        text: "My first formal internship experience was at Deloitte, where I joined the newly established {Semantics, Analytics, and Mergers & Acquisitions Gen AI} Team.",
        links: [{ text: "Semantics, Analytics, and Mergers & Acquisitions Gen AI", href: "https://www.deloitte.com/global/en/services/consulting/services/strategy-analytics-manda.html" }]
      },
      "During my time there, I successfully completed two projects, each focused on distinct use cases, gaining hands-on experience in applying generative AI to real-world business problems."
    ],
    images: [
      { src: "/img/pandas.png", alt: "PandasAI project" },
      { src: "/img/code.jpg", alt: "Code development" }
    ]
  },
  {
    title: "2022",
    subtitle: "Exploring Earth from Above: Innovation Through Aerial Imaging",
    paragraphs: [
      {
        text: "Visited Iowa as an Undergraduate Researcher selected for the {Edge of Space Academy: Spaceflight Instrumentation and Mission Design} program.",
        links: [{ text: "Edge of Space Academy: Spaceflight Instrumentation and Mission Design", href: "https://edgeofspace.sites.uiowa.edu" }]
      },
      "Developed a proof-of-concept, drone-mounted dual-camera imaging system designed for Vegetation health monitoring and stress analysis caused by heat waves.",
    ],
    images: [
      { src: "/img/drone.png", alt: "Drone imaging system" },
      { src: "/img/3D.png", alt: "3D visualization" }
    ]
  },
  {
    title: "Where It All Started",
    subtitle: "A Childhood Dream of Space, Nurtured by Curiosity and Exploration",
    paragraphs: [
      "My fascination with space and nature began during my childhood, fueled by captivating documentaries that sparked my curiosity about the universe.",
      {
        text: "This passion deepened during my ninth grade when I joined {Aeross}, an aerospace club that became a defining part of my high school experience.",
        links: [{ text: "Aeross", href: "https://aeross.org" }]
      },
      "One of the most unforgettable milestones was representing **India** on an international stage at the Kennedy Space Center."
    ],
    images: [
      { src: "/img/SSDC1.jpg", alt: "SSDC competition" },
      { src: "/img/SSDC2.jpg", alt: "Kennedy Space Center" }
    ]
  }
];

