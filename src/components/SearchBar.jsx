function SearchBar({ search, setSearch }) {
  return (
    <div>
      <input
        className="border-2 rounded-2xl p-1"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
