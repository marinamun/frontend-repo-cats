import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div>
        <h2>Our homepage's links:</h2>
        <Link to="/cats">✨Click here to see all the cats</Link>
      </div>
    </>
  );
}
export default Homepage;
