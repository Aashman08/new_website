"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className={cn("block md:hidden w-full", className)}>
      <div className="flex flex-wrap justify-center gap-2 px-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative"
            onClick={() => setActiveItem(activeItem === item.title ? null : item.title)}
          >
            <AnimatePresence>
              {activeItem === item.title && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 -top-9 z-50",
                    "px-2.5 py-1 rounded-lg",
                    "bg-white text-black",
                    "text-xs font-medium whitespace-nowrap",
                    "pointer-events-none"
                  )}
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className={cn(
                "h-11 w-11 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center",
                activeItem === item.title && "bg-neutral-700 border-neutral-500"
              )}
            >
              <div className="h-5 w-5">{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-20 gap-3 items-end rounded-2xl px-4 pb-4",
        "bg-neutral-900/90 backdrop-blur-sm",
        "border border-neutral-800",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [52, 80, 52]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [52, 80, 52]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [26, 42, 26]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [26, 42, 26]);

  // Faster, snappier spring config
  const springConfig = { mass: 0.1, stiffness: 300, damping: 15 };
  
  const width = useSpring(widthTransform, springConfig);
  const height = useSpring(heightTransform, springConfig);
  const widthIcon = useSpring(widthTransformIcon, springConfig);
  const heightIcon = useSpring(heightTransformIcon, springConfig);

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "aspect-square rounded-xl flex items-center justify-center relative",
          "bg-neutral-800",
          "border border-neutral-700",
          "hover:bg-neutral-700 hover:border-neutral-500",
          "transition-colors duration-150"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 4, x: "-50%" }}
              transition={{ duration: 0.15 }}
              className={cn(
                "px-3 py-1.5 whitespace-pre rounded-lg",
                "bg-white text-black",
                "text-sm font-medium",
                "absolute left-1/2 -translate-x-1/2 -top-11"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
