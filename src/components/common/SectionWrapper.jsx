import React from "react";

/**
 * SectionWrapper
 * Reused by: FeaturedProducts, LatestBlog (and any future sections)
 * Handles: border-t, vertical padding, max-width centering, dark mode border color.
 *
 * Props:
 *   darkMode   — boolean
 *   children   — React nodes
 *   className  — optional extra classes on the outer section tag
 */
function SectionWrapper({ darkMode, children, className = "" }) {
  return (
    <section
      className={`py-14 border-t ${
        darkMode ? "border-neutral-800" : "border-neutral-100"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default SectionWrapper;
