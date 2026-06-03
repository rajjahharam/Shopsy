import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
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
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (item.qty === 1) {
          return item;
        } else {
          return { ...item, qty: item.qty - 1 };
        }
      }
      return item;
    });

    setCart(updatedCart);
  };
  return (
    <div>
      <Navbar
        cartCount={cart.length}
        toggleCart={() => setShowCart(!showCart)}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
