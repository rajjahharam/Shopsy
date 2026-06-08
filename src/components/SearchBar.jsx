import React from "react";
import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full max-w-md mx-auto my-8 px-4">
      <div className="relative flex items-center">
        <input
          className="w-full bg-transparent text-sm font-light py-2 pr-8 border-b border-neutral-300 focus:border-neutral-900 dark:border-neutral-700 dark:focus:border-white outline-none transition-colors duration-300 placeholder-neutral-400"
          type="text"
          placeholder="Search items by keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          size={16}
          strokeWidth={1.5}
          className="absolute right-2 text-neutral-400 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;
