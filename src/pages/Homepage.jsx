import { Link } from "react-router-dom";
import "./Homepage.css"

function Homepage() {
  return (
    <>
      <Link className="homepage-link" to="/cats">
        ✨Click here to see all the cats
      </Link>
      <Link className="homepage-link" to="/Chart">
        Home
      </Link>
      <Link className="homepage-link" to="/Login">
        Login
      </Link>

      
    </>
  );
}
export default Homepage;
