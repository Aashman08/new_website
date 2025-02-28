"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { SkillCard } from "./skills"; // Adjust the path as needed

export const ParallaxSkills = ({
  skills,
  className,
}: {
  skills: { title: string; icon: React.ReactNode; gradient: string; href?: string, style: React.CSSProperties; }[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  // Define different vertical translations for each column
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Divide skills into three roughly equal parts
  const third = Math.ceil(skills.length / 3);

  const firstPart = skills.slice(0, third);
  const secondPart = skills.slice(third, 2 * third);
  const thirdPart = skills.slice(2 * third);

  return (
    <div
      className={cn("h-[70rem] overflow-y-auto w-full mt-10 mb-20", className)}
      // className={cn("w-full mt-20 mb-20", className)}
      // className={cn("w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-40 px-10">
        {/* First Column */}
        <div className="grid gap-10">
          {firstPart.map((skill, idx) => (
            <motion.div 
                key={"grid-1" + idx}
                style={{ y: translateFirst }}
            >
              
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                gradient={skill.gradient}
                href={skill.href}
                borderColor={skill.style?.borderColor}
                brightness = {skill.style?.filter}
              />
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-10">
          {secondPart.map((skill, idx) => (
            <motion.div 
              key={"grid-2" + idx}
              style={{ y: translateSecond }}
            >
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                gradient={skill.gradient}
                href={skill.href}
                borderColor={skill.style?.borderColor}
                brightness = {skill.style?.filter}
              />
            </motion.div>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-10">
          {thirdPart.map((skill, idx) => (
            <motion.div 
              key={"grid-3" + idx}
              style={{ y: translateThird }}>
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                gradient={skill.gradient}
                href={skill.href}
                borderColor={skill.style?.borderColor}
                brightness = {skill.style?.filter}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
