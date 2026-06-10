import React from "react";

const categoriesData = [
  {
    id: 1,
    name: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600",
    count: "24 items",
  },
  {
    id: 2,
    name: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600",
    count: "18 items",
  },
  {
    id: 3,
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600",
    count: "12 items",
  },
  {
    id: 4,
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600",
    count: "35 items",
  },
];

function ShopByCategory({ darkMode, setCategory }) {
  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    // Smooth scroll down directly into the filtered Catalog view container
    const catalogSection = document.getElementById("catalog-section");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-xl font-light uppercase tracking-[0.25em] mb-2">
          Shop By Category
        </h2>
        <div className="h-0.5 w-12 bg-amber-700 mx-auto" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categoriesData.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.name)}
            className="group relative h-72 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer"
          >
            {/* Background Image Layer */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 dark:brightness-75"
            />

            {/* Dark Overlay Frame */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300" />

            {/* Content Labels */}
            <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col">
              <h3 className="text-sm font-medium uppercase tracking-widest mb-0.5">
                {cat.name}
              </h3>
              <span className="text-[11px] text-neutral-300 font-light tracking-wide">
                {cat.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategory;
