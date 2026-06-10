import React from "react";
import { Sun, Moon } from "lucide-react";

function Navbar({
  cartCount,
  toggleCart,
  toggleMenu,
  showMenu,
  setDarkMode,
  darkMode,
  setCategory,
}) {
  
  const navigationLinks = [
    { label: "Home", targetId: null },
    { label: "Category", targetId: "category-section" },
    { label: "Featured Products", targetId: "featured-section" },
    { label: "Products", targetId: "catalog-section" },
    { label: "Blog", targetId: "blog-section" },
    { label: "Contact", targetId: "footer-section" },
  ];

  const handleLinkClick = (link) => {
    toggleMenu(); // Closes hamburger menu panel drawer state instantly

    // If it's the home link, smoothly roll user back to top apex header view
    if (!link.targetId) {
      setCategory("All");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Special fallback switch trigger: reset categories loop if view all products is selected
    if (link.label === "Products") {
      setCategory("All");
    }

    // Dynamic clean smooth scroll routine sequence execution anchor mapping hook
    setTimeout(() => {
      const targetElement = document.getElementById(link.targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

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
        {/* Left Side: Modern SVG Hamburger Menu Button */}
        <div className="w-1/4 flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="p-2.5 transition-colors focus:outline-none flex items-center justify-center cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-500"
            aria-label="Toggle Menu Panel"
          >
            <svg
              aria-hidden="true"
              className="pointer-events-none size-4.5 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
                  showMenu
                    ? "rotate-45 translate-x-0 translate-y-0"
                    : "translate-x-[7px] -translate-y-[5px]"
                }`}
                y="7"
                width="9"
                height="2"
                rx="1"
              ></rect>
              <rect
                className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
                  showMenu ? "opacity-0 scale-0" : "rotate-0 opacity-100"
                }`}
                y="7"
                width="16"
                height="2"
                rx="1"
              ></rect>
              <rect
                className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
                  showMenu
                    ? "-rotate-45 translate-x-0 translate-y-0"
                    : "translate-y-[5px]"
                }`}
                y="7"
                width="9"
                height="2"
                rx="1"
              ></rect>
            </svg>
          </button>

          {/* Theme Switcher Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-colors cursor-pointer ${
              darkMode
                ? "border-neutral-800 hover:bg-neutral-900 text-amber-400"
                : "border-neutral-200 hover:bg-neutral-50 text-neutral-600"
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun size={15} strokeWidth={1.5} />
            ) : (
              <Moon size={15} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Center: Premium Logo Typography */}
        <div className="flex-1 text-center">
          <h1
            onClick={() => {
              setCategory("All");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-light tracking-[0.3em] uppercase inline-block cursor-pointer"
          >
            SHOPIFY<span className="text-amber-700 font-bold">.</span>
          </h1>
        </div>

        {/* Right Side: Interactive Shopping Bag Trigger with Badge Count */}
        <div className="w-1/4 flex justify-end">
          <div
            onClick={toggleCart}
            className="relative cursor-pointer group p-2 inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500 group-hover:text-amber-800 transition-colors pointer-events-none"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="absolute -top-0.5 -right-0.5 bg-[#8a8a6a] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none select-none">
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* Slide-out Left Menu Navigation Panel Drawer */}
      {showMenu && (
        <div className="fixed inset-0 z-50 overflow-hidden mt-[113px]">
          <div
            className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity cursor-pointer"
            onClick={toggleMenu}
          />
          <div className="absolute inset-y-0 left-0 max-w-full flex">
            <div
              className={`w-80 shadow-2xl flex flex-col p-6 transition-transform border-r ${
                darkMode
                  ? "bg-neutral-950 border-neutral-800 text-white"
                  : "bg-white border-neutral-100 text-neutral-900"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-900">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Navigation
                </span>
              </div>
              <ul className="space-y-5 mt-6">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-xs font-light hover:text-amber-700 dark:hover:text-amber-400 transition-colors uppercase tracking-[0.2em] block w-full text-left cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
