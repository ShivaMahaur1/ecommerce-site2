"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/data/productData.json";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

import { useCart } from "@/app/context/CartContext";

import Link from 'next/link';

export default function Page({ params }: { params: { id: string } }) {

  const { addToCart } = useCart();

  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  const [selectedImage, setSelectedImage] = useState<string>(
    (product.images && product.images[0]) || product.images[0]
  );

  const [quantity, setQuantity] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Scroll listener for product rotation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotateX = scrollY * 0.05;
  const rotateY = scrollY * 0.03;

  // Generate particle positions
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 + "%",
    y: Math.random() * 100 + "%",
    size: Math.random() * 60 + 40, // bigger glowing orbs
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200 overflow-hidden px-4 sm:px-6 py-8 sm:py-12">
      {/* Background Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: p.size,
            height: p.size,
            top: p.y,
            left: p.x,
            background: Math.random() > 0.5 ? "#ec4899" : "#3b82f6", // pink or blue
          }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{
            repeat: Infinity,
            duration: 6 + p.delay,
            delay: p.delay,
          }}
        />
      ))}

      {/* Product Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 relative z-10">
        {/* LEFT SECTION */}
        <div>
          {/* Main Product Image */}
          <motion.div
            className="relative w-full h-[400px] sm:h-[450px] bg-gray-900/80 rounded-2xl border border-gray-800 shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden cursor-grab"
            style={{ rotateX, rotateY }}
          >
            <Image
              src={selectedImage} // always a string
              alt={product.name}
              fill
              className="object-contain"
            />

            {product.sale && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 left-4 bg-red-600/90 px-3 py-1 font-bold text-white rounded-full shadow-lg shadow-red-900/50"
              >
                SALE
              </motion.span>
            )}
          </motion.div>

          {/* Thumbnails */}
          <div className="flex gap-3 sm:gap-4 mt-6 overflow-x-auto">
            {product.images.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-24 sm:w-28 sm:h-28 bg-gray-900/70 rounded-xl border ${
                  selectedImage === img ? "border-pink-500" : "border-gray-800"
                } flex items-center justify-center cursor-pointer transition`}
              >
                <Image
                  src={img} // single string
                  alt={`${product.name} ${idx + 1}`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          className="flex flex-col gap-6 bg-gray-900/80 backdrop-blur-md rounded-3xl border border-gray-800 shadow-[0_0_30px_rgba(255,255,255,0.05)] p-6 sm:p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category */}
          <span className="bg-gray-800/70 text-gray-200 border border-gray-700 px-3 py-1 text-sm font-medium rounded-md w-fit shadow-inner shadow-black/40">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center gap-3 sm:gap-4">
            <p className="text-pink-400 text-2xl sm:text-3xl font-bold">
              ${product.price}
            </p>
            {product.oldPrice && (
              <p className="line-through text-gray-400">${product.oldPrice}</p>
            )}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            
          </motion.p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity</span>
            <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={decrement}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700"
              >
                -
              </button>
              <span className="px-5">{quantity}</span>
              <button
                onClick={increment}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.images[0], // ✅ required
                        quantity: 1, // ✅ start at 1
                      })
                    }
              className="flex-1 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-medium py-4 rounded-full shadow-lg shadow-pink-900/40 transition"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium py-4 rounded-full shadow-lg shadow-emerald-900/40 transition"
            >
              Buy Now
            </motion.button>
          </div>

          {/* Benefits */}
          <div className="flex flex-col gap-4 mt-6 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-pink-400">🚚</span>
              <div>
                <p className="font-medium text-gray-200">Free Shipping</p>
                <p>Free shipping on orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-400">🛡️</span>
              <div>
                <p className="font-medium text-gray-200">2 Year Warranty</p>
                <p>Full manufacturer warranty included</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-400">↩️</span>
              <div>
                <p className="font-medium text-gray-200">30-Day Returns</p>
                <p>Easy returns within 30 days</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Suggested Products */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 relative z-10">
  <h2 className="text-xl sm:text-2xl font-bold mb-6">
    You might also like
  </h2>

  {/* Horizontal scroll on mobile */}
  <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-6">
    {products
      .filter((p) => p.id !== product.id)
      .map((p) => (
        <Link href={`/product-card/${p.id}`} key={p.id} className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-[100%] sm:w-48 md:w-52 bg-gray-900/70 p-3 sm:p-4 rounded-xl border border-gray-800 shadow-md flex flex-col items-center transition"
          >
            <div className="relative w-full h-24 sm:h-32 md:h-36">
              <Image
                src={p.images[0]}
                alt={p.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="font-semibold mt-2 text-center text-sm sm:text-base">
              {p.name}
            </h3>
            <p className="text-pink-400 font-bold text-sm sm:text-base">
              ${p.price}
            </p>
          </motion.div>
        </Link>
      ))}
  </div>
</div>

    </div>
  );
}
