import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * SectionHeader
 * Reused by: ShopByCategory, FeaturedProducts, LatestBlog
 *
 * Props:
 *   title       — string, section heading text
 *   darkMode    — boolean
 *   onPrev      — function, fires on left arrow click
 *   onNext      — function, fires on right arrow click
 *   canPrev     — boolean, enables/disables left arrow
 *   canNext     — boolean, enables/disables right arrow
 */
function SectionHeader({ title, darkMode, onPrev, onNext, canPrev, canNext }) {
  const btnClass = (enabled) =>
    `w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
      enabled
        ? darkMode
          ? "border-neutral-600 text-neutral-300 hover:bg-neutral-800"
          : "border-neutral-300 text-neutral-600 hover:bg-neutral-50"
        : darkMode
          ? "border-neutral-800 text-neutral-700 cursor-not-allowed"
          : "border-neutral-100 text-neutral-300 cursor-not-allowed"
    }`;

  return (
    <div className="flex items-center justify-between mb-6">
      <h2
        className={`text-xl font-light tracking-tight ${
          darkMode ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={!canPrev}
          className={btnClass(canPrev)}
        >
          <ChevronLeft size={14} />
        </button>
        <button
          onClick={onNext}
          disabled={!canNext}
          className={btnClass(canNext)}
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default SectionHeader;
