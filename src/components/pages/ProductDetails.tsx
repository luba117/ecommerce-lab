import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { type Product } from "../../interfaces/Product";

function ProductDetails() {
  const { id } = useParams();
  const { addToCartItem } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);
  const [search, setSearch]= useState("");

  useEffect(() => {

  }, [search, product])

  useEffect(() => {
    setError(false);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch product");
        return r.json();
      })
      .then((data) => setProduct(data))
      .catch(() => {
        setError(true);
        setProduct(null);
      });
  }, [id]);

  if (error) {
    return <div className="container mt-4">Product not found.</div>;
  }

  if (!product) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row border border-primary rounded p-3">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">
            {product.brand} - {product.category}
          </p>
          <h4 className="text-danger">${product.price}</h4>
          <p>{product.description}</p>

          <div className="d-flex gap-2">
            {" "}
            <button
              className="btn btn-primary"
              onClick={() => addToCartItem(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails
