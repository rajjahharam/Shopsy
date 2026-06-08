import React from "react";

function Cart({ cart, increaseQty, decreaseQty, removeFromCart }) {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-neutral-900 dark:text-white">
      {/* Header Summary Row */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6">
        <h1 className="text-2xl font-light uppercase tracking-wider">
          Shopping Cart
        </h1>
        <p className="text-xs text-neutral-400 tracking-wide mt-1">
          You currently have <span className="font-bold">{cart.length}</span>{" "}
          unique items in your bag.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-400 font-light tracking-wide">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Cart Item Loop */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-900"
            >
              {/* Left Details Panel */}
              <div className="flex-1 pr-4">
                <h3 className="text-sm font-normal text-neutral-800 dark:text-neutral-200">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  ${item.price} each
                </p>

                {/* Trash Trigger Action */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[11px] font-bold text-amber-800 dark:text-amber-500 uppercase tracking-widest hover:underline mt-2.5 block"
                >
                  Remove
                </button>
              </div>

              {/* Right Incremental Quantity Panel */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 text-sm font-light text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xs font-medium px-1 text-neutral-800 dark:text-neutral-200 w-6 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 text-sm font-light text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal Calculation Node */}
                <div className="text-sm font-medium text-right w-20">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            </div>
          ))}

          {/* Checkout Total Drawer Summary Card */}
          <div className="bg-neutral-50 dark:bg-neutral-900 p-6 mt-8 border border-neutral-100 dark:border-neutral-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Estimated Total:
              </span>
              <span className="text-xl font-light tracking-tight">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs font-bold uppercase tracking-widest py-4 transition-colors duration-300">
              Proceed to Secure Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
