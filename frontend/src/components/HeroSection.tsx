"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import heroSectionData from '@/data/productData.json';
import { FlipWords } from "./ui/flip-words";
import Button from "./Button";

export function HeroSection() {
  // Extract images and titles
  const slides = heroSectionData.heroSection;
  const images = slides.map(slide => slide.image);

  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Handler for slide change
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <ImagesSlider
      className="h-[40rem]"
      images={images}
      onSlideChange={handleSlideChange} // <-- pass the handler
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          
         <FlipWords words={slides.map(slide => slide.title)} index={currentIndex} />
        </motion.p>
        <Button label="Shop Now"/>
      </motion.div>
    </ImagesSlider>
  );
}