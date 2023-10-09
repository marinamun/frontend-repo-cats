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
        to="/Chart"
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
    </>
  );
}
export default Homepage;
