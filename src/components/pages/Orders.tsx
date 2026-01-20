
import type { OrderType } from "../../interfaces/OrderType";

function Orders() {
  const orders: OrderType[] = JSON.parse(
    localStorage.getItem("orders_v1") || "[]"
  );

  if (orders.length === 0)
    return (
      <div className="container py-2">
        <h2>Orders</h2>
        <p>No orders available.</p>
      </div>
    );
  return (
    <div className="container py-2">
      {orders.map((o) => (
        <div key={o.id} className="card">
          <h3>Order #{o.id}</h3>
          <p>Total: ${o.total}</p>
          <small>{o.createdAt}</small>
        </div>
      ))}
    </div>
  );
}

export default Orders;
