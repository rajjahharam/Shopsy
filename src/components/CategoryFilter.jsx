function CategoryFilter({ categories, category, setCategory }) {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8 text-center">
      {/* Filter Row Horizontal Line Design */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {categories.map((cat) => {
          const isSelected = cat === category;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition-all duration-200 border ${
                isSelected
                  ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white"
                  : "bg-transparent text-neutral-500 border-neutral-200 hover:text-neutral-900 hover:border-neutral-400 dark:border-neutral-800 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {category && (
        <p className="text-xs font-light text-neutral-400 tracking-wide mt-2">
          Viewing items in{" "}
          <span className="font-medium text-neutral-600 dark:text-neutral-300 uppercase">
            {category}
          </span>
        </p>
      )}
    </div>
  );
}

export default CategoryFilter;
