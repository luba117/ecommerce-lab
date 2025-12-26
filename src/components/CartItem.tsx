import React from "react";
import type { ProductCardProps } from "../interfaces/ProductCardProps";
import { useCart } from "../hooks/useCart";

const CartItem = ({ product }: ProductCardProps) => {
  const { updateQty, removeFromCart } = useCart();
  return (
    <div className="d-flex align-items-center border-bottom py-2">
      <img
        src={product.thumbnail}
        className="me-3 rounded"
        alt={product.title}
        style={{ width: 80, height: 60, objectFit: "contain" }}
      />
      <div className="flex-grow-1">
        <h6 className="mb-1">{product.title}</h6>
        <small className="text-muted">$ {product.price} each</small>
      </div>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={() => updateQty(product.id, (product.quantity || 1) - 1)}
        >
          -
        </button>
        <span className="px-2">{product.quantity || 1}</span>
        <button
          className="btn btn-sm btn-outline-secondary ms-2"
          onClick={() => updateQty(product.id, (product.quantity || 1) + 1)}
        >
          +
        </button>
      </div>
      <div className="px-3 fw-bold">
        ${(product.price * (product.quantity || 1)).toFixed(2)}
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => removeFromCart(product.id)}
        >
          <i className="bi bi-trash"></i>

        </button>
      </div>
    </div>
  );
};

export default CartItem;
