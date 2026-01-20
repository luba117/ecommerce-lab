import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Navbar() {
  const { products } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-to shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          E-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            </li>
          </ul>{" "}
          <li className="nav-item active">
            <NavLink className="btn btn-outline-light" to="/cart">
              Cart ({products.length})
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
