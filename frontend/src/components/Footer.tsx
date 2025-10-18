'use client';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4 sm:px-8 lg:px-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-400">
        {/* Brand / Logo */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-2xl font-bold">YourBrand</h3>
          <p className="text-gray-500 text-sm">
            Premium products and top-notch service delivered to your doorstep.
          </p>
          <div className="flex gap-4 mt-2">
            <FaFacebook className="hover:text-pink-500 transition-colors cursor-pointer" />
            <FaXTwitter className="hover:text-pink-500 transition-colors cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 transition-colors cursor-pointer" />
            <FaLinkedinIn className="hover:text-pink-500 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <a href="#" className="hover:text-pink-500 transition-colors">About Us</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Contact</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Careers</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Blog</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <a href="#" className="hover:text-pink-500 transition-colors">FAQ</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Shipping</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Returns</a>
          <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
        </div>

        {/* Payment methods */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Payment Methods</h4>
          <div className="flex gap-4 mt-2">
            <img src="/visa.webp" alt="Visa" className="h-6" />
            <img src="/mastercard.jpeg" alt="Mastercard" className="h-6" />
            <img src="/paypal.jpeg" alt="PayPal" className="h-6" />
            <img src="/amex.png" alt="Amex" className="h-6" />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
