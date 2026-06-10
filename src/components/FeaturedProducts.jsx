import React, { useState } from "react";
import { Heart, Star } from "lucide-react";
import { toast } from "react-toastify";
import SectionHeader from "./common/SectionHeader";
import SectionWrapper from "./common/SectionWrapper";
import useCarousel from "./common/useCarousal";

// Expanded cards layout configuration array so it scrolls left and right cleanly
const featuredProducts = [
  {
    id: 101,
    name: "Handwoven Ceramic Vase",
    price: 85,
    originalPrice: 95,
    discount: 11,
    rating: 4,
    image: "https://picsum.photos/seed/vase-feat/300/380",
    category: "Home Decor",
  },
  {
    id: 102,
    name: "Artisan Wooden Bowl",
    price: 60,
    originalPrice: 65,
    discount: 8,
    rating: 5,
    image: "https://picsum.photos/seed/bowl-feat/300/380",
    category: "Kitchen",
  },
  {
    id: 103,
    name: "Minimalist Desk Lamp",
    price: 120,
    originalPrice: null,
    discount: null,
    rating: 4,
    image: "https://picsum.photos/seed/lamp-feat/300/380",
    category: "Electronics",
  },
  {
    id: 104,
    name: "Linen Tote Bag",
    price: 45,
    originalPrice: 48,
    discount: 6,
    rating: 3,
    image: "https://picsum.photos/seed/tote-feat/300/380",
    category: "Fashion",
  },
  {
    id: 105,
    name: "Copper Pour-Over Set",
    price: 95,
    originalPrice: null,
    discount: null,
    rating: 5,
    image: "https://picsum.photos/seed/copper-feat/300/380",
    category: "Kitchen",
  },
  {
    id: 106,
    name: "Yoga Block Set",
    price: 35,
    originalPrice: 40,
    discount: 13,
    rating: 4,
    image: "https://picsum.photos/seed/yoga-feat/300/380",
    category: "Sports",
  },
  {
    id: 107,
    name: "Minimalist Stoneware Plate Set",
    price: 74,
    originalPrice: 85,
    discount: 12,
    rating: 5,
    image: "https://picsum.photos/seed/plate-feat/300/380",
    category: "Kitchen",
  },
  {
    id: 108,
    name: "Leather Cord Organizer Travel Wrap",
    price: 28,
    originalPrice: null,
    discount: null,
    rating: 4,
    image: "https://picsum.photos/seed/wrap-feat/300/380",
    category: "Fashion",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mt-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={11}
          className={
            star <= rating
              ? "text-amber-400 fill-amber-400"
              : "text-neutral-300"
          }
        />
      ))}
    </div>
  );
}

function FeaturedProducts({ onAddToCart, darkMode }) {
  const {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    updateScrollButtons,
    scrollLeft,
    scrollRight,
  } = useCarousel(240); // Matches individual box grid widths for accurate viewport moving offsets

  const [liked, setLiked] = useState({});
  const [addingIds, setAddingIds] = useState({});

  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleAddToCart = (product) => {
    if (addingIds[product.id]) return;

    onAddToCart(product);
    setAddingIds((prev) => ({ ...prev, [product.id]: true }));

    const cleanName = product.name.replace(/['"区域“”]/g, "");
    toast.success(`${cleanName} added to cart.`, {
      style: { backgroundColor: "#171717", color: "#fff" },
    });

    setTimeout(() => {
      setAddingIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <SectionWrapper darkMode={darkMode}>
      <SectionHeader
        title="Featured Products"
        darkMode={darkMode}
        onPrev={scrollLeft}
        onNext={scrollRight}
        canPrev={canScrollLeft}
        canNext={canScrollRight}
      />

      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {featuredProducts.map((product) => {
          const isAdding = addingIds[product.id];
          return (
            <div
              key={product.id}
              className={`shrink-0 w-55 border rounded-sm overflow-hidden group ${
                darkMode
                  ? "border-neutral-800 bg-neutral-900"
                  : "border-neutral-200 bg-white"
              }`}
            >
              <div className="relative w-full h-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-[#8a8a6a] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                    -{product.discount}%
                  </span>
                )}
                <button
                  onClick={() => toggleLike(product.id)}
                  className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                    darkMode
                      ? "bg-neutral-800 hover:bg-neutral-700"
                      : "bg-white hover:bg-neutral-50"
                  }`}
                >
                  <Heart
                    size={13}
                    className={
                      liked[product.id]
                        ? "fill-red-500 text-red-500"
                        : "text-neutral-400"
                    }
                  />
                </button>
              </div>

              <div className="p-3">
                <p
                  className={`text-xs font-light leading-snug line-clamp-2 mb-1 ${darkMode ? "text-neutral-200" : "text-neutral-800"}`}
                >
                  {product.name}
                </p>
                <StarRating rating={product.rating} />
                <div className="flex items-center gap-2 mt-2">
                  {product.originalPrice && (
                    <span className="text-xs text-neutral-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span
                    className={`text-sm font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`mt-3 w-full text-[11px] font-bold uppercase tracking-widest py-2.5 border transition-colors duration-200 cursor-pointer ${
                    isAdding
                      ? "border-[#8a8a6a] text-[#8a8a6a]"
                      : darkMode
                        ? "border-neutral-600 text-neutral-300 hover:bg-white hover:text-neutral-900 hover:border-white"
                        : "border-neutral-300 text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
                  }`}
                >
                  {isAdding ? "Added to Cart ✓" : "Add To Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default FeaturedProducts;
