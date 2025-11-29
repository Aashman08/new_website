"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 5%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black dark:bg-neutral-950 font-sans px-2 sm:px-4 md:px-10"
      ref={containerRef}
    >

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-14 sm:pt-16 md:pt-40 md:gap-10"
          >

            <div className="sticky flex flex-col z-40 items-start top-20 sm:top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 sm:h-10 sm:w-10 absolute left-1 sm:left-2 md:left-3 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 
              className="hidden md:block text-lg md:pl-20 md:text-4xl mb-4 text-white dark:text-white max-w-5xl">
                {item.title}
              </h3>
              <p className="hidden md:block md:pl-20 text-neutral-300 dark:text-neutral-300 mt-1 max-w-xs">
                {item.subtitle}
              </p>
            </div>
 
            <div className="relative pl-12 sm:pl-16 md:pl-4 pr-2 sm:pr-4 w-full">
              <h3 
              className="md:hidden block text-base sm:text-lg mb-1 sm:mb-2 text-left font-bold text-neutral-400 dark:text-neutral-400">
                {item.title}
              </h3>
              <p className="md:hidden block text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 mb-6">
                {item.subtitle}
              </p>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-5 sm:left-6 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[-60%] via-purple-600 to-blue-600 to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"  
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-600 via-blue-900 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
