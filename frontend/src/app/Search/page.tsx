"use client";
import { useState, forwardRef } from "react";
import { products } from "@/data/productData.json";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface SearchOverlayProps {
  onClose: () => void;
}

const SearchOverlay = forwardRef<HTMLDivElement, SearchOverlayProps>(
  ({ onClose }, ref) => {
    const [query, setQuery] = useState("");

    // Dynamic search results
    const results = query
      ? products.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];

    return (
      <div
        ref={ref}
        className="fixed top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-700 z-50 p-2 sm:p-4"
      >
        {/* Search Input */}
        <div className="relative max-w-3xl mx-auto flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-gray-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            autoFocus
          />
          <button
            onClick={onClose}
            className="absolute right-2 text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Search Results */}
        <AnimatePresence>
          {results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3"
            >
              {results.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-1 sm:p-2 rounded-lg text-center shadow-md"
                >
                    <Link href={`/product-card/${product.id}`} className="block" onClick={onClose}>
                    <div className="relative w-full h-16 sm:h-24 md:h-28">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                    </Link>
                  
                  <h3 className="mt-1 text-[10px] sm:text-xs md:text-sm font-medium">
                    {product.name}
                  </h3>
                  <p className="text-indigo-400 text-xs sm:text-sm md:text-base font-bold">
                    ${product.price}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

SearchOverlay.displayName = "SearchOverlay";
export default SearchOverlay;
