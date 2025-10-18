'use client';

export default function Newsletter() {
  return (
    <section className="bg-black py-16 px-4 sm:px-8 lg:px-12 rounded-2xl mx-4 sm:mx-8 lg:mx-12 my-12 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Join Our Newsletter
        </h2>
        <p className="text-gray-400 mb-8 sm:mb-10 text-base sm:text-lg">
          Subscribe to get the latest updates, exclusive deals, and special offers.
        </p>

        {/* Email form */}
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl flex-1 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors text-base sm:text-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
