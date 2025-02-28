import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Present",
      subtitle: "Bridging Space and Technology for a Smarter Planet",
      content: (
        <div>
          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify"> 
          {/* text-md text-justify font-normal leading-loose */}
          Currently, I am working as a research assistant at the {" "}
            <i>
              <b>
                <a href="https://gatkine.astro.ucla.edu/research.html" className="underline" target="_blank" rel="noopener noreferrer">
                Atrophotonics Technology Lab 
                </a>
              </b>
            </i>
            , collaborating with Spark Ventures to develop software for {" "}
            <i>
              <b>
                <a href="https://gatkine.astro.ucla.edu/research.html#AWG" className="underline" target="_blank" rel="noopener noreferrer">
                on-chip integrated astrophotonic spectrographs 
                </a>
              </b>
            </i>
            {"."} 
          </p>

          <p className=" w-full text-neutral-300 dark:text-neutral-300 text-justify">
            Our goal is to enable trace gas detection using advanced test beds such as drones and satellites, contributing to advancements in environmental monitoring and space-based instrumentation.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/cube.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/tanager_1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      subtitle: "Turning Ideas into Impact: Building AI for SMBs",
      content: (
        <div>
          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
          This summer, I ventured into the world of entrepreneurship, building {" "}
            <i>
              <b>
                <a href="https://useactuals.com" className="underline" target="_blank" rel="noopener noreferrer">
                  Actuals
                </a>
              </b>
            </i>
            {""}, an AI startup aimed at streamlining the acquisition process for Small and Medium Businesses (SMBs) across the United States.
            
            </p>

            <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
              With initial backing from {" "}
            <i>
              <b>
                <a href="https://www.f7ventures.com" className="underline" target="_blank" rel="noopener noreferrer">
                  F7 Ventures
                </a>
              </b>
            </i>
            {""}, we refined our product to enhance efficiency in financial analysis and due diligence.
          </p>

          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
          Throughout this process, I developed a strong proficiency in Retrieval-Augmented Generation (RAG) systems and AWS.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/actuals.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/chart.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      subtitle: "Harnessing AI to Redefine Business Solutions",
      content: (
        <div>
          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
          My first formal internship experience was at Deloitte, where I joined the newly established {""}
            <i>
              <b>
                <a href="https://www.deloitte.com/global/en/services/consulting/services/strategy-analytics-manda.html" className="underline" target="_blank" rel="noopener noreferrer">
                Semantics, Analytics, and Mergers & Acquisitions Gen AI 
                </a>
              </b>
            </i>
            {""} Team. 
          </p>

          <p>
          During my time there, I successfully completed two projects, each focused on distinct use cases, gaining hands-on experience in applying generative AI to real-world business problems.
          </p>

          {/* <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-200 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div> */}

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/pandas.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/code.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      subtitle: "Exploring Earth from Above: Innovation Through Aerial Imaging",
      content: (
        <div>
          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
          Visited Iowa as an Undergraduate Researcher selected for the {""}
          <i>
              <b>
                <a href="https://edgeofspace.sites.uiowa.edu" className="underline" target="_blank" rel="noopener noreferrer">
                Edge of Space Academy: Spaceflight Instrumentation and Mission Design
                </a>
              </b>
            </i>
          {""} program. 
          </p>

          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
            Developed a proof-of-concept, drone-mounted dual-camera system designed for accessible NDVI and SFM visualization. This system was designed to provide accessible and cost-effective methods for monitoring vegetation stress caused by heat waves. 
          </p>

          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
          My first time officially working with spectral data.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/drone.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/3D.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Where It All Started",
      subtitle: "A Childhood Dream of Space, Nurtured by Curiosity and Exploration",
      content: (
        <div>
          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
          My fascination with space and nature began during my childhood, fueled by captivating documentaries that sparked my curiosity about the universe.
          </p>

          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
          This passion deepened during my ninth grade when I joined{" "}
            <i>
              <b>
                <a href="https://aeross.org" className="underline" target="_blank" rel="noopener noreferrer">
                  Aeross
                </a>
              </b>
            </i>
            , an aerospace club that became a defining part of my high school experience. Through Aeross, I not only discovered my aspiration to become a planetary scientist but also forged lifelong friendships. 
          </p>

          <p className="w-full text-neutral-300 dark:text-neutral-300 text-justify">
          One of the most unforgettable milestones was representing <i><b> India </b></i> on an international stage at the Kennedy Space Center. This experience solidified my desire to explore the unknown, setting me on a path that continues to shape both my academic pursuits and career aspirations.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/SSDC1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/SSDC2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
