import { WavyBackground } from '@/components/ui/wavy-background'
import React, { useState } from 'react'


const page = () => {

 

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-0">

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8">
  {/* Left Section */}
  <div>
    <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
    <p className="text-gray-500 mb-6 max-w-md">
      Email, call, or complete the form to learn how we can help with your needs.
    </p>

    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg flex items-center gap-2">💬 Customer Support</h3>
        <p className="text-gray-500 text-sm">
          Our support team is available 24/7 to assist you.
        </p>
      </div>
      <div className="border-t border-gray-800 pt-6">
        <h3 className="font-semibold text-lg flex items-center gap-2">✨ Feedback</h3>
        <p className="text-gray-500 text-sm">
          We’d love your feedback to improve our service.
        </p>
      </div>
    </div>
  </div>

  {/* Right Section - Form */}
  <div className="bg-gray-900/80 backdrop-blur p-8 rounded-2xl shadow-lg ring-1 ring-white/10">
    <h2 className="text-2xl font-semibold mb-4 tracking-tight">Get in Touch</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        className="w-full p-3 rounded-lg bg-gray-800/70 placeholder:text-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
      <input
        type="email"
        placeholder="Your email"
        className="w-full p-3 rounded-lg bg-gray-800/70 placeholder:text-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
      <textarea
        placeholder="Your message"
        rows={4}
        className="w-full p-3 rounded-lg bg-gray-800/70 placeholder:text-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition p-3 rounded-lg font-semibold shadow-lg"
      >
        Submit
      </button>
    </form>
  </div>
</div>


    </WavyBackground>
      
    
  )
}

export default page