"use client";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function page() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            Shopping Cart{" "}
            {cart.length > 0 && (
              <span className="text-gray-400 font-normal text-lg">
                ({cart.length} {cart.length === 1 ? "item" : "items"})
              </span>
            )}
          </h1>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition"
          >
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>

        {/* Empty State */}
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-4">Your cart is empty.</p>
            <Link
              href="/"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl text-white font-medium shadow-lg transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row items-center bg-gray-800 rounded-xl shadow p-3 hover:shadow-lg transition text-sm"
                >
                  {/* Image + Name */}
                  <Link
                    href={`/product-card/${item.id}`}
                    className="flex items-center flex-1 gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-base font-semibold">{item.name}</h2>
                      <p className="text-gray-400 text-sm">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>

                  {/* Quantity Controls */}
                  <div className="flex items-center ml-3 space-x-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="p-1 bg-gray-700 rounded hover:bg-gray-600 active:scale-95 transition"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-1 font-medium text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 bg-gray-700 rounded hover:bg-gray-600 active:scale-95 transition"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right ml-3">
                    <p className="font-semibold text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-gray-800 rounded-2xl shadow p-6 md:sticky md:top-20">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr className="border-gray-700 my-3" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl shadow-lg transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
