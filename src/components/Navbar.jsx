import React from "react";
import { ShoppingBag, Sun, Moon } from "lucide-react";

function Navbar({ cartCount, toggleCart, setDarkMode, darkMode }) {
  return (
    <div
      className={`w-full border-b sticky top-0 z-50 transition-colors duration-200 ${
        darkMode
          ? "bg-neutral-950 border-neutral-800 text-white"
          : "bg-white border-neutral-100 text-neutral-900"
      }`}
    >
      {/* Mini Promotion Banner */}
      <div
        className={`text-center py-2 text-[10px] uppercase tracking-[0.2em] font-medium border-b ${
          darkMode
            ? "bg-neutral-900 border-neutral-800 text-neutral-400"
            : "bg-neutral-50 border-neutral-100 text-neutral-500"
        }`}
      >
        Free shipping on orders over $75
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Side: Dark Mode Utility */}
        <div className="w-1/4 flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-colors ${
              darkMode
                ? "border-neutral-800 hover:bg-neutral-900 text-amber-400"
                : "border-neutral-200 hover:bg-neutral-50 text-neutral-600"
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun size={16} strokeWidth={1.5} />
            ) : (
              <Moon size={16} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Center: Premium Logo Typography */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-light tracking-[0.3em] uppercase inline-block cursor-pointer">
            SHOPIFY<span className="text-amber-700 font-bold">.</span>
          </h1>
        </div>

        {/* Right Side: Interactive Shopping Bag Trigger */}
        <div className="w-1/4 flex items-center justify-end">
          <div
            onClick={toggleCart}
            className="flex items-center gap-2.5 cursor-pointer group relative p-2"
          >
            <ShoppingBag
              size={20}
              strokeWidth={1.5}
              className="text-neutral-500 group-hover:text-amber-800 transition-colors"
            />

            <p className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full text-[10px] font-bold w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-105">
              {cartCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
