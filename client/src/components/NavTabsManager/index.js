import React from "react";
import { Link } from "react-router-dom";

function NavTabsManager() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/manager"
          className={window.location.pathname === "/manager" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/charts"
          className={window.location.pathname === "/charts" ? "nav-link active" : "nav-link"}
        >
          Analytics
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/editquiz"
          className={window.location.pathname === "/editquiz" ? "nav-link active" : "nav-link"}
        >
          Edit Quiz
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/editresources"
          className={window.location.pathname === "/editresources" ? "nav-link active" : "nav-link"}
        >
          Edit Study Plan
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profilemanager"
          className={window.location.pathname === "/profilemanager" ? "nav-link active" : "nav-link"}
        >
          Profile
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
          to="/help"
          className={window.location.pathname === "/help" ? "nav-link active" : "nav-link"}
        >
          Help
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
}

export default NavTabsManager;
