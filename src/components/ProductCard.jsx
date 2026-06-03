import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded-lg p-4 m-1">
      <div className="text-center">
        <img
          src={product.image}
          alt={product.name}
          className="mb-2 w-full h-48 object-cover"
        />
        <h1>{product.name}</h1>
        <h1>{product.category}</h1>
        <h1>${product.price}</h1>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 text-white rounded-lg p-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
