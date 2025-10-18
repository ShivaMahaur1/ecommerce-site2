"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

type ButtonProps = {
  label: string; // 👈 The word/text to replace "Aceternity UI"
};

const Button = ({ label }: ButtonProps) => {
  return (
    <div className="m-7 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>{label}</span>
      </HoverBorderGradient>
    </div>
  );
};

export default Button;
