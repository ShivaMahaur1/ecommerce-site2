"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { products } from "@/data/productData.json";

import { useCart } from "@/app/context/CartContext";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Cards() {
  const { addToCart } = useCart();

  return (
    <div className="bg-black p-4 sm:p-8 lg:p-12">
      {/* Title */}
      <div className="text-center mb-10 sm:mb-20 relative flex flex-col items-center">
        <motion.h2
          className="text-xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Best Selling
        </motion.h2>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="origin-center mt-2 w-16 sm:w-24 h-1 bg-white rounded-full shadow-lg"
        />
      </div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {products.map((product) => (
          
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl flex flex-col relative overflow-visible transition duration-300 hover:-translate-y-3 hover:shadow-3xl group"
            >
              {/* Image */}
              <Link href={`/product-card/${product.id}`} key={product.id}>
              <div className="relative w-full flex items-center justify-center mt-0 sm:mt-0 lg:-mt-7">
                <div className="relative w-full h-32 sm:h-40 lg:h-60">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-2xl transition-transform duration-500 lg:group-hover:scale-110 lg:group-hover:-translate-y-3"
                  />
                </div>
                {product.sale && (
                  <span className="absolute left-2 top-2 sm:left-4 sm:top-4 bg-red-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold rounded z-20">
                    SALE
                  </span>
                )}
              </div>
              </Link>

              {/* Card Content */}
              <div className="p-3 sm:p-5 flex flex-col gap-2 sm:gap-3 flex-1 mt-2 sm:mt-4">
                <motion.h3
                  className="text-white font-bold text-[10px] sm:text-lg cursor-pointer text-center sm:text-left"
                  whileHover={{ scale: 1.05, color: "#1e3a8a" }}
                  transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.h3>

                <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-3">
                  <span className="text-white text-xs sm:text-xl font-extrabold">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-[9px] sm:text-base">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>

                {/* Hide colors on phone */}
                <span className="hidden sm:block text-gray-300 text-sm">
                  {product.colors} Color{product.colors > 1 ? "s" : ""}
                </span>

                {/* Hide button on phone */}
                <div className="relative mt-auto hidden sm:block">
                  <motion.div
                    className="absolute inset-0 rounded-md sm:rounded-lg bg-gradient-to-r from-blue-900 to-white blur-lg opacity-40"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.images[0], // ✅ required
                        quantity: 1, // ✅ start at 1
                      })
                    }
                    className="relative w-full bg-gradient-to-r from-blue-900 to-white text-black font-semibold py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-gray-100 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                  
                  
                </div>
              </div>

              {/* Floating shadow */}
              {/* Floating shadow */}
              <div className="absolute inset-x-0 top-16 sm:top-40 h-3 sm:h-8 bg-gradient-to-t from-black/60 to-transparent rounded-full blur-xl z-0"></div>
            </motion.div>
          
        ))}
      </motion.div>
    </div>
  );
}
