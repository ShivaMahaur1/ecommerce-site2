"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiSearch,
} from "react-icons/fi";
import { useCart } from "@/app/context/CartContext";
import SearchOverlay from "@/app/Search/page"; // ✅ use component

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const overlayRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)}>
                <FiMenu size={26} />
              </button>
            </div>
            <div className="text-2xl font-bold text-cyan-400 tracking-wide">
              Sparkle
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
            <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6 relative">
            <button onClick={() => setSearchOpen((prev) => !prev)}>
              <FiSearch className="cursor-pointer hover:text-cyan-400" size={20} />
            </button>

            <FiUser className="cursor-pointer hover:text-cyan-400" size={20} />
            <Link href="/addToCart" className="relative">
              <FiShoppingCart className="cursor-pointer hover:text-cyan-400" size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-zinc-900 shadow-lg transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <FiX size={26} />
              </button>
            </div>
            <ul className="flex flex-col items-start space-y-6 px-6 mt-6 text-lg">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
              <li>
                <Link href="/cart" onClick={() => setIsOpen(false)}>
                  Cart {totalItems > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Search Overlay */}
      {searchOpen && <SearchOverlay ref={overlayRef} onClose={() => setSearchOpen(false)} />}
    </nav>
  );
};

export default Navbar;
