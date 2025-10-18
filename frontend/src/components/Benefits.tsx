'use client';
import { FaShippingFast, FaUndo, FaLock, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: FaShippingFast,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders with no minimum purchase.',
    color: 'text-indigo-400',
  },
  {
    icon: FaUndo,
    title: 'Easy Returns',
    description: 'Hassle-free returns within 30 days for your convenience.',
    color: 'text-sky-400',
  },
  {
    icon: FaLock,
    title: 'Secure Payment',
    description: 'All transactions are 100% secure and encrypted.',
    color: 'text-teal-400',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Our support team is always ready to help you anytime.',
    color: 'text-pink-400',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Benefits() {
  return (
    <section className="bg-black py-8 sm:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hide title & subtitle on phone */}
        <h2 className="hidden sm:block text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
          Why Choose Us
        </h2>
        <p className="hidden sm:block text-gray-200 mb-10 sm:mb-12 text-sm sm:text-base max-w-xl mx-auto">
          We provide top-quality products with excellent service and support.  
          Discover why thousands of customers trust us.
        </p>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className="bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Smaller icon on mobile */}
                <Icon
                  className={`${benefit.color} text-xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110`}
                />
                {/* Smaller title on mobile */}
                <h3 className="text-white font-medium text-xs sm:text-lg mb-0 sm:mb-2 group-hover:text-sky-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                {/* Hide description on phone */}
                <p className="hidden sm:block text-gray-200 text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
