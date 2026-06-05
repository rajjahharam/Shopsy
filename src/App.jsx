import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import { useEffect, useState } from "react";
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
  return (
    <div>
      <div
        className={
          darkMode
            ? "bg-gray-900 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <Navbar
          cartCount={cart.length}
          toggleCart={() => setShowCart(!showCart)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        {showCart && (
          <Cart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeFromCart={removeFromCart}
          />
        )}
        <h2>Total Items: {cart.length}</h2>
        <SearchBar search={search} setSearch={setSearch} />
        <h2>{search}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <CategoryFilter
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
      </div>
    </div>
  );
}
export default App;
