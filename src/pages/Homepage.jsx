import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="left">
        <img
          src="https://media3.giphy.com/media/MWSRkVoNaC30A/giphy.gif?cid=ecf05e47lh4f4mxks4glot8sp986j4dpvjlozbduyh4tjsjc&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          className="gif"
        />
      </div>
      <div className="right">
        <h1>Welcome to CatMarket</h1>

        <h3>Are you allergic to your cat? Are you lonely?</h3>
        <p>
          <strong>CatMarket</strong> solves your problems😻
        </p>
        <Link to="/cats">
          <button className="homepage-button">Have a look at our cats</button>
        </Link>
      </div>
    </div>
  );
}
export default Homepage;
