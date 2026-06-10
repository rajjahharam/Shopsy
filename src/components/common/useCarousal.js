import { useRef, useState } from "react";

/**
 * useCarousel
 * Shared hook for all horizontal carousel components.
 * Returns: scrollRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight
 */

function useCarousel(scrollAmount = 320) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 350);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 350);
  };

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    updateScrollButtons,
    scrollLeft,
    scrollRight,
  };
}

export default useCarousel;
