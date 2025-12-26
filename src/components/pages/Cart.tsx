import React from "react";
import { useCart } from "../../hooks/useCart";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../CartItem";

function Cart() {
  const { products, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (products.length === 0)
    return (
      <div>
        <h2>The cart is empty</h2>
        <p>
          <Link to="/products">Browse</Link>
        </p>
      </div>
    );

  return (
    <div>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="d-flex flex-column align-items-end me-4">
        <h3 className="pt-3 mb-0">Total: ${cartTotal.toFixed(2)}</h3><br/>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
