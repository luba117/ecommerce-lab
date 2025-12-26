import React, { useEffect, useState } from "react";
import type { Product } from "../../interfaces/Product";
import axios from "axios";
import { useCart } from "../../hooks/useCart";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCartItem } = useCart();

  const loadProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=12");
      setProducts(res.data.products);
      setLoading(true);
    } catch (err) {
      console.error("Failed to load products:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    <div className="d-flex justify-context-center mt-5">
      <h2>Loading Products...</h2>
    </div>;
  }

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Latest Products</h2>
      <div className="row g-4">
        {products.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.thumbnail}
                className="card-img-top w-100"
                alt={item.title}
                style={{ height: "180px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="cart-title">{item.title}</h5>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  {item.description.substring(0, 60)}...
                </p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <h5 className="text-success fw-bold">$ {item.price}</h5>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => addToCartItem(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
