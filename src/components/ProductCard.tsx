import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import type { ProductCardProps } from "../interfaces/ProductCardProps";


const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const {addToCartItem} = useCart();

  return (
    <div className="card h-100 shadow-sm border-primary">
      <img
        className="card-img-top"
        src={product.thumbnail}
        alt={product.title}
        style={{ height: 160, objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>

        <p className="card-text text-muted small text-truncate">
          {product.description}
        </p>
        <div className="mt-auto">
          <p className="fw-bold mb-2">$ {product.price}</p>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={() => addToCartItem(product)}>
              Add to cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="btn btn-outline-secondary btn-sm"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
