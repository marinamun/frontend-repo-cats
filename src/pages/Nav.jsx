import { NavLink } from "react-router-dom";
import "../pages/Nav.css";

export const Nav = () => {
  return (
    <div className="navbar-container">
      <button
        class="navbar-toggler"
        
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar navbar-expand-lg bg-white rounded nav">
        <NavLink to={`/`} activeClassName="active">
          <img
            src="https://logowik.com/content/uploads/images/cute-cat-clipart712.logowik.com.webp"
            style={{ width: "60px" }}
          />
        </NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/cats"
              className="nav-item"
              activeClassName="active"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              Buy a cat
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Sellyourcat"
              className="nav-item"
              activeClassName="active"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              Sell your cat
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-item"
              activeClassName="active"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              Our story
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Login"
              className="nav-item"
              activeClassName="active"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shopping-cart"
              className="nav-item"
              activeClassName="active"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              Shopping cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
