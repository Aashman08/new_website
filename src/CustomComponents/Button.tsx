import React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional class merging
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from "@/components/ui/button";

type CustomButtonProps = ShadcnButtonProps & {
  fit?: boolean;
  small?: boolean;
  primary?: boolean;
  big?: boolean; // Add a `big` prop for larger size buttons
};

export const Button: React.FC<CustomButtonProps> = ({
  className,
  fit,
  small,
  primary,
  big,
  ...props
}) => {
  const baseStyles = `
    appearance-none 
    transition-all 
    bg-transparent 
    rounded 
    shadow-md 
    text-center 
    cursor-pointer 
    text-sm
    font-light 
    tracking-wide 
    text-white 
    border 
    border-white 
    uppercase
  `;

  const fitStyles = fit ? "w-full" : "inline-block";
  const sizeStyles = small
    ? "h-8 px-4" // Small size
    : big
    ? "h-14 px-8 text-lg" // Big size with larger height, padding, and font size
    : "h-12 px-6"; // Default size
  const colorStyles = primary
    ? "bg-white text-[#1b1f22] font-semibold hover:bg-opacity-90"
    : "hover:bg-white hover:text-black";

  return (
    <ShadcnButton
      className={cn(baseStyles, fitStyles, sizeStyles, colorStyles, className)}
      {...props}
    />
  );
};


