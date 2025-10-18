// app/components/Category.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import {categories} from "@/data/productData.json"



// Animation variants for stagger
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Category() {
  return (
    <div className="w-full lg:max-w-[1600px] mx-auto">
      
      {/* Main Title */}
      <div className="w-full bg-black text-white text-3xl lg:text-4xl font-bold py-6 px-4 mb-6 flex flex-col items-center relative">
        <motion.h2
          className="text-xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05, }}
          transition={{ duration: 0.3 }}
        >
          Cetegory
        </motion.h2>

        {/* Animated underline */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="origin-center mt-2 w-24 h-1 bg-white rounded-full shadow-lg"
        />
      </div>

      {/* Category Grid with staggered animation */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[300px] grid-flow-dense gap-4 px-4 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {categories.map((cat, i) => (
  <motion.div
    key={i}
    variants={cardVariants}
    whileHover={{ scale: 1.05 }}
    className={`relative rounded-2xl shadow-md overflow-hidden cursor-pointer ${cat.style}`}
  >
    <Link href={`/CategoryPage/${cat.name.toLowerCase()} `}>
      <Image
        src={cat.bg}
        alt={cat.name}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors"></div>

      <h2 className="absolute bottom-4 left-4 text-base sm:text-lg lg:text-2xl font-bold text-white z-10">
        {cat.name}
      </h2>
    </Link>
  </motion.div>
))}


      </motion.div>
    </div>
  );
}
