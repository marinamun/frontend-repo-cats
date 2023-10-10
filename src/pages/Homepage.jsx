import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <Link
        className="homepage-link"
        to="/cats"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        Buy a cat
      </Link>
      <Link
        className="homepage-link"
        to="/Sellyourcat"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        Sell your cat
      </Link>
      <Link
        to="/about"
        className="homepage-link"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        Our story
      </Link>
      <Link
        className="homepage-link"
        to="/Login"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        Login
      </Link>
      <Link
        className="homepage-link"
        to="/shopping-cart"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        Shopping cart
      </Link>
    </>
  );
}
export default Homepage;
