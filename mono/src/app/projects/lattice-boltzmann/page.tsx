"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCalendar, IconExternalLink } from "@tabler/icons-react";
import {
  handleBackToProjects,
  Section,
  SectionHeading,
  Paragraph,
  ImageFigure,
  Divider,
  Callout,
  Quote,
} from "@/features/projects";

// Video embed component for local video - wider aspect ratio for fluid simulation
const LocalVideoEmbed = ({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) => (
  <figure className="my-6 sm:my-8 md:my-10 max-w-4xl mx-auto">
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black" style={{ aspectRatio: '4/1' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
    {caption && (
      <figcaption className="text-center text-neutral-500 text-xs sm:text-sm mt-3 sm:mt-4 italic px-2">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Code block component
const CodeBlock = ({ code, caption }: { code: string; caption?: string }) => (
  <figure className="my-6 sm:my-8">
    <pre className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 overflow-x-auto">
      <code className="text-xs sm:text-sm text-neutral-300 font-mono whitespace-pre">
        {code}
      </code>
    </pre>
    {caption && (
      <figcaption className="text-center text-neutral-500 text-xs sm:text-sm mt-2 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default function LatticeBoltzmannPage() {
  const project = {
    title: "Lattice Boltzmann Fluid Simulation",
    subtitle: "Mesoscopic computational fluid dynamics simulation of flow past a cylinder",
    heroImage: "/img/fluid_output.png",
    color: "from-cyan-500 to-blue-600",
    date: "2024",
    tags: ["CFD", "Python", "NumPy", "Lattice Boltzmann", "Physics Simulation"],
    referenceLink: "https://medium.com/swlh/create-your-own-lattice-boltzmann-simulation-with-python-8759e8b53b1c"
  };

  // D2Q9 lattice visualization data
  const latticeWeights = `
    1/36  1/9  1/36       (-1,1)    (0,1)     (1,1)
     1/9  4/9  1/9   =    (-1,0)    (0,0)     (1,0)
    1/36  1/9  1/36       (-1,-1)   (0,-1)   (1,-1)
  `;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            onClick={handleBackToProjects}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
          >
            <IconArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="text-xs sm:text-sm font-medium">Back</span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay`} />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6"
            >
              {project.tags.slice(0, 5).map((tag, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight"
              style={{ textTransform: "none", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl"
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 sm:gap-6 mt-3 sm:mt-4 md:mt-6"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-400">
                <IconCalendar size={14} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm md:text-base">{project.date}</span>
              </div>
              <a
                href={project.referenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all text-xs sm:text-sm"
              >
                <IconExternalLink size={14} className="sm:w-[16px] sm:h-[16px]" />
                <span>Reference</span>
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-24">
        {/* Simulation Video */}
        <Section>
          <LocalVideoEmbed
            src="/video/output_fluid.mp4"
            caption="Real-time simulation showing von Kármán vortex street formation behind the cylinder"
          />
        </Section>

        {/* Introduction */}
        <Section>
          <SectionHeading>What is the Lattice Boltzmann Method?</SectionHeading>
          <Paragraph>
            The Lattice Boltzmann Method (LBM) is a <strong className="text-white">mesoscopic</strong> approach 
            to computational fluid dynamics that bridges the gap between molecular dynamics and traditional 
            continuum methods like Navier-Stokes solvers. Instead of solving differential equations directly, 
            LBM simulates the collective behavior of fictional particle distributions on a discrete lattice.
          </Paragraph>
          <Callout title="Why Mesoscopic?" variant="info">
            Mesoscopic means operating at a scale between microscopic (individual molecules) and macroscopic 
            (bulk fluid properties). LBM tracks probability distributions of particles rather than individual 
            molecules, making it computationally efficient while still capturing complex fluid behaviors.
          </Callout>
        </Section>

        <Divider />

        {/* D2Q9 Lattice Model */}
        <Section>
          <SectionHeading>The D2Q9 Lattice Model</SectionHeading>
          <Paragraph>
            This simulation uses the <strong className="text-white">D2Q9</strong> lattice model—2 dimensions 
            with 9 discrete velocity directions. At each lattice node, particles can move in 9 directions: 
            stationary (center), 4 cardinal directions, and 4 diagonal directions.
          </Paragraph>
          
          <CodeBlock
            code={latticeWeights}
            caption="D2Q9 lattice weights (left) and discrete velocities (right)"
          />

          <Paragraph>
            Each direction has an associated <strong className="text-white">weight</strong> that reflects 
            the probability of particles moving in that direction at equilibrium. The center (stationary) 
            has the highest weight (4/9), cardinal directions have 1/9, and diagonals have 1/36.
          </Paragraph>

          <div className="my-6 p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Discrete Velocities</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-neutral-400 mb-2">X-components (cxs):</p>
                <code className="text-cyan-400">[0, 0, 1, 1, 1, 0, -1, -1, -1]</code>
              </div>
              <div>
                <p className="text-neutral-400 mb-2">Y-components (cys):</p>
                <code className="text-cyan-400">[0, 1, 1, 0, -1, -1, -1, 0, 1]</code>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        {/* The Algorithm */}
        <Section>
          <SectionHeading>The Two-Step Algorithm</SectionHeading>
          <Paragraph>
            The LBM algorithm consists of two main steps that alternate each timestep: 
            <strong className="text-white"> Streaming</strong> and <strong className="text-white">Collision</strong>.
          </Paragraph>

          <div className="space-y-4 my-6">
            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">1. Streaming Step</h4>
              <Paragraph>
                Each particle distribution moves to its neighboring node in the direction of its velocity. 
                This is implemented efficiently using NumPy&apos;s <code className="text-cyan-400">np.roll()</code> function, 
                which shifts the entire array along an axis with periodic boundary conditions.
              </Paragraph>
              <CodeBlock
                code={`for i, cx, cy in zip(range(Nl), cxs, cys):
    F[:, :, i] = np.roll(F[:, :, i], cx, axis=1)  # shift in x
    F[:, :, i] = np.roll(F[:, :, i], cy, axis=0)  # shift in y`}
              />
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">2. Collision Step (BGK)</h4>
              <Paragraph>
                After streaming, particles at each node undergo collision, relaxing toward the local 
                equilibrium distribution. This uses the <strong className="text-white">BGK (Bhatnagar-Gross-Krook)</strong> approximation:
              </Paragraph>
              <div className="my-4 p-4 bg-black/30 rounded-lg text-center">
                <code className="text-lg text-white">F = F - (1/τ) × (F - F<sub>eq</sub>)</code>
              </div>
              <Paragraph>
                Where <strong className="text-cyan-400">τ (tau)</strong> is the relaxation time that controls 
                kinematic viscosity. Lower τ means faster relaxation and lower viscosity.
              </Paragraph>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Equilibrium Distribution */}
        <Section>
          <SectionHeading>Equilibrium Distribution</SectionHeading>
          <Paragraph>
            The equilibrium distribution F<sub>eq</sub> represents what the particle distribution would 
            look like if the fluid were in local thermodynamic equilibrium. It&apos;s computed from the 
            macroscopic variables (density ρ and velocity u):
          </Paragraph>
          
          <CodeBlock
            code={`Feq[:, :, i] = rho * w * (
    1 + 3*(cx*ux + cy*uy) 
      + 9*(cx*ux + cy*uy)**2 / 2 
      - 3*(ux**2 + uy**2) / 2
)`}
            caption="Equilibrium distribution formula for each velocity direction"
          />

          <Paragraph>
            This formula is derived from the Maxwell-Boltzmann distribution expanded to second order 
            in velocity. The terms represent: (1) rest contribution, (2) linear velocity dependence, 
            (3) quadratic velocity dependence, and (4) kinetic energy correction.
          </Paragraph>
        </Section>

        <Divider />

        {/* Boundary Conditions */}
        <Section>
          <SectionHeading>Boundary Conditions</SectionHeading>
          
          <div className="space-y-4 my-6">
            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">Cylinder (No-Slip Bounce-Back)</h4>
              <Paragraph>
                The cylinder is modeled using <strong className="text-white">bounce-back boundary conditions</strong>. 
                When a particle hits the cylinder, its velocity is reversed—simulating the no-slip 
                condition where fluid velocity equals zero at the wall.
              </Paragraph>
              <CodeBlock
                code={`# Reverse velocity directions at cylinder boundary
boundary = F[cylinder, :]
boundary = boundary[:, [0, 5, 6, 7, 8, 1, 2, 3, 4]]  # swap opposite directions
F[cylinder, :] = boundary
ux[cylinder] = 0  # zero velocity inside cylinder
uy[cylinder] = 0`}
              />
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">Open Boundaries</h4>
              <Paragraph>
                The left and right boundaries use <strong className="text-white">outflow conditions</strong> where 
                distributions at the boundary are copied from adjacent cells, allowing the flow 
                to exit smoothly without artificial reflections.
              </Paragraph>
              <CodeBlock
                code={`F[:, -1, [6, 7, 8]] = F[:, -2, [6, 7, 8]]  # right boundary
F[:,  0, [2, 3, 4]] = F[:,  1, [2, 3, 4]]  # left boundary`}
              />
            </div>
          </div>
        </Section>

        <Divider />

        {/* Von Kármán Vortices */}
        <Section>
          <SectionHeading>Von Kármán Vortex Street</SectionHeading>
          <Paragraph>
            The simulation beautifully captures the formation of a <strong className="text-white">von Kármán vortex street</strong>—a 
            repeating pattern of swirling vortices caused by unsteady separation of flow around the cylinder. 
            This phenomenon occurs at Reynolds numbers above ~90 and is commonly observed behind bridge pylons, 
            car antennas, and even islands in ocean currents.
          </Paragraph>
          
          <ImageFigure
            src="/img/fluid_output.png"
            alt="Von Kármán vortex street visualization"
            caption="Velocity magnitude showing alternating vortices shed from the cylinder"
            maxWidth="max-w-3xl"
          />

          <Quote borderColor="border-cyan-500/50">
            The alternating pattern of vortices creates periodic forces on the cylinder, which is why 
            understanding vortex shedding is crucial in engineering—from designing bridges to 
            preventing resonance in tall buildings.
          </Quote>
        </Section>

        <Divider />

        {/* Parameters */}
        <Section>
          <SectionHeading>Simulation Parameters</SectionHeading>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 my-6">
            {[
              { label: "Grid Size", value: "400 × 100", desc: "Nx × Ny" },
              { label: "Timesteps", value: "10,000", desc: "iterations" },
              { label: "Relaxation τ", value: "0.53", desc: "kinematic viscosity" },
              { label: "Cylinder Radius", value: "13 cells", desc: "at Nx/4, Ny/2" },
              { label: "Initial Flow", value: "Rightward", desc: "F[:,:,3] = 2.3" },
              { label: "Lattice Model", value: "D2Q9", desc: "9 velocities" },
            ].map((param, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]"
              >
                <p className="text-neutral-400 text-xs mb-1">{param.label}</p>
                <p className="text-white font-semibold text-lg">{param.value}</p>
                <p className="text-neutral-500 text-xs">{param.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Conclusion */}
        <Section>
          <SectionHeading>Applications & Impact</SectionHeading>
          <Paragraph>
            The Lattice Boltzmann Method has become a powerful tool in computational physics and engineering, 
            with applications ranging from aerodynamics and biomedical flows to porous media and multiphase 
            systems. Its natural parallelism makes it ideal for GPU acceleration.
          </Paragraph>
          <Quote borderColor="border-cyan-500/50">
            This simulation demonstrates how elegant mathematical models can capture the beautiful 
            complexity of fluid dynamics—transforming abstract physics into visual insight that 
            bridges the gap between theory and real-world phenomena.
          </Quote>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <Link
            href="/"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:bg-neutral-200 transition-colors"
          >
            <IconArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            Back to Projects
          </Link>
        </div>
      </footer>
    </div>
  );
}

