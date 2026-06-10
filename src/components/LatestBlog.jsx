import React from "react";
import { Clock } from "lucide-react";
import SectionHeader from "./common/SectionHeader";
import SectionWrapper from "./common/SectionWrapper";
import useCarousel from "./common/useCarousal";

const blogPosts = [
  {
    id: 1,
    title: "How to Style Minimalist Ceramics in Your Home",
    excerpt:
      "Discover the art of pairing handcrafted ceramics with modern interiors to create spaces that feel both warm and intentional.",
    date: "May 12, 2025",
    image: "https://picsum.photos/seed/blog-ceramic/600/400",
  },
  {
    id: 2,
    title: "The Rise of Slow-Made Goods in a Fast World",
    excerpt:
      "Artisan-made products are having a moment. We explore why consumers are choosing craft over convenience.",
    date: "April 28, 2025",
    image: "https://picsum.photos/seed/blog-slow/600/400",
  },
  {
    id: 3,
    title: "5 Ways to Build a Sustainable Wardrobe",
    excerpt:
      "From natural fibres to local makers, building a wardrobe that lasts doesn't have to be complicated.",
    date: "April 10, 2025",
    image: "https://picsum.photos/seed/blog-wardrobe/600/400",
  },
  {
    id: 4,
    title: "Kitchen Tools Worth Investing In",
    excerpt:
      "Quality over quantity — the kitchen essentials that professional chefs and home cooks both swear by.",
    date: "March 25, 2025",
    image: "https://picsum.photos/seed/blog-kitchen/600/400",
  },
];

function LatestBlog({ darkMode }) {
  const {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    updateScrollButtons,
    scrollLeft,
    scrollRight,
  } = useCarousel(400);

  return (
    <SectionWrapper darkMode={darkMode}>
      <SectionHeader
        title="Latest Blog"
        darkMode={darkMode}
        onPrev={scrollLeft}
        onNext={scrollRight}
        canPrev={canScrollLeft}
        canNext={canScrollRight}
      />

      <div
        className={`border rounded-sm p-5 ${darkMode ? "border-neutral-800" : "border-neutral-200"}`}
      >
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex gap-5 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[360px] group cursor-pointer"
            >
              <div className="w-full h-[220px] overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3">
                <div
                  className={`flex items-center gap-1.5 text-xs mb-2 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                >
                  <Clock size={12} />
                  <span>{post.date}</span>
                </div>
                <h3
                  className={`text-sm font-normal leading-snug mb-1.5 group-hover:underline underline-offset-2 ${darkMode ? "text-neutral-200" : "text-neutral-800"}`}
                >
                  {post.title}
                </h3>
                <p
                  className={`text-xs font-light leading-relaxed line-clamp-2 ${darkMode ? "text-neutral-500" : "text-neutral-500"}`}
                >
                  {post.excerpt}
                </p>
                <button
                  className={`mt-3 text-xs font-semibold underline underline-offset-2 transition-colors ${darkMode ? "text-neutral-300 hover:text-white" : "text-neutral-700 hover:text-neutral-900"}`}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default LatestBlog;
