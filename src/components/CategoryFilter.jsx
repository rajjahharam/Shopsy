function CategoryFilter({ categories, category, setCategory }) {
  return (
    <div className="flex gap-2 my-4">
      {categories.map((category) => (
        <button
          className="bg-blue-300 text-sm border px-3 py-1 m-1 rounded"
          key={category}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
      <h2>Selected Category: {category}</h2>
    </div>
  );
}
export default CategoryFilter;
