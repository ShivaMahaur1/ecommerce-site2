"use client";

import React from "react";
import { useParams } from "next/navigation";
import data from "@/data/productData.json";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardItem {
  id: number;
  title: string;
  image: string;
}

interface SubCategory {
  id: number;
  name: string;
  cards: CardItem[];
}

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

interface DataStructure {
  categories: Category[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const CategoryPage: React.FC = () => {
  const params = useParams();
  const { name } = params;

  const categories: Category[] = (data as DataStructure).categories;
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === name?.toLowerCase()
  );

  if (!category)
    return (
      <p className="text-center text-red-500 font-semibold mt-20">
        Category not found!
      </p>
    );

  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center"
      >
        {category.name}
      </motion.h1>

      {/* Subcategories */}
      {category.subCategories.map((sub, subIndex) => (
        <section
          key={`${category.id}-${sub.id}-${subIndex}`}
          className="space-y-8"
        >
          {/* Subcategory Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {sub.name}
            </h2>
          </div>

          {/* Cards */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-2">
            {sub.cards?.map((card, cardIndex) => (
              <Link
                key={`${sub.id}-${card?.id}-${cardIndex}`}
                href={`/product-card/${card.id}`}
                className="block"
              >
                <motion.div
                  custom={cardIndex}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="min-w-[240px] md:min-w-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full h-44">
                    <img
                      src={card?.image}
                      alt={card?.title}
                      className="object-cover w-full h-44 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {card?.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Explore more details →
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CategoryPage;
