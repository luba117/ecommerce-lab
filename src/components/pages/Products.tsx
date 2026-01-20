import { useEffect, useState } from "react";
import { type Product } from "../../interfaces/Product";
import axios from "axios";
import ProductCard from "../ProductCard";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products?limit=20");
      const data: Product[] = res.data.products || [];

      setProducts(data);
      setFiltered(data);
    } catch (err) {
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);
  useEffect(() => {
    const result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLocaleLowerCase()),
    );
    setFiltered(result);
  }, [search, products]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Products</h3>
        <input
          type="text"
          className="form-control w-25"
          placeholder="search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading && (
        <div className="text-center mt-4">
          <div className="spinner-border"></div>
          <p>Loading...</p>
        </div>
      )}

      <div className="row g-3">
        {filtered.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
        {!loading && filtered.length === 0 && (
          <p className="text-center mt-4">No products found</p>
        )}
      </div>
    </div>
  );
}

export default Products;
