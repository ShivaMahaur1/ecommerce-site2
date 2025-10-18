"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-4 sm:px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            About Our Store
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            We provide premium products with a focus on quality, style, and customer satisfaction. Our mission is to make shopping an experience you’ll love.
          </p>
          <Link href={"/"} >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full shadow-lg"
          >
            Shop Now
          </motion.button>
          </Link>
          
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 sm:h-80 lg:h-96"
        >
          <Image
            src="/hero.png"
            alt="About Hero"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-6 rounded-2xl text-center shadow-md"
        >
          <div className="text-pink-400 text-3xl mb-4">🚚</div>
          <h3 className="font-bold mb-2 text-lg">Fast Shipping</h3>
          <p className="text-gray-400 text-sm">
            Quick and reliable shipping on all orders.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900 p-6 rounded-2xl text-center shadow-md"
        >
          <div className="text-pink-400 text-3xl mb-4">🛡️</div>
          <h3 className="font-bold mb-2 text-lg">Secure Payments</h3>
          <p className="text-gray-400 text-sm">
            Safe and secure checkout every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900 p-6 rounded-2xl text-center shadow-md"
        >
          <div className="text-pink-400 text-3xl mb-4">⭐</div>
          <h3 className="font-bold mb-2 text-lg">Quality Products</h3>
          <p className="text-gray-400 text-sm">
            We only offer products that meet our high standards.
          </p>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Our Story</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Founded in 2023, our store began with the mission to bring high-quality, stylish products to every customer. We believe in transparency, reliability, and putting the customer first in everything we do.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            From clothing to electronics, every item is carefully curated to ensure premium quality and satisfaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 sm:h-80 lg:h-96"
        >
          <Image
  src="/ram.webp"
  alt="Our Story"
  width={800}  // set your desired width
  height={600} // set your desired height
  className="rounded-2xl"
/>

        </motion.div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Shree Shubhash Chandra Boss", role: "CEO", image: "/boss.jpeg" },
            { name: "Shree Bhagat Singh", role: "Head of Design", image: "/singh.jpeg" },
            { name:"Shree Veer Savarkar", role: "Marketing Lead", image: "/savarkar.jpeg" },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-900 p-6 rounded-2xl text-center shadow-md"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
