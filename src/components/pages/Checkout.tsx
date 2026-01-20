import React from "react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import type { OrderType } from "../../interfaces/OrderType";

const Checkout: React.FC = () => {
  const { products, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const placeOrder = () => {
    // Get previous orders or empty array
    const orders = JSON.parse(localStorage.getItem("orders_v1") || "[]");

    // Create new order
    const order: OrderType = {
      id: Date.now(),
      items: products,
      total: cartTotal,
      createdAt: new Date().toISOString(),
    };

    // Push and save
    orders.push(order);
    localStorage.setItem("orders_v1", JSON.stringify(orders));

    // Clear cart and navigate
    clearCart();
    navigate("/orders");
  };

  if (products.length === 0)
    return (
      <div className="container py-2">
        <h2>Checkout</h2>
        <p>No items in the cart.</p>
      </div>
    );

  return (
    <div className="container py-2">
      <h2>Checkout</h2>{" "}
      <h3>Total: ${cartTotal.toFixed(2)}</h3>
      <hr/>
      <button className="btn btn-success py-2" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
