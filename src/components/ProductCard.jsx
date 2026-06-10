import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function ProductCard({ product, onAddToCart }) {
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    let timer;
    if (isAdding) {
      timer = setTimeout(() => {
        setIsAdding(false);
      }, 2500); // Reverts text automatically back to "Add to Cart" after 2.5 seconds
    }
    return () => clearTimeout(timer);
  }, [isAdding]);

  const handleAddToCart = () => {
    if (isAdding) return;
    onAddToCart(product);
    setIsAdding(true);

    // Toast triggers beautifully on item add success
    const cleanName = product.name.replace(/['"区域“”]/g, "");
    toast.success(`${cleanName} added to cart.`, {
      style: { backgroundColor: "#171717", color: "#fff" },
    });
  };

  return (
    <div className="group relative flex flex-col bg-transparent overflow-hidden">
      {/* Card Image Frame Container */}
      <div className="w-full aspect-4/5 bg-neutral-50 dark:bg-neutral-900 overflow-hidden relative border border-neutral-100 dark:border-neutral-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Floating Quick Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/30 via-transparent to-transparent">
          <button
            onClick={handleAddToCart}
            className={`w-full text-xs font-bold uppercase tracking-widest py-3 transition-colors duration-200 shadow-md cursor-pointer ${
              isAdding
                ? "bg-[#8a8a6a] text-white"
                : "bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900"
            }`}
          >
            {isAdding ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Item Information Typography Section */}
      <div className="mt-4 flex flex-col flex-1">
        <span className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-medium mb-1">
          {product.category}
        </span>
        <h3 className="text-sm font-light text-neutral-800 dark:text-neutral-200 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-neutral-900 dark:text-white">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
