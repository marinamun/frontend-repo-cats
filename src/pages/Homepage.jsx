import { Link } from "react-router-dom";
<<<<<<< HEAD
import "./Homepage.css";
=======
import "./Homepage.css"
>>>>>>> addallcatspage

function Homepage() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <Link className="homepage-link" to="/cats">
        ✨Click here to see all the cats
      </Link>
      <Link className="homepage-link" to="/Chart">
        Home
      </Link>
      <Link className="homepage-link" to="/Login">
        Login
      </Link>
      <Link className="homepage-link" to="/Sellyourcat">
        Sell your cat
      </Link>
>>>>>>> addallcatspage
    </>
  );
}
export default Homepage;
