import React from "react";

function Cart({ cart, increaseQty, decreaseQty, removeFromCart }) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Products:{cart.length}</p>
      {cart.map((item) => {
        return (
          <div key={item.id} className="border p-3 rounded mb-2">
            <p>{item.name}</p>
            <button onClick={increaseQty(item.id)}>+</button>
            <p>Qty:{item.qty}</p>
            <button>-</button>
            <button>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
