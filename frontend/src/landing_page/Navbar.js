import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light  border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand"  aria-current="page" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt=" logo"
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
          <form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  aria-current="page" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  aria-current="page" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
