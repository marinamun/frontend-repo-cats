import { Link } from "react-router-dom";
import "../App.css";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white rounded">
      <div className="container-fluid">
        <Link to={`/cats`}>
          {" "}
          <img
            src="https://logowik.com/content/uploads/images/cute-cat-clipart712.logowik.com.webp"
            style={{ width: "60px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/cats"
                className="nav-link"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Buy a cat
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Sellyourcat"
                className="nav-link"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Sell your cat
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Our story
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Login"
                className="nav-link"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shopping-cart"
                className="nav-link"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Shopping cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
