import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount, toggleCart }) {
  return (
    <div className="flex justify-between items-center p-3 border-b">
      <h1 className="text-3xl">Shopsy</h1>
      <div onClick={toggleCart} className="flex items-center gap-2">
        <FaShoppingCart size={20} />
        <p className="bg-red-500 text-white rounded-full px-2 py-1 text-s">
          {cartCount}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
