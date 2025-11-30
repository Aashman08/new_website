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
      <div className="flex flex-wrap justify-center gap-2.5 px-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative"
            onClick={() => setActiveItem(activeItem === item.title ? null : item.title)}
          >
            <AnimatePresence>
              {activeItem === item.title && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 -top-10 z-50",
                    "px-3 py-1.5 rounded-lg",
                    "bg-white/95 backdrop-blur-sm text-black",
                    "text-xs font-medium whitespace-nowrap",
                    "shadow-lg shadow-white/10",
                    "pointer-events-none"
                  )}
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className={cn(
                "h-12 w-12 rounded-xl flex items-center justify-center",
                "bg-white/[0.03] backdrop-blur-md",
                "border border-white/[0.08]",
                "transition-colors duration-150",
                activeItem === item.title && "bg-white/[0.08] border-white/20 shadow-lg shadow-white/5"
              )}
              style={{
                boxShadow: activeItem === item.title 
                  ? '0 0 15px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.1)' 
                  : 'inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
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
        "bg-white/[0.02] backdrop-blur-xl",
        "border border-white/[0.08]",
        className
      )}
      style={{
        boxShadow: '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
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
        style={{ 
          width, 
          height,
          background: 'linear-gradient(145deg, rgba(20,20,20,0.85) 0%, rgba(10,10,10,0.95) 100%)',
          border: hovered 
            ? '1px solid rgba(255,255,255,0.2)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: hovered 
            ? 'inset 1px 1px 0px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.08)' 
            : 'inset 1px 1px 0px rgba(255,255,255,0.05)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "aspect-square rounded-xl flex items-center justify-center relative",
          "backdrop-blur-md"
        )}
      >
        {/* Top edge highlight - glowing light effect */}
        <div 
          className="absolute top-0 left-2 right-2 h-[1px] rounded-full transition-all duration-150"
          style={{
            background: hovered 
              ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 70%, transparent 100%)'
              : 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.25) 70%, transparent 100%)',
            boxShadow: hovered 
              ? '0 0 8px rgba(255,255,255,0.3), 0 0 15px rgba(255,255,255,0.15)'
              : '0 0 4px rgba(255,255,255,0.1)',
          }}
        />
        {/* Left edge highlight */}
        <div 
          className="absolute top-2 bottom-1/2 left-0 w-[1px] rounded-full transition-all duration-150"
          style={{
            background: hovered 
              ? 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.2) 70%, transparent 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 70%, transparent 100%)',
            boxShadow: hovered ? '0 0 6px rgba(255,255,255,0.2)' : 'none',
          }}
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
              exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "px-3 py-1.5 whitespace-pre rounded-lg",
                "bg-white/95 backdrop-blur-sm text-black",
                "text-sm font-medium",
                "shadow-lg shadow-white/10",
                "absolute left-1/2 -translate-x-1/2 -top-12"
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
