import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/landingpage"
          className={window.location.pathname === "/landingpage" ? "nav-link active" : "nav-link"}
        >
          LandingPage
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/home"
          className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
        >
          HomePage
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/charts"
          className={window.location.pathname === "/charts" ? "nav-link active" : "nav-link"}
        >
          Charts
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/manager"
          className={window.location.pathname === "/manager" ? "nav-link active" : "nav-link"}
        >
          Manager
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          Profile
      </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/quiz"
          className={window.location.pathname === "/quiz" ? "nav-link active" : "nav-link"}
        >
          Quiz
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/books"
          className={window.location.pathname === "/googlebook" ? "nav-link active" : "nav-link"}
        >
          Book
            </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
