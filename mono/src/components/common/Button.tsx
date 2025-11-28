import React from "react";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from "@/components/ui/button";

type CustomButtonProps = ShadcnButtonProps & {
  fit?: boolean;
  small?: boolean;
  primary?: boolean;
  big?: boolean;
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
    ? "h-8 px-4"
    : big
    ? "h-14 px-8 text-lg"
    : "h-12 px-6";
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

