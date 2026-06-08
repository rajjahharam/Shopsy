import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import { useEffect, useState } from "react";
import { X } from "lucide-react"; // Imported for a clean cart closing action

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (!existingItem) {
      setCart([...cart, { ...product, qty: 1 }]);
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      })
      .filter((item) => item.qty > 0);
    setCart(updatedCart);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Helper variable to calculate total numeric quantity for the Navbar
  const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode
          ? "bg-neutral-950 text-neutral-100"
          : "bg-white text-neutral-900"
      }`}
    >
      {/* 1. Navbar */}
      <Navbar
        cartCount={totalCartItems}
        toggleCart={() => setShowCart(!showCart)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* 2. Hero Editorial Banner Showcase */}
      <section className="relative w-full h-[460px] bg-neutral-100 dark:bg-neutral-900 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1920"
            alt="Artisan Background"
            className="w-full h-full object-cover brightness-90 dark:brightness-50"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div
            className={`max-w-md p-8 sm:p-12 shadow-sm border ${
              darkMode
                ? "bg-neutral-950/90 border-neutral-800"
                : "bg-white/95 border-neutral-100"
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-700 block mb-2">
              Artisan Crafted Spaces
            </span>
            <h2 className="text-3xl font-light tracking-tight mb-4">
              Handmade Beauty <br />
              <span className="font-normal">For Modern Homes</span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
              Explore custom ceramics, minimalist styling additions, and unique
              artwork forged by global creators.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Controls Layout Hub (Search & Filters) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/* 4. Products Catalog Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-6">
        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-4 mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Showing {filteredProducts.length} Products
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-sm font-light text-neutral-400">
              No pieces match your current criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </main>

      {/* 5. Elegant Sliding Drawer/Modal Cart Architecture */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Blur Backdrop Trigger */}
          <div
            className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowCart(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div
              className={`w-screen max-w-md border-l shadow-2xl flex flex-col ${
                darkMode
                  ? "bg-neutral-950 border-neutral-800"
                  : "bg-white border-neutral-100"
              }`}
            >
              {/* Modal Closing Top Header */}
              <div className="px-6 py-5 border-b border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Your Selection
                </span>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  aria-label="Close cart"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Injected Cart Items Layout Wrapper */}
              <div className="flex-1 overflow-y-auto">
                <Cart
                  cart={cart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeFromCart={removeFromCart}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
