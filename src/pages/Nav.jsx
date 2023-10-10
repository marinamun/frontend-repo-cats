import Homepage from "./Homepage";
import "../App.css";

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            😻
          </a>
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
                {/* <a className="nav-link" href="#">Link</a> */}
                <Homepage />
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ backgroundColor: "#AFEBB3", borderColor: "black" }}
              >
                Search
              </button>
              
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
