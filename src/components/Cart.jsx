import React from "react";

function Cart({ cart, increaseQty, decreaseQty, removeFromCart }) {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Products: {cart.length}</p>
      <h2>Total:{total}</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => {
          return (
            <div key={item.id} className="border p-3 rounded mb-2">
              <p>{item.name}</p>

              <button onClick={() => increaseQty(item.id)}>+</button>

              <p>Qty: {item.qty}</p>

              <button onClick={() => decreaseQty(item.id)}>-</button>
              <br />

              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Cart;
