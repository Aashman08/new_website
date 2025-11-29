"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import {
  handleBackToProjects,
  Section,
  SectionHeading,
  Paragraph,
  ImageFigure,
  ImagePair,
  Divider,
  Callout,
  Quote,
} from "@/features/projects";

// Main Page Component
export default function SatelliteFirePage() {
  // Project metadata
  const project = {
    title: "Satellite-Based Fire Detection",
    subtitle: "Visualizing fire, water, and land cover using Copernicus data from ESA",
    heroImage: "/img/project_images/fire.png",
    color: "from-rose-500 to-orange-600",
    date: "2023",
    tags: ["Remote Sensing", "Python", "GIS", "Satellite Imagery"],
  };

  // Spectral bands data
  const spectralBands = [
    ["B1", "60 m", "443 nm", "Ultra Blue (Coastal and Aerosol)"],
    ["B2", "10 m", "490 nm", "Blue"],
    ["B3", "10 m", "560 nm", "Green"],
    ["B4", "10 m", "665 nm", "Red"],
    ["B5", "20 m", "705 nm", "Visible and Near Infrared (VNIR)"],
    ["B6", "20 m", "740 nm", "Visible and Near Infrared (VNIR)"],
    ["B7", "20 m", "783 nm", "Visible and Near Infrared (VNIR)"],
    ["B8", "10 m", "842 nm", "Visible and Near Infrared (VNIR)"],
    ["B8a", "20 m", "865 nm", "Visible and Near Infrared (VNIR)"],
    ["B9", "60 m", "940 nm", "Short Wave Infrared (SWIR)"],
    ["B10", "60 m", "1375 nm", "Short Wave Infrared (SWIR)"],
    ["B11", "20 m", "1610 nm", "Short Wave Infrared (SWIR)"],
    ["B12", "20 m", "2190 nm", "Short Wave Infrared (SWIR)"],
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            onClick={handleBackToProjects}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
          >
            <IconArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay`} />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              style={{ textTransform: "none", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-neutral-300 max-w-2xl"
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mt-6 text-neutral-400"
            >
              <IconCalendar size={18} />
              <span>{project.date}</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Introduction */}
        <Section>
          <Paragraph>
            For this project, I utilized Sentinel-2 satellite data obtained from the open-source 
            Copernicus hub, courtesy of the European Space Agency. The Sentinel-2 satellite records 
            images across 12 unique spectral bands, each revealing distinct, hidden features at 
            varying wavelengths. This diverse range of data provides the flexibility to manipulate 
            these layers in order to extract relevant information.
          </Paragraph>
        </Section>

        {/* Spectral Bands Table */}
        <Section>
          <SectionHeading>Sentinel-2 Spectral Bands</SectionHeading>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-white font-semibold text-sm uppercase tracking-wider">Band</th>
                  <th className="text-left py-4 px-4 text-white font-semibold text-sm uppercase tracking-wider">Resolution</th>
                  <th className="text-left py-4 px-4 text-white font-semibold text-sm uppercase tracking-wider">Central Wavelength</th>
                  <th className="text-left py-4 px-4 text-white font-semibold text-sm uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody>
                {spectralBands.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-neutral-300 text-sm font-medium">{row[0]}</td>
                    <td className="py-3 px-4 text-neutral-300 text-sm">{row[1]}</td>
                    <td className="py-3 px-4 text-neutral-300 text-sm">{row[2]}</td>
                    <td className="py-3 px-4 text-neutral-300 text-sm">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Spectral Indexes */}
        <Section>
          <SectionHeading>Spectral Indexes Used</SectionHeading>
          <Paragraph>
            I make use of a number of indexes to extract information about land cover, water cover 
            and specially to detect fire. Below I list the indexes used and the corresponding bands:
          </Paragraph>
          <ul className="my-6 space-y-2 list-disc pl-10">
            <li className="text-neutral-300 text-lg">Normalized Differential Vegetation Index (NDVI): B4 and B8</li>
            <li className="text-neutral-300 text-lg">Normalized Difference Water Index (NDWI): B3 and B8</li>
            <li className="text-neutral-300 text-lg">Burn Area Index (BAI): B11 and B8</li>
          </ul>
          <Paragraph>
            I did try and use other indexes such as Normalized Difference Built-up index (NDBI) and 
            Normalized Difference Snow Index (NDSI) to experiment and see what I might get. There 
            appeared to be a few pixels which did highlight the fire but not significant enough.
          </Paragraph>
          <Callout title="Study Region" variant="info">
            Analysis conducted on Northern California, in the vicinity of Yosemite National Park and Lake Tahoe.
          </Callout>
        </Section>

        {/* RGB Baseline */}
        <Section>
          <SectionHeading>RGB Baseline Image</SectionHeading>
          <ImageFigure
            src="/img/project_images/Region.png"
            alt="RGB image of the study region"
            caption="RGB image of the study region (B4, B3, B2)"
          />
        </Section>

        <Divider />

        {/* NDVI Section */}
        <Section>
          <SectionHeading>Normalized Differential Vegetation Index (NDVI)</SectionHeading>
          <Paragraph>
            NDVI can be used to assess the dryness or health of the vegetation. Regions with 
            decreasing NDVI values over time might be drying out, making them more susceptible 
            to fires. In the below picture the dark orange regions represent lakes whereas the 
            central light orange region shows smoke. The false color composite image in Red and 
            NIR band shows the features as seen by naked eye.
          </Paragraph>
          <ImagePair
            first={{
              src: "/img/project_images/NDVI-r.png",
              alt: "NDVI visualization",
              caption: "NDVI (B8 - B4 / B8 + B4)",
            }}
            second={{
              src: "/img/project_images/NDVI-false.png",
              alt: "False color composite in Red band",
              caption: "As seen by naked eye in the Red band (B4)",
            }}
          />
        </Section>

        <Divider />

        {/* NDWI Section */}
        <Section>
          <SectionHeading>Normalized Differential Water Index (NDWI)</SectionHeading>
          <Paragraph>
            NDWI is useful for detecting and monitoring open water surfaces, such as lakes, rivers, 
            reservoirs, and flood extents. It exploits the fact that open water absorbs more visible 
            light and reflects more of the near-infrared spectrum. Green band and the Near-Infrared 
            bands are used in this Index. Positive values of NDWI typically indicate water, whereas 
            negative values point to non-water features.
          </Paragraph>
          <ImagePair
            first={{
              src: "/img/project_images/NDWI.png",
              alt: "NDWI visualization",
              caption: "NDWI (B3 - B8 / B3 + B8)",
            }}
            second={{
              src: "/img/project_images/NDWI-false.png",
              alt: "False color composite in Green band",
              caption: "As seen by naked eye in the Green band (B3)",
            }}
          />
        </Section>

        <Divider />

        {/* BAI Section */}
        <Section>
          <SectionHeading>Burn Area Index (BAI)</SectionHeading>
          <Paragraph>
            BAI is helpful in monitoring and quantifying the impact of wildfires on landscapes and 
            ecosystems. BAI provides information about the extent and severity of burn scars resulting 
            from fires. NIR is sensitive to healthy vegetation, while SWIR is sensitive to changes in 
            vegetation and soil conditions, especially due to the presence of water and moisture. 
            Higher Burn Area Index values correspond to more severe burn scars and a greater impact 
            of the fire on the vegetation and soil of the affected area. We clearly see that this 
            index allows us to pierce through the smoke and see what&apos;s actually happening.
          </Paragraph>
          <ImagePair
            first={{
              src: "/img/project_images/BAI.png",
              alt: "BAI visualization",
              caption: "BAI (B11 - B8 / B11 + B8)",
            }}
            second={{
              src: "/img/project_images/BAI-false.png",
              alt: "False color with NIR and SWIR",
              caption: "As seen by naked eye when Red and Green are replaced by NIR and SWIR",
            }}
          />
        </Section>

        <Divider />

        {/* Conclusion */}
        <Section>
          <SectionHeading>Conclusion</SectionHeading>
          <Quote>
            Higher BAI values correspond to more severe burn scars. This index allows us to see 
            through smoke and assess actual fire damage, providing valuable data for environmental 
            monitoring and emergency response.
          </Quote>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <Link
            href="/"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
          >
            <IconArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </footer>
    </div>
  );
}
