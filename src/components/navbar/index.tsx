import { Link } from "react-router-dom";

import "./index.css";
function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
        id="navigator"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/public/vite.svg" alt="Logo" id="logoimage" />
            Coffee Brewers Site
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/src/pages/brewerwiki/"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Brewers
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <span className="navbar-text">About me</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
