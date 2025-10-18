'use client';

export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-4 sm:px-8 lg:px-12 rounded-2xl mx-4 sm:mx-8 lg:mx-12 my-12 relative overflow-hidden">
      
      {/* Decorative floating shapes (optional) */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Limited Time Offer!
        </h2>
        <p className="text-gray-300 mb-8 sm:mb-10 text-base sm:text-lg max-w-2xl mx-auto">
          Get 20% off on all premium products. Hurry, the offer ends soon!
        </p>
        <button className="bg-pink-500 text-black font-bold py-3 px-8 rounded-xl hover:bg-pink-600 transition-colors text-base sm:text-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}
